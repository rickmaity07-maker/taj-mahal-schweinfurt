import { describe, expect, it } from 'vitest';
import { createRateLimiter } from '@/lib/server/rate-limit';

describe('createRateLimiter', () => {
  it('allows up to the limit, then blocks until the window resets', () => {
    const check = createRateLimiter({ limit: 2, windowMs: 1000 });
    expect(check('a', 0).allowed).toBe(true);
    expect(check('a', 10).allowed).toBe(true);
    const blocked = check('a', 20);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfter).toBe(1);
    expect(check('b', 20).allowed).toBe(true);
    expect(check('a', 1001).allowed).toBe(true);
  });
});
