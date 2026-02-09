# Workflow: Validation & Deployment

> **Pre-deployment checks and ongoing quality assurance**

---

## Pre-Deployment Validation

Run this checklist before EVERY deployment.

---

## Step 1: SEO Validation

### Check for 'use client' on Pages

```bash
# Find pages using 'use client' (WRONG)
grep -l "'use client'" src/app/**/page.tsx src/app/**/**/page.tsx src/app/**/**/**/page.tsx 2>/dev/null

# Expected output: nothing (empty)
# If files are listed, refactor to Server Components
```

### Check for Missing Canonical Tags

```bash
# Find pages without alternates.canonical
grep -rL "alternates:" src/app/**/page.tsx 2>/dev/null

# Expected output: only non-SEO pages (admin, api)
```

### Manual Spot Check

Open 3-4 key pages and verify in browser DevTools:
- [ ] `<title>` tag present and correct
- [ ] `<meta name="description">` present
- [ ] Canonical link: `<link rel="canonical" href="...">`
- [ ] No console errors

---

## Step 2: Build Validation

```bash
npm run build
```

**Success Criteria:**
- No TypeScript errors
- No ESLint errors
- Build completes without warnings
- Gallery data generated successfully

**Common Issues:**

| Error | Solution |
|-------|----------|
| `metadata is not defined` | Remove 'use client' from page |
| `Image is missing required src` | Add src to next/image |
| `Cannot find module` | Check import paths, run `npm install` |

---

## Step 3: E2E Testing

```bash
npm run test:e2e
```

**Success Criteria:**
- All routes return 200 OK
- No console errors during navigation
- Mobile viewport tests pass

**If Tests Fail:**

```bash
# Run specific test with UI for debugging
npx playwright test --ui

# Run specific route
npx playwright test --grep "specific-route"
```

---

## Step 4: Code Quality

```bash
# Format check
npm run format

# Lint check
npm run lint
```

---

## Step 5: Content Validation

### Service Area Pages

Check word count:

```bash
# Rough word count check (remove HTML tags first)
cat src/app/service-areas/[area]/page.tsx | sed 's/<[^>]*>//g' | wc -w

# Should be 800+
```

Check required sections:
- [ ] 4 neighborhood sections
- [ ] FAQ section
- [ ] Local context references

### Project Pages

- [ ] Challenge/solution/result structure
- [ ] 4+ gallery images
- [ ] Links to service area

---

## Deployment Checklist

### Pre-Deploy
- [ ] SEO validation passes (no 'use client' on pages)
- [ ] All pages have canonical tags
- [ ] Build succeeds: `npm run build`
- [ ] E2E tests pass: `npm run test:e2e`
- [ ] Code formatted: `npm run format`

### Deploy
```bash
git add .
git commit -m "feat: add [feature description]"
git push origin main
```

### Post-Deploy
- [ ] Verify production URL loads
- [ ] Check 3-4 key pages render correctly
- [ ] Submit new pages to Google Search Console
- [ ] Monitor for 24 hours (Vercel dashboard)

---

## Ongoing Quality Checks

### Weekly

```bash
# Check for SEO regressions
grep -l "'use client'" src/app/**/page.tsx 2>/dev/null
grep -rL "alternates:" src/app/**/page.tsx 2>/dev/null

# Run tests
npm run test:e2e
```

### Monthly

- [ ] Review Google Search Console for crawl errors
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Verify all internal links work
- [ ] Check for broken images

---

## Automated Validation Script

Create `scripts/validate-seo.mjs`:

```javascript
#!/usr/bin/env node

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const issues = [];

async function checkPage(filePath) {
  const content = await readFile(filePath, 'utf-8');
  
  // Check for 'use client'
  if (content.includes("'use client'")) {
    issues.push(`❌ 'use client' in ${filePath}`);
  }
  
  // Check for metadata export
  if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) {
    issues.push(`❌ Missing metadata export in ${filePath}`);
  }
  
  // Check for canonical
  if (!content.includes('alternates:') && !content.includes('canonical')) {
    issues.push(`❌ Missing canonical in ${filePath}`);
  }
}

async function scanDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const path = join(dir, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('(') && !entry.name.startsWith('_')) {
      await scanDirectory(path);
    } else if (entry.name === 'page.tsx') {
      await checkPage(path);
    }
  }
}

async function main() {
  console.log('🔍 Validating SEO...\n');
  
  await scanDirectory('src/app');
  
  if (issues.length === 0) {
    console.log('✅ All SEO checks passed!');
    process.exit(0);
  } else {
    console.log(`Found ${issues.length} issues:\n`);
    issues.forEach(issue => console.log(issue));
    process.exit(1);
  }
}

main();
```

Add to `package.json`:

```json
{
  "scripts": {
    "validate:seo": "node scripts/validate-seo.mjs"
  }
}
```

---

## Emergency Rollback

If deployment breaks:

```bash
# Revert last commit
git revert HEAD

# Push revert
git push origin main

# Or rollback in Vercel dashboard
# Production → Deployments → Previous deployment → Promote
```

---

## Performance Benchmarks

Monitor these metrics:

| Metric | Target | Alert If |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | > 4s |
| FID (First Input Delay) | < 100ms | > 300ms |
| CLS (Cumulative Layout Shift) | < 0.1 | > 0.25 |
| Build Time | < 2 min | > 5 min |
| Bundle Size | < 200KB | > 500KB |

---

## Quick Reference: Common Fixes

### Fix 'use client' Issue

```typescript
// BEFORE (WRONG)
'use client';
export const metadata = { title: 'Page' }; // Won't work!
export default function Page() { ... }

// AFTER (CORRECT)
// page.tsx
export const metadata = { title: 'Page' };
export default function Page() { 
  return <ClientComponent />;
}

// ClientComponent.tsx
'use client';
export function ClientComponent() { ... }
```

### Fix Missing Canonical

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: '...',
  alternates: {
    canonical: '/correct-path', // Add this
  },
};
```

### Fix Build Error

```bash
# Clear cache
rm -rf .next

# Regenerate gallery data
node scripts/generate-gallery-data.mjs

# Rebuild
npm run build
```
