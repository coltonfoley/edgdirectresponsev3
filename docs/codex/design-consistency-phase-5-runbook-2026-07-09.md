# EDG Website Design Consistency Phase 5 Runbook - 2026-07-09

This runbook is for the production phase of the EDG Website design-consistency rollout. It is intentionally approval-gated.

Do not use this runbook to stage, commit, push, deploy, request Search Console indexing, submit forms, or mutate production until Colton explicitly approves the production phase.

The short approval decision packet is `docs/codex/design-consistency-approval-packet-2026-07-09.md`.

The requirement-to-evidence matrix is `docs/codex/design-consistency-requirement-evidence-2026-07-09.md`.

The route-family implementation map is `docs/codex/design-consistency-route-family-map-2026-07-09.md`.

The lead-flow guardrail is `docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md`.

The SEO metadata guardrail is `docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md`.

The live verification URL list is `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md`.

## Approval Required

Acceptable approval should be explicit, for example:

> Approve the recommended design-consistency stage set, rerun validation, commit, push to `origin/edg-positioning`, deploy, and live-verify production.

If Search Console follow-up is wanted, Colton should also explicitly approve that. Search Console is a separate proof layer from live deploy proof.

Before starting, confirm these optional choices are settled:

- Whether to commit the 13 MB screenshot evidence folder.
- Whether to keep `output/` excluded from git. Recommended: exclude it.
- Whether to keep `docs/codex/seo-audit-implementation-plan-2026-07-06.md` excluded from this rollout. Recommended: exclude it.
- Whether production test leads are approved. Recommended: do not submit leads unless Colton approves a clearly labeled internal/test submission.
- Whether Search Console indexing or sitemap resubmission is approved. Recommended: do not request indexing unless separately approved.

## Source Truth Before Starting

Confirm these before any staging:

```bash
pwd
git branch --show-current
git rev-parse HEAD
git status --short
git diff --shortstat -- src/app src/components src/lib
git status --porcelain=v1 -- src/app src/components src/lib scripts/test-contrast.mjs scripts/verify-design-consistency-routes.mjs scripts/verify-design-consistency-manifest.mjs scripts/verify-design-consistency-source.mjs
npm run routes:check
```

Expected local state at the time this runbook was written:

- Working directory: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- Branch: `edg-positioning`
- Baseline commit: `8e6f6dd1cba66b4958770b5dff9ca0ceacf9548e`
- Website source diff: 108 tracked files under `src/app`, `src/components`, and `src/lib`, with 8,656 insertions and 6,447 deletions.
- Approval-safe source/tooling stage set: 112 paths, covering 108 website source paths plus `scripts/test-contrast.mjs`, `scripts/verify-design-consistency-routes.mjs`, `scripts/verify-design-consistency-manifest.mjs`, and `scripts/verify-design-consistency-source.mjs`.
- Remote: `origin https://github.com/coltonfoley/edgdirectresponsev3`

If these differ materially, stop and update the rollout docs before continuing.

## Stage Set

Use `docs/codex/design-consistency-staging-manifest-2026-07-09.md` as the stage-set source.

Stage after approval:

- The 108 tracked website source files listed in the manifest.
- `scripts/test-contrast.mjs`.
- `scripts/verify-design-consistency-routes.mjs`.
- `scripts/verify-design-consistency-manifest.mjs`.
- `scripts/verify-design-consistency-source.mjs`.
- `docs/codex/design-consistency-audit-2026-07-08.md`.
- `docs/codex/design-consistency-implementation-status-2026-07-09.md`.
- `docs/codex/design-consistency-staging-manifest-2026-07-09.md`.
- `docs/codex/design-consistency-phase-5-runbook-2026-07-09.md`.
- `docs/codex/design-consistency-approval-packet-2026-07-09.md`.
- `docs/codex/design-consistency-requirement-evidence-2026-07-09.md`.
- `docs/codex/design-consistency-route-family-map-2026-07-09.md`.
- `docs/codex/design-consistency-lead-flow-guardrail-2026-07-09.md`.
- `docs/codex/design-consistency-seo-metadata-guardrail-2026-07-09.md`.
- `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md`.
- Optionally, `docs/codex/design-consistency-audit-2026-07-08-screenshots/` if Colton wants the 13 MB audit screenshot evidence committed.

Do not stage by default:

- `output/`
- `docs/codex/seo-audit-implementation-plan-2026-07-06.md`
- `.next/`
- Any generated cache or temporary files.

## Pre-Commit Validation

After staging and before committing:

```bash
git diff --cached --check
npm run lint
npm run routes:check
node scripts/verify-design-consistency-manifest.mjs
node scripts/verify-design-consistency-source.mjs
npx tsc --noEmit --pretty false
npm run build
npm run test:e2e
```

