---
name: Local Dominance Cluster
description: A multi-page SEO strategy for dominating high-net-worth service areas by creating an authority cluster (Hub, Guides, Product Landers, and Projects).
---

# Local Dominance Cluster Skill

This skill is used to move beyond single landing pages and instead build "Authority Moats" around specific geographic locations. It combines education, product specialization, and visual proof to capture leads at every stage of the funnel.

## 1. Discovery & Intelligence
Before building, perform a deep-dive search for:
- **Village Codes**: Zoning for "impermeable coverage," "accessory structures," and "setbacks."
- **Micro-Climate**: Specific weather patterns (e.g., "Lake Forest Humidity," "Sanibel Hurricane Codes," "West Loop Wind").
- **Local Identity**: Landmarks, neighborhood names, and architectural styles (e.g., "Stilt Homes," "Coastal Modern," "Chicago Brownstones").

## 2. The Cluster Blueprint
Every location should have a 4-page minimum cluster:

### A. The Hub (Service Area Page)
- **Path**: `src/app/service-areas/[location-slug]/page.tsx`
- **Purpose**: General capture for location-based searches.
- **Content**: Summary of all services, map/neighborhood list, and links to spokes.

### B. The Spoke 1: Authority Guide
- **Path**: `src/app/service-areas/[location-slug]/zoning-guide/page.tsx`
- **Purpose**: Top-of-funnel authority. Solves the "How do I build here?" problem.
- **Content**: Permitting guides, zoning map references, and "50% rule" warnings.

### C. The Spoke 2: High-Intent Product Page
- **Path**: `src/app/service-areas/[location-slug]/[product-slug]/page.tsx`
- **Purpose**: Bottom-of-funnel lead capture.
- **Content**: Deep-dive into one product (e.g., Louvered Pergolas) framed entirely through the local context (e.g., "Hurricane Rated").

### D. The Spoke 3: Local Proof (Case Study)
- **Path**: Registered in `src/lib/projects.ts`
- **Purpose**: Closes the sale with visual proof.
- **Content**: A specific project in that neighborhood addressing a local challenge (e.g., "Installing on an elevated stilt home deck").

## 3. Integration & Interlinking (The Web)
Pages must be hard-linked to create a "Topic Cluster":
1. **Hub -> Spokes**: Add a "Local Resources" or "Building in [Area]" section to the Hub page.
2. **Spokes -> Hub**: Always include a "Back to [Area] Service Area" button/link.
3. **Internal Footer**: Ensure the Hub page is linked in `src/components/ui/Footer.tsx`.
4. **Sitemap**: Register all new URLs in `src/app/sitemap.ts`.

## 4. Verification & Launch
1. **Check Links**: Verify every "Spoke" has a "Hub" return link.
2. **Build Check**: Run `npm run build` to ensure no route collisions.
3. **GSC Submission**: Once live, submit all 4 URLs to Google Search Console for indexing.

---

## Example Prompt:
*"Antigravity, build a Local Dominance Cluster for Naples, FL. Use the slug 'naples-fl' and nest all spokes under it."*
