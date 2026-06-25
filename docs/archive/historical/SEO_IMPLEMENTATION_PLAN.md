# SEO Implementation Plan - 2025 Best Practices

> **Comprehensive plan to achieve 90+/100 SEO score based on 2025 Next.js Local SEO guide**

---

## Executive Summary

**Current Score:** 72/100  
**Target Score:** 90+/100  
**Timeline:** 4 weeks  
**Expected Impact:** +15-25% organic traffic within 3-6 months

### Quick Wins (Week 1)
These fixes require minimal changes but have high SEO impact:
- Add `display: 'swap'` to fonts (5 min)
- Add keywords meta tags (2 hours)
- Add OpenGraph to missing pages (3 hours)
- Fix homepage/shades rendering (4 hours)

### Medium Effort (Weeks 2-3)
- Schema improvements (4 hours)
- Location page enhancements (6 hours)
- Image optimization (4 hours)

### Strategic (Week 4)
- Dynamic routing implementation (8 hours)
- Testing & validation (4 hours)

---

## Phase 1: Critical Fixes (Week 1) - 🔴 HIGH IMPACT

### Task 1.1: Fix Font Loading (LCP Impact)
**File:** `src/app/layout.tsx`  
**Time:** 5 minutes  
**Impact:** HIGH (prevents invisible text, improves LCP)

```typescript
const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap', // ADD THIS
});
```

**Validation:**
- Build passes
- Text remains visible during font load (check in DevTools Network throttling)

---

### Task 1.2: Add Keywords Meta Tags
**Files:** All 24+ page files  
**Time:** 2-3 hours  
**Impact:** HIGH (2025 ranking factor)

**Pattern:**
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: ['motorized pergolas', 'outdoor living', 'chicago', ...], // ADD
  alternates: { canonical: '...' },
};
```

**Per-Page Keywords:**

| Page | Keywords |
|------|----------|
| Homepage | `motorized pergolas`, `retractable screens`, `outdoor living chicago`, `pergola installation` |
| Pergolas | `motorized pergolas`, `louvered pergolas`, `adjustable pergola`, `pergola chicago` |
| Shades | `motorized screens`, `retractable screens`, `patio screens`, `exterior shades` |
| Location pages | `{service} {city}`, `{city} outdoor living`, `{city} pergola installation` |

---

### Task 1.3: Add OpenGraph Tags
**Files:** 11 pages missing OpenGraph  
**Time:** 2-3 hours  
**Impact:** MEDIUM (social sharing, some ranking signal)

**Pages to Fix:**
- `/service-areas/hinsdale-il`
- `/service-areas/lake-geneva-wi`
- `/service-areas/naperville-il`
- `/service-areas/northbrook-il`
- `/service-areas/oak-brook-il`
- `/service-areas/sanibel-outdoor-living`
- `/service-areas/wilmette-il`
- `/service-areas/winnetka-il`
- `/contact`
- `/systems/shades`
- `/systems/enclosures`

**Pattern:**
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Outdoor Living',
  },
};
```

---

### Task 1.4: Fix Client-Side Rendering Issues
**Files:** 
- `src/app/page.tsx` (homepage)
- `src/app/systems/shades/page.tsx`  
**Time:** 4-6 hours  
**Impact:** CRITICAL (crawlers may miss content)

**Pattern:** Move static content to Server Component, keep only interactive parts in Client Component.

**For Homepage:**
```typescript
// page.tsx (Server Component)
export default function Home() {
  return (
    <main>
      {/* Server-rendered static content */}
      <HeroSection /> {/* Move from HomeClient */}
      <ServicesSection /> {/* Move from HomeClient */}
      
      {/* Only form is client-side */}
      <HeroFormClient />
    </main>
  );
}
```

**For Shades Page:**
```typescript
// page.tsx (Server Component)
export default function ShadesPage() {
  return (
    <main>
      {/* Server-rendered */}
      <HeroSection />
      <ProductOverview />
      <FeaturesSection />
      
      {/* Client component ONLY for interactive parts */}
      <ShadeConfiguratorClient />
    </main>
  );
}
```

---

## Phase 2: Schema & Structured Data (Week 2)

### Task 2.1: Upgrade Schema Type
**File:** `src/lib/schema.ts`  
**Time:** 15 minutes  
**Impact:** MEDIUM (better Google recognition)

```typescript
// BEFORE:
'@type': 'LocalBusiness',

// AFTER:
'@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
```

---

### Task 2.2: Add FAQ Schema to Service Area Pages
**Files:** All 9 service area pages  
**Time:** 2 hours  
**Impact:** HIGH (rich snippets, voice search)