Then run the local production-preview contrast/rendered-structure smoke if a preview server is available:

```bash
npm run start -- -p 3002
TEST_URL=http://127.0.0.1:3002 npm run test:contrast
```

Then run the local route-contract verifier against the same or another local production preview:

```bash
VERIFY_BASE_URL=http://127.0.0.1:3002 \
VERIFY_OUTPUT=output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json \
node scripts/verify-design-consistency-routes.mjs
```

Expected build proof from the latest local pass:

- Image validation checks 213 paths.
- Missing images: 0.
- Known orphan candidates remain review-only:
  - `/projects/hildebrant/2.jpg`
  - `/projects/hildebrant/3.jpg`
  - `/projects/ohare/3.jpg`
  - `/images/brand/context-snow.jpg`
  - `/images/brand/hero-pergola-open-louvered-backyard.jpg`
- Next generates 115 static pages.
- Contrast smoke checks 57 states and currently passes with 57 passed, 0 failed.
- Route-contract verifier first confirms the documented 108-route Phase 5 list matches the current source-derived route set, then checks those routes plus `/sitemap.xml`, `/robots.txt`, and key legacy redirects against the supplied base URL. It expects production canonicals at `https://www.edgpatioshade.com`, requires titles and JSON-LD, checks rendered internal links against the known route contract, records Contact CTA links, verifies `/design` and `/price` redirect to `/contact` and `/pro` redirects to `/trade-partners`, and source-checks the root analytics/measurement shell plus lead/Rainmaker handoff hooks without loading analytics or submitting a lead. It currently passes locally with 108 documented routes, 108 source-derived routes, 0 source/document drift, 108 URL checks passed, 0 failed, 2/2 site checks passed, 3/3 legacy redirects passed, 4/4 source guardrails passed, 107/107 sitemap locs, JSON-LD count range 3-7, 10,341 rendered internal links checked, 514 Contact links found, 0 unknown internal links, and only `/guides/planning-guide/read` marked noindex.

## Guardrail Checks Before Commit

Run these before commit:

```bash
git diff --cached --name-only -- src/app/api src/hooks/useLeadSubmission.ts src/lib/analytics.ts src/lib/rainmaker-api.ts src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx src/lib/site-routes.ts src/lib/projects-data.ts src/lib/projects.ts
rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx' || true
rg -n "/contact\?" src/app src/components || true
```

Expected:

- No staged `/api/leads`, Rainmaker helper, sitemap, robots, analytics, lead hook, or `src/lib/projects.ts` changes.
- `src/app/layout.tsx` may be staged only for the skip-link focus styling already documented in the implementation status.
- `src/lib/site-routes.ts` may be staged only for route exposure/public-copy changes, and `src/lib/projects-data.ts` may be staged only for the Wade proof-language cleanup.
- No `use client` in metadata-bearing `page.tsx` or `layout.tsx`.
- No literal page-context `/contact?...` links; contextual CTAs should use `buildContactHref`.

## Commit And Push

Only after the staged diff and validation pass:

```bash
git status --short
git diff --cached --stat
git commit -m "Implement EDG design consistency rollout"
git push origin edg-positioning
```

Report commit hash and push state separately. A pushed commit is not deployment proof.

## Deployment Proof

After push, verify the Vercel/GitHub deployment state through the approved workflow. Keep this separate from local validation and live page proof.

Record:

- Commit hash.
- Branch pushed.
- GitHub check or workflow state.
- Deployment target and deployment URL, if available.
- Whether production has promoted the pushed commit.

Do not claim the site is live just because the push succeeded.

## Live Verification

After production deployment is confirmed, verify live production at `https://www.edgpatioshade.com`.

Use `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md` as the Phase 5 route contract. It currently records 79 changed page-route candidates, 27 generated project route candidates, and the exact 108 source-derived production URL candidates for the broad post-deploy HTTP smoke. Regenerate the live URL set from current source before running the final sweep if the diff changes.

For the broad live HTTP/SEO smoke after deployment, run:

```bash
VERIFY_BASE_URL=https://www.edgpatioshade.com \
VERIFY_OUTPUT=output/live/design-consistency-route-contract-verifier-2026-07-09/summary.json \
node scripts/verify-design-consistency-routes.mjs
```

This is read-only HTTP verification. It does not submit forms or request Search Console indexing.

Minimum live URL checks before or alongside the 108-route broad smoke:

