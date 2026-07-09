# EDG Website Design Consistency Approval Packet - 2026-07-09

This is the short approval page for the local EDG Website design-consistency rollout.

No staging, commit, push, deploy, Search Console action, form submission, or production mutation has been performed from this packet.

The requirement-to-evidence matrix is `docs/codex/design-consistency-requirement-evidence-2026-07-09.md`.

The route-family implementation map is `docs/codex/design-consistency-route-family-map-2026-07-09.md`.

The lead-flow guardrail is `docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md`.

The SEO metadata guardrail is `docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md`.

The live verification URL list is `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md`.

## Current Local State

- Repo: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- Branch: `edg-positioning`
- Baseline commit: `8e6f6dd1cba66b4958770b5dff9ca0ceacf9548e`
- Website source diff: 108 tracked files under `src/app`, `src/components`, and `src/lib`, with 8,656 insertions and 6,447 deletions.
- Validation tooling scope: `scripts/test-contrast.mjs`, refreshed from stale `/design` coverage to current `/html-sitemap` coverage and expanded to include rendered-structure checks, plus `scripts/verify-design-consistency-routes.mjs` for route-contract and legacy-redirect verification, `scripts/verify-design-consistency-manifest.mjs` for stage-set verification, and `scripts/verify-design-consistency-source.mjs` for SEO/lead/CTA/design source guardrails.
- Approval-safe source/tooling stage set: 112 paths, covering 108 website source paths plus 4 validation scripts.
- Deliberate deletion: `src/app/systems/enclosures/EnclosuresGallery.tsx`
- Production status: local only, not staged, not committed, not pushed, not deployed, not live-verified.

## What Approval Would Authorize

If Colton approves the next phase, the approval would authorize:

1. Stage the exact design-consistency source and validation-tooling set listed in `docs/codex/design-consistency-staging-manifest-2026-07-09.md`.
2. Stage the design-consistency docs:
   - `docs/codex/design-consistency-audit-2026-07-08.md`
   - `docs/codex/design-consistency-implementation-status-2026-07-09.md`
   - `docs/codex/design-consistency-staging-manifest-2026-07-09.md`
   - `docs/codex/design-consistency-phase-5-runbook-2026-07-09.md`
   - `docs/codex/design-consistency-approval-packet-2026-07-09.md`
   - `docs/codex/design-consistency-requirement-evidence-2026-07-09.md`
   - `docs/codex/design-consistency-route-family-map-2026-07-09.md`
   - `docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md`
   - `docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md`
   - `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md`
3. Rerun pre-commit validation:
   - `git diff --cached --check`
   - `npm run lint`
   - `npm run routes:check`
   - `node scripts/verify-design-consistency-manifest.mjs`
   - `node scripts/verify-design-consistency-source.mjs`
   - `npx tsc --noEmit --pretty false`
   - `npm run build`
4. Commit the approved staged scope.
5. Push `edg-positioning` to `origin`.
6. Verify deployment state.
7. Verify live production render, live `200` responses, canonical behavior, sitemap behavior, internal links, CTA paths, analytics script presence, and `/api/leads` safety using `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md` as the Phase 5 route contract.

## Exact Approval Choices

Before implementation moves from local-only to commit/push/deploy, Colton should answer these choices explicitly:

| Decision | Recommended default | Effect |
| --- | --- | --- |
| Stage the design-consistency source/tooling/docs manifest | Yes | Allows the approved rollout to be committed after validation passes. |
| Include the audit screenshot folder | No, unless visual evidence should live in git | Adds about 13 MB of screenshot evidence to the commit. |
| Include `output/` local QA artifacts | No | Keeps large local run artifacts out of git. |
| Include `docs/codex/seo-audit-implementation-plan-2026-07-06.md` | No | Keeps a separate SEO planning lane out of this rollout. |
| Submit production test leads | No | Avoids creating Rainmaker handoff records unless Colton separately approves a clearly labeled test lead. |
| Request Search Console indexing or sitemap resubmission | No | Keeps Search Console as a separate post-deploy proof layer unless separately approved. |

