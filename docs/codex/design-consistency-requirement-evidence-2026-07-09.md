# EDG Website Design Consistency Requirement Evidence - 2026-07-09

This matrix records the current evidence for the active goal:

> Implement the EDG Website design consistency audit proposal from `docs/codex/design-consistency-audit-2026-07-08.md`, starting with an approved Phase 1 and pilot rollout while preserving SEO, lead flow, metadata, routing, analytics, and production verification gates.

This is a local evidence artifact. It does not approve staging, commit, push, deployment, Search Console action, form submission, or production mutation.

## Current Snapshot

- Repo: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- Branch: `edg-positioning`
- Baseline commit: `8e6f6dd1cba66b4958770b5dff9ca0ceacf9548e`
- Current website source diff: 108 tracked files under `src/app`, `src/components`, and `src/lib`, with 8,656 insertions and 6,447 deletions.
- Current validation tooling scope: `scripts/test-contrast.mjs`, refreshed from stale `/design` coverage to current `/html-sitemap` coverage and expanded to include rendered-structure checks, plus `scripts/verify-design-consistency-routes.mjs` for route-contract and legacy-redirect verification, `scripts/verify-design-consistency-manifest.mjs` for stage-set verification, and `scripts/verify-design-consistency-source.mjs` for SEO/lead/CTA/design source guardrails.
- Current approval-safe source/tooling stage set: 112 paths, covering 108 website source paths plus 4 validation scripts.
- Production state: local-only; not staged, not committed, not pushed, not deployed, not live-verified.

## Requirement Matrix

| Requirement | Current evidence | Status |
| --- | --- | --- |
| Use the audit proposal as the source of work | `docs/codex/design-consistency-audit-2026-07-08.md` exists with route inventory, inconsistency matrix, design-system standard, pilot set, phased rollout, and approval boundary. | Proven locally |
| Create a phased implementation path | `docs/codex/design-consistency-implementation-status-2026-07-09.md` records Phases 0-4 as locally complete and Phase 5 as approval-gated. | Proven locally |
| Implement Phase 1 design-system and routing definitions | Source changes include shared route exposure helpers in `src/lib/site-routes.ts`, header/footer alignment, CTA helper normalization, form semantics, mobile nav accessibility, and sharp primitive enforcement. | Proven locally by source diff and status doc |
| Implement the representative pilot route families | Source changes cover the original pilot families: Northbrook local product, commercial detail, louvered guide, saunas/system detail, showroom/contact lead surfaces, plus a broader route-family rollout. `docs/codex/design-consistency-route-family-map-2026-07-09.md` maps the current source diff by family and links the local QA evidence for each slice. | Proven locally by source diff, route-family map, and status doc |
| Preserve valid SEO pages instead of hiding them | `npm run routes:check` passes with 81 static app routes and 1 generated route family acknowledged. The implementation status records 108 desktop/mobile route smoke checks and valid pages retained. | Proven locally |
| Preserve metadata/canonical/JSON-LD behavior | Latest guardrail docs record metadata/schema-sensitive diff review. `rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'` returns no matches, so metadata-bearing pages were not converted to client pages. `docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md` records the sitemap, robots, root analytics, route-registry, rendered SEO/CTA, and Search Console boundaries. | Proven locally by source checks and SEO metadata guardrail |
| Preserve sitemap and robots behavior | Expanded guardrail diff includes only `src/app/layout.tsx`, `src/lib/site-routes.ts`, and `src/lib/projects-data.ts`; `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/lib/projects.ts` are unchanged. `npm run routes:check` passes. | Proven locally |
| Preserve analytics wiring | Sensitive diff check does not include `src/lib/analytics.ts`; `src/app/layout.tsx` remains changed only for skip-link focus styling and still includes `DeferredGoogleTagManager`, `SpeedInsights`, `Analytics`, and `LandingPageTracker`. | Proven locally |
| Preserve lead flow and Rainmaker handoff | Expanded guardrail diff does not include `src/app/api`, `src/hooks/useLeadSubmission.ts`, or `src/lib/rainmaker-api.ts`. Form components still use `useLeadSubmission`, and no production test lead was submitted. `docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md` records the current `/api/leads` -> Rainmaker source path and the no-Supabase wording check. | Proven locally by source checks and lead-flow guardrail |
| Preserve contextual CTA routing | `rg -n "/contact\\?" src/app src/components` returns no matches, and implementation status records page-context CTAs normalized through `buildContactHref`. Focused Contact CTA context QA passed for `area` and `market` links across desktop and mobile with 6 rendered states, 0 failures, plus mobile jump-to-form proof. | Proven locally |
| Preserve production gates | `git status --short` shows local changes and untracked docs only; no staging, commit, push, deployment, Search Console action, or production mutation has been performed. | Proven locally |
| Provide an exact staging set | `docs/codex/design-consistency-staging-manifest-2026-07-09.md` lists the 122-path approval-safe stage set, optional screenshot evidence, and excluded files. `scripts/verify-design-consistency-manifest.mjs` verifies the manifest against the current local change set and non-mutating dry-run stage paths. | Proven locally |
| Provide approval wording and exclusions | `docs/codex/design-consistency-approval-packet-2026-07-09.md` states what approval authorizes, what remains excluded, optional screenshot handling, and recommended wording. | Proven locally |
| Provide production Phase 5 runbook | `docs/codex/design-consistency-phase-5-runbook-2026-07-09.md` separates local validation, staging, commit/push, deployment, live checks, SEO checks, lead safety, and Search Console approval. | Proven locally |
| Provide a production URL verification contract | `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md` records 79 changed page-route candidates, 27 generated project route candidates, the exact 108-route source-derived production URL candidate set, and the representative desktop/mobile browser QA routes for Phase 5. | Proven locally |
| Complete the full objective | Production Phase 5 is not approved or executed. Live production verification, deployment proof, and optional Search Console follow-up remain pending. | Not complete; approval-gated |

