# Design System Audit Report

**Date:** 2026-02-09  
**Project:** EDG Patio & Shade Website  
**Scope:** Visual consistency across all page types

---

## Executive Summary

The website has **significant design inconsistencies** across pages. While individual pages look good in isolation, users experience a disjointed journey when navigating between sections. The site appears to have 2-3 competing design languages.

**Severity:** High (impacts brand perception and trust)

---

## Critical Issues Found

### 1. 🚨 Border Radius Chaos

**Problem:** 4 different border radius approaches used inconsistently

| Pattern | Found In | Usage |
|---------|----------|-------|
| `rounded-none` (sharp) | Homepage, Footer, Pergolas page | Editorial/minimalist |
| `rounded-md` (subtle) | Button component default | UI elements |
| `rounded-lg` (8px) | Some cards | Mixed usage |
| `rounded-2xl` (16px) | Wilmette service area | Cards, sections |
| `rounded-full` (pill) | Wilmette hero CTA | Buttons only there |

**Specific Examples:**
```
Wilmette page:
- Hero CTA button: rounded-full
- Neighborhood cards: rounded-2xl
- Weather cards: rounded-2xl

Pergolas page:
- All buttons: rounded-none
- Feature icons: square (no radius)

Homepage:
- All buttons: rounded-none
- Form inputs: square (no radius)
```

