---
name: Site Manager
description: Official guardrails for maintaining website consistency, safety, and quality. Use this skill to create pages, run tests, validate SEO, and format code.
---

# Site Manager

This skill provides the official procedures for modifying the website. You **MUST** use these tools to ensure consistency and prevent regressions.

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

---

## 2. SEO Validation (REQUIRED)

**Goal**: Ensure all pages have proper metadata, canonical tags, and no 'use client' conflicts.
**When to use**: 
- After creating ANY new page
- Before EVERY deployment
- After modifying metadata or page structure

**Command**:

```bash
node scripts/validate-seo.mjs
```

**What it checks**:
1. Every `page.tsx` exports metadata
2. Every metadata has `alternates.canonical`
3. No `'use client'` pages are missing metadata
4. All canonical paths are consistent (no trailing slashes)

**Output**:
```
✅ /systems/pergolas - canonical: /systems/pergolas
❌ /service-areas/wilmette-il - 'use client' with no metadata export!
```

**CRITICAL RULE**: If validation fails with "CRITICAL ISSUES", **DO NOT DEPLOY**. Fix the issues first.

### Common SEO Issues

| Issue | Fix |
|-------|-----|
| `'use client'` + metadata | Remove `'use client'` from page, create child Client Component |
| Missing canonical | Add `alternates: { canonical: '/path' }` to metadata |
| `'use client'` only | Convert to Server Component OR add metadata export BEFORE `'use client'` |

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

## 4. Code Formatting

**Goal**: Keep the codebase clean and consistent.
**When to use**: After writing any code (React components, config files, etc.).

**Command**:

```bash
npm run format
```

---

## Complete Workflow Example

If a user asks: "Create a new contact page for dealers."

1. **Generate**: 
   ```bash
   npm run generate -- --name "Dealer Contact" --route "contact/dealer" --description "Contact us for dealer inquiries."
   ```

2. **Edit**: Modify `src/app/contact/dealer/page.tsx` with specific content.

3. **Validate SEO** (CRITICAL):
   ```bash
   node scripts/validate-seo.mjs
   ```

4. **Format**: 
   ```bash
   npm run format
   ```

5. **Verify**: 
   ```bash
   npm run test:e2e
   ```

---

## Pre-Deployment Checklist

Before ANY deployment:

- [ ] SEO validation passes (`node scripts/validate-seo.mjs`)
- [ ] Smoke tests pass (`npm run test:e2e`)
- [ ] Code is formatted (`npm run format`)
- [ ] No `'use client'` pages missing metadata
- [ ] All new pages have canonical tags
