# EDG Website Source Of Truth

Verified against the repo on 2026-06-25.

## Repo Identity

- Local path: `/Users/coltonfoley/Documents/Codex Projects/EDG Website`
- GitHub remote: `https://github.com/coltonfoley/edgdirectresponsev3`
- Production URL: `https://www.edgpatioshade.com`
- Active local branch during cleanup: `edg-positioning`

Verify these at the start of each work session. The current branch can change.

## Package Facts

Read `package.json` before making dependency or build assumptions.

- Runtime engine: Node `22.x`
- Framework: Next.js `16.2.9`
- React: `19.2.1`
- Styling: Tailwind CSS `4`
- Build command: `npm run build`
- Build includes image validation and gallery data generation.
- Common checks: `npm run lint`, `npm run build`, `npm run validate-images`,
  `npm run env:check`, `npm run test:e2e`, `npm run test:contrast`

## Current Integrations

- Website lead intake: `src/app/api/leads/route.ts`
- Rainmaker client: `src/lib/rainmaker-api.ts`
- Lead form client hook: `src/hooks/useLeadSubmission.ts`
- Environment shape: `.env.example`
- Analytics, Speed Insights, and GTM: `src/app/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Redirects and image domains: `next.config.ts`
- Image registry: `src/lib/images.ts`

## Do Not Trust Stale Inventories

Older agent and audit archives have been removed from the active working tree.
Use source files, current commands, and the docs in `docs/codex/` instead of
old page-count or provider-choice notes.

Useful source checks:

```bash
find src/app/service-areas -name page.tsx | sort
rg -n "RAINMAKER|RESEND|Supabase|supabase" package.json .env.example src
rg -n "metadata|canonical|sitemap|alternates" src/app src/lib
```

## What This Repo Is For

This is the marketing and SEO website for EDG Patio & Shade. It is not the Ops
Portal and it is not Rainmaker. It captures demand, presents EDG's product and
market positioning, and hands website leads into Rainmaker.

## Public Pricing Rule

Public pages, metadata, JSON-LD, and pull-request text may use broad,
evidence-backed planning bands, but must never publish actual customer or
project totals, quote line amounts, exact calculated project rates, or private
quote details. Keep private source evidence outside the public repository.

## Customer Copy and Brand Review

Read the `edg-brand-guidelines` skill and its `references/brand-reference.md`
before writing or reviewing public copy. Brand guidance is required input,
not a final visual check.

- Write for the prospective customer. Explain the useful product differences,
  what EDG recommends and why, how the project is designed and delivered, and
  how to start a conversation. Use clear, approachable language and concrete
  details rather than generic outdoor-living claims.
- Choose one primary audience and supported geography before drafting. Do not
  mix nationwide trade services and local homeowner installation into every
  page; use the service model that matches the visitor's question.
- EDG specializes in motorized pergolas, retractable screens, and glass
  enclosures. Recommendations start with the project rather than one brand.
  Homeowner copy should describe design, permitting, installation, and care
  in supported local markets. Trade copy should describe nationwide design,
  specification, engineering support, procurement, and installation support.
  Do not imply nationwide homeowner installation.
- General planning guides lead with EDG's project selection, design, and
  delivery process, not named-model showcases. A deliberately product-specific
  page, such as a MagnaTrack guide, can explain its subject where that detail
  is accurate and useful to the buyer.
- Keep research evidence, keyword strategy, commercial relationships,
  unpublished project records, verification limitations, and reviewer notes
  out of customer copy. A source can substantiate a claim without being
  reproduced or linked on the page. Do not publish private source material in
  code, comments, commits, PRs, metadata, or structured data.
- Do not publish competitor prices, quotes, contracts, proposals, or links to
  their documents. A comparison should explain relevant customer choices and
  EDG's offering, not advertise another supplier or describe internal sales
  strategy. Internally, StruXure is not an EDG offering; public copy must not
  imply otherwise, and should naturally introduce EDG pergola alternatives.
- Keep necessary weather, safety, and product limitations brief and useful.
  Explain how EDG addresses them. Do not reproduce an unrelated model's
  instructions, engineering values, warranty extract, or clearance example.
- Use public EDG projects accurately and naturally. Do not turn a planning
  project into a completed installation, imply unrelated photos show one
  combined project, invent outcomes, or narrate what the research record does
  and does not prove. Omit an example that cannot support a useful claim.
- Photos and measurements are helpful, not prerequisites for the initial quote
  request. Keep the next step approachable. Do not make the visitor perform a
  technical site audit before contacting EDG.
- Do not assign Colton or another person a byline, testimonial, review, or
  endorsement without explicit approval. Keep metadata and schema consistent
  with the actual authorship and visible copy.

The release reviewer must read the full rendered page as a prospective buyer,
including FAQs, captions, metadata, schema, guide cards, and sitemap text.
Reject internal context, supplier referrals, repetitive hedging, unsupported
claims, or copy that does not help explain the customer's choice and EDG's
work. A clean build and sourced facts alone are not editorial approval.
