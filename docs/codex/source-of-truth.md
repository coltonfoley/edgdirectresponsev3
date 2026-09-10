# EDG Website Source Of Truth

Verified against the repo on 2026-06-25.

## Repo Identity

- Local path: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- GitHub remote: `https://github.com/coltonfoley/edgdirectresponsev3`
- Production URL: `https://www.edgpatioshade.com`
- Active local branch during cleanup: `edg-positioning`

Verify these at the start of each work session. The current branch can change.

## Package Facts

Read `package.json` before making dependency or build assumptions.

- Runtime engine: Node `22.x`
- Framework: Next.js `16.2.9`
- React: `19.2.1`
- Styling: Tailwind CSS `4`
- Build command: `npm run build`
- Build includes image validation and gallery data generation.
- Common checks: `npm run lint`, `npm run build`, `npm run validate-images`,
  `npm run env:check`, `npm run test:e2e`, `npm run test:contrast`

## Current Integrations

- Website lead intake: `src/app/api/leads/route.ts`
- Rainmaker client: `src/lib/rainmaker-api.ts`
- Lead form client hook: `src/hooks/useLeadSubmission.ts`
- Environment shape: `.env.example`
- Analytics, Speed Insights, and GTM: `src/app/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Redirects and image domains: `next.config.ts`
- Image registry: `src/lib/images.ts`

## Do Not Trust Stale Inventories

Older agent and audit archives have been removed from the active working tree.
Use source files, current commands, and the docs in `docs/codex/` instead of
old page-count or provider-choice notes.

Useful source checks:

```bash
find src/app/service-areas -name page.tsx | sort
rg -n "RAINMAKER|RESEND|Supabase|supabase" package.json .env.example src
rg -n "metadata|canonical|sitemap|alternates" src/app src/lib
```

## What This Repo Is For

This is the marketing and SEO website for EDG Patio & Shade. It is not the Ops
Portal and it is not Rainmaker. It captures demand, presents EDG's product and
market positioning, and hands website leads into Rainmaker.

## Public Pricing Rule

Public pages, metadata, JSON-LD, and pull-request text may use broad,
evidence-backed planning bands, but must never publish actual customer or
project totals, quote line amounts, exact calculated project rates, or private
quote details. Keep private source evidence outside the public repository.

## Sales Positioning

- EDG is model agnostic. General planning guides should recommend around project needs rather than a named model.
- EDG does not sell StruXure. Its dealers are competitors; StruXure content must clearly present competitor comparison and identify EDG quote requests as alternatives.

- Competitor comparisons must serve the homeowner: do not publish competitor quotes, contracts, pricing examples, or internal sales commentary. General guides should not become named-model showcases.
