# EDG Website Folder Cleanup Audit - Lean Second Pass

Date: July 6, 2026

This replaces the first version of this audit. The first pass was too broad and too cautious. For a small local business website, the cleanup should be practical: keep the website, leads, SEO pages, and real project proof; remove the old tool debris, boilerplate, and confusing leftovers.

The cleanup from this tracker has been implemented locally and is awaiting final
verification, commit, push, and deployment proof.

## Current Baseline

- Folder: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- Branch: `edg-positioning`
- Commit: `d5012c3`
- Remote: `https://github.com/coltonfoley/edgdirectresponsev3`
- Validation run: `npx -p node@22 node scripts/validate-images.mjs`
- Image validation result after cleanup: 200 checked, 200 present, 0 missing, 2 orphan candidates

Existing untracked items before this revised audit:

- `docs/codex/seo-audit-implementation-plan-2026-07-06.md`
- untracked `OLD-` enclosure images
- untracked extra project `4.jpg` images
- untracked `public/projects/northbrook-family-entertaining/`

## Plain-English Verdict

The active website is not the mess. The clutter is mostly around it.

The site itself is a normal Next.js marketing site with a lot of SEO pages and image assets. The cleanup should not attack `src/app`, service-area pages, lead forms, Rainmaker handoff, sitemap, or real project photos.

The real cleanup targets are:

1. Local build/test folders that make Finder look messy.
2. Old agent/archive/tooling files that no longer help run the business.
3. Default starter assets from the original app scaffold.
4. Public media leftovers that are not referenced by active source.
5. A few tracked files that contradict the current repo truth.

## Keep As Core Website

These are not junk.

