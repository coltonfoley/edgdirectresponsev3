# EDG Website Image Rules

Verified against the repo on 2026-06-07.

## Source Files

- Main image registry: `src/lib/images.ts`
- Project image helpers: `src/lib/project-images.ts`
- Project data mapping: `src/lib/projects.ts`
- Image validation script: `scripts/validate-images.mjs`
- Gallery generator: `scripts/generate-gallery-data.mjs`
- Public assets: `public/images` and `public/projects`

## Current Rules

- Prefer `src/lib/images.ts` for shared site imagery.
- Use `next/image` for normal rendered content images when practical.
- Preserve descriptive alt text.
- Use `priority` only for above-the-fold/LCP images.
- Run `npm run validate-images` when adding or changing registered images.
- Run `npm run build` before calling deploy-ready image work safe.

## Important Nuance

Do not overstate the old rule that every image path is centralized. The current
repo has:

- a central registry in `src/lib/images.ts`
- project image paths in `public/projects`
- compatibility helpers in `src/lib/project-images.ts`
- some metadata/static image paths such as Open Graph image entries

Before changing image behavior, inspect the actual page and helper it uses.

## Do Not Do This Blindly

- Do not rewrite project-image paths only to satisfy old docs.
- Do not remove public image folders without checking sitemap, gallery data,
  page imports, project data, and build validation.
- Do not replace real project/product images with generic stock-like assets
  when the page needs inspection or sales credibility.
- Do not call a visual change done without browser-checking desktop and mobile.
