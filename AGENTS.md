# EDG Outdoor Living Website - Agent Guide

> **Project:** edgdirectresponsev3  
> **Type:** Next.js Marketing Website  
> **Language:** TypeScript (English)

---

## Project Overview

This is the marketing website for **EDG Outdoor Living**, a company specializing in premium motorized pergolas, exterior shades, and glass enclosures. The website serves the Chicago to Milwaukee corridor with nationwide design and supply availability.

The site is built as a **Next.js 16** application using the **App Router** architecture, deployed on Vercel. It features comprehensive SEO optimization, lead capture systems, analytics integration, and an extensive network of service area landing pages.

### Key Business Context

- **Primary Service Areas:** Lake County IL, North Shore Chicago, McHenry County IL, Southeast Wisconsin, Sanibel/Captiva FL
- **Product Categories:** Pergolas, Shades, Glass Enclosures, Outdoor Appliances
- **Target Audiences:** Homeowners, hospitality/commercial clients, trade professionals
- **Lead Capture:** Free planning guide download, contact forms, phone calls

---

## Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 16.0.10 |
| Runtime | React | 19.2.1 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Font | Inter (Google Fonts) | - |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | - |

### Backend & Data

| Service | Purpose |
|---------|---------|
| Supabase | Lead storage (PostgreSQL) |
| Resend | Email notifications |
| Vercel Analytics | Performance monitoring |
| Vercel Speed Insights | Core Web Vitals tracking |
| Google Tag Manager | Tracking & conversions (GTM-MJWNZD3F) |

---

## Build and Test Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Build & Deploy
npm run build        # Generate gallery data + production build
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint (Next.js config with TypeScript)
npm run format       # Format with Prettier

# Testing
npm run test:e2e     # Run Playwright smoke tests

# Code Generation
npm run generate     # Run Plop to generate new pages from templates
```

### Pre-Build Script

The `generate-gallery-data.mjs` script runs before every build. It:
- Scans `/public/images` for image files
- Extracts metadata (width, height) using Sharp
- Generates `src/data/gallery-images.json` for the gallery component

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── analytics/     # Lead analytics dashboard endpoint
│   │   └── leads/         # Lead submission endpoint (POST/GET)
│   ├── admin/             # Admin dashboard (SEO dashboard)
│   ├── systems/           # Product category pages (pergolas, shades, enclosures, appliances)
│   ├── service-areas/     # Location-based landing pages
│   │   ├── lake-county-il/
│   │   ├── mchenry-county-il/
│   │   ├── north-shore-chicago/
│   │   ├── southeast-wisconsin/
│   │   ├── naperville-il/
│   │   ├── barrington-il/
│   │   ├── oak-brook-il/
│   │   ├── lake-geneva-wi/
│   │   ├── hinsdale-il/
│   │   ├── sanibel-outdoor-living/
│   │   ├── northbrook-il/
│   │   ├── wilmette-il/
│   │   └── winnetka-il/
│   ├── commercial/        # Commercial/hospitality pages
│   ├── guides/            # Educational content & planning guide
│   ├── projects/          # Project case studies (static + dynamic)
│   ├── gallery/           # Photo gallery
│   ├── design/            # Design consultation page
│   ├── price/             # Pricing information
│   ├── pro/               # Trade professionals portal
│   ├── contact/           # Contact form
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Tailwind + theme variables
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # robots.txt generation
│   ├── not-found.tsx      # 404 page
│   └── error.tsx          # Error boundary
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Primary/secondary/ghost variants
│   │   ├── Container.tsx  # Max-width container
│   │   ├── Section.tsx    # Page section wrapper
│   │   ├── FadeIn.tsx     # Scroll animation wrapper
│   │   ├── Link.tsx       # Custom Link component
│   │   ├── TrackedLink.tsx      # GTM-tracked link
│   │   └── TrackedPhoneLink.tsx # GTM-tracked phone link
│   ├── layout/            # Navbar, Footer
│   └── features/          # Page-specific components
│       ├── contact/
│       ├── gallery/
│       ├── home/
│       └── service-area/
├── data/
│   ├── homepage.ts        # Homepage content data
│   └── gallery-images.json # Auto-generated image manifest
├── hooks/
│   └── useLeadSubmission.ts # Lead form submission hook
├── lib/
│   ├── utils.ts           # cn() utility for Tailwind class merging
│   ├── schema.ts          # JSON-LD schemas (LocalBusiness, FAQ, Service)
│   └── projects.ts        # Project data and utilities
└── middleware.ts          # Domain redirects (www enforcement)
```