## Current Approval Readiness Snapshot

Latest local checks before approval:

- `git diff --check`: passed.
- `npm run lint`: passed.
- `npm run routes:check`: passed with 81 static app routes registered and 1 generated route family acknowledged.
- `npx tsc --noEmit --pretty false`: passed.
- `npm run build`: passed, checked 213 image paths with 0 missing images, generated 82 gallery records without dirtying `src/data/gallery-images.json`, and generated 115 static pages.
- Continuation refresh after contrast evidence: removing duplicate ignored generated `.next/types/* 2.ts` files made `npx tsc --noEmit --pretty false` pass again, and a fresh `npm run build` passed with 213 image paths checked, 0 missing images, 82 gallery records generated, and 115 static pages generated.
- Latest full local validation after adding the exact 108-route Phase 5 URL contract also passed: `git diff --check`, `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false`, and `npm run build`.
- Local production-preview HTTP sweep against the exact 108-route contract passed: 108 routes checked, 108 returned HTTP 200, 0 failures. Evidence is saved at `output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/summary.json`; this is local pre-deploy proof, not production verification.
- Local preview SEO metadata summary from the same 108-route sweep passed: 0 missing titles, 0 missing canonicals, 0 canonical mismatches, 0 routes missing JSON-LD, and the only `noindex, follow` route is `/guides/planning-guide/read`. Evidence is saved at `output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/seo-summary.json`.
- Local production-preview contrast/rendered-structure smoke passed after updating `scripts/test-contrast.mjs` from stale `/design` coverage to `/html-sitemap`: 57 states checked, 57 passed, 0 failed.
- `npm run test:e2e` now passes: 7 tests passed after fixing Contact page `area`/`market` query fallback into the visible location field. The e2e suite includes legacy redirect smoke, retired admin reader checks, invalid/honeypot lead POST guards that do not create external intake records, and Contact CTA query-param preservation.
- Contact CTA context browser proof passed: 3 contextual Contact URLs across desktop and mobile, 6 rendered states, 0 failures, plus a successful mobile jump-to-form check. Evidence is saved at `output/playwright/design-consistency-contact-cta-context-2026-07-09/qa-summary.json`. The Codex in-app Browser connection was attempted first, but its `domSnapshot()` call failed with `TypeError: o.incrementalAriaSnapshot is not a function`, so regular Playwright Chromium was used for this proof.
- Fresh pre-Phase-5 rehearsal on the current worktree passed: `npm run test:e2e` rebuilt production, checked 213 image paths with 0 missing, generated 82 gallery records without dirtying `src/data/gallery-images.json`, generated 115 static pages, and passed 7/7 Playwright tests. A temporary production preview at `http://127.0.0.1:3002` then passed `TEST_URL=http://127.0.0.1:3002 npm run test:contrast` with 57/57 states passing. The preview server was stopped afterward.
- Local route-contract verifier passed against a temporary production preview at `http://127.0.0.1:3004`: `VERIFY_BASE_URL=http://127.0.0.1:3004 VERIFY_OUTPUT=output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-routes.mjs` confirmed 108 documented routes, 108 source-derived routes, 0 source/document drift, 108/108 URL checks passed, 2/2 site checks passed for `/sitemap.xml` and `/robots.txt`, 3/3 legacy redirects passed for `/design`, `/price`, and `/pro`, 4/4 source guardrails passed for analytics/measurement and lead/Rainmaker handoff wiring, sitemap locs were 107/107, JSON-LD count range was 3-7, 10,341 rendered internal links were checked, 514 Contact links were found, 0 unknown internal links were found, and the only noindex route was `/guides/planning-guide/read`.
- Final verifier-hardening refresh on the current worktree passed after the internal-link/source-guardrail verifier update: `npm run build`, `npm run test:e2e`, `TEST_URL=http://127.0.0.1:3004 npm run test:contrast`, and the strengthened route-contract verifier all passed. The refreshed verifier output again confirmed 108/108 routes passed, 2/2 site checks passed, 4/4 source guardrails passed, 10,341 rendered internal links checked, 514 Contact links found, 0 unknown internal links, and only `/guides/planning-guide/read` marked noindex. The preview server was stopped afterward.
- Continuation refresh on the current worktree after the approval-doc updates also passed: `npm run test:e2e` rebuilt production, checked 213 image paths with 0 missing images, generated 82 gallery records, generated 115 static pages, and passed 7/7 Playwright tests; a temporary production preview at `http://127.0.0.1:3004` passed `TEST_URL=http://127.0.0.1:3004 npm run test:contrast` with 57/57 states passing; the route-contract verifier again confirmed 108/108 routes, 2/2 site checks, 4/4 source guardrails, 107/107 sitemap locs, 10,341 internal links, 514 Contact links, 0 unknown internal links, and only `/guides/planning-guide/read` marked noindex. The preview server was stopped afterward.
- Source-guardrail verifier passed locally: `VERIFY_SOURCE_OUTPUT=output/local-preview/design-consistency-source-guardrail-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-source.mjs` confirmed 7/7 source guardrails, including expected sensitive diff scope, no `use client` in metadata-bearing page/layout files, no literal page-context `/contact?` links, no risky proof-language phrases, no Supabase source wording, and only documented rounded/shadow exceptions.
- Staging-manifest verifier was refreshed after adding the source verifier and now confirms 122 manifest paths, 122 approval-safe changed paths, 122 non-mutating dry-run stage paths, 0 missing paths, 0 extra paths, 0 excluded manifest paths, and the deliberate tracked deletion `src/app/systems/enclosures/EnclosuresGallery.tsx`.
- Latest local Browser proof on `http://localhost:3004/commercial/hotel-roof-deck-systems` passed at desktop/default and mobile `390x844`: correct title, one visible H1, main content present, no horizontal overflow, visible contextual contact/phone CTAs, no broken checked images, and no console warnings/errors. The Browser `domSnapshot()` API was unavailable in this session, so structured checks used read-only DOM evaluation plus screenshot evidence.
- Latest post-build continuation refresh passed locally: `npm run lint`, `npm run routes:check`, the source-guardrail verifier, and the staging-manifest verifier passed; `npx tsc --noEmit --pretty false` passed after clearing three ignored generated `.next/types/* 2.ts` duplicates; `npm run test:e2e` rebuilt production, checked 213 image paths with 0 missing images, generated 82 gallery records, generated 115 static pages, and passed 7/7 Playwright tests; the local `http://127.0.0.1:3004` route-contract verifier passed 108/108 routes, 2/2 site checks, 3/3 legacy redirects, and 0 unknown internal links; and `TEST_URL=http://127.0.0.1:3004 npm run test:contrast` passed 57/57 contrast/rendered-structure states.
- Latest route-verifier hardening added explicit legacy redirect checks: `/design` and `/price` must redirect to `/contact`, and `/pro` must redirect to `/trade-partners`. The hardened verifier passed locally against `http://127.0.0.1:3004` with all three returning redirect status `308`.
- Post-verifier code-quality refresh passed locally: `npm run lint`, `npx tsc --noEmit --pretty false`, `git diff --check`, the source-guardrail verifier, and the staging-manifest verifier all passed after the redirect hardening. No generated `.next/types/* 2.ts` duplicates were present before the TypeScript run.
- Additional local dark-preference proof passed: `TEST_URL=http://127.0.0.1:3004 npm run test:contrast:dark` checked the same 57 contrast/rendered-structure states with the browser `prefers-color-scheme` set to dark; 57 passed, 0 failed.
- Current continuation refresh passed locally on the still-running preview at `http://localhost:3004`: in-app Browser checked `/commercial/hotel-roof-deck-systems` at desktop/default and mobile `390x844`, clicked the hero Contact CTA without submitting a lead, and confirmed the Contact URL kept `type=commercial`, `product=hotel-roof-deck-systems`, `location=chicago`, and `source=hotel_roof_deck_hero`; the rendered Contact form prefilled `Location / Zip Code` as `Chicago, IL` and `System Interest` as `Commercial Project`. The same refresh also passed `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false` after clearing ignored generated `.next/types/* 2.ts` duplicates, the source-guardrail verifier, the staging-manifest verifier, the 108-route contract verifier against `http://127.0.0.1:3004`, `git diff --check`, and `TEST_URL=http://127.0.0.1:3004 npm run test:contrast` with 57/57 states passing. No stage, commit, push, deploy, form submission, Search Console action, or production mutation was performed.
- Heavy pre-commit-style refresh passed locally: `npm run build` validated 213 image paths with 0 missing images, generated 82 gallery records, compiled successfully, and generated 115 static pages; `npm run test:e2e` rerun by itself rebuilt production and passed 7/7 Playwright tests; `TEST_URL=http://127.0.0.1:3004 npm run test:contrast:dark` passed 57/57 rendered contrast/structure states. No duplicate generated `.next/types/* 2.ts` files appeared after the build, and `src/data/gallery-images.json` remained clean.
- Source-derived route count: 82 `src/app/**/page.tsx` files.
- Manifest comparison: 122 approval-safe paths expected and 122 listed, with 0 missing and 0 extra paths.
- Live verification URL list: 79 changed page-route candidates, 27 generated project route candidates, and the exact 108 source-derived production URL candidates for the post-deploy smoke.
- Documentation reference scan: the design-consistency markdown docs were scanned for concrete route/path/command-style references; the only unresolved concrete references are expected references to the deliberate deleted `src/app/systems/enclosures/EnclosuresGallery.tsx`.
- Guardrails: no `use client` in metadata-bearing `page.tsx` or `layout.tsx` files; no bare `/contact` hrefs or literal `/contact?` links remain in app/component source; Supabase appears only in "do not describe as active" guardrail language.
- Design exception audit: residual source scan found 1 planning-guide reader spinner rounded class, 5 Navbar flyout shadow/depth classes, 27 image gradient/scrim/fallback classes, 8 red/amber validation/error/notice state classes, and 0 proof-risk phrase hits.