## Latest Lightweight Checks

Latest source/guardrail checks in this continuation:

```text
git diff --shortstat -- src/app src/components src/lib
=> 108 files changed, 8656 insertions(+), 6447 deletions(-)

git status --porcelain=v1 -- src/app src/components src/lib scripts/test-contrast.mjs scripts/verify-design-consistency-routes.mjs scripts/verify-design-consistency-manifest.mjs scripts/verify-design-consistency-source.mjs
=> 112 source/tooling paths in the approval-safe stage set

git diff --name-only -- src/app/api src/hooks/useLeadSubmission.ts src/lib/analytics.ts src/lib/rainmaker-api.ts src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx src/lib/site-routes.ts src/lib/projects-data.ts src/lib/projects.ts
=> src/app/layout.tsx
=> src/lib/projects-data.ts
=> src/lib/site-routes.ts

rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'
=> no matches

rg -n "/contact\?" src/app src/components
=> no matches
```

Continuation guardrail refresh after adding the live-verification URL list:

```text
git diff --shortstat -- src/app src/components src/lib
=> 108 files changed, 8656 insertions(+), 6447 deletions(-)

git status --porcelain=v1 -- src/app src/components src/lib scripts/test-contrast.mjs scripts/verify-design-consistency-routes.mjs scripts/verify-design-consistency-manifest.mjs scripts/verify-design-consistency-source.mjs
=> 112 source/tooling paths in the approval-safe stage set

git diff --name-only -- src/app/api src/hooks/useLeadSubmission.ts src/lib/analytics.ts src/lib/rainmaker-api.ts src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx src/lib/site-routes.ts src/lib/projects-data.ts src/lib/projects.ts
=> src/app/layout.tsx
=> src/lib/projects-data.ts
=> src/lib/site-routes.ts

rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'
=> no matches

rg -n 'href=\{?"/contact"' src/app src/components
=> no matches

rg -n "href=\{?'/contact'" src/app src/components
=> no matches

rg -n 'href=\{?`/contact' src/app src/components
=> no matches

rg -n 'href=\{?"/contact\?' src/app src/components
=> no matches

rg -n -i "supabase" docs/codex/design-consistency-*.md src/app src/components src/lib src/hooks
=> Supabase appears only in design-consistency guardrail wording that says not to describe it as the active lead database.

rg -n "useLeadSubmission|fetch\('/api/leads'|fetch\(\"/api/leads\"|submitLead" src/components/features/contact/LeadCaptureForm.tsx src/components/features/contact/ContactClient.tsx src/components/features/home/HeroFormClient.tsx src/components/features/pergola/SystemFitReviewForm.tsx src/app/systems/pergolas/configure/ConfiguratorApp.tsx src/hooks/useLeadSubmission.ts
=> Contact, planning guide, homepage hero, system fit review, and configurator forms still use useLeadSubmission; src/hooks/useLeadSubmission.ts still posts to /api/leads.

