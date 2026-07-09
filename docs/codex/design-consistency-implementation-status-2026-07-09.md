# EDG Website Design Consistency Implementation Status - 2026-07-09

This document records the current local implementation status for the design consistency rollout proposed in `docs/codex/design-consistency-audit-2026-07-08.md`.

Exact approval-safe staging guidance is recorded in `docs/codex/design-consistency-staging-manifest-2026-07-09.md`.

Approval-gated production-phase steps are recorded in `docs/codex/design-consistency-phase-5-runbook-2026-07-09.md`.

The short approval decision packet is `docs/codex/design-consistency-approval-packet-2026-07-09.md`.

The requirement-to-evidence matrix is `docs/codex/design-consistency-requirement-evidence-2026-07-09.md`.

## Current State

- Repo: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- Branch: `edg-positioning`
- Baseline commit observed during rollout: `8e6f6dd1cba66b4958770b5dff9ca0ceacf9548e`
- Status: local worktree contains implementation changes and QA artifacts.
- Production status: not committed, not pushed, not deployed, and not live-verified.
- Approval gate: Colton approval is still required before staging, committing, pushing, deploying, Search Console work, or any production mutation.

## Implemented Scope

The rollout implemented the audit proposal as a phased local pass across the major route families, preserving metadata, canonicals, sitemap behavior, JSON-LD, route registry behavior, CTA intent links, analytics wiring, and `/api/leads`/Rainmaker handoff.

Completed route-family slices include:

- Commercial hub and commercial detail pages.
- Regional, city, and service-area product pages.
- Guides hub, guide detail pages, planning-guide landing, and reader.
- Projects index and project detail presentation.
- Gallery, showroom, trade partners, contact, and trust/proof pages.
- Systems hub, system detail pages, pergola configurator, shared product gallery, and related system components.
- Legal, utility, error, and residual polish surfaces where the audit found older styling.
- Header, footer, route registry, HTML sitemap, and route exposure helpers.

## Notable Local Changes

- Standardized page-level visual language around sharp editorial surfaces, dark proof sections, consistent button/card primitives, and restrained image scrims.
- Replaced old rounded/pill/soft card patterns with the shared `Button`, `Card`, `IconWrapper`, section, and product-gallery patterns where appropriate.
- Removed the custom enclosure-only gallery shell and routed `/systems/enclosures` through the shared `ProductGallery`.
- Improved `ProductGallery` mobile controls and lightbox semantics.
- Improved pergola configurator form/control semantics while preserving the existing `useLeadSubmission` path to `/api/leads`.
- Aligned the homepage hero form success state with the Contact and guide form patterns by adding polite status semantics and explicit success title/description ids.
- Added a mobile-first Contact page anchor CTA to the project form, matching the planning-guide lead-capture pattern and addressing the audit concern that high-intent mobile pages should expose the form or a form jump in the first viewport.
- Restored Contact page CTA-context preservation for links that pass `area` or `market` without `location`; those values now prefill the visible Location / Zip Code field with readable market names while remaining available as lead metadata.
- Added explicit Contact type selector state styling in `src/app/globals.css` so query-driven radio state and the visible selected state stay aligned after hydration and transitions.
- Flattened the remaining form-surface drop shadows on Contact success, guide lead-capture CTAs, the homepage hero form shell, and the system-fit review success panel so form surfaces use sharp borders and contrast instead of soft depth.
- Removed the remaining page-level `shadow-xl` wrapper around the pergola system-fit review form so the full intake surface now uses the shared sharp `Card` border treatment.
- Normalized the remaining hard-coded page-context `/contact?...` CTA strings through `buildContactHref`, so app/page CTA intent links now use the shared helper instead of hand-built query strings.
- Preserved special behavior for the noindex planning-guide reader and the configurator tool shell.
- Adjusted the pergola configurator mobile shell so the first mobile view opens on the 3D preview, the mobile switcher exposes tab semantics, and the preview includes a compact context label without touching the metadata-bearing server page.
- Replaced unqualified commercial/pergola ROI language with more qualified, project-specific language.
- Tightened the pergola cost guide resale-value FAQ so home-value impact is framed as site-specific rather than a broad resale or luxury-market promise.
- Softened the showroom OpenGraph description from an unverified "only dedicated showroom" superlative to a concrete Spring Grove showroom planning benefit.
- Cleaned remaining public-facing brand-language residue from source after a fresh scan: removed filler "luxury" alt text, softened "weatherproof" and "year-round" public copy, and updated the glass-enclosures OpenGraph image benefit from year-round language to more protected outdoor living language.
- Reworked `/html-sitemap` from the older generic utility shell into a sharp EDG-styled source-backed route directory, preserving its shared route registry and project-record data sources.
- Normalized the remaining Florida/local permit, zoning, and pergola-budget notice panels from amber/blue alert styling to neutral EDG panels with mint icon accents, while preserving the permit/floodplain/cost guidance.
- Normalized the remaining yellow proof/note styling by changing shared review stars to the EDG mint token and changing incomplete project publication notes to a white, sharp EDG panel with mint border treatment.
- Removed the remaining generic shadow from pergola color swatches so finish selection uses border, ring, and mint check treatment instead of soft depth.
- Normalized the skip-link focus state from rounded/shadow styling to a sharp EDG mint border/ring treatment while preserving the `#main-content` target.
- Normalized the shared `BeforeAfter` component from rounded/shadow slider controls to a sharp mint divider and bordered handle. Source search currently shows this component is not mounted by active routes, so this is a component-system cleanup rather than a rendered route change.
- Normalized the global error boundary from red utility styling to the restrained EDG dark/mint utility treatment while preserving the reset action, home link, and development-only diagnostic details.
- Softened finished-project result copy in `src/lib/projects-data.ts` so the Wade project no longer claims a "true four-season" space or "year-round entertaining"; it now describes a protected outdoor living space and an extended comfortable entertaining season.
- Kept valid SEO pages visible instead of hiding pages for visual cleanliness.

## Validation Evidence

Commands run successfully after the final local pass:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run routes:check`
- `npm run build`
- `git diff --check`

Build notes:

- Image validation checked 213 paths.
- Missing images: 0.
- Existing orphan candidates remain the same review items:
  - `/projects/hildebrant/2.jpg`
  - `/projects/hildebrant/3.jpg`
  - `/projects/ohare/3.jpg`
  - `/images/brand/context-snow.jpg`
  - `/images/brand/hero-pergola-open-louvered-backyard.jpg`
- Next generated 115 static pages.
- Route registry check passed with 81 static app routes and 1 generated route family acknowledged.

Latest validation refresh:

- Date: 2026-07-09 continuation.
- Current website source diff is now 108 tracked files with 8,656 insertions and 6,447 deletions across `src/app`, `src/components`, and `src/lib`.
- Current validation tooling scope includes `scripts/test-contrast.mjs`, refreshed from stale `/design` coverage to current `/html-sitemap` coverage and expanded to include rendered-structure checks, `scripts/verify-design-consistency-routes.mjs` for route-contract and legacy-redirect checks, `scripts/verify-design-consistency-manifest.mjs` for stage-set checks, and `scripts/verify-design-consistency-source.mjs` for SEO/lead/CTA/design source guardrails.
- Expanded sensitive/source diff returns `src/app/layout.tsx`, `src/lib/site-routes.ts`, and `src/lib/projects-data.ts`; sitemap, robots, API, lead hook, Rainmaker helper, analytics helper, and `src/lib/projects.ts` source files are unchanged in this rollout.
- `rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'`
  - No matches.
