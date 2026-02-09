---
name: Site Manager
description: Official guardrails for maintaining website consistency, safety, and quality. Use this skill to create pages, run tests, validate SEO, and format code.
---

# Site Manager

This skill provides the official procedures for modifying the website. You **MUST** use these tools to ensure consistency and prevent regressions.

## CRITICAL: Component Patterns

### Container Component

```typescript
// Use fluid for full-width sections
<Container fluid className="px-0">
  {/* Full-width content */}
</Container>

// Standard max-width container
<Container>
  {/* Constrained content */}
</Container>
```

### Button Component

```typescript
// Available variants:
<Button variant="primary">     {/* Mint green, default */}
<Button variant="secondary">   {/* Border style */}
<Button variant="ghost">       {/* No background */}
<Button variant="outline">     {/* Border with hover fill */}

// Sizes:
<Button size="sm">   {/* Small */}
<Button size="md">   {/* Medium, default */}
<Button size="lg">   {/* Large */}
```

### Image Optimization

**Always use `next/image` instead of CSS background images:**

```typescript
// WRONG - No optimization
<div style={{ backgroundImage: `url('${image}')` }} />

// CORRECT - Fully optimized
import Image from 'next/image';

<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy"  // or priority for LCP images
/>
```

---

## 1. Creating New Pages

**Goal**: Create SEO-ready pages with consistent metadata and layout.
**When to use**: Whenever the user asks for a new "page", "landing page", "service area", or "route".

**Command**:

```bash
npm run generate -- --name "Page Title" --route "category/slug-name" --description "SEO Description here"
```

**Parameters**:

- `--name`: The H1 title and meta title (e.g., "Naperville IL Pergolas").
- `--route`: The URL path relative to `src/app/` (e.g., `service-areas/naperville-il`).
- `--description`: A 150-160 character SEO description.

**Example**:
User: "Make a page for Lake Geneva outdoor living."
Agent Action:

```bash
npm run generate -- --name "Lake Geneva Outdoor Living" --route "service-areas/lake-geneva-wi" --description "Expert outdoor living services in Lake Geneva."
```

**WARNING: Plop Template Issues**

The Plop template (`templates/page.hbs`) may generate code with formatting issues. ALWAYS:
1. Check the generated file for syntax errors
2. Run `npm run format` after generation
3. Verify the page has proper metadata structure

---

## 2. SEO Validation (CRITICAL)

**Goal**: Ensure all pages have proper metadata, canonical tags, and no 'use client' conflicts.
**When to use**: 
- After creating ANY new page
- Before EVERY deployment
- After modifying metadata or page structure

### Manual SEO Check

Run this command to check for pages missing canonical tags:

```bash
# Check for pages missing canonical tags
grep -rL "alternates:" src/app/**/page.tsx 2>/dev/null

# Check for pages using 'use client' (potential metadata issues)
grep -l "'use client'" src/app/**/page.tsx 2>/dev/null
```

### What to Verify

1. **No 'use client' on pages that need SEO**
   - Server Components can export metadata
   - Client Components cannot
   - Move client logic to child components

2. **Canonical tags present**
   - Every page must have `alternates.canonical`

3. **Content depth (service areas)**
   - Minimum 800 words for service area hub pages
   - Include 4 neighborhood sections
   - Include FAQ section

---

## 3. Ensuring Quality (Smoke Tests)

**Goal**: Verify the site is healthy and no pages are broken (500 errors).
**When to use**:

- After creating a new page.
- After modifying `next.config.ts` or redirects.
- Before finishing a task to ensure no regressions.

**Command**:

```bash
npm run test:e2e
```

**Output Handling**:

- **PASS**: All green ticks. Proceed.
- **FAIL**: Read the output to see which URL failed (e.g., `Expected 200, got 404`). Fix the broken route or component.

---

## 4. Build Validation

**Goal**: Ensure TypeScript compiles and build succeeds.
**When to use**: Before every commit or deployment.

**Command**:

```bash
npm run build
```

---

## 5. Code Formatting

**Goal**: Keep the codebase clean and consistent.
**When to use**: After writing any code (React components, config files, etc.).

**Command**:

```bash
npm run format
```

---

## Complete Workflow Example

If a user asks: "Create a new service area page for Highland Park."

1. **Generate**: 
   ```bash
   npm run generate -- --name "Highland Park Outdoor Living" --route "service-areas/highland-park-il" --description "Custom pergolas and shades in Highland Park, IL."
   ```

2. **Edit**: 
   - Fix any template formatting issues
   - Ensure metadata exports correctly
   - Add neighborhood sections
   - Expand to 800+ words

3. **Check for 'use client'**: 
   - Verify page doesn't use `'use client'`
   - Move any interactive elements to child components

4. **Format**: 
   ```bash
   npm run format
   ```

5. **Build**: 
   ```bash
   npm run build
   ```

6. **Verify**: 
   ```bash
   npm run test:e2e
   ```

---

## Pre-Commit Checklist

- [ ] No `'use client'` on pages needing SEO
- [ ] Metadata exports properly
- [ ] Canonical tag present
- [ ] Build passes (`npm run build`)
- [ ] Tests pass (`npm run test:e2e`)
- [ ] Code formatted (`npm run format`)
