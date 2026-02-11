# EDG Website Simplification Project Plan

## Goal
Reduce website bloat while maintaining 100% functionality. Target: 60% code reduction, 64% node_modules reduction.

## Success Criteria
- [ ] All core pages load and function correctly
- [ ] Lead capture forms work
- [ ] Navigation works across all remaining pages
- [ ] Build completes without errors
- [ ] No 404s on internal links
- [ ] Mobile responsive still works

## Baseline (Recorded)
- Node modules: 548 MB
- Packages: 408
- Source files: 93
- Pages: 56
- Build: Successful

---

## Phase 0: Preparation (COMPLETE)
- [x] Record baseline metrics
- [x] Ensure clean git state
- [ ] Create backup branch

## Phase 1: Dependency Cleanup
**Goal:** Remove unused dependencies, save ~35MB

### Actions:
1. Remove unused packages:
   - `zod` (6MB, never used)
   - `@vercel/postgres` (3MB, using Supabase)
   - `pg` + `@types/pg` (2MB + types)
   - `framer-motion` (5.4MB, replace with CSS)
   - `plop` + `inquirer` + `rxjs` (15MB total)

2. Replace framer-motion with CSS animations

3. Update build scripts to remove gallery generation

### Testing:
- [ ] `npm install` completes
- [ ] `npm run build` succeeds
- [ ] Homepage loads with animations
- [ ] No console errors

---

## Phase 2: Script & Config Cleanup
**Goal:** Remove bloat scripts and .agent directory

### Actions:
1. Delete scripts:
   - `scripts/generate-gallery-data.mjs`
   - `scripts/register-service-area.mjs`
   - `scripts/validate-seo.mjs`
   - `plopfile.js`

2. Delete directories:
   - `.agent/` (AI meta-documentation)

3. Update package.json scripts section

### Testing:
- [ ] Build still works
- [ ] No script references fail

---

## Phase 3: Page Consolidation
**Goal:** Reduce 56 pages to ~18 (68% reduction)

### Pages to DELETE:

#### Service Area Sub-Pages (10 pages):
- `/service-areas/*/zoning-guide/` (6 pages)
- `/service-areas/*/motorized-pergolas/` (2 pages)
- `/service-areas/*/louvered-pergolas/` (2 pages)

#### City-Specific Service Areas (6 pages):
- `/service-areas/oak-brook-il/`
- `/service-areas/barrington-il/`
- `/service-areas/hinsdale-il/`
- `/service-areas/northbrook-il/`
- `/service-areas/wilmette-il/`
- `/service-areas/winnetka-il/`

#### Commercial Sub-Pages (5 pages):
- `/commercial/west-loop/`
- `/commercial/country-club-outdoor-spaces/`
- `/commercial/hotel-roof-deck-systems/`
- `/commercial/restaurant-patio-enclosures/`
- `/commercial/chicago-hospitality-outdoor-living/`

#### Guides (1 page):
- `/guides/pergola-vs-patio-cover/`

#### Admin (1 page):
- `/admin/seo-dashboard/`

### Pages to KEEP (18 total):
1. `/` (home)
2. `/contact`
3. `/design`
4. `/gallery`
5. `/price`
6. `/pro`
7. `/projects`
8. `/systems` (and 4 sub-pages: pergolas, shades, enclosures, appliances)
9. `/commercial` (main only)
10. `/guides/planning-guide`
11. `/guides/louvered-pergolas`
12. `/service-areas` (consolidated index + 5 major regions)

### Testing:
- [ ] No broken internal links
- [ ] Navigation works
- [ ] 404s handled gracefully

---

## Phase 4: Component Simplification
**Goal:** Remove thin wrapper components

### Actions:
1. Inline `Container` component usage
2. Inline `Section` component usage
3. Inline `Link` component usage
4. Replace `Button` with inline Tailwind where simple
5. Replace framer-motion animations with CSS

### Testing:
- [ ] Visual regression check
- [ ] All buttons still styled
- [ ] Layout unchanged

---

## Phase 5: Config Cleanup
**Goal:** Simplify configuration

### Actions:
1. Extract redirects from next.config.ts
2. Remove unused exports
3. Clean up data files

### Testing:
- [ ] Redirects still work
- [ ] Build succeeds

---

## Phase 6: Final Verification
**Goal:** Full site functionality check

### Testing Checklist:
- [ ] Build completes
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Lead capture form submits
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Images load
- [ ] Analytics present

---

## Rollback Plan
If any phase fails:
1. `git checkout main`
2. `rm -rf node_modules && npm install`
3. Investigate and fix

---

## Expected Results
| Metric | Before | After | Change |
|--------|--------|-------|--------|
| node_modules | 548 MB | ~200 MB | -64% |
| Pages | 56 | ~18 | -68% |
| Dependencies | 29 | ~20 | -31% |
| Source files | 93 | ~60 | -35% |
