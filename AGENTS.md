# EDG Website Codex Guide

This is the active Codex guide for the EDG Patio & Shade website.

## Current Project

- Repo: `edgdirectresponsev3`
- Local path: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- GitHub remote: `https://github.com/coltonfoley/edgdirectresponsev3`
- Production site: `https://www.edgpatioshade.com`
- Local branch seen during the June 7, 2026 cleanup: `edg-positioning`

Always verify the current folder, branch, working tree, and affected live URLs
before making changes. Do not assume this file is fresher than the source code.

## Verified Current Facts

These facts were checked against the repo on 2026-06-25:

- Next.js is `16.2.9`; React is `19.2.1`; Node engine is `22.x`.
- Website forms submit to `/api/leads`.
- `/api/leads` forwards accepted leads to Rainmaker through `RAINMAKER_*`
  environment variables.
- The website no longer stores leads in Supabase. Do not describe Supabase as
  the active lead database unless current code proves that changed.
- Resend is optional and used for lead notification/follow-up email behavior
  when configured.
- Vercel Analytics, Vercel Speed Insights, and Google Tag Manager are loaded in
  `src/app/layout.tsx`.
- Current service-area inventory must be counted from
  `src/app/service-areas`, not copied from old docs.

## Active Reference Docs

Use these files before touching the website:

- `docs/codex/source-of-truth.md` - current repo, stack, integrations, and
  source files to inspect first.
- `docs/codex/lead-flow.md` - website lead intake and Rainmaker handoff.
- `docs/codex/seo-rules.md` - metadata, canonical, sitemap, Search Console,
  and local SEO verification.
- `docs/codex/image-rules.md` - image registry and project-image rules.

Old agent and audit archives have been removed from the active working tree.
Use the current source files and `docs/codex/` guidance instead of older
project-history notes.

## Operating Rules

- Current source files beat old docs, memory, comments, and prior chat.
- Keep changes scoped to the requested page, workflow, or bug.
- Do not use `'use client'` in `page.tsx` files that need metadata. Put
  interactivity in child client components.
- Preserve metadata, canonical URLs, JSON-LD, sitemap behavior, internal links,
  image behavior, lead capture, analytics, and CTA routing unless the user
  explicitly asks to change them.
- If a change touches forms, CTA routing, `/api/leads`, analytics, Resend, or
  Rainmaker intake, verify the whole lead path before calling it safe.
- Do not hand-maintain page counts in prose. Count pages from source when
  needed.
- Default website work is not finished while it is local-only. Unless Colton
  explicitly asks for local-only or preview-only work, finish with commit, push
  to `origin/edg-positioning`, production deployment, and live verification.
- Do not publish production changes without a clear report separating local
  checks, pushed commit, deployment state, live URL response, browser proof, and
  Search Console/indexing follow-up.

## Safe Update Loop

1. Confirm the folder, branch, current commit, and working tree.
2. Inspect the actual route, component, metadata, sitemap entry, form path, and
   related docs before editing.
3. Make the smallest useful change.
4. Run targeted checks for the changed route or workflow.
5. For deploy-ready website changes, run `npm run lint` and `npm run build`.
6. Browser-check changed pages on desktop and mobile before calling visual work
   done.
7. After deployment, verify live `200` responses, render, canonical, sitemap,
   and relevant internal links.
8. Treat Google Search Console data as a separate proof layer from live deploy
   proof.

## Browser Rule

Use the Codex in-app Browser for localhost, public pages, file previews,
screenshots, visual QA, and testing that does not require a signed-in browser.
For signed-in browser work such as Search Console, open Comet first when it is
available. Any signed-in Comet profile is acceptable. If Comet is not exposed to
Codex, use the connected browser surface that is available for the task and
clearly report which browser was used.