- `rg -n "/contact\?" src/app src/components`
  - No matches.
- `git diff --check`
  - Passed.
- `npm run lint`
  - Passed.
- `npm run routes:check`
  - Passed: 81 static app routes registered, 1 generated route acknowledged.
- `npm run build`
  - Passed from a clean regenerated `.next` cache.
  - Image validation checked 213 paths with 0 missing images and the same 5 orphan candidates listed above.
  - Gallery data generation produced 82 gallery items and did not leave `src/data/gallery-images.json` dirty.
  - Next generated 115 static pages.
- `npx tsc --noEmit --pretty false`
  - Passed after the clean production build regenerated Next type artifacts.
  - The first standalone TypeScript run found stale duplicate generated files under `.next/types/* 2.ts`; the generated `.next` cache was moved to `/tmp/edg-website-validation-cache/next-cache-2026-07-09-validation-refresh` and was not a source-code change.
- Post-verifier proof-hierarchy cleanup:
  - `src/app/projects/[slug]/components/RelatedProjects.tsx` now labels non-photo related project cards as "Details in progress" so related-card placeholders do not read like finished project proof.
  - After this source change, `git diff --check`, `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false`, and `npm run build` passed.
  - Build again checked 213 image paths with 0 missing images, generated 82 gallery items without dirtying `src/data/gallery-images.json`, and generated 115 static pages.
- No staging, commit, push, deployment, Search Console action, production verification, or production mutation was performed.

Final local approval-gate recheck after the rendered SEO/CTA preflight, source-audit refresh, and evidence-doc updates:

- `git diff --check`
  - Passed.
- `npm run routes:check`
  - Passed: 81 static app routes registered, 1 generated route acknowledged.
- `npm run lint`
  - Passed.
- `npx tsc --noEmit --pretty false`
  - Passed.
- `npm run build`
  - Passed.
  - Image validation checked 213 paths with 0 missing images and the same 5 orphan candidates listed above.
  - Gallery data generation produced 82 gallery items and did not leave `src/data/gallery-images.json` dirty.
  - Next generated 115 static pages.
- `rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'`
  - No matches.
- `rg -n "/contact\?" src/app src/components`
  - No matches.
- No staging, commit, push, deployment, Search Console action, form submission, or production mutation was performed.

Final local approval-gate refresh after documentation-integrity and production-baseline evidence:

- `git diff --check`
  - Passed.
- `npm run lint`
  - Passed.
- `npm run routes:check`
  - Passed: 81 static app routes registered, 1 generated route acknowledged.
- `npx tsc --noEmit --pretty false`
  - Passed.
- `npm run build`
  - Passed.
  - Image validation checked 213 paths with 0 missing images and the same 5 orphan candidates listed above.
  - Gallery data generation produced 82 gallery items and did not leave `src/data/gallery-images.json` dirty.
  - Next generated 115 static pages.
  - Build output included the existing Node `DEP0205` deprecation warning and the existing Next edge-runtime static-generation warning; neither blocked the build.
- Manifest comparison remained aligned at 122 approval-safe paths expected and 122 listed, with 0 missing and 0 extra paths.
- Local QA evidence remains untracked under `output/` at 296 files/about 117 MB and is excluded from the default staging set.
- No staging, commit, push, deployment, Search Console action, form submission, or production mutation was performed.

Final local approval-gate refresh after project proof-language cleanup:

- `src/lib/projects-data.ts` was added to the rollout only to soften public Wade project result copy from "true four-season" and "year-round entertaining" language to protected/extended-season language.
- Public source scan for risky proof terms now leaves only intentional qualifying four-season language:
  - `src/app/systems/page.tsx` states glass enclosures are not the same as fully insulated four-season additions.
  - `src/app/systems/enclosures/page.tsx` asks whether a Lumon glass enclosure is the same as a four-season room as part of the FAQ.
- `git diff --check`
  - Passed.
- `npm run lint`
  - Passed.
- `npm run routes:check`
  - Passed: 81 static app routes registered, 1 generated route acknowledged.
- `npx tsc --noEmit --pretty false`
  - Passed.
- `npm run build`
  - Passed.
  - Image validation checked 213 paths with 0 missing images and the same 5 orphan candidates listed above.
  - Gallery data generation produced 82 gallery items and did not leave `src/data/gallery-images.json` dirty.
  - Next generated 115 static pages.
- Manifest comparison remained aligned at 122 approval-safe paths expected and 122 listed, with 0 missing and 0 extra paths.
- Non-mutating `git add --dry-run -- <manifest paths>` returned success and reported 122 paths that would be staged.
- Focused Wade project render QA passed at desktop `1440x1100` and mobile `390x844`:
  - Evidence: `output/playwright/design-consistency-project-proof-wade-2026-07-09/qa-summary.json`.
  - 2 rendered states, 0 failures.
  - Confirmed live local preview status 200, canonical `https://www.edgpatioshade.com/projects/wade`, 5 JSON-LD scripts, no horizontal overflow, no route-specific console errors, expected softened copy present, and old four-season/year-round copy absent.
  - Screenshots:
    - `output/playwright/design-consistency-project-proof-wade-2026-07-09/wade-desktop.png`
    - `output/playwright/design-consistency-project-proof-wade-2026-07-09/wade-mobile.png`
- No staging, commit, push, deployment, Search Console action, form submission, or production mutation was performed.

Current design-system source audit refresh:

- Static CTA source scan:
  - Bare `/contact` href count in app/component source: 0.
  - Literal `/contact?` link count in app/component source: 0.
  - Contextual lead CTAs are routed through `buildContactHref` or intentional non-contact paths such as the fit-review guide/configurator.
- `rg -n "rounded-(xl|2xl|3xl|full)" src/app src/components`
  - Only remaining hit is the `rounded-full` loading spinner in the special noindex planning-guide reader.
- `rg -n "shadow-(sm|md|lg|xl|2xl)" src/app src/components`
  - Remaining hits are the 5 global navigation flyout shadows.
- Color/gradient scan for red, amber, blue, purple, rose, yellow, and gradient utilities:
  - Remaining red utilities are validation/error states in Contact, lead-capture, hero form, system-fit review, and configurator surfaces.
  - Remaining amber utilities are limited to the special noindex planning-guide reader notice.
  - Remaining gradients are image scrims or project image fallback treatments.
- Manifest comparison rerun: 122 approval-safe paths expected and 122 listed, with 0 missing and 0 extra paths.

Rendered QA artifacts:

- `output/production-baseline/design-consistency-production-baseline-2026-07-09/baseline-summary.json`
  - Read-only production baseline before the local design-consistency rollout is staged, committed, pushed, or deployed.
  - 26 representative live production routes checked, 0 failures.
  - `/sitemap.xml` returned 200 with 107 `<loc>` URLs and included representative routes for home, `/systems/pergolas`, `/service-areas/northbrook-il/motorized-pergolas`, `/guides/planning-guide`, and `/projects/karp`.
  - `/robots.txt` returned 200, pointed to the production sitemap, and disallowed `/api/`.
  - This is baseline evidence only. It is not post-deploy verification of the local rollout.
