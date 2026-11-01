import 'server-only';
import { NextResponse } from 'next/server';
import { DeliveryNotConfiguredError, notifyRestaurant, type Notification } from './notify';
import { createRateLimiter } from './rate-limit';
import type { Result } from './validation';

const MAX_BODY_BYTES = 16 * 1024;

type Options<T> = {
  name: string;
  validate: (raw: Record<string, unknown>) => Result<T>;
  toNotification: (data: T) => Notification;
  limit?: number;
  windowMs?: number;
};

const json = (status: number, body: Record<string, unknown>, headers?: HeadersInit) =>
  NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });

function clientKey(req: Request) {
  const fwd = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return fwd || req.headers.get('x-real-ip') || 'unknown';
}

/** Rejects cross-site posts. Browsers always send Origin on POST fetches. */
export function isSameOrigin(req: Request) {
  const origin = req.headers.get('origin');
  if (!origin) return false;
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host');
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/** Builds a POST handler with origin check, size limit, rate limit, honeypot, validation and delivery. */
export function createFormHandler<T>({ name, validate, toNotification, limit = 5, windowMs = 10 * 60_000 }: Options<T>) {
  const rateLimit = createRateLimiter({ limit, windowMs });

  return async function POST(req: Request) {
    if (!isSameOrigin(req)) return json(403, { error: 'Forbidden' });

    if (!req.headers.get('content-type')?.includes('application/json')) {
      return json(415, { error: 'Unsupported content type' });
    }

    const declared = Number(req.headers.get('content-length') ?? 0);
    if (declared > MAX_BODY_BYTES) return json(413, { error: 'Request too large' });

    const rl = rateLimit(`${name}:${clientKey(req)}`);
    if (!rl.allowed) {
      return json(429, { error: 'Too many requests. Please wait a few minutes or call us.' }, { 'Retry-After': String(rl.retryAfter) });
    }

    let raw: unknown;
    try {
      const text = await req.text();
      if (text.length > MAX_BODY_BYTES) return json(413, { error: 'Request too large' });
      raw = JSON.parse(text);
    } catch {
      return json(400, { error: 'Invalid request' });
    }
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return json(400, { error: 'Invalid request' });
    const body = raw as Record<string, unknown>;

    // Honeypot: real visitors never see or fill this field. Pretend success so bots learn nothing.
    if (typeof body.website === 'string' && body.website.length > 0) return json(200, { ok: true });

    const result = validate(body);
    if (!result.ok) return json(422, { error: 'Please check the highlighted fields.', fields: result.errors });

    try {
      await notifyRestaurant(toNotification(result.data));
    } catch (err) {
      const configured = !(err instanceof DeliveryNotConfiguredError);
      console.error(`[${name}] delivery failed:`, err instanceof Error ? err.message : 'unknown error');
      return json(configured ? 502 : 503, { error: 'We couldn’t send that right now. Please call us on +49 9721 24747.' });
    }

    return json(200, { ok: true });
  };
}
