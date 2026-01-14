---
name: SEO Optimizer
description: A comprehensive workflow to review performance, research keywords, and generate high-ranking content weekly.
---
# SEO Optimization Skill

This skill guides the agent through a weekly SEO improvement cycle.

## Workflow Steps

### 1. Performance Review (Weekly)
- **Action**: Analyze current traffic and lead sources.
- **Tools**: `browser` (Use `sales@edgpatioshade.com` / `B@llin101` for GA/Search Console).
- **Goal**: Identify which pages are performing and where the drop-offs are.
- **Metrics to Track**:
  - Organic Traffic Users
  - Engagement Rate
  - Conversion Rate (Lead Form Submits)
  - Top Landing Pages

### 2. Research & Opportunity Identification
- **Action**: Find new content opportunities and gather local intelligence.
- **Tools**: `search_web`, `view_file` (to check `src/data/gallery-images.json`)
- **Process**:
  1.  **Target Selection**: Pick a high-value city (e.g., "Barrington", "Oak Brook").
  2.  **Competitive Analysis**: Search for competitors and analyze their content structure.
  3.  **Hyper-Local Intelligence**: Find 3 specific data points to make content authentic:
      - **Zoning Body**: Who handles permits? (e.g., "Village of Barrington Architectural Review Commission").
      - **Landmarks**: Nearby natural features (e.g., "Fox River", "Lake Geneva").
      - **Housing Style**: Predominant architecture (e.g., "Georgian Estates", "Modern Farmhouse").
  4.  **Image Selection**:
      - Search `src/data/gallery-images.json` for images matching the vibe (e.g., "pool", "lake", "estate").
      - Select 4 distinct image paths:
        - `[HERO_IMAGE]`: High impact, wide shot.
        - `[GALLERY_IMAGE_1-3]`: Detailed shots showing quality.
      - **CRITICAL**: Do NOT label generic images as being "in [City]" or "at [Locations]". Use representative terms like "Luxury styling similar to [City] estates" or "Featured Design Styles".

### 3. Content Generation
- **Action**: Create or update pages using the template.
- **Tools**: `write_to_file`
- **Templates**:
  - `templates/service_area_page.tsx`: For city-specific landing pages.
- **Process**:
  - Copy the template code.
  - Fill all `[VARIABLES]` including the new **Hyper-Local** and **Image** variables.
  - Ensure the `metadata` export is unique and optimized.

### 4. Technical Audit & Registration
- **Action**: Register the new page and ensure health.
- **Tools**: `run_command`
- **Process**:
  1.  **Auto-Register**: Run the registration script (updates `sitemap.ts`, `service-areas/page.tsx`, and `Navbar.tsx`):
      ```bash
      node scripts/register-service-area.mjs --slug="[SLUG]" --name="[CITY_NAME]" --desc="[DESCRIPTION]" --communities="[COMMUNITY_LIST]"
      ```
  2.  **Build Check**: Run `npm run build` to verify no errors.
  3.  **Schema and Indexing**: Verify `robots.ts` and standard Schema tags.
  4.  **Visual Verification**:
      - Start local server: `npm run dev`
      - Verify page at `http://localhost:3000/service-areas/[SLUG]`
      - Check for broken images or layout shifts.

### 5. Deployment & Indexing
- **Action**: Deploy to production and request indexing.
- **Process**:
  1.  **Deploy**:
      - Commit and push changes: `git push origin main`
      - **WAIT** for Vercel deployment to complete (verify live URL works).
  2.  **Request Indexing**:
      - **Construct Deep Link**:
        - URL: `https://search.google.com/search-console/inspect?resource_id=https://edgpatioshade.com/&id=https://edgpatioshade.com/service-areas/[SLUG]`
      - **Execute**:
        - Use `browser` to open this link.
        - **Target Account**: `sales@edgpatioshade.com` (B@llin101).
        - Click "Request Indexing" once the page loads.
        - Confirmation: Ensure the "Indexing requested" success dialog appears.
- `templates/`: React component templates for fast page building.