- `output/playwright/design-consistency-seo-cta-preflight-2026-07-09/qa-summary.json`
  - 10 representative approval-gate routes checked at desktop `1440x1100` and mobile `390x844` against production-mode local preview at `http://127.0.0.1:3001`.
  - 20 rendered states, 0 failures.
  - Checked HTTP status, final browser URL where relevant, canonical behavior, robots/noindex behavior, expected JSON-LD types, contextual Contact CTA links, form anchors, console errors, and horizontal overflow.
  - Routes checked: `/service-areas/northbrook-il/motorized-pergolas`, `/commercial/restaurant-patio-enclosures`, `/guides/louvered-pergolas`, `/systems/saunas`, `/showroom`, `/guides/planning-guide`, `/guides/planning-guide/read`, `/contact`, `/projects`, and `/html-sitemap`.
  - Special reader-page proof: raw server HTML for `/guides/planning-guide/read` preserved canonical `/guides/planning-guide/read` plus `noindex, follow`; browser verification correctly observed the unauthenticated client redirect to `/guides/planning-guide`.
- `output/playwright/design-consistency-form-a11y-preflight-2026-07-09/qa-summary.json`
  - 5 form/control surfaces checked at desktop `1440x1100` and mobile `390x844` against production-mode local preview at `http://127.0.0.1:3001`.
  - 10 rendered states, 0 failures.
  - Routes checked: `/contact?type=fit-review&product=pergola&area=north-shore&source=form_a11y_preflight`, `/guides/planning-guide`, `/guides/pergola-system-fit-review`, `/`, and `/systems/pergolas/configure`.
  - Checked HTTP status, minimum expected visible field count, programmatic field names, unnamed buttons, Contact radiogroup/radio state semantics, horizontal overflow, and relevant console/page errors.
  - Field counts passed in both viewports: Contact 7, Planning Guide 3, System Fit Review 29, Homepage 5, and Configurator 3.
  - Local Vercel Analytics and Speed Insights script 404/MIME console noise was classified separately as expected local preview noise. The configurator check used software WebGL flags so the Three.js canvas harness did not mask form/control accessibility results.
- `output/playwright/design-consistency-contact-cta-context-2026-07-09/qa-summary.json`
  - 3 contextual Contact URLs checked at desktop `1440x1100` and mobile `390x844` against production-mode local preview at `http://127.0.0.1:3003`.
  - 6 rendered states, 0 failures.
  - Checked query-driven type selection, project-type prefill, `area` and `market` fallback into the visible Location / Zip Code field, Florida side-copy behavior, visible active radio background/text, visible field count, title, horizontal overflow, framework overlay absence, and relevant console/page errors.
  - Mobile jump-to-form proof passed: `#contact-project-form` was reached, the form became visible, `market=southwest-florida` rendered as `Southwest Florida`, `product=retractable-screens` mapped to `shades`, and the `Trade / Builder` radio rendered with black active background and white text.
  - Browser path: regular Playwright Chromium fallback after the Codex in-app Browser `domSnapshot()` call failed with `TypeError: o.incrementalAriaSnapshot is not a function`.
- `output/playwright/design-consistency-related-projects-2026-07-09/qa-summary.json`
  - `/projects/carmines` checked on desktop `1440x1100` and mobile `390x844` against production-mode local preview at `http://127.0.0.1:3001`.
  - The "More Projects" section rendered 3 related project cards and 3 visible "Details in progress" labels in both viewports.
  - No horizontal overflow was detected in either viewport.
  - Console messages were limited to expected local `next start` Vercel Analytics and Speed Insights script 404/MIME noise.
  - Screenshots:
    - `output/playwright/design-consistency-related-projects-2026-07-09/carmines-related-desktop.png`
    - `output/playwright/design-consistency-related-projects-2026-07-09/carmines-related-mobile.png`
- `output/playwright/edg-trust-pages-slice-2026-07-09-playwright/qa-summary.json`
  - 10 rendered states, 0 failures.
- `output/playwright/edg-systems-slice-2026-07-09-playwright/qa-summary.json`
  - 15 rendered states, 0 failures.
  - Contact sheet: `output/playwright/edg-systems-slice-2026-07-09-playwright/systems-contact-sheet.png`
- `output/playwright/edg-residual-polish-slice-2026-07-09-playwright/qa-summary.json`
  - 12 rendered states, 0 failures.
  - Contact sheet: `output/playwright/edg-residual-polish-slice-2026-07-09-playwright/residual-polish-contact-sheet.png`
- `output/playwright/edg-full-route-smoke-2026-07-09-playwright/qa-summary.json`
  - 108 source-derived URLs checked at desktop size.
  - 81 static routes plus 27 generated project routes.
  - 0 failures.
- `output/playwright/edg-full-mobile-route-smoke-2026-07-09-playwright/qa-summary.json`
  - 108 source-derived URLs checked at mobile size `390x844`.
  - 81 static routes plus 27 generated project routes.
  - 0 failures.

Continuation checks after CTA-helper normalization:

- `rg -n '/contact\?' src/app src/components || true`
  - No remaining literal page-context `/contact?...` links found.
- `npx tsc --noEmit --pretty false`
- `npm run lint`
- `npm run routes:check`
- `npm run build`
  - Image validation still checked 213 paths with 0 missing images and the same 5 orphan candidates.
  - Next generated 115 static pages.
- In-app Browser mobile Contact check at `390x844` on local preview:
  - `/contact` first viewport exposed one visible `#contact-project-form` anchor labeled "Jump to Project Form".
  - Clicking it set the hash to `#contact-project-form`, scrolled the form panel into view, and placed the first name field in the viewport.
  - Browser console reported 0 warnings/errors for the check.
  - Browser `domSnapshot()` was unavailable in this environment due the known `incrementalAriaSnapshot` runtime issue, so the check used Browser Playwright `evaluate`, screenshot evidence, and console logs instead.
- In-app Browser mobile configurator check at `390x844` on production-mode local preview:
  - `/systems/pergolas/configure` loaded with page title `Motorized Pergola Configurator | 3D Planning Tool | EDG`.
  - First mobile state selected `View 3D`, rendered the Three.js canvas at `390x733`, and showed the mobile context heading "Design your pergola in 3D."
  - Tapping the visible `Configure` control switched the selected mobile tab to `Configure`, exposed the "Design Your Pergola" controls panel, and kept the "Send Configuration for Review" CTA visible.
  - Browser console reported 0 warnings/errors for the production-mode check.
- In-app Browser desktop and mobile HTML sitemap check on production-mode local preview:
  - `/html-sitemap` loaded with page title `Sitemap | EDG Patio & Shade` and first-viewport heading "EDG page directory."
  - The page displayed a source-backed route inventory stat of 105 listed pages and rendered the expected route-family sections, including Systems, Commercial, Service Areas, and Project Detail Pages.
  - Sample source-backed links for `/systems/pergolas`, `/commercial`, and `/contact` were present; clicking `/systems/pergolas` navigated locally to the pergola system page.
  - The mobile `390x844` check reported no horizontal overflow.
  - Browser console reported 0 warnings/errors for the desktop, click-through, and mobile checks.
- Continuation checks after local notice-panel normalization:
  - `npm run lint`
  - `npm run routes:check`
  - `npx tsc --noEmit --pretty false`
    - The first run found duplicate generated `.next/types/* 3.ts` files from build output; those duplicate generated files were removed and the rerun passed.
  - `npm run build`
    - Image validation still checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
  - `rg -n "bg-amber|text-amber|border-amber|bg-blue|text-blue|border-blue|bg-red|text-red|border-red" src/app src/components | head -120`
    - Remaining non-EDG colors are red validation/error states plus the documented special noindex planning-guide reader notice.
  - In-app Browser production-mode local preview:
    - `/service-areas/sanibel-outdoor-living/lanai-replacement` loaded on desktop and mobile with 0 console warnings/errors and no horizontal overflow.
    - The Sanibel lanai page retained "Understanding the 50% Rule" and "Bottom Line:" content with 0 amber/blue/red classes in the rendered page.
    - `/guides/pergola-cost` retained "Budget Recommendation" with 0 amber/blue classes and no horizontal overflow.
    - The visible Sanibel lanai CTA routed to `/contact?type=fit-review&product=lanai-replacement&area=sanibel&source=leads-sanibel-lanai-replacement`; Contact loaded with the lead form present and 0 console warnings/errors.
