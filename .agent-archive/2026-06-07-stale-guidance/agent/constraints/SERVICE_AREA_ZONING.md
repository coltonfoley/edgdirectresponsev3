# Service Area Zoning Guide Constraints

> **Requirements for zoning/permitting guide spoke pages (e.g., /service-areas/wilmette-il/zoning-guide)**

---

## Purpose

Top-of-funnel authority content that captures homeowners researching "how to build legally in [location]." These pages establish expertise and funnel toward consultation.

---

## Content Requirements

### Minimum Word Count
- **600+ words**
- Must be genuinely helpful, not just SEO filler

### Required Sections

1. **Hero Section**
   - H1: `[Location] Pergola & Shade Structure Zoning Guide`
   - Subhead: "What homeowners need to know about permits, setbacks, and building codes"

2. **Introduction (100-150 words)**
   - Acknowledge zoning complexity
   - Promise: simplified guide to village requirements
   - Disclaimer: "always check with village hall"

3. **Quick Reference Table (REQUIRED)**
   Create a table with:
   
   | Requirement | Details |
   |-------------|---------|
   | Setback (Front) | X feet |
   | Setback (Side) | X feet |
   | Setback (Rear) | X feet |
   | Max Height | X feet |
   | Permit Required? | Yes/No |
   | Permit Cost | $X |
   | Buildable Coverage | X% of lot |

4. **Detailed Sections**
   - **Setbacks & Easements**: Specific distances, utility easements
   - **Height Restrictions**: Height at plate, ridge, proximity to neighbors
   - **Impervious Coverage**: The "50% rule" explanation
   - **Historic Districts**: If applicable to this area
   - **HOA Considerations**: Common in high-end areas

5. **The "Gotchas" Section**
   - Common mistakes homeowners make
   - "We wish we knew..." insights
   - Easement surprises

6. **Process Overview**
   - Step-by-step permit process
   - Timeline expectations
   - Village contact info

7. **CTA Section**
   - "Let us handle the permitting"
   - Link to schedule consultation

---

## Research Requirements

### Before Writing, Find:
1. **Official village zoning code** (PDF or website)
2. **Accessory structure regulations** ( pergolas count as?)
3. **Impervious surface calculations**
4. **Recent permit fee schedule**
5. **Village contact information**

### Key Terms to Research:
- "Accessory structure" or "miscellaneous structure"
- "Impervious surface ratio" or "lot coverage"
- "Setback requirements"
- "Height restrictions"

---

## Technical Requirements

### URL Structure
```
/service-areas/[city-state]/zoning-guide
Example: /service-areas/wilmette-il/zoning-guide
```

### Metadata Template
```typescript
export const metadata: Metadata = {
  title: 'Wilmette Zoning & Permitting Guide for Pergolas | EDG',
  description: 'Complete guide to Wilmette pergola permits, setbacks, and building codes. Setbacks, height limits, and impervious coverage rules explained.',
  alternates: {
    canonical: '/service-areas/wilmette-il/zoning-guide',
  },
};
```

### Schema
```typescript
// Article Schema
{
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wilmette Zoning Guide for Outdoor Structures',
  description: '...',
  author: { '@type': 'Organization', name: 'EDG Patio & Shade' },
}

// FAQPage Schema (if structured as FAQ)
{
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{
    '@type': 'Question',
    name: 'Do I need a permit for a pergola in Wilmette?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: '...'
    }
  }]
}
```

---

## Internal Linking

### From Zoning Guide (link OUT to):
- [ ] Parent service area hub
- [ ] Product pages ("Now that you know the rules...")
- [ ] Consultation booking

### To Zoning Guide (link IN from):
- [ ] Service area hub (prominently)
- [ ] Other related zoning guides

---

## Quality Checklist

- [ ] Specific setback distances researched
- [ ] Permit costs current
- [ ] Village contact info accurate
- [ ] "50% rule" or local equivalent explained
- [ ] Disclaimer about checking with village
- [ ] Links back to service area hub
- [ ] CTA to consultation
- [ ] Schema implemented
