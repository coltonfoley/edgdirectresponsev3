# EDG Patio & Shade - Keyword Cannibalization Resolution Map

## Overview

This document maps out all instances of keyword cannibalization on the EDG website and provides specific resolutions for each issue.

---

## Cannibalization Issue #1: "Motorized Pergola" Keywords

### Affected Pages
| Page | Current Target | Conflict Level |
|------|---------------|----------------|
| `/systems/pergolas` | "motorized pergola", "louvered pergola" | PRIMARY |
| `/service-areas/northbrook-il/motorized-pergolas` | "motorized pergola northbrook" | Medium |
| `/service-areas/barrington-il/motorized-pergolas` | "motorized pergola barrington" | Medium |
| `/service-areas/naperville-il/motorized-pergolas` | "motorized pergola naperville" | Medium |
| `/service-areas/wilmette-il/louvered-pergolas` | "louvered pergola wilmette" | Low |
| `/service-areas/winnetka-il/louvered-pergolas` | "louvered pergola winnetka" | Low |
| `/service-areas/sanibel-outdoor-living/louvered-pergolas` | "louvered pergola sanibel" | Low |
| `/guides/louvered-pergolas` | "louvered pergola guide" | Low |

### Resolution Strategy

**Primary Page:** `/systems/pergolas`
- Keep targeting: "motorized pergola", "louvered pergola", "motorized pergola systems"
- Title: "Motorized Pergolas | Louvered Roof Systems | EDG Patio"
- Meta: General, no location modifiers

**Location Deep Pages:** `/service-areas/[location]/motorized-pergolas`
- Change targeting to: "[location] pergola installation", "pergola contractor [location]"
- Remove: "motorized pergola" as standalone target
- Add: Location + intent modifiers
- Title Template: "Pergola Installation [Location] | Custom Louvered Systems | EDG"
- Add canonical to `/systems/pergolas` for general "motorized pergola" terms

**Guide Page:** `/guides/louvered-pergolas`
- Keep targeting: "louvered pergola guide", "how to choose louvered pergola"
- Add: Educational modifiers only
- Link heavily to `/systems/pergolas`

### Implementation Checklist
- [ ] Update title tags on all location deep pages
- [ ] Update H1s to include location + "installation" or "contractor"
- [ ] Add canonical tags pointing to `/systems/pergolas`
- [ ] Update internal linking to emphasize hierarchy
- [ ] Monitor rankings for 30 days post-implementation

---

## Cannibalization Issue #2: "Pergola Cost/Pricing" Keywords

### Affected Pages
| Page | Current Target | Conflict Level |
|------|---------------|----------------|
| `/guides/louvered-pergolas` | "how much does a pergola cost", "pergola cost" | PRIMARY |
| `/price` | "pergola pricing", "outdoor living pricing" | Medium |
| `/contact` (with query params) | "get pergola quote" | Low |
| Various service area pages | Mention pricing | Low |

### Resolution Strategy

**Primary Page:** `/guides/louvered-pergolas`
- Keep targeting: "how much does a pergola cost", "pergola cost", "louvered pergola price"
- Target: Informational queries about cost
- Include: Detailed pricing breakdown, factors affecting cost
- Link to: `/price` for quote requests

**Secondary Page:** `/price`
- Change targeting: "pergola quote", "custom pergola pricing", "outdoor living quote"
- Remove: Specific cost information (move to guide)
- Focus: Quote process, what's included, factors
- Add: Strong CTA for quote requests

**Service Area Pages:**
- Remove: Pricing-specific content
- Add: "Get a [Location] Quote" CTAs linking to `/price?area=[location]`
- Mention: "Custom pricing based on your project"

### Implementation Checklist
- [ ] Expand pricing section in `/guides/louvered-pergolas` (add 500+ words)
- [ ] Reduce pricing detail on `/price`, focus on process
- [ ] Add clear link from guide to price page: "Ready for a quote?"
- [ ] Remove specific pricing mentions from service areas
- [ ] Update FAQ schema on guide page with cost questions

---

## Cannibalization Issue #3: "Outdoor Living [Location]" Keywords

### Affected Pages
| Page | Current Target | Conflict Level |
|------|---------------|----------------|
| `/` (Homepage) | "outdoor living", "motorized pergolas chicago" | PRIMARY |
| `/service-areas/lake-county-il` | "lake county outdoor living" | Medium |
| `/service-areas/north-shore-chicago` | "north shore outdoor living" | Medium |
| `/service-areas/sanibel-outdoor-living` | "sanibel outdoor living" | Medium |
| `/design` | "outdoor living design" | Low |

