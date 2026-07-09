# EDG Website Design Consistency SEO Metadata Guardrail - 2026-07-09

This local guardrail records SEO, metadata, sitemap, robots, analytics, schema, and Search Console boundaries for the EDG Website design-consistency rollout.

It does not approve staging, commit, push, deploy, Search Console work, form submission, test leads, or any production mutation.

## Current Source Truth

- Root metadata and analytics owner: `src/app/layout.tsx`
- XML sitemap source: `src/app/sitemap.ts`
- Robots source: `src/app/robots.ts`
- Route registry source: `src/lib/site-routes.ts`
- HTML sitemap source: `src/app/html-sitemap/page.tsx`
- Production domain: `https://www.edgpatioshade.com`
- Production state: local-only; not staged, not committed, not pushed, not deployed, and not live-verified.

## Sensitive Source Checks

Sensitive diff check:

```text
git diff --name-only -- src/app/sitemap.ts src/app/robots.ts src/app/api src/hooks/useLeadSubmission.ts src/lib/analytics.ts src/lib/rainmaker-api.ts src/app/layout.tsx src/lib/site-routes.ts src/lib/projects-data.ts src/lib/projects.ts
=> src/app/layout.tsx
=> src/lib/projects-data.ts
=> src/lib/site-routes.ts
```

Interpretation:

- `src/app/sitemap.ts` is unchanged.
- `src/app/robots.ts` is unchanged.
- `src/app/api`, `src/hooks/useLeadSubmission.ts`, `src/lib/analytics.ts`, `src/lib/rainmaker-api.ts`, and `src/lib/projects.ts` are unchanged.
- `src/app/layout.tsx` is changed only for skip-link focus styling; root metadata, organization/local-business JSON-LD, Google Tag Manager, Vercel Speed Insights, Vercel Analytics, and `LandingPageTracker` remain present.
- `src/lib/site-routes.ts` is changed for route exposure and public copy: `/showroom` is added to the Work nav group and selected route descriptions are softened. The diff does not rewrite `xmlSitemapRoutes`, sitemap generation, or route status flags.
- `src/lib/projects-data.ts` is changed only for public Wade project proof-language cleanup. It does not drive XML sitemap generation; generated project URLs still come through `getAllProjects()` from `src/lib/projects.ts`.

Metadata-bearing client-component check:

```text
rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'
=> no matches
```

This preserves the App Router metadata boundary: metadata-bearing `page.tsx` and `layout.tsx` files were not converted into client components.

## Reusable Source Guardrail

The reusable local source verifier now codifies the metadata, analytics, CTA, proof-language, and design-token scans that used to live only as manual checks:

```bash
VERIFY_SOURCE_OUTPUT=output/local-preview/design-consistency-source-guardrail-verifier-2026-07-09/summary.json \
node scripts/verify-design-consistency-source.mjs
```

Current result:

- 7/7 source guardrails passed.
- Sensitive diff scope matches the expected `src/app/layout.tsx`, `src/lib/projects-data.ts`, and `src/lib/site-routes.ts` changes.
- Metadata-bearing `page.tsx` and `layout.tsx` files have no `use client` directive.
- Literal page-context `/contact?` links, risky proof-language phrases, and Supabase source wording are absent.
- The remaining large-rounded and shadow hits are the documented planning-guide reader spinner and Navbar flyout exceptions.

## Sitemap And Robots Behavior

Current `src/app/sitemap.ts` still builds the XML sitemap from:

```text
xmlSitemapRoutes from src/lib/site-routes.ts
getAllProjects() from src/lib/projects.ts
```

It still keeps `lastModified: undefined` to avoid build-time sitemap churn.

Current `src/app/robots.ts` still:

- Allows normal public crawling.
- Disallows `/api/`, `/admin/`, and private routes.
- Points crawlers to `https://www.edgpatioshade.com/sitemap.xml`.

The current route registry check passes:

```text
npm run routes:check
=> Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
```

## Metadata And Schema Touch Points

The metadata/schema-sensitive diff scan currently returns:

```text
src/app/commercial/chicago-hospitality-outdoor-living/page.tsx
src/app/commercial/page.tsx
src/app/commercial/restaurant-patio-solutions/page.tsx
src/app/commercial/west-loop/page.tsx
src/app/service-areas/northbrook-il/motorized-pergolas/page.tsx
src/app/service-areas/page.tsx
src/app/service-areas/wilmette-il/louvered-pergolas/page.tsx
src/app/service-areas/wilmette-il/page.tsx
src/app/service-areas/winnetka-il/louvered-pergolas/page.tsx
src/app/service-areas/winnetka-il/page.tsx
src/app/systems/appliances/page.tsx
src/app/systems/saunas/SaunasPageClient.tsx
src/components/layout/Footer.tsx
```

Interpretation:

- These are not automatically unsafe; they are the files where metadata/schema-related strings or JSON-LD helper calls changed and therefore require review.
- Current implementation status records these as copy-positioning, schema-helper, route-exposure, and public-benefit-language changes that keep existing route paths and canonical patterns intact.
- The production build passes, and rendered SEO/CTA preflight proof exists for representative routes.

## Rendered SEO/CTA Proof

Rendered SEO/CTA proof is saved at:

```text
output/playwright/design-consistency-seo-cta-preflight-2026-07-09/qa-summary.json
```

That local production-preview preflight checked 10 representative approval-gate routes at desktop and mobile sizes:

- 10 routes.
- 20 rendered states.
- 0 failures.
- Checked HTTP status, final browser URL where relevant, canonical behavior, robots/noindex behavior, expected JSON-LD types, contextual Contact CTA links, form anchors, console errors, and horizontal overflow.

Special reader-page proof:

- Raw server HTML for `/guides/planning-guide/read` preserved canonical `/guides/planning-guide/read` plus `noindex, follow`.
- Browser verification correctly observed the unauthenticated client redirect to `/guides/planning-guide`.

## Read-Only Production Baseline

Read-only production baseline proof is saved at:

```text
output/production-baseline/design-consistency-production-baseline-2026-07-09/baseline-summary.json
```

That production baseline ran before the local rollout was staged, committed, pushed, or deployed:

- 26 representative live routes checked.
- 0 failures.
- `/sitemap.xml` returned 200 with 107 `<loc>` URLs and included representative routes for home, `/systems/pergolas`, `/service-areas/northbrook-il/motorized-pergolas`, `/guides/planning-guide`, and `/projects/karp`.
- `/robots.txt` returned 200, pointed to the production sitemap, and disallowed `/api/`.

This baseline is useful for Phase 5 comparison, but it is not post-deploy verification of the local rollout.

## Search Console Boundary

Search Console or indexing follow-up is not part of local implementation proof and has not been performed.

If Colton later approves Search Console follow-up after live deployment:

- Verify production deployment and live source first.
- Inspect exact changed URLs in Search Console.
- Request indexing only where appropriate.
- Do not resubmit broad sitemap/indexing work just because the repo changed.
- Report live-test truth separately from older Google Index lag.

Without explicit Search Console approval, Phase 5 should stop at live production verification and should not request indexing or submit sitemaps.
