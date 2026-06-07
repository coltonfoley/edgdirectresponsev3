# Global Constraints (Applies to ALL Pages)

> **Critical rules that must be followed on every page.**

---

## 1. Metadata Requirements (CRITICAL)

Every page MUST export metadata:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | EDG Patio & Shade',  // 50-60 chars max
  description: 'Compelling description...',  // 150-160 chars
  alternates: {
    canonical: '/exact-url-path',            // MUST be present
  },
};
```

### Title Format
- Service Areas: `[Location] [Product/Service] | EDG Patio & Shade`
- Products: `[Product Name] for [Location] | EDG Patio & Shade`
- Projects: `[Project Name] - [Location] | EDG Patio & Shade`

---

## 2. The 'use client' Rule (CRITICAL)

**NEVER use `'use client'` in `page.tsx` files.**

### Why
- `'use client'` disables metadata exports
- Pages lose SEO (no title, description, canonical)
- This caused 9 pages to have no canonical tags (FIXED)

### Correct Pattern
```typescript
// page.tsx - Server Component (can export metadata)
export const metadata = { title: 'Page Title' };

export default function Page() {
  return (
    <main>
      <Hero />
      <ContactFormClient /> {/* Interactive part only */}
    </main>
  );
}
```

```typescript
// ContactFormClient.tsx - Client Component
'use client';
export function ContactFormClient() {
  const [state, setState] = useState();
  return <form>...</form>;
}
```

---

## 3. Image Requirements (CRITICAL)

### Use the Image Registry - NEVER Hardcode Paths

All images MUST be imported from the centralized registry:

```typescript
// ✅ CORRECT - Type-safe, single source of truth
import * as images from '@/lib/images';

<Image src={images.brand.hero.pergola} alt="..." />
<div style={{ backgroundImage: `url(${images.brand.context.commercial})` }} />
```

```typescript
// ❌ WRONG - String paths are not allowed
<Image src="/images/brand/hero-pergola.jpg" alt="..." />
<div style={{ backgroundImage: "url('/images/brand/context-commercial.jpg')" }} />
```

**Why:**
- TypeScript autocomplete prevents typos
- Change image in one place, updates everywhere
- Build validation ensures images exist
- Easy to find all usages of an image

**Registry file:** `src/lib/images.ts`
**Documentation:** [`.agent/patterns/images.md`](../patterns/images.md)

### ALWAYS Use next/image

```typescript
// WRONG - No optimization, no alt text
<div style={{ backgroundImage: `url('${image}')` }} />

// CORRECT - Optimized, accessible
import Image from 'next/image';

// Hero/LCP image
<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>

// Gallery/inline image
<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 33vw, 20vw"
  loading="lazy"
/>
```

### Alt Text Guidelines
- Describe what's in the image
- Include location for local relevance
- Example: "Louvered pergola installation on elevated deck in Wilmette, IL"

---

## 4. Schema.org Structured Data

Every page SHOULD include relevant schema:

```typescript
// Service Area Hub
<script type="application/ld+json">
{JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'EDG Patio & Shade',
  // ... see specific page type for full schema
})}
</script>
```

### Required Schema by Page Type
- All pages: WebSite (in layout.tsx)
- Service areas: LocalBusiness + Service
- Product pages: Product
- Projects: Project or CreativeWork
- Guides: Article or FAQPage

---

## 5. Internal Linking

Every page MUST have:
- [ ] Breadcrumb navigation (if nested)
- [ ] Link back to parent/service area (for spoke pages)
- [ ] 2+ contextual links to related pages
- [ ] Footer with global navigation

---

## 6. Performance Requirements

- Use `next/image` for all images
- Lazy load below-fold images
- Use `priority` for LCP (hero) images
- Keep initial bundle < 200KB
- Use `loading="lazy"` for gallery images

---

## 7. Accessibility

- All images have descriptive alt text
- Color contrast meets WCAG AA
- Focus states visible
- Semantic HTML (article, section, nav)

---

## Validation Checklist (Before Deployment)

```bash
# Check for pages missing canonical
grep -rL "alternates:" src/app/**/page.tsx 2>/dev/null

# Check for 'use client' on pages
grep -l "'use client'" src/app/**/page.tsx 2>/dev/null

# Check build passes
npm run build

# Check all routes work
npm run test:e2e
```

---

## Quick Reference: Page Structure Template

```typescript
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
// Import Client Components separately

export const metadata: Metadata = {
  title: '...',
  description: '...',
  alternates: { canonical: '/path' },
};

export default function PageName() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <Image ... />
        <Container>
          <h1>...</h1>
        </Container>
      </section>

      {/* Content Sections */}
      <Container>
        {/* Static content - Server Component */}
        <ContentSection />
        
        {/* Interactive - Client Component */}
        <ContactFormClient />
      </Container>
    </main>
  );
}
```
