# Orphaned Pages Audit & Fix Plan

**Date:** February 18, 2026  
**Status:** CRITICAL ISSUES FOUND

---

## 🔴 CRITICAL: Orphaned Pages Requiring Immediate Action

### 1. `/locations/*` Pages (3 pages)
**Issue:** Legacy duplicate pages with no internal links
- `/locations/lake-forest`
- `/locations/highland-park`
- `/locations/lake-geneva`

**Problem:** 
- These duplicate content from `/service-areas/*` equivalents
- They compete for same keywords (cannibalization)
- Zero internal links despite being in sitemap
- Thin content compared to service-areas pages

**FIX:** 
1. Delete `/locations/*` directories
2. Add redirects in next.config.ts to `/service-areas/*`
3. Remove from sitemap.ts

---

### 2. Planning Guide Missing from Guides Index
**Issue:** `/guides/planning-guide` is the PRIMARY conversion asset but NOT listed in `/guides` index

**Impact:** Users browsing guides can't find the main planning guide

**FIX:**
Add to `/guides/page.tsx` guides array

---

### 3. `/guides/planning-guide/read` Not Linked
**Issue:** The "read" version of planning guide has no parent link

**FIX:**
Add "Read Full Guide" link from `/guides/planning-guide` page

---

## 🟡 MODERATE: Navigation Gaps

### 4. Footer Missing Key Service Areas
**Current footer shows only 6 service areas but there are 9 total**

**Missing from footer:**
- `/service-areas/hinsdale-il`
- `/service-areas/oak-brook-il`
- `/service-areas/lake-geneva-wi`

**FIX:** Add all service areas to footer

---

### 5. Cross-Linking Between Guides
**Guides don't link to each other**

**FIX:** Add "Related Guides" section to each guide page

---

## ✅ VERIFIED: Not Actually Orphaned

The following pages WERE flagged as orphaned but ARE properly linked:

| Page | Link Location |
|------|---------------|
| `/service-areas/*/motorized-pergolas` | Parent service area page |
| `/service-areas/*/louvered-pergolas` | Parent service area page |
| `/commercial/*` sub-pages | Commercial hub page |

---

## Implementation Priority

### Priority 1: This Week (Critical SEO Impact)
1. Delete /locations/* and redirect to service-areas
2. Add planning-guide to guides index
3. Add read guide link to planning-guide

### Priority 2: Next Week (User Experience)
4. Update footer with all service areas
5. Add cross-links between guides

---

## Expected Impact

After fixes:
- Zero truly orphaned pages
- Better user navigation flow
- Consolidated authority (no cannibalization)
- Improved conversion path to planning guide
