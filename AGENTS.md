# EDG Patio & Shade Website - Agent Guide

> **Project:** edgdirectresponsev3  
> **Type:** Next.js Marketing Website  
> **Language:** TypeScript (English)  
> **Last Updated:** 2026-02-10

---

## Quick Start

**New to this project?** Start here:

1. **Project Overview** - Read this file (you are here)
2. **Global Rules** - [`.agent/constraints/GLOBAL.md`](.agent/constraints/GLOBAL.md) - Critical constraints for ALL pages
3. **Workflows** - [`.agent/workflow/`](.agent/workflow/) - Step-by-step guides
4. **Patterns** - [`.agent/patterns/`](.agent/patterns/) - Component APIs and architecture

---

## Project Overview

Marketing website for **EDG Patio & Shade**, specializing in premium motorized pergolas, exterior shades, and glass enclosures. Serves the Chicago to Milwaukee corridor with nationwide design and supply.

### Business Context

- **Primary Service Areas:** Lake County IL, North Shore Chicago, McHenry County IL, Southeast Wisconsin, Sanibel/Captiva FL
- **Product Categories:** Pergolas, Shades, Glass Enclosures, Outdoor Appliances, Heating Systems, Furniture, Umbrellas
- **Target Audiences:** Homeowners, hospitality/commercial clients, trade professionals
- **Lead Capture:** Free planning guide download, contact forms, phone calls
- **Showroom:** 1802 Holian Drive, Spring Grove, IL 60081
- **Phone:** 815-581-0138

---

## Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 16.0.10 |
| Runtime | React | 19.2.1 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Font | Barlow (Google Fonts) | - |
| Animation | Framer Motion | 12.x |

### Backend & Data

| Service | Purpose |
|---------|---------|
| Supabase | Lead storage (PostgreSQL) |
| Resend | Email notifications |
| Vercel Analytics | Performance monitoring |
| Google Tag Manager | Conversion tracking (GTM-MJWNZD3F) |

---

## Commands Reference

```bash
# Development
npm run dev                    # localhost:3000

# Building
npm run build                  # Production build + gallery generation
npm start                      # Production server

# Quality
npm run lint                   # ESLint
npm run format                 # Prettier
npm run test:e2e              # Playwright tests

# Generation
npm run generate               # Plop page generator
```

---

## Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── api/                  # API routes (leads, analytics)
│   ├── (routes)/             # Grouped routes
│   ├── admin/                # SEO dashboard
│   ├── commercial/           # Hospitality/commercial pages
│   ├── guides/               # Educational content
│   ├── locations/            # Location pages
│   ├── projects/             # Portfolio/case studies
│   ├── service-areas/        # Location landing pages
│   │   ├── page.tsx          # Service areas index
│   │   └── [area]/           # Individual areas
│   │       ├── page.tsx      # Hub page
│   │       ├── zoning-guide/ # Zoning spoke
│   │       └── [product]/    # Product spoke
│   ├── systems/              # Product category pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/                   # UI primitives (Button, Container, etc.)
│   ├── layout/               # Navbar, Footer
│   └── features/             # Page-specific features
├── lib/
│   ├── projects.ts           # Project registry
│   ├── schema.ts             # JSON-LD helpers
│   └── utils.ts              # Utilities (cn function)
└── data/
    └── gallery-images.json   # Auto-generated
```

---

## Documentation Structure

### Constraints (MUST Follow)

| File | Purpose |
|------|---------|
| [`.agent/constraints/GLOBAL.md`](.agent/constraints/GLOBAL.md) | Rules for ALL pages (metadata, 'use client', images) |
| [`.agent/constraints/SERVICE_AREA.md`](.agent/constraints/SERVICE_AREA.md) | Hub pages: 800+ words, 4 neighborhoods, FAQ |
| [`.agent/constraints/SERVICE_AREA_ZONING.md`](.agent/constraints/SERVICE_AREA_ZONING.md) | Zoning guides: permits, setbacks, 50% rule |
| [`.agent/constraints/SERVICE_AREA_PRODUCT.md`](.agent/constraints/SERVICE_AREA_PRODUCT.md) | Product spokes: local benefits, 700+ words |
| [`.agent/constraints/PROJECT.md`](.agent/constraints/PROJECT.md) | Case studies: challenge/solution/result |
| [`.agent/constraints/SYSTEM.md`](.agent/constraints/SYSTEM.md) | Product pages: specs, gallery, 900+ words |

### Workflows (Step-by-Step)

| File | Use When |
|------|----------|
| [`.agent/workflow/new-service-area.md`](.agent/workflow/new-service-area.md) | Creating new location cluster (hub + zoning + product) |
| [`.agent/workflow/new-project.md`](.agent/workflow/new-project.md) | Adding portfolio project |
| [`.agent/workflow/validation.md`](.agent/workflow/validation.md) | Pre-deployment checks |

### Patterns (How To)

| File | Contains |
|------|----------|
| [`.agent/patterns/components.md`](.agent/patterns/components.md) | Container, Button, Image APIs |
| [`.agent/patterns/architecture.md`](.agent/patterns/architecture.md) | Server/Client patterns, file structure |
| [`.agent/patterns/images.md`](.agent/patterns/images.md) | Image management system, registry usage |

---

## Critical Rules (Summary)

### 1. 'use client' Kills SEO

**NEVER** use `'use client'` in `page.tsx` files. Client Components cannot export metadata.

**Correct Pattern:**
```typescript
// page.tsx (Server Component)
export const metadata = { title: 'Page' };
export default function Page() {
  return <ContactFormClient />; // Only client part hydrates
}

