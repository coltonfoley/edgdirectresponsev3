# EDG Website Design Consistency Staging Manifest - 2026-07-09

This manifest is a local approval aid for the design-consistency rollout described in `docs/codex/design-consistency-audit-2026-07-08.md` and `docs/codex/design-consistency-implementation-status-2026-07-09.md`.

The approval-gated production runbook is `docs/codex/design-consistency-phase-5-runbook-2026-07-09.md`.

The short approval decision packet is `docs/codex/design-consistency-approval-packet-2026-07-09.md`.

The requirement-to-evidence matrix is `docs/codex/design-consistency-requirement-evidence-2026-07-09.md`.

The route-family implementation map is `docs/codex/design-consistency-route-family-map-2026-07-09.md`.

The lead-flow guardrail is `docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md`.

The SEO metadata guardrail is `docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md`.

The live verification URL list is `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md`.

Do not stage, commit, push, deploy, request Search Console indexing, or mutate production from this manifest until Colton explicitly approves the production phase.

## Current Source Scope

- Repo: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- Branch: `edg-positioning`
- Baseline commit observed during rollout: `8e6f6dd1cba66b4958770b5dff9ca0ceacf9548e`
- Current website source diff: 108 files changed under `src/app`, `src/components`, and `src/lib`, with 8,656 insertions and 6,447 deletions.
- Current validation tooling scope: `scripts/test-contrast.mjs`, refreshed from stale `/design` coverage to current `/html-sitemap` coverage and expanded to include rendered-structure checks, plus the added `scripts/verify-design-consistency-routes.mjs` route-contract and legacy-redirect verifier, `scripts/verify-design-consistency-manifest.mjs` staging-manifest verifier, and `scripts/verify-design-consistency-source.mjs` source-guardrail verifier.
- Current approval-safe source/tooling stage set: 112 paths, covering 108 website source paths plus 4 validation scripts.
- Deliberate tracked deletion: `src/app/systems/enclosures/EnclosuresGallery.tsx`.
- Production status: not staged, not committed, not pushed, not deployed, not live-verified.

## Approval-Safe Stage Set

Stage these only after explicit approval:

