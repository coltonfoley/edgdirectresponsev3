# EDG Patio & Shade Website - Agent Guide

> **Project:** edgdirectresponsev3  
> **Type:** Next.js Marketing Website  
> **Language:** TypeScript (English)  
> **Last Updated:** 2026-02-09

---

## Project Overview

This is the marketing website for **EDG Patio & Shade** (also referred to as EDG Outdoor Living), a company specializing in premium motorized pergolas, exterior shades, and glass enclosures. The website serves the Chicago to Milwaukee corridor with nationwide design and supply availability.

### Business Context

- **Primary Service Areas:** Lake County IL, North Shore Chicago (Wilmette, Winnetka, Glencoe), McHenry County IL, Southeast Wisconsin (Lake Geneva, Kenosha, Racine), Sanibel/Captiva FL
- **Product Categories:** Pergolas, Shades, Glass Enclosures, Outdoor Appliances, Heating Systems, Furniture, Umbrellas
- **Target Audiences:** Homeowners, hospitality/commercial clients, trade professionals (architects, designers, builders)
- **Lead Capture:** Free planning guide download, contact forms, phone calls
- **Showroom Location:** 1802 Holian Drive, Spring Grove, IL 60081

---

## Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 16.0.10 |
| Runtime | React | 19.2.1 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x (new @theme syntax) |
| Font | Barlow (Google Fonts) | - |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | - |

### Backend & Data Services

| Service | Purpose |
|---------|---------|
| Supabase | Lead storage (PostgreSQL) |
| Resend | Email notifications for leads |
| Vercel Analytics | Performance monitoring |
| Vercel Speed Insights | Core Web Vitals tracking |
| Google Tag Manager | Conversion tracking (GTM-MJWNZD3F) |

---

## Build and Test Commands

```bash
# Development
npm run dev              # Start development server on localhost:3000

# Build & Deploy
npm run build            # Generate gallery data + production build
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint (Next.js config with TypeScript)
npm run format           # Format with Prettier

# Testing
npm run test:e2e         # Run Playwright smoke tests

# Code Generation
npm run generate         # Run Plop to generate new pages from templates
```

### Pre-Build Script

The `scripts/generate-gallery-data.mjs` script runs before every build. It:
- Scans `/public/images` for image files (jpg, jpeg, png, webp, avif)
- Extracts metadata (width, height) using Sharp
- Generates `src/data/gallery-images.json` for the gallery component

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/                     # API Routes
│   │   ├── analytics/route.ts   # Lead analytics dashboard (admin only)
│   │   └── leads/route.ts       # Lead submission endpoint
│   ├── admin/                   # Admin dashboard (SEO dashboard)
│   ├── commercial/              # Commercial/hospitality pages
│   ├── guides/                  # Educational content & planning guide
│   ├── locations/               # Location-specific landing pages
│   ├── projects/                # Portfolio/case studies
│   │   ├── page.tsx             # Projects listing
│   │   └── [slug]/page.tsx      # Individual project detail
│   ├── service-areas/           # Location-based landing pages
│   │   ├── page.tsx             # Service areas index
│   │   └── [area]/              # Individual service area pages
│   │       ├── page.tsx
│   │       ├── motorized-pergolas/
│   │       └── zoning-guide/
│   ├── systems/                 # Product category pages
│   │   ├── page.tsx             # Systems overview
│   │   ├── pergolas/
│   │   ├── shades/
│   │   ├── enclosures/
│   │   ├── appliances/
│   │   ├── heating/
│   │   ├── furniture/
│   │   └── umbrellas/
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Tailwind v4 + theme variables
│   ├── page.tsx                 # Homepage
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── robots.ts                # robots.txt
│   ├── error.tsx                # Error boundary
│   └── not-found.tsx            # 404 page
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx           # Primary CTA button
│   │   ├── Container.tsx        # Max-width wrapper
│   │   ├── Section.tsx          # Section wrapper with padding
│   │   ├── FadeIn.tsx           # Framer Motion animation wrapper
│   │   ├── Link.tsx             # Custom Link component
│   │   ├── TrackedLink.tsx      # Link with GTM conversion tracking
│   │   └── TrackedPhoneLink.tsx # Phone link with conversion tracking
│   ├── layout/                  # Navbar, Footer
│   └── features/                # Page-specific components
│       ├── contact/
│       ├── gallery/
│       ├── home/
│       └── service-area/
├── data/                        # Static data
│   ├── gallery-images.json      # Auto-generated by build script
│   └── homepage.ts              # Homepage content
├── hooks/                       # Custom React hooks
│   └── useLeadSubmission.ts     # Lead form submission hook
├── lib/                         # Utilities & schemas
│   ├── utils.ts                 # cn() utility for Tailwind
│   ├── schema.ts                # JSON-LD schema generators
│   └── projects.ts              # Project/case study data
└── middleware.ts                # Domain redirects (www enforcement)
```

### Key Files Reference

| File | Purpose |
|------|---------|
| `next.config.ts` | 100+ redirects from legacy WordPress URLs, image domains |
| `src/lib/schema.ts` | JSON-LD schemas (LocalBusiness, Service, FAQ) |
| `src/lib/utils.ts` | `cn()` utility for Tailwind class merging |
| `src/middleware.ts` | Redirects non-www to www (301) |
| `plopfile.js` | Code generation configuration |
| `templates/page.hbs` | Handlebars template for new pages |

---

## Code Style Guidelines

### TypeScript Conventions

- **Strict mode enabled** - all code must be type-safe
- Use `interface` for object shapes, `type` for unions/complex types
- Props interfaces named without `Props` suffix (e.g., `ButtonProps`)
- Use path alias `@/` for all imports from `src/`

```typescript
// Good
import { Button } from '@/components/ui/Button';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}
```

### React Conventions

- Use **function declarations** for components
- Client components marked with `'use client'` at top
- Server components preferred by default
- Use `ref` prop pattern for component refs (React 19 style)

```typescript
'use client';  // When using hooks or browser APIs

