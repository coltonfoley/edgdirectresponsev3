# CLAUDE.md

This file is a compatibility handoff for Claude Code. The active project guide is `AGENTS.md`; use that file first and treat this file as a short pointer only.

## Project

- EDG Patio & Shade marketing and lead-generation website
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS
- Active production site: `https://www.edgpatioshade.com`
- Current lead source of truth: Rainmaker

## Commands

```bash
npm run dev              # Local development server
npm run env:check        # Check local/deploy environment shape
npm run validate-images  # Verify required public image paths
npm run lint             # ESLint
npm run build            # Validate images, generate gallery data, build
npm run test:e2e         # Playwright smoke tests
```

## Current Lead Flow

Website forms submit to `/api/leads`. Accepted leads are forwarded to Rainmaker through `RAINMAKER_*` environment variables. Resend is optional and only handles notification/follow-up email behavior when configured.

Do not describe Supabase as the active website lead database unless current source code proves that changed.

## Working Rules

- Source code beats old docs, memory, comments, and prior chat.
- Keep `page.tsx` files server-rendered when they need metadata; move interactivity into child client components.
- Preserve lead capture, CTA routing, analytics events, metadata, canonical URLs, JSON-LD, sitemap behavior, and image paths unless the task explicitly changes them.
- Before calling form, CTA, `/api/leads`, Rainmaker, Resend, or analytics work safe, verify the whole affected path.
- Historical agent guidance lives in `.agent-archive/`; treat it as background, not active instruction.
