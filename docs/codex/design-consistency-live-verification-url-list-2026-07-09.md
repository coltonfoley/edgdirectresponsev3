# EDG Website Design Consistency Live Verification URL List - 2026-07-09

This is a local Phase 5 aid for the design-consistency rollout. It does not approve staging, commit, push, deploy, Search Console work, form submission, test leads, or any production mutation.

Use this after Colton explicitly approves Phase 5 and after the approved rollout is deployed to production.

## Current Source-Derived Counts

- Current source diff: 108 changed files under `src/app`, `src/components`, and `src/lib`.
- Changed page-route candidates from `src/app/**/page.tsx`: 79 route candidates, including the dynamic `/projects/[slug]` page.
- Generated project routes affected by project components/data: 27 route candidates.
- Full source-derived production URL candidate set: 108 URLs.
- Shared layout/navigation/footer/form/gallery changes are in scope, so the broad production smoke should use the 108-route source-derived URL set, not only the 79 changed page-route candidates.
- Reusable verifier: `scripts/verify-design-consistency-routes.mjs` reads the full 108-route contract below, re-derives the current source route set from `src/app/**/page.tsx` plus `src/lib/projects-data.ts`, fails if the document and source drift, then checks route HTTP status, title, canonical, robots, JSON-LD presence, `/sitemap.xml`, `/robots.txt`, and the key legacy redirects `/design`, `/price`, and `/pro` against a supplied `VERIFY_BASE_URL`.

## Minimum Production Proof Layers

After production deployment is confirmed, keep these proof layers separate:

1. Live HTTP status sweep for the 108 source-derived production URL candidates.
2. Desktop and mobile browser QA for the representative route-family list below.
3. SEO checks for canonical, robots, JSON-LD, XML sitemap, and HTML sitemap behavior.
4. CTA checks for preserved source/type/product/location context.
5. Form render checks without submitting a production lead unless Colton separately approves a labeled test lead.
6. Search Console follow-up only if explicitly approved after live verification.

## Representative Browser QA Set

Use this set for desktop and mobile browser checks after production deployment:

```text
/
/systems
/systems/pergolas
/systems/pergolas/configure
/systems/enclosures
/systems/saunas
/commercial
/commercial/restaurant-patio-enclosures
/commercial/hotel-roof-deck-systems
/service-areas
/service-areas/northbrook-il/motorized-pergolas
/service-areas/wilmette-il/louvered-pergolas
/service-areas/winnetka-il/louvered-pergolas
/service-areas/sanibel-outdoor-living
/service-areas/southwest-florida/motorized-screens
/guides
/guides/louvered-pergolas
/guides/planning-guide
/guides/planning-guide/read
/guides/pergola-system-fit-review
/projects
/projects/karp
/projects/carmines
/projects/wade
/gallery
/showroom
/trade-partners
/contact
/html-sitemap
/privacy
/terms
```

Required checks on these browser routes:

- First viewport renders.
- No obvious mobile horizontal overflow.
- Header and mobile menu open/close correctly.
- Footer appears where expected and remains hidden where intentionally hidden.
- Primary CTAs preserve expected query/context.
- Forms render but do not submit.
- Console has no route-specific production errors.

Special focused checks:

- `/projects/wade`: softened proof copy is present; old "true four-season" and "year-round entertaining" copy is absent.
- `/guides/planning-guide/read`: canonical remains `/guides/planning-guide/read`, robots remains `noindex, follow`, and unauthenticated browser behavior remains the expected gated reader redirect.
- `/html-sitemap`: lists source-backed route families and generated project detail pages.
- `/contact`: project form is reachable on mobile through the first-viewport jump CTA.
- `/systems/pergolas/configure`: mobile first state exposes the 3D preview and the Configure tab still reaches the intake controls.

## Full Source-Derived Production URL Candidate Set

These 108 production URL candidates were re-derived from the current source:
81 concrete `src/app/**/page.tsx` routes plus 27 generated project routes
from `src/lib/projects-data.ts`. Use this list for the broad live HTTP sweep
after approved production deployment, then regenerate from current source if
the diff changes before Phase 5.