```text
docs/codex/design-consistency-audit-2026-07-08.md
docs/codex/design-consistency-implementation-status-2026-07-09.md
docs/codex/design-consistency-staging-manifest-2026-07-09.md
docs/codex/design-consistency-phase-5-runbook-2026-07-09.md
docs/codex/design-consistency-approval-packet-2026-07-09.md
docs/codex/design-consistency-requirement-evidence-2026-07-09.md
docs/codex/design-consistency-route-family-map-2026-07-09.md
docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md
docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md
docs/codex/design-consistency-live-verification-url-list-2026-07-09.md
scripts/test-contrast.mjs
scripts/verify-design-consistency-manifest.mjs
scripts/verify-design-consistency-routes.mjs
scripts/verify-design-consistency-source.mjs
src/app/commercial/chicago-hospitality-outdoor-living/page.tsx
src/app/commercial/country-club-outdoor-spaces/page.tsx
src/app/commercial/hotel-pergolas/page.tsx
src/app/commercial/hotel-roof-deck-systems/page.tsx
src/app/commercial/page.tsx
src/app/commercial/restaurant-patio-enclosures/page.tsx
src/app/commercial/restaurant-patio-solutions/page.tsx
src/app/commercial/west-loop/page.tsx
src/app/error.tsx
src/app/gallery/page.tsx
src/app/globals.css
src/app/guides/layout.tsx
src/app/guides/louvered-pergola-brands-compared/page.tsx
src/app/guides/louvered-pergolas/page.tsx
src/app/guides/magnatrack-screens-cost/page.tsx
src/app/guides/motorized-pergola-budget-examples/page.tsx
src/app/guides/motorized-pergola-deck-roof-deck/page.tsx
src/app/guides/motorized-pergola-permits-hoa-engineering/page.tsx
src/app/guides/motorized-pergola-planning/page.tsx
src/app/guides/page.tsx
src/app/guides/pergola-cost/page.tsx
src/app/guides/pergola-system-fit-review/page.tsx
src/app/guides/pergola-vs-patio-cover/page.tsx
src/app/guides/planning-guide/PlanningGuideLanding.tsx
src/app/guides/planning-guide/page.tsx
src/app/guides/planning-guide/read/GuideReadClient.tsx
src/app/guides/planning-guide/read/page.tsx
src/app/html-sitemap/page.tsx
src/app/layout.tsx
src/app/not-found.tsx
src/app/outdoor-rooms/page.tsx
src/app/outdoor-rooms/pergola-glass-outdoor-room/page.tsx
src/app/page.tsx
src/app/privacy/page.tsx
src/app/projects/ProjectsContent.tsx
src/app/projects/[slug]/components/ProjectContent.tsx
src/app/projects/[slug]/components/RelatedProjects.tsx
src/app/projects/[slug]/page.tsx
src/app/service-areas/algonquin-il/motorized-pergolas/page.tsx
src/app/service-areas/algonquin-il/page.tsx
src/app/service-areas/algonquin-il/retractable-screens/page.tsx
src/app/service-areas/algonquin-il/zoning-guide/page.tsx
src/app/service-areas/barrington-il/motorized-pergolas/page.tsx
src/app/service-areas/barrington-il/page.tsx
src/app/service-areas/chicago-il/glass-enclosures/page.tsx
src/app/service-areas/chicago-il/motorized-pergolas/page.tsx
src/app/service-areas/chicago-il/page.tsx
src/app/service-areas/chicago-il/retractable-screens/page.tsx
src/app/service-areas/deerfield-il/page.tsx
src/app/service-areas/deerfield-il/retractable-screens/page.tsx
src/app/service-areas/hinsdale-il/page.tsx
src/app/service-areas/lake-county-il/page.tsx
src/app/service-areas/lake-forest-il/motorized-pergolas/page.tsx
src/app/service-areas/lake-forest-il/page.tsx
src/app/service-areas/lake-forest-il/zoning-guide/page.tsx
src/app/service-areas/lake-geneva-wi/motorized-pergolas/page.tsx
src/app/service-areas/lake-geneva-wi/page.tsx
src/app/service-areas/lake-geneva-wi/retractable-screens/page.tsx
src/app/service-areas/lake-geneva-wi/zoning-guide/page.tsx
src/app/service-areas/mchenry-county-il/page.tsx
src/app/service-areas/naperville-il/motorized-pergolas/page.tsx
src/app/service-areas/naperville-il/page.tsx
src/app/service-areas/north-shore-chicago/page.tsx
src/app/service-areas/northbrook-il/motorized-pergolas/page.tsx
src/app/service-areas/northbrook-il/page.tsx
src/app/service-areas/oak-brook-il/page.tsx
src/app/service-areas/page.tsx
src/app/service-areas/sanibel-outdoor-living/lanai-replacement/page.tsx
src/app/service-areas/sanibel-outdoor-living/louvered-pergolas/page.tsx
src/app/service-areas/sanibel-outdoor-living/modern-lanai/page.tsx
src/app/service-areas/sanibel-outdoor-living/page.tsx
src/app/service-areas/sanibel-outdoor-living/zoning-guide/page.tsx
src/app/service-areas/southeast-wisconsin/page.tsx
src/app/service-areas/southwest-florida/motorized-screens/page.tsx
src/app/service-areas/southwest-florida/page.tsx
src/app/service-areas/spring-grove-il/page.tsx
src/app/service-areas/wilmette-il/louvered-pergolas/page.tsx
src/app/service-areas/wilmette-il/page.tsx
src/app/service-areas/winnetka-il/louvered-pergolas/page.tsx
src/app/service-areas/winnetka-il/page.tsx
src/app/showroom/page.tsx
src/app/systems/appliances/page.tsx
src/app/systems/enclosures/EnclosuresGallery.tsx
src/app/systems/enclosures/opengraph-image.tsx
src/app/systems/enclosures/page.tsx
src/app/systems/page.tsx
src/app/systems/pergolas/PergolaConfiguratorClient.tsx
src/app/systems/pergolas/configure/ConfiguratorApp.tsx
src/app/systems/pergolas/page.tsx
src/app/systems/saunas/SaunasPageClient.tsx
src/app/systems/saunas/page.tsx
src/app/systems/shades/page.tsx
src/app/terms/page.tsx
src/app/trade-partners/TradePartnersPageContent.tsx
src/app/trade-partners/page.tsx
src/components/features/ReviewsSection.tsx
src/components/features/contact/ContactClient.tsx
src/components/features/contact/LeadCaptureForm.tsx
src/components/features/gallery/BeforeAfter.tsx
src/components/features/gallery/ProductGallery.tsx
src/components/features/home/HeroFormClient.tsx
src/components/features/pergola/SystemFitReviewForm.tsx
src/components/features/service-area/ServiceAreaLayout.tsx
src/components/layout/Footer.tsx
src/components/layout/Navbar.tsx
src/components/ui/ImageSlider.tsx
src/lib/projects-data.ts
src/lib/site-routes.ts
```

## Optional Evidence To Stage

Only include this if Colton wants the screenshot evidence committed with the audit packet:

```text
docs/codex/design-consistency-audit-2026-07-08-screenshots/
```

Current size: about 13 MB.

## Do Not Stage By Default

```text
output/
docs/codex/seo-audit-implementation-plan-2026-07-06.md
.next/
.next-stale-*/
/tmp/edg-website-next-cache-2026-07-09-2325
```

Reasons:

- `output/` is local QA evidence, currently about 117 MB and 296 files.
- `docs/codex/seo-audit-implementation-plan-2026-07-06.md` belongs to a separate SEO planning lane.
- Generated caches are not source artifacts.

## Pre-Commit Validation After Staging

Run these after staging and before committing:

```bash
git diff --cached --check
npm run lint
npm run routes:check
node scripts/verify-design-consistency-manifest.mjs
node scripts/verify-design-consistency-source.mjs
npx tsc --noEmit --pretty false
npm run build
```

Then run targeted desktop/mobile browser checks for representative route families and CTA paths before deployment approval. The current local contrast/rendered-structure smoke also requires a production preview server:

```bash
npm run start -- -p 3002
TEST_URL=http://127.0.0.1:3002 npm run test:contrast
```

## Non-Mutating Stage-Set Dry Run

Latest dry-run validation:

- Manifest comparison: 122 expected paths and 122 listed paths.
- Missing expected paths: 0.
- Extra listed paths: 0.
- Missing files on disk: 1, expected and deliberate:
  - `src/app/systems/enclosures/EnclosuresGallery.tsx` is the tracked deletion in this rollout.
- Excluded paths present in manifest: false for `output/`, `docs/codex/seo-audit-implementation-plan-2026-07-06.md`, and generated cache paths.
- `git add --dry-run -- <manifest paths>` returned success and reported 122 paths that would be staged.

## Production Gate

This manifest does not approve production work. The remaining production phase still needs explicit Colton approval for staging, commit, push, deployment, live URL verification, and any Search Console follow-up.
