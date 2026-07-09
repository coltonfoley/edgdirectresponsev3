# EDG Website Design Consistency Audit

Date: 2026-07-08

Repo: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`

Production: `https://www.edgpatioshade.com`

Branch checked: `edg-positioning`

Commit checked: `8e6f6dd1cba66b4958770b5dff9ca0ceacf9548e`

Read-only boundary: this audit did not implement code changes, submit forms, commit, push, deploy, request Search Console indexing, or mutate production.

## Evidence Pack

- Full production screenshot manifest: `docs/codex/design-consistency-audit-2026-07-08-screenshots/manifest.json`
- Representative desktop contact sheet: `docs/codex/design-consistency-audit-2026-07-08-screenshots/representative-desktop-contact-sheet.jpg`
- Representative mobile contact sheet: `docs/codex/design-consistency-audit-2026-07-08-screenshots/representative-mobile-contact-sheet.jpg`
- Desktop screenshots: `docs/codex/design-consistency-audit-2026-07-08-screenshots/desktop/`
- Mobile screenshots: `docs/codex/design-consistency-audit-2026-07-08-screenshots/mobile/`

Production sweep result: 108 source-derived production URLs were checked at desktop size `1365x900`; all returned `200`. A representative set of 33 routes was checked at mobile size `390x844`.

One subagent also checked selected production routes at `1440x1100` desktop and `390x844` mobile and produced separate contact sheets in `/tmp/edg-design-audit-2026-07-08/`. Its legacy-route checks found that `/pergola-configurator` and `/planning-guide` are not current production routes; the current equivalents are `/systems/pergolas/configure` and `/guides/planning-guide`.

## Sources Inspected

Required project docs:

- `AGENTS.md`
- `docs/codex/source-of-truth.md`
- `docs/codex/lead-flow.md`
- `docs/codex/seo-rules.md`
- `docs/codex/image-rules.md`
- `docs/codex/site-flow-map-2026-07-08.md`

Design and routing source:

- `src/app/globals.css`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/Breadcrumb.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/lib/site-routes.ts`
- `src/lib/images.ts`
- `src/lib/projects.ts`
- `src/lib/projects-data.ts`
- `src/app/sitemap.ts`
- `src/app/html-sitemap/page.tsx`
- Representative `src/app/**/page.tsx` files and route-family components

Checks run:

- `node scripts/check-route-registry.mjs`
- Source-derived route inventory from `src/app/**/page.tsx` plus generated project slugs from `src/lib/projects-data.ts`
- Production screenshot and metadata sweep for 108 URLs
- Representative mobile screenshot sweep for 33 URLs
- Source inspection for design primitives, routing, forms, CTA paths, metadata-sensitive routes, and repeated page patterns

## Executive Summary

The site does not need a new brand direction. It already has a strong one: black, white, zinc, mint, sharp editorial surfaces, serious product language, real project imagery, and system-agnostic planning. The inconsistency problem is that this design system exists in the source but is not enforced across all page families.

The main consistency gaps are:

- The global design tokens and UI primitives say "editorial/sharp," but many pages still use rounded cards, pill badges, gradients, soft shadows, and multicolor icon chips.
- High-intent page families use different hero rules: dark sales heroes, white product-spec heroes, image overlays, directory heroes, and form-first layouts all coexist without a clear family standard.
- Route exposure is split between `siteRoutes` and manual arrays in the header, footer, and service-area hub. That creates SEO-safe exposure risk and makes pages feel differently weighted.
- CTA routing is inconsistent. Some routes preserve product, area, source, and intent in query params; others still link to bare `/contact`.
- Form presentation is visually strong but not yet a consistent accessible system. Visible labels on the main contact form and lead-capture form are not programmatically associated with their fields.
- The strongest repeatable templates are already present: project detail pages, newer local product pages such as Chicago pergolas, newer planning/fit-review guide pages, and the outdoor room pages. The proposal should consolidate around those patterns instead of redesigning from scratch.

The recommended approach is a small, approved pilot before any broad rollout:

1. Define and enforce the design-system rules in shared components and routing helpers.
2. Pilot on one service-area product outlier, one commercial detail outlier, one guide outlier, one system detail outlier, and the showroom/contact lead-capture surfaces.
3. Expand by route family only after SEO, lead path, metadata, canonical, sitemap, internal-link, and mobile QA checks pass.

## Current Route Inventory

Route inventory was generated from source, not copied from old docs. The current source has 81 static app routes and 27 generated project detail routes, for 108 production URL candidates.

| Family | Count | Representative routes | Notes |
|---|---:|---|---|
| Homepage | 1 | `/` | Strong black/mint hero with form; good brand anchor. |
| Systems hub | 1 | `/systems` | Dark split hero, strong component usage, but still contains bare `/contact` links. |
| System detail | 5 | `/systems/pergolas`, `/systems/shades`, `/systems/enclosures`, `/systems/appliances`, `/systems/saunas` | Mixed maturity: pergolas/shades/enclosures are closer to canonical; appliances and saunas feel older. Product gallery treatment is softer/rounder than primitives. |
| Pergola configurator | 1 | `/systems/pergolas/configure` | Special tool shell; should remain distinct but needs consistent nav, CTA, and mobile expectations. |
| Outdoor rooms | 2 | `/outdoor-rooms`, `/outdoor-rooms/pergola-glass-outdoor-room` | Among the cleanest outcome-led templates. Good candidate for canonical outcome pages. |
| Commercial hub | 1 | `/commercial` | Strong operational dark sales page. Some proof/ROI language should stay source-backed. |
| Commercial detail | 7 | `/commercial/restaurant-patio-enclosures`, `/commercial/hotel-roof-deck-systems`, etc. | Biggest style split: gradient overlays, rounded image cards, revenue overlays, and bare `/contact` links. |
| Service-area hub | 1 | `/service-areas` | Clean hub, but route lists are hand-maintained instead of fully registry-driven. |
| Service-area city/region | 19 | `/service-areas/algonquin-il`, `/service-areas/northbrook-il`, `/service-areas/southwest-florida` | Newer Algonquin-like pages are strong; older city/region pages mix rounded cards and one-off structures. |
| Service-area product | 18 | `/service-areas/chicago-il/motorized-pergolas`, `/service-areas/northbrook-il/motorized-pergolas`, `/service-areas/wilmette-il/louvered-pergolas` | Chicago product pages are close to canonical; Northbrook/Wilmette product pages show older patterns. |
| Local zoning guide | 4 | `/service-areas/algonquin-il/zoning-guide`, etc. | SEO-sensitive local content; should retain route/value while adopting shared guide/local template. |
| Guides hub | 1 | `/guides` | Useful directory, but visually softer than the sharp system. First-screen conversion/proof is weak. |
| Guide detail | 10 | `/guides/motorized-pergola-planning`, `/guides/louvered-pergolas`, `/guides/pergola-cost` | Newer planning pages are strong; older pillar guide uses rounded cards, colorful chips, and softer editorial shell. |
| Planning guide landing | 1 | `/guides/planning-guide` | Valuable lead-capture route, but form/cards are visually different from Contact. Mobile pushes form below first viewport. |
| Planning guide reader | 1 | `/guides/planning-guide/read` | Special gated/noindex reader. Footer intentionally hidden; do not force normal footer. |
| Projects index | 1 | `/projects` | Good structure, but portfolio proof is weakened by visible placeholder cards. |
| Project detail | 27 | `/projects/karp`, `/projects/carmines`, etc. | Strongest repeatable case-study template. Good model for future family structure. |
| Gallery | 1 | `/gallery` | Strong black visual portfolio, but no clear first-screen conversion CTA and mobile first crop can feel product/appliance-led. |
| Showroom | 1 | `/showroom` | Important trust page, but older rounded cards/buttons and softer module styling. |
| Trade partners | 1 | `/trade-partners` | Mostly aligned with sharp component system; showroom proof module uses a placeholder rather than a real showroom visual. |
| Contact | 1 | `/contact` | Strong split layout and lead capture, but mobile delays form and visible labels need accessible association. |
| Legal/utility | 3 | `/privacy`, `/terms`, `/html-sitemap` | Low-risk pages. Legal pages use older rounded contact cards; sitemap is correctly registry-driven. |

## Existing Design System Read

The source already declares the intended design system:

- `src/app/globals.css` lines 11-63 define "EDG DESIGN SYSTEM - EDITORIAL/SHARP," mint `#42ffc1`, black/white/zinc surfaces, minimal radius tokens, section spacing, and type scale.
- `src/components/ui/Button.tsx` lines 9-27 explicitly define "Editorial/Sharp Design" and line 76 applies `rounded-none`.
- `src/components/ui/Card.tsx` lines 10-27 explicitly define sharp standardized cards and line 40 applies `rounded-none`.
- `src/components/ui/Container.tsx` lines 9-16 defines the common max-width and page gutter system.
- `src/lib/site-routes.ts` lines 47-120 begins the active route registry, and lines 991-1029 already export nav, footer, family, HTML sitemap, XML sitemap, service-area, and local-product helpers.

The problem is not that the site lacks a design system. The problem is enforcement and template drift.

## Inconsistency Matrix

Severity:

- High: affects conversion, accessibility, SEO-safe exposure, or a major route family.
- Medium: visible brand/template drift or repeated inconsistency.
- Low: local polish, special-case refinement, or lower-risk page cleanup.