- Continuation checks after form-surface shadow cleanup:
  - `rg -n "shadow-edg-brand|shadow-(sm|md|lg|xl|2xl)" src/components/features/contact src/components/features/home src/app/guides/planning-guide src/components/features/pergola/SystemFitReviewForm.tsx || true`
    - No remaining soft-shadow utility classes in the touched form surfaces.
  - `rg -n "useLeadSubmission|submitLead|trackFormStart|/api/leads|fetch\\(" src/components/features/contact/LeadCaptureForm.tsx src/components/features/contact/ContactClient.tsx src/components/features/home/HeroFormClient.tsx src/components/features/pergola/SystemFitReviewForm.tsx`
    - Form components still use `useLeadSubmission`; no direct `/api/leads` replacement or alternate fetch path was introduced.
  - `npm run lint`
  - `npm run routes:check`
  - `npx tsc --noEmit --pretty false`
    - The first run found duplicate generated `.next/types/* 2.ts` files from build output; those duplicate generated files were removed and the rerun passed.
  - `npm run build`
    - Image validation still checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
  - In-app Browser production-mode local preview:
    - `/guides/planning-guide` loaded on desktop and mobile with the lead form present, 0 form shadow classes, 0 form `rounded-xl`/larger classes, 0 console warnings/errors, and no horizontal overflow.
    - `/contact?type=fit-review&product=pergola&area=north-shore&source=form_surface_qa` loaded with the project form present, `#contact-first-name` present, `#contact-project-type` preselected to `pergola`, 0 form shadow classes, 0 console warnings/errors, and no horizontal overflow.
    - On mobile Contact, the visible `#contact-project-form` jump link set the hash correctly and placed the form and first-name field in the viewport.
- Continuation checks after system-fit review form wrapper cleanup:
  - `rg -n "shadow-(sm|md|lg|xl|2xl)" src/app src/components`
    - The system-fit review page no longer appears in the shadow scan.
    - Remaining shadows are limited to nav flyouts, the skip-link focus state, the before/after drag handle, and one configurator icon tile.
  - `git diff --check`
  - `npm run lint`
  - `npm run routes:check`
    - Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
  - `npx tsc --noEmit --pretty false`
  - `npm run build`
    - Image validation still checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
  - In-app Browser production-mode local preview at `http://127.0.0.1:3001`:
    - `/guides/pergola-system-fit-review` loaded with page title `Pergola System Fit Review | EDG Patio & Shade | EDG Expert Guides`.
    - The form wrapper rendered as `rounded-none transition-all duration-200 bg-surface border border-border p-8` with no `shadow-*` class on desktop and mobile.
    - Browser console reported 0 warnings/errors, and the page reported no horizontal overflow at `1440x1200` or `390x844`.
    - In-app Browser `domSnapshot()` remained unavailable due the known `incrementalAriaSnapshot` runtime issue, so the check used Browser `evaluate`, screenshot evidence, and console logs instead.
    - A standalone Playwright screenshot was used only for the 1440-wide desktop visual artifact because the in-app Browser screenshot output was constrained to the visible browser pane.
  - Screenshot evidence:
    - `output/playwright/design-consistency-fit-review-form-desktop-fullpage-2026-07-09.png`
    - `output/playwright/design-consistency-fit-review-form-mobile-2026-07-09.png`
- Brand/proof-language scan for risky terms including "365-day", "$0", "pay for itself", "revenue engine", "transform your space", "world-class", "leverage", "synergy", and "luxury":
  - No marketing or commercial proof-language hits remain.
  - Remaining "guarantee" hits are legal/privacy wording and a Sanibel permit FAQ question, not sales proof claims.
- Continuation checks after brand-language residue cleanup:
  - Public-facing source copy changed in `ServiceAreaLayout`, `/systems/pergolas`, `/systems/enclosures`, `/systems/enclosures/opengraph-image`, `/guides/pergola-cost`, and `/service-areas/algonquin-il/retractable-screens`.
  - `rg -n -i "luxury|transform your space|world-class|synergy|leverage|local-only|cheapest|pay for itself|revenue engine|guarantee|year-round|four-season|all-season|weatherproof|only dedicated showroom" src/app src/components --glob '!src/app/api/**'`
    - Remaining hits are intentional: glass copy explaining an enclosure is not a fully insulated four-season room, trade-partner copy saying EDG is not local-only, legal privacy wording, and a Sanibel permit FAQ question.
  - `rg -n "href=.*['\"]/contact['\"]|/contact\?" src/app src/components`
    - No matches, so no literal bare/page-context contact query links were reintroduced by the cleanup.
  - `git diff --name-only -- src/app/sitemap.ts src/app/robots.ts src/app/api src/hooks/useLeadSubmission.ts src/lib/analytics.ts src/app/layout.tsx`
    - Only `src/app/layout.tsx` appeared; no sitemap, robots, API, lead hook, or analytics source changes were introduced.
  - `git diff --check`
  - `npm run lint`
  - `npm run routes:check`
    - Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
  - `npx tsc --noEmit --pretty false`
  - `npm run build`
    - Image validation checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
- Continuation checks after review-star and project-note palette cleanup:
  - `rg -n "bg-yellow|text-yellow|border-yellow|fill-yellow" src/app src/components`
    - No remaining yellow utility classes in app/component source.
  - `git diff --check`
  - `npm run lint`
  - `npm run routes:check`
    - Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
  - `npx tsc --noEmit --pretty false`
  - `npm run build`
    - Image validation still checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
  - Playwright production-mode local preview at `http://127.0.0.1:3001`:
    - `/` review section rendered on desktop and mobile with `fill-edg-brand text-edg-brand` stars, computed color/fill `rgb(66, 255, 193)`, and no horizontal overflow at `1440x1200` or `390x844`.
    - `/projects/rosebud` publication note rendered on desktop and mobile with `border-edg-brand/30 bg-white`, `text-text-secondary`, and no horizontal overflow at `1440x1200` or `390x844`.
    - Local console errors were limited to expected Vercel Analytics and Speed Insights proxy script 404/MIME messages under `next start`; no page-specific JavaScript errors were observed.
  - Screenshot evidence:
    - `output/playwright/design-consistency-review-stars-desktop-2026-07-09.png`
    - `output/playwright/design-consistency-review-stars-mobile-2026-07-09.png`
    - `output/playwright/design-consistency-project-note-desktop-2026-07-09.png`
    - `output/playwright/design-consistency-project-note-mobile-2026-07-09.png`
- Continuation checks after pergola color-swatch shadow cleanup:
  - `rg -n "shadow-(sm|md|lg|xl|2xl)|shadow-\\[" src/app src/components`
    - Remaining shadow usage is limited to navigation flyouts, the skip-link focus state, and before/after slider controls that rely on contrast over photography.
  - `git diff --check`
  - `npm run lint`
  - `npm run routes:check`
    - Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
  - `npx tsc --noEmit --pretty false`
  - `npm run build`
    - Image validation still checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
  - In-app Browser production-mode local preview at `http://127.0.0.1:3001`:
    - `/systems/pergolas` loaded with page title `Motorized Louvered Pergolas | Adjustable Roof Systems | EDG`.
    - Desktop and mobile swatches rendered with `box-shadow: none`, visible color chips, selected mint border/ring/check state, 0 console warnings/errors, and no horizontal overflow at `1440x1200` or `390x844`.
  - Screenshot evidence:
    - `output/playwright/design-consistency-pergola-swatches-desktop-2026-07-09.png`
    - `output/playwright/design-consistency-pergola-swatches-mobile-2026-07-09.png`
