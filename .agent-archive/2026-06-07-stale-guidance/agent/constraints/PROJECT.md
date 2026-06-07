# Project/Case Study Page Constraints

> **Requirements for portfolio project pages**

---

## Purpose

Visual proof that closes sales. Shows real installations with specific challenges and solutions.

---

## Content Requirements

### Minimum Word Count
- **400+ words** (focused on quality visuals + narrative)

### Required Sections

1. **Hero Section**
   - Full-width hero image (best project photo)
   - H1: `[Project Name] - [Location]`
   - Brief project tagline

2. **Project Overview**
   - Location (specific)
   - Product(s) installed
   - Completion date
   - Quick stats (size, features)

3. **The Challenge (REQUIRED)**
   - What was the problem?
   - Why was this installation complex?
   - Examples:
     * "Elevated deck on stilt home required engineering for wind loads"
     * "Narrow backyard with zero lot line setback constraints"
     * "Integration with existing stone patio and mature trees"

4. **The Solution**
   - How did we solve it?
   - Specific products/configurations used
   - Custom engineering or adaptations

5. **The Result**
   - Outcome for homeowner
   - How they use the space now
   - Testimonial (if available)

6. **Gallery (REQUIRED: 4-8 images)**
   - Multiple angles
   - Detail shots
   - Before/after (if available)
   - Lifestyle/context shots

7. **CTA Section**
   - "Want a similar result?"
   - Link to consultation
   - Link to service area

---

## Data Structure

Projects must be registered in `src/lib/projects.ts`:

```typescript
{
  slug: 'wilmette-lakefront-pergola',
  title: 'Wilmette Lakefront Pergola',
  location: 'Wilmette, IL',
  description: 'Custom louvered pergola on Lake Michigan...',
  image: '/images/projects/wilmette-lakefront/hero.jpg',
  category: 'pergolas', // or 'shades', 'enclosures'
  featured: true, // Include on homepage?
}
```

---

## Technical Requirements

### URL Structure
```
/projects/[project-slug]
Example: /projects/wilmette-lakefront-pergola
```

### Metadata Template
```typescript
export const metadata: Metadata = {
  title: 'Wilmette Lakefront Pergola Installation | EDG Project',
  description: 'Custom louvered pergola installation on Lake Michigan in Wilmette, IL. Engineered for wind resistance with panoramic lake views.',
  alternates: {
    canonical: '/projects/wilmette-lakefront-pergola',
  },
};
```

### Schema
```typescript
// Project Schema (extends CreativeWork)
{
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: 'Wilmette Lakefront Pergola',
  description: '...',
  location: {
    '@type': 'Place',
    name: 'Wilmette, IL',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wilmette',
      addressRegion: 'IL'
    }
  },
  image: [...],
}
```

---

## Image Requirements

### Hero Image
- High resolution (1920x1080 minimum)
- Landscape orientation
- Best overall shot
- Priority loading

### Gallery Images
- Minimum 4 images
- Mix of wide shots and details
- Square or landscape
- Lazy loaded

### Alt Text Format
```
[Product] installation at [location] - [specific detail]
Example: "Louvered pergola with integrated lighting on elevated deck overlooking Lake Michigan"
```

---

## Internal Linking

### From Project Page (link OUT to):
- [ ] Related projects
- [ ] Service area where project is located
- [ ] Products used
- [ ] Consultation booking

### To Project Page (link IN from):
- [ ] Projects listing page
- [ ] Service area hub ("Recent projects in this area")
- [ ] Product pages
- [ ] Homepage (featured projects)

---

## Quality Checklist

- [ ] Registered in `src/lib/projects.ts`
- [ ] Challenge clearly stated
- [ ] Solution explained
- [ ] 4+ gallery images
- [ ] Alt text on all images
- [ ] Schema implemented
- [ ] Links to service area and products
- [ ] CTA to consultation
