# Service Area Architecture Decision Record

> **Why we chose city-level hub pages over regional/county hubs**

---

## Decision Summary

**Decision:** Remove regional/county hub pages, keep city-level hub + spoke structure  
**Date:** 2026-02-09  
**Status:** Implemented  
**Rationale:** SEO best practices for local search + semantic correctness

---

## What Was Removed

### Regional/County Hub Pages (DELETED)

The following pages were removed because they incorrectly treated cities as "neighborhoods":

| Deleted Page | URL | Reason |
|--------------|-----|--------|
| Lake County Hub | `/service-areas/lake-county-il` | Wrong hierarchy - cities are not neighborhoods of counties |
| McHenry County Hub | `/service-areas/mchenry-county-il` | Wrong hierarchy |
| North Shore Hub | `/service-areas/north-shore-chicago` | Too broad, diluted local relevance |
| Southeast Wisconsin Hub | `/service-areas/southeast-wisconsin` | Too broad, diluted local relevance |

**Why These Were Wrong:**
- Counties contain cities, not the other way around
- Listing cities as "neighborhoods" of counties is semantically incorrect
- Regional pages competed with city pages instead of supporting them
- Google's local search prefers specific location pages

---

## What Remains (Current Structure)

### City-Level Hub Pages (9 pages)

These are the primary local SEO landing pages:

```
/service-areas/
├── barrington-il
├── hinsdale-il
├── lake-geneva-wi
├── naperville-il
├── northbrook-il
├── oak-brook-il
├── sanibel-outdoor-living
├── wilmette-il
└── winnetka-il
```

**Why These Work:**
- Specific geographic targeting
- High search volume for "[service] [city]" queries
- Clear user intent
- Proper semantic hierarchy

### Spoke Pages (12 pages)

Product-specific and zoning guide pages that support the hubs:

**Product-Specific (6 pages):**
```
/service-areas/[city]/louvered-pergolas
/service-areas/[city]/motorized-pergolas
```

**Zoning Content (Consolidated):**
```
# Zoning content is now a SECTION within /service-areas/[city]/
# NOT a separate spoke page
```

**Why We Consolidated:**
- Simpler maintenance (1 page vs 2 per city)
- Stronger consolidated content (thin content risk)
- Better user experience (all info in one place)
- Appropriate for non-competitive markets

**When to Use Separate Zoning Pages:**
- Highly competitive markets
- Zoning content exceeds 800+ words
- High search volume for "[city] zoning guide"

---

## URL Structure Decision

### Approved Structure (What We Use)

```
/service-areas/                    # Index page
/service-areas/[city]/             # City hub page (includes zoning section)
/service-areas/[city]/[product]    # Product spoke
```

**Note:** Zoning content is now a **SECTION** within the city hub page, not a separate spoke page.

### Rejected Structure (What We Removed)

```
# ❌ REMOVED - Regional hubs
/service-areas/lake-county-il/
/service-areas/lake-county-il/[city-as-neighborhood]  # Wrong!

# ❌ REMOVED - City listed under county
/service-areas/north-shore-chicago/
/service-areas/north-shore-chicago/wilmette  # Wrong hierarchy!
```

---

## SEO Rationale

### Why City Hubs > Regional Hubs

| Factor | City Pages | Regional Pages |
|--------|-----------|----------------|
| Search Volume | High for "pergolas wilmette" | Low for "pergolas north shore" |
| User Intent | Specific, ready to convert | Vague, research phase |
| Competition | Moderate | Lower but also lower value |
| Local Pack | Eligible for "near me" | Less likely to rank |
| Content Depth | Can be specific and detailed | Forced to be generic |

### 2026 Local SEO Best Practices

1. **Specific Location Pages** rank better than broad regional pages
2. **"Near Me" searches** require specific geographic targeting
3. **Entity-based SEO** requires clear location entities (cities, not regions)
4. **Voice search** uses specific location queries ("find pergolas in Naperville")

---

## Internal Linking Structure

### Hub → Spoke (Required)

Each city hub page MUST link to its spoke pages:

```typescript
// In /service-areas/wilmette-il/page.tsx
<Link href="/service-areas/wilmette-il/louvered-pergolas">
  Louvered Pergolas in Wilmette
</Link>

<Link href="#zoning">
  Zoning & Permits
</Link>
```

### Spoke → Hub (Required)

Each spoke page MUST link back to its hub:

```typescript
// No separate zoning page needed - use anchor link to section
<Link href="#zoning">
  Zoning & Permits Information
</Link>
```

### Cross-City Linking (Optional)

Link to nearby cities for geographic relevance:

```typescript
// In /service-areas/wilmette-il/page.tsx
<p>Also serving:
  <Link href="/service-areas/winnetka-il">Winnetka</Link>,
  <Link href="/service-areas/northbrook-il">Northbrook</Link>
</p>
```

---

## Content Requirements by Page Type

### City Hub Page

**URL:** `/service-areas/[city]`  
**Word Count:** 800+ words  
**Required Sections:**
- Hero with local context
- Introduction (100-150 words)
- Services overview
- 4 neighborhood sections with specific references
- **Zoning & Permits section (NEW)**
- Local expertise/why choose us
- FAQ section (3+ questions)
- CTA with contact form

**Schema:** LocalBusiness + Service

### Product Spoke Page

**URL:** `/service-areas/[city]/[product]`  
**Word Count:** 600+ words  
**Required Sections:**
- Product-specific hero
- Local product applications
- City-specific considerations
- Local zoning/permits mention
- CTA

**Schema:** Product + Service + FAQ

### Zoning Section (Within City Hub)

**Location:** Section within `/service-areas/[city]/page.tsx`  
**Word Count:** 300-500 words  
**Required Content:**
- Village/city permit requirements
- Setback rules
- Coverage limits (impermeable surface)
- HOA considerations (if applicable)
- Historical district rules (if applicable)
- Process/timeline

**Note:** For non-competitive markets, zoning content should be a **section** within the city hub page. Only create separate zoning pages for highly competitive markets with extensive content (800+ words).

---

## When to Add New Cities

### Criteria for New City Page

A new city page should be added when:

1. **Serviceable Area:** Within 60 miles of Spring Grove, IL (or within service territory)
2. **Search Demand:** Evidence of search volume for "[service] [city]"
3. **Content Depth:** Can write 800+ words of unique local content
4. **Local Context:** Familiar with neighborhoods, zoning, local characteristics

### Process for Adding New City

1. Create `/service-areas/[city-state]/page.tsx`
2. Add 4 neighborhood sections with specific references
3. Add FAQ section with 3+ questions
4. Add zoning section to city hub page (or create separate spoke if highly competitive market)
5. Add product spoke if applicable
6. Update `/service-areas/page.tsx` index
7. Update sitemap
8. Add to smoke tests

---

## Redirects from Removed Pages

### Legacy URLs (301 Redirect to City Hub)

```javascript
// next.config.ts redirects
{
  source: '/service-areas/lake-county-il',
  destination: '/service-areas',
  permanent: true,
},
{
  source: '/service-areas/mchenry-county-il',
  destination: '/service-areas',
  permanent: true,
},
{
  source: '/service-areas/north-shore-chicago',
  destination: '/service-areas',
  permanent: true,
},
{
  source: '/service-areas/southeast-wisconsin',
  destination: '/service-areas',
  permanent: true,
},
```

---

## Anti-Patterns (DO NOT DO)

### ❌ Wrong: City as Neighborhood

```
/service-areas/lake-county-il/wilmette  # WRONG!
```
Wilmette is a city, not a neighborhood of Lake County.

### ❌ Wrong: County as Parent

```
/service-areas/mchenry-county-il/barrington  # WRONG!
```
Barrington is an independent city reference.

### ❌ Wrong: Too Many Levels

```
/service-areas/illinois/lake-county/wilmette  # WRONG!
```
Too deep, unnecessary hierarchy.

### ✅ Correct: Flat City Structure

```
/service-areas/wilmette-il  # CORRECT
```

---

## Summary

| Structure | Status | Example |
|-----------|--------|---------|
| Regional/County Hubs | ❌ REMOVED | `/lake-county-il` |
| City Hubs | ✅ ACTIVE | `/wilmette-il` (includes zoning section) |
| Product Spokes | ✅ ACTIVE | `/wilmette-il/louvered-pergolas` |
| Zoning Spokes | ❌ CONSOLIDATED | Now a section within city hub |

**Total Active Service Area Pages:** 15
- 1 index page
- 9 city hub pages (all include zoning sections)
- 6 product spoke pages

---

**Document Version:** 1.0  
**Created:** 2026-02-09  
**Last Updated:** 2026-02-09  
**Decision Owner:** SEO Strategy Team
