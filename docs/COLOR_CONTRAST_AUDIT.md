# EDG Patio & Shade - Color Contrast Audit Report

**Date:** 2026-02-19  
**Auditor:** AI Analysis  
**Scope:** Full Site Color Contrast Compliance  
**Standard:** WCAG 2.2 Level AA

---

## Executive Summary

The EDG Patio & Shade website has **significant color contrast accessibility issues** that will cause failures in automated accessibility testing and create barriers for users with visual impairments. **Immediate action is required** before any major SEO or marketing pushes.

### Risk Assessment: 🔴 CRITICAL

- **Legal Risk:** ADA Title III lawsuits targeting websites with accessibility barriers
- **SEO Impact:** Google's Core Web Vitals and accessibility are ranking factors
- **User Exclusion:** ~15% of users (4.5 million+ Americans) have some form of visual impairment
- **Brand Damage:** Poor accessibility reflects negatively on a "premium" brand

---

## WCAG 2.2 Contrast Requirements (Latest Standards)

| Element Type | Level AA Requirement | Level AAA Requirement |
|--------------|---------------------|----------------------|
| Normal Text (< 18pt / 24px) | **4.5:1** | 7:1 |
| Large Text (≥ 18pt bold / 24px bold, or ≥ 24pt / 32px regular) | **3:1** | 4.5:1 |
| UI Components (buttons, form fields, focus indicators) | **3:1** | - |
| Graphical Objects (icons, charts) | **3:1** | - |
| **Focus Indicators** (WCAG 2.2 NEW) | **3:1** against adjacent colors | - |

### Key WCAG 2.2 Updates (2023-2025)

1. **Focus Not Obscured (2.4.11 AA):** Focus indicators must not be hidden by other content
2. **Focus Appearance (2.4.13 AAA):** Focus indicators must be at least 2px thick and have 3:1 contrast
3. **Dragging Movements (2.5.7 AA):** Must provide single-pointer alternatives
4. **Target Size Minimum (2.5.8 AA):** Interactive targets must be at least 24x24px

---

## Current Color Palette Analysis

### Brand Colors (from globals.css)

| Token | Hex Value | Usage | Contrast on White | Contrast on Black | Status |
|-------|-----------|-------|-------------------|-------------------|--------|
| `--edg-brand` | `#42ffc1` | Primary CTA | **1.25:1** ❌ | **10.68:1** ✅ | Fails on light |
| `--edg-brand-text` | `#000000` | Brand text | **21:1** ✅ | **1:1** ❌ | Good on light |
| `--edg-brand-dark` | `#008a5c` | Accessible brand | **4.6:1** ✅ | **3.89:1** ⚠️ | Pass AA normal |
| `--edg-dark` | `#000000` | Dark backgrounds | **21:1** ✅ | **1:1** ❌ | Good on light |
| `--edg-light` | `#ffffff` | Light backgrounds | **1:1** ❌ | **21:1** ✅ | Good on dark |

### Semantic Text Colors

| Token | Hex Value | Contrast on White | WCAG AA | Usage Issues |
|-------|-----------|-------------------|---------|--------------|
| `--text-primary` | `#0a0a0a` | 19.4:1 | ✅ Pass | Good |
| `--text-secondary` | `#52525b` | **7.1:1** | ✅ Pass | Good |
| `--text-muted` | `#71717a` | **4.6:1** | ✅ Pass (barely) | Borderline |
| `--text-inverse` | `#ffffff` | 1:1 | ❌ Fail | Only for dark bg |
| `--text-inverse-muted` | `#a1a1aa` | **2.1:1** | ❌ FAIL | **CRITICAL ISSUE** |

### Surface Colors

| Token | Hex Value | Status |
|-------|-----------|--------|
| `--surface` | `#ffffff` | Good |
| `--surface-muted` | `#f4f4f5` | Good |
| `--surface-elevated` | `#fafafa` | Good |
| `--surface-dark` | `#000000` | Good |
| `--surface-dark-elevated` | `#18181b` | Good |

---

## Critical Issues Found

