---
name: Growth Engine
description: A comprehensive lead-generation system that combines strategic opportunity discovery with high-performance SEO page production.
---

# EDG Growth Engine Skill

This skill is the master system for scaling leads. it operates in two modes: **Strategist** (Discovery) and **Builder** (Execution).

## Mode 1: The Strategist (Discovery)
Use this mode when we need to "find the money."
1.  **GSC/Analytics Audit**: Check Google Search Console for "Impression Gaps" (queries ranking #11-#20 that need a dedicated landing page).
2.  **Market Intelligence**: Search for high-net-worth suburbs or commercial verticals (e.g., "Chicago Rooftop Restaurants", "Lake Geneva Waterfront Estates").
3.  **Competitor Gap Analysis**: Identify what products competitors are pushing and find the "Deep Layer" they are missing.
4.  **Campaign Memo**: Present a plan to the user including:
    - **Target**: Product + Location + Angle.
    - **Why**: Data-backed reasoning.
    - **Outcome**: Anticipated lead quality.

## Mode 2: The Builder (Execution)
Use this mode once a target is approved.

### 1. High-Resolution Research
- **Zoning/Permits**: Find the specific village/city building department and local codes for outdoor structures.
- **Micro-Geography**: Reference landmarks, neighborhoods, and local weather patterns (e.g., "North Shore Humidity", "West Loop Rooftop Wind").
- **Architectural Match**: Identify the common home/building styles to tailor the design discussion.

### 2. Direct Response Page Generation
- **Path**: `src/app/service-areas/[slug]/page.tsx` (Residential) or `src/app/commercial/[slug]/page.tsx` (Commercial).
- **Branding**: Follow `.agent/BRANDING_RULES.md` (Premium, Direct, Problem-Solving).
- **Hardcoded Tracking**: 
    - Every "Get a Quote" call must include a unique `source` parameter (e.g., `source: "growth-engine-winnetka-pergola"`).
- **SEO Elements**: Multi-layered headlines, benefit-driven subheads, and schema-ready metadata.

### 3. Registration & Launch (The "Final Gate")
1.  **Registration**: Run `node scripts/register-service-area.mjs --slug="[SLUG]" --name="[CITY_NAME]" ...`
2.  **Verification**: Perform a local build check.
3.  **Deployment**: Git push to trigger production.
4.  **Indexing**: (If authorized) Submit URL to Google Search Console for immediate crawling.

---

## How to use:
*   "Antigravity, run a Growth Engine scan for new opportunities."
*   "Antigravity, build a growth page for [Location] focusing on [Product]."