rg -n "DeferredGoogleTagManager|SpeedInsights|Analytics|LandingPageTracker|metadataBase|alternates|robots" src/app/layout.tsx
=> Root metadata, robots, analytics, GTM, Speed Insights, and landing-page tracking entries remain present.
```

Source-derived Phase 5 URL contract refresh:

```text
Current source route derivation
=> 82 src/app/**/page.tsx files
=> 81 concrete app routes after excluding /projects/[slug]
=> 79 changed page-route candidates from git diff, including /projects/[slug]
=> 27 generated project routes from src/lib/projects-data.ts
=> 108 full source-derived production URL candidates

docs/codex/design-consistency-live-verification-url-list-2026-07-09.md comparison
=> Full Source-Derived Production URL Candidate Set: 108 derived, 108 documented, 0 missing, 0 extra
=> Changed Page Route Candidates: 79 derived, 79 documented, 0 missing, 0 extra
=> Generated Project Route Candidates: 27 derived, 27 documented, 0 missing, 0 extra
```

Full local validation refresh after the exact Phase 5 URL contract was added:

```text
git diff --check
=> passed

npm run lint
=> passed

npm run routes:check
=> Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.

npx tsc --noEmit --pretty false
=> passed

npm run build
=> passed
=> Image validation checked 213 paths, 213 existed, 0 missing.
=> Orphan candidates remained the same five review items.
=> Gallery data generation produced 82 gallery items and did not dirty src/data/gallery-images.json.
=> Next generated 115 static pages.
```

Local production-preview HTTP sweep using the exact 108-route contract:

```text
npm run start -- -p 3002
=> local production preview ready at http://127.0.0.1:3002

108-route HTTP sweep from docs/codex/design-consistency-live-verification-url-list-2026-07-09.md
=> 108 checked
=> 108 returned HTTP 200
=> 0 failures
=> evidence: output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/summary.json
```

Local preview SEO metadata summary from the same 108-route sweep:

```text
output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/seo-summary.json
=> 108 routes analyzed
=> 0 missing titles
=> 0 missing canonicals
=> 0 canonical mismatches against expected https://www.edgpatioshade.com routes
=> robots counts: 107 index, follow; 1 noindex, follow
=> only noindex route: /guides/planning-guide/read
=> 0 routes missing JSON-LD
=> JSON-LD script count range: 3-7
```

Local production-preview contrast/rendered-structure smoke:

```text
scripts/test-contrast.mjs route-list refresh
=> stale /design route replaced with current /html-sitemap utility route
=> rendered-structure checks added for main content, visible h1 count, framework overlay absence, horizontal overflow, and visible near-viewport images

TEST_URL=http://127.0.0.1:3004 npm run test:contrast
=> Pages tested: 57
=> Passed: 57
=> Failed: 0
```

Local route-contract verifier:

```text
VERIFY_BASE_URL=http://127.0.0.1:3004 VERIFY_OUTPUT=output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-routes.mjs
=> documented routes: 108
=> source-derived routes: 108
=> route contract matches current source
=> 108 URL checks
=> 108 passed
=> 0 failed
=> Site checks: 2/2 passed
=> Legacy redirects: 3/3 passed
=> Source guardrails: 4/4 passed
=> Sitemap locs: 107/107
=> JSON-LD count range: 3-7
=> Internal links checked: 10341
=> Contact links found: 514
=> Unknown internal links: 0
=> Noindex routes: /guides/planning-guide/read
```

Contrast fixes made during the refresh:

- `src/components/layout/Footer.tsx`: footer micro-labels moved from `text-zinc-500` to `text-zinc-400` on the black footer surface.
- `src/components/features/contact/ContactClient.tsx`: contact side-panel footer labels moved from `text-zinc-400` to `text-zinc-300` on the dark contact surface.
- `src/app/showroom/page.tsx`: the dark-hero location eyebrow no longer uses the white-background `label-editorial-brand` color rule.

Latest route registry check:

```text
npm run routes:check
=> Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
```

## Current Local Validation Summary

Latest approval-gate checks:

```text
git diff --check
=> passed

npm run lint
=> passed

npm run routes:check
=> Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.

npx tsc --noEmit --pretty false
=> passed

