# EDG Conversion Pilot Task Plan - 2026-07-03

## Goal

Turn the conversion-rate investigation into a practical 2-week pilot that improves qualified lead capture without losing measurement truth.

Recommended default path: run measurement cleanup and a small screen/pergola system-fit CTA pilot together.

## Approval Gates

- Planning is approved by this document only.
- Website code/content changes require Colton approval before implementation.
- Production deploy requires a separate approval/report.
- Rainmaker status changes, live lead edits, or sales-process changes require Colton approval.
- Phone-system access or call-log work depends on whatever call system EDG actually uses.

## Phase 0 - Decide the Pilot Shape

| ID | Task | Owner | Depends on | Done when |
|---|---|---|---|---|
| P0.1 | Approve pilot scope | Colton | None | Scope is screen + pergola together, or narrowed to one path. Recommended scope: `/guides/magnatrack-screens-cost`, `/systems/shades`, `/systems/pergolas`, `/systems/pergolas/configure`, `/guides/pergola-cost`, with homepage hero as reference. |
| P0.2 | Define a "good lead" for the pilot | Colton + sales owner | P0.1 | Written definition exists. Recommended: non-test, non-vendor, in-service-area, product/system identified, useful project context, and either qualified or quote-linked. Phone/preferred contact method should be tracked separately. |
| P0.3 | Pick the follow-up SLA | Colton + sales owner | P0.2 | Written SLA exists. Recommended: same business day minimum; faster for system-fit, quote-ready, phone, and configurator leads. |

## Phase 1 - Measurement and Data Plumbing

| ID | Task | Owner | Depends on | Done when |
|---|---|---|---|---|
| M1.1 | Define the pilot measurement contract | Website/Codex | P0.1 | Event and field spec covers sessions, CTA clicks, form starts, successful submits, blocked submits, `generate_lead`, phone clicks, Rainmaker accepted leads, qualified leads, and quote-linked leads. |
| M1.2 | Capture baseline for pilot pages | Website/Codex | M1.1 | Baseline is recorded separately for GA4, Rainmaker, GBP, and phone evidence. No proof layers are blended. |
| M1.3 | Add test/spam exclusion rules for reporting | Website/Codex + sales owner | M1.1 | Known Codex/test sources and obvious vendor spam are excluded from pilot readouts without deleting or hiding Rainmaker records. |
| M1.4 | Normalize lead analytics across forms | Website/Codex | M1.1 | Contact, guide, hero, system-fit, and configurator submits all produce consistent successful lead events where appropriate. |
| M1.5 | Add form-step tracking | Website/Codex | M1.1 | Pilot forms emit `form_start`, `form_submit_success`, and `form_submit_blocked` with page/source/product/context fields. |
| M1.6 | Track phone links on pilot surfaces | Website/Codex | M1.1 | Pilot pages plus shared nav/footer phone links fire consistent phone-click events. Raw untracked pilot `tel:` links are removed or wrapped. |
| M1.7 | Preserve metadata into Rainmaker | Website/Codex | M1.1 | Rainmaker receives page URL, landing page, referrer, UTM, CTA label, CTA position, product, market/location, form variant, and configurator selections where relevant. |
| M1.8 | Run controlled end-to-end tests | Website/Codex | M1.4, M1.5, M1.6, M1.7 | One test per pilot flow proves analytics fires, Rainmaker receives context, and test records are excluded from real pilot totals. |

## Phase 2 - UX and Content Pilot

| ID | Task | Owner | Depends on | Done when |
|---|---|---|---|---|
| U2.1 | Map every CTA on pilot pages | Website/Codex | P0.1 | Each CTA is classified as generic contact, system-fit review, guide capture, configurator, phone, or showroom/local intent. Plain `/contact` links are flagged when they should preserve context. |
| U2.2 | Rewrite screen-path offers | Website/Codex | U2.1 | MagnaTrack cost guide and shades page use offers like "Get a screen fit and budget range" or "Check screen fit for your openings." Product/source context is preserved. |
| U2.3 | Rewrite pergola-path offers | Website/Codex | U2.1 | Pergola page and pergola cost guide steer to louvered roof/system-fit review, with copy around mount type, roof style, screens, heaters, drainage, and budget range. |
| U2.4 | Tighten configurator send/review step | Website/Codex | M1.7 | Final step says "Send this configuration for review" and preserves selected size, mount, color, screens, heaters, timeline, and budget context. |
| U2.5 | Match form friction to intent | Website/Codex + Colton | P0.2 | Guide capture stays light and is treated as nurture. System-fit/quote paths ask for zip/location, product/system, preferred contact method, and a short project note. Photos are encouraged, not mandatory. |
| U2.6 | Add trust proof near conversion moments | Website/Codex + Colton | U2.2, U2.3 | Pilot CTAs are supported by proof about what EDG checks before quoting: openings, wind, drainage, mounting, screens, heaters, permitting/local fit, showroom/service-area credibility, and real project imagery where available. |
| U2.7 | Mobile conversion QA | Website/Codex | U2.2-U2.6 | Primary CTAs are visible and easy to tap, text does not overflow, proof does not bury the form, and phone/showroom paths remain visible. |

