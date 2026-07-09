# EDG Website Design Consistency Route-Family Map - 2026-07-09

This local approval aid summarizes the current implementation scope by route family for the design-consistency rollout proposed in `docs/codex/design-consistency-audit-2026-07-08.md`.

It does not approve staging, commit, push, deploy, Search Console work, form submission, or any production mutation.

## Current Source Truth

- Repo: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- Branch: `edg-positioning`
- Baseline commit: `8e6f6dd1cba66b4958770b5dff9ca0ceacf9548e`
- Current changed source scope: 108 tracked source files across `src/app`, `src/components`, and `src/lib`.
- Current validation tooling scope: `scripts/test-contrast.mjs` refreshed from stale `/design` coverage to current `/html-sitemap` coverage and expanded to fail on rendered-structure regressions, plus `scripts/verify-design-consistency-routes.mjs` for the reusable 108-route HTTP/SEO/legacy-redirect contract check, `scripts/verify-design-consistency-manifest.mjs` for the approval-safe stage set, and `scripts/verify-design-consistency-source.mjs` for source guardrails.
- Current source route inventory: 82 `src/app/**/page.tsx` files.
- Route registry check: 81 static app routes registered, 1 generated route family acknowledged.
- Production state: local-only; not staged, not committed, not pushed, not deployed, and not live-verified.

## Route-Family Implementation Map

| Route family | Changed source paths | Representative routes | Implementation focus | Current local evidence |
| --- | ---: | --- | --- | --- |
| Homepage | 1 | `/` | Align hero form success state and first-screen conversion surface with the shared form/proof system. | Form/control preflight: `output/playwright/design-consistency-form-a11y-preflight-2026-07-09/qa-summary.json`; full route smoke: `output/playwright/edg-full-route-smoke-2026-07-09-playwright/qa-summary.json`. |
| Systems and configurator | 11 | `/systems`, `/systems/pergolas`, `/systems/shades`, `/systems/enclosures`, `/systems/appliances`, `/systems/saunas`, `/systems/pergolas/configure` | Consolidate system-detail visual language, use shared gallery treatment, preserve configurator as a special tool shell, keep metadata in server pages, and improve configurator mobile/control semantics. | Systems slice: `output/playwright/edg-systems-slice-2026-07-09-playwright/qa-summary.json`; form/control preflight covers configurator intake; SEO/CTA preflight covers `/systems/saunas`. |
| Outdoor rooms | 2 | `/outdoor-rooms`, `/outdoor-rooms/pergola-glass-outdoor-room` | Preserve the outcome-led dark hero rhythm and use it as a canonical pattern for combined system pages while normalizing card/button details. | Full desktop/mobile route smokes; source diff across both outdoor-room pages. |
| Commercial | 8 | `/commercial`, `/commercial/restaurant-patio-enclosures`, `/commercial/hotel-roof-deck-systems`, `/commercial/hotel-pergolas`, `/commercial/west-loop` | Bring commercial hub/detail pages into one sober operational template, qualify proof language, retire aggressive ROI copy, and preserve contextual CTA routing. | Commercial slice: `output/playwright/edg-commercial-slice-2026-07-09-playwright/qa-summary.json`; SEO/CTA preflight covers `/commercial/restaurant-patio-enclosures`; source scan found no remaining aggressive restaurant proof phrases listed in the audit. |
| Service areas | 42 | `/service-areas`, city/region hubs, local product pages, zoning guides, Florida/Sanibel pages | Normalize local/product page structure around sharp EDG sections while preserving local SEO content, route inventory, schema, internal links, permit/zoning context, and Florida-specific copy. | Service-area products slice: `output/playwright/edg-service-area-products-slice-2026-07-09-playwright/qa-summary.json`; regional/city hub slices; SEO/CTA preflight covers `/service-areas/northbrook-il/motorized-pergolas`; route registry check passes. |
| Guides and planning guide | 16 | `/guides`, guide details, `/guides/planning-guide`, `/guides/planning-guide/read` | Normalize editorial/guide presentation, preserve metadata and FAQ/schema intent, align lead-capture fields with Contact, and preserve the reader as a special noindex gated route. | Guides slice: `output/playwright/edg-guides-slice-2026-07-09-playwright/qa-summary.json`; SEO/CTA preflight covers `/guides/louvered-pergolas`, `/guides/planning-guide`, and `/guides/planning-guide/read`; form/control preflight covers Planning Guide and System Fit Review. |
| Projects | 5 | `/projects`, `/projects/[slug]` | Preserve project detail template and route availability while separating photo-ready proof from in-progress project profiles; label non-photo related cards as "Details in progress"; soften public project result copy that overstated four-season/year-round use. | Related-project proof: `output/playwright/design-consistency-related-projects-2026-07-09/qa-summary.json`; Wade proof-language render QA: `output/playwright/design-consistency-project-proof-wade-2026-07-09/qa-summary.json`; full desktop/mobile route smokes cover generated project routes; source scan now leaves only intentional four-season qualifying language outside API code. |
| Gallery | 1 | `/gallery` | Preserve black visual portfolio feel while adding a more consistent conversion/proof path and aligning gallery controls with sharp UI primitives. | Trust/residual slices and full route smokes; SEO/CTA preflight includes route-family CTA checks that cover the gallery pattern indirectly through source and broader smoke evidence. |
| Showroom | 1 | `/showroom` | Rework showroom into a sharper trust/proof surface with consistent CTA treatment and real showroom positioning. | Trust pages slice: `output/playwright/edg-trust-pages-slice-2026-07-09-playwright/qa-summary.json`; SEO/CTA preflight covers `/showroom`. |
| Trade partners | 2 | `/trade-partners` | Keep trade/pro positioning while aligning showroom proof, CTA routing, and page rhythm with the rest of the site. | Trust pages slice and full route smokes. |
| Legal, utility, root, global style, and error surfaces | 7 | `/privacy`, `/terms`, `/html-sitemap`, root layout, global CSS, error/not-found | Preserve legal/utility routes, root metadata/analytics wiring, source-backed HTML sitemap, skip-link behavior, Contact selector state styling, and utility page styling. | Route registry check; full route smokes; SEO/CTA preflight covers `/html-sitemap`; Contact CTA context proof covers query-selected radio styling; sensitive-file diff confirms sitemap/robots/API/lead hook/analytics helpers are unchanged. |
| Shared feature, proof, layout, UI, and route registry components | 12 | `Navbar`, `Footer`, Contact/LeadCapture/Hero/SystemFit forms, gallery controls, reviews, `site-routes` | Enforce the design system through shared primitives: route registry exposure, CTA helper use, form labels/status semantics, mobile nav accessibility, proof modules, and sharp card/control behavior. | Source scans for `use client`, `/contact?`, rounded/shadow/style exceptions; form/control preflight; route registry check; lint/type/build checks. |

