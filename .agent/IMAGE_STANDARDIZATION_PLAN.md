# EDG Image Standardization Project Plan

> **Goal:** Simplify from 100+ scattered images to ~15 curated brand images + project-specific galleries  
> **Status:** Draft for Review  
> **Est. Timeline:** 1-2 days of focused work

---

## Executive Summary

**Current State:**
- 100+ unique images across scattered folders
- 206 _BY_LOCATION folders (52 filled, 154 empty)
- Inconsistent visual style across pages
- High cognitive load for image management

**Proposed State:**
- **15 brand images** for all non-project pages
- **Project galleries** for portfolio (unique images)
- **Single source of truth** for each image type
- **Drop-in replacement** workflow for updates

---

## The Standardized Image Set

### Tier 1: Hero Images (5 images)

| Slot | Purpose | Current Best Option | Notes |
|------|---------|---------------------|-------|
| **HERO - Pergola** | Primary pergola hero | `pergolas/pergola-hero.jpg` | Wide shot, daytime, pool context |
| **HERO - Screens** | Primary shades hero | `shades/shades-hero.jpg` | Windy deployment shot |
| **HERO - Glass** | Primary enclosure hero | `enclosures/glass-hero.jpg` | Frameless glass view |
| **HERO - Lifestyle** | Evening/entertaining | `enclosures/commercial-pergola-glass-enclosure-hanging-lights-01.jpg` | Cozy, lit pergola |
| **HERO - Showroom** | Design center | (need to select) | Spring Grove showroom interior |

### Tier 2: Product Detail Images (6 images)

| Slot | Purpose | Usage |
|------|---------|-------|
| **DETAIL - Louver Close-up** | Craftsmanship shot | Product pages, quality emphasis |
| **DETAIL - Screen Deployed** | Before/after feel | Shades pages, functionality |
| **DETAIL - Glass Stack** | Doors open/disappear | Enclosure pages |
| **DETAIL - LED Lighting** | Night ambiance | Evening/lifestyle contexts |
| **DETAIL - Heater Element** | Heating feature | Heating pages, winter use |
| **DETAIL - Remote/App** | Smart control | Tech features, modern convenience |

### Tier 3: Context/Supporting Images (4 images)

| Slot | Purpose | Usage |
|------|---------|-------|
| **CONTEXT - Poolside** | Residential pool context | Pergola pages, outdoor living |
| **CONTEXT - Lake View** | Premium location | High-end areas, Lake Forest, etc. |
| **CONTEXT - Commercial Patio** | Restaurant/hotel | Commercial landing pages |
| **CONTEXT - Snow/Winter** | Weather resistance | Durability, year-round use |

**Total: 15 standardized images**

---

## Page-to-Image Mapping

### Uses Standardized Images

| Page Type | Hero | Gallery 1 | Gallery 2 | Gallery 3 | Gallery 4 |
|-----------|------|-----------|-----------|-----------|-----------|
| **Homepage** | HERO-Pergola | HERO-Screens | HERO-Glass | (cta section) | — |
| **Systems/Pergolas** | HERO-Pergola | DETAIL-Louver | CONTEXT-Poolside | DETAIL-LED | DETAIL-Remote |
| **Systems/Shades** | HERO-Screens | DETAIL-Screen | CONTEXT-Lake | HERO-Lifestyle | DETAIL-LED |
| **Systems/Enclosures** | HERO-Glass | DETAIL-Glass | HERO-Lifestyle | CONTEXT-Poolside | DETAIL-LED |
| **Systems/Appliances** | HERO-Lifestyle | CONTEXT-Commercial | DETAIL-LED | — | — |
| **Systems/Heating** | HERO-Lifestyle | DETAIL-Heater | CONTEXT-Snow | — | — |
| **Systems/Furniture** | HERO-Lifestyle | CONTEXT-Poolside | — | — | — |
| **Systems/Umbrellas** | CONTEXT-Poolside | HERO-Pergola | — | — | — |
| **Service Areas (all)** | HERO-Pergola | HERO-Screens | HERO-Glass | DETAIL-Louver | — |
| **Commercial/Landing** | HERO-Lifestyle | CONTEXT-Commercial | HERO-Pergola | — | — |
| **Commercial/Hotels** | HERO-Lifestyle | CONTEXT-Commercial | DETAIL-Glass | — | — |
| **Commercial/Restaurants** | HERO-Lifestyle | CONTEXT-Commercial | DETAIL-LED | — | — |
| **About** | HERO-Showroom | HERO-Lifestyle | — | — | — |
| **Showroom** | HERO-Showroom | HERO-Pergola | HERO-Glass | — | — |
| **Process/Design** | HERO-Pergola | HERO-Lifestyle | DETAIL-Louver | — | — |
| **Price** | HERO-Pergola | HERO-Screens | HERO-Glass | — | — |