- Continuation checks after skip-link and before/after handle cleanup:
  - `rg -n --pcre2 "shadow-(sm|md|lg|xl|2xl)|shadow-\\[|focus:rounded(?!-none)|\\brounded-(full|sm|md|lg|xl|2xl|3xl)" src/app src/components`
    - Remaining hits are limited to nav flyout depth and the noindex planning-guide reader spinner.
  - `rg -n "<BeforeAfter|BeforeAfter\\(" src/app src/components`
    - The `BeforeAfter` component is not currently mounted by an active route; its cleanup is source-verified and build-verified.
  - `git diff --check`
  - `npm run lint`
  - `npm run routes:check`
    - Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
  - `npx tsc --noEmit --pretty false`
  - `npm run build`
    - Image validation still checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
  - In-app Browser production-mode local preview at `http://127.0.0.1:3001`:
    - `/gallery` loaded with page title `Project Gallery | EDG Patio & Shade Work`, the `#main-content` landmark present, 0 console warnings/errors, and no horizontal overflow.
    - In-app Browser keyboard focus did not advance to the skip link in this environment, so standalone Playwright was used for the final keyboard-focus proof against the same local preview.
  - Standalone Playwright proof:
    - First `Tab` focused the skip link with `activeHref: "#main-content"` and text `Skip to main content`.
    - Focused skip link computed `borderColor: rgb(66, 255, 193)`, `borderRadius: 0px`, `whiteSpace: nowrap`, `minWidth: max-content`, and no horizontal overflow at desktop and mobile widths.
    - Pressing `Enter` set the URL hash to `#main-content`.
  - Screenshot evidence:
    - `output/playwright/design-consistency-skip-link-focused-desktop-2026-07-09.png`
    - `output/playwright/design-consistency-skip-link-focused-mobile-2026-07-09.png`
- Continuation checks after global error-boundary palette cleanup:
  - `rg -n "bg-red|text-red|border-red|bg-amber|text-amber|border-amber|bg-blue|text-blue|border-blue" src/app/error.tsx src/app/not-found.tsx src/app/guides/planning-guide/read/GuideReadClient.tsx src/components/features/contact src/components/features/pergola/SystemFitReviewForm.tsx src/components/features/home/HeroFormClient.tsx src/app/systems/pergolas/configure/ConfiguratorApp.tsx`
    - `src/app/error.tsx` no longer appears in the red/amber/blue utility scan.
    - Remaining hits are form/configurator validation states plus the documented planning-guide reader amber notice.
  - `git diff --check`
  - `npm run lint`
  - `npm run routes:check`
    - Route registry check passed: 81 static app routes registered, 1 generated route acknowledged.
  - `npx tsc --noEmit --pretty false`
  - `npm run build`
    - The first two build attempts idled before normal Next compile output while reusing the generated `.next` cache.
    - The generated `.next` cache was moved to `/tmp/edg-website-next-cache-2026-07-09-2325`; a clean-cache build then passed.
    - Image validation checked 213 paths with 0 missing images and the same 5 orphan candidates.
    - Next generated 115 static pages.
  - Browser/runtime note:
    - The global `error.tsx` boundary was source/build verified only. No temporary throw route was added just to force the error boundary, so no rendered screenshot was captured for this utility state.
- Continuation checks after mobile navigation accessibility proof:
  - Source inspection confirmed the mobile menu toggle has `aria-expanded`, `aria-controls="site-mobile-menu"`, a stable menu id, Escape-to-close handling, body scroll lock, and focus return to the toggle.
  - In-app Browser production-mode local preview at `http://127.0.0.1:3001` with viewport `390x844`:
    - `/` loaded with page title `Motorized Pergolas & Retractable Screens | EDG Patio & Shade`.
    - Initial state exposed one menu button with label `Open menu`, `aria-expanded="false"`, `aria-controls="site-mobile-menu"`, no mounted mobile menu, no body scroll lock, and no horizontal overflow.
    - Opening the menu changed the toggle label to `Close menu`, set `aria-expanded="true"`, mounted `#site-mobile-menu` with `aria-label="Mobile navigation"` and `tabindex="-1"`, moved focus into the menu, locked body scroll, exposed expected route-family links, and kept the Start Project CTA at `/contact?type=fit-review&source=nav`.
    - Pressing Escape closed the menu, returned `aria-expanded` to `false`, restored body scroll, removed `#site-mobile-menu`, and returned focus to the menu button.
    - Browser console reported 0 warnings/errors for the check.
  - Screenshot evidence:
    - `output/playwright/design-consistency-mobile-nav-open-2026-07-09.png`
- Homepage hero form success-state source check:
  - `HeroFormClient` success state now uses `role="status"`, `aria-live="polite"`, `aria-labelledby`, and `aria-describedby`.
  - This was validated by source inspection plus TypeScript/lint checks rather than a browser submit, because submitting the form would create a lead side effect.
- Route exposure source check:
  - `Navbar`, `Footer`, `/service-areas`, `/html-sitemap`, and `/sitemap.xml` now derive route-family exposure from `src/lib/site-routes.ts` helpers.
  - Header and footer retain small presentational ordering lists for Work/Contact link order, but the eligible routes still come from the registry.
  - `npm run routes:check` passed after this inspection.
- Utility page source check:
  - `/privacy` and `/terms` contact blocks already use shared sharp `Card` styling.
  - `/html-sitemap` now keeps `getHtmlSitemapRoutes` and `getAllProjects` as its data source while using the same dark hero, section rhythm, border panels, and EDG label treatment as the rest of the local rollout.
- Landmark and metadata source checks:
  - `rg -n "<main|</main>|id=\"main-content\"" src/app src/components` only returns the root layout `main`, so the nested-main audit finding is closed locally.
  - `rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx'` returns no matches, so metadata-bearing route files were not converted into client pages.
- Form and lead-path source checks:
  - `ContactClient`, `LeadCaptureForm`, and `HeroFormClient` use stable ids, associated labels, autocomplete values, status/error semantics, and `aria-busy`/status behavior where relevant.
  - Contact project-type selection now exposes `role="radiogroup"` and `role="radio"`/`aria-checked`.
  - `git diff -- src/app/api src/lib/analytics.ts src/app/layout.tsx` produced no lead API or analytics removal diff; form components still submit through `useLeadSubmission`.
- CTA and proof-language source checks:
  - `rg -n "href=\\{buildContactHref|href=\\\"/contact\\\"|href='/contact'|/contact\\?" src/app src/components` shows page-context lead CTAs using `buildContactHref` and no remaining literal `/contact?...` strings.
  - Risky proof-language scan now finds no unverified showroom superlative, revenue-guarantee, or generic EDG brand-avoidance phrases that need local action.
- `git diff --check`

QA notes:

- Local `next start` does not serve Vercel Analytics/Speed Insights proxy scripts; local 404/MIME console entries for those scripts were treated as preview noise.
- The pergola configurator canvas passed pixel/render checks. Three.js deprecation/performance warnings were recorded as local canvas warnings, not page failures.
- The configurator mobile shell was tightened after the original canvas checks: mobile now starts on the 3D preview instead of hiding the visual behind the controls panel, while keeping the configurator as a special tool route.
- Final design-token scan shows remaining intentional exceptions rather than broad marketing-page drift: image scrims/fallback gradients, navigation depth shadows, and the noindex planning-guide reader spinner.
- `/html-sitemap` is allowed to list `/contact` as a route-inventory link. Page-context lead CTAs should still carry source/type/product/location context.

## Requirement Completion Audit

Current evidence supports the local implementation portion of the goal:

| Requirement | Current Evidence | Status |
| --- | --- | --- |
| Implement the audit proposal as a phased design-system rollout | Route-family source changes across commercial, service-area, guide, project, trust, systems, utility, nav/footer, and shared components | Locally implemented |
| Preserve SEO pages and route inventory | `npm run routes:check`; 108-route desktop and mobile smoke summaries; valid pages retained instead of hidden | Verified locally |
| Preserve metadata/canonicals/JSON-LD/sitemap behavior | `npm run build`; route smoke captured titles/canonicals; no metadata pages converted wholesale to client components | Verified locally |
| Preserve lead flow and Rainmaker handoff | `/api/leads` code unchanged; form work kept `useLeadSubmission`; contextual CTA links use source/type/product where appropriate; literal `/contact?...` page links normalized through `buildContactHref` | Verified locally by source inspection and route QA |
| Preserve analytics wiring | Root analytics code not removed; local preview analytics proxy noise documented as expected because `next start` does not serve Vercel proxy scripts | Verified locally |
| Verify rendered desktop and mobile behavior | Family contact sheets plus full desktop/mobile route smoke summaries | Verified locally |
| Production verification gates | No commit, push, deploy, Search Console, or production mutation performed | Pending approval |

The only incomplete portion is the intentionally gated production phase: stage, commit, push, deploy, and live verification after Colton approval.

## SEO And Lead-Flow Safeguards

Preserved or verified:

- Metadata-bearing `page.tsx` files remain server components where metadata is needed.
- No broad `use client` conversion was introduced to metadata pages.
- Canonical URL patterns and route inventory remain registered.
- `src/app/sitemap.ts` behavior is preserved through the route registry.
- `src/app/html-sitemap/page.tsx` continues to use source-backed route/project data.
- `/api/leads` and Rainmaker handoff code were not changed.
- Contact/form work preserved `useLeadSubmission` and existing submission payload flow.
- Homepage hero form success-state semantics were improved without changing form fields, submit payload, or `useLeadSubmission`.
- Contact mobile now exposes a first-viewport anchor to the form without submitting data or changing `/api/leads`.
- Page-context contact links now use `buildContactHref`; the remaining global bare `/contact` behavior is limited to route inventory/global exposure contexts where allowed.
- Valid SEO routes, local pages, guide pages, and generated project pages were retained.

Latest guardrail recheck:

- `git diff --name-only -- src/app/api src/hooks src/lib/analytics.ts src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts`
  - Only `src/app/layout.tsx` appeared, and its diff is limited to skip-link focus styling.
  - No `/api/leads`, hook, analytics helper, sitemap, or robots source changes appeared in this guardrail diff.
- `git diff -- src/app/layout.tsx`
  - Confirms the root analytics/Tag Manager wiring was not removed; the only layout change is the sharp EDG skip-link focus treatment.
- `rg -n "^['\"]use client['\"]" src/app --glob 'page.tsx' --glob 'layout.tsx' || true`
  - No matches, so metadata-bearing route pages and layouts were not converted to client components.
- `rg -n "/contact\?" src/app src/components || true`
  - No matches, so literal page-context contact query strings remain normalized through helpers rather than hand-built route strings.
- `npm run routes:check`
  - Passed: 81 static app routes registered, 1 generated route acknowledged.

Latest metadata and schema recheck:

- `git diff --name-only -G 'alternates|canonical|robots|openGraph|twitter|metadataBase|generateMetadata' -- src/app src/components src/lib`
  - Returned `src/app/commercial/page.tsx` and `src/app/service-areas/winnetka-il/louvered-pergolas/page.tsx`.
  - Both retain their canonical routes: `/commercial` and `/service-areas/winnetka-il/louvered-pergolas`.
  - The commercial hub metadata copy was tightened from generic "motorized pergolas and screens" language to broader commercial system planning language.
  - The Winnetka louvered pergola title was softened from "Estate-Grade" to "Outdoor Room Planning" while retaining the same descriptive local intent and canonical path.
- Additional metadata copy changes reviewed in source include Wilmette and Winnetka hub pages, the guides hub, the planning-guide landing/reader, and select service-area pages. These are copy-positioning updates that keep existing route paths and canonical patterns intact.
- `git diff --name-only -G 'application/ld\+json|JsonLd|jsonLd|BreadcrumbList|FAQPage|LocalBusiness|generateServiceSchema|generateFAQSchema' -- src/app src/components src/lib`
  - Returned `src/app/commercial/page.tsx`, selected service-area pages, `src/app/systems/appliances/page.tsx`, and `src/app/systems/saunas/SaunasPageClient.tsx`.
  - The schema changes keep the existing `application/ld+json` script pattern and shared schema helpers. The commercial hub now emits Service, BreadcrumbList, and FAQ schema together instead of FAQ-only schema.
  - Selected local product pages keep FAQ and Service schema on the same canonical routes; changes are mostly formatted helper calls, updated image references, or qualified copy.
- `git diff --name-only -- src/app/sitemap.ts src/app/robots.ts src/app/api src/hooks/useLeadSubmission.ts src/lib/analytics.ts src/lib/rainmaker-api.ts src/app/layout.tsx src/lib/site-routes.ts src/lib/projects-data.ts src/lib/projects.ts`
  - Returned `src/app/layout.tsx`, `src/lib/projects-data.ts`, and `src/lib/site-routes.ts`.
  - `src/app/layout.tsx` diff is limited to skip-link focus styling. Metadata base, root canonical, OpenGraph defaults, robots settings, organization JSON-LD, analytics, Speed Insights, and GTM wiring remain in the file.
- `src/lib/projects-data.ts` diff is limited to Wade project proof-language cleanup and does not drive XML sitemap generation.
- `src/app/html-sitemap/page.tsx` was restyled, but still uses `getHtmlSitemapRoutes()` and `getAllProjects()` as its source-backed data inputs.
- `src/lib/site-routes.ts` changes are route-registry presentation changes: `/showroom` is exposed under the Work nav group, and several descriptions were softened away from overclaims such as "year-round" or installer-only positioning. `xmlSitemapRoutes` and generated sitemap behavior were not changed.

## Known Exceptions To Preserve

- Planning-guide reader remains visually distinct and noindex/follow.
- Configurator remains a tool shell rather than a normal editorial landing page.
- Image scrims remain allowed for hero readability.
- Project fallback gradients remain a fallback behavior for missing or incomplete project media.
- Global nav/footer `/contact` links are allowed; page-context CTAs should carry source/type/product/location context.

## Approval-Safe Staging Manifest

Current worktree inventory from `git diff --name-status`, `git diff --stat`, and `git status --porcelain=v1`:

- Tracked website source implementation: 108 changed tracked files, with 8,656 insertions and 6,447 deletions.
- Validation tooling implementation: `scripts/test-contrast.mjs`, refreshed from stale `/design` coverage to current `/html-sitemap` coverage and expanded to include rendered-structure checks, `scripts/verify-design-consistency-routes.mjs` for reusable local/live route-contract checks, `scripts/verify-design-consistency-manifest.mjs` for reusable stage-set checks, plus `scripts/verify-design-consistency-source.mjs` for reusable source guardrail checks.
- Deliberate tracked deletion: `src/app/systems/enclosures/EnclosuresGallery.tsx`, because `/systems/enclosures` now uses the shared `ProductGallery`.
- Untracked audit evidence: `docs/codex/design-consistency-audit-2026-07-08.md` and `docs/codex/design-consistency-audit-2026-07-08-screenshots/`.
- Untracked rollout docs: 10 design-consistency markdown docs under `docs/codex/`, including the implementation status, staging manifest, guardrails, approval packet, route-family map, requirement evidence, runbook, and live verification URL list.
- Untracked local QA output: `output/`, currently 296 files and about 117 MB.
- Separate untracked SEO-planning artifact: `docs/codex/seo-audit-implementation-plan-2026-07-06.md`.

Recommended stage set after Colton approval:

- Source rollout files under `src/app/`, grouped across homepage, commercial, guides, service areas, systems, outdoor rooms, projects, gallery, showroom, trade partners, legal, utility, and error pages.
- Shared component and layout files under `src/components/features/`, `src/components/layout/`, and `src/components/ui/ImageSlider.tsx`.
- Route registry helper file: `src/lib/site-routes.ts`.
- Generated public image source now in scope: `src/app/systems/enclosures/opengraph-image.tsx`, updated only to soften the public benefit copy.
- Live verification URL list: `docs/codex/design-consistency-live-verification-url-list-2026-07-09.md`, derived from the current diff with 79 changed page-route candidates, 27 generated project route candidates, and the exact 108 source-derived production URL candidates for Phase 5.
- Manifest verifier passed: the approval-safe stage list contains all 108 currently changed tracked source files under `src/app`, `src/components`, and `src/lib`, `scripts/test-contrast.mjs`, `scripts/verify-design-consistency-routes.mjs`, `scripts/verify-design-consistency-manifest.mjs`, `scripts/verify-design-consistency-source.mjs`, plus the 10 design-consistency docs. The manifest lists 122 approval-safe paths total with no missing, extra, or excluded paths in that source/doc packet.
- Non-mutating `git add --dry-run -- <manifest paths>` returned success inside the manifest verifier and reported 122 paths that would be staged. The only manifest-listed tracked deletion is `src/app/systems/enclosures/EnclosuresGallery.tsx`; excluded local evidence and separate SEO-planning paths are not present in the manifest.
- Design-consistency documentation reference scan covered the design-consistency markdown docs. The only unresolved concrete references are the expected references to the deliberate tracked deletion `src/app/systems/enclosures/EnclosuresGallery.tsx`; wildcard/glob references such as `src/app/**/page.tsx`, `src/app/commercial/**/page.tsx`, and family directory globs are documentation patterns rather than concrete file links.
- After adding the exact 108-route Phase 5 URL contract, the full local validation stack passed again: `git diff --check`, `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false`, and `npm run build`.
- Local production-preview HTTP sweep against the exact 108-route contract passed: 108 routes checked, 108 returned HTTP 200, 0 failures. Evidence is saved at `output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/summary.json`; this remains local pre-deploy proof only.
- Local preview SEO metadata summary from the same 108-route sweep passed: 0 missing titles, 0 missing canonicals, 0 canonical mismatches, 0 routes missing JSON-LD, and the only `noindex, follow` route is `/guides/planning-guide/read`. Evidence is saved at `output/local-preview/design-consistency-108-url-http-sweep-2026-07-09/seo-summary.json`.
- Local production-preview contrast/rendered-structure smoke passed after refreshing `scripts/test-contrast.mjs` from stale `/design` coverage to `/html-sitemap`: 57 states checked, 57 passed, 0 failed. The check now covers contrast plus main content, visible H1 count, framework overlay absence, horizontal overflow, and visible near-viewport images.
- Local route-contract verifier passed against a temporary production preview at `http://127.0.0.1:3004`: `VERIFY_BASE_URL=http://127.0.0.1:3004 VERIFY_OUTPUT=output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-routes.mjs` confirmed 108 documented routes, 108 source-derived routes, 0 source/document drift, 108/108 URL checks passed, 2/2 site checks passed for `/sitemap.xml` and `/robots.txt`, 3/3 legacy redirects passed for `/design`, `/price`, and `/pro`, 4/4 source guardrails passed for analytics/measurement and lead/Rainmaker handoff wiring, sitemap locs were 107/107, JSON-LD count range was 3-7, 10,341 rendered internal links were checked, 514 Contact links were found, 0 unknown internal links were found, and the only noindex route was `/guides/planning-guide/read`.
- Final verifier-hardening refresh after the internal-link/source-guardrail verifier update passed: `npm run build`, `npm run test:e2e`, `TEST_URL=http://127.0.0.1:3004 npm run test:contrast`, and the strengthened route-contract verifier all passed. The refreshed route-contract verifier again confirmed 108/108 routes passed, 2/2 site checks passed, 4/4 source guardrails passed, 10,341 rendered internal links checked, 514 Contact links found, 0 unknown internal links, and only `/guides/planning-guide/read` marked noindex. The preview server was stopped afterward.
- Source-guardrail verifier passed: `VERIFY_SOURCE_OUTPUT=output/local-preview/design-consistency-source-guardrail-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-source.mjs` confirmed 7/7 source guardrails, including expected sensitive diff scope, no metadata-bearing page/layout client conversion, no literal page-context `/contact?` links, no risky proof-language phrases, no Supabase source wording, and only documented rounded/shadow exceptions.
- Continuation refresh after the approval-doc alignment passed on the current worktree: `npm run test:e2e` rebuilt production and passed 7/7 tests, `TEST_URL=http://127.0.0.1:3004 npm run test:contrast` passed 57/57 states, `VERIFY_BASE_URL=http://127.0.0.1:3004 VERIFY_OUTPUT=output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-routes.mjs` passed 108/108 route checks and 2/2 site checks, `VERIFY_SOURCE_OUTPUT=output/local-preview/design-consistency-source-guardrail-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-source.mjs` passed 7/7 source guardrails, and `VERIFY_MANIFEST_OUTPUT=output/local-preview/design-consistency-manifest-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-manifest.mjs` passed with 122 manifest paths, 122 approval-safe changed paths, and 122 non-mutating dry-run stage paths.
- Latest local Browser proof on `http://localhost:3004/commercial/hotel-roof-deck-systems` passed at desktop/default and mobile `390x844`: correct title, one visible H1, main content present, no horizontal overflow, visible contextual contact/phone CTAs, no broken checked images, and no console warnings/errors. The Browser `domSnapshot()` API was unavailable in this session, so structured checks used read-only DOM evaluation plus screenshot evidence.
- Latest post-build continuation refresh passed locally: `npm run lint`, `npm run routes:check`, the source-guardrail verifier, and the staging-manifest verifier passed; `npx tsc --noEmit --pretty false` passed after clearing three ignored generated `.next/types/* 2.ts` duplicates; `npm run test:e2e` rebuilt production, checked 213 image paths with 0 missing images, generated 82 gallery records, generated 115 static pages, and passed 7/7 Playwright tests; the local `http://127.0.0.1:3004` route-contract verifier passed 108/108 routes, 2/2 site checks, 3/3 legacy redirects, and 0 unknown internal links; and `TEST_URL=http://127.0.0.1:3004 npm run test:contrast` passed 57/57 contrast/rendered-structure states.
- Latest route-verifier hardening added explicit legacy redirect checks: `/design` and `/price` must redirect to `/contact`, and `/pro` must redirect to `/trade-partners`. The hardened verifier passed locally against `http://127.0.0.1:3004` with all three returning redirect status `308`.
- Post-verifier code-quality refresh passed locally: `npm run lint`, `npx tsc --noEmit --pretty false`, `git diff --check`, the source-guardrail verifier, and the staging-manifest verifier all passed after the redirect hardening. No generated `.next/types/* 2.ts` duplicates were present before the TypeScript run.
- Additional local dark-preference proof passed: `TEST_URL=http://127.0.0.1:3004 npm run test:contrast:dark` checked the same 57 contrast/rendered-structure states with the browser `prefers-color-scheme` set to dark; 57 passed, 0 failed.
- Current continuation refresh passed locally on the still-running preview at `http://localhost:3004`: in-app Browser checked `/commercial/hotel-roof-deck-systems` at desktop/default and mobile `390x844`, clicked the hero Contact CTA without submitting a lead, and confirmed the Contact URL kept `type=commercial`, `product=hotel-roof-deck-systems`, `location=chicago`, and `source=hotel_roof_deck_hero`; the rendered Contact form prefilled `Location / Zip Code` as `Chicago, IL` and `System Interest` as `Commercial Project`. The same refresh also passed `npm run lint`, `npm run routes:check`, `npx tsc --noEmit --pretty false` after clearing ignored generated `.next/types/* 2.ts` duplicates, the source-guardrail verifier, the staging-manifest verifier, the 108-route contract verifier against `http://127.0.0.1:3004`, `git diff --check`, and `TEST_URL=http://127.0.0.1:3004 npm run test:contrast` with 57/57 states passing. No stage, commit, push, deploy, form submission, Search Console action, or production mutation was performed.
- Heavy pre-commit-style refresh passed locally: `npm run build` validated 213 image paths with 0 missing images, generated 82 gallery records, compiled successfully, and generated 115 static pages; `npm run test:e2e` rerun by itself rebuilt production and passed 7/7 Playwright tests; `TEST_URL=http://127.0.0.1:3004 npm run test:contrast:dark` passed 57/57 rendered contrast/structure states. No duplicate generated `.next/types/* 2.ts` files appeared after the build, and `src/data/gallery-images.json` remained clean. No stage, commit, push, deploy, form submission, Search Console action, or production mutation was performed.
- Design audit and implementation docs:
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
  - `scripts/test-contrast.mjs`
  - `scripts/verify-design-consistency-routes.mjs`
  - `scripts/verify-design-consistency-manifest.mjs`
  - `scripts/verify-design-consistency-source.mjs`
  - `docs/codex/design-consistency-audit-2026-07-08-screenshots/` if Colton wants the screenshot evidence committed with the audit packet.

