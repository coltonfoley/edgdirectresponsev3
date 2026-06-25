# EDG Patio & Shade Website - Orphaned Pages Audit

**Date:** February 18, 2026  
**Scope:** Complete internal link analysis of edgdirectresponsev3  
**Auditor:** AI Analysis

---

## EXECUTIVE SUMMARY

The EDG Patio & Shade website has **55 page.tsx files** generating discoverable URLs. Based on comprehensive analysis of navigation (Navbar, Footer), parent pages, sitemap, and internal linking patterns, I have identified **SIGNIFICANT ORPHANING ISSUES** affecting multiple critical page categories.

### Overall Health Score: ⚠️ **NEEDS ATTENTION**

| Category | Total Pages | Well-Linked | Orphaned/Under-linked |
|----------|-------------|-------------|----------------------|
| Core Pages | 8 | 7 | 1 |
| Systems Pages | 8 | 7 | 1 |
| Service Areas | 17 | 11 | 6 |
| Commercial | 8 | 5 | 3 |
| Guides | 5 | 4 | 1 |
| Locations (/locations/) | 3 | 0 | 3 (CRITICAL) |
| Projects | 24 | 3 | 21 (via /projects/ only) |
| Utility Pages | 5 | 5 | 0 |
| **TOTAL** | **78** | **42** | **36** |

---

## 1. MASTER LIST OF ALL PAGES

### Core Pages (8 pages)
| Path | File Location | In Nav? | In Footer? | In Sitemap? |
|------|--------------|---------|------------|-------------|
| `/` | `src/app/page.tsx` | ✓ Logo | ✓ | ✓ |
| `/contact` | `src/app/contact/page.tsx` | ✓ CTA | ✓ | ✓ |
| `/design` | `src/app/design/page.tsx` | ✗ | ✓ | ✓ |
| `/gallery` | `src/app/gallery/page.tsx` | ✓ | ✓ | ✗ |
| `/price` | `src/app/price/page.tsx` | ✗ | ✓ | ✓ |
| `/showroom` | `src/app/showroom/page.tsx` | ✗ | ✓ | ✓ |
| `/trade-partners` | `src/app/trade-partners/page.tsx` | ✓ | ✓ | ✓ |
| `/projects` | `src/app/projects/page.tsx` | ✓ | ✓ | ✓ |

### Systems Pages (8 pages)
| Path | File Location | Parent Links | In Sitemap? |
|------|--------------|--------------|-------------|
| `/systems` | `src/app/systems/page.tsx` | Navbar, Footer, Homepage | ✓ |
| `/systems/pergolas` | `src/app/systems/pergolas/page.tsx` | Navbar, Footer, Homepage, /systems | ✓ |
| `/systems/shades` | `src/app/systems/shades/page.tsx` | Navbar, Footer, Homepage, /systems | ✓ |
| `/systems/enclosures` | `src/app/systems/enclosures/page.tsx` | Navbar, Footer, /systems | ✓ |
| `/systems/appliances` | `src/app/systems/appliances/page.tsx` | Navbar, Footer, /systems | ✓ |
| `/systems/heating` | `src/app/systems/heating/page.tsx` | Navbar (dropdown), /systems | ✓ |
| `/systems/furniture` | `src/app/systems/furniture/page.tsx` | Navbar (dropdown), /systems | ✓ |
| `/systems/umbrellas` | `src/app/systems/umbrellas/page.tsx` | Navbar (dropdown), /systems | ✓ |

### Service Area Hub Pages (9 pages)
| Path | File Location | In Nav Dropdown? | In /service-areas? | In Footer? |
|------|--------------|------------------|-------------------|------------|
| `/service-areas` | `src/app/service-areas/page.tsx` | ✓ | N/A | ✓ |
| `/service-areas/wilmette-il` | `src/app/service-areas/wilmette-il/page.tsx` | ✓ | ✓ | ✓ |
| `/service-areas/winnetka-il` | `src/app/service-areas/winnetka-il/page.tsx` | ✓ | ✓ | ✓ |
| `/service-areas/northbrook-il` | `src/app/service-areas/northbrook-il/page.tsx` | ✓ | ✓ | ✓ |
| `/service-areas/barrington-il` | `src/app/service-areas/barrington-il/page.tsx` | ✓ | ✓ | ✓ |
| `/service-areas/naperville-il` | `src/app/service-areas/naperville-il/page.tsx` | ✓ | ✓ | ✓ |
| `/service-areas/hinsdale-il` | `src/app/service-areas/hinsdale-il/page.tsx` | ✓ | ✓ | ✗ |
| `/service-areas/oak-brook-il` | `src/app/service-areas/oak-brook-il/page.tsx` | ✓ | ✓ | ✗ |
| `/service-areas/lake-geneva-wi` | `src/app/service-areas/lake-geneva-wi/page.tsx` | ✓ | ✓ | ✗ |
| `/service-areas/sanibel-outdoor-living` | `src/app/service-areas/sanibel-outdoor-living/page.tsx` | ✓ | ✓ | ✗ |