```bash
curl -I https://www.edgpatioshade.com/
curl -I https://www.edgpatioshade.com/sitemap.xml
curl -I https://www.edgpatioshade.com/html-sitemap
curl -I https://www.edgpatioshade.com/contact
curl -I https://www.edgpatioshade.com/systems
curl -I https://www.edgpatioshade.com/systems/pergolas
curl -I https://www.edgpatioshade.com/systems/pergolas/configure
curl -I https://www.edgpatioshade.com/systems/enclosures
curl -I https://www.edgpatioshade.com/systems/saunas
curl -I https://www.edgpatioshade.com/commercial
curl -I https://www.edgpatioshade.com/commercial/restaurant-patio-enclosures
curl -I https://www.edgpatioshade.com/service-areas
curl -I https://www.edgpatioshade.com/service-areas/northbrook-il/motorized-pergolas
curl -I https://www.edgpatioshade.com/service-areas/wilmette-il/louvered-pergolas
curl -I https://www.edgpatioshade.com/service-areas/winnetka-il/louvered-pergolas
curl -I https://www.edgpatioshade.com/guides
curl -I https://www.edgpatioshade.com/guides/louvered-pergolas
curl -I https://www.edgpatioshade.com/guides/planning-guide
curl -I https://www.edgpatioshade.com/guides/pergola-system-fit-review
curl -I https://www.edgpatioshade.com/projects
curl -I https://www.edgpatioshade.com/projects/karp
curl -I https://www.edgpatioshade.com/gallery
curl -I https://www.edgpatioshade.com/showroom
curl -I https://www.edgpatioshade.com/trade-partners
curl -I https://www.edgpatioshade.com/privacy
curl -I https://www.edgpatioshade.com/terms
```

For browser verification, inspect representative desktop and mobile states:

- `/`
- `/systems`
- `/systems/pergolas`
- `/systems/pergolas/configure`
- `/systems/enclosures`
- `/systems/saunas`
- `/commercial`
- `/commercial/restaurant-patio-enclosures`
- `/service-areas`
- `/service-areas/northbrook-il/motorized-pergolas`
- `/service-areas/wilmette-il/louvered-pergolas`
- `/service-areas/winnetka-il/louvered-pergolas`
- `/guides`
- `/guides/louvered-pergolas`
- `/guides/planning-guide`
- `/guides/pergola-system-fit-review`
- `/projects`
- `/projects/karp`
- `/gallery`
- `/showroom`
- `/trade-partners`
- `/contact`
- `/html-sitemap`

Check:

- First viewport renders.
- No obvious horizontal overflow on mobile.
- Header and mobile menu open/close correctly.
- Footer and route exposure are present where expected.
- Forms render but do not submit test leads unless Colton explicitly approves a labeled test lead.
- CTA links preserve expected query context.
- Console has no route-specific errors.

## SEO And Metadata Live Checks

For representative routes, confirm:

- Canonical URL.
- Page title.
- `robots` behavior, especially `/guides/planning-guide/read` remains `noindex, follow`.
- JSON-LD script presence where expected.
- `/sitemap.xml` includes expected route families.
- `/html-sitemap` lists source-backed route families and project routes.

Recommended representative routes:

- `/`
- `/systems/pergolas`
- `/commercial`
- `/service-areas/northbrook-il/motorized-pergolas`
- `/guides/planning-guide/read`
- `/projects/karp`
- `/html-sitemap`

## Lead Flow Safety

Do not submit production leads unless Colton explicitly approves a clearly labeled internal/test submission.

Source/live checks that do not create leads:

- Confirm Contact page renders the project form.
- Confirm CTA URLs carry `type`, `product`, `area` or `location`, and `source` when page context is known.
- Confirm form components still use `useLeadSubmission`.
- Confirm `/api/leads` code and Rainmaker handoff were not staged in this rollout.

If a live lead test is explicitly approved:

- Label it clearly as internal/test in the submitted fields.
- Verify Rainmaker receipt separately from page render proof.
- Report the test lead id and storage destination.

## Search Console

Search Console or indexing follow-up is not part of normal deployment proof.

Only after explicit Search Console approval:

- Use the signed-in browser rule from `AGENTS.md`.
- Inspect exact changed URLs, not a broad sitemap resubmission by default.
- Request indexing only for approved URLs.
- Report Search Console state separately from deployment state.

## Final Report Shape

After the approved production phase, report these as separate proof layers:

1. Local validation commands and results.
2. Staged file scope and excluded files.
3. Commit hash and push state.
4. Deployment state and production promotion proof.
5. Live `200` checks.
6. Browser desktop/mobile proof.
7. Canonical, sitemap, JSON-LD, and internal-link proof.
8. CTA/lead-path safety.
9. Search Console/indexing state only if explicitly approved.

Do not collapse local, pushed, deployed, live-verified, and indexed into one word like "done."