**Pattern:**
```typescript
import { generateFAQSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'Do I need a permit for a pergola in {City}?',
    answer: '...',
  },
  // ... more FAQs
];

const faqSchema = generateFAQSchema(faqs);

// Add to page:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

---

### Task 2.3: Add Product Schema to Appliances
**File:** `src/app/systems/appliances/page.tsx`  
**Time:** 30 minutes  
**Impact:** MEDIUM (rich snippets)

Add `generateProductSchema()` call similar to other system pages.

---

### Task 2.4: Enhance areaServed Schema
**File:** `src/lib/schema.ts`  
**Time:** 1 hour  
**Impact:** MEDIUM (better local SEO)

Add to location pages:
```typescript
areaServed: {
  '@type': 'City',
  name: 'Wilmette',
  geo: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 42.07,
      longitude: -87.73,
    },
    geoRadius: '10 km',
  },
},
```

---

## Phase 3: Image & Performance Optimization (Week 2-3)

### Task 3.1: Add Priority to Hero Images
**Files:** 
- `src/components/features/home/HomeClient.tsx`
- `src/app/systems/*/page.tsx` (all 7)
- `src/app/service-areas/*/page.tsx` (all 9)  
**Time:** 1 hour  
**Impact:** HIGH (LCP improvement)

Add `priority` to all above-fold hero images:
```typescript
<Image
  src="..."
  fill
  className="object-cover"
  sizes="..."
  priority // ADD THIS
/>
```

---

### Task 3.2: Add Blur Placeholders
**Files:** All pages with images (30+ files)  
**Time:** 3-4 hours  
**Impact:** MEDIUM (reduces CLS)

For remote images:
```typescript
<Image
  src="..."
  fill
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generate static blur
/>
```

For local images, generate blur data URLs at build time or use a utility function.

---

### Task 3.3: Optimize Video Background
**File:** `src/components/features/home/HomeClient.tsx`  
**Time:** 30 minutes  
**Impact:** MEDIUM (LCP improvement)

```typescript
<video
  autoPlay
  muted
  loop
  playsInline
  poster="/images/pergolas/pergola-hero.jpg"
  preload="metadata" // ADD THIS
>
```

---

## Phase 4: Location Page Enhancements (Week 3)

### Task 4.1: Add Google Maps Embed
**Files:** All 9 service area pages  
**Time:** 2 hours  
**Impact:** HIGH (local pack ranking factor)

Add to each location page:
```typescript
<section className="section-md">
  <Container>
    <h2>Service Area</h2>
    <iframe
      src={`https://www.google.com/maps/embed?pb=...&q=${cityName}+IL`}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </Container>
</section>
```

Use coordinates for each city:
- Wilmette: 42.0723° N, 87.7228° W
- Winnetka: 42.1081° N, 87.7359° W
- Northbrook: 42.1275° N, 87.8289° W
- Barrington: 42.1539° N, 88.1362° W
- Naperville: 41.7508° N, 88.1535° W
- Hinsdale: 41.8028° N, 87.9339° W
- Oak Brook: 41.8328° N, 87.9289° W
- Lake Geneva: 42.5917° N, 88.4334° W
- Sanibel: 26.4485° N, 82.0226° W

---

### Task 4.2: Add Local Testimonials
**Time:** 3 hours  
**Impact:** MEDIUM (social proof, local relevance)

**Step 1:** Create data file
```typescript
// src/data/testimonials.ts
export const testimonials = [
  {
    name: 'Sarah Johnson',
    city: 'Wilmette',
    project: 'Louvered Pergola',
    rating: 5,
    text: 'EDG transformed our backyard...',
  },
  // ... more testimonials
];
```

**Step 2:** Add to location pages
```typescript
import { testimonials } from '@/data/testimonials';

const cityTestimonials = testimonials.filter(t => t.city === 'Wilmette');

// Render in page
<section>
  <h2>What {City} Homeowners Say</h2>
  {cityTestimonials.map(t => <TestimonialCard {...t} />)}
</section>
```

---

### Task 4.3: Fix Long Titles
**Files:** 
- `/commercial/country-club-outdoor-spaces` (71 chars)
- `/service-areas/sanibel-outdoor-living` (65 chars)
- `/service-areas/barrington-il` (64 chars)  
**Time:** 30 minutes  
**Impact:** LOW (search result display)

Shorten to 50-60 characters:
```typescript
// BEFORE:
title: 'Country Club Patio Covers & Outdoor Spaces | Chicago Commercial Shades'

