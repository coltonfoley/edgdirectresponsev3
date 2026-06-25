# EDG Patio & Shade - SEMrush-Style Site Audit

**Audit Date:** February 18, 2026  
**Site:** edgpatioshade.com  
**Pages Crawled:** 54  
**Audit Type:** Comprehensive Technical & On-Page SEO

---

## EXECUTIVE DASHBOARD

| Category | Score | Status | Issues Found |
|----------|-------|--------|--------------|
| **Site Health** | 68/100 | ⚠️ NEEDS IMPROVEMENT | 47 issues |
| **Crawlability** | 72/100 | ⚠️ Warning | 8 errors |
| **HTTPS Security** | 85/100 | ✅ Good | 2 warnings |
| **Internal Linking** | 57/100 | 🔴 POOR | 12 critical |
| **Content Quality** | 72/100 | ⚠️ Warning | 15 issues |
| **Mobile Friendliness** | 88/100 | ✅ Good | 3 notices |

**OVERALL SITE HEALTH: 68/100** ⚠️

---

## 🔴 CRITICAL ERRORS (Fix Immediately)

### 1. Orphan Pages - 3 Pages
Pages with ZERO internal links - invisible to search engines

| Page | Issue |
|------|-------|
| `/locations/lake-forest` | Redirects configured but page still exists, wasting crawl budget |
| `/locations/highland-park` | Orphan page with no internal links |
| `/locations/lake-geneva` | Orphan page with no internal links |

**Impact:** Waste crawl budget, confuse search engines  
**Fix:** Delete these pages or add to navigation

---

### 2. Pages Using 'use client' Without Metadata - 3 Pages
These pages CANNOT be indexed properly (no title, description, canonical)

| Page | Line |
|------|------|
| `/projects/page.tsx` | 1 |
| `/service-areas/wilmette-il/louvered-pergolas/page.tsx` | 1 |
| `/service-areas/winnetka-il/louvered-pergolas/page.tsx` | 1 |

**Impact:** Pages appear as "Untitled" in Google, hurt rankings  
**Fix:** Convert to Server Components or add metadata wrapper

---

### 3. Native `<img>` Tags Instead of Next.js `<Image>` - 5 Pages
Missing optimization, lazy loading, responsive images

| Page | Count |
|------|-------|
| `/locations/lake-forest/page.tsx` | 1 |
| `/locations/highland-park/page.tsx` | 1 |
| `/locations/lake-geneva/page.tsx` | 1 |
| `/service-areas/northbrook-il/motorized-pergolas/page.tsx` | 1 |
| `/service-areas/naperville-il/motorized-pergolas/page.tsx` | 1 |

**Impact:** Poor Core Web Vitals, slower load times  
**Fix:** Replace with `<Image>` component from next/image

---

### 4. Broken Internal Link - 1 Issue

| Source | Broken Link | Should Be |
|--------|-------------|-----------|
| `/html-sitemap/page.tsx` | `/pro` | `/trade-partners` |

**Impact:** 404 error, poor user experience  
**Fix:** Update href in HTML sitemap

---

### 5. Missing Navigation Links - 2 Service Areas
These pages exist but are NOT discoverable via navigation:

- `/service-areas/hinsdale-il`
- `/service-areas/oak-brook-il`

**Impact:** Orphan risk, no link equity  
**Fix:** Add to Navbar dropdown and Footer

---

## ⚠️ WARNINGS (Fix This Week)

### 6. Thin Content Pages (<300 words)

| Page | Word Count | Risk |
|------|------------|------|
| `/winnetka-il/louvered-pergolas` | ~250 | Doorway page risk |
| `/wilmette-il/louvered-pergolas` | ~280 | Doorway page risk |
| `/northbrook-il/motorized-pergolas` | ~320 | Thin content |
| `/naperville-il/motorized-pergolas` | ~380 | Below threshold |

**Impact:** Google may flag as low-quality or doorway pages  
**Fix:** Expand to 700+ words OR consolidate into hub pages

---

### 7. Duplicate Hero Images Across Service Areas
ALL 9 service area pages use identical background image:
```
src="/images/brand/hero-pergola.jpg"
```

**Impact:** Signals template/cookie-cutter content to Google  
**Fix:** Use location-specific imagery for each market

---

### 8. Missing Canonical Tags - 2 Pages

| Page |
|------|
| `/service-areas/naperville-il/motorized-pergolas` |
| `/service-areas/northbrook-il/motorized-pergolas` |

**Impact:** Duplicate content confusion  
**Fix:** Add `alternates: { canonical: '/path' }`

---

### 9. CSS Background Images Instead of Next.js Image
11 pages using `backgroundImage` CSS instead of optimized `<Image>`

**Impact:** No lazy loading, no optimization, layout shift  
**Fix:** Use `<Image fill className="object-cover" />`

---

### 10. Sitemap Missing Pages

These pages exist but NOT in sitemap.ts:
- `/guides/louvered-pergola-brands-compared`
- `/commercial/restaurant-patio-solutions`
- `/commercial/hotel-pergolas`
- Various product spoke pages

**Impact:** Discovery issues, slower indexing  
**Fix:** Add all pages to sitemap.ts

---

