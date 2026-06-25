# Service Area Page Audit - Foundation Issues

**Date:** 2026-02-09

---

## The Problem

Your service area pages have **3 different templates** with inconsistent sections. This is exactly why managing this feels chaotic.

---

## Template Types Found

### Template A: Full Hub (Wilmette, Winnetka, Northbrook)
**Files:** `wilmette-il/page.tsx`, `winnetka-il/page.tsx`, `northbrook-il/page.tsx`

**Sections:**
1. Hero (dark bg, local badge, CTA)
2. Local Benefits (trust badges)
3. Neighborhoods (4 detailed sections)
4. Weather/Local Considerations (3-4 feature cards)
5. FAQ Section (3-4 questions)
6. Cluster Links (zoning guide + product spoke)
7. CTA Section (mint bg)

**Has:**
- ✅ `localBenefits` array
- ✅ `neighborhoods` array (3-4 items)
- ✅ `faqs` array (3-4 questions)
- ✅ `weatherConsiderations` or similar

---

### Template B: Basic Hub (Barrington, Lake County, etc.)
**Files:** `barrington-il/page.tsx`, `lake-county-il/page.tsx`, `mchenry-county-il/page.tsx`, etc.

**Sections:**
1. Hero (simpler)
2. Communities List (short)
3. Local Considerations (4 feature cards)
4. CTA

**Missing:**
- ❌ `localBenefits` trust badges
- ❌ `neighborhoods` detailed sections
- ❌ FAQ section
- ❌ Cluster links

**Has:**
- `communities` array (list of names)
- `localConsiderations` array (4 features)

---

### Template C: Hybrid (North Shore Chicago)
**Files:** `north-shore-chicago/page.tsx`

**Sections:**
1. Hero
2. Communities served
3. Local considerations
4. Why us section
5. CTA

**Inconsistent with both A and B**

---

## Page-by-Page Breakdown

| Page | Template | Benefits | Neighborhoods | FAQ | Local Features | Cluster Links |
|------|----------|----------|---------------|-----|----------------|---------------|
| wilmette-il | A (Full) | ✅ | ✅ 4 items | ✅ 4 | ✅ | ✅ |
| winnetka-il | A (Full) | ✅ | ✅ 4 items | ✅ 3 | ✅ | ✅ |
| northbrook-il | A (Full) | ✅ | ✅ 3 items | ✅ 3 | ❌ | ❌ |
| barrington-il | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| lake-county-il | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| mchenry-county-il | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| naperville-il | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| oak-brook-il | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| hinsdale-il | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| lake-geneva-wi | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| sanibel-outdoor-living | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| southeast-wisconsin | B (Basic) | ❌ | ❌ | ❌ | ✅ 4 | ❌ |
| north-shore-chicago | C (Hybrid) | ❌ | ❌ | ❌ | ✅ | ❌ |

---

## The Hub & Spoke Problem

You mentioned the hub & spoke model (hub page + zoning guide + product page). Here's what's actually implemented:

### Full Clusters (Hub + Spokes)
| Hub | Zoning Guide | Product Spoke | Status |
|-----|--------------|---------------|--------|
| wilmette-il | ✅ | ✅ louvered-pergolas | Complete |
| winnetka-il | ✅ | ✅ louvered-pergolas | Complete |
| northbrook-il | ✅ | ✅ motorized-pergolas | Complete |
| naperville-il | ✅ | ✅ motorized-pergolas | Complete |
| barrington-il | ✅ | ✅ motorized-pergolas | Complete |
| sanibel-outdoor-living | ✅ | ✅ louvered-pergolas | Complete |

### Hubs Without Spokes
| Hub | Missing |
|-----|---------|
| lake-county-il | zoning-guide, product spoke |
| mchenry-county-il | zoning-guide, product spoke |
| oak-brook-il | zoning-guide, product spoke |
| hinsdale-il | zoning-guide, product spoke |
| lake-geneva-wi | zoning-guide, product spoke |
| southeast-wisconsin | zoning-guide, product spoke |
| north-shore-chicago | zoning-guide, product spoke |

---

## Design Inconsistencies

Even within Template A (the "good" ones), there are design differences:

| Element | Wilmette (Updated) | Winnetka | Northbrook |
|---------|-------------------|----------|------------|
| Card style | Card component | Custom divs | Custom divs |
| Border radius | Sharp (none) | Rounded-2xl | Rounded-2xl |
| Icon wrapper | IconWrapper | Custom divs | Custom divs |
| Section spacing | section-md | Hardcoded py-20 | Hardcoded py-20 |
| Colors | Semantic tokens | Arbitrary grays | Arbitrary grays |

---

## Recommendation: SIMPLIFY THE FOUNDATION

You said it perfectly: the hub & spoke model is **too complicated for where you are now**.

### Simplified Approach: One Template Per Page Type

**Option 1: Single Hub Template (RECOMMENDED)**
Every service area gets the same 5 sections:
1. Hero
2. Local Benefits (3-4 trust badges)
3. Neighborhoods/Areas (3-4 specific areas)
4. FAQ (3 questions minimum)
5. CTA

**Option 2: Minimal Viable Page**
Every service area gets:
1. Hero
2. 3 Key Benefits
3. CTA

**Option 3: Keep Hub & Spoke but Standardize**
- Pick ONE template (like Wilmette)
- Update all hubs to match
- Create spokes only for top 3-5 priority areas

---

## My Recommendation

**Go with Option 1 (Single Hub Template) for now.**

### Why:
1. **One code pattern** = easier for AI to maintain
2. **Consistent user experience** = better SEO
3. **You know what to expect** = less anxiety
4. **Can add spokes later** = when you have bandwidth

### Template Structure:
```
Hub Page Template
├── Hero (dark bg, location badge, CTA)
├── Local Benefits (4 trust badges)
├── Neighborhoods (4 areas with descriptions)
├── FAQ (3 questions)
└── CTA (mint bg)
```

### Migration Plan:
1. **Lock the Wilmette template** (it's already updated to Editorial/Sharp)
2. **Update Winnetka and Northbrook** to match exactly
3. **Update all other hubs** to the same structure
4. **Delete or simplify** the spokes for now (zoning guides, product pages)

---

## Immediate Action Needed

If you want a solid foundation, you need to pick ONE approach and stick to it.

**Decision needed:**
- [ ] **Minimal:** Hero + 3 benefits + CTA (simplest to maintain)
- [ ] **Standard:** Hero + benefits + neighborhoods + FAQ + CTA (current best practice)
- [ ] **Hub & Spoke:** Keep complexity but standardize all hubs + create missing spokes

**Which option feels right for your capacity right now?**
