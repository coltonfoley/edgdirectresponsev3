# Product Pages Rebuild Project Plan

> **Following .agent/workflow patterns and GLOBAL.md constraints**

---

## Project Overview

**Objective:** Rebuild all 4 product pages (pergolas, shades, enclosures, appliances) to meet:
- Design system compliance (Editorial/Sharp)
- Brand voice alignment (EDG Brand Source)
- 900+ word content requirements (SYSTEM.md)
- 2026 SEO best practices

**Timeline:** 4 weeks  
**Resources:** Parallel sub-agent execution

---

## Phase 1: Critical SEO Fixes (Week 1) - PRIORITY

### 1.1 Convert to Server Components
**Files:**
- `src/app/systems/pergolas/page.tsx`
- `src/app/systems/shades/page.tsx`
- `src/app/systems/enclosures/page.tsx`

**Tasks:**
1. Remove `'use client'` directive
2. Extract interactive components to separate Client Components
3. Add proper metadata exports
4. Add JSON-LD schema markup

**Pattern:**
```typescript
// page.tsx (Server Component)
export const metadata: Metadata = { ... };
export default function Page() {
  return (
    <main>
      <HeroSection /> {/* Static */}
      <ProductConfiguratorClient /> {/* Client Component */}
    </main>
  );
}
```

### 1.2 Add Metadata & Schema
**Each page needs:**
- Title (50-60 chars)
- Description (150-160 chars)
- Canonical URL
- OpenGraph tags
- Service schema (for installation)
- Product schema (for products)

### 1.3 Fix Appliances Page Border Radius
**File:** `src/app/systems/appliances/page.tsx`
- Replace all `rounded-*` with `rounded-none`
- Fix Image components (use Next.js Image)

---

## Phase 2: Design System Compliance (Week 1-2)

### 2.1 Color Token Migration
**Replace arbitrary grays with semantic tokens:**
```
text-gray-500     → text-text-secondary
text-gray-400     → text-text-muted
text-gray-600     → text-text-secondary
bg-zinc-100       → bg-surface-muted
bg-zinc-900       → bg-surface-dark
text-gray-400 (dark bg) → text-text-inverse-muted
```

### 2.2 Component Standardization
- Replace custom icon wrappers with `<IconWrapper>`
- Replace custom cards with `<Card variant="...">`
- Use `<Button>` variants consistently
- Use `section-sm/md/lg` for spacing

### 2.3 Typography Corrections
- Use `label-editorial` for eyebrow text
- Use `label-editorial-brand` for branded labels
- Use `hero-title`, `page-title`, `section-title` classes
- Replace arbitrary leading/sizing with standard classes

---

## Phase 3: Content Expansion (Week 2-3)

### 3.1 Expand to 900+ Words
**Each page needs new sections:**
1. **Product Overview** (200-250 words)
   - What is this product?
   - How does it work?
   - Who is it for?

2. **Key Features** (4-6 features, 50-75 words each)
   - Icon/visual
   - Title
   - Description

3. **Specifications Table**
   | Specification | Details |
   |--------------|---------|
   | Maximum Span | X feet |
   | Material | Aluminum |
   | Wind Rating | X mph |

4. **Applications/Use Cases**
   - Residential applications
   - Commercial applications

5. **Options & Upgrades**
   - Available add-ons
   - Customization options

6. **Process Overview**
   - Consultation → Design → Installation
   - Timeline expectations

7. **FAQ Section** (5+ questions)
   - Cost ranges
   - Timeline
   - Maintenance
   - Warranty
   - Customization

8. **Related Products**
   - Cross-sell complementary products

### 3.2 Gallery Expansion
- Add 6-10 images per page
- Use Next.js Image component
- Add descriptive alt text

---

## Phase 4: Brand Voice Alignment (Week 3)

### 4.1 Add Key Messaging
**Each page must include:**
- "System-agnostic" positioning
- "Design & supply partner" for B2B
- "Nationwide design & supply" mention
- Showroom mention (differentiator)
- Trade partner capabilities

### 4.2 Fix Appliances Positioning
- Position as "Complete Your Space" (complementary)
- Add cross-sell to primary products
- Remove forbidden words ("Transform")

