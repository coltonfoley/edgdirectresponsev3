---
name: SEO Optimizer
description: A simplified workflow to research local markets and generate high-ranking, brand-aligned content.
---
# SEO Content Generator Skill

This skill guides the agent through creating high-quality, localized service area pages. It focuses on research and brand-aligned writing, leaving technical tasks like indexing to the user.

## Workflow Steps

### 1. Research (The "Agentic" Part)
- **Goal**: Gather enough local intelligence to write authentic copy that helps the user.
- **Action**: Use `search_web` to understand the target location.
- **Process**:
  1.  **Target Selection**: Confirm the city/region with the user.
  2.  **Local Intel Gathering**: Find 3 specific data points to make content authentic:
      - **Zoning/Permitting**: Mention the specific building department or village hall to show expertise (e.g., "We know the Lake Geneva building codes").
      - **Local Geography**: Reference nearby lakes, rivers, or parks (e.g., "Fox River", "North Shore").
      - **Housing Architecture**: Identify common home styles (e.g., "Georgian Estates in Barrington", "Mid-Century Modern in Highland Park") to tailor the design discussion.
  3.  **Image Selection**:
      - Search `src/data/gallery-images.json` for images matching the vibe.
      - **CRITICAL**: Do NOT label generic images as being "in [City]". Use representative terms like "Luxury styling similar to [City] estates".

### 2. Content Generation
- **Goal**: Create a high-converting landing page.
- **Action**: Write the page file (`src/app/service-areas/[slug]/page.tsx`).
- **Guidance**:
  - **Reference**: ALWAYS check `.agent/BRANDING_RULES.md` for tone (Premium, Direct, Problem-Solving).
  - **Template**: Use the structure from `src/app/service-areas/barrington-il/page.tsx` as your base.
  - **Writing Rules**:
    - **Headline**: Benefit-driven and localized (e.g., "Extend Your [City] Summer").
    - **Pain Points**: Relate to local details found in research (e.g., "Lake wind" for waterfront, "Privacy" for tight suburbs).
    - **Why Choose Us**: Explicitly mention handling [City] permits and understanding [City] weather.
    - **Metadata**: Ensure unique title/description tags.

### 3. Registration
- **Goal**: Hook the new page into the site's navigation and sitemap.
- **Action**: Run the registration script.
- **Command**:
  ```bash
  node scripts/register-service-area.mjs --slug="[SLUG]" --name="[CITY_NAME]" --desc="[DESCRIPTION]" --communities="[COMMUNITY_LIST]"
  ```
  *(Note: Replace brackets with actual values. Communities should be a comma-separated string).*

### 4. Deployment (Push)
- **Goal**: Save changes to the codebase.
- **Action**: git add, commit, and push.
- **Command**:
  ```bash
  git add . && git commit -m "add [city] service area page" && git push origin main
  ```