### Service Area Product Pages (8 pages) - DEEP LINKS
| Path | File Location | Linked From Parent? | In Sitemap? |
|------|--------------|---------------------|-------------|
| `/service-areas/barrington-il/motorized-pergolas` | `.../barrington-il/motorized-pergolas/page.tsx` | ✗ **ORPHAN** | ✓ |
| `/service-areas/naperville-il/motorized-pergolas` | `.../naperville-il/motorized-pergolas/page.tsx` | ✗ **ORPHAN** | ✗ |
| `/service-areas/northbrook-il/motorized-pergolas` | `.../northbrook-il/motorized-pergolas/page.tsx` | ✗ **ORPHAN** | ✓ |
| `/service-areas/sanibel-outdoor-living/louvered-pergolas` | `.../sanibel-outdoor-living/louvered-pergolas/page.tsx` | ✗ **ORPHAN** | ✓ |
| `/service-areas/wilmette-il/louvered-pergolas` | `.../wilmette-il/louvered-pergolas/page.tsx` | ✗ **ORPHAN** | ✓ |
| `/service-areas/winnetka-il/louvered-pergolas` | `.../winnetka-il/louvered-pergolas/page.tsx` | ✗ **ORPHAN** | ✓ |

### Commercial Pages (8 pages)
| Path | File Location | In Commercial Page? | In Footer? | In Sitemap? |
|------|--------------|---------------------|------------|-------------|
| `/commercial` | `src/app/commercial/page.tsx` | ✓ | ✓ | ✓ |
| `/commercial/hotel-pergolas` | `src/app/commercial/hotel-pergolas/page.tsx` | ✓ | ✗ | ✓ |
| `/commercial/restaurant-patio-solutions` | `src/app/commercial/restaurant-patio-solutions/page.tsx` | ✓ | ✗ | ✓ |
| `/commercial/chicago-hospitality-outdoor-living` | `src/app/commercial/chicago-hospitality-outdoor-living/page.tsx` | ✓ | ✗ | ✓ |
| `/commercial/country-club-outdoor-spaces` | `src/app/commercial/country-club-outdoor-spaces/page.tsx` | ✓ | ✗ | ✓ |
| `/commercial/west-loop` | `src/app/commercial/west-loop/page.tsx` | ✓ | ✗ | ✓ |
| `/commercial/restaurant-patio-enclosures` | `src/app/commercial/restaurant-patio-enclosures/page.tsx` | ✓ | ✗ | ✓ |
| `/commercial/hotel-roof-deck-systems` | `src/app/commercial/hotel-roof-deck-systems/page.tsx` | ✓ | ✗ | ✓ |

### Guide Pages (5 pages)
| Path | File Location | In /guides? | In Footer? | In Sitemap? |
|------|--------------|-------------|------------|-------------|
| `/guides` | `src/app/guides/page.tsx` | ✓ | ✓ | ✓ |
| `/guides/louvered-pergolas` | `src/app/guides/louvered-pergolas/page.tsx` | ✓ | ✗ | ✓ |
| `/guides/louvered-pergola-brands-compared` | `src/app/guides/louvered-pergola-brands-compared/page.tsx` | ✓ | ✗ | ✓ |
| `/guides/pergola-vs-patio-cover` | `src/app/guides/pergola-vs-patio-cover/page.tsx` | ✓ | ✗ | ✓ |
| `/guides/planning-guide` | `src/app/guides/planning-guide/page.tsx` | ✗ | ✓ | ✓ |
| `/guides/planning-guide/read` | `src/app/guides/planning-guide/read/page.tsx` | ✗ | ✗ | ✓ |