## Known Local Evidence Layers

The current local packet is supported by these evidence layers:

- Source route inventory: 82 `src/app/**/page.tsx` files.
- Route registry validation: `npm run routes:check` passes with 81 static app routes and 1 generated route family.
- Live verification route contract: `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md` records 79 changed page-route candidates, 27 generated project route candidates, the exact 108 source-derived production URL candidates, and the representative desktop/mobile browser QA set for Phase 5.
- Full route smoke: `output/playwright/edg-full-route-smoke-2026-07-09-playwright/qa-summary.json`.
- Full mobile route smoke: `output/playwright/edg-full-mobile-route-smoke-2026-07-09-playwright/qa-summary.json`.
- SEO/CTA preflight: `output/playwright/design-consistency-seo-cta-preflight-2026-07-09/qa-summary.json`, 10 routes, 20 states, 0 failures.
- Form/control accessibility preflight: `output/playwright/design-consistency-form-a11y-preflight-2026-07-09/qa-summary.json`, 5 surfaces, 10 states, 0 failures.
- Related-project proof hierarchy preflight: `output/playwright/design-consistency-related-projects-2026-07-09/qa-summary.json`.
- Wade project proof-language render QA: `output/playwright/design-consistency-project-proof-wade-2026-07-09/qa-summary.json`.
- Local production-preview contrast/rendered-structure smoke: `TEST_URL=http://127.0.0.1:3004 npm run test:contrast`, 57 states, 57 passed, 0 failed. This now checks contrast plus main content, visible H1 count, framework overlay absence, horizontal overflow, and visible near-viewport images.
- Source guardrail verifier: `scripts/verify-design-consistency-source.mjs`, 7 checks, 7 passed, 0 failed.
- Staging-manifest verifier: `scripts/verify-design-consistency-manifest.mjs`, 122 manifest paths, 122 approval-safe changed paths, 0 missing, 0 extra.
- Local validation: `git diff --check`, `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false`, and `npm run build` have passed in the current local rollout.

## Remaining Approval Gate

This map is not production proof. The rollout is still incomplete until Colton explicitly approves Phase 5 and the approved stage set is committed, pushed, deployed, and live-verified on production.

Production verification still needs to prove:

- Live `200` responses for representative and sitemap routes.
- Desktop and mobile render checks on production.
- Canonical, robots, JSON-LD, sitemap, and HTML sitemap behavior.
- Header/footer/internal-link exposure.
- CTA query-context preservation.
- `/api/leads` safety without submitting a production lead unless a labeled test lead is explicitly approved.
- Search Console follow-up only if separately approved after live verification.
