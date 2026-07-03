# EDG Conversion Pilot Measurement Contract - 2026-07-03

## Pilot Scope

- `/guides/magnatrack-screens-cost`
- `/systems/shades`
- `/systems/pergolas`
- `/systems/pergolas/configure`
- `/guides/pergola-cost`
- `/guides/pergola-system-fit-review`
- Homepage hero form as a reference path

## Primary Question

Are high-intent screen and pergola visitors becoming better qualified or quote-linked leads when the site asks for a system-fit review and preserves source/context?

## Events to Review

| Event | Meaning | Required dimensions |
|---|---|---|
| `conversion_event` | CTA click, including book-call/contact and phone clicks | `conversion_name`, `link_url`, `link_text`, `page_path` |
| `form_start` | First interaction with a lead form | `source`, `project_type`, `customer_type`, `form_variant`, `cta_label`, `page_path`, `landing_page` |
| `generate_lead` | Lead accepted by `/api/leads` from a shared lead flow | `source`, `project_type`, `customer_type`, `form_variant`, `cta_label`, `page_path`, `landing_page`, `has_phone`, `has_project_type`, `has_message` |
| `form_submit_success` | Successful form submission after `/api/leads` returns success | Same as `generate_lead` |
| `form_submit_blocked` | Submission failed or was blocked before success | Same as `generate_lead`, plus `error_message` |

## Rainmaker Context to Check

Each pilot lead should preserve as much of this context as possible:

- `page_url`
- `page_path`
- `page_title`
- `referrer`
- `landing_page`
- `query_string`
- `intent_type`
- `product_param`
- `source_param`
- `market_param`
- `location_param`
- UTM fields
- `cta_label`
- `form_variant`
- configurator summary, timeline, and budget where applicable

## Reporting Rules

- Exclude known Codex/test leads from pilot totals.
- Count obvious vendor/SEO/AI outreach separately from real project demand.
- Do not judge success by raw lead count alone.
- Keep website events, Rainmaker leads, GBP actions, phone calls, and quote/sales outcomes separate until reconciled.

## Primary Success Metric

Qualified or quote-linked non-test pilot leads per 100 pilot-page sessions.

## Secondary Metrics

- CTA click rate
- Form-start-to-submit rate
- CTA-click-to-submit rate
- Phone-click rate
- Leads with phone or preferred contact method
- Leads with product/system context
- Leads with useful message/configuration context
- First-response time
- Quote created yes/no

## Default Good-Lead Definition

Use this until Colton changes it:

- Not a Codex/test lead
- Not vendor/spam/outreach noise
- In or plausibly near EDG's serviceable geography
- Product/system identified
- Has useful project context, configuration, or a real buyer question
- Qualified in Rainmaker or linked to a quote

Phone is tracked separately as a quality signal. A lead without a phone can still be real, but quote-ready/system-fit leads should strongly encourage phone or preferred contact method.
