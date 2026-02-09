---
name: SEO Validator
description: Validates all pages have proper metadata, canonical tags, and no 'use client' conflicts. Use before every deployment.
---

# SEO Validator Skill

Validates that all pages have required SEO metadata and flags any `'use client'` conflicts.

## Commands

### Validate All Pages

```bash
node scripts/validate-seo.mjs
```

**What it checks:**
1. Every `page.tsx` exports metadata
2. Every metadata has `alternates.canonical`
3. No `'use client'` pages are missing metadata
4. All pages in sitemap have valid metadata
5. No trailing slashes in canonical paths

**Output:**
```
✅ /systems/pergolas - canonical: /systems/pergolas
✅ /service-areas/lake-county-il - canonical: /service-areas/lake-county-il
❌ /service-areas/wilmette-il - 'use client' with no metadata export!
❌ /contact - missing alternates.canonical
```

### Fix Common Issues

Auto-fix missing canonicals in metadata exports:

```bash
node scripts/validate-seo.mjs --fix
```

This will:
- Add `alternates: { canonical: '/path' }` to metadata missing it
- Convert `'use client'` pages to Server Components when possible
- Flag pages that need manual review

### Check Specific Page

```bash
node scripts/validate-seo.mjs --path /service-areas/wilmette-il
```

## Integration with Site Manager

Always run SEO validation after creating new pages:

```bash
# 1. Generate new page
npm run generate -- --name "New Page" --route "path/page" --description "..."

# 2. Validate SEO
node scripts/validate-seo.mjs

# 3. Run smoke tests
npm run test:e2e
```

## Pre-Commit Hook

Add to `.git/hooks/pre-commit`:

```bash
#!/bin/bash
echo "🔍 Running SEO validation..."
node scripts/validate-seo.mjs --quiet || exit 1
```

## What Gets Flagged

| Issue | Severity | Fix |
|-------|----------|-----|
| Missing `alternates.canonical` | 🔴 Critical | Add canonical path |
| `'use client'` + metadata export | 🔴 Critical | Remove `'use client'` or split components |
| `'use client'` without metadata | 🔴 Critical | Convert to Server Component or add metadata export |
| Trailing slash in canonical | 🟡 Warning | Remove trailing slash |
| Missing title | 🟡 Warning | Add title |
| Missing description | 🟡 Warning | Add description |

## Success Criteria

Validation passes when:
- All 56+ pages have canonical tags
- Zero `'use client'` pages with missing metadata
- All canonical paths are consistent (no trailing slashes)
- All pages in sitemap are validated
