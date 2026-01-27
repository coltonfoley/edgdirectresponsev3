---
name: SEO Standards
description: Guidelines for ensuring proper SEO and canonical tag implementation.
---

# SEO Standards & Canonicalization Rules

## Canonical Tags
All pages in this project MUST have an explicit, self-referencing canonical tag defined in their metadata export. 

### Why?
Google Search Console frequently flags "redirect errors" or "duplicate content" when relying on inherited or implicit canonicals. Explicit tags resolve this definitively.

### Implementation Rule
In every `page.tsx` that exports metadata:

```typescript
export const metadata: Metadata = {
    title: "...",
    description: "...",
    alternates: {
        canonical: "/your-page-path", // MUST start with / and have NO trailing slash
    },
};
```

### Prohibited
- DO NOT set a default `canonical: '/'` in the root `layout.tsx`.
- DO NOT rely on the `metadataBase` to automatically generate canonicals without testing.
- DO NOT use full absolute URLs (e.g., `https://...`) in the page files; use relative paths as shown above, which will be resolved against the `metadataBase` defined in `layout.tsx`.

## Sitemaps
- Ensure all new pages are added to `sitemap.ts`.
- `sitemap.ts` must use the full `https://www.edgpatioshade.com` domain.

## Robots.txt
- Ensure `robots.ts` points to the correct sitemap location.