export function ComponentName({ prop }: ButtonProps) {
  return <div />;
}
```

### Styling Conventions

- Use **Tailwind CSS v4** exclusively (no traditional config file)
- Custom brand colors defined in `globals.css` using `@theme`:
  - `--color-edg-brand: #42ffc1` (mint green accent)
  - `--color-edg-brand-text: #000000` (black text on mint)
  - `--color-edg-dark: #000000` (true black)
  - `--color-edg-light: #ffffff` (true white)
  - `--color-edg-gray: #71717a` (zinc 500)
  - `--color-edg-gray-light: #f4f4f5` (zinc 100)
- Use `cn()` utility for conditional class merging
- Container component used for consistent max-width (max-w-7xl)
- **No rounded corners** on primary UI elements (rounded-none preferred)
- **Uppercase tracking-wider** for labels and CTAs

```typescript
// Pattern for conditional classes
className={cn(
  'base-classes',
  {
    'conditional-class': condition,
    'another-class': otherCondition,
  },
  className  // Allow override
)}
```

### Naming Conventions

- **Components:** PascalCase (`ContactForm.tsx`)
- **Hooks:** camelCase with `use` prefix (`useLeadSubmission.ts`)
- **Utilities:** camelCase (`formatDate.ts`)
- **Routes:** kebab-case (`service-areas/naperville-il`)

---

## Testing Instructions

### E2E Tests (Playwright)

Location: `e2e/smoke.spec.ts`

Tests verify all routes from sitemap return 200 OK:

```bash
# Run tests (starts dev server automatically)
npm run test:e2e

# With UI
npx playwright test --ui
```

When adding new pages:
1. Add route to `e2e/smoke.spec.ts` `routes` array
2. Add route to `src/app/sitemap.ts` for SEO

### Manual Testing Checklist

- [ ] Page loads without console errors
- [ ] Meta tags render correctly (use browser dev tools)
- [ ] Mobile responsive (test 320px, 768px, 1024px+)
- [ ] Phone links trigger `dataLayer.push` for GTM
- [ ] Forms validate and show error states
- [ ] Dark mode classes render correctly

---

## Security Considerations

### Environment Variables Required

```bash
# Supabase (Required for leads)
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

# Email Notifications (Required)
RESEND_API_KEY=
NOTIFICATION_EMAIL=cfoley@edgpatioshade.com
FROM_EMAIL=EDG Leads <notifications@email.edgpatioshade.com>

# Admin API (Required in production)
ADMIN_API_KEY=

# Optional
SUPABASE_ANON_KEY=
```

### Security Measures

1. **Honeypot Spam Protection**
   - Hidden `fax` field in lead forms
   - If filled, request is silently dropped with fake success
   - Located in: `src/app/api/leads/route.ts`

2. **API Authentication**
   - Admin endpoints require `x-admin-key` header
   - No fallback keys in production (`NODE_ENV === 'production'`)
   - GET /api/leads requires auth
   - GET /api/analytics requires auth

3. **Middleware Protection**
   - WordPress attack vectors blocked (302 redirects)
   - XML-RPC, wp-admin, wp-login blocked
   - See: `next.config.ts` redirects section

4. **Domain Enforcement**
   - Non-www redirects to www (301 permanent)
   - HTTPS enforced via middleware