| Route or family | Page family | Issue | Severity | Evidence | Likely source | Recommended fix |
|---|---|---|---|---|---|---|
| Global UI system | All | Design primitives are sharp, but pages frequently use rounded pills/cards, soft shadows, gradients, and multicolor chips. | High | `globals.css` defines editorial/sharp tokens; `Button` and `Card` both force `rounded-none`; production contact sheet shows mixed page families. | `src/app/globals.css`, `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`, page-level classes | Document allowed exceptions, then replace page-level rounded/shadow/gradient patterns with shared `Card`, `Button`, `IconWrapper`, and section utilities. |
| `/service-areas`, header, footer | Route exposure | Route lists are split between `siteRoutes` and manual arrays; some active pages are not equally represented in hub/header/footer. | High | `siteRoutes` exports route grouping helpers, but `Navbar.tsx` and `Footer.tsx` contain manual arrays. | `src/lib/site-routes.ts`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/app/service-areas/page.tsx` | Make `siteRoutes` the single source for nav/footer/sitemap/service-area hub/local-product lists, with deliberate featured caps. |
| `/contact` | Lead capture | Visible labels are not associated with inputs; selector buttons do not expose selected state semantics. | High | `ContactClient.tsx` visible labels around lines 360-443 lack `htmlFor`/`id`; selector buttons around lines 333-349 lack `aria-pressed` or radio semantics. | `src/components/features/contact/ContactClient.tsx` | Add stable ids, `htmlFor`, autocomplete where useful, and segmented-control semantics. Preserve `/api/leads` flow. |
| `/guides/planning-guide` | Lead capture | Lead-capture fields use visible labels in default mode but inputs do not have ids; compact variants may rely only on placeholders. Visual style is rounded/glass while Contact form is sharp. | High | `LeadCaptureForm.tsx` lines 130-230 show rounded container, rounded inputs, and labels without associated inputs. | `src/components/features/contact/LeadCaptureForm.tsx` | Make a shared lead form field primitive with ids/labels, dark/light variants, sharp or documented exception styling, and consistent success/error states. |
| Mobile global nav | Header/nav | Mobile menu button has an aria label but no `aria-expanded` or `aria-controls`. | Medium | `Navbar.tsx` lines 693-710. | `src/components/layout/Navbar.tsx` | Add `aria-expanded`, `aria-controls`, menu id, Escape-to-close, and focus management acceptance checks. |
| Root layout plus pages | Landmarks | Root layout wraps all pages in `<main id="main-content">`, while many page files also return their own `<main>`. This creates nested main landmarks. | Medium | `layout.tsx` lines 150-154; many `page.tsx` files return `<main>`. | `src/app/layout.tsx`, route pages | Pick one convention. Prefer layout owns `main`, and page templates return fragments/sections, or remove root `main` and keep page-level `main`. |
| `/systems`, `/commercial/*`, `/service-areas` | CTA routing | Several CTAs still link to bare `/contact`, losing source/product/area/type context. | High | Source examples include `/systems` CTAs, commercial detail CTAs, and service-area hub CTAs. | `src/app/systems/page.tsx`, `src/app/commercial/**/page.tsx`, `src/app/service-areas/page.tsx`, `src/lib/contact-links.ts` | Standardize all lead CTAs on `buildContactHref` plus source/type/product/area. Use `TrackedLink` where already established. |
| `/` | Homepage proof | Homepage hard-codes "24 Outdoor Transformations" while source has 27 generated project records and `/projects` renders `projects.length`. | Medium | `src/app/page.tsx` lines 478-480; `/projects` live hero shows 27. | `src/app/page.tsx`, `src/lib/projects.ts` | Pull count from project data or use copy that does not hard-code counts. |
| `/projects` | Portfolio proof | Portfolio promise is weakened by placeholder cards on a page meant to build trust. | High | Desktop and mobile screenshots: `/projects` notice plus placeholder/project-in-progress cards; project source includes incomplete records. | `src/app/projects/ProjectsContent.tsx`, `src/lib/projects-data.ts`, `src/components/projects/ProjectPhotoPlaceholder.tsx` | Keep valid project routes for SEO, but segment photographed case studies from "profile in progress"; do not present placeholders as equal proof cards. |
| `/projects/[slug]` | Project details | Template is strong and source-backed; use it as a canonical pattern. Minor issue: incomplete projects need clear proof hierarchy. | Low | `/projects/karp` screenshot; `ProjectHero`, `ProjectContent`, `ProjectSidebar` source. | `src/app/projects/[slug]/**` | Preserve template, metadata, schema, related links. Use as model for other families: page + components + data helpers + conditional sections. |
| `/systems/pergolas`, `/systems/shades`, `/systems/enclosures` | System detail | Product detail structure is useful but visually detached from dark system/outcome pages; gallery UI uses rounded controls/viewport. | Medium | Desktop sheet: `/systems/pergolas` white hero beside dark `/systems` and `/outdoor-rooms`; `ProductGallery` uses `rounded-2xl` and `rounded-full`. | `src/app/systems/**/page.tsx`, `src/components/features/gallery/ProductGallery.tsx` | Keep content architecture, but standardize system-detail hero, gallery aspect ratio, sharp controls, and CTA hierarchy across all systems. |
| `/systems/appliances`, `/systems/saunas` | System detail | Older product/ecommerce feel: softer gallery, rounded cards, sticky product info, gradient CTA. | Medium | `/systems/saunas` desktop screenshot and source `SaunasPageClient.tsx`; appliances source. | `src/app/systems/appliances/page.tsx`, `src/app/systems/saunas/SaunasPageClient.tsx` | Migrate into the system-detail template used by core systems, with consistent proof, specs, showroom CTA, and related planning links. |
| `/systems/pergolas/configure` | Configurator | Tool shell is legitimately distinct, but mobile is control-first and dense; 3D value sits behind the "View 3D" tab. | Medium | Mobile screenshot `/systems/pergolas/configure`; route keeps metadata via server page and child client app. | `src/app/systems/pergolas/configure/page.tsx`, configurator components | Keep as special tool route. Add a consistent top-level value/CTA strip, ensure mobile tabs are obvious, and preserve metadata in server page. |
| `/outdoor-rooms` and detail | Outdoor room pages | Strongest outcome-led pattern. Minor issue: some rounded/gradient image overlays still diverge from primitives. | Low | Desktop screenshots show clear dark split hero, system proof, and CTA hierarchy. | `src/app/outdoor-rooms/**/page.tsx` | Use as canonical outcome-page structure; normalize image cards and CTA/button details during rollout. |
| `/commercial` | Commercial hub | Strong operational page; however proof language and ROI framing need consistent evidence standards. | Medium | Desktop screenshot shows "Profit from every seat" and KPI-led module. | `src/app/commercial/page.tsx` | Preserve sales clarity, but require source-backed proof labels and consistent commercial detail modules. |
| `/commercial/restaurant-patio-enclosures` | Commercial detail | Older landing-page pattern: gradient image overlay, rounded revenue card, aggressive ROI claims, bare `/contact`. | High | Desktop/mobile screenshots; source includes "365-day revenue engine," "$0 Lost Revenue," "Pay for the system in one season." | `src/app/commercial/restaurant-patio-enclosures/page.tsx` | Rebuild on commercial detail template: sober dark hero, qualified proof, project examples, CTA with contact context, no unqualified revenue guarantees. |
| `/commercial/hotel-roof-deck-systems` | Commercial detail | Similar older pattern: full-bleed gradient hero, rounded feature image, bare `/contact`, soft landing-page CTA. | Medium | Source shows rounded-3xl image and bare contact links. | `src/app/commercial/hotel-roof-deck-systems/page.tsx` | Consolidate with commercial detail template and proof/CTA standards. |
| `/service-areas/algonquin-il` | Service-area city/region | Good candidate canonical local hub: dark image hero, service proof strip, shared cards, local context. | Low | Desktop screenshot and source use `hero-title`, `Card`, `IconWrapper`, FAQ/schema. | `src/app/service-areas/algonquin-il/page.tsx` | Use as starting template for city/region pages while preserving local copy and schema. |
| `/service-areas/northbrook-il/motorized-pergolas` | Service-area product | Clear outlier: rounded cards, multicolor icon chips, emoji/symbol icons, gradient CTA block, softer style. | High | Desktop/mobile screenshots; source shows rounded-xl cards, colored chips, emoji/symbol icons. | `src/app/service-areas/northbrook-il/motorized-pergolas/page.tsx` | Migrate to the newer Chicago local product template. Preserve metadata, local content, links, and schema. |
| `/service-areas/chicago-il/motorized-pergolas` | Service-area product | Strong candidate canonical local product page: dark hero, local proof, product CTA, sections using `Card` and `section-title`. | Low | Desktop screenshot and source. | `src/app/service-areas/chicago-il/motorized-pergolas/page.tsx` | Use as canonical product-local template, with variations for screens/glass/Florida/local review needs. |
| `/service-areas/wilmette-il/louvered-pergolas` and `/winnetka-il/louvered-pergolas` | Service-area product | Older local product style: pill badges, rounded cards/buttons, softer guide-like rhythm. | Medium | Mobile/desktop representative screenshot plus source class patterns. | `src/app/service-areas/wilmette-il/louvered-pergolas/page.tsx`, `src/app/service-areas/winnetka-il/louvered-pergolas/page.tsx` | Bring into the local product template after Northbrook pilot. |
| Southwest Florida and Sanibel pages | Service-area/local product | Regional/coastal content should stay distinct, but visual system should still be EDG. | Medium | Screenshots and route inventory show separate region group. | `src/app/service-areas/southwest-florida/**`, `src/app/service-areas/sanibel-outdoor-living/**` | Preserve Florida-specific routing, copy, and permit context. Normalize components and proof standards without making it look like Midwest copy. |
| `/guides` | Guides hub | Softer Knowledge Base directory with rounded badge/cards and no strong first-screen conversion/proof. | Medium | Desktop screenshot; source uses rounded-full badge and rounded-lg guide cards. | `src/app/guides/page.tsx` | Convert to sharp editorial guide hub with proof/CTA strip and clear guide categories. |
| `/guides/louvered-pergolas` | Guide detail | Older pillar-guide shell: rounded pill badge, rounded cards, multicolor chips, rounded buttons. | High | Desktop screenshot and source class patterns. | `src/app/guides/louvered-pergolas/page.tsx` | Migrate to the newer guide/article shell used by planning guides; keep metadata, FAQ schema, internal links, and ranking copy. |
| `/guides/motorized-pergola-planning` and `/guides/pergola-system-fit-review` | Guide detail | Stronger newer guide/planning shell. Fit review contains form surface requiring shared form accessibility/style. | Low | Desktop screenshots; source uses shared cards and schema. | `src/app/guides/motorized-pergola-planning/page.tsx`, `src/app/guides/pergola-system-fit-review/page.tsx` | Treat as canonical guide/action template, then standardize form shell. |
| `/guides/planning-guide` | Lead guide landing | Lead value is clear on desktop, but mobile pushes the form below the first viewport; form styling differs from Contact. | High | Mobile screenshot; `LeadCaptureForm` source. | `src/app/guides/planning-guide/PlanningGuideLanding.tsx`, `LeadCaptureForm.tsx` | Mobile should expose either the form or a sticky/anchor CTA in first viewport. Align lead form styling/accessibility with Contact. |
| `/guides/planning-guide/read` | Guide reader | Special reader has no footer and redirects without cookie. This is intentional but visually separate. | Low | Footer hides route; reader metadata is `noindex, follow`. | `src/app/guides/planning-guide/read/page.tsx`, `GuideReadClient.tsx`, `Footer.tsx` | Keep as special utility/editorial reader. Do not force normal footer. Ensure authenticated reader state remains accessible. |
| `/gallery` | Gallery | Strong black proof page, but no first-screen conversion CTA. Mobile starts with an appliance/detail crop that may not read as broad outdoor-room proof. | Medium | Desktop/mobile screenshots. | `src/app/gallery/page.tsx`, `src/data/gallery-images.json` | Add a restrained CTA/proof strip and control first image ordering/crop. Preserve visual portfolio simplicity. |
| `/showroom` | Showroom | Important trust page uses rounded cards/buttons and softer page style than trade/home/project pages. | Medium | Desktop screenshot and source `rounded-md`, `rounded-2xl`, `rounded-xl`. | `src/app/showroom/page.tsx` | Rework into sharp trust/proof template with real showroom image, hours/location cards via `Card`, and tracked showroom CTA. |
| `/trade-partners` | Trade partners | Mostly aligned, but showroom visual is a placeholder block instead of real proof. | Low | Source showroom section uses placeholder icon block. | `src/app/trade-partners/TradePartnersPageContent.tsx` | Replace placeholder with registered real showroom/trade visual; keep pro/trade positioning and CTA routing. |
| `/privacy`, `/terms` | Legal | Legal content is acceptable, but contact info card uses rounded-2xl and old styling. | Low | Source has rounded contact card. | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` | Low priority. Convert contact block to sharp `Card` only when touching legal pages for another reason. |
| `/html-sitemap` | Utility | This page correctly uses `siteRoutes` and generated projects. | Low | `html-sitemap/page.tsx` consumes `getHtmlSitemapRoutes` and `getAllProjects`. | `src/app/html-sitemap/page.tsx` | Preserve as source-backed utility. Use it as proof that registry-driven route exposure works. |

## Proposed EDG Website Design System Standard

### 1. Layout Grid and Containers

- Default page content uses `Container` (`max-w-7xl px-4 md:px-6 lg:px-8`).
- Full-bleed media is allowed only for homepage, project detail hero, gallery, and selected sales heroes.
- Avoid nested cards and floating section cards. Use full-width section bands with constrained inner content.
- Use page-family templates so local pages, guide pages, commercial details, and system details share predictable grids.

### 2. Section Spacing

- Use `section-sm`, `section-md`, `section-lg`, or `Section` as the default vertical rhythm.
- High-intent hero-to-proof transitions should not feel like unrelated pages stacked together. Use a consistent sequence:
  - Hero
  - Proof or context strip
  - Main comparison/explanation section
  - Project/showroom proof
  - FAQ/internal links
  - CTA
- Service-area/local pages can be longer, but each local section should reuse the same spacing and card structure.

### 3. Hero Patterns

Use a limited set of hero patterns:

1. Primary sales hero:
   - Dark image or black background.
   - Left-aligned H1, short proof line, primary mint CTA, secondary text/outline CTA.
   - Optional form only when the page intent is direct lead capture.
   - Applies to homepage, commercial hub, core local hub, selected product-local pages.

2. Product/system detail hero:
   - Breadcrumb, system label, H1, concise system explanation, primary fit-review/quote CTA, secondary configurator/showroom/system CTA.
   - Media/gallery on the right with consistent aspect ratio and sharp controls.
   - Applies to `/systems/pergolas`, `/systems/shades`, `/systems/enclosures`, `/systems/appliances`, `/systems/saunas`.

3. Outcome/detail hero:
   - Dark split or dark image treatment with outcome language and one primary CTA.
   - Applies to outdoor room pages and commercial detail pages.

4. Guide/editorial hero:
   - Smaller than sales heroes.
   - Clear article category, H1, summary, read time/updated date if useful.
   - No pill badges unless badges are documented as an intentional guide-only exception.

5. Utility/tool hero:
   - Configurator and planning-guide reader can be special shells.
   - Must still follow nav, mobile, focus, and CTA semantics.

### 4. Typography

- Use the existing Barlow type system.
- Use `.hero-title`, `.page-title`, and `.section-title` intentionally rather than ad hoc `text-6xl`, `tracking-tight`, and `tracking-tighter` combinations.
- Mobile H1s should be visually comparable across major page families; avoid huge index-page H1s next to smaller high-intent detail-page H1s.
- Keep line lengths tight: roughly 55-75 characters for editorial body text and 35-55 characters for dense sales copy.
- Avoid decorative font shifts unless the guide reader explicitly opts into an editorial reader experience.

### 5. Color and Backgrounds

- Core palette: black, white, zinc, EDG mint.
- Retire multicolor icon chips (red/blue/purple/amber/rose) from normal marketing pages.
- Use mint for primary action, section labels, selected states, and key proof accents.
- Gradients should be limited to image scrims, not decorative backgrounds or rounded CTA panels.
- Commercial proof modules can use dark surfaces, but should not introduce a separate SaaS/ROI dashboard style unless standardized.

### 6. CTA and Button Rules

- Use `Button` for all button-like controls and links rendered as buttons.
- Default primary CTA: mint background, black text.
- Secondary CTA: outline or text link, not another visually competing primary.
- All lead CTAs should use `buildContactHref` with `type`, `product`, `area/location`, `project`, and `source` where known.
- Use `TrackedLink`/`TrackedPhoneLink` where conversion tracking is already expected.
- Avoid bare `/contact` on product, commercial, local, guide, and project pages.
- Every first viewport should have a clear path to the page's next best action:
  - Fit review
  - Schedule assessment
  - Plan similar project
  - Visit showroom
  - Read guide
  - Open configurator

### 7. Card Rules

- Default cards use `Card` with `rounded-none`, border, and documented padding.
- Cards should not be nested inside other cards.
- Avoid `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full` unless the page family explicitly documents an exception.
- Avoid hover shadows as the main affordance. Prefer border/brand accent changes.
- Proof/stat cards should state what the number means and where it came from. Avoid unqualified guarantees.

### 8. Image and Media Rules

- Use `src/lib/images.ts` and existing image registry rules.
- Prefer real project/product/showroom imagery over placeholders, dark decorative backgrounds, or generic proof blocks.
- For project proof, separate finished-photo case studies from in-progress project profiles.
- Standardize aspect ratios:
  - Hero media: 4:3 or 16:10 depending on family.
  - Product gallery: 4:3 main image, consistent thumbnail row, sharp controls.
  - Project cards: 4:3 or 16:10, consistent across projects.
- Do not replace real source-backed images with generic stock-like imagery.
- Ensure mobile first image/crop communicates the intended proof, especially on `/gallery` and project-heavy pages.

### 9. Proof, Reviews, and Trust Modules

- Create a small set of reusable proof modules:
  - Project proof card
  - Review/testimonial strip
  - Showroom proof block
  - Commercial operations proof block
  - Local service proof strip
  - Partner/trade proof block
- Use source-backed language. Avoid claims such as "365-day revenue engine," "$0 lost revenue," or "pay for the system in one season" unless there is a clear qualification and source basis.
- Surface showroom proof earlier on pages where trust is the main question.
- Gallery/guides/service-area hubs should have at least a light proof or next-action strip in the first screen or immediately after.

### 10. Forms and Lead Capture

- Preserve current lead flow: website forms submit to `/api/leads`, and `/api/leads` forwards accepted leads to Rainmaker through `RAINMAKER_*` env vars.
- Do not describe Supabase as the active lead database unless source code changes prove it.
- Standardize form fields:
  - Stable `id`
  - `label htmlFor`
  - Useful `autocomplete`
  - Required/error/help text semantics
  - Focus-visible styles
  - Loading/success/error states
- Contact full form and guide lead-capture form should feel related, even if one is light and one is dark.
- On mobile high-intent lead pages, expose the form or an anchor CTA in the first viewport.

### 11. Mobile Behavior

- Header menu needs `aria-expanded`, `aria-controls`, menu id, Escape-to-close, and focus behavior.
- Avoid first-screen mobile experiences where conversion moves from visible to hidden:
  - Contact mobile currently shows info panel before form.
  - Planning-guide mobile shows value bullets before form.
  - Configurator mobile shows controls before 3D view.
- Tool routes may be dense, but controls should not obscure the core value.
- Tap targets should remain at least 44px where practical.
- Mobile H1 scale should be capped by page family, not by individual page taste.

## Template Consolidation Plan

### Canonical Patterns to Keep

- Project detail template: keep the `ProjectHero`, `ProjectContent`, `ProjectSidebar`, and `RelatedProjects` structure.
- Outdoor room pages: keep the outcome-led dark hero, system explanation, project/proof, and CTA rhythm.
- Newer local product template: use `/service-areas/chicago-il/motorized-pergolas` as the starting point.
- Newer city hub template: use `/service-areas/algonquin-il` as the starting point.
- Fit-review/planning guide shell: use `/guides/pergola-system-fit-review` and `/guides/motorized-pergola-planning` as guide/action references.
- Registry-driven sitemap: keep `/html-sitemap` and `sitemap.ts` behavior.

### Patterns to Retire or Rewrite

- Rounded pill badges as the default marketing-page label.
- Multicolor icon chips on local/product pages.
- Gradient rounded CTA panels.
- Revenue/proof cards with unqualified claims.
- Bare `/contact` links from specific page contexts.
- Placeholder visual blocks on high-trust pages when real showroom/project imagery exists.
- Manual route arrays where `siteRoutes` already has group helpers.

### Shared Components to Define or Tighten

- `PageHero` or family-specific hero components:
  - `SalesHero`
  - `SystemDetailHero`
  - `LocalPageHero`
  - `GuideHero`
  - `ProjectHero` already exists
- `ProofStrip`
- `ProjectProofGrid`
- `LocalServiceLinks`
- `RelatedRoutes`
- `LeadFormField`
- `LeadCapturePanel`
- `CommercialDetailShell`
- `GuideArticleShell`
- `ServiceAreaHubTemplate`
- `ServiceAreaProductTemplate`

## Phased Update Plan

### Phase 0: Read-only Audit Artifacts

Status: this document and screenshot evidence.

- Keep artifact local until Colton approves implementation.
- No code changes, deployment, or indexing.
- Use this audit as the source of implementation scope.

### Phase 1: Design-System and Routing Definitions

Goal: make consistency enforceable before changing dozens of pages.

Tasks:

- Add/confirm design-system rules for hero types, card/button radius, proof modules, form fields, and CTA query params.
- Decide strictness of sharp-corner system and allowed exceptions.
- Make route exposure helpers from `siteRoutes` the default for header/footer/service-area hub/local-product lists.
- Add form accessibility primitives and mobile nav aria/focus rules.
- Add acceptance checklist for metadata, canonical, JSON-LD, sitemap, internal links, analytics, CTA routing, and lead flow.

No visual rollout should start until this phase has approval.

### Phase 2: Pilot on Representative Pages

Recommended pilot:

1. `/service-areas/northbrook-il/motorized-pergolas`
   - Clear local-product outlier.
   - High SEO/conversion value.
   - Good test for migrating old local pages to the Chicago-style product template.

2. `/commercial/restaurant-patio-enclosures`
   - Clear commercial-detail outlier.
   - Lets EDG fix both style drift and over-aggressive proof language.
   - Good test for commercial CTA/context handling.

3. `/guides/louvered-pergolas`
   - Important SEO guide with older rounded/pillar-guide shell.
   - Good test for preserving metadata/FAQ schema while normalizing presentation.

4. `/systems/saunas`
   - System detail page with older product/ecommerce treatment.
   - Good test for unifying newer and older system pages.

5. `/showroom` plus shared lead form primitives
   - Showroom is a trust asset and should demonstrate the system.
   - Form primitives can improve `/contact` and `/guides/planning-guide` without changing lead flow.

Pilot acceptance:

- Same metadata/canonical/schema behavior before and after.
- Same or better internal links.
- All lead CTAs preserve source/product/area context.
- `/api/leads` path is untouched unless explicitly approved and tested.
- Desktop and mobile screenshots show template consistency.
- Contact and lead-capture fields pass label/keyboard checks.

### Phase 3: Roll Out by Route Family

Order:

1. Service-area product pages.
2. Commercial detail pages.
3. Guide detail pages.
4. System detail pages.
5. Service-area city/region pages.
6. Hubs and utilities that need lighter polish: `/guides`, `/gallery`, `/showroom`, legal pages.

Do not hide or delete SEO pages to make navigation cleaner. Use registry-driven exposure and deliberate featured lists instead.

### Phase 4: QA, SEO Checks, Lead-Path Checks, Browser Verification

For each route family:

- `npm run routes:check`
- `npm run lint`
- `npm run build`
- Targeted browser screenshots desktop/mobile.
- Check live-equivalent local render for:
  - Header/footer behavior
  - Breadcrumbs and BreadcrumbList JSON-LD
  - Canonical URL
  - FAQ/service/project schema where present
  - Sitemap inclusion/exclusion
  - Internal links
  - CTA query params
  - Form labels, focus states, keyboard path, required/error states
  - Image loading/crops
  - No horizontal overflow
- If forms or `/api/leads` are touched, verify the full website lead path through Rainmaker handoff before calling safe.

### Phase 5: Commit, Push, Deploy, Live Verification

Only after Colton explicitly approves implementation and deployment:

- Commit scoped changes.
- Push to `origin/edg-positioning`.
- Deploy to production.
- Verify live `200` responses.
- Browser-check changed live pages on desktop and mobile.
- Confirm canonical, sitemap, relevant internal links, and lead CTA behavior.
- Treat Search Console/indexing as a separate proof layer after deployment, not as deployment proof.

## Recommended Pilot Set

| Pilot route | Why first | Success criteria |
|---|---|---|
| `/service-areas/northbrook-il/motorized-pergolas` | Most obvious local-product style drift; high conversion/SEO value; good comparison against Chicago canonical. | Looks like the same system as `/service-areas/chicago-il/motorized-pergolas`; preserves local copy/schema/links; removes emoji/multicolor chips/rounded CTA panel. |
| `/commercial/restaurant-patio-enclosures` | Commercial detail pages are visibly split; copy/proof language needs tightening. | Commercial detail template established; CTAs use context; claims are qualified; dark operational feel matches `/commercial`. |
| `/guides/louvered-pergolas` | Important guide with older visual shell; good SEO-preservation test. | Metadata/FAQ schema unchanged; article feels like the newer guide system; rounded cards/pills retired. |
| `/systems/saunas` | Older system detail page; tests product-detail consolidation without touching the core pergola page first. | Saunas adopts system detail shell; gallery/cards/buttons align; showroom/quote CTAs preserved. |
| `/showroom` and shared lead form primitives | Showroom should be a trust centerpiece; forms affect conversion and accessibility. | Showroom uses sharp trust modules and real imagery; Contact/LeadCapture fields have associated labels and consistent states. |

## Things Not to Change

- Do not change `/api/leads` or Rainmaker handoff as part of design-system cleanup unless explicitly approved.
- Do not describe Supabase as the active lead database.
- Do not add `'use client'` to metadata-bearing `page.tsx` files.
- Do not remove valid SEO routes, service-area pages, local product pages, guide pages, generated project pages, sitemap entries, or canonical URLs for visual simplicity.
- Do not remove the planning-guide reader special behavior or force the footer onto `/guides/planning-guide/read`.
- Do not replace real EDG/project/showroom images with generic stock-like visuals.
- Do not erase regional distinctions, especially Southwest Florida and Sanibel context.
- Do not weaken the project-detail SEO/schema structure.
- Do not ship a broad redesign without a pilot.
- Do not deploy or request indexing until implementation is separately approved and verified.

## Open Questions for Colton

1. Should "editorial/sharp" be strict across all marketing pages, or are rounded elements allowed for specific surfaces such as galleries, guide reader controls, and forms?
2. Should primary system detail pages use a dark hero to match `/systems` and `/outdoor-rooms`, or keep the white product-spec hero with tighter shared rules?
3. On mobile `/contact`, should the form move above the info panel, or should there be a sticky/anchor CTA that jumps directly to the form?
4. For `/projects`, should incomplete project profiles stay in the main grid with clearer labeling, move to a secondary section, or remain indexed but less prominent?
5. What proof standard should commercial pages use for revenue, seasonality, and operational claims?
6. Which local routes must be featured in the header versus exposed in footer/sitemap/service-area hub only?
7. Should Florida/Sanibel pages have any visual local flavor, or should they be fully normalized to the Midwest EDG system?
8. Should the guide landing page optimize mobile for immediate email capture or for education-first reading with a sticky CTA?
9. Are there brand images or showroom photos that should replace current placeholder proof blocks?

## Approval Needed Before Implementation

Implementation should not begin until Colton approves:

- The strictness of the sharp editorial design system.
- The pilot route set.
- The route exposure strategy for header/footer/service-area hub.
- The commercial proof language standard.
- The mobile form/CTA priority for Contact and Planning Guide.
- Whether Phase 1 may include shared component and routing-helper changes before page-level visual rollout.

Until then, this document and the screenshot folder are the deliverables.