| Path | Decision | Why |
| --- | --- | --- |
| `src/app/` | Keep | Active website routes, SEO pages, sitemap, lead API, project pages, systems pages, and service-area pages. |
| `src/components/` | Keep | Active UI, forms, navigation, gallery, homepage, and service-area components. |
| `src/hooks/useLeadSubmission.ts` | Keep/protect | Active website lead submission path. |
| `src/lib/rainmaker-api.ts` | Keep/protect | Active Rainmaker handoff. |
| `src/lib/projects*.ts` | Keep | Active project data and project page support. |
| `src/lib/images.ts` | Keep, then simplify later | Active image registry. Some old compatibility references can be cleaned after media cleanup. |
| `public/projects/carmines`, `greco`, `jake`, `karp`, `wade` | Keep | Real project photography. |
| `public/images/pergolas`, `shades`, `enclosures`, `appliances`, `saunas`, `brand`, `logos`, `service-areas`, `testimonials` | Keep, with targeted cleanup | Active product, brand, logo, and service-area imagery. |
| `.env.example`, `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `playwright.config.ts`, `.github/` | Keep | Normal project configuration and CI/build support. |
| `docs/codex/source-of-truth.md`, `lead-flow.md`, `seo-rules.md`, `image-rules.md` | Keep | Current operating docs. |
| `e2e/smoke.spec.ts` | Keep | Protects public routes, retired admin/API readers, and lead validation behavior. |

## Clean Locally Only

These are not source code. Deleting them locally is safe; they can be regenerated or are just machine clutter.

| Path | Why |
| --- | --- |
| `.DS_Store`, `docs/.DS_Store`, `public/.DS_Store`, `src/.DS_Store`, `src/app/.DS_Store`, `output/.DS_Store` | Finder artifacts. |
| `.next/` | 817 MB generated Next build/cache output. Removed locally. |
| `node_modules/` | 759 MB dependency install. Only delete if ready to reinstall with `npm ci`. |
| `.playwright-cli/` | Old ignored browser automation logs/snapshots. Removed locally. |
| `output/` | Ignored local output folder; currently not useful. Removed locally. |
| `test-results/` | Ignored Playwright result files. Removed locally. |
| `.claude/settings.local.json` | Ignored local settings. Root `CLAUDE.md` is intentionally absent. Removed locally. |
| `.vercel/` | Local Vercel project link. Keep only if local Vercel commands need it. |
| Empty local folders: `src/app/admin/seo-dashboard`, `src/app/api/analytics`, `src/app/api/debug` | No files, not tracked, and represent retired surfaces. Removed locally. |

## Remove From Repo In A Cleanup PR

These are tracked and look unnecessary or actively misleading for this business website.

| Path | Recommendation | Evidence |
| --- | --- | --- |
| `.cursor/settings.json` | Remove | It enables Supabase tooling, but current site truth says leads go to Rainmaker and Supabase is not the website lead database. |
| `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` | Remove | Default Next/Vercel starter assets. No active source references found. |
| `plopfile.js`, `templates/page.hbs`, `package.json` `generate` script, `plop` dependency | Remove | Generic page generator with a weak boilerplate template. This is not how EDG SEO/service pages should be made. |
| `src/lib/project-images.ts` | Removed after docs update | Deprecated compatibility helper. No active `src` imports found. |
| `scripts/archive/legacy-image-tools/` | Remove from repo or move outside repo | Old placeholder/image tooling. Not current build or maintenance. |
| `.agent-archive/` | Remove from repo or move outside repo | Old agent guidance. Current guidance is `AGENTS.md` plus `docs/codex/`. Keeping stale agent rules in the working tree is confusing. |
| `PERFORMANCE_OPTIMIZATIONS.md` | Move to archive or delete | Old root-level performance note. It does not need to sit beside active project files. |
| `README.md` | Rewrite, not delete | Still mostly create-next-app boilerplate. It should explain EDG-specific setup, checks, lead path, and deployment truth. |

## Media Cleanup

This is the part that should be handled carefully, but not overcomplicated.

| Path / Pattern | Recommendation | Why |
| --- | --- | --- |
| Untracked `public/projects/*/4.jpg` extras | Delete unless Colton confirms these are new approved project photos | Image validator flags them as unreferenced. Current project placeholders use `hero.jpg`, `1.jpg`, `2.jpg`, and `3.jpg`. |
| Untracked `public/projects/northbrook-family-entertaining/` | Delete unless it is new approved media | Validator flags the whole folder as unreferenced. Prior tracker says this placeholder folder had already been removed before. |
| Untracked `public/images/enclosures/OLD-*.jpg` | Delete unless intentionally re-added | Validator flags them as orphan candidates. They are not active source references. |
| Tracked `public/images/appliances/OLD-*.jpg` and `public/images/enclosures/OLD-pergola-patio-outdoor-living.jpg` | Delete in media cleanup PR | `OLD-` filenames in public assets are not good production hygiene, and the validator says they are not active source references. |
| `public/images/brochure/` | Move outside scanned gallery assets or exclude from gallery generation | These are support images, not project/gallery content. The current gallery generator scans `public/images`, so this folder can leak into `/gallery`. |
| `public/images/furniture/README.txt`, `public/images/umbrellas/README.txt` | Delete or move notes into docs | There are no active furniture or umbrella system pages. Empty public asset request folders are noise. |
| `public/brochures/EDG-BROCHURE.pdf` | Keep only if EDG uses the direct URL; otherwise move to Drive/marketing storage | No active source link found. |
| `public/docs/edg-outdoor-living-guide.html` | Keep only if direct URL/backlinks matter; otherwise remove or redirect | No active source link found. |
| `public/images/brand/context-snow.jpg`, `public/images/brand/hero-pergola-open-louvered-backyard.jpg` | Still needs visual decision | These are the only remaining image orphan candidates after cleanup. |

Important: after any media deletion, regenerate gallery data and run image validation. The current gallery imports `src/data/gallery-images.json`, and that file is generated from `public/images`.

## Documentation Cleanup

For a small local business, the repo should not feel like an old consulting archive.

Keep:

- `AGENTS.md`
- `docs/README.md`
- `docs/codex/source-of-truth.md`
- `docs/codex/lead-flow.md`
- `docs/codex/seo-rules.md`
- `docs/codex/image-rules.md`
- current active plans that are still being worked

Remove from the main working tree or move to cold storage:

- `docs/archive/historical/`
- `.agent-archive/`
- old one-off audit/implementation docs once they are superseded

This is not a file-size issue; it is a trust issue. The folder should tell a future editor what is true now.

## Recommended Order

### Pass 1: Local Finder Cleanup

Remove ignored/local-only debris:

- `.DS_Store` files
- `.next/`
- `.playwright-cli/`
- `output/`
- `test-results/`
- empty retired folders under `src/app/admin`, `src/app/api/analytics`, `src/app/api/debug`

No deploy needed.

### Pass 2: Simple Repo Cleanup

One cleanup PR:

- remove default starter SVGs
- remove `.cursor/settings.json`
- remove Plop generator/template/dependency
- remove deprecated `src/lib/project-images.ts` and update docs
- rewrite `README.md`
- remove or relocate old archive/tooling folders

Run:

- `npm install` if dependencies change
- `npm run lint`
- `npm run build`

### Pass 3: Media Cleanup

Separate cleanup PR:

- remove unreferenced `OLD-` and extra `4.jpg` assets unless approved
- decide brochure/docs handling
- exclude non-gallery folders from gallery generation
- regenerate `src/data/gallery-images.json`
- update `docs/codex/project-media-inventory.md`

Check:

- `npm run validate-images`
- `npm run build`
- browser-check `/gallery`, `/projects`, and affected system pages

## Things I Would Not Spend Time On

- Reorganizing `src/app` just because it has many SEO pages.
- Moving normal Next.js config files.
- Refactoring the lead path during cleanup.
- Cleaning project photos without visual/owner confirmation.
- Keeping old agent/tool archives in the repo just in case.

## Bottom Line

If this were my small-business cleanup, I would make the folder boring:

- active app
- active docs
- active media
- no starter junk
- no stale agent/archive material in the main view
- no public `OLD-` assets
- no generic page generator encouraging weak pages

That is enough. This does not need a large architecture project.
