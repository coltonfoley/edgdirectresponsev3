# EDG Project Media Inventory

Verified against source on 2026-06-25.

## Portfolio Truth

- Source file: `src/lib/projects-data.ts`
- Rendered index: `src/app/projects/ProjectsContent.tsx`
- Project count: 25 projects, read from source at render time.
- Complete records with real photo sets: Karp, Carmine's, Wade, Jake, Greco.
- Partial records: 20 projects still need at least solution notes, results, or final project photos.
- Project pages no longer invent generic solutions or results for missing CSV fields.
- Placeholder project image folders are treated as in-progress project media, not finished photo galleries.

## Content And Photo Requests

| Project | Location | Missing source fields | Needed from EDG |
| --- | --- | --- | --- |
| Rosebud | Chicago, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| The Elm | La Grange, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| The District | Richmond, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Chicago Winery | Chicago, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Reddy | Burr Ridge, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Arora | Burr Ridge, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Ike & Oak | Woodridge, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Matchbox | Chicago, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Lou Malnati Naperville | Naperville, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| 151 N Franklin | Chicago, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Palm Springs Airport | Palm Springs, CA | solution, results | Final photo set, solution notes, and measured/approved results |
| Hyatt Wicker Park | Chicago, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Boden | Winnetka, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Dicks Roofing (Troha) | Pleasant Prairie, WI | solution | Final photo set and solution notes |
| Dicks Roofing Project 2 | Kenosha, WI | solution, results | Final photo set, solution notes, and measured/approved results |
| Haiti | Unknown, Unknown | address, solution, results | Confirm location/address, final photo set, solution notes, and approved results |
| Dalesandro | Chicago, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Moody | Hinsdale, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Tony | Glenview, IL | solution, results | Final photo set, solution notes, and measured/approved results |
| Avaella | Downers Grove, IL | solution, results | Final photo set, solution notes, and measured/approved results |

## Asset Inventory Result

`npm run validate-images` now checks active source references plus current project hero mappings. It no longer treats registry-backed system images, project hero mappings, logos, saunas, appliances, testimonials, and service-area images as orphaned simply because the old hand-maintained list missed them.

Safe deletions completed:

- Removed exact duplicate `OLD-` enclosure images that also exist under active brand/enclosure paths.
- Removed unused `4.jpg` placeholder extras from generated project placeholder folders.
- Removed the legacy `public/projects/northbrook-family-entertaining` placeholder folder, which was only referenced by archived placeholder tooling.

Remaining orphan candidates after cleanup:

- `OLD-` assets needing human review: `/images/appliances/OLD-covered-patio-beverage-station.jpg`, `/images/appliances/OLD-griddle-grill-outdoor-kitchen.jpg`, `/images/enclosures/OLD-pergola-patio-outdoor-living.jpg`
- Likely intentional holding assets: `/images/brochure/*`
- Brand extras needing human review: `/images/brand/context-snow.jpg`, `/images/brand/hero-pergola-open-louvered-backyard.jpg`

## OG Runtime Finding

The Edge runtime warning is caused by these generated social image routes:

- `/opengraph-image`
- `/commercial/opengraph-image`
- `/contact/opengraph-image`
- `/service-areas/opengraph-image`
- `/service-areas/barrington-il/opengraph-image`
- `/service-areas/lake-geneva-wi/opengraph-image`
- `/service-areas/naperville-il/opengraph-image`
- `/service-areas/wilmette-il/opengraph-image`
- `/systems/enclosures/opengraph-image`
- `/systems/pergolas/opengraph-image`
- `/systems/shades/opengraph-image`

These routes use `next/og` image generation through `src/lib/og-templates.tsx`. They were left on Edge runtime because the warning is expected for dynamic OG image generation and changing runtime would risk social preview breakage without improving page SEO.