### Resolution Strategy

**Primary Page:** `/` (Homepage)
- Keep targeting: Broad "outdoor living" + "chicago milwaukee"
- Focus: Brand + primary service areas
- Include: General value proposition

**Service Area Pages:**
- Change targeting: "[location] pergolas", "[location] outdoor living contractor"
- Add: Specific location modifier to all keywords
- Remove: Generic "outdoor living" as standalone target
- Include: Local-specific content

**Design Page:** `/design`
- Change targeting: "outdoor living design", "outdoor space design"
- Remove: Location-specific targeting
- Focus: Process, approach, design philosophy

### Implementation Checklist
- [ ] Update title tags on service areas to include specific location
- [ ] Add unique local content to each service area (500+ words)
- [ ] Differentiate service area intros from homepage content
- [ ] Link from service areas to design page for process info
- [ ] Add location schema to service area pages

---

## Cannibalization Issue #4: Commercial vs Residential Overlap

### Affected Pages
| Page | Current Target | Conflict Level |
|------|---------------|----------------|
| `/commercial` | "commercial pergola", "restaurant patio" | PRIMARY |
| `/commercial/hotel-pergolas` | "hotel pergola", "commercial pergola" | Medium |
| `/commercial/restaurant-patio-solutions` | "restaurant patio systems" | Medium |
| `/systems/pergolas` | "pergola" (could rank for commercial) | Medium |

### Resolution Strategy

**Primary Commercial Page:** `/commercial`
- Keep targeting: "commercial pergola", "commercial outdoor living"
- Focus: ROI, business benefits, industries served
- Link to: Specific industry pages

**Industry-Specific Pages:** `/commercial/[industry]-*`
- Target: "[industry] pergola", "[industry] patio systems"
- Examples: "hotel pergola", "restaurant patio enclosure"
- Remove: Generic "commercial pergola" targeting
- Add: Industry-specific benefits and case studies

**Product Page:** `/systems/pergolas`
- Add: "residential pergola" focus
- Include: Residential use cases, homeowner benefits
- Link to: Commercial page for business inquiries
- Add: "For commercial projects, visit our commercial page"

### Implementation Checklist
- [ ] Add "residential" modifiers to `/systems/pergolas` content
- [ ] Create clear commercial/residential toggle or sections
- [ ] Update commercial pages with industry-specific keywords
- [ ] Add internal links: "Commercial project? Click here"
- [ ] Monitor for proper SERP separation

---

## Cannibalization Issue #5: "Retractable Screens/Shades" Keywords

### Affected Pages
| Page | Current Target | Conflict Level |
|------|---------------|----------------|
| `/systems/shades` | "motorized shades", "retractable screens" | PRIMARY |
| `/guides/louvered-pergolas` | Mentions screens as add-on | Low |
| Service area pages | Mention screens | Low |

### Resolution Strategy

**Primary Page:** `/systems/shades`
- Keep targeting: "motorized shades", "retractable screens", "exterior screens"
- Focus: Product specifications, use cases
- Add: Installation locations (porch, patio, garage)

**Guide Page:** `/guides/louvered-pergolas`
- Remove: Detailed screen information
- Keep: Brief mention as pergola add-on
- Link: "Learn about screen systems" → `/systems/shades`

**Future:** Create `/guides/motorized-screens` for educational content

### Implementation Checklist
- [ ] Create comprehensive `/guides/motorized-screens` page
- [ ] Reduce screen detail on pergola guide
- [ ] Cross-link between shade and pergola content
- [ ] Update service areas to link to shades page for screen info

---

## Cannibalization Issue #6: Zoning/Permit Keywords

### Affected Pages
| Page | Current Target | Conflict Level |
|------|---------------|----------------|
| `/service-areas/[location]/zoning-guide` | "[location] pergola permit" | PRIMARY |
| `/guides/louvered-pergolas` | "do I need a permit for pergola" | Low |
| `/service-areas/[location]` | Briefly mentions permits | Low |

### Resolution Strategy

**Primary Pages:** `/service-areas/[location]/zoning-guide`
- Keep targeting: "[location] pergola permit", "[location] zoning"
- Expand: Specific to each municipality
- Update: Ensure year is current in title

**Guide Page:** `/guides/louvered-pergolas`
- Keep: General permit information
- Add: "Check your local requirements" with links to zoning guides
- Mention: That permits are typically required

**Service Area Hubs:** `/service-areas/[location]`
- Remove: Detailed permit information
- Add: "View [Location] Zoning Requirements" link
- Mention: "We handle all permitting"

