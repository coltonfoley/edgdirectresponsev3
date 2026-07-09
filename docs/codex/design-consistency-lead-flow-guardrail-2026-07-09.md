# EDG Website Design Consistency Lead-Flow Guardrail - 2026-07-09

This local guardrail records the lead-flow evidence for the EDG Website design-consistency rollout.

It does not approve staging, commit, push, deploy, Search Console work, form submission, test leads, or any production mutation.

## Current Source Truth

- Shared form hook: `src/hooks/useLeadSubmission.ts`
- Website intake endpoint: `src/app/api/leads/route.ts`
- Rainmaker intake helper: `src/lib/rainmaker-api.ts`
- Current lead database wording: the active source path is Rainmaker handoff through `/api/leads`; do not describe Supabase as the active lead database unless source code changes prove it.

Current source flow:

```text
Contact / lead-capture / hero / system-fit / configurator form
-> useLeadSubmission()
-> POST /api/leads
-> src/app/api/leads/route.ts
-> createLeadRecord()
-> createRainmakerLead() when RAINMAKER_* config is present
```

## Source Checks

Sensitive diff check:

```text
git diff --name-only -- src/app/api src/hooks/useLeadSubmission.ts src/lib/rainmaker-api.ts src/lib/analytics.ts src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx
=> src/app/layout.tsx
```

Interpretation:

- No `/api/leads` source change is in the rollout.
- No `src/hooks/useLeadSubmission.ts` source change is in the rollout.
- No `src/lib/rainmaker-api.ts` source change is in the rollout.
- No analytics helper, sitemap, or robots source change is in the rollout.
- `src/app/layout.tsx` remains the only sensitive-file diff and is documented as skip-link/root-layout styling in the implementation status.

Expanded guardrail check after the project proof-language cleanup:

```text
git diff --name-only -- src/app/api src/hooks/useLeadSubmission.ts src/lib/analytics.ts src/lib/rainmaker-api.ts src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx src/lib/site-routes.ts src/lib/projects-data.ts src/lib/projects.ts
=> src/app/layout.tsx
=> src/lib/projects-data.ts
=> src/lib/site-routes.ts
```

Interpretation:

- `src/lib/projects-data.ts` is in scope only for public Wade project proof-language cleanup.
- `src/lib/site-routes.ts` is in scope for route exposure and public copy.
- The expanded check still shows no `/api/leads`, lead hook, Rainmaker helper, analytics helper, sitemap, robots, or `src/lib/projects.ts` source changes.

Supabase wording check:

```text
rg -n -i "supabase" docs/codex/design-consistency-*.md src/app src/components src/lib src/hooks
```

Only the audit warnings were found:

- `docs/codex/design-consistency-audit-2026-07-08.md`: "Do not describe Supabase as the active lead database unless source code changes prove it."
- `docs/codex/design-consistency-audit-2026-07-08.md`: "Do not describe Supabase as the active lead database."

No design-consistency implementation artifact describes Supabase as the active lead database.

## Reusable Source Guardrail

The reusable local source verifier codifies the lead-flow and wording checks that are most important for this rollout:

```bash
VERIFY_SOURCE_OUTPUT=output/local-preview/design-consistency-source-guardrail-verifier-2026-07-09/summary.json \
node scripts/verify-design-consistency-source.mjs
```

Current result:

- 7/7 source guardrails passed.
- Sensitive diff scope matches the expected `src/app/layout.tsx`, `src/lib/projects-data.ts`, and `src/lib/site-routes.ts` changes.
- `/api/leads`, `src/hooks/useLeadSubmission.ts`, `src/lib/rainmaker-api.ts`, `src/lib/analytics.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/lib/projects.ts` are not in the rollout diff.
- Literal page-context `/contact?` links are absent from app/component source.
- Supabase source wording is absent, so the packet does not describe Supabase as the active lead database.

## Form Sources Using The Lead Hook

Current source search confirms the design rollout still uses `useLeadSubmission` for lead-producing form surfaces:

- `src/components/features/contact/ContactClient.tsx`
- `src/components/features/contact/LeadCaptureForm.tsx`
- `src/components/features/home/HeroFormClient.tsx`
- `src/components/features/pergola/SystemFitReviewForm.tsx`
- `src/app/systems/pergolas/configure/ConfiguratorApp.tsx`

The shared hook still posts to `/api/leads`, then tracks `generate_lead` and `form_submit_success` after a successful accepted response.

## Rendered Form Proof

Rendered form/control accessibility proof is saved at:

```text
output/playwright/design-consistency-form-a11y-preflight-2026-07-09/qa-summary.json
```

That local production-preview preflight checked Contact, Planning Guide, System Fit Review, Homepage, and Pergola Configurator at desktop and mobile sizes:

- 5 surfaces.
- 10 rendered states.
- 0 failures.
- Checked visible field counts, programmatic field names, unnamed buttons, Contact radiogroup/radio state semantics, horizontal overflow, and relevant console/page errors.

This rendered proof intentionally did not submit forms or create test leads.

Focused Contact CTA context proof is saved at:

```text
output/playwright/design-consistency-contact-cta-context-2026-07-09/qa-summary.json
```

That proof checked three high-intent Contact URLs at desktop `1440x1100` and mobile `390x844`:

- `/contact?type=price&product=saunas&area=Sanibel&source=browser_contact_context_qa`
- `/contact?type=commercial&product=restaurant-patio-enclosures&area=chicago&source=browser_contact_context_qa`
- `/contact?type=pro&product=retractable-screens&market=southwest-florida&source=browser_contact_context_qa`

It passed 6 rendered states with 0 failures and confirmed query-driven type selection, project-type prefill, `area` and `market` fallback into the visible Location / Zip Code field, Florida side-copy behavior, selected radio visual state, visible field count, title, horizontal overflow, and relevant console/page errors. The mobile jump-to-form check also passed without submitting a form.

The Codex in-app Browser connection was attempted first, but its `domSnapshot()` call failed with `TypeError: o.incrementalAriaSnapshot is not a function`; regular Playwright Chromium was used for this local browser proof.

## Production Test-Lead Boundary

No production form submission has been performed in this rollout.

If Colton later wants an end-to-end lead test during Phase 5, the approval should explicitly authorize a labeled production test lead and should define:

- Which route/form to submit.
- The exact test name/email/phone/message to use.
- Whether file attachments should be tested.
- How to verify Rainmaker receipt.
- How to report or clean up the test lead afterward.

Without that explicit approval, Phase 5 should verify forms render, CTA paths preserve context, and `/api/leads` source remains unchanged, but should not submit a production lead.