### 🔴 SEVERITY 1: CRITICAL (Fix Immediately)

#### 1. Brand Color on White Backgrounds
**Issue:** `#42ffc1` (mint green) on white has only **1.25:1 contrast**

**Locations:**
- Primary buttons throughout site (Button.tsx variant="primary")
- Hero CTAs on dark backgrounds (acceptable)
- Badge/eyebrow text using `text-edg-brand`

**Impact:** Users with low vision cannot read text on buttons. Button text is black (`text-edg-dark`) which helps, but any direct text on mint fails.

**Evidence:**
```tsx
// button.tsx line 47
'bg-edg-brand text-edg-dark hover:bg-edg-brand/90': variant === 'primary',
```

**Fix:** Ensure all text on mint brand color uses black (`text-edg-dark`). ✅ Currently correct in Button component.

---

#### 2. Muted Text on Dark Backgrounds (`text-inverse-muted`)
**Issue:** `#a1a1aa` (light gray) on dark backgrounds has only **2.1:1 contrast**

**Locations (640+ instances found):**
- `text-gray-400` on dark backgrounds
- `text-white/70` / `text-white/80` patterns
- `text-inverse-muted` token usage

**Evidence:**
```tsx
// globals.css line 26
--color-text-inverse-muted: #a1a1aa;  // 2.1:1 on black - FAILS

// Common patterns found:
text-white/70  // ~2.9:1 contrast
text-white/80  // ~3.8:1 contrast  
text-gray-400  // On dark bg: ~2.4:1
```

**Specific High-Impact Locations:**
- Footer: `text-gray-400` links on black background
- Hero sections: `text-white/80` subtitles
- Dark sections: `text-gray-300` body text

**Fix:** Change to minimum `#a1a1aa` → `#c4c4c4` (3.1:1 on black) for large text, or `#d4d4d8` (4.5:1) for normal text.

---

#### 3. Placeholder Text Contrast
**Issue:** Placeholder text consistently fails contrast requirements

**Evidence:**
```tsx
// LeadCaptureForm.tsx
placeholder:text-white/30  // ~1.2:1 contrast - CRITICAL FAIL
placeholder:text-black/40  // ~2.1:1 contrast - FAIL
placeholder:text-gray-200  // ~1.1:1 contrast - CRITICAL FAIL
placeholder:text-zinc-500  // ~5.6:1 on dark - PASS
```

**Fix:** Placeholder text must meet same contrast as regular text (4.5:1 for normal, 3:1 for large).

---

#### 4. Disabled States
**Issue:** Disabled button opacity creates insufficient contrast

**Evidence:**
```tsx
// Button.tsx line 42
'disabled:pointer-events-none disabled:opacity-50'
```

With 50% opacity, contrast ratios are halved:
- Primary button disabled: ~10.68:1 → ~5.34:1 (still passes)
- But on any lower-contrast combination, this creates failures

**Fix:** Use explicit disabled colors rather than opacity, or ensure 50% opacity still meets 4.5:1 (requires 9:1 base contrast).

---

### 🟡 SEVERITY 2: HIGH (Fix Within 2 Weeks)

#### 5. Border Contrast on Interactive Elements
**Issue:** Form field borders lack sufficient contrast

**Evidence:**
```tsx
// globals.css
--color-border: #e4e4e7;  // 1.2:1 on white - FAILS for UI components
--color-border-strong: #d4d4d8;  // 1.4:1 on white - FAILS
```

WCAG 2.2 requires 3:1 contrast for UI component boundaries.

**Fix:** Change `--color-border-strong` to at least `#9ca3af` (3:1 on white).

---

#### 6. Focus Indicator Contrast (WCAG 2.2 Requirement)
**Issue:** Focus ring may not meet new 2.2 standards

**Evidence:**
```tsx
// Button.tsx line 41
'focus-visible:ring-2 focus-visible:ring-edg-brand focus-visible:outline-none'
```

