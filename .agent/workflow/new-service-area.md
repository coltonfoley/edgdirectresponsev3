# Workflow: Create New Service Area

> **Complete process for building a Local Dominance Cluster**

---

## Overview

A Local Dominance Cluster consists of:
1. **Hub** - Service area landing page
2. **Zoning Guide** - Permitting authority content
3. **Product Spoke** - Product-specific landing page
4. **Cross-links** - Integration with existing site

**Time Estimate:** 2-3 hours for full cluster

---

## Pre-Flight Checklist

Before starting, gather:
- [ ] City name and state
- [ ] 4 specific neighborhoods/streets in the area
- [ ] Local climate challenges (lake effect, winds, etc.)
- [ ] Village zoning website (for setbacks, permits)
- [ ] Nearby existing service areas (for cross-linking)

---

## Step 1: Generate Hub Page

```bash
npm run generate -- \
  --name "[City] Outdoor Living" \
  --route "service-areas/[city-slug]" \
  --description "Custom pergolas and outdoor living in [City]. Serving [neighborhoods]. Free consultation."
```

**Example:**
```bash
npm run generate -- \
  --name "Highland Park Outdoor Living" \
  --route "service-areas/highland-park-il" \
  --description "Premium pergolas and outdoor shades in Highland Park, IL. Serving Fort Sheridan, Sherwood Forest, and downtown."
```

---

## Step 2: Fix Template Issues

The Plop template may generate formatting issues. Fix immediately:

```bash
npm run format
```

---

## Step 3: Verify Metadata Structure

Ensure the generated page has proper metadata:

```typescript
export const metadata: Metadata = {
  title: '[City] [State] Pergolas | EDG Patio & Shade',
  description: '...',
  alternates: {
    canonical: '/service-areas/[city-slug]',
  },
};
```

**CRITICAL:** Ensure NO `'use client'` in the file.

---

## Step 4: Expand Content (Hub Page)

Reference: `.agent/constraints/SERVICE_AREA.md`

### Minimum Requirements:
- [ ] **800+ words**
- [ ] **4 neighborhood sections** with specific streets/landmarks
- [ ] **FAQ section** with 3+ questions
- [ ] **Introduction** with local climate context
- [ ] **Services overview**
- [ ] **CTA section**

### Content Template:

```typescript
export default function CityPage() {
  return (
    <main>
      {/* Hero - Local value prop */}
      <HeroSection 
        title="City Outdoor Living"
        subtitle="Custom pergolas for [local climate challenge]"
      />
      
      {/* Introduction - 150 words */}
      <IntroSection />
      
      {/* Services - 200 words */}
      <ServicesSection />
      
      {/* Neighborhoods - 4 sections, 100 words each */}
      <NeighborhoodsSection>
        <Neighborhood name="Area 1" streets="Main St, Oak Ave..." />
        <Neighborhood name="Area 2" streets="..." />
        <Neighborhood name="Area 3" streets="..." />
        <Neighborhood name="Area 4" streets="..." />
      </NeighborhoodsSection>
      
      {/* Local Expertise */}
      <ExpertiseSection />
      
      {/* FAQ - 3+ questions */}
      <FAQSection questions={[
        { q: 'Do I need a permit?', a: '...' },
        { q: 'How long does installation take?', a: '...' },
        { q: 'What about [local concern]?', a: '...' },
      ]} />
      
      {/* CTA */}
      <CTASection>
        <ContactFormClient source="city-slug" />
      </CTASection>
    </main>
  );
}
```

---

## Step 5: Generate Zoning Guide

```bash
npm run generate -- \
  --name "City Zoning Guide" \
  --route "service-areas/[city-slug]/zoning-guide" \
  --description "Complete guide to City pergola permits, setbacks, and building codes."
```

### Expand Content:
Reference: `.agent/constraints/SERVICE_AREA_ZONING.md`

**Required Research:**
1. Find city zoning website
2. Locate: setbacks, height limits, impervious coverage
3. Find permit costs and process

**Required Sections:**
- [ ] Quick reference table
- [ ] Setback requirements
- [ ] Height restrictions
- [ ] Impervious coverage rules
- [ ] Permit process
- [ ] Common gotchas

---

## Step 6: Generate Product Spoke

```bash
npm run generate -- \
  --name "City Louvered Pergolas" \
  --route "service-areas/[city-slug]/louvered-pergolas" \
  --description "Louvered pergolas in City, engineered for [local climate]. Free consultation."
```

### Expand Content:
Reference: `.agent/constraints/SERVICE_AREA_PRODUCT.md`

**Required:**
- [ ] 700+ words
- [ ] Local climate benefits (wind, rain, etc.)
- [ ] 3+ local value propositions
- [ ] Gallery with 3+ images
- [ ] FAQ with 3+ questions

---

## Step 7: Add Schema

Add structured data to hub page:

```typescript
// Before closing </main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'EDG Patio & Shade',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1802 Holian Drive',
        addressLocality: 'Spring Grove',
        addressRegion: 'IL',
        postalCode: '60081',
      },
      telephone: '+1-815-581-0138',
      areaServed: {
        '@type': 'City',
        name: 'City Name',
      },
    }),
  }}
/>
```

---

## Step 8: Internal Linking

### Add Links FROM Hub Page:
```typescript
// In hub page content
<Link href="/service-areas/[city-slug]/zoning-guide">
  City Zoning Guide →
</Link>

<Link href="/service-areas/[city-slug]/louvered-pergolas">
  Louvered Pergolas in City →
</Link>
```

### Add Links TO Hub Page:
```typescript
// In src/components/layout/Footer.tsx
// Add to service areas list
{ label: 'City', href: '/service-areas/[city-slug]' },

// In nearby service areas
<Link href="/service-areas/[city-slug]">
  Also serving City →
</Link>
```

---

## Step 9: Update Sitemap

Add to `src/app/sitemap.ts`:

```typescript
{
  url: 'https://www.edgpatioshade.com/service-areas/[city-slug]',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: 'https://www.edgpatioshade.com/service-areas/[city-slug]/zoning-guide',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
},
{
  url: 'https://www.edgpatioshade.com/service-areas/[city-slug]/louvered-pergolas',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
},
```

---

## Step 10: Update E2E Tests

Add to `e2e/smoke.spec.ts`:

```typescript
'/service-areas/[city-slug]',
'/service-areas/[city-slug]/zoning-guide',
'/service-areas/[city-slug]/louvered-pergolas',
```

---

## Step 11: Validate

### Run Validation
```bash
# Check for 'use client' on pages
grep -l "'use client'" src/app/service-areas/[city-slug]/**/page.tsx

# Should return nothing!

# Format
npm run format

# Build
npm run build

# Test
npm run test:e2e
```

### Manual Checks
- [ ] Page loads without errors
- [ ] Metadata shows in tab
- [ ] Canonical tag in `<head>`
- [ ] Links work
- [ ] Mobile responsive

---

## Completion Checklist

- [ ] Hub page: 800+ words, 4 neighborhoods, FAQ
- [ ] Zoning guide: 600+ words, quick reference table
- [ ] Product spoke: 700+ words, local benefits
- [ ] No 'use client' in any page.tsx
- [ ] All pages have metadata + canonical
- [ ] Schema implemented on hub
- [ ] Internal links added
- [ ] Footer updated
- [ ] Sitemap updated
- [ ] E2E tests updated
- [ ] Build passes
- [ ] Tests pass

---

## Post-Launch

1. Submit URLs to Google Search Console
2. Monitor indexing (1-7 days)
3. Check for crawl errors
4. Track rankings for target keywords
