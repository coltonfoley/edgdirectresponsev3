# Color Contrast Remediation Plan

**Priority:** CRITICAL  
**Timeline:** 1-2 weeks for Phase 1  
**Owner:** Frontend Team

---

## Quick Wins (Do Today - 2 Hours)

### 1. Update globals.css Color Tokens

**File:** `src/app/globals.css`

```css
@theme {
  /* FIX: Make inverse muted text accessible on dark backgrounds */
  /* BEFORE: #a1a1aa (2.1:1 on black) - FAILS */
  /* AFTER: #d4d4d8 (4.5:1 on black) - PASSES AA */
  --color-text-inverse-muted: #d4d4d8;
  
  /* FIX: Add accessible border color for UI components */
  --color-border-ui: #71717a;  /* 4.6:1 on white for form fields */
  
  /* FIX: Ensure text-muted is truly at AA threshold */
  /* #71717a is 4.6:1 - barely passes, consider #6b6b75 for safety */
  --color-text-muted: #6b6b75;  /* 4.8:1 on white */
}
```

### 2. Fix Footer Component

**File:** `src/components/layout/Footer.tsx`

**Changes needed:**
- Line 45: `text-gray-400` → `text-zinc-300`
- Line 66: `text-gray-400` → `text-zinc-300`
- Line 122: `text-gray-400` → `text-zinc-300`
- Line 129: `text-gray-300` → `text-zinc-200` (already good)
- Lines 144-191: All `text-gray-400` → `text-zinc-300`
- Line 189: `text-gray-500` → `text-zinc-400`
- Line 192: `text-gray-600` → `text-zinc-500`

### 3. Fix Contact Form Placeholders

**File:** `src/components/features/contact/LeadCaptureForm.tsx`

**Lines 159, 182:**
```tsx
// BEFORE:
'placeholder:text-white/30'

// AFTER:
'placeholder:text-zinc-400'
```

**Lines 270, 284:**
```tsx
// BEFORE:
'placeholder:text-black/40'

// AFTER:
'placeholder:text-gray-500'
```

**File:** `src/components/features/contact/ContactClient.tsx`

**Lines 179, 192, 207, 221, 234:**
```tsx
// BEFORE:
placeholder:text-gray-200

// AFTER:
placeholder:text-gray-500
```

**Line 266:**
```tsx
// BEFORE:
placeholder:text-gray-300

// AFTER:
placeholder:text-gray-500
```

### 4. Fix Button Focus Ring

**File:** `src/components/ui/Button.tsx`

**Line 41:**
```tsx
// BEFORE:
'focus-visible:ring-2 focus-visible:ring-edg-brand focus-visible:outline-none'

// AFTER:
'focus-visible:ring-2 focus-visible:ring-edg-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none'
```

---

## This Week (Days 2-5)

### 5. Service Area Page Audit

Run this script to find all problematic patterns:

```bash
#!/bin/bash
echo "Finding text-gray-400 on dark backgrounds..."
grep -rn "text-gray-400" src/app/service-areas --include="*.tsx"

echo "Finding text-white/ with opacity..."
grep -rn "text-white/[0-9]" src/app/service-areas --include="*.tsx"

echo "Finding text-inverse-muted usage..."
grep -rn "text-inverse-muted\|text-text-inverse-muted" src --include="*.tsx"
```

**Fix patterns:**
- `text-gray-400` on dark bg → `text-zinc-300`
- `text-white/70` → `text-zinc-200`
- `text-white/80` → `text-zinc-100` or `text-white`

### 6. Update Card Component (if needed)

**File:** `src/components/ui/Card.tsx`

Verify dark variant text is using proper tokens:
```tsx
// Line 53 should already use text-text-inverse which is white
// But verify all card content uses proper semantic colors
```

### 7. Fix Input Border Contrast

**File:** `src/app/globals.css`

Add new token for form inputs:
```css
--color-border-input: #71717a;  /* 4.6:1 on white */
```

Then update input components to use `border-border-input` for form fields.

---

## Testing Checklist

After each fix, verify:

- [ ] Build passes: `npm run build`
- [ ] No visual regressions on key pages
- [ ] Run Lighthouse accessibility audit (should be ≥ 90)
- [ ] Test these specific user flows:
  - Homepage hero CTA
  - Footer link hover states
  - Contact form placeholder visibility
  - Service area page hero text

---

## Automated Testing Setup

### Add to package.json:

```json
{
  "scripts": {
    "test:a11y": "pa11y --standard WCAG2AA http://localhost:3000",
    "test:a11y:ci": "npm run build && npm start & sleep 5 && npm run test:a11y"
  },
  "devDependencies": {
    "pa11y": "^8.0.0"
  }
}
```

### GitHub Actions (add to .github/workflows/a11y.yml):

```yaml
name: Accessibility Tests
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm start &
      - run: sleep 5
      - run: npm install -g pa11y
      - run: pa11y --standard WCAG2AA http://localhost:3000
```

---

## Files to Modify (Checklist)

### Critical (Phase 1)
- [ ] `src/app/globals.css` - Update color tokens
- [ ] `src/components/layout/Footer.tsx` - Fix gray text
- [ ] `src/components/ui/Button.tsx` - Fix focus ring
- [ ] `src/components/features/contact/LeadCaptureForm.tsx` - Fix placeholders
- [ ] `src/components/features/contact/ContactClient.tsx` - Fix placeholders

### High (Phase 2)
- [ ] `src/app/service-areas/*/page.tsx` (12 files) - Fix hero text
- [ ] `src/app/service-areas/*/*/page.tsx` (product pages) - Fix dark section text
- [ ] `src/components/ui/Input.tsx` (if exists) - Fix border colors

### Medium (Phase 3)
- [ ] Remove or fix all `dark:` variants
- [ ] Standardize gray palette
- [ ] Audit all image overlay text

---

## Verification Commands

```bash
# After fixes, run these to verify:

# 1. Build the project
npm run build

# 2. Start production server
npm start &

# 3. Install pa11y if not already
npm install -g pa11y

# 4. Test critical pages
pa11y --standard WCAG2AA http://localhost:3000
pa11y --standard WCAG2AA http://localhost:3000/contact
pa11y --standard WCAG2AA http://localhost:3000/service-areas/barrington-il

# 5. Check for contrast failures specifically
pa11y --standard WCAG2AA --reporter json http://localhost:3000 | grep -i contrast
```

---

## Rollback Plan

If any fix causes visual issues:

1. Revert specific file changes
2. Use more conservative color (e.g., `text-zinc-200` instead of `text-white`)
3. Document the specific issue for design review

---

## Success Metrics

- [ ] Lighthouse Accessibility score ≥ 95
- [ ] Zero contrast-related pa11y errors
- [ ] All form placeholders clearly visible
- [ ] Footer links readable on black background
- [ ] Hero text readable on all image backgrounds
