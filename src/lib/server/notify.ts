import 'server-only';

export type Notification = {
  subject: string;
  text: string;
  replyTo?: string;
};

export class DeliveryNotConfiguredError extends Error {}

/** Escape a value for safe use inside plain-text email bodies and headers. */
export function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

/**
 * Sends a notification email to the restaurant.
 * Provider: Resend (https://resend.com) via its REST API when RESEND_API_KEY is set.
 * In development without a key, the message is printed to the server console instead.
 */
export async function notifyRestaurant(n: Notification): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== 'production') {
      console.info(`\n[notify:dev] ${n.subject}\n${n.text}\n`);
      return;
    }
    throw new DeliveryNotConfiguredError('Email delivery is not configured');
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()),
      subject: oneLine(n.subject).slice(0, 200),
      text: n.text,
      reply_to: n.replyTo ? oneLine(n.replyTo) : undefined,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    // Never log the request body: it contains personal data.
    throw new Error(`Email provider responded ${res.status}`);
  }
}
