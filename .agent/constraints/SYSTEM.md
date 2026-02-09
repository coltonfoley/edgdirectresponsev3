# System/Product Category Page Constraints

> **Requirements for main product pages (e.g., /systems/louvered-pergolas)**

---

## Purpose

Comprehensive product information that ranks for generic product searches and funnels to location-specific pages.

---

## Content Requirements

### Minimum Word Count
- **900+ words** (comprehensive product information)

### Required Sections

1. **Hero Section**
   - H1: `[Product Name]`
   - Compelling product hero image
   - Key value proposition
   - Primary CTA

2. **Product Overview (200-250 words)**
   - What is this product?
   - How does it work?
   - Who is it for?

3. **Key Features (REQUIRED: 4-6 features)**
   Each feature with:
   - Icon/visual
   - Title
   - Description (50-75 words)
   
   Example features for Louvered Pergolas:
   - Adjustable Louvers
   - Integrated Rain Management
   - Motorized Operation
   - LED Lighting Systems
   - Smart Home Integration

4. **Specifications Table (REQUIRED)**
   | Specification | Details |
   |--------------|---------|
   | Maximum Span | X feet |
   | Post Options | X configurations |
   | Material | Aluminum / Steel |
   | Finish Options | X colors |
   | Wind Rating | X mph |
   | Snow Load | X psf |

5. **Applications/Use Cases**
   - Residential applications
   - Commercial applications
   - Specific scenarios

6. **Gallery (6-10 images)**
   - Variety of installations
   - Different configurations
   - Detail shots

7. **Options & Upgrades**
   - Available add-ons
   - Customization options
   - Accessory integrations

8. **Process Overview**
   - Consultation → Design → Installation
   - Timeline expectations

9. **FAQ Section (5+ questions)**
   - Cost ranges
   - Timeline
   - Maintenance
   - Warranty
   - Customization

10. **Related Products**
    - Cross-sell complementary products
    - Link to category overview

11. **CTA Section**
    - Consultation booking
    - Link to find local service area

---

## Technical Requirements

### URL Structure
```
/systems/[product-slug]
Example: /systems/louvered-pergolas
```

### Product Category Slugs
- `louvered-pergolas`
- `motorized-pergolas`
- `exterior-shades`
- `retractable-awnings`
- `patio-enclosures`
- `glass-enclosures`

### Metadata Template
```typescript
export const metadata: Metadata = {
  title: 'Louvered Pergolas | Motorized Adjustable Roofs | EDG',
  description: 'Premium louvered pergolas with motorized adjustable roofs. Control sun, shade, and rain with smart controls. Professional installation nationwide.',
  alternates: {
    canonical: '/systems/louvered-pergolas',
  },
};
```

### Schema
```typescript
// Product Schema
{
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Louvered Pergola',
  description: 'Motorized adjustable louvered roof pergola',
  brand: { '@type': 'Brand', name: 'EDG Patio & Shade' },
  category: 'Pergolas',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: '...'
  },
}

// Service Schema (if emphasizing installation)
{
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Louvered Pergola Installation',
  provider: { '@type': 'LocalBusiness', name: 'EDG Patio & Shade' },
}
```

---

## Internal Linking

### From System Page (link OUT to):
- [ ] Service areas (find your location)
- [ ] Related systems
- [ ] Projects featuring this product
- [ ] Consultation booking

### To System Page (link IN from):
- [ ] Homepage
- [ ] Systems overview
- [ ] Service area product pages
- [ ] Projects

---

## Quality Checklist

- [ ] 900+ words
- [ ] 4-6 key features with descriptions
- [ ] Specifications table
- [ ] 6+ gallery images
- [ ] FAQ with 5+ questions
- [ ] Schema implemented
- [ ] Links to service areas
- [ ] Related products section