### Uses Unique Images (Projects Only)

| Page Type | Images |
|-----------|--------|
| **Project Detail Pages** | 1 hero + 3-5 gallery (unique per project) |
| **Project List Page** | Card images (unique per project) |

**Result:** 15 images serve 30+ pages. Only 7 project pages need unique images.

---

## New Folder Structure

```
public/images/
├── brand/                      # THE 15 STANDARDIZED IMAGES
│   ├── hero-pergola.jpg
│   ├── hero-screens.jpg
│   ├── hero-glass.jpg
│   ├── hero-lifestyle.jpg
│   ├── hero-showroom.jpg
│   ├── detail-louver.jpg
│   ├── detail-screen.jpg
│   ├── detail-glass.jpg
│   ├── detail-led.jpg
│   ├── detail-heater.jpg
│   ├── detail-remote.jpg
│   ├── context-pool.jpg
│   ├── context-lake.jpg
│   ├── context-commercial.jpg
│   └── context-snow.jpg
│
├── projects/                   # UNIQUE PROJECT IMAGES ONLY
│   ├── lake-forest-pergola/
│   │   ├── hero.jpg
│   │   ├── gallery-01.jpg
│   │   ├── gallery-02.jpg
│   │   └── gallery-03.jpg
│   ├── barrington-outdoor-room/
│   └── ... (one folder per project)
│
└── _archive/                   # OLD IMAGES (to be deleted after migration)
    ├── pergolas/               # (current 27 images)
    ├── shades/                 # (current 9 images)
    ├── enclosures/             # (current 26 images)
    ├── new-assets/             # (current unsorted)
    └── _BY_LOCATION/           # (current 206 folders)
```

---

## Implementation Phases

### Phase 1: Setup & Selection (2-3 hours)

**1.1 Select the 15 Images**
- [ ] Review current 100 images
- [ ] Pick best 15 based on quality, consistency, coverage
- [ ] Document selections in spreadsheet
- [ ] Get approval

**1.2 Create New Structure**
- [ ] Create `public/images/brand/` folder
- [ ] Create `public/images/projects/` structure
- [ ] Copy selected 15 images to brand folder with new names

**1.3 Archive Old Structure**
- [ ] Move all old folders to `public/images/_archive/`
- [ ] Keep _BY_LOCATION for now (migration reference)

### Phase 2: Code Refactoring (4-6 hours)

**2.1 Create Brand Image Registry**
```typescript
// src/lib/brand-images.ts
export const brandImages = {
  hero: {
    pergola: '/images/brand/hero-pergola.jpg',
    screens: '/images/brand/hero-screens.jpg',
    glass: '/images/brand/hero-glass.jpg',
    lifestyle: '/images/brand/hero-lifestyle.jpg',
    showroom: '/images/brand/hero-showroom.jpg',
  },
  detail: {
    louver: '/images/brand/detail-louver.jpg',
    screen: '/images/brand/detail-screen.jpg',
    glass: '/images/brand/detail-glass.jpg',
    led: '/images/brand/detail-led.jpg',
    heater: '/images/brand/detail-heater.jpg',
    remote: '/images/brand/detail-remote.jpg',
  },
  context: {
    pool: '/images/brand/context-pool.jpg',
    lake: '/images/brand/context-lake.jpg',
    commercial: '/images/brand/context-commercial.jpg',
    snow: '/images/brand/context-snow.jpg',
  },
} as const;
```

**2.2 Update Data Files**
- [ ] `src/data/homepage.ts` - Use brand images
- [ ] `src/lib/projects.ts` - Keep project images, update fallbacks
- [ ] Delete `src/data/image-manifest.json` (no longer needed)
- [ ] Delete `src/lib/images.ts` (simplify or repurpose)