### Location Pages - SEPARATE STRUCTURE (3 pages) ⚠️
| Path | File Location | In Any Nav? | Linked From? | Status |
|------|--------------|-------------|--------------|--------|
| `/locations/lake-forest` | `src/app/locations/lake-forest/page.tsx` | ✗ | Only `/service-areas` | **CRITICAL ORPHAN** |
| `/locations/highland-park` | `src/app/locations/highland-park/page.tsx` | ✗ | Only `/service-areas` | **CRITICAL ORPHAN** |
| `/locations/lake-geneva` | `src/app/locations/lake-geneva/page.tsx` | ✗ | Only `/service-areas` | **CRITICAL ORPHAN** |

### Project Detail Pages (24 dynamic pages)
| Pattern | File Location | Access Method |
|---------|--------------|---------------|
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Linked from `/projects` page only |

**Note:** Individual project pages (24 total) are accessible only through the `/projects` listing page. Featured projects on homepage link to: karp, carmines, wade.

### Utility Pages (5 pages)
| Path | File Location | In Footer? | In Sitemap? |
|------|--------------|------------|-------------|
| `/html-sitemap` | `src/app/html-sitemap/page.tsx` | ✓ | ✓ |
| `/privacy` | `src/app/privacy/page.tsx` | ✓ | ✓ |
| `/terms` | `src/app/terms/page.tsx` | ✓ | ✓ |
| `/admin/seo-dashboard` | `src/app/admin/seo-dashboard/page.tsx` | N/A | ✗ |

---

## 2. ORPHANED PAGES BY CATEGORY

### 🔴 CRITICAL ORPHANS (High-Value Pages with ZERO Internal Links)

These pages exist but have NO internal links pointing to them. They are only discoverable via sitemap or direct URL.

| # | Page | Issue | SEO Impact |
|---|------|-------|------------|
| 1 | `/locations/lake-forest` | Not in any nav, not linked from service areas | HIGH - Local SEO page orphaned |
| 2 | `/locations/highland-park` | Not in any nav, not linked from service areas | HIGH - Local SEO page orphaned |
| 3 | `/locations/lake-geneva` | Not in any nav, not linked from service areas | HIGH - Local SEO page orphaned |
| 4 | `/service-areas/barrington-il/motorized-pergolas` | Exists but not linked from parent page | HIGH - Product spoke orphaned |
| 5 | `/service-areas/naperville-il/motorized-pergolas` | Exists but not linked from parent page | HIGH - Product spoke orphaned |
| 6 | `/service-areas/northbrook-il/motorized-pergolas` | Exists but not linked from parent page | HIGH - Product spoke orphaned |
| 7 | `/service-areas/wilmette-il/louvered-pergolas` | Exists but not linked from parent page | HIGH - Product spoke orphaned |
| 8 | `/service-areas/winnetka-il/louvered-pergolas` | Exists but not linked from parent page | HIGH - Product spoke orphaned |
| 9 | `/service-areas/sanibel-outdoor-living/louvered-pergolas` | Exists but not linked from parent page | HIGH - Product spoke orphaned |
| 10 | `/guides/planning-guide/read` | Not linked from planning-guide | MEDIUM - User guide page |

### 🟡 MODERATE ORPHANS (Linked from Only 1 Location)

| # | Page | Linked From | Issue |
|---|------|-------------|-------|
| 1 | `/design` | Footer only | Missing from main nav |
| 2 | `/price` | Footer only | Missing from main nav |
| 3 | `/showroom` | Footer only | Missing from main nav |
| 4 | `/service-areas/hinsdale-il` | Nav dropdown + parent only | Missing from footer |
| 5 | `/service-areas/oak-brook-il` | Nav dropdown + parent only | Missing from footer |
| 6 | `/service-areas/lake-geneva-wi` | Nav dropdown + parent only | Missing from footer |
| 7 | `/service-areas/sanibel-outdoor-living` | Nav dropdown + parent only | Missing from footer |
| 8 | `/guides` | Footer only | Missing from main nav |
| 9 | `/guides/planning-guide` | Footer + random CTAs only | Missing from /guides index |

### 🟢 MINOR ORPHANS (Low Priority / Admin Pages)

| # | Page | Reason |
|------|------|--------|
| 1 | `/admin/seo-dashboard` | Intentionally hidden (requires auth) |
| 2 | 21 individual `/projects/[slug]` pages | Only accessible via /projects filter - acceptable pattern |