### Implementation Checklist
- [ ] Expand each zoning guide to 800+ words
- [ ] Add links from guide to specific zoning pages
- [ ] Remove permit details from service area hubs
- [ ] Update year in all zoning guide titles
- [ ] Add Article schema with current publish dates

---

## Cannibalization Issue #7: Brand/Product Name Overlap

### Potential Issue: "Azenco" / "StruXure" / "R-Blade"

**Current State:**
- Mentioned in content but no dedicated pages
- Risk of creating multiple pages mentioning brands without focus

### Prevention Strategy

**DO Create:**
- `/guides/pergola-brand-comparison` - Compares all brands
- Mention brands in context on product pages

**DON'T Create:**
- Individual pages for each brand (unless becoming certified dealer)
- Multiple pages targeting same brand term

**Implementation:**
- [ ] Create single comprehensive brand comparison guide
- [ ] Mention brands naturally in product descriptions
- [ ] Use brand names in alt text and image descriptions
- [ ] Monitor for accidental duplicate targeting

---

## Hierarchical Keyword Mapping

### Product Category Hierarchy
```
/products (conceptual parent)
├── /systems/pergolas
│   ├── Keywords: "motorized pergola", "louvered pergola"
│   ├── /service-areas/[location]/motorized-pergolas
│   │   └── Keywords: "[location] pergola installation"
│   └── /guides/louvered-pergolas
│       └── Keywords: "louvered pergola guide", "pergola cost"
├── /systems/shades
│   ├── Keywords: "motorized shades", "retractable screens"
│   └── /guides/motorized-screens (NEW)
│       └── Keywords: "motorized screen guide"
└── /systems/enclosures
    ├── Keywords: "glass enclosures", "patio enclosures"
    └── /guides/patio-enclosures (NEW)
        └── Keywords: "patio enclosure guide"
```

### Location Hierarchy
```
/service-areas (parent)
├── /service-areas/lake-county-il
│   ├── Keywords: "lake county pergolas", "outdoor living lake county"
│   ├── /service-areas/lake-county-il/zoning-guide
│   │   └── Keywords: "lake county pergola permit"
│   └── Communities (mentioned, not separate pages)
│       └── Keywords: "[community] pergola" (target via content, not separate URL)
```

### Commercial Hierarchy
```
/commercial (parent)
├── Keywords: "commercial pergola", "commercial outdoor living"
├── /commercial/hotel-pergolas
│   └── Keywords: "hotel pergola", "hospitality outdoor systems"
├── /commercial/restaurant-patio-solutions
│   └── Keywords: "restaurant patio", "outdoor dining systems"
└── /commercial/hotel-roof-deck-systems
    └── Keywords: "rooftop bar systems", "roof deck pergola"
```

---

## Monitoring & Maintenance

### Monthly Checks
1. **SERP Overlap Report:** Use Ahrefs/SEMrush to check if multiple pages rank for same keyword
2. **Internal Search Analysis:** Check if site search shows confusing results
3. **Analytics Review:** Look for pages with declining traffic (cannibalization symptom)

### Quarterly Actions
1. **Keyword Mapping Review:** Update this document with new pages
2. **Title Tag Audit:** Ensure all pages follow hierarchy
3. **Internal Link Check:** Verify links support hierarchy, not compete

### Red Flags to Watch
- Two pages ranking for same keyword (positions 5-15)
- Pages with similar titles in SERP
- Declining CTR on previously strong pages
- Internal search returning multiple similar results

---

## Quick Reference: Title Tag Templates

### Product Pages
```
[Lifestyle Benefit] | [Product Name] | EDG Patio & Shade
Example: "Year-Round Outdoor Living | Motorized Louvered Pergolas | EDG"
```

### Location Pages
```
[Location] [Product] | [Secondary Service] | EDG
Example: "Lake County IL Pergolas & Outdoor Living | Libertyville, Highland Park"
```

### Location Deep Pages
```
[Product] Installation [Location] | Custom [Product] | EDG
Example: "Pergola Installation Northbrook IL | Custom Louvered Systems | EDG"
```

### Guide Pages
```
[Complete Guide to X] | [Year Edition] | EDG
Example: "The Complete Guide to Louvered Pergolas | 2026 Edition | EDG"
```

### Commercial Pages
```
[Industry] [Product] | [Benefit] | EDG Commercial
Example: "Hotel Rooftop Pergolas | Maximize Revenue | EDG Commercial"
```

---

*Last Updated: February 2026*  
*Review Cycle: Quarterly*