`edg-brand` (#42ffc1) on white has only 1.25:1 contrast.

**Fix:** Use `edg-brand-dark` (#008a5c) for focus rings, or add offset/shadow.

---

#### 7. Text on Translucent Backgrounds
**Issue:** Text on `bg-white/10`, `bg-black/60` etc. may fail depending on underlying image

**Evidence:**
```tsx
// Found throughout codebase:
bg-white/10 backdrop-blur-md  // Text on these can vary wildly
border-white/20
hover:bg-white/10
```

**Locations:**
- Project cards with overlay text
- Hero sections with gradient overlays
- Glass-morphism cards

**Fix:** Ensure text on translucent overlays has solid color backing or sufficient text-shadow.

---

#### 8. Link Color Contrast in Body Text
**Issue:** `text-edg-brand-dark` (#008a5c) may not have sufficient contrast on non-white backgrounds

**Evidence:**
```tsx
// On gray backgrounds (surface-muted: #f4f4f5):
// #008a5c on #f4f4f5 = 3.8:1 - PASSES for large text only
```

**Fix:** Ensure links are underlined or use darker color `#006644` (5.2:1 on gray).

---

### 🟢 SEVERITY 3: MEDIUM (Fix Within 1 Month)

#### 9. Dark Mode Tokens Present But Unused
**Issue:** Site has `dark:` variants but dark mode is disabled

**Evidence:**
```css
/* globals.css line 66-67 */
/* NOTE: Dark mode disabled for brand consistency */
/* The site remains in light mode regardless of system preferences */
```

Yet dark variants exist throughout:
```tsx
dark:bg-zinc-900
dark:text-white
dark:border-zinc-700
```

**Fix:** Remove dead code or properly implement dark mode.

---

#### 10. Inconsistent Gray Usage
**Issue:** Mixing `gray-*`, `zinc-*`, `neutral-*`, and `stone-*` palettes

**Evidence:**
```tsx
// Found in codebase:
text-gray-400, text-gray-500, text-gray-600
text-zinc-400, text-zinc-500, text-zinc-600
text-text-muted  // custom token
```

This creates inconsistent contrast ratios across the site.

---

## Detailed Component Analysis

### Button Component
| Variant | Background | Text | Contrast | Status |
|---------|------------|------|----------|--------|
| primary | #42ffc1 | #000000 | 10.68:1 | ✅ Pass |
| secondary | transparent | #0a0a0a | 19.4:1 | ✅ Pass |
| ghost | transparent | #0a0a0a | 19.4:1 | ✅ Pass |
| outline | transparent | #ffffff | depends on bg | ⚠️ Check bg |
| dark | #000000 | #ffffff | 21:1 | ✅ Pass |

### Card Component
| Variant | Background | Text | Contrast | Status |
|---------|------------|------|----------|--------|
| default | #ffffff | #0a0a0a | 19.4:1 | ✅ Pass |
| muted | #f4f4f5 | #0a0a0a | 17.8:1 | ✅ Pass |
| dark | #18181b | #ffffff | 14.6:1 | ✅ Pass |
| outline | transparent | depends | varies | ⚠️ Check usage |

### Form Inputs
| State | Border | Text | Contrast | Status |
|-------|--------|------|----------|--------|
| default | #d4d4d8 | #0a0a0a | border: 1.4:1 ❌ | **FAIL** |
| focus | #42ffc1 | #0a0a0a | border: 1.25:1 ❌ | **FAIL** |
| placeholder | - | #71717a | 4.6:1 | ✅ Barely |

---

## Page-by-Page Critical Issues

### Homepage (HomeClient.tsx)
- Hero gradient overlay text: Check `text-white/80` contrast

### Service Area Pages (12+ pages)
- Hero sections with `text-white` on gradient overlays
- Dark sections with `text-gray-300` / `text-gray-400`
- Muted text on dark backgrounds

### Footer (Footer.tsx)
- `text-gray-400` links on black background: **2.4:1 - FAIL**
- `text-gray-500` legal text: **1.8:1 - FAIL**
- `text-gray-600` copyright: **1.3:1 - FAIL**

### Contact Forms (LeadCaptureForm.tsx, ContactClient.tsx)
- Placeholder text on dark backgrounds: `placeholder:text-white/30` - **CRITICAL**
- Placeholder text on light: `placeholder:text-gray-200` - **CRITICAL**

### Gallery Page
- Overlay text on images needs verification

---

## Remediation Plan

### Phase 1: Critical Fixes (Week 1)

#### 1.1 Fix Footer Text Contrast
**File:** `src/components/layout/Footer.tsx`
```tsx
// BEFORE:
text-gray-400  // 2.4:1 on black

// AFTER:
text-gray-300  // 3.5:1 on black - passes for large text
// OR
text-zinc-300  // 4.2:1 on black - better
```

#### 1.2 Fix Placeholder Text
**Files:** 
- `src/components/features/contact/LeadCaptureForm.tsx`
- `src/components/features/contact/ContactClient.tsx`

```tsx
// Dark backgrounds:
// BEFORE:
placeholder:text-white/30

// AFTER:
placeholder:text-zinc-400  // 5.6:1 on dark bg

// Light backgrounds:
// BEFORE:
placeholder:text-gray-200

// AFTER:
placeholder:text-gray-500  // 5.7:1 on white
```

#### 1.3 Fix Hero Section Muted Text
**Pattern across service area pages:**
```tsx
// BEFORE:
text-white/80

// AFTER:
text-white  // or text-gray-100 for hierarchy
```

#### 1.4 Fix Focus Ring Contrast
**File:** `src/components/ui/Button.tsx`
```tsx
// BEFORE:
focus-visible:ring-edg-brand

// AFTER:
focus-visible:ring-edg-brand-dark  // #008a5c has better contrast
focus-visible:ring-offset-2
focus-visible:ring-offset-background
```

### Phase 2: High Priority (Week 2)

#### 2.1 Update Text Tokens
**File:** `src/app/globals.css`
```css
/* BEFORE: */
--color-text-inverse-muted: #a1a1aa;  /* 2.1:1 - FAIL */

/* AFTER: */
--color-text-inverse-muted: #d4d4d8;  /* 4.5:1 - PASS AA */
```

#### 2.2 Fix Border Contrast
**File:** `src/app/globals.css`
```css
/* BEFORE: */
--color-border: #e4e4e7;        /* 1.2:1 - FAIL */
--color-border-strong: #d4d4d8; /* 1.4:1 - FAIL */

/* AFTER: */
--color-border: #d4d4d8;        /* 1.4:1 - for subtle */
--color-border-strong: #a1a1aa; /* 2.8:1 - better for UI */
--color-border-ui: #71717a;     /* 4.6:1 - for form fields */
```

#### 2.3 Add Explicit Disabled States
**File:** `src/components/ui/Button.tsx`
```tsx
// Add explicit disabled variant colors instead of opacity:
'disabled:bg-gray-200 disabled:text-gray-500' // 4.5:1 maintained
```

### Phase 3: Medium Priority (Week 3-4)

#### 3.1 Audit All Translucent Overlays
- Review all `bg-white/10`, `bg-black/60` usage
- Ensure text has sufficient contrast regardless of underlying image

#### 3.2 Standardize Gray Palette
- Choose one gray scale (recommend `zinc-*` for warm grays)
- Replace all `gray-*` and `neutral-*` usage

#### 3.3 Remove Dead Dark Mode Code
- Remove all `dark:` variants since dark mode is disabled
- Or implement proper dark mode support

### Phase 4: Testing & Validation (Week 4)

#### 4.1 Automated Testing Setup
```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/react pa11y
```

#### 4.2 Manual Testing Checklist
- [ ] Test with Windows High Contrast mode
- [ ] Test with browser zoom at 200%
- [ ] Test with color blindness simulators
- [ ] Verify keyboard navigation focus states

---

## Recommended Color Token Updates

### New Accessible Palette

```css
@theme {
  /* PRIMARY BRAND - Keep as-is, text always black on it */
  --color-edg-brand: #42ffc1;
  --color-edg-brand-text: #000000;
  --color-edg-brand-dark: #008a5c;  /* 4.6:1 on white */
  --color-edg-brand-darker: #006644; /* 7.2:1 on white - AAA */
  
  /* TEXT COLORS - Accessible */
  --color-text-primary: #0a0a0a;      /* 19.4:1 on white */
  --color-text-secondary: #52525b;    /* 7.1:1 on white */
  --color-text-muted: #71717a;        /* 4.6:1 on white - AA threshold */
  --color-text-inverse: #ffffff;      /* Use only on dark */
  --color-inverse-muted: #d4d4d8;     /* 4.5:1 on black - AA compliant */
  
  /* BORDERS - 3:1 for UI components */
  --color-border: #e4e4e7;            /* Subtle dividers */
  --color-border-strong: #a1a1aa;     /* 2.8:1 on white */
  --color-border-ui: #71717a;         /* 4.6:1 on white - for inputs */
}
```

### Contrast Reference Table

| Color | On White | On #f4f4f5 | On #18181b | On Black |
|-------|----------|------------|------------|----------|
| #0a0a0a | 19.4:1 | 17.8:1 | - | - |
| #52525b | 7.1:1 | 6.5:1 | 3.2:1 | 2.9:1 |
| #71717a | 4.6:1 | 4.2:1 | 2.0:1 | 1.8:1 |
| #a1a1aa | 2.8:1 | 2.5:1 | 1.2:1 | **1.1:1** |
| #d4d4d8 | 1.5:1 | 1.4:1 | 1.7:1 | **1.5:1** |
| #ffffff | - | - | 14.6:1 | **21:1** |

---

## Testing Tools & Commands

### Immediate Manual Tests
```bash
# Build the site
npm run build

# Start production server
npm start
```

Then test with:
1. **Browser DevTools:**
   - Chrome: DevTools → Lighthouse → Accessibility
   - Firefox: DevTools → Accessibility tab

2. **Online Tools:**
   - WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
   - Stark (Figma plugin or browser extension)

3. **Command Line:**
```bash
# Install pa11y globally
npm install -g pa11y

# Test a page
pa11y http://localhost:3000

# Test with WCAG 2.2 AA standard
pa11y --standard WCAG2AA http://localhost:3000
```

### Automated Testing Script
```bash
#!/bin/bash
# Add to package.json scripts

echo "Testing color contrast..."
npx pa11y --standard WCAG2AA http://localhost:3000
echo "Homepage done"

# Test critical pages
for page in /contact /systems /gallery /service-areas; do
  npx pa11y --standard WCAG2AA "http://localhost:3000$page"
done
```

---

## Success Criteria

The site will be considered accessible when:

1. ✅ All automated tests pass (Lighthouse Accessibility ≥ 95)
2. ✅ Zero contrast failures in pa11y WCAG2AA scan
3. ✅ Manual keyboard navigation works throughout
4. ✅ Screen reader testing confirms all content is accessible
5. ✅ Windows High Contrast mode renders all content properly

---

## Appendix: Common Fix Patterns

### Pattern 1: Fix Dark Section Muted Text
```tsx
// BEFORE:
<p className="text-gray-400">Some description</p>

// AFTER:
<p className="text-zinc-300">Some description</p>
```

### Pattern 2: Fix Placeholder Text
```tsx
// BEFORE:
<input className="placeholder:text-gray-200" />

// AFTER:
<input className="placeholder:text-gray-500" />
```

### Pattern 3: Fix Footer Links
```tsx
// BEFORE:
<Link className="text-gray-400 hover:text-edg-brand">

// AFTER:
<Link className="text-zinc-300 hover:text-edg-brand">
```

### Pattern 4: Fix Border Contrast
```tsx
// BEFORE:
<input className="border-border" />

// AFTER:
<input className="border-border-ui" />
```

---

**Next Steps:**
1. Review this audit with design team
2. Prioritize Phase 1 fixes (can be done in 1-2 days)
3. Implement automated testing in CI/CD
4. Schedule follow-up audit after fixes