// ContactFormClient.tsx
'use client';
export function ContactFormClient() { ... }
```

**See:** [`.agent/constraints/GLOBAL.md`](.agent/constraints/GLOBAL.md)

### 2. Every Page Needs Metadata

```typescript
export const metadata: Metadata = {
  title: 'Page Title | EDG Patio & Shade',
  description: '150-160 character description',
  alternates: { canonical: '/exact-path' }, // REQUIRED
};
```

### 3. Always Use next/image

```typescript
// WRONG
<div style={{ backgroundImage: `url('${image}')` }} />

// CORRECT
<Image src={image} alt="..." fill className="object-cover" />
```

### 4. Service Areas: 800+ Words, 4 Neighborhoods

Every service area hub MUST have:
- 800+ words
- 4 neighborhood sections with specific streets
- FAQ section with 3+ questions
- Schema markup

**See:** [`.agent/constraints/SERVICE_AREA.md`](.agent/constraints/SERVICE_AREA.md)

---

## Image Management (CRITICAL)

All images MUST be managed through the centralized registry. **Never hardcode image paths.**

### Quick Reference

```typescript
// ✅ CORRECT - Use the registry
import * as images from '@/lib/images';

<Image src={images.brand.hero.pergola} alt="..." />
<Image src={images.pages.pro.blackBlade} alt="..." />
<ProductGallery items={images.galleries.pergolas} />
```

```typescript
// ❌ WRONG - Never hardcode paths
<Image src="/images/brand/hero-pergola.jpg" alt="..." />
```

### Image Registry Structure

| Category | Usage | Example |
|----------|-------|---------|
| `images.brand.hero.*` | Hero section images | `images.brand.hero.pergola` |
| `images.brand.detail.*` | Feature close-ups | `images.brand.detail.louver` |
| `images.brand.context.*` | Lifestyle/environment | `images.brand.context.pool` |
| `images.projects.*` | Project galleries | `images.projects.lakeForest.hero` |
| `images.pages.*` | Page-specific images | `images.pages.pro.blackBlade` |
| `images.galleries.*` | Pre-built arrays | `images.galleries.pergolas` |

### Adding New Images

1. Add image to `public/images/{folder}/`
2. Register in `src/lib/images.ts`
3. Run `npm run validate-images`

**Full documentation:** [`.agent/patterns/images.md`](.agent/patterns/images.md)

---

## Common Tasks

### Create New Service Area

```bash
# Follow complete workflow
# See: .agent/workflow/new-service-area.md

npm run generate -- --name "City Outdoor Living" --route "service-areas/city-il" --description "..."
# Then expand content per constraints
```

### Add New Project

```bash
# See: .agent/workflow/new-project.md

# 1. Add to src/lib/projects.ts
# 2. Create page at app/projects/[slug]/page.tsx
# 3. Add images to public/images/projects/[slug]/
# 4. Update sitemap
```

### Before Every Deployment

```bash
# See: .agent/workflow/validation.md

npm run format
npm run build
npm run test:e2e
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `next.config.ts` | Redirects (100+ legacy URLs), image domains, security headers |
| `src/lib/images.ts` | Image registry (ALL images) |
| `src/lib/schema.ts` | JSON-LD schema generators |
| `src/lib/projects.ts` | Project registry |
| `src/lib/utils.ts` | `cn()` Tailwind class merger |
| `src/middleware.ts` | Domain redirects (www enforcement) |
| `src/app/sitemap.ts` | SEO sitemap |

---

## Validation Commands

```bash
# Check for 'use client' on pages (should be empty)
grep -l "'use client'" src/app/**/page.tsx src/app/**/**/page.tsx 2>/dev/null

# Check for missing canonical
grep -rL "alternates:" src/app/**/page.tsx 2>/dev/null

# Full validation
npm run build && npm run test:e2e
```

---

## Contact & Resources

- **Production URL:** https://www.edgpatioshade.com
- **Vercel Dashboard:** (project dashboard)
- **Google Search Console:** (GSC property)
- **Design System:** Tailwind v4 with custom EDG brand colors
  - `--color-edg-brand: #42ffc1` (mint green)
  - `--color-edg-brand-text: #008a5c` (dark green)
