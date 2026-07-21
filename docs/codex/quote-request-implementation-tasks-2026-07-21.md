# EDG Quote-Request Implementation Tasks

**Owner decision:** Make the website simpler and focused on quote requests.
**Strategy:** `docs/codex/quote-request-content-strategy-2026-07-21.md`
**Working branch:** `edg-positioning`
**Starting commit:** `7f721b1`
**Status:** In progress

## Outcome

The live EDG website uses one plain-language sales action—**Request a Quote**—and one standard sales form. The form requires only full name, email, phone, and interest. Visitors can optionally add location, project details, and photos. Existing SEO routes and the Rainmaker lead handoff remain intact.

## Constraints

- Preserve the existing uncommitted analytics, anonymous-submission-ID, retry, privacy-log, and attachment work.
- Preserve `/api/leads` and Rainmaker as the sales-lead path.
- Preserve URLs, canonicals, indexability, sitemap behavior, structured data, and useful internal links.
- Keep accurate price, permit, structural, safety, service-area, and product qualifications.
- Keep the planning-guide delivery form as the one intentional non-sales form.
- Do not send a realistic production test lead without explicit approval.

## Tasks

### 1. Baseline and architecture

- [x] Verify folder, branch, commit, and working tree.
- [x] Review source-of-truth, lead-flow, SEO, and image rules.
- [x] Audit live pages, CTA labels, intent parameters, and current forms.
- [x] Reconcile the existing uncommitted lead-instrumentation work.
- [x] Record the final implementation file set before commit: 112 staged files spanning the strategy/task documents, shared form and wrappers, CTA/copy updates, preserved lead instrumentation, and tests.

### 2. Standard quote form

- [x] Create one reusable quote-request form component.
- [x] Require full name, email, phone, and at least one interest.
- [x] Split full name safely into the existing first/last-name lead fields.
- [x] Include all current EDG product/audience interests plus “Not sure yet,” with multiple selections allowed.
- [x] Add a collapsed optional section for city/ZIP, project details, and direct photo upload.
- [x] Do not ask visitors to paste a photo or plan link.
- [x] Reuse the existing photo preparation and Rainmaker attachment path.
- [x] Keep photo uploads optional and preserve entered data after errors.
- [x] Use one form ID while retaining source page, market, CTA position, and campaign metadata.
- [x] Add plain success and error language.
- [x] Provide accessible labels, focus behavior, status messages, and keyboard controls.

### 3. Primary conversion surfaces

- [x] Replace the homepage hero intake with a compact version of the standard quote form; keep interests collapsed until opened and allow multiple selections.
- [x] Simplify the homepage hero promise and buyer-facing proof.
- [x] Replace the contact-page intake with the standard quote form.
- [x] Remove the Residential / Trade / Commercial pre-form selector.
- [x] Update contact metadata and schema from consultation/assessment language to quote language.

### 4. Specialty form consolidation

- [x] Replace the pergola budget-range form with the standard quote form.
- [x] Replace the Pergola System Fit Review form with the standard quote form.
- [x] Replace the screen fit/budget form with the standard quote form.
- [x] Simplify the pergola configurator modal to the four required information groups and pass the configuration automatically.
- [x] Preserve product, market, page, and configurator context behind the scenes.
- [x] Keep the planning-guide download form unchanged as a non-sales exception.

### 5. CTA standardization

- [x] Change the navigation CTA to **Request a Quote**.
- [x] Change the footer sales CTA to **Request a Quote**.
- [x] Preserve location/product context in CTA query parameters.
- [x] Standardize page-level sales CTAs that link to `/contact`.
- [x] Keep genuinely different actions such as Call EDG, View Projects, Download the Guide, and Schedule a Showroom Visit.
- [x] Confirm contact links still resolve and prefill the correct interest/location.

### 6. Priority copy simplification

- [x] Remove “System Fit Review” as the name of a public conversion product.
- [x] Simplify the homepage, contact page, pergola form page, screen-cost form section, and configurator handoff.
- [x] Replace assessment/review/planning conversion language with quote language on priority pages.
- [x] Keep technical language where it directly educates buyers.
- [x] Keep the existing `/guides/pergola-system-fit-review` route and canonical during this pass.

### 7. Automated validation

- [x] Run the lead-instrumentation audit.
- [x] Run anonymous submission-ID/retry tests.
- [x] Update and run focused form/CTA smoke tests.
- [x] Run route-registry checks.
- [x] Run lint.
- [x] Run typecheck.
- [x] Run production build.
- [x] Run `git diff --check`.

### 8. Browser validation

- [x] Check homepage desktop and mobile.
- [x] Recheck the compact homepage hero at desktop size and confirm that the interest control expands, supports multiple selections, and summarizes the selection count.
- [x] Check contact page desktop and mobile.
- [x] Check pergola quote page and screen-cost form section.
- [x] Check configurator quote handoff.
- [x] Confirm required fields and optional-details disclosure.
- [x] Confirm optional photo selection works without transmitting a lead.
- [x] Confirm CTA labels and query-prefill behavior.
- [x] Confirm canonicals and page metadata remain correct.

### 9. Production release

- [x] Review the final diff and separate pre-existing changes from the combined release scope.
- [x] Commit the completed changes.
- [x] Push `edg-positioning` to `origin`.
- [x] Deploy production.
- [x] Verify deployment state and production alias.
- [x] Verify changed live URLs return `200`.
- [x] Verify live rendering on desktop and mobile.
- [x] Verify live canonicals, sitemap entries, and internal CTA destinations.
- [x] Verify `/api/leads` remains POST-only without submitting a production lead.
- [x] Run a fresh sitemap health pass.

## Acceptance criteria

- The primary visible sales CTA is **Request a Quote**.
- Every standard sales form requires exactly full name, email, phone, and at least one interest; visitors can select multiple interests.
- Location, details, and direct photo upload are visibly optional; there is no photo/plan URL field.
- The same standard form component powers the homepage, contact page, and former specialty-form pages.
- The configurator asks the same four required questions and passes its configuration automatically.
- The guide-download form remains separate.
- Contact CTA context still prefills the correct interest and location.
- Accepted leads still flow through `/api/leads` to Rainmaker.
- Optional photos still use the Rainmaker attachment path.
- Local validation, browser QA, push, deployment, and live verification are all separately proven.

## Release evidence

- Implementation commit: `b51fccf` (`Simplify site around quote requests`)
- Push: `origin/edg-positioning` advanced from `927cbf2` to `b51fccf` without a force push
- Production deployment: `dpl_F6nurY8bco4KCcdt74TKs8ya5YpQ`, status `Ready`
- Live alias: `https://www.edgpatioshade.com`
- Local checks: lint, TypeScript, lead instrumentation audit, lead submission identity tests, route registry, production build, and `git diff --check` passed
- Browser QA: homepage, contact page, former specialty forms, configurator handoff, query prefill, optional direct photo selection, compact hero layout, and multiple-interest selection verified without submitting a production lead
- Automated browser tests: 14 passed, including the compact homepage multi-select flow
- Live URL checks: homepage, contact page, and sitemap returned `200`; `/api/leads` returned `405` to `GET` as expected
- Mobile production check: 390 px viewport rendered the compact form at 316 px with no horizontal overflow
- Sitemap health: 90 of 90 live sitemap URLs returned `200`
- Search Console/indexing: Not required unless URLs, canonicals, or indexing signals change
