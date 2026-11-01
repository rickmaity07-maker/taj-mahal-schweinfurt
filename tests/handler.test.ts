import { describe, expect, it } from 'vitest';
import { createFormHandler, isSameOrigin } from '@/lib/server/handler';
import { validateContact } from '@/lib/server/validation';

const handler = createFormHandler({
  name: 'test',
  validate: validateContact,
  toNotification: (m) => ({ subject: 'x', text: m.message }),
  limit: 100,
});

const req = (body: unknown, headers: Record<string, string> = {}) =>
  new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { host: 'localhost:3000', origin: 'http://localhost:3000', 'content-type': 'application/json', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });

const valid = { name: 'Jonas Weber', email: 'jonas@example.de', subject: 'general', message: 'Is there parking nearby?', consent: true };

describe('form handler', () => {
  it('blocks cross-site requests', async () => {
    expect((await handler(req(valid, { origin: 'https://evil.example' }))).status).toBe(403);
    expect(isSameOrigin(new Request('http://localhost/', { headers: { host: 'localhost' } }))).toBe(false);
  });

  it('rejects non-JSON and malformed bodies', async () => {
    expect((await handler(req(valid, { 'content-type': 'text/plain' }))).status).toBe(415);
    expect((await handler(req('{nope'))).status).toBe(400);
    expect((await handler(req([1, 2]))).status).toBe(400);
  });

  it('returns field errors for invalid input', async () => {
    const res = await handler(req({ ...valid, email: 'x' }));
    expect(res.status).toBe(422);
    expect((await res.json()).fields.email).toBeDefined();
  });

  it('silently accepts honeypot submissions without delivering', async () => {
    expect((await handler(req({ website: 'spam.biz' }))).status).toBe(200);
  });

  it('delivers valid submissions', async () => {
    expect((await handler(req(valid))).status).toBe(200);
  });
});
