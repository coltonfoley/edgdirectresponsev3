# Service Area Hub Page Constraints

> **Requirements for location landing pages (e.g., /service-areas/wilmette-il)**

---

## Content Requirements

### Minimum Word Count
- **800+ words** for hub pages
- Quality over quantity, but must be comprehensive

### Required Sections

1. **Hero Section**
   - H1: `[Location] [Product/Service]` (e.g., "Wilmette IL Pergolas")
   - Value proposition focused on local context
   - Primary CTA (Book a Call / Get Free Guide)

2. **Introduction (100-150 words)**
   - Hook with local relevance
   - Mention specific local characteristics
   - Establish authority in the area

3. **Services Overview (150-200 words)**
   - List primary services
   - Connect to local needs/climate

4. **Neighborhood Sections (REQUIRED: 4 neighborhoods)**
   - Each neighborhood gets its own subsection
   - Mention specific streets, landmarks, or characteristics
   - Examples for North Shore:
     * "Homes near Gillson Park..."
     * "Properties along Sheridan Road..."
     * "The Indian Hill Estates area..."
     * "Downtown Wilmette residences..."

5. **Why Choose Us / Local Expertise (100-150 words)**
   - Local knowledge (zoning, climate, architecture)
   - Proximity to area
   - Local project examples

6. **FAQ Section (REQUIRED: 3+ questions)**
   - Common questions about service in this area
   - Include permitting/zoning question
   - Include timeline/cost question

7. **CTA Section**
   - Contact form or strong CTA
   - Phone number with local area code context

---

## Technical Requirements

### URL Structure
```
/service-areas/[city-state]
Example: /service-areas/wilmette-il
```

### Metadata Template
```typescript
export const metadata: Metadata = {
  title: 'Wilmette IL Pergolas & Outdoor Living | EDG Patio & Shade',
  description: 'Custom pergolas and outdoor living solutions in Wilmette, IL. Serving Indian Hill Estates, Gillson Park area, and downtown. Free consultation.',
  alternates: {
    canonical: '/service-areas/wilmette-il',
  },
};
```

### Schema Requirements
```typescript
// LocalBusiness Schema
{
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'EDG Patio & Shade',
  description: '...',
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
    name: 'Wilmette',
  },
}

// Service Schema
{
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pergola Installation',
  provider: { '@type': 'LocalBusiness', name: 'EDG Patio & Shade' },
  areaServed: { '@type': 'City', name: 'Wilmette' },
}
```

---

## Internal Linking Requirements

### From Hub Page (link OUT to):
- [ ] Zoning guide: `/service-areas/[area]/zoning-guide`
- [ ] Product pages: `/service-areas/[area]/[product]`
- [ ] Related service areas (2-3 nearby locations)
- [ ] Projects in this area (if any)

### To Hub Page (link IN from):
- [ ] Footer: Service areas list
- [ ] Main service areas index page
- [ ] Nearby service area pages (cross-link)

---

## Local Context Elements

### Must Include:
1. **Specific geographic references**
   - Neighborhood names
   - Major streets
   - Local landmarks

2. **Climate/architecture context**
   - "Lake effect weather" (North Shore)
   - "Coastal winds" (Sanibel)
   - "Historic district requirements" (if applicable)

3. **Local zoning awareness**
   - Reference to village codes
   - Link to zoning guide spoke

---

## Examples

### Good Introduction:
> "Wilmette homeowners understand the unique challenge of outdoor living on the North Shore. With Lake Michigan's cooling breezes in summer and harsh winds in winter, your outdoor space needs to be both beautiful and resilient. EDG Patio & Shade has installed custom pergolas and exterior shades throughout Wilmette—from the historic homes near downtown to the lakefront properties along Michigan Avenue."

### Good Neighborhood Section:
> **The Indian Hill Estates Area**
> 
> Homes in the Indian Hill Estates area often feature expansive backyards perfect for outdoor entertaining. We've installed louvered pergolas on properties along Romona Road and Birchwood Avenue, creating year-round outdoor living spaces that complement the area's traditional architecture. Our designs account for the mature tree canopy common in this neighborhood, ensuring your structure works with—not against—the existing landscape.

---

## Quality Checklist

Before marking complete:
- [ ] 800+ words
- [ ] 4 neighborhood sections with specific references
- [ ] FAQ section with 3+ questions
- [ ] Schema implemented
- [ ] Canonical tag present
- [ ] Links to zoning guide and product spoke
- [ ] Local phone context (815-581-0138)
- [ ] No 'use client' in page.tsx