---

## 3. NAVIGATION GAPS

### Gap 1: Footer Missing Service Areas
**Issue:** Only 6 of 9 service areas in Footer  
**Missing:** hinsdale-il, oak-brook-il, lake-geneva-wi, sanibel-outdoor-living

### Gap 2: /guides Index Missing Planning Guide
**Issue:** `/guides/planning-guide` is NOT listed in `/guides` page grid  
**Impact:** Primary conversion asset hidden from knowledge base

### Gap 3: No Link to /locations/* Pages
**Issue:** `/locations/lake-forest`, `/locations/highland-park`, `/locations/lake-geneva` have NO incoming links  
**Note:** These pages appear to be duplicate/legacy content overlapping with service areas

### Gap 4: Service Area Product Spokes Not Linked
**Issue:** 6 product-specific pages exist but parent service area pages don't link to them  
**Example:** `/service-areas/barrington-il` doesn't link to `/service-areas/barrington-il/motorized-pergolas`

### Gap 5: Missing Cross-Links Between Guides
**Issue:** Individual guide pages don't link to related guides  
**Example:** "Louvered Pergolas" guide doesn't link to "Pergola vs Patio Cover"

### Gap 6: Gallery Not in Sitemap
**Issue:** `/gallery` is in navigation but NOT in sitemap.ts  
**Impact:** Search engines may not prioritize it

---

## 4. SPECIFIC FIXES REQUIRED

### FIX 1: Merge or Link /locations/ Pages (CRITICAL)
**Problem:** 3 orphaned location pages with duplicate content structure  
**Options:**
- Option A: Add links from `/service-areas` to these pages
- Option B: Merge content into main service area pages and redirect
- Option C: Add to Navbar dropdown under "Areas"

**Recommended:** Option B - These appear to be older/legacy pages. Merge unique content into `/service-areas/[area]` pages and implement 301 redirects.

### FIX 2: Link Product Spokes from Parent Pages (CRITICAL)
**Pages needing fixes:**
- `/service-areas/barrington-il` → add link to `/service-areas/barrington-il/motorized-pergolas`
- `/service-areas/naperville-il` → add link to `/service-areas/naperville-il/motorized-pergolas`
- `/service-areas/northbrook-il` → add link to `/service-areas/northbrook-il/motorized-pergolas`
- `/service-areas/wilmette-il` → add link to `/service-areas/wilmette-il/louvered-pergolas`
- `/service-areas/winnetka-il` → add link to `/service-areas/winnetka-il/louvered-pergolas`
- `/service-areas/sanibel-outdoor-living` → add link to `/service-areas/sanibel-outdoor-living/louvered-pergolas`

**Suggested Anchor Text:** "Motorized Pergolas in [City]" or "Louvered Pergola Solutions for [City]"

### FIX 3: Add Planning Guide to /guides Index
**File:** `src/app/guides/page.tsx`  
**Action:** Add planning guide to the `guides` array (lines 17-39)

```typescript
{
  title: 'Free Planning Guide',
  desc: 'Download our comprehensive guide with budget ranges, system comparisons, and common mistakes to avoid.',
  href: '/guides/planning-guide',
  icon: Download,
  readTime: 'PDF Download',
}
```

### FIX 4: Complete Footer Service Areas
**File:** `src/components/layout/Footer.tsx` (lines 157-173)  
**Action:** Add missing service areas to footer:
- `/service-areas/hinsdale-il` - Hinsdale, IL
- `/service-areas/oak-brook-il` - Oak Brook, IL
- `/service-areas/lake-geneva-wi` - Lake Geneva, WI
- `/service-areas/sanibel-outdoor-living` - Sanibel, FL

### FIX 5: Add Gallery to Sitemap
**File:** `src/app/sitemap.ts`  
**Action:** Add `{ url: '/gallery', priority: 0.8 }` to routes array

### FIX 6: Add Cross-Links Between Guides
**Pages to update:**
- `/guides/louvered-pergolas` → link to `/guides/pergola-vs-patio-cover` and `/guides/louvered-pergola-brands-compared`
- `/guides/pergola-vs-patio-cover` → link to `/guides/louvered-pergolas`
- `/guides/louvered-pergola-brands-compared` → link to `/guides/louvered-pergolas`

