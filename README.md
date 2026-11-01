# Taj Mahal Schweinfurt – website

Restaurant website for Taj Mahal, Am Zeughaus 28, 97421 Schweinfurt. Menu, online ordering
(pickup / delivery), table requests, contact form and a rewards sign-up.

Built with Next.js 16 (App Router), React 19 and plain CSS. No database: form submissions are
validated on the server and emailed to the restaurant.

## Quick start

```bash
npm ci
cp .env.example .env.local   # optional in development
npm run dev                  # http://localhost:3000
```

Without email settings, submissions are printed in the dev server console.

## Scripts

| Command             | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Dev server with live reload               |
| `npm run build`     | Production build                          |
| `npm start`         | Serve the production build                |
| `npm run lint`      | ESLint                                    |
| `npm run typecheck` | TypeScript, no output                     |
| `npm test`          | Unit tests (Vitest)                       |
| `npm run check`     | Lint + typecheck + tests (run before PRs) |

## Configuration

See [`.env.example`](.env.example).

| Variable               | Required in prod | Purpose                                        |
| ---------------------- | ---------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | yes              | Canonical URL for sitemap and social previews  |
| `RESEND_API_KEY`       | yes              | API key for [Resend](https://resend.com)       |
| `NOTIFY_EMAIL_TO`      | yes              | Where orders and messages go (comma-separated) |
| `NOTIFY_EMAIL_FROM`    | yes              | Sender on a domain verified in Resend          |

If email is not configured in production, the API answers `503` and the form tells the guest to call.

## Before going live

- [ ] Fill in the `[todo]` fields in `/impressum` and `/datenschutz` (owner, VAT ID, host, retention).
- [ ] Sign a data processing agreement (AVV) with the host and with Resend.
- [ ] Set the environment variables above on the host.
- [ ] Replace stock photos in `public/images/` with your own if your licence doesn't cover them.

## More

- [Architecture](docs/ARCHITECTURE.md)
- [Security and privacy](docs/SECURITY.md)