### Sensitive Data Handling

- Lead data stored in Supabase PostgreSQL
- Email notifications sent via Resend API
- No PII in logs (email is logged only for spam detection)

---

## Creating New Pages

### Using Plop Generator

```bash
npm run generate
# Select "page"
# Enter: Page Name, Route path, SEO Description
```

### Manual Page Creation

For service area pages:

```typescript
// src/app/service-areas/[location]/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Location | EDG Patio & Shade',
  description: '...',
  alternates: { canonical: '/service-areas/location' },
};

export default function LocationPage() {
  return (
    <main>
      <h1>Location Outdoor Living</h1>
      {/* Use existing UI components */}
    </main>
  );
}
```

### Required for Every Page

1. Metadata with `title`, `description`, `alternates.canonical`
2. Add to `src/app/sitemap.ts`
3. Add to `e2e/smoke.spec.ts` routes array
4. Update Navbar/Footer links if needed

---

## SEO & Schema Requirements

### JSON-LD Schemas

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

### Metadata Template

```typescript
export const metadata: Metadata = {
  title: 'Page Title | EDG Patio & Shade',
  description: 'Page description for SEO...',
  alternates: { canonical: '/page-path' },
  openGraph: {
    title: 'Page Title | EDG Outdoor Living',
    description: 'Page description...',
  },
};
```

### Redirects

All legacy URL redirects are in `next.config.ts`. When migrating old content:

```typescript
{
  source: '/old-url',
  destination: '/new-url',
  permanent: true,  // 301 for permanent, false for 302
}
```

---

## Analytics Integration

### Google Tag Manager

- GTM ID: `GTM-MJWNZD3F`
- Initialized in `src/app/layout.tsx` via `@next/third-parties`

### Conversion Events

Push to `dataLayer` for important actions:

```typescript
(window as any).dataLayer?.push({
  event: 'conversion_event',
  conversion_name: 'phone_click',  // or 'book_call_click'
  value: 0,
});
```

Tracked conversions:
- `phone_click` - Phone number clicks
- `book_call_click` - "Book a Call" / "Start Project" button clicks
- `generate_lead` - Form submissions (handled in useLeadSubmission hook)

### Tracked Components

Use `TrackedLink` and `TrackedPhoneLink` components for automatic conversion tracking:

```typescript
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

<TrackedLink href="/contact">Book Consultation</TrackedLink>
<TrackedPhoneLink href="tel:+18155810138">(815) 581-0138</TrackedPhoneLink>
```

---

## Image Guidelines

### Optimization

- Use `sharp` for image processing
- Original images go in `/public/images/`
- Run `node scripts/optimize-images.mjs` for batch optimization (if available)

### Gallery Images

Auto-processed by build script. Images must:
- Be in `/public/images/` subdirectories
- Formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- Have descriptive filenames (used for alt text generation)

### Remote Images

Allowed domains (in `next.config.ts`):
- `images.unsplash.com`
- `image.pollinations.ai`

---

## Deployment

### Platform: Vercel

Production URL: `https://www.edgpatioshade.com`

### Environment Setup

1. Set all environment variables in Vercel dashboard
2. Build command uses `npm run build` (includes gallery generation)
3. Output is static + serverless functions

### Pre-Deployment Checklist

- [ ] `npm run build` succeeds locally
- [ ] `npm run test:e2e` passes
- [ ] No ESLint errors (`npm run lint`)
- [ ] New pages added to sitemap and smoke tests
- [ ] Environment variables configured in Vercel

---

## Troubleshooting

### Build Failures

| Issue | Solution |
|-------|----------|
| Gallery data missing | Ensure images exist in `/public/images/`, run `node scripts/generate-gallery-data.mjs` |
| Type errors | Check `tsconfig.json` includes new files |
| Env var errors | Verify all required env vars in `.env.local` |

### Common Issues

**Images not loading in gallery:**
- Check `src/data/gallery-images.json` exists
- Verify image paths in public directory
- Run build script to regenerate

**Lead form not submitting:**
- Check Supabase credentials
- Verify `SUPABASE_SERVICE_ROLE_KEY` (not anon key)
- Check browser console for CORS errors

**Styles not applying:**
- Tailwind v4 uses `@import 'tailwindcss'` not directives
- Check `globals.css` for theme variable definitions

---

## Resources

- **Design System:** Uses custom EDG brand colors (mint green accent)
- **Component Library:** Custom UI components in `src/components/ui/`
- **Documentation:** Next.js docs at https://nextjs.org/docs
- **Tailwind v4:** https://tailwindcss.com/docs/v4-beta