```text
/
/commercial
/commercial/chicago-hospitality-outdoor-living
/commercial/country-club-outdoor-spaces
/commercial/hotel-pergolas
/commercial/hotel-roof-deck-systems
/commercial/restaurant-patio-enclosures
/commercial/restaurant-patio-solutions
/commercial/west-loop
/contact
/gallery
/guides
/guides/louvered-pergola-brands-compared
/guides/louvered-pergolas
/guides/magnatrack-screens-cost
/guides/motorized-pergola-budget-examples
/guides/motorized-pergola-deck-roof-deck
/guides/motorized-pergola-permits-hoa-engineering
/guides/motorized-pergola-planning
/guides/pergola-cost
/guides/pergola-system-fit-review
/guides/pergola-vs-patio-cover
/guides/planning-guide
/guides/planning-guide/read
/html-sitemap
/outdoor-rooms
/outdoor-rooms/pergola-glass-outdoor-room
/privacy
/projects
/projects/151-n-franklin
/projects/arora
/projects/avaella
/projects/boden-residence
/projects/carmines
/projects/chicago-winery
/projects/dalesandro
/projects/dicks-roofing-project-2
/projects/dicks-roofing-troha
/projects/greco
/projects/haiti
/projects/hildebrant
/projects/hyatt-wicker-park
/projects/ike-oak
/projects/jake-everly-residence
/projects/karp
/projects/lou-malnati-naperville
/projects/matchbox
/projects/moody
/projects/ohare
/projects/palm-springs-airport
/projects/reddy
/projects/rosebud
/projects/the-district
/projects/the-elm
/projects/tony-koch
/projects/wade
/service-areas
/service-areas/algonquin-il
/service-areas/algonquin-il/motorized-pergolas
/service-areas/algonquin-il/retractable-screens
/service-areas/algonquin-il/zoning-guide
/service-areas/barrington-il
/service-areas/barrington-il/motorized-pergolas
/service-areas/chicago-il
/service-areas/chicago-il/glass-enclosures
/service-areas/chicago-il/motorized-pergolas
/service-areas/chicago-il/retractable-screens
/service-areas/deerfield-il
/service-areas/deerfield-il/retractable-screens
/service-areas/hinsdale-il
/service-areas/lake-county-il
/service-areas/lake-forest-il
/service-areas/lake-forest-il/motorized-pergolas
/service-areas/lake-forest-il/zoning-guide
/service-areas/lake-geneva-wi
/service-areas/lake-geneva-wi/motorized-pergolas
/service-areas/lake-geneva-wi/retractable-screens
/service-areas/lake-geneva-wi/zoning-guide
/service-areas/mchenry-county-il
/service-areas/naperville-il
/service-areas/naperville-il/motorized-pergolas
/service-areas/north-shore-chicago
/service-areas/northbrook-il
/service-areas/northbrook-il/motorized-pergolas
/service-areas/oak-brook-il
/service-areas/sanibel-outdoor-living
/service-areas/sanibel-outdoor-living/lanai-replacement
/service-areas/sanibel-outdoor-living/louvered-pergolas
/service-areas/sanibel-outdoor-living/modern-lanai
/service-areas/sanibel-outdoor-living/zoning-guide
/service-areas/southeast-wisconsin
/service-areas/southwest-florida
/service-areas/southwest-florida/motorized-screens
/service-areas/spring-grove-il
/service-areas/wilmette-il
/service-areas/wilmette-il/louvered-pergolas
/service-areas/winnetka-il
/service-areas/winnetka-il/louvered-pergolas
/showroom
/systems
/systems/appliances
/systems/enclosures
/systems/pergolas
/systems/pergolas/configure
/systems/saunas
/systems/shades
/terms
/trade-partners
```

## Changed Page Route Candidates

These 79 route candidates came from changed `src/app/**/page.tsx` files:

