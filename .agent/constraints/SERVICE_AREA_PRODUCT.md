# Service Area Product Page Constraints

> **Requirements for product spoke pages (e.g., /service-areas/wilmette-il/louvered-pergolas)**

---

## Purpose

Bottom-of-funnel conversion page. Captures high-intent searches like "louvered pergolas wilmette" and converts to consultation.

---

## Content Requirements

### Minimum Word Count
- **700+ words**
- Product-focused with local framing

### Required Sections

1. **Hero Section**
   - H1: `[Product] in [Location]`
   - Local value proposition
   - Product hero image
   - Primary CTA

2. **Product Overview (150-200 words)**
   - What the product is
   - Why it's perfect for this location's specific challenges
   - Link to general product page for specs

3. **Local Benefits (REQUIRED)**
   - How this product solves local climate challenges
   - Example for North Shore pergolas:
     * "Louvered roofs handle Lake Michigan winds"
     * "Integrated rain management for sudden storms"
     * "Motorized shades for privacy in dense neighborhoods"

4. **Features & Specifications**
   - Key product features
   - Available sizes/configurations
   - Materials and finishes
   - Smart home integration options

5. **Local Installation Expertise**
   - Experience in this specific area
   - References to local architecture styles
   - Notable installations nearby (if applicable)

6. **Gallery/Visual Proof**
   - 3-6 images of similar installations
   - Ideally from nearby locations
   - Before/after if available

7. **FAQ Section (3+ questions)**
   - Cost questions
   - Timeline questions
   - Local regulation questions

8. **CTA Section**
   - Strong consultation CTA
   - Phone number
   - Form or calendar link

---

## Local Framing Requirements

Every product benefit must tie to local context:

### Example (North Shore Pergolas):
> "Our hurricane-rated louvered pergolas are engineered to withstand the intense winds that sweep across Lake Michigan. Unlike standard pergolas that shake and rattle in gusts, our structures feature reinforced posts and engineered beam connections that keep your outdoor space secure—even when the weather turns."

### Example (Sanibel Shades):
> "Sanibel's coastal environment demands materials that resist salt air corrosion. Our marine-grade aluminum shade systems feature powder-coated finishes tested for 3,000+ hours of salt spray exposure—perfect for island living."

---

## Technical Requirements

### URL Structure
```
/service-areas/[city-state]/[product-slug]
Example: /service-areas/wilmette-il/louvered-pergolas
```

### Product Slugs
- `louvered-pergolas`
- `motorized-pergolas`
- `exterior-shades`
- `retractable-awnings`
- `glass-enclosures`
- `patio-enclosures`

### Metadata Template
```typescript
export const metadata: Metadata = {
  title: 'Louvered Pergolas in Wilmette, IL | EDG Patio & Shade',
  description: 'Custom louvered pergolas engineered for Wilmette\'s lakefront climate. Motorized roofs, integrated lighting, smart controls. Free design consultation.',
  alternates: {
    canonical: '/service-areas/wilmette-il/louvered-pergolas',
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
  description: '...',
  brand: { '@type': 'Brand', name: 'EDG Patio & Shade' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: '...'
  }
}
```

---

## Internal Linking

### From Product Page (link OUT to):
- [ ] Parent service area hub
- [ ] Zoning guide ("Before you build, check...")
- [ ] General system/product page
- [ ] Projects with this product

### To Product Page (link IN from):
- [ ] Service area hub
- [ ] Related product pages
- [ ] General systems page

---

## Quality Checklist

- [ ] 700+ words
- [ ] Every benefit tied to local context
- [ ] 3+ local-specific value propositions
- [ ] Gallery with 3+ images
- [ ] FAQ with 3+ questions
- [ ] Schema implemented
- [ ] Links to hub and zoning guide
- [ ] Strong CTA