## Phase 3 - Operations and Rainmaker Audit

| ID | Task | Owner | Depends on | Done when |
|---|---|---|---|---|
| O3.1 | Create a 2-week pilot audit sheet | Sales owner/Codex | P0.2 | Sheet includes source, product, page/CTA, phone present, project context, disposition, first response time, attempts, quote link, outcome, and notes. |
| O3.2 | Define lead dispositions | Colton + sales owner | O3.1 | Allowed tags include real project, vendor/spam, out of area, wrong product, thin/nurture, no reply, qualified, quoted, won/lost. |
| O3.3 | Pull the audit sample | Sales owner/Codex | O3.2 | Sample includes last 10 non-test/non-vendor leads plus recent MagnaTrack, shades, pergola, configurator, and system-fit leads. |
| O3.4 | Audit Rainmaker status truth | Sales owner/Codex | O3.3 | Each sampled lead has status, quote-linked yes/no, converted field value, and any mismatch noted. No live records are changed during audit unless separately approved. |
| O3.5 | Audit first-response and follow-up | Sales owner/Codex | O3.3 | Each sampled lead has first-response time or "not visible," number of attempts, channel, last touch, and reason it advanced or stalled. |
| O3.6 | Audit phone/call evidence | Sales owner/Codex | Call-log access | Call log covers same window with answered/missed calls, callback status, source if known, and whether calls matched Rainmaker leads. |
| O3.7 | Score lead quality by source | Sales owner/Codex | O3.4-O3.6 | Sources are ranked by sales-readiness: phone/preferred contact, zip/location, product, useful message/configuration, quote created, and qualified/quoted rate. |
| O3.8 | Run the pilot operating rhythm | Sales owner | P0.3 | New pilot leads are reviewed daily or every two business days; every lead gets disposition, follow-up status, and quote outcome where applicable. |

## Phase 4 - Launch, Monitor, and Decide

| ID | Task | Owner | Depends on | Done when |
|---|---|---|---|---|
| L4.1 | Launch the pilot | Website/Codex + Colton | M1.8, U2.7, O3.8 | Pilot is live only after approved implementation, checks, deployment, and live verification. |
| L4.2 | Review every 1-2 business days | Colton + sales owner + Codex | L4.1 | Readout separates sessions, CTA clicks, form starts, submits, phone clicks, Rainmaker accepted leads, spam/vendor noise, qualified leads, and quote-linked leads. |
| L4.3 | Make at most one mid-pilot adjustment | Colton + Website/Codex | First-week signal | Any change is tied to a clear observed issue, such as CTA clicks without submits or thin leads without context. No broad redesign mid-test. |
| L4.4 | Produce final pilot readout | Codex | End of 2 weeks | Readout answers whether the bottleneck is capture/framing, measurement, phone attribution, lead quality, follow-up, quoting handoff, or some mix. |
| L4.5 | Choose the next move | Colton | L4.4 | Decision is expand, revise, pause, or shift focus to operations/phone/follow-up. |

## Immediate Next Tasks

1. Approve the pilot shape: recommended screen + pergola together.
2. Approve the "good lead" definition.
3. Approve the high-intent lead SLA.
4. Let Codex implement measurement contract, tracking fixes, Rainmaker metadata, and phone tracking.
5. Let Codex implement the pilot CTA/content changes after the CTA map is reviewed.
6. Create the lead/call audit sheet and pull the initial sample.

## Out of Scope for the First 2 Weeks

- Full redesign.
- Homepage rewrite.
- Sitewide CTA overhaul.
- New paid campaigns.
- Major navigation changes.
- Mandatory photo upload.
- Rebuilding Rainmaker.
- Changing SEO metadata, canonicals, sitemap, or indexing behavior unless explicitly approved.
- Judging success by raw lead count alone.

## Success Criteria

- Tracking and Rainmaker context are reliable enough to judge the pilot.
- Configurator and phone paths are no longer invisible or undercounted.
- Pilot pages produce more qualified or quote-linked leads per session, or reveal the true downstream bottleneck.
- Leads have better project context than before.
- Sales follow-up and quote handoff are visible enough to decide whether the next bottleneck is website capture or operations.