### 4.3 Remove Buzzwords
- ❌ "Solutions", "leverage", "synergy"
- ❌ "Cutting-edge", "world-class", "premier"
- ❌ "Transform your space"

### 4.4 Add Technical Specificity
- Use concrete specifications
- Mention specific technologies (MagnaTrack, Slide & Turn)
- Include performance metrics

---

## Phase 5: 2026 SEO Optimization (Week 4)

### 5.1 Structured Data Implementation
**Add schemas:**
- Service schema (for installation services)
- Product schema (for products)
- FAQ schema (for voice search)
- HowTo schema (for installation guides)
- Breadcrumb schema

### 5.2 Entity Optimization
- Define clear entities ("Louvered Pergola", "Motorized Screens")
- Add entity-rich introductory content
- Create topical clusters with internal linking

### 5.3 E-E-A-T Signals
- Add authority markers (years in business)
- Mention certifications
- Include project counts/experience
- Add trust signals (warranties, process)

### 5.4 Internal Linking
- Link to related guides
- Link to service areas
- Link to projects
- Breadcrumb navigation

---

## Phase 6: Validation & Deployment

### 6.1 Pre-Deployment Checks
```bash
# Check for 'use client' violations
grep -l "'use client'" src/app/**/page.tsx

# Check for missing canonical
grep -rL "alternates:" src/app/**/page.tsx

# Build validation
npm run build

# E2E testing
npm run test:e2e

# Format check
npm run format
```

### 6.2 Content Validation
- [ ] 900+ words per page
- [ ] 4-6 key features with descriptions
- [ ] Specifications table
- [ ] 6+ gallery images
- [ ] FAQ with 5+ questions
- [ ] Related products section

### 6.3 Post-Deployment
- Submit updated pages to Google Search Console
- Monitor Core Web Vitals
- Check for crawl errors

---

## Task Assignments

### Sub-Agent Tasks (Parallel Execution)

**Task 1: Pergolas Page Rebuild**
- Convert to Server Component
- Add metadata & schema
- Fix design system compliance
- Expand content to 900+ words
- Add brand voice messaging

**Task 2: Shades Page Rebuild**
- Convert to Server Component
- Add metadata & schema
- Fix design system compliance
- Expand content to 900+ words
- Add brand voice messaging

**Task 3: Enclosures Page Rebuild**
- Convert to Server Component
- Add metadata & schema
- Fix design system compliance
- Expand content to 900+ words
- Add brand voice messaging

**Task 4: Appliances Page Fixes**
- Fix border radius violations
- Convert images to Next.js Image
- Fix brand positioning ("Complete Your Space")
- Add cross-sell sections
- Add missing content sections

**Task 5: Schema & Structured Data**
- Create reusable schema utilities
- Add Service schema to all pages
- Add Product schema to all pages
- Add FAQ schema
- Add Breadcrumb schema

**Task 6: Validation & Testing**
- Run pre-deployment checks
- Verify all builds pass
- Run E2E tests
- Content validation

---

## Success Criteria

| Metric | Target |
|--------|--------|
| Design System Score | 9+/10 |
| Brand Voice Score | 8+/10 |
| Content Completeness | 9+/10 |
| SEO Score | 8+/10 |
| Build Pass | ✅ |
| E2E Tests Pass | ✅ |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Breaking changes | Work in feature branch, test thoroughly |
| Content delays | Use parallel sub-agents, have backup writers |
| Schema errors | Validate with Google's Rich Results Test |
| Performance issues | Use Next.js Image, lazy loading |

---

## Resources

### Brand Guidelines
- `.agent/rules/EDG_Brand_Source`
- `.agent/patterns/design-system.md`
- `.agent/constraints/SYSTEM.md`
- `.agent/constraints/GLOBAL.md`

### Reference Pages
- `src/app/page.tsx` (Homepage - good reference)
- `src/app/systems/appliances/page.tsx` (has metadata)

### Tools
- Google Rich Results Test (schema validation)
- PageSpeed Insights (performance)
- WCAG Contrast Checker (accessibility)
