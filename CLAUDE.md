# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **EDG Patio & Shade** - premium motorized pergolas, exterior shades, and glass enclosures serving Chicago to Milwaukee corridor with nationwide design/supply.

## Commands

```bash
npm run dev              # Development server (localhost:3000)
npm run build            # Production build (validates images + generates gallery data)
npm run lint             # ESLint
npm run format           # Prettier
npm run test:e2e         # Playwright tests
npm run generate         # Plop code generator for new pages
npm run validate-images  # Verify all referenced images exist
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router
- **React 19**, TypeScript 5, Tailwind CSS 4
- **Supabase** for lead storage, **Resend** for email
- **Framer Motion** for animations, **Lucide** for icons

### Directory Structure
```
src/
├── app/                    # App Router pages
│   ├── api/leads/         # Lead capture endpoint with Resend integration
│   ├── service-areas/     # Hub-and-spoke local SEO pages
│   │   └── [area]/        # Hub page (800+ words required)
│   │       └── [product]/ # Product spoke pages
│   ├── systems/           # Product category pages
│   ├── projects/          # Portfolio case studies
│   └── guides/            # Educational content (lead magnets)
├── components/
│   ├── ui/                # Reusable primitives (Button, Container, Card)
│   ├── layout/            # Navbar, Footer
│   └── features/          # Page-specific components
├── lib/
│   ├── images.ts          # SINGLE SOURCE OF TRUTH for all image paths
│   ├── projects.ts        # Project data access
│   ├── schema.ts          # JSON-LD structured data generators
│   └── utils.ts           # Utilities (cn for class merging)
└── data/
    └── gallery-images.json  # Auto-generated from public/images/
```

### Path Alias
`@/*` maps to `src/*`

## Critical Rules

### 1. Never Use 'use client' in page.tsx
Client components cannot export metadata, killing SEO. Extract interactive parts into separate client components.

```typescript
// page.tsx - Server Component (exports metadata)
export const metadata = { title: 'Page' };
export default function Page() {
  return <ClientFormWrapper />;  // Interactive part only
}

// ClientFormWrapper.tsx
'use client';
export function ClientFormWrapper() { ... }
```

### 2. Image Registry - Never Hardcode Paths
All images must come from `src/lib/images.ts`:

```typescript
import * as images from '@/lib/images';

// Correct
<Image src={images.brand.hero.pergola} alt="..." />

// Wrong - will not be validated
<Image src="/images/brand/hero-pergola.jpg" alt="..." />
```

### 3. Metadata Required on Every Page
```typescript
export const metadata: Metadata = {
  title: 'Page Title | EDG Patio & Shade',
  description: '150-160 chars',
  alternates: { canonical: '/exact-path' },  // Required
};
```

### 4. Service Area Content Requirements
- Hub pages: 800+ words, 4 neighborhoods, FAQ section
- Product spokes: 700+ words minimum

## API Routes

**POST /api/leads** - Lead capture with:
- Rate limiting (5 req/min per IP)
- Honeypot spam protection (`fax` field)
- Rainmaker lead intake when `RAINMAKER_BASE_URL`/`RAINMAKER_LEAD_INTAKE_URL` and `RAINMAKER_API_KEY` are configured
- Supabase fallback during migration when Supabase env vars are still configured
- Resend email notifications + 7-day follow-up scheduling
- Source tracking for ROI

## Extended Documentation

Detailed agent guidelines exist in `.agent/`:
- `.agent/constraints/GLOBAL.md` - Rules for all pages
- `.agent/constraints/SERVICE_AREA.md` - Hub page requirements
- `.agent/patterns/images.md` - Image management system
- `.agent/workflow/` - Step-by-step task guides

Also see `AGENTS.md` in the project root for comprehensive overview.
