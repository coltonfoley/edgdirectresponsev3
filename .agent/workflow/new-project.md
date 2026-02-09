# Workflow: Create New Project/Case Study

> **Process for adding portfolio projects**

---

## Overview

Projects showcase real work and close sales. Each project needs:
1. Data entry in `src/lib/projects.ts`
2. Individual project page
3. Gallery images
4. Cross-links to service areas

**Time Estimate:** 1-1.5 hours per project

---

## Step 1: Gather Materials

Before starting, collect:
- [ ] Project photos (4-8 images, high resolution)
- [ ] Location (city, neighborhood)
- [ ] Products installed
- [ ] Challenge/solution story
- [ ] Client testimonial (if available)
- [ ] Completion date
- [ ] Project specs (size, features)

---

## Step 2: Optimize Images

### Required Sizes
| Type | Dimensions | Purpose |
|------|------------|---------|
| Hero | 1920x1080 | Full-width hero |
| Gallery | 1200x900 | Detail views |
| Thumbnail | 600x450 | Listings |

### Optimization Script
```bash
# If images need optimization
node scripts/optimize-images.mjs
```

### Naming Convention
```
public/images/projects/[project-slug]/
├── hero.jpg
├── gallery-1.jpg
├── gallery-2.jpg
├── gallery-3.jpg
└── gallery-4.jpg
```

---

## Step 3: Add to Projects Registry

Edit `src/lib/projects.ts`:

```typescript
export const projects: Project[] = [
  // ... existing projects
  
  {
    slug: 'project-slug',
    title: 'Project Title',
    location: 'City, State',
    description: 'Brief description for listings (100-150 chars)',
    image: '/images/projects/project-slug/hero.jpg',
    category: 'pergolas', // 'pergolas' | 'shades' | 'enclosures'
    featured: true, // Include on homepage?
    neighborhood: 'Neighborhood Name', // Optional
  },
];
```

---

## Step 4: Generate Project Page

```bash
npm run generate -- \
  --name "Project Name" \
  --route "projects/[project-slug]" \
  --description "[Product] installation in [Location]. [Challenge solved]. View photos and details."
```

**Example:**
```bash
npm run generate -- \
  --name "Wilmette Lakefront Pergola" \
  --route "projects/wilmette-lakefront-pergola" \
  --description "Custom louvered pergola on Lake Michigan in Wilmette, IL. Engineered for wind resistance with panoramic views."
```

---

## Step 5: Build Project Page Content

Reference: `.agent/constraints/PROJECT.md`

### Page Structure

```typescript
import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import { Container } from '@/components/ui/Container';
import { Image } from 'next/image';

export const metadata: Metadata = {
  title: 'Project Title | EDG Project',
  description: '...',
  alternates: { canonical: '/projects/project-slug' },
};

export default function ProjectPage() {
  return (
    <main>
      {/* Hero with full-width image */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/projects/project-slug/hero.jpg"
          alt="Project description"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
        <Container className="relative z-10 flex h-full items-end pb-16">
          <h1 className="text-4xl font-bold text-white">Project Title</h1>
        </Container>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Quick Stats */}
            <div>
              <h2>Project Details</h2>
              <dl>
                <dt>Location</dt>
                <dd>City, State</dd>
                <dt>Product</dt>
                <dd>Product Name</dd>
                <dt>Completed</dt>
                <dd>Month Year</dd>
              </dl>
            </div>
            
            {/* Challenge */}
            <div className="lg:col-span-2">
              <h2>The Challenge</h2>
              <p>Describe the specific challenge...</p>
              
              <h2>The Solution</h2>
              <p>How we solved it...</p>
              
              <h2>The Result</h2>
              <p>Outcome for homeowner...</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2>Project Gallery</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square">
                <Image
                  src={`/images/projects/project-slug/gallery-${i}.jpg`}
                  alt={`View ${i}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container className="text-center">
          <h2>Want a Similar Result?</h2>
          <p>Schedule a free consultation for your [City] home.</p>
          <Button size="lg">Book Consultation</Button>
        </Container>
      </section>
    </main>
  );
}
```

---

## Step 6: Add Schema

```typescript
// Add to page before closing </main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Project',
      name: 'Project Title',
      description: '...',
      location: {
        '@type': 'Place',
        name: 'City, State',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'City',
          addressRegion: 'State',
        },
      },
      image: [
        'https://www.edgpatioshade.com/images/projects/slug/hero.jpg',
        'https://www.edgpatioshade.com/images/projects/slug/gallery-1.jpg',
      ],
    }),
  }}
/>
```

---

## Step 7: Cross-Link to Service Area

Add project reference to the service area page:

```typescript
// In service area hub page
<section className="py-16">
  <Container>
    <h2>Recent Projects in [City]</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <ProjectCard 
        slug="project-slug"
        title="Project Title"
        image="/images/projects/slug/hero.jpg"
      />
    </div>
  </Container>
</section>
```

---

## Step 8: Update Sitemap

Add to `src/app/sitemap.ts`:

```typescript
{
  url: 'https://www.edgpatioshade.com/projects/project-slug',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.6,
},
```

---

## Step 9: Update E2E Tests

Add to `e2e/smoke.spec.ts`:

```typescript
'/projects/project-slug',
```

---

## Step 10: Validate

```bash
# Format
npm run format

# Build
npm run build

# Test
npm run test:e2e
```

---

## Completion Checklist

- [ ] Images optimized and in `/public/images/projects/[slug]/`
- [ ] Project added to `src/lib/projects.ts`
- [ ] Project page created with 400+ words
- [ ] Challenge/solution/result structure
- [ ] Gallery with 4+ images
- [ ] Schema implemented
- [ ] Links to service area
- [ ] Sitemap updated
- [ ] E2E tests updated
- [ ] Build passes
- [ ] Tests pass

---

## Post-Launch

1. Share on social media
2. Add to email nurture sequence
3. Request Google review from client (if applicable)