## What Approval Would Not Authorize By Default

The following remain excluded unless Colton explicitly approves them:

- `output/` local QA artifacts, currently about 117 MB and 296 files.
- `docs/codex/seo-audit-implementation-plan-2026-07-06.md`, which belongs to a separate SEO planning lane.
- Generated caches such as `.next/`.
- Local stale generated caches such as `.next-stale-*/`.
- Search Console indexing requests or sitemap resubmission.
- Production form submissions or test leads.

## Optional Evidence Decision

Colton should decide whether to include:

```text
docs/codex/design-consistency-audit-2026-07-08-screenshots/
```

Current size: about 13 MB.

Recommendation: commit the markdown docs, but keep the large `output/` folder local. Commit the screenshot folder only if Colton wants the audit visual evidence preserved in git.

## Recommended Approval Wording

To approve production Phase 5 without ambiguity:

> Approve the recommended design-consistency stage set and docs, exclude `output/` and the separate SEO audit plan, rerun pre-commit validation, commit, push to `origin/edg-positioning`, deploy, and live-verify production. Do not request Search Console indexing unless separately approved.

If the screenshot folder should be committed, add:

> Include the 13 MB audit screenshot folder in the commit.

If Search Console follow-up should happen after live verification, add:

> After live verification, inspect the exact changed URLs in Search Console and request indexing where appropriate.

## Proof Layers To Report After Approval

The final production report should keep these separate:

1. Local validation results.
2. Staged file scope and excluded files.
3. Commit hash and push state.
4. Deployment state.
5. Live URL `200` checks.
6. Desktop/mobile browser proof.
7. Canonical, sitemap, JSON-LD, and internal-link proof.
8. CTA and `/api/leads` safety.
9. Search Console state only if explicitly approved.

Do not describe the rollout as fully complete until the approved production phase has been executed and verified.
