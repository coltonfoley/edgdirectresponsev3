# EDG Website Source Of Truth

Verified against the repo on 2026-06-07.

## Repo Identity

- Local path: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- GitHub remote: `https://github.com/coltonfoley/edgdirectresponsev3`
- Production URL: `https://www.edgpatioshade.com`
- Active local branch during cleanup: `edg-positioning`

Verify these at the start of each work session. The current branch can change.

## Package Facts

Read `package.json` before making dependency or build assumptions.

- Runtime engine: Node `22.x`
- Framework: Next.js `16.1.6`
- React: `19.2.1`
- Styling: Tailwind CSS `4`
- Build command: `npm run build`
- Build includes image validation and gallery data generation.
- Common checks: `npm run lint`, `npm run build`, `npm run validate-images`,
  `npm run env:check`, `npm run test:e2e`

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

Older docs in `.agent-archive/2026-06-07-stale-guidance/agent` mention page
counts, removed pages, and provider choices that no longer match the repo.
Use source files and current commands instead.

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
