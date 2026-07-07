# MagnaTrack / Progressive Screens Upgrade Plan

Date: 2026-07-07

## Scope

Upgrade the EDG motorized screen category around category demand first:
motorized screens, retractable screens, motorized patio screens, patio screen
enclosures, outdoor screens, insect screens, privacy screens, sun screens, and
wind comfort.

MagnaTrack by Progressive Screens should be the featured premium screen partner,
but EDG should stay system-agnostic and recommend the screen after the opening
fit is clear.

## Source Material Checked

Repo docs:

- `AGENTS.md`
- `docs/codex/source-of-truth.md`
- `docs/codex/seo-rules.md`
- `docs/codex/image-rules.md`
- `docs/codex/lead-flow.md`

Drive Shared with me connector searches:

- `MagnaTrack`
- `MAGNA`
- `Progressive Screens`
- `screens`
- `screen`
- `O'Hare`
- `GoPro`

Drive did not expose a clean Progressive Screens or MagnaTrack brochure/image
asset through search. The broad `screens` result surfaced unrelated Brustor
pricing material and Lumon agreement content, so those were not used for
MagnaTrack claims. The public-use screen imagery used in the implementation was
already in the repo, especially the EDG O'Hare/Bartlett Progressive Screens
project assets.

Official Progressive sources used:

- https://www.progressivescreens.com/products/magnatrack-system/
- https://www.progressivescreens.com/products/colors-and-fabrics/
- https://www.progressivescreens.com/products/defender-hurricane-screens/
- https://www.progressivescreens.com/

## Hard Facts Carried Forward

- Progressive describes MagnaTrack as a patented magnetic/self-tensioning track
  system that uses neodymium magnets and a Keder interlock.
- Progressive positions MagnaTrack for residential and commercial motorized
  screens.
- Progressive says MagnaTrack can be planned for recessed new construction or
  retrofit applications where the structure allows it.
- Progressive publishes insect mesh, solar screen, vinyl screen, and Defender
  hurricane screen categories.
- Progressive publishes custom screen sizing up to 30 feet wide with limitations
  that must be verified by product and opening.
- Defender hurricane screens are a separate storm-protection category and should
  not be blurred with ordinary insect, solar, or vinyl screen comfort systems.

## Copy Guardrails

- Keep visible copy customer-facing. Do not use internal SEO phrasing.
- Do not claim standard motorized patio screens are hurricane protection.
- Avoid universal wind-rating language on the category page unless the selected
  Progressive product and project details support the claim.
- Use "everyday wind comfort" or "daily wind comfort" for normal screen use.
- Keep cost language as planning ranges and route users to the cost guide plus
  fit review.
- Avoid Product, Offer, AggregateOffer, or Merchant-style schema on the main
  service/category page.

## Implemented Plan

- Rebuilt `/systems/shades` as a service/category page around motorized screens
  first, with MagnaTrack by Progressive Screens as the featured premium partner.
- Replaced Product/Offer schema with Service, HowTo, and FAQ schema.
- Added official Progressive source links in the page body.
- Added O'Hare/Bartlett EDG Progressive Screens imagery to the image registry
  and the screen gallery.
- Updated homepage screen discovery copy to remove hard universal wind/UV
  claims.
- Updated `/systems` screen card and climate FAQ language to avoid hard screen
  wind claims.
- Updated the HTML sitemap label from "Motorized Shades" to "Motorized Screens."

## Remaining Support Moves

- If Colton finds a Progressive dealer brochure, install manual, or approved
  image folder in Drive, review and register any public-safe assets before
  adding them.
- Consider a dedicated "MagnaTrack vs zipper screens" guide only after source
  assets and current Progressive spec documents are available.
- Consider a Search Console follow-up for `/systems/shades` after deployment.
