# EDG Patio & Shade Website

This repo is the production marketing and SEO website for EDG Patio & Shade.
It captures website demand and sends accepted leads to Rainmaker.

## Project Facts

- Framework: Next.js `16.2.9`
- React: `19.2.1`
- Node: `22.x`
- Production: `https://www.edgpatioshade.com`
- Active branch: `edg-positioning`
- Lead intake route: `/api/leads`
- Primary sales action: `Request a Quote`

Current operating guidance lives in `AGENTS.md` and `docs/codex/`.

## Local Development

Use Node 22, then install and run:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

For local lead-flow work, copy `.env.example` to `.env.local` and configure the
Rainmaker and optional Resend values you need.

## Checks

Use the narrowest check that matches the work:

```bash
npm run env:check
npm run validate-images
npm run typecheck
npm run routes:check
npm run audit:lead-instrumentation
npm run test:lead-submission
npm run lint
npm run build
```

For route and lead-path changes, run the relevant browser or Playwright checks
before publishing. Search Console analysis is available through
`npm run seo:gsc-report`; contrast checks are available through
`npm run test:contrast`.

## Lead Flow

Website forms submit to `/api/leads`. Accepted leads are validated, rate-limited,
and forwarded to Rainmaker. The website no longer stores leads in Supabase.

The standard sales path uses a short `Request a Quote` form. Pergola visitors
can also use a low-friction budget form, while the more detailed System Fit
Review remains a secondary option. Submissions carry a persistent
`submission_id`, and the `generate_lead` analytics event is emitted only after
the server confirms that Rainmaker accepted the lead.

Do not change forms, CTA query params, `/api/leads`, Rainmaker forwarding,
Resend behavior, or analytics events without verifying the full lead path.

## Publishing

Unless work is explicitly local-only or preview-only, website changes should be
committed, pushed to `origin/edg-positioning`, deployed to production, and
verified on the live site. Report local checks, pushed commit, deployment, live
response/rendering, and any Search Console follow-up as separate states.

## Cleanup Rules

Keep the working tree focused on current website truth:

- active source in `src/`
- active public media in `public/`
- active docs in `docs/codex/`
- current build and validation scripts in `scripts/`

Generated local folders such as `.next/`, `test-results/`, and
`.playwright-cli/` are ignored and can be recreated.
