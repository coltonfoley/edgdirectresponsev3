---
name: SEO Standards
description: CRITICAL guidelines for ensuring proper SEO, metadata, and canonical tag implementation. READ BEFORE CREATING PAGES.
---

# SEO Standards & Canonicalization Rules

## 🚨 CRITICAL RULE: 'use client' vs Metadata

**THIS IS THE #1 CAUSE OF SEO FAILURES IN THIS PROJECT**

### The Problem

In Next.js App Router, **`'use client'` components CANNOT export metadata**. If you add `'use client'` to a page, it loses:
- `<title>` tag
- `<meta name="description">`
- `<link rel="canonical">`
- All Open Graph tags
- All Twitter Card tags

**Real example from this codebase (BEFORE FIX):**
```typescript
// ❌ WRONG - No metadata possible!
'use client';

export const metadata = {  // This does NOTHING!
  title: 'Wilmette Pergolas',
};
// The HTML will have NO title, NO description, NO canonical!
```

**Google sees this as a blank page for SEO purposes.**

### The Solution

**Option 1: Server Component (Preferred)**
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

**Option 2: Client Islands Pattern (When interactivity needed)**
```typescript
// ✅ CORRECT - Page is Server Component, child is Client
import type { Metadata } from 'next';
import { ClientForm } from './ClientForm'; // Only form hydrates

export const metadata: Metadata = {
  title: 'Contact Us',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>  {/* Server rendered */}
      <ClientForm />     {/* Client island - only interactive part */}
    </main>
  );
}
```

### When Do You Need 'use client'?

You ONLY need `'use client'` when using:
- React hooks (`useState`, `useEffect`, `useContext`)
- Browser APIs (`window`, `document`, `localStorage`)
- Event handlers that need state
- Third-party libraries requiring client-side hydration

**Rule of thumb:** Move all client-side logic to child components. Keep pages as Server Components.

---

## 📝 REQUIRED: Service Area Page Template

Every service area page MUST follow this structure:

```typescript
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
// ... other imports

// CRITICAL: Must export metadata
export const metadata: Metadata = {
  title: '[Location] Pergolas & Outdoor Living | EDG Patio & Shade',
  description: 'Custom motorized pergolas in [Location]. [Specific detail about location].',
  alternates: {
    canonical: '/service-areas/[location-slug]',
  },
};

// Page structure:
// 1. JSON-LD Schema (Service type)
// 2. Hero section with location name
// 3. Local benefits bar
// 4. Neighborhood sections (4 neighborhoods, ~200 words each)
// 5. Weather/climate considerations
// 6. FAQ section (4-5 questions)
// 7. Cluster links to spoke pages
// 8. CTA section

export default function LocationHubPage() {
  return (
    <div className="min-h-screen">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living - [Location]',
            // ... schema details
          }),
        }}
      />
      {/* ... page content */}
    </div>
  );
}
```

### Content Requirements for Service Areas

| Section | Min Words | Required |
|---------|-----------|----------|
| Hero + intro | 50 | ✅ |
| Local benefits bar | 20 | ✅ |
| Neighborhood sections (4) | 200 each | ✅ |
| Weather considerations | 100 | ✅ |
| FAQ section (4-5) | 100 each | ✅ |
| **TOTAL** | **800+** | **✅** |

**Thin content (< 800 words) will not rank well.**

---

## Canonical Domain Standard

The project uses `https://www.edgpatioshade.com` as the canonical domain.

### Infrastructure Rules

- **Non-www to WWW**: All traffic from `edgpatioshade.com` must be redirected via 301 to `www.edgpatioshade.com`. This is handled in `src/middleware.ts`.
- **Protocol**: Always use `https`.

---

## Canonical Tags

All pages in this project MUST have an explicit, self-referencing canonical tag defined in their metadata export.

### Implementation Rule

In every `page.tsx` that exports metadata:

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

- DO NOT set a default `canonical: '/'` in the root `layout.tsx`.
- DO NOT rely on the `metadataBase` to automatically generate canonicals without testing.
- DO NOT use full absolute URLs (e.g., `https://...`) in the page files; use relative paths as shown above, which will be resolved against the `metadataBase` defined in `layout.tsx`.

---

## Schema Markup Requirements

### Required Schema Types

| Page Type | Required Schema | File |
|-----------|-----------------|------|
| Root layout | LocalBusiness, WebSite | `layout.tsx` |
| Service area hub | Service | Page file |
| Service area spoke | Service | Page file |
| Product pages | Service or Product | Page file |
| All pages with FAQs | FAQPage | Page file |

### Schema Helper Functions

Use helpers from `src/lib/schema.ts`:

```typescript
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';

// In page component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateServiceSchema({
      name: 'Service Name',
      description: 'Service description',
      url: 'https://www.edgpatioshade.com/path',
    })),
  }}
/>
```

---

## Sitemaps

- Ensure all new pages are added to `sitemap.ts`.
- `sitemap.ts` MUST use the full `https://www.edgpatioshade.com` domain.

---

## Robots.txt

- Ensure `robots.ts` points to the correct sitemap location on the canonical domain.

---

## Pre-Deployment Checklist

Before deploying any new page:

- [ ] Page does NOT use `'use client'` (unless absolutely necessary)
- [ ] Page exports metadata with title, description, and canonical
- [ ] Page has proper JSON-LD schema
- [ ] Page content is 800+ words (for service areas)
- [ ] Page is added to `sitemap.ts`
- [ ] Build passes: `npm run build`
- [ ] Tests pass: `npm run test:e2e`