**Recommendation:** Choose ONE radius system:
- **Option A (Editorial):** `rounded-none` for everything (matches brand's technical/professional vibe)
- **Option B (Modern):** `rounded-lg` for cards, `rounded-full` for CTAs
- **Option C (Hybrid):** Keep sharp for product pages, rounded for service areas

---

### 2. 🚨 Color Palette Fragmentation

**Problem:** Multiple competing color systems

**Brand Colors (from globals.css):**
- `--color-edg-brand: #42ffc1` (mint)
- `--color-edg-brand-text: #000000` (black)
- `--color-edg-dark: #000000` (true black)
- `--color-edg-light: #ffffff` (white)

**What's Actually Used:**
```
Backgrounds:
- bg-black                    ← True black
- bg-edg-dark                 ← Same as black
- bg-zinc-900                 ← Dark gray (NOT brand)
- bg-zinc-950                 ← Darker gray (NOT brand)
- bg-gray-100                 ← Light gray
- bg-zinc-50                  ← Off-white

Text Colors:
- text-white
- text-gray-200               ← Hero subtitles
- text-gray-300               ← Footer links
- text-gray-400               ← Body text
- text-gray-500               ← Muted text
- text-gray-600               ← Body text
- text-muted-foreground       ← Theme variable (zinc-500)

Brand Text:
- text-edg-brand              ← Mint accent
- text-edg-brand-text         ← Black on mint
- text-black                  ← Pure black
```

**Issues:**
1. `bg-zinc-900` is used for dark sections but it's not the brand black
2. Grays are inconsistent: `gray-300` in one place, `gray-400` in another
3. `text-muted-foreground` (zinc-500) vs `text-gray-500` (gray-500) - different colors!

**Recommendation:** 
- Create semantic color tokens:
  - `text-body` (consistent gray for body text)
  - `text-muted` (consistent gray for secondary text)
  - `bg-surface` (card backgrounds)
  - `bg-elevated` (elevated surfaces)

---

### 3. 🚨 Typography Inconsistencies

**Tracking (Letter Spacing):**
```
Homepage:
- tracking-tighter            ← Main headlines
- tracking-tight              ← Subheadlines  
- tracking-wider              ← Labels
- tracking-widest             ← Small labels

Wilmette:
- tracking-tight              ← Some headlines
- No tracking class           ← Other headlines

Pergolas:
- tracking-tighter            ← Headlines
- tracking-widest             ← Labels
```

**Font Sizes (H1s):**
```
Homepage: text-5xl md:text-7xl lg:text-[5.5rem]
Wilmette: text-4xl md:text-5xl lg:text-6xl
Pergolas: text-5xl md:text-7xl
```

**Line Height:**
```
Homepage: leading-[0.95], leading-relaxed
Wilmette: leading-[1.1], leading-relaxed
Pergolas: leading-[0.9], leading-tight
```

**Uppercase Styling:**
```
Homepage: uppercase tracking-widest text-xs
Wilmette: uppercase tracking-wider text-sm
Pergolas: uppercase tracking-widest text-sm
```

**Recommendation:** Create typography components:
```typescript
// Heading levels with consistent sizing
<Heading level={1} variant="hero">     // Homepage
<Heading level={1} variant="page">     // Service areas
<Heading level={2} variant="section">  // Section titles

// Label/eyebrow text
<Label size="sm">Free Planning Guide</Label>
```

---

### 4. 🚨 Section Spacing Inconsistencies

**Vertical Padding:**
```
Homepage:
- py-24 (Hero)
- py-8 (Statement bar)
- py-24 md:py-32 (Systems)
- py-24 md:py-32 (Why Us)
- py-32 (CTA)

Wilmette:
- py-16 (Hero - but pt-24 pb-16)
- py-8 (Local expertise)
- py-20 (Sections)

Pergolas:
- pt-32 pb-12 (Hero)
- py-24 (Features)
- py-24 (Configurator)
- py-32 (CTA)
```

**Issue:** No consistent rhythm. Some sections use Section component (`py-16 md:py-24`), others hardcode values.

**Recommendation:** 
- Use Section component consistently
- Define 3 spacing sizes: sm (16), md (24), lg (32)

---

### 5. 🚨 Card Style Fragmentation

**Wilmette Cards:**
```
className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
```

**Pergolas Technical Box:**
```
className="bg-zinc-900 border border-white/10 p-12 text-white"
```

**Homepage (No cards really, but):**
```
Editorial sections with no borders, no backgrounds
```

**Issues:**
1. Some cards have borders, some don't
2. Some have backgrounds, some don't  
3. Padding varies: p-6, p-8, p-12
4. Shadow usage is inconsistent

**Recommendation:** Create Card component variants:
```typescript
<Card variant="default">      // White bg, subtle border
<Card variant="muted">        // Zinc-50 bg
<Card variant="dark">         // Dark bg for contrast sections
<Card variant="outline">      // Border only, transparent bg
```

---

### 6. 🚨 Button Style Inconsistencies

**Current Button Component:**
- Default: `rounded-md`, padding based on size
- Variants: primary (mint), secondary (bordered), ghost, outline

**Actual Usage:**
```
Homepage:
- "Start Your Project": rounded-none, bg-edg-brand
- "Get Planning Guide": rounded-none, variant="secondary"
- "Explore Pergolas": rounded-none, variant="outline"

Wilmette:
- "Request Wilmette Site Visit": rounded-full (❌ different!)
- "Schedule Free Consultation": rounded-none

Pergolas:
- "Configure System": rounded-none
- "Start Quote": rounded-none

Footer:
- "Book Consultation": rounded-none
- "Get the Guide": rounded-none
```

**Issue:** Wilmette hero CTA uses `rounded-full` (pill) while every other button is sharp.

---

### 7. 🚨 Icon Treatment Inconsistencies

**Wilmette:**
```
<div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
  <Icon className="text-edg-brand-text h-6 w-6" />
</div>
```

**Pergolas:**
```
<div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
  <Icon className="h-5 w-5" />
</div>
```

**Issues:**
1. Different sizes (h-12 vs h-10)
2. Different treatments (colored bg vs border)
3. Different shapes (rounded-full vs square)

---

### 8. 🚨 Image Handling Violations

**CSS Background Images (Anti-pattern):**
```typescript
// Wilmette hero
<div style={{
  backgroundImage: "url('/images/pergolas/...')"
}} />

// Homepage split sections
<div className="bg-[url('/images/...')]" />

// Pergolas gallery
<div style={{ backgroundImage: "url('/images/...')" }} />
```

**Why This Matters:**
- No lazy loading
- No responsive images
- No Next.js optimization
- Harder to maintain

---

### 9. 🚨 Form Input Inconsistencies

**Homepage Form:**
```
className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white..."
```
- Square corners (no rounded class)
- White/transparent on dark

**Contact Page (assumed):**
- Different styling

**Issue:** No standardized form input component

---

## Page-by-Page Summary

| Page | Style Family | Issues |
|------|--------------|--------|
| Homepage | Editorial/Sharp | Uses `rounded-none`, consistent within itself |
| Footer | Editorial/Sharp | Matches homepage style |
| Navbar | Editorial/Sharp | Matches homepage |
| Pergolas | Editorial/Sharp | Matches homepage, good consistency |
| Wilmette | Modern/Rounded | **MISMATCH** - uses rounded-2xl, rounded-full |
| Systems | Editorial/Sharp | Likely matches pergolas |
| Other Service Areas | Unknown | Need to check each |

**The Problem:** We have 2 distinct visual languages:
1. **Editorial/Sharp:** Homepage, Pergolas, Footer (sophisticated, technical)
2. **Modern/Rounded:** Wilmette (friendly, accessible)

---

## Recommendations

### Immediate Actions (P0)

1. **Decide on ONE visual language**
   - Editorial/Sharp (recommended - matches brand positioning)
   - OR Modern/Rounded (if targeting more residential/friendly)

2. **Fix Wilmette page radius inconsistencies**
   - Change `rounded-full` buttons to `rounded-none`
   - Change `rounded-2xl` cards to `rounded-none` OR decide rounded is the new standard

3. **Create semantic color tokens**
   ```css
   --color-text-primary: #0a0a0a;
   --color-text-secondary: #52525b;
   --color-text-muted: #71717a;
   --color-surface: #ffffff;
   --color-surface-muted: #f4f4f5;
   --color-surface-dark: #000000;
   ```

### Short-term Actions (P1)

4. **Create consistent component variants**
   - Card component with 3 variants
   - Button component enforcing radius choice
   - Icon wrapper component
   - Form input component

5. **Audit all service area pages**
   - Check for similar inconsistencies
   - Standardize to chosen design language

6. **Replace CSS background images**
   - Use next/image with fill
   - Proper aspect ratios
   - Lazy loading

### Long-term Actions (P2)

7. **Typography system**
   - Define heading scale (H1-H6)
   - Define body text sizes
   - Define label/eyebrow styles
   - Document in design tokens

8. **Spacing system**
   - Section spacing scale
   - Component padding scale
   - Gap/width standards

---

## Files Requiring Updates

### High Priority
1. `src/app/service-areas/wilmette-il/page.tsx` - Radius inconsistencies
2. `src/components/features/home/HomeClient.tsx` - CSS background images
3. `src/app/systems/pergolas/page.tsx` - CSS background images

### Medium Priority  
4. All service area pages - audit for similar issues
5. `src/components/ui/Button.tsx` - Enforce radius standard
6. Create new component files for Card, IconWrapper, FormInput

---

## Success Metrics

After fixes:
- [ ] All buttons use consistent border radius
- [ ] All cards use consistent styling
- [ ] No CSS background images (all next/image)
- [ ] Semantic color tokens used instead of arbitrary values
- [ ] Typography follows consistent scale
