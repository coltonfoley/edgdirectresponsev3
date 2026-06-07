# EDG Website SEO Rules

Verified against the repo and recent EDG workflow on 2026-06-07.

## Source Files To Inspect First

- Route pages: `src/app/**/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Shared schema helpers: `src/lib/schema.ts`
- Root metadata and organization schema: `src/app/layout.tsx`
- Redirects: `next.config.ts`
- Internal links and navigation: route components plus layout components

## Rules

- Do not put `'use client'` in `page.tsx` files that need metadata.
- Keep page metadata, canonical URLs, Open Graph data, and JSON-LD intact unless
  the change is explicitly about those fields.
- Preserve internal links that support a cluster unless the page strategy is
  changing intentionally.
- For service-area work, count current pages from `src/app/service-areas`.
  Do not use old prose page counts.
- Keep Florida/Sanibel/coastal positioning distinct from Illinois and Wisconsin
  positioning.
- Do not edit Google Business Profile listings from an SEO measurement task
  unless Colton explicitly asks for that.

## Proof Layers

Do not collapse these into one vague "verified" claim:

- Local build proof: `npm run lint`, `npm run build`, and route-specific checks.
- Local browser proof: desktop and mobile render checks for changed pages.
- Deployment proof: pushed commit and Vercel deployment state.
- Live site proof: live `200`, render, canonical, sitemap, and internal links.
- Search proof: Search Console indexing, clicks, impressions, CTR, average
  position, and public search observations.

Search Console data can lag behind production changes. A live page can be
deployed correctly before Google has indexed or reprocessed it.

## Useful Checks

```bash
find src/app/service-areas -name page.tsx | sort
rg -n "alternates:|canonical|generateMetadata|metadata" src/app
rg -n "sitemap|service-areas|guides" src/app/sitemap.ts next.config.ts
```

For Sanibel-style area launches, the reusable local checker from prior work is:

```bash
node /Users/coltonfoley/.codex/skills/edg-local-seo-growth/scripts/check-area-launch.mjs --slug sanibel-outdoor-living --city "Sanibel" --product louvered-pergolas
```