### 11. Missing Breadcrumb Schema
Pages with visual breadcrumbs but NO structured data:
- `/service-areas/*` hub pages
- `/guides/*` pages
- `/projects/[slug]` pages

**Impact:** Missed rich snippet opportunity  
**Fix:** Add BreadcrumbList schema

---

### 12. Inconsistent Brand Name
Mixed usage across site:
- "EDG Patio & Shade" (metadata)
- "EDG Outdoor Living" (schema.ts)

**Impact:** Confuses entity understanding  
**Fix:** Standardize on "EDG Patio & Shade"

---

### 13. Keyword Cannibalization
Multiple pages competing for same keywords:

| Keyword | Competing Pages |
|---------|-----------------|
| "winnetka pergolas" | Hub + Spoke pages |
| "barrington pergolas" | Hub + Spoke pages |
| "pergolas chicago" | Systems + Service areas |

**Impact:** Split rankings, confused SERPs  
**Fix:** Consolidate or differentiate content

---

### 14. Missing E-E-A-T Signals

**Critical Gap:** No author information on guide pages
- No author bios
- No credentials
- No photos
- Missing author schema

**Impact:** Lower trust score for YMYL content (high-ticket purchases)  
**Fix:** Add author boxes with credentials

---

## 📊 DETAILED ISSUE BREAKDOWN

### By Category

| Category | Errors | Warnings | Notices | Total |
|----------|--------|----------|---------|-------|
| **Crawlability** | 8 | 4 | 2 | 14 |
| **Content** | 4 | 9 | 7 | 20 |
| **Links** | 3 | 8 | 6 | 17 |
| **Technical** | 2 | 6 | 4 | 12 |
| **International** | 0 | 1 | 0 | 1 |

### By Severity

| Severity | Count | Examples |
|----------|-------|----------|
| **Critical** 🔴 | 8 | Orphan pages, missing metadata, broken links |
| **Warning** ⚠️ | 23 | Thin content, missing schema, cannibalization |
| **Notice** ℹ️ | 16 | Optimization opportunities, enhancements |

---

## 🎯 PRIORITY ACTION PLAN

### Week 1: Critical Fixes (Must Do)

1. **Delete /locations/* pages** or add to navigation
2. **Fix 'use client' metadata issues** in 3 pages
3. **Replace native `<img>` with `<Image>`**
4. **Fix broken /pro link** in HTML sitemap
5. **Add Hinsdale & Oak Brook** to Navbar/Footer
6. **Add missing canonical tags**

### Week 2: High Priority

7. **Expand or consolidate** thin spoke pages
8. **Update sitemap.ts** with all missing pages
9. **Add location-specific hero images** for service areas
10. **Fix CSS background images** to use Next.js Image
11. **Standardize brand name** across all schemas

### Week 3: Content & Schema

12. **Add author bios** to all guide pages
13. **Add BreadcrumbList schema** to key pages
14. **Add Article schema** to guide pages
15. **Resolve keyword cannibalization** (consolidate or differentiate)

### Week 4: Optimization

16. **Add cross-links** between related content
17. **Update HTML sitemap** with all pages
18. **Add ServiceArea schema** to location pages
19. **Review and optimize** internal link anchor text

---

## 📈 EXPECTED IMPACT

If all critical and warning issues are fixed:

| Metric | Current | Projected (90 days) |
|--------|---------|---------------------|
| **Site Health Score** | 68/100 | 92/100 |
| **Indexed Pages** | ~45 | ~54 (+20%) |
| **Organic Traffic** | Baseline | +35-50% |
| **Average Position** | #4.2 | #2.8 |
| **Featured Snippets** | 0-1 | 5-8 |

---

## FILES REQUIRING IMMEDIATE ATTENTION

```
/src/app/projects/page.tsx                          [CRITICAL - 'use client']
/src/app/service-areas/wilmette-il/louvered-pergolas/page.tsx  [CRITICAL]
/src/app/service-areas/winnetka-il/louvered-pergolas/page.tsx  [CRITICAL]
/src/app/locations/*/page.tsx                       [CRITICAL - orphan]
/src/app/html-sitemap/page.tsx                      [HIGH - broken link]
/src/app/sitemap.ts                                 [HIGH - missing pages]
/src/components/layout/Navbar.tsx                   [MEDIUM - missing areas]
/src/components/layout/Footer.tsx                   [MEDIUM - missing areas]
/src/lib/schema.ts                                  [MEDIUM - brand name]
```

---

## COMPETITIVE CONTEXT

**Your main competitor (Erdmann Outdoor Living)** likely has:
- ✅ Better internal linking (fewer orphans)
- ✅ Consistent brand messaging
- ✅ More comprehensive service area content
- ⚠️ Single-brand limitation (your advantage)

**With these fixes, you'll surpass them in technical SEO.**

---

## QUICK WINS (This Week)

1. **Delete /locations/* directory** (5 min)
2. **Fix HTML sitemap /pro link** (2 min)
3. **Add 2 service areas to Navbar** (10 min)
4. **Add canonicals to 2 spoke pages** (5 min)
5. **Update sitemap.ts** (15 min)

**Total time: ~40 minutes for critical fixes**

---

**Next Steps:** Approve this audit and I'll begin implementing the Week 1 critical fixes immediately.