npm run build
=> passed
=> Image validation checked 213 paths, 213 existed, 0 missing.
=> Orphan candidates remained the same five review items.
=> Gallery data generation produced 82 gallery items and did not dirty src/data/gallery-images.json.
=> Next generated 115 static pages.
=> duplicate generated type-file check returned no .next/types/* 2.ts files after the build.
```

Fresh pre-Phase-5 rehearsal on the current worktree:

```text
npm run test:e2e
=> npm run build passed
=> image validation checked 213 paths, 213 existed, 0 missing
=> gallery data generation produced 82 gallery items and did not dirty src/data/gallery-images.json
=> Next generated 115 static pages
=> Playwright e2e passed: 7 tests passed

npm run start -- --hostname 127.0.0.1 --port 3002
=> production preview ready at http://127.0.0.1:3002

TEST_URL=http://127.0.0.1:3002 npm run test:contrast
=> Pages tested: 57
=> Passed: 57
=> Failed: 0

preview server
=> stopped after contrast check
```

Final verifier-hardening refresh on the current worktree:

```text
npm run build
=> passed
=> image validation checked 213 paths, 213 existed, 0 missing
=> gallery data generation produced 82 gallery items and did not dirty src/data/gallery-images.json
=> Next generated 115 static pages

npm run test:e2e
=> npm run build passed
=> Playwright e2e passed: 7 tests passed

TEST_URL=http://127.0.0.1:3004 npm run test:contrast
=> Pages tested: 57
=> Passed: 57
=> Failed: 0

VERIFY_BASE_URL=http://127.0.0.1:3004 VERIFY_OUTPUT=output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-routes.mjs
=> documented routes: 108
=> source-derived routes: 108
=> route contract matches current source
=> 108/108 routes passed
=> site checks: 2/2 passed
=> source guardrails: 4/4 passed
=> sitemap locs: 107/107
=> JSON-LD count range: 3-7
=> internal links checked: 10341
=> Contact links found: 514
=> unknown internal links: 0
=> noindex routes: /guides/planning-guide/read

preview server
=> stopped after contrast and route-contract checks
```

Rendered/local proof layers:

- Read-only production baseline passed before the local rollout was staged, committed, pushed, or deployed: 26 representative live routes, `/sitemap.xml`, and `/robots.txt` checked with 0 failures. Evidence is saved at `output/production-baseline/design-consistency-production-baseline-2026-07-09/baseline-summary.json`. This is baseline evidence only, not post-deploy verification of the local rollout.
- Rendered SEO/CTA preflight passed on 10 representative approval-gate routes across desktop `1440x1100` and mobile `390x844`: 20 rendered states, 0 failures. Evidence is saved at `output/playwright/design-consistency-seo-cta-preflight-2026-07-09/qa-summary.json`.
- Rendered form/control accessibility preflight passed on 5 surfaces across desktop `1440x1100` and mobile `390x844`: 10 rendered states, 0 failures. Evidence is saved at `output/playwright/design-consistency-form-a11y-preflight-2026-07-09/qa-summary.json`.
- Contact CTA context browser proof passed on 3 contextual Contact URLs across desktop `1440x1100` and mobile `390x844`: 6 rendered states, 0 failures, plus a successful mobile jump-to-form check. Evidence is saved at `output/playwright/design-consistency-contact-cta-context-2026-07-09/qa-summary.json`. The Codex in-app Browser connection was attempted first, but its `domSnapshot()` call failed with `TypeError: o.incrementalAriaSnapshot is not a function`, so regular Playwright Chromium was used for this proof.
- Rendered verification for the proof-hierarchy cleanup passed on `/projects/carmines` at desktop `1440x1100` and mobile `390x844`: the related-project section rendered 3 related cards and 3 visible "Details in progress" labels. Evidence is saved at `output/playwright/design-consistency-related-projects-2026-07-09/qa-summary.json`.
- Focused Wade project render QA passed at desktop `1440x1100` and mobile `390x844`: 2 rendered states, 0 failures. Evidence is saved at `output/playwright/design-consistency-project-proof-wade-2026-07-09/qa-summary.json`.
- Local production-preview HTTP sweep against the exact 108-route contract passed: 108 checked, 108 returned HTTP 200, 0 failures. Evidence is saved at `output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/summary.json`.
- Local preview SEO metadata summary from the same 108-route sweep passed: 0 missing titles, 0 missing canonicals, 0 canonical mismatches, 0 routes missing JSON-LD, and only `/guides/planning-guide/read` is `noindex, follow`. Evidence is saved at `output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/seo-summary.json`.
- Local production-preview contrast/rendered-structure smoke passed after refreshing `scripts/test-contrast.mjs` from stale `/design` coverage to `/html-sitemap`: 57 states checked, 57 passed, 0 failed.
- The current-worktree pre-Phase-5 rehearsal reran `npm run test:e2e` and the production-preview contrast smoke successfully; it did not stage, commit, push, deploy, submit forms, or mutate production.
- The reusable route-contract verifier passed locally against the 108-route Phase 5 contract, confirmed the documented route list still matches current source, checked `/sitemap.xml`, `/robots.txt`, and 3/3 legacy redirects, source-checked 4/4 analytics/measurement and lead/Rainmaker handoff guardrails, checked 10,341 rendered internal links with 0 unknown internal links, recorded 514 Contact links, and wrote local evidence to `output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json`.
- The final verifier-hardening refresh reran `npm run build`, `npm run test:e2e`, the production-preview contrast smoke, and the strengthened route-contract verifier successfully after the internal-link/source-guardrail verifier update. It did not stage, commit, push, deploy, submit forms, request Search Console indexing, or mutate production.
- The source-guardrail verifier passed locally: `VERIFY_SOURCE_OUTPUT=output/local-preview/design-consistency-source-guardrail-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-source.mjs` confirmed 7/7 source guardrails, including expected sensitive diff scope, no `use client` in metadata-bearing page/layout files, no literal page-context `/contact?` links, no risky proof-language phrases, no Supabase source wording, 1 documented planning-guide reader spinner rounded exception, and 5 documented Navbar flyout shadow exceptions.
- The continuation refresh after approval-doc alignment reran `npm run test:e2e`, `TEST_URL=http://127.0.0.1:3004 npm run test:contrast`, the 108-route contract verifier, the source-guardrail verifier, and the staging-manifest verifier successfully on the current worktree. A later local Browser proof for `/commercial/hotel-roof-deck-systems` also passed at desktop/default and mobile `390x844`. It did not stage, commit, push, deploy, submit forms, request Search Console indexing, or mutate production.
- The latest post-build continuation refresh reran `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false`, `npm run test:e2e`, the source-guardrail verifier, the staging-manifest verifier, the 108-route contract verifier against `http://127.0.0.1:3004`, and `TEST_URL=http://127.0.0.1:3004 npm run test:contrast`. All passed after clearing three ignored generated `.next/types/* 2.ts` duplicates before the TypeScript run. The refreshed proof again confirmed 108/108 local route-contract checks, 2/2 site checks, 3/3 legacy redirects, 4/4 route-verifier source guardrails, 7/7 source-guardrail checks, 122 manifest paths, 7/7 Playwright tests, and 57/57 contrast/rendered-structure states. It did not stage, commit, push, deploy, submit forms, request Search Console indexing, or mutate production.
- Latest route-verifier hardening added explicit legacy redirect checks: `/design` and `/price` must redirect to `/contact`, and `/pro` must redirect to `/trade-partners`. The hardened verifier passed locally against `http://127.0.0.1:3004` with all three returning redirect status `308`.
- Post-verifier code-quality refresh passed locally: `npm run lint`, `npx tsc --noEmit --pretty false`, `git diff --check`, the source-guardrail verifier, and the staging-manifest verifier all passed after the redirect hardening. No generated `.next/types/* 2.ts` duplicates were present before the TypeScript run. It did not stage, commit, push, deploy, submit forms, request Search Console indexing, or mutate production.
- Additional local dark-preference proof passed: `TEST_URL=http://127.0.0.1:3004 npm run test:contrast:dark` checked the same 57 contrast/rendered-structure states with browser `prefers-color-scheme: dark`; 57 passed, 0 failed. It did not stage, commit, push, deploy, submit forms, request Search Console indexing, or mutate production.
- Current continuation refresh passed locally on the still-running preview at `http://localhost:3004`: in-app Browser checked `/commercial/hotel-roof-deck-systems` at desktop/default and mobile `390x844`, clicked the hero Contact CTA without submitting a lead, and confirmed the Contact URL preserved the commercial hotel-roof-deck context with visible `Chicago, IL` and `Commercial Project` form prefill. The same refresh passed `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false` after clearing ignored generated `.next/types/* 2.ts` duplicates, the source-guardrail verifier, the staging-manifest verifier, the 108-route contract verifier against `http://127.0.0.1:3004`, `git diff --check`, and `TEST_URL=http://127.0.0.1:3004 npm run test:contrast` with 57/57 states passing. It did not stage, commit, push, deploy, submit a form, request Search Console indexing, or mutate production.
- Heavy pre-commit-style refresh passed locally: `npm run build` validated 213 image paths with 0 missing images, generated 82 gallery records, compiled successfully, and generated 115 static pages; `npm run test:e2e` rerun by itself rebuilt production and passed 7/7 Playwright tests; `TEST_URL=http://127.0.0.1:3004 npm run test:contrast:dark` passed 57/57 rendered contrast/structure states. No duplicate generated `.next/types/* 2.ts` files appeared after the build, and `src/data/gallery-images.json` remained clean. It did not stage, commit, push, deploy, submit a form, request Search Console indexing, or mutate production.

Documentation and stage-set proof:

- Manifest verifier passed: `VERIFY_MANIFEST_OUTPUT=output/local-preview/design-consistency-manifest-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-manifest.mjs` confirmed the approval-safe stage list contains all 108 changed tracked website source files, `scripts/test-contrast.mjs`, `scripts/verify-design-consistency-routes.mjs`, `scripts/verify-design-consistency-manifest.mjs`, `scripts/verify-design-consistency-source.mjs`, plus the 10 design-consistency docs. The manifest lists 122 approval-safe paths with 0 missing paths, 0 extra paths, 0 excluded paths, and 122 non-mutating dry-run stage paths.
- The only tracked deletion in the manifest is the deliberate deletion `src/app/systems/enclosures/EnclosuresGallery.tsx`.
- Documentation reference scan covered the design-consistency markdown docs. The only unresolved concrete references are expected references to the deliberate tracked deletion `src/app/systems/enclosures/EnclosuresGallery.tsx`.
- `output/` remains excluded from the default staging set at 296 files/about 117 MB.
- No staging, commit, push, deployment, Search Console action, form submission, or production mutation has been performed.

Residual design-pattern scan:

```text
large rounded classes
=> 1 hit in 1 file: the planning-guide reader loading spinner

shadow/depth classes
=> 5 hits in 1 file: Navbar flyouts

image gradient/scrim classes
=> 27 hits in 27 files: hero media overlays and project/image fallbacks

red/amber state classes
=> 8 hits in 6 files: validation, error, and noindex reader notice states

proof-risk phrases
=> 0 hits for 365-day, $0 Lost, pay for the system, pay for itself, revenue engine, true four-season, or year-round entertaining
```

Generated-cache note:

- One standalone TypeScript run hit duplicate ignored generated files under `.next/types/* 2.ts`. Deleting only those ignored generated duplicates made `npx tsc --noEmit --pretty false` pass; no source file was changed by that cache cleanup.

Project proof-language notes:

- `src/lib/projects-data.ts` now softens the Wade project result language from "true four-season" and "year-round entertaining" to protected outdoor living and extended comfortable entertaining season wording.
- Public source scan for risky proof terms now leaves only intentional qualifying four-season language in `src/app/systems/page.tsx` and the Lumon glass enclosure FAQ question in `src/app/systems/enclosures/page.tsx`.
- Focused Wade project render QA passed at desktop `1440x1100` and mobile `390x844`: 2 rendered states, 0 failures. Evidence is saved at `output/playwright/design-consistency-project-proof-wade-2026-07-09/qa-summary.json`; screenshots are `wade-desktop.png` and `wade-mobile.png` in the same folder.
- Manifest verifier and non-mutating stage-set dry run both pass at 122 approval-safe paths; the only tracked deletion remains `src/app/systems/enclosures/EnclosuresGallery.tsx`.
- `output/` remains excluded from the default staging set at 296 files/about 117 MB.
- No staging, commit, push, deployment, Search Console action, form submission, or production mutation was performed.

## Current Source Completion Audit Refresh

This refresh re-derived the active requirements from the audit proposal instead
of relying only on prior implementation notes. Current source remains the
authority.

Continuation verification against the current worktree:

```text
git status --short --branch
=> branch edg-positioning with local-only tracked changes, untracked design-consistency docs/evidence, and no staged files

git diff --shortstat -- src/app src/components src/lib
=> 108 files changed, 8656 insertions(+), 6447 deletions(-)

git status --porcelain=v1 -- src/app src/components src/lib scripts/test-contrast.mjs scripts/verify-design-consistency-routes.mjs scripts/verify-design-consistency-manifest.mjs scripts/verify-design-consistency-source.mjs
=> 112 source/tooling paths in the approval-safe stage set

source route derivation
=> 82 src/app/**/page.tsx files
=> 81 concrete static app routes
=> 27 generated project routes from src/lib/projects-data.ts ids
=> 108 source-derived production URL candidates

