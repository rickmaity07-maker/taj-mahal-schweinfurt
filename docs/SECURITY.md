# Security and privacy

## Controls in place

| Area             | Control                                                                       | Where                      |
| ---------------- | ----------------------------------------------------------------------------- | -------------------------- |
| Transport        | HSTS (2 years, preload), `upgrade-insecure-requests`                          | `next.config.ts`           |
| XSS              | CSP: scripts, styles, fonts, images and requests only from our own origin     | `next.config.ts`           |
| Clickjacking     | `frame-ancestors 'none'`, `X-Frame-Options: DENY`                             | `next.config.ts`           |
| MIME sniffing    | `X-Content-Type-Options: nosniff`                                             | `next.config.ts`           |
| Info leakage     | `X-Powered-By` removed; strict `Referrer-Policy`; `Permissions-Policy` locked | `next.config.ts`           |
| CSRF             | API requires a same-origin `Origin` header and `application/json`            | `lib/server/handler.ts`    |
| Abuse and spam   | Per-IP rate limit, honeypot field, 16 KB body limit                           | `lib/server/handler.ts`    |
| Input validation | Type, length and format checks; control characters stripped                   | `lib/server/validation.ts` |
| Price tampering  | Prices recalculated on the server from the menu                               | `lib/server/validation.ts` |
| Email injection  | Subject and reply-to are single-line; reply-to must be a valid email          | `lib/server/notify.ts`     |
| Secrets          | API keys are server-only env vars; server code guarded with `server-only`     | `lib/server/*`             |
| Logging          | Personal data is never logged, only error status codes                        | `handler.ts`, `notify.ts`  |
| Dependencies     | `npm audit --omit=dev` runs in CI; Next.js on a patched 16.x release          | `.github/workflows/ci.yml` |

## GDPR

- No cookies, no analytics, no tracking, so no cookie banner is needed.
- Fonts are self-hosted by `next/font`; all photos are served from `public/`.
- Google Maps loads only after the visitor clicks "Load map" (§ 25 TDDDG, Art. 6(1)(a) GDPR).
- Every form has a required consent checkbox linking to the privacy policy. The rewards form asks
  for explicit consent because its legal basis is consent.
- Data minimisation: no database. Submissions are emailed and not stored by the website.
- The privacy policy (`/datenschutz`) describes this processing. Complete its `[todo]` fields.

## Known limits

- Scripts allow `'unsafe-inline'` because Next.js injects inline bootstrapping scripts and the pages
  are static. A nonce-based CSP (see the Next.js CSP guide) would make every page dynamic.
- The rate limiter trusts `x-forwarded-for`. That is correct behind Vercel or a reverse proxy that
  sets it; on a bare server, make sure the proxy overwrites the header.
- The in-memory rate limiter resets on restart and is per instance.

## Reporting a problem

Email tajmahal2022@gmail.com.