### Key Files Reference

| File | Purpose |
|------|---------|
| `next.config.ts` | Redirects (100+ legacy URLs), image domains |
| `src/lib/schema.ts` | JSON-LD schemas (LocalBusiness, FAQ, Service) |
| `src/lib/utils.ts` | `cn()` utility for Tailwind class merging |
| `src/lib/projects.ts` | Project case study data |
| `src/middleware.ts` | Redirects non-www to www |
| `src/data/homepage.ts` | Homepage content configuration |
| `src/data/gallery-images.json` | Auto-generated image manifest |
| `scripts/generate-gallery-data.mjs` | Pre-build gallery generation |

---

## Code Style Guidelines

### TypeScript Conventions

- **Strict mode enabled** - all code must be type-safe
- Use `interface` for object shapes, `type` for unions/complex types
- Props interfaces named with `Props` suffix (e.g., `ButtonProps`)
- Use path alias `@/` for all imports from `src/`
- Prefer explicit return types for exported functions

```typescript
// Good
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  title: string;
  description?: string;
}
```

### React Conventions

- Use **function declarations** for components (not arrow functions)
- Client components marked with `'use client'` at top
- Server components preferred by default
- Use `ref` prop pattern for component refs (forwardRef not needed in React 19)
- Keep components in their own files with matching names

```typescript
'use client';  // When using hooks or browser APIs

export function ComponentName({ prop }: Props) {
  return <div />;
}
```

### Styling Conventions

- Use **Tailwind CSS v4** exclusively (no inline styles)
- Custom brand colors defined in `globals.css`:
  - `--color-edg-brand: #42ffc1` (mint green - primary CTA)
  - `--color-edg-brand-text: #008a5c` (dark green)
  - `--color-edg-dark: #0a0a0a` (near black)
  - `--color-edg-light: #fafafa` (off white)
  - `--color-edg-gray: #a1a1aa` (medium gray)
  - `--color-edg-gray-text: #52525b` (text gray)
- Use `cn()` utility for conditional class merging
- Container component used for consistent max-width (max-w-7xl)
- Section component used for page section wrappers

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
- **Files:** kebab-case for non-component files

### Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

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
- [ ] All internal links work correctly

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
   - Admin key stored in localStorage for dashboard access

3. **Middleware Protection**
   - WordPress attack vectors blocked (302 redirects)
   - XML-RPC, wp-admin, wp-login blocked
   - See: `next.config.ts` redirects section

4. **Domain Enforcement**
   - Non-www redirects to www (301 permanent)
   - HTTPS enforced via middleware

5. **CORS & CSRF**
   - API routes validate content-type
   - CSRF protection via same-origin policy

### Sensitive Data Handling

- Lead data stored in Supabase PostgreSQL
- Email notifications sent via Resend API
- No PII in logs (email is logged only for spam detection)
- Admin dashboard requires authentication

---

## Creating New Pages

### Using Plop Generator

```bash
npm run generate
# Select "page"
# Enter: Page Name, Route path, SEO Description
```

Template location: `templates/page.hbs`

### Manual Page Creation

For service area pages:

```typescript
// src/app/service-areas/[location]/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Location | EDG Outdoor Living',
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
5. Add JSON-LD schema if relevant (see `src/lib/schema.ts`)

---

## SEO & Schema Requirements

### JSON-LD Schemas

Use helpers from `src/lib/schema.ts`:

```typescript
import { generateServiceSchema, generateFAQSchema, localBusinessSchema } from '@/lib/schema';

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

Available schemas:
- `localBusinessSchema` - Organization info (in layout.tsx)
- `generateServiceSchema()` - Individual service pages
- `generateFAQSchema()` - FAQ pages

### Redirects

All legacy URL redirects are in `next.config.ts`. When migrating old content:

```typescript
{
  source: '/old-url',
  destination: '/new-url',
  permanent: true,  // 301 for permanent, false for 302
}
```

### Sitemap

Dynamic sitemap generated in `src/app/sitemap.ts`. Add new pages to the `routes` array.

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
- `phone_click` - Phone number clicks (TrackedPhoneLink component)
- `book_call_click` - "Book a Call" button clicks (TrackedLink component)
- `generate_lead` - Form submissions (useLeadSubmission hook)

### Admin Dashboard

Access at `/admin/seo-dashboard` to view:
- Lead statistics by period (7d, 30d, 90d, 1y)
- Leads by source, customer type, project type, location
- Recent leads table
- Daily breakdown charts

---

## Image Guidelines

### Optimization

- Use `sharp` for image processing
- Original images go in `/public/images/`
- Run `node scripts/optimize-images.mjs` for batch optimization
- Gallery images auto-processed at build time

### Gallery Images

Auto-processed by `generate-gallery-data.mjs`. Images must:
- Be in `/public/images/` subdirectories
- Formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- Have descriptive filenames (used for alt text generation)

### Remote Images

Allowed domains (in `next.config.ts`):
- `images.unsplash.com`
- `image.pollinations.ai`

---

## Data Management

### Homepage Content

Edit `src/data/homepage.ts` to update:
- Social proof stats
- Hero video/poster
- System cards (pergolas, shades, enclosures)
- Value propositions
- Guide offer content
- Pathway cards (design, price, pro, commercial)

### Projects

Edit `src/lib/projects.ts` to add/modify case studies:
- Each project has slug, title, location, type, systems
- Gallery images, hero image, card image
- Challenge, solution, results, specs, testimonial
- Related projects for cross-linking
- Optional serviceAreaSlug for location linking

### Lead Capture

Form submission flow:
1. User submits form → `useLeadSubmission` hook
2. POST to `/api/leads` with lead data
3. Server validates (honeypot check)
4. Insert into Supabase `leads` table
5. Send email notification via Resend
6. Return success/failure to client
7. Track conversion in GTM dataLayer

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
- [ ] Images optimized if adding new assets

---

## Troubleshooting

### Build Failures

| Issue | Solution |
|-------|----------|
| Gallery data missing | Ensure images exist in `/public/images/`, run `node scripts/generate-gallery-data.mjs` |
| Type errors | Check `tsconfig.json` includes new files |
| Env var errors | Verify all required env vars in `.env.local` |
| Sharp errors | Rebuild native modules: `npm rebuild sharp` |

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
- Ensure PostCSS config is correct

**Admin dashboard not loading:**
- Verify `ADMIN_API_KEY` is set
- Check localStorage for stored admin key
- Verify API endpoint returns 200 with valid key

---

## Resources

- **Design System:** Uses custom EDG brand colors (mint green accent)
- **Component Library:** Custom UI components in `src/components/ui/`
- **Documentation:** 
  - Next.js docs: https://nextjs.org/docs
  - Tailwind v4: https://tailwindcss.com/docs/v4-beta
  - React 19: https://react.dev

---

## File Count Summary

- **Total TypeScript/TSX files:** ~90
- **Pages/Routes:** 50+ (including nested service area pages)
- **UI Components:** 8 reusable components
- **API Routes:** 2 (leads, analytics)
- **Scripts:** 5 (gallery generation, image optimization, service area registration)

---

*Last updated: February 2026*
