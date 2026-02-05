---
name: Site Manager
description: Official guardrails for maintaining website consistency, safety, and quality. Use this skill to create pages, run tests, and format code.
---

# Site Manager

This skill provides the official procedures for modifying the website. You **MUST** use these tools to ensure consistency and prevent regressions.

## 1. Creating New Pages
**Goal**: Create SEO-ready pages with consistent metadata and layout.
**When to use**: Whenever the user asks for a new "page", "landing page", "service area", or "route".

**Command**:
```bash
npm run generate -- --name "Page Title" --route "category/slug-name" --description "SEO Description here"
```

**Parameters**:
- `--name`: The H1 title and meta title (e.g., "Naperville IL Pergolas").
- `--route`: The URL path relative to `src/app/` (e.g., `service-areas/naperville-il`).
- `--description`: A 150-160 character SEO description.

**Example**:
User: "Make a page for Lake Geneva outdoor living."
Agent Action:
```bash
npm run generate -- --name "Lake Geneva Outdoor Living" --route "service-areas/lake-geneva-wi" --description "Expert outdoor living services in Lake Geneva."
```

## 2. Ensuring Quality (Smoke Tests)
**Goal**: Verify the site is healthy and no pages are broken (500 errors).
**When to use**:
- After creating a new page.
- After modifying `next.config.ts` or redirects.
- Before finishing a task to ensure no regressions.

**Command**:
```bash
npm run test:e2e
```

**Output Handling**:
- **PASS**: All green ticks. Proceed.
- **FAIL**: Read the output to see which URL failed (e.g., `Expected 200, got 404`). Fix the broken route or component.

## 3. Code Formatting
**Goal**: Keep the codebase clean and consistent.
**When to use**: After writing any code (React components, config files, etc.).

**Command**:
```bash
npm run format
```

## Workflow Example
If a user asks: "Create a new contact page for dealers."
1.  **Generate**: `npm run generate -- --name "Dealer Contact" --route "contact/dealer" --description "Contact us for dealer inquiries."`
2.  **Edit**: modifying `src/app/contact/dealer/page.tsx` with specific content.
3.  **Format**: `npm run format`
4.  **Verify**: `npm run test:e2e` to ensure the new page loads.