```text
/
/commercial
/commercial/chicago-hospitality-outdoor-living
/commercial/country-club-outdoor-spaces
/commercial/hotel-pergolas
/commercial/hotel-roof-deck-systems
/commercial/restaurant-patio-enclosures
/commercial/restaurant-patio-solutions
/commercial/west-loop
/gallery
/guides
/guides/louvered-pergola-brands-compared
/guides/louvered-pergolas
/guides/magnatrack-screens-cost
/guides/motorized-pergola-budget-examples
/guides/motorized-pergola-deck-roof-deck
/guides/motorized-pergola-permits-hoa-engineering
/guides/motorized-pergola-planning
/guides/pergola-cost
/guides/pergola-system-fit-review
/guides/pergola-vs-patio-cover
/guides/planning-guide
/guides/planning-guide/read
/html-sitemap
/outdoor-rooms
/outdoor-rooms/pergola-glass-outdoor-room
/privacy
/projects/[slug]
/service-areas
/service-areas/algonquin-il
/service-areas/algonquin-il/motorized-pergolas
/service-areas/algonquin-il/retractable-screens
/service-areas/algonquin-il/zoning-guide
/service-areas/barrington-il
/service-areas/barrington-il/motorized-pergolas
/service-areas/chicago-il
/service-areas/chicago-il/glass-enclosures
/service-areas/chicago-il/motorized-pergolas
/service-areas/chicago-il/retractable-screens
/service-areas/deerfield-il
/service-areas/deerfield-il/retractable-screens
/service-areas/hinsdale-il
/service-areas/lake-county-il
/service-areas/lake-forest-il
/service-areas/lake-forest-il/motorized-pergolas
/service-areas/lake-forest-il/zoning-guide
/service-areas/lake-geneva-wi
/service-areas/lake-geneva-wi/motorized-pergolas
/service-areas/lake-geneva-wi/retractable-screens
/service-areas/lake-geneva-wi/zoning-guide
/service-areas/mchenry-county-il
/service-areas/naperville-il
/service-areas/naperville-il/motorized-pergolas
/service-areas/north-shore-chicago
/service-areas/northbrook-il
/service-areas/northbrook-il/motorized-pergolas
/service-areas/oak-brook-il
/service-areas/sanibel-outdoor-living
/service-areas/sanibel-outdoor-living/lanai-replacement
/service-areas/sanibel-outdoor-living/louvered-pergolas
/service-areas/sanibel-outdoor-living/modern-lanai
/service-areas/sanibel-outdoor-living/zoning-guide
/service-areas/southeast-wisconsin
/service-areas/southwest-florida
/service-areas/southwest-florida/motorized-screens
/service-areas/spring-grove-il
/service-areas/wilmette-il
/service-areas/wilmette-il/louvered-pergolas
/service-areas/winnetka-il
/service-areas/winnetka-il/louvered-pergolas
/showroom
/systems
/systems/appliances
/systems/enclosures
/systems/pergolas
/systems/saunas
/systems/shades
/terms
/trade-partners
```

## Generated Project Route Candidates

These 27 generated project routes are affected by project components and `src/lib/projects-data.ts`:

```text
/projects/karp
/projects/carmines
/projects/rosebud
/projects/wade
/projects/the-elm
/projects/the-district
/projects/chicago-winery
/projects/jake-everly-residence
/projects/greco
/projects/reddy
/projects/arora
/projects/ike-oak
/projects/matchbox
/projects/lou-malnati-naperville
/projects/151-n-franklin
/projects/palm-springs-airport
/projects/hyatt-wicker-park
/projects/boden-residence
/projects/dicks-roofing-troha
/projects/dicks-roofing-project-2
/projects/haiti
/projects/dalesandro
/projects/moody
/projects/tony-koch
/projects/avaella
/projects/ohare
/projects/hildebrant
```

## Notes

- The 79 changed page-route candidates do not include unchanged but globally affected routes such as `/contact`; those belong in the representative browser QA set because shared form/navigation components changed.
- The 108-route broad smoke should be generated from current source during Phase 5 rather than copied by hand from this document.
- This document is a verification checklist, not production approval.