### FIX 7: Add /design, /price, /showroom to Secondary Nav
**Consideration:** These are conversion-focused pages only in footer  
**Options:**
- Add to footer more prominently (already there)
- Add CTA buttons in relevant sections
- Consider adding "Design" to main nav dropdown

---

## 5. BROKEN LINKS OR ISSUES

### Issue 1: Sitemap/Navigation Mismatch
| URL | In Sitemap? | In Nav? | Issue |
|-----|-------------|---------|-------|
| `/gallery` | ✗ | ✓ | Should be in sitemap |
| `/pro` | ✗ | ✗ | Referenced in html-sitemap but page doesn't exist |

### Issue 2: Orphaned Deep Links in Sitemap
These URLs are in sitemap but have no internal links:
- `/service-areas/naperville-il/motorized-pergolas` (in sitemap, no internal links)

### Issue 3: HTML Sitemap Out of Date
**File:** `/src/app/html-sitemap/page.tsx`
**Issues found:**
- Line 22: Links to `/pro` which doesn't exist
- Missing: `/systems/heating`, `/systems/furniture`, `/systems/umbrellas`
- Missing: Most commercial sub-pages
- Missing: All service area product spokes
- Missing: `/guides/louvered-pergola-brands-compared`

---

## 6. PRIORITIZED ACTION PLAN

### Week 1 - Critical Fixes (SEO Impact: HIGH)
1. ✅ Add product spoke links to all 6 parent service area pages
2. ✅ Add Planning Guide to /guides index page
3. ✅ Add Gallery to sitemap.ts
4. ✅ Update HTML sitemap page with all missing links

### Week 2 - Important Fixes (SEO Impact: MEDIUM)
5. ✅ Complete footer with all 9 service areas
6. ✅ Add cross-links between related guides
7. ✅ Add `/guides/planning-guide/read` link from planning-guide page

### Week 3 - Cleanup (SEO Impact: LOW)
8. ⬜ Decide fate of `/locations/*` pages (merge, link, or redirect)
9. ⬜ Audit and fix any remaining sitemap discrepancies
10. ⬜ Add breadcrumbs to orphaned pages where missing

---

## 7. SUMMARY STATISTICS

| Metric | Count |
|--------|-------|
| Total page.tsx files | 55 |
| Total discoverable URLs | ~78 (including 24 projects) |
| Pages with 0 internal links | 10 (CRITICAL) |
| Pages with only 1 internal link | 9 (MODERATE) |
| Well-linked pages (2+ links) | ~42 |
| URLs in sitemap but orphaned | 6 |
| Pages missing from sitemap | 1 (/gallery) |

---

## APPENDIX: URL INVENTORY

### All URLs from page.tsx Files
```
/
/systems
/systems/pergolas
/systems/shades
/systems/enclosures
/systems/appliances
/systems/heating
/systems/furniture
/systems/umbrellas
/commercial
/commercial/chicago-hospitality-outdoor-living
/commercial/country-club-outdoor-spaces
/commercial/hotel-pergolas
/commercial/hotel-roof-deck-systems
/commercial/restaurant-patio-enclosures
/commercial/restaurant-patio-solutions
/commercial/west-loop
/contact
/design
gallery
guides
guides/louvered-pergola-brands-compared
guides/louvered-pergolas
guides/pergola-vs-patio-cover
guides/planning-guide
guides/planning-guide/read
/html-sitemap
/locations/highland-park
/locations/lake-forest
/locations/lake-geneva
/price
/privacy
/projects (listing)
/projects/[slug] (24 dynamic)
/service-areas
/service-areas/barrington-il
/service-areas/barrington-il/motorized-pergolas
/service-areas/hinsdale-il
/service-areas/lake-geneva-wi
/service-areas/naperville-il
/service-areas/naperville-il/motorized-pergolas
/service-areas/northbrook-il
/service-areas/northbrook-il/motorized-pergolas
/service-areas/oak-brook-il
/service-areas/sanibel-outdoor-living
/service-areas/sanibel-outdoor-living/louvered-pergolas
/service-areas/wilmette-il
/service-areas/wilmette-il/louvered-pergolas
/service-areas/winnetka-il
/service-areas/winnetka-il/louvered-pergolas
/showroom
/terms
trade-partners
/admin/seo-dashboard
```

---

**End of Audit Report**
