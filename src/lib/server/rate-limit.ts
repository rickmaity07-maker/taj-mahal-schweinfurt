import 'server-only';

type Bucket = { count: number; resetAt: number };

/**
 * Fixed-window, in-memory rate limiter.
 * Good enough for a single server instance. On serverless or multiple instances,
 * swap this for a shared store (e.g. Upstash Redis) behind the same interface.
 */
export function createRateLimiter({ limit, windowMs }: { limit: number; windowMs: number }) {
  const buckets = new Map<string, Bucket>();

  return function check(key: string, now = Date.now()) {
    // Opportunistic cleanup so the map can't grow without bound.
    if (buckets.size > 5000) {
      for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
    }
    const bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      buckets.set(key, { count: 1, resetAt: now + windowMs });
      return { allowed: true, retryAfter: 0 };
    }
    bucket.count += 1;
    if (bucket.count > limit) {
      return { allowed: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
    }
    return { allowed: true, retryAfter: 0 };
  };
}