// AFTER:
title: 'Country Club Outdoor Living | Chicago IL | EDG'
```

---

## Phase 5: Strategic Improvements (Week 4)

### Task 5.1: Implement Dynamic Routing
**New File:** `src/app/service-areas/[city]/page.tsx`  
**Time:** 6-8 hours  
**Impact:** MEDIUM (scalability, maintainability)

```typescript
// New dynamic route
export async function generateStaticParams() {
  const cities = [
    { slug: 'wilmette-il', name: 'Wilmette', region: 'North Shore', lat: 42.07, lng: -87.72 },
    { slug: 'winnetka-il', name: 'Winnetka', region: 'North Shore', lat: 42.11, lng: -87.74 },
    // ... 7 more
  ];
  return cities.map(city => ({ city: city.slug }));
}

export const revalidate = 3600; // ISR for hourly updates

export async function generateMetadata({ params }): Promise<Metadata> {
  const city = getCityData(params.city);
  return {
    title: `Outdoor Living Systems in ${city.name}, ${city.state} | EDG`,
    // ... dynamic metadata
  };
}
```

**Migrate existing static files to data-driven approach.**

---

### Task 5.2: Consolidate Legacy Routes
**Files:** 
- `/locations/lake-geneva/`
- `/locations/lake-forest/`
- `/locations/highland-park/`  
**Time:** 1 hour  
**Impact:** LOW (prevent confusion)

Add redirects in `next.config.ts`:
```typescript
async redirects() {
  return [
    {
      source: '/locations/:path*',
      destination: '/service-areas/:path*',
      permanent: true,
    },
  ];
}
```

---

## Phase 6: Testing & Validation (Week 4)

### Validation Checklist

**Technical:**
- [ ] `npm run build` passes
- [ ] `npm run test:e2e` passes
- [ ] No 'use client' in page.tsx files (except minimal Client Components)
- [ ] All pages have metadata exports
- [ ] All pages have canonical URLs

**SEO:**
- [ ] Schema validates in Google's Rich Results Test
- [ ] No missing keywords meta tags
- [ ] OpenGraph present on all pages
- [ ] Titles under 60 characters
- [ ] Descriptions under 160 characters

**Performance:**
- [ ] LCP under 2.5s
- [ ] CLS under 0.1
- [ ] Fonts use display: swap
- [ ] Hero images use priority

**Local SEO:**
- [ ] Google Maps embeds working
- [ ] LocalBusiness schema valid
- [ ] NAP consistent across all pages
- [ ] Local testimonials displayed

---

## Success Metrics

| Metric | Before | Target | How to Measure |
|--------|--------|--------|----------------|
| SEO Score | 72/100 | 90+/100 | Manual audit vs 2025 guide |
| LCP | ~3.5s | <2.5s | PageSpeed Insights |
| CLS | ~0.15 | <0.1 | PageSpeed Insights |
| Rich Snippets | 2 types | 4+ types | Google Search Console |
| Indexed Pages | ~40 | ~50 | Google Search Console |
| Local Pack Appearances | ~5 queries | ~15 queries | Google Search Console |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Breaking changes | Work in feature branch, test thoroughly |
| Schema errors | Validate with Google's Rich Results Test after each change |
| Performance regression | Run PageSpeed Insights before/after |
| Content delays | Use parallel sub-agents for bulk tasks |

---

## Resources Required

**Time Investment:**
- Week 1: 12 hours (critical fixes)
- Week 2: 10 hours (schema + images)
- Week 3: 12 hours (location enhancements)
- Week 4: 12 hours (strategic + testing)
- **Total: ~46 hours**

**Tools:**
- Google Rich Results Test
- PageSpeed Insights
- Google Search Console
- Schema.org Validator

---

## Implementation Order (Prioritized by Impact)

### This Week (High Impact, Low Effort)
1. ✅ Add `display: 'swap'` to fonts (5 min)
2. ✅ Fix long titles (30 min)
3. ✅ Add keywords meta tags (2 hours)
4. ✅ Add OpenGraph to 11 pages (3 hours)

### Next Week (High Impact, Medium Effort)
5. ✅ Fix homepage rendering (4 hours)
6. ✅ Fix shades page rendering (2 hours)
7. ✅ Add priority to hero images (1 hour)
8. ✅ Add FAQ schema to service areas (2 hours)

### Following Weeks (Medium Impact)
9. Add Google Maps embeds (2 hours)
10. Add local testimonials (3 hours)
11. Add blur placeholders (4 hours)
12. Implement dynamic routing (8 hours)

---

**Document Version:** 1.0  
**Created:** 2026-02-09  
**Review Date:** 2026-02-16
