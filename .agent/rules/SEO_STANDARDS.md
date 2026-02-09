---
name: SEO Standards
description: Guidelines for ensuring proper SEO, metadata, and canonical tag implementation. CRITICAL for preventing indexing issues.
---

# SEO Standards & Canonicalization Rules

## 🚨 CRITICAL RULE: 'use client' vs Metadata

**This is the #1 cause of missing canonicals and SEO issues.**

### The Problem

In Next.js App Router, **`'use client'` components CANNOT export metadata**. If you add `'use client'` to a page, it loses:
- `<title>` tag
- `<meta name="description">`
- `<link rel="canonical">`
- All Open Graph tags
- All Twitter Card tags

**Real example from this codebase:**
```typescript
// ❌ WRONG - No metadata possible!
'use client';

export const metadata = {  // This does NOTHING!
  title: 'Wilmette Pergolas',
};
// The HTML will have NO title, NO description, NO canonical!
```

### The Solution

```typescript
// ✅ CORRECT - Server Component with metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wilmette Pergolas',
  description: '...',
  alternates: {
    canonical: '/service-areas/wilmette-il',
  },
};

export default function Page() {
  return <div>...</div>;
}
```

### When Do You Need 'use client'?

You ONLY need `'use client'` when using:
- React hooks (`useState`, `useEffect`, `useContext`)
- Browser APIs (`window`, `document`, `localStorage`)
- Event handlers that need state
- Third-party libraries that require client-side hydration

**Rule of thumb:** Move all client-side logic to child components:

```typescript
// ✅ CORRECT PATTERN - Page is Server Component
import type { Metadata } from 'next';
import { ClientForm } from './ClientForm'; // Client island

export const metadata: Metadata = {
  title: 'Contact Us',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <ClientForm /> {/* Only this part hydrates client-side */}
    </main>
  );
}
```

---

## Canonical Domain Standard

The project uses `https://www.edgpatioshade.com` as the canonical domain.

### Infrastructure Rules

- **Non-www to WWW**: All traffic from `edgpatioshade.com` must be redirected via 301 to `www.edgpatioshade.com`. This is handled in `src/middleware.ts`.
- **Protocol**: Always use `https`.

---

## Canonical Tags (MANDATORY)

**EVERY page MUST have an explicit canonical tag.** No exceptions.

### Implementation Rule

In every `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  alternates: {
    canonical: '/your-page-path', // MUST start with / and have NO trailing slash
  },
};
```

### Prohibited

- ❌ DO NOT set a default `canonical: '/'` in the root `layout.tsx`.
- ❌ DO NOT rely on `metadataBase` to automatically generate canonicals.
- ❌ DO NOT use full absolute URLs in page files.
- ❌ DO NOT use `'use client'` on pages that need SEO.

---

## Required Metadata for Every Page

Every page MUST export:

```typescript
export const metadata: Metadata = {
  title: 'Page Title | EDG Outdoor Living',  // 50-60 chars
  description: 'Compelling description...',   // 150-160 chars
  alternates: {
    canonical: '/page-path',                   // No trailing slash
  },
};
```

---

## Sitemaps

- Ensure all new pages are added to `sitemap.ts`.
- `sitemap.ts` MUST use the full `https://www.edgpatioshade.com` domain.

---

## Robots.txt

- Ensure `robots.ts` points to the correct sitemap location on the canonical domain.

---

## Pre-Deployment SEO Checklist

Before deploying any new page:

- [ ] Page exports metadata with title, description, and canonical
- [ ] Page does NOT use `'use client'` unless absolutely necessary
- [ ] If using `'use client'`, metadata is still exported from a separate server component
- [ ] Page is added to `sitemap.ts`
- [ ] Canonical path matches the actual URL (no trailing slash)
- [ ] Run `npm run validate-metadata` (if available)

---

## Quick Validation Commands

```bash
# Check for pages missing canonical tags
grep -rL "alternates:" src/app/**/page.tsx 2>/dev/null

# Check for pages using 'use client' (potential metadata issues)
grep -l "'use client'" src/app/**/page.tsx 2>/dev/null

# Build and check HTML output
npm run build
grep -o 'rel="canonical"' .next/server/app/**/*.html | wc -l
```