Do not stage by default:

- `output/` because it is local QA evidence and large. Keep it local unless Colton explicitly wants the rendered QA artifacts committed, or cherry-pick a small subset of screenshots into `docs/codex/`.
- `docs/codex/seo-audit-implementation-plan-2026-07-06.md` because it belongs to the separate SEO audit lane, not this design-consistency rollout, unless Colton explicitly approves bundling it.
- Generated caches such as `.next` or the moved `/tmp/edg-website-next-cache-2026-07-09-2325` cache. These are not part of the source rollout.

Pre-commit validation to rerun after staging but before push:

1. `git diff --cached --check`
2. `npm run lint`
3. `npm run routes:check`
4. `node scripts/verify-design-consistency-manifest.mjs`
5. `node scripts/verify-design-consistency-source.mjs`
6. `npx tsc --noEmit --pretty false`
7. `npm run build`
8. Targeted desktop/mobile browser verification for representative route families and CTA paths.
9. Local production-preview contrast/rendered-structure smoke:
   - `npm run start -- -p 3002`
   - `TEST_URL=http://127.0.0.1:3002 npm run test:contrast`
10. Local route-contract verifier:
   - `VERIFY_BASE_URL=http://127.0.0.1:3002 VERIFY_OUTPUT=output/local-preview/design-consistency-route-contract-verifier-2026-07-09/summary.json node scripts/verify-design-consistency-routes.mjs`

## Phase Coverage Map

| Audit phase | Current local evidence | Status |
| --- | --- | --- |
| Phase 0: read-only audit artifacts | `docs/codex/design-consistency-audit-2026-07-08.md` plus screenshot folder and manifest | Complete locally |
| Phase 1: design-system and routing definitions | Shared route registry helpers, CTA helper normalization, mobile nav accessibility proof, form label/id semantics, sharp-card/button enforcement, known-exception list | Complete locally |
| Phase 2: representative pilot pages | Original pilot families have local changes across Northbrook pergolas, restaurant patio enclosures, louvered pergolas guide, saunas, showroom, and shared lead form primitives | Complete locally, broadened beyond pilot |
| Phase 3: route-family rollout | Source changes now span service-area product pages, commercial detail pages, guide detail pages, system detail pages, city/region pages, hubs, legal/utility pages, nav/footer, and shared components | Complete locally |
| Phase 4: QA and browser verification | Lint, TypeScript, route registry, clean-cache production build, family route smoke summaries, full desktop/mobile route smoke summaries, and targeted Browser/Playwright checks recorded above | Complete locally |
| Phase 5: commit, push, deploy, live verification | Not performed; no production mutation, Search Console request, commit, push, or deploy has occurred | Pending Colton approval |

## Reviewer Approval Checklist

Before production implementation begins, Colton should explicitly approve or adjust:

- Scope: proceed with the broad local design-consistency rollout rather than limiting to the original five-route pilot.
- Design strictness: accept the sharp EDG editorial system plus documented exceptions for image scrims, project fallback gradients, nav flyout depth, the planning-guide reader, and the configurator tool shell.
- Stage set: include the 108 tracked website source changes, the deliberate enclosure gallery deletion, `src/lib/site-routes.ts`, `src/lib/projects-data.ts`, `src/app/systems/enclosures/opengraph-image.tsx`, `src/app/globals.css`, `scripts/test-contrast.mjs`, `scripts/verify-design-consistency-routes.mjs`, `scripts/verify-design-consistency-manifest.mjs`, `scripts/verify-design-consistency-source.mjs`, and the design audit/status docs.
- Evidence artifacts: decide whether to commit the 13 MB audit screenshot folder; keep the 117 MB, 296-file `output/` QA folder local unless explicitly approved.
- Exclusions: keep `docs/codex/seo-audit-implementation-plan-2026-07-06.md` out of this design rollout unless explicitly bundled.
- Production permission: approve staging, commit, push to `origin/edg-positioning`, deployment, and live verification as one controlled production phase.
- Search Console permission: treat indexing or Search Console follow-up as a separate approval after live deployment proof.

An approval for the next phase should be concrete, for example: approve the recommended design-consistency stage set, rerun pre-commit validation, commit, push, deploy, and live-verify production. Without that approval, the work should remain local.

## Remaining Approval Gate

The local implementation is ready for Colton review, but the full production rollout is not complete until explicitly approved and then executed:

1. Stage the intended implementation files only.
2. Commit with a design-consistency rollout message.
3. Push `edg-positioning` to GitHub.
4. Deploy through the approved production workflow.
5. Verify production URLs, render, canonical behavior, sitemap behavior, internal links, analytics scripts, CTA paths, and `/api/leads` safety.
6. Run any Search Console/indexing follow-up only if explicitly approved.

Do not perform the production steps above without Colton approval.