**2.3 Update System Pages**
- [ ] `src/app/systems/pergolas/page.tsx`
- [ ] `src/app/systems/shades/page.tsx`
- [ ] `src/app/systems/enclosures/page.tsx`
- [ ] `src/app/systems/appliances/page.tsx`
- [ ] `src/app/systems/heating/page.tsx`
- [ ] `src/app/systems/furniture/page.tsx`
- [ ] `src/app/systems/umbrellas/page.tsx`

**2.4 Update Commercial Pages**
- [ ] `src/app/commercial/page.tsx`
- [ ] `src/app/commercial/hotel-pergolas/page.tsx`
- [ ] `src/app/commercial/restaurant-patio-enclosures/page.tsx`
- [ ] `src/app/commercial/country-club-outdoor-spaces/page.tsx`
- [ ] `src/app/commercial/hotel-roof-deck-systems/page.tsx`

**2.5 Update Service Area Pages**
- [ ] `src/app/service-areas/[area]/page.tsx` (template)
- [ ] All existing service area pages (10 areas)

**2.6 Update Other Pages**
- [ ] `src/app/page.tsx` (homepage)
- [ ] `src/app/about/page.tsx`
- [ ] `src/app/showroom/page.tsx`
- [ ] `src/app/design/page.tsx`
- [ ] `src/app/price/page.tsx`

### Phase 3: Project Images Migration (2-3 hours)

**3.1 Consolidate Project Images**
- [ ] Move project images from scattered locations to `public/images/projects/[slug]/`
- [ ] Rename consistently: `hero.jpg`, `gallery-01.jpg`, etc.
- [ ] Update `src/lib/projects.ts` references

**3.2 Update Project Page**
- [ ] Ensure `src/app/projects/[slug]/page.tsx` uses new paths

### Phase 4: Cleanup & Documentation (1-2 hours)

**4.1 Remove Old Scripts**
- [ ] Delete `scripts/sync-images.mjs`
- [ ] Delete `scripts/reorganize-images.mjs`
- [ ] Delete `scripts/watch-images.mjs`
- [ ] Delete `scripts/generate-gallery-data.mjs`

**4.2 Update Package.json**
- [ ] Remove unused scripts

**4.3 Update Documentation**
- [ ] Rewrite `.agent/IMAGE_WORKFLOW.md` for new system
- [ ] Delete `.agent/IMAGE_STANDARDIZATION_PLAN.md` (this doc)
- [ ] Update `_BY_LOCATION/README.md` to say "deprecated"

**4.4 Delete Archive**
- [ ] `rm -rf public/images/_archive/`
- [ ] `rm -rf public/images/_BY_LOCATION/`

### Phase 5: Testing & Deploy (1-2 hours)

- [ ] `npm run build` - Check for errors
- [ ] Visual check of key pages
- [ ] Check all image paths resolve
- [ ] Commit and deploy

---

## Effort Summary

| Phase | Hours | Risk |
|-------|-------|------|
| Phase 1: Setup | 2-3 | Low |
| Phase 2: Refactoring | 4-6 | Medium (many files) |
| Phase 3: Projects | 2-3 | Low |
| Phase 4: Cleanup | 1-2 | Low |
| Phase 5: Testing | 1-2 | Low |
| **TOTAL** | **10-16 hours** | |

**Can be done incrementally:** Each phase can be committed and deployed separately.

---

## Benefits After Completion

| Before | After |
|--------|-------|
| 100+ images to manage | 15 brand + project galleries |
| 206 folders to navigate | Simple 2-folder structure |
| Complex sync scripts | No scripts needed |
| Inconsistent visuals | Consistent brand look |
| High cognitive load | "Just drop in brand folder" |
| Hard to update | Swap 1 file, whole site updates |

---

## Open Questions

1. **Which 15 images?** Need to review and select from current 100.
2. **Do we keep any _BY_LOCATION concept?** Or pure brand/projects split?
3. **Project gallery count:** Standard 3 images per project? Or variable?
4. **Video:** Keep homepage video? Move to brand folder?

---

## Next Steps

**Option A: Full Implementation**
1. Approve this plan
2. Select the 15 images together
3. I execute all phases
4. Review and deploy

**Option B: Iterative**
1. Start with Phase 1 (select + setup)
2. Review the 15 images
3. Continue with Phase 2 (one page type at a time)
4. Deploy incrementally

**Option C: Minimal**
1. Just consolidate to `brand/` and `projects/` folders
2. Keep existing code references (just update paths)
3. Cleanup later

Which approach feels right?