manifest comparison
=> 122 expected approval-safe paths
=> 122 listed paths
=> 0 missing
=> 0 extra

rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'
=> no matches

rg -n "/contact\?" src/app src/components
=> no matches

rg -n "href=.*/contact" src/app src/components
=> no matches

rg -n "rounded-(xl|2xl|3xl|full)" src/app src/components
=> 1 documented exception: planning-guide reader loading spinner

rg -n "shadow-(sm|md|lg|xl|2xl)" src/app src/components
=> 5 documented exceptions: Navbar flyouts

rg -n "365-day|\$0 Lost|pay for the system|pay for itself|revenue engine|true four-season|year-round entertaining" src/app src/components src/lib
=> no matches
```

| Audit requirement or finding | Current source evidence | Result |
| --- | --- | --- |
| Maintain a source-derived route inventory and avoid hiding SEO pages | Source inventory check found 82 app `page.tsx` files, including `/projects/[slug]`. `npm run routes:check` validates 81 static app routes plus 1 generated route family. The clean production build generated 115 static pages. | Proven locally |
| Use the shared route registry for exposure surfaces | `src/lib/site-routes.ts` defines route families, nav/footer groups, `getRoutesByNavGroup`, `getRoutesByFooterGroup`, `getHtmlSitemapRoutes`, `xmlSitemapRoutes`, `serviceAreaHubRoutes`, and `priorityLocalProductRoutes`. `src/components/layout/Footer.tsx` consumes footer/service-area helpers, and `src/app/html-sitemap/page.tsx` consumes `getHtmlSitemapRoutes()` plus `getAllProjects()`. | Proven locally |
| Preserve sitemap behavior | Expanded sensitive/source diff returns `src/app/layout.tsx`, `src/lib/site-routes.ts`, and `src/lib/projects-data.ts`; `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/lib/projects.ts` are unchanged. XML sitemap generation still comes through `xmlSitemapRoutes` plus `getAllProjects()` from `src/lib/projects.ts`. | Proven locally |
| Preserve analytics and root metadata wiring | Expanded sensitive/source diff does not include `src/lib/analytics.ts`; source inspection shows root metadata, root JSON-LD, `DeferredGoogleTagManager`, `SpeedInsights`, `Analytics`, and `LandingPageTracker` remain present. The layout change is the skip-link focus treatment and root-owned `main`; `src/lib/projects-data.ts` is copy-only project proof cleanup. | Proven locally |
| Resolve nested main-landmark drift | `rg -n "<main|</main>|id=\"main-content\"|main-content" src/app/layout.tsx src/app --glob 'page.tsx' --glob 'layout.tsx' --glob 'error.tsx' --glob 'not-found.tsx'` returns only `src/app/layout.tsx`, where the root layout owns `<main id="main-content">`. | Proven locally |
| Keep metadata-bearing pages as server components | `rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'` returns no matches. | Proven locally |
| Preserve contextual CTA routing and retire page-context `/contact?...` literals | `rg -n "/contact\?" src/app src/components` returns no matches. Static JSX href scan found 0 bare `/contact` hrefs in app/component source. Page-context CTAs use `buildContactHref` across commercial, systems, service-area, guides, gallery, projects, showroom, trade-partners, nav, and footer source, with intentional non-contact paths for guide/tool flows such as fit-review and configurator links. `npm run test:e2e` now passes the Contact query-param test after `area`/`market` fallback was restored for the visible location field. Focused Contact CTA context QA also passed for Sanibel, Chicago, and Southwest Florida URL contexts across desktop and mobile, including selected-type styling and the mobile jump-to-form path. | Proven locally |
| Preserve lead flow and Rainmaker handoff | `src/hooks/useLeadSubmission.ts` still posts to `/api/leads`. `src/app/api/leads/route.ts` still creates Rainmaker leads through `getRainmakerLeadIntakeUrl()`, `RAINMAKER_API_KEY`, and optional attachment upload. Sensitive diff does not include `src/app/api`, `src/hooks/useLeadSubmission.ts`, or `src/lib/rainmaker-api.ts`. | Proven locally |
| Fix Contact form label and selector semantics | `src/components/features/contact/ContactClient.tsx` uses `role="radiogroup"` with `role="radio"` and `aria-checked`; visible labels now point to stable ids for first name, last name, email, phone, location, project type, and message. The location label is now "Location / Zip Code" because query context may pass a city, market, or zip. Rendered form/control preflight confirmed 7 named visible fields and radiogroup state semantics on desktop and mobile. The follow-up Contact CTA context proof confirmed the active radio renders black with white text for query-selected Residential, Commercial, and Trade / Builder states. | Proven locally |
| Fix planning-guide lead-capture labels and compact variants | `src/components/features/contact/LeadCaptureForm.tsx` uses stable ids, `label htmlFor`, `autoComplete`, error `role="alert"`, and sharp `rounded-none` inputs in default, compact, and inline variants. Rendered form/control preflight confirmed 3 named visible fields on desktop and mobile. | Proven locally |
| Fix mobile nav aria/focus behavior | `src/components/layout/Navbar.tsx` uses `aria-expanded`, `aria-controls`, a stable mobile menu id, Escape-to-close handling, body overflow control, and focus transfer to the menu/menu button. | Proven locally |
| Separate finished project proof from in-progress profiles | `src/app/projects/ProjectsContent.tsx` calculates `photoReadyProjects` and `inProgressProjects`, renders photo-ready case studies first, and moves unfinished records into a separately labeled "Project Profiles In Progress" section while keeping routes available. `src/app/projects/[slug]/components/RelatedProjects.tsx` now also labels non-photo related project cards as "Details in progress" so related-card placeholders do not read like finished proof. | Proven locally |
| Implement the representative pilot surfaces | A focused source scan across `/service-areas/northbrook-il/motorized-pergolas`, `/commercial/restaurant-patio-enclosures`, `/guides/louvered-pergolas`, `/systems/saunas`, `/showroom`, `ContactClient`, and `LeadCaptureForm` found no `rounded-xl/2xl/3xl/full`, soft-shadow, gradient CTA, emoji-chip, page-context `/contact?`, or aggressive restaurant proof phrases from the audit. | Proven locally |
| Preserve commercial and project proof standards | Source scan found no remaining public sales hits for "365-day", "$0 Lost", "pay for the system", "pay for itself", or "revenue engine". Restaurant patio enclosure FAQ now frames business-case inputs as project-specific instead of promising a generic financial outcome. Project result copy in `src/lib/projects-data.ts` was softened so the Wade project no longer claims a "true four-season" space or "year-round entertaining." | Proven locally |
| Preserve documented design exceptions | Residual design-pattern scan found 1 large rounded class in the planning-guide reader loading spinner, 5 shadow/depth classes in Navbar flyouts, 27 image gradient/scrim classes in hero media and project/image fallbacks, 8 red/amber validation/error/notice state classes, and 0 proof-risk phrase hits. These match the documented exception categories rather than remaining route-family drift. Static CTA/style audit found 0 bare `/contact` hrefs, 0 literal `/contact?` links, and no unclassified sharp-system exceptions requiring another source patch. | Proven locally |
| Avoid production mutation before approval | `git status --short` shows local tracked and untracked changes only. No stage, commit, push, deploy, Search Console action, production browser mutation, or form submission has been performed. | Proven locally |

Independent verifier note:

- A read-only verifier found no original High-severity source blocker still materially unresolved in the focused audit areas.
- The verifier did identify one small proof-hierarchy cleanup: related project cards could still render placeholder thumbnails without their own in-progress label. That local source gap was fixed by labeling non-photo related project cards in `src/app/projects/[slug]/components/RelatedProjects.tsx`.
- The verifier also confirmed Phase 5 remains an approval-gated production gap, not a source blocker.

## Remaining Gap

The only remaining gap is deliberately approval-gated production work:

1. Stage the approved manifest set.
2. Rerun pre-commit validation.
3. Commit.
4. Push to `origin/edg-positioning`.
5. Verify deployment state.
6. Verify production URLs, render, canonical behavior, sitemap behavior, internal links, analytics script presence, CTA paths, and `/api/leads` safety.
7. Perform Search Console/indexing work only if explicitly approved after live verification.

The goal should not be marked complete until Phase 5 is approved, executed, and verified.
