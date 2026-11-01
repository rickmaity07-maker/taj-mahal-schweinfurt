# Architecture

## Overview

```
Browser ──► Next.js (static pages) ──► HTML/CSS/JS from our own server only
   │
   └─ POST JSON ──► /api/{order,reservation,contact,rewards}
                       │  origin check → content-type → size limit → rate limit
                       │  → honeypot → validation (server-side prices) → email
                       ▼
                   Resend API ──► restaurant inbox
```

Every page is prerendered at build time. Only the four API routes run on demand.
There is no database and there are no user accounts.

## Folders

```
src/
  app/                    Routes (App Router)
    api/*/route.ts        Form endpoints, one per form, thin wrappers
    */page.tsx            Home, menu, order, gallery, events, rewards, contact, legal
    error.tsx, not-found.tsx, robots.ts, sitemap.ts
    globals.css           Design system: tokens on :root, then sections by page
  components/             UI. Files marked 'use client' run in the browser.
    useFormSubmit.ts      Shared client submit logic (JSON, field errors, dialog)
    FormBits.tsx          Field errors, honeypot, GDPR consent checkbox
    MapEmbed.tsx          Click-to-load Google Map (no request before consent)
    Motion.tsx            GSAP + ScrollTrigger motion layer (skipped for reduced motion)
    Reveal.tsx            CSS fallback reveal used when GSAP motion is off
  lib/
    site.ts               Address, phone, hours, open-now logic, reservation slots
    menu-data.ts          Menu: single source of truth for names and prices
    form-options.ts       Option lists shared by forms and server validation
    server/               Server-only code (guarded with `import 'server-only'`)
      handler.ts          createFormHandler(): the request pipeline above
      validation.ts       Per-form validators that return field errors
      rate-limit.ts       In-memory fixed-window limiter
      notify.ts           Email delivery (Resend, or console in development)
tests/                    Vitest unit tests for the server code
docs/                     This file and SECURITY.md
```

## Key decisions

- **Prices are computed on the server** from `menu-data.ts`. The browser sends only dish names
  and quantities, so a tampered request can't change a price.
- **No database.** Orders go straight to the restaurant by email. This keeps hosting simple and
  limits how much personal data we hold. If orders later need a dashboard, add a store behind
  `notifyRestaurant()` in `lib/server/notify.ts`.
- **Static CSP without nonces**, so pages stay cacheable. See `next.config.ts`.
- **Rate limiting is in memory.** Fine for one server. On serverless or several instances, swap
  `createRateLimiter` for a shared store (for example Upstash Redis) with the same interface.
- **Motion is one layer.** `Motion.tsx` targets existing class names and `data-reveal`, adds
  `.gsap` to `<html>` while active, and reverts everything on route change. Pages carry no
  animation code.
- **Plain CSS with design tokens** instead of a framework: one file, no build plugins.

## Adding a form

1. Add a validator in `lib/server/validation.ts` and tests in `tests/`.
2. Create `app/api/<name>/route.ts` with `createFormHandler({ name, validate, toNotification })`.
3. In the component, call `useFormSubmit({ endpoint: '/api/<name>', ... })` and add
   `<Honeypot />` and `<Consent />`.

## Changing the menu

Edit `src/lib/menu-data.ts`. The menu page, order picker and server price checks all read from it.
