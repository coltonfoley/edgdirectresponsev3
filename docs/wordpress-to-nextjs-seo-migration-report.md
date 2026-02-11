# SEO Migration Report: WordPress to Next.js
## Comprehensive Analysis of SEO Issues & Recovery Strategies

**Report Date:** February 9, 2026  
**Project Context:** Post-Migration SEO Recovery Assessment  
**Scope:** Technical SEO issues, recovery timelines, and actionable remediation strategies

---

## Executive Summary

Website migrations from WordPress to Next.js carry significant SEO risk. According to Search Engine Journal's 2024 study of 892 migrations:

| Metric | Statistic |
|--------|-----------|
| **Average recovery time** | 523 days (nearly 18 months) |
| **Sites that never recover** | 17% (even after 1,000 days) |
| **Typical traffic loss (poor execution)** | 30-60% |
| **Sites that improve rankings** | Only 10% |
| **Preventable failures** | 90% |

**Key Finding:** Most migration SEO losses are preventable with proper planning, comprehensive redirect mapping, and structured 90-day post-launch monitoring.

---

## 1. Common Technical SEO Problems After WordPress → Next.js Migration

### 1.1 Rendering Strategy Misconfiguration

**The Problem:**
Next.js offers multiple rendering strategies (SSG, SSR, ISR, CSR), and incorrect configuration can make content invisible to search engines.

**Common Issues:**

| Issue | Impact | Detection |
|-------|--------|-----------|
| Client-side only rendering | Google sees empty markup | View page source - content missing |
| Missing `generateStaticParams` | Dynamic pages not pre-rendered | Search Console - "Crawled - currently not indexed" |
| Incorrect `dynamic` export | Pages rendered as 404 or empty | URL Inspection tool shows no content |
| Window object dependencies in Server Components | Build failures or hydration errors | Console errors, blank pages |

**Example - WRONG (Client-side data fetching):**
```javascript
// This content is INVISIBLE to Google
export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/content').then(r => r.json()).then(setData);
  }, []);
  return <div>{data?.content}</div>; // Empty when crawled
}
```

**Example - CORRECT (Server-side data fetching):**
```javascript
// Content visible to crawlers immediately
export default async function Page() {
  const data = await getContent(); // Fetched at build/request time
  return <div>{data.content}</div>;
}
```

### 1.2 Metadata API Implementation Failures

**Critical Issue (Next.js 15+):** The App Router introduced "metadata streaming" that can render metadata in `<body>` instead of `<head>` if implemented incorrectly.

**Real-World Impact Case:**
> "Saturday, 8:47 AM. Google Search Console notification: 'Search impressions down 73%.' We migrated to Next.js 15 App Router on Thursday. By noon, I discovered: Our metadata was rendering inside `<body>` instead of `<head>`. Every single page. 247 routes. All broken for SEO. Cost to the business: $34,000 in lost revenue over 8 weeks."

**Common Metadata Mistakes:**

1. **Missing `metadataBase`**
   ```javascript
   // WRONG: OG images with relative paths break
   export const metadata = {
     openGraph: { images: ["/og-image.png"] }, // Becomes invalid URL
   };
   
   // CORRECT: Set metadataBase in root layout
   export const metadata = {
     metadataBase: new URL("https://www.yoursite.com"),
     openGraph: { images: ["/og-image.png"] }, // Resolves correctly
   };
   ```

2. **Using `useEffect` or `useState` in metadata generation**
   ```javascript
   // WRONG - metadata must be static or async, not using hooks
   export function generateMetadata() {
     const [title, setTitle] = useState(''); // ❌ Don't do this
     // ...
   }
   ```

3. **Forgetting dynamic metadata for route segments**
   ```javascript
   // CORRECT pattern for dynamic routes
   export async function generateMetadata({ params }) {
     const post = await getPost(params.slug);
     return {
       title: post.title,
       description: post.excerpt,
       alternates: { 
         canonical: `https://site.com/blog/${params.slug}` 
       }
     };
   }
   ```

### 1.3 Core Web Vitals Regression

**WordPress vs Next.js Performance Comparison:**

| Metric | WordPress (Typical) | Next.js (Optimized) | Risk Factor |
|--------|---------------------|---------------------|---------------|
| Desktop Lighthouse | 97% | 100% | Low |
| Mobile Lighthouse | 51% | 86% | **High** |
| Average Load Time | 2-4s | 0.5-1.5s | **High** |
| Time to First Byte | 200-800ms | 50-200ms | Medium |

**Common Performance Issues After Migration:**

1. **Unoptimized images** - Not using `next/image` component
2. **Heavy JavaScript bundles** - Client components without code splitting
3. **Missing font optimization** - Not using `next/font`
4. **Layout shift (CLS)** - Images without dimensions, fonts without `font-display: swap`
5. **Slow LCP** - Hero images without `priority` prop

**Critical Thresholds (Core Web Vitals):**
- **LCP (Largest Contentful Paint):** ≤ 2.5 seconds
- **INP (Interaction to Next Paint):** ≤ 200ms (replaced FID in March 2024)
- **CLS (Cumulative Layout Shift):** ≤ 0.1

---

## 2. URL Structure Changes That Impact Rankings

### 2.1 Common URL Pattern Differences

| Content Type | WordPress Pattern | Next.js Pattern | Impact |
|--------------|-------------------|-----------------|--------|
| Blog posts | `/blog/2024/01/post-title/` | `/blog/post-title` | High - Date removal breaks URLs |
| Categories | `/category/category-name/` | `/blog/category-name` | Medium |
| Pages | `/page-title/` | `/page-title` | Low |
| Products | `/product/product-name/` | `/products/product-name` | High - Singular vs plural |
| Authors | `/author/username/` | `/blog/author/username` | Medium |

### 2.2 URL Change Risk Assessment

**High-Risk Changes (Expect 30-50% traffic drop if not redirected):**
- Removing date prefixes from blog URLs
- Changing `/blog/` to `/articles/`
- Switching from `.html` extensions to clean URLs
- Changing taxonomy structure (categories/tags)

**Medium-Risk Changes:**
- Adding/removing trailing slashes (inconsistent)
- Changing query parameter handling
- Reorganizing folder structure

### 2.3 WordPress to Next.js Specific Issues

**Permalink Structure Migration:**

WordPress stores permalink structure in the database. Common patterns:
```
# WordPress default
/%year%/%monthnum%/%day%/%postname%/

# WordPress custom (common)
/%category%/%postname%/

# WordPress plain (rare)
/?p=123
```

**Next.js Route Structure:**
```
# App Router file structure
app/
├── blog/
│   ├── [slug]/
│   │   └── page.tsx    # → /blog/post-title
│   └── page.tsx        # → /blog
├── [page]/
│   └── page.tsx        # → /about, /contact, etc.
└── page.tsx            # → /
```

**Critical Action:** Create a comprehensive redirect map for every URL pattern change.

---

## 3. Lost Backlinks Due to Redirect Issues

### 3.1 The Backlink Loss Crisis

**Statistics:**
- Up to **70%** of organic traffic can be lost after poorly handled migration
- **Redirect errors account for nearly 80% of SEO migration losses**
- Sites with proper redirects retain **90-96% of rankings**

### 3.2 Common Redirect Mistakes

#### Mistake #1: The "Lazy Redirect" (Homepage Redirect)
**What happens:** All old URLs redirect to the homepage instead of equivalent new pages.

```
# WRONG - Google treats as soft-404
oldsite.com/services/web-design → newsite.com/
oldsite.com/services/seo → newsite.com/
oldsite.com/about → newsite.com/

# CORRECT - Preserves link equity
oldsite.com/services/web-design → newsite.com/services/web-design
oldsite.com/services/seo → newsite.com/services/seo
oldsite.com/about → newsite.com/about-us
```

**Impact:** Google treats mass homepage redirects as soft-404s and removes pages from index.

#### Mistake #2: Redirect Chains
**Problem:** Multiple hops between old and final URL
```
# BAD - Redirect chain
Page A → Page B → Page C → Final Page

# GOOD - Direct redirect
Page A → Final Page
```

**Impact:** Each redirect loses link equity (estimated 10-15% per hop) and adds latency.

#### Mistake #3: Using Wrong Redirect Type
| Status Code | Type | Link Equity Passed | Use Case |
|-------------|------|-------------------|----------|
| 301 | Permanent | 90-99% | **Required for migrations** |
| 308 | Permanent | 90-99% | Next.js default for `permanent: true` |
| 302 | Temporary | Minimal | Temporary campaigns |
| 307 | Temporary | Minimal | Temporary form redirects |

**Note:** Next.js uses 308 instead of 301 (preserves HTTP method), but Google treats them identically.

### 3.3 Preserving Backlink Equity

**Pre-Migration Backlink Audit:**

1. **Export all referring domains** (Ahrefs, SEMrush, Moz)
2. **Identify high-authority backlinks** (DR 50+)
3. **Map target URLs** to ensure critical pages redirect correctly
4. **Prioritize pages with backlinks** for individual redirect verification

**Backlink Monitoring Post-Migration:**

| Tool | Metric to Track | Alert Threshold |
|------|-----------------|-----------------|
| Ahrefs | Referring domains | >5% drop |
| Google Search Console | External links | Any significant decrease |
| SEMrush | Backlink profile | Lost links from DR 70+ domains |

### 3.4 Recovery Strategy for Lost Backlinks

1. **Identify broken links** pointing to old URLs
2. **Contact webmasters** with updated URLs
3. **Create redirect map** for any missed URLs
4. **Monitor for 404s** from referral traffic

---

## 4. Indexing Problems Specific to Next.js App Router

### 4.1 App Router vs Pages Router SEO Differences

| Feature | Pages Router | App Router | Risk Level |
|---------|--------------|------------|------------|
| Metadata handling | `<Head>` component | `metadata` export | **High** |
| Default rendering | Static/SSR mixed | Server Components | Medium |
| Caching | Manual configuration | Aggressive by default | Medium |
| Route handling | File-based | Segment-based | Low |

### 4.2 Common App Router Indexing Issues

#### Issue #1: Pages Not Being Indexed
**Symptoms:**
- "Discovered - currently not indexed" in Search Console
- "Crawled - currently not indexed" errors
- Pages visible in sitemap but not in Google

**Common Causes:**

1. **Missing `generateStaticParams`** for dynamic routes
   ```javascript
   // REQUIRED for dynamic routes to be pre-rendered
   export async function generateStaticParams() {
     const posts = await getPosts();
     return posts.map((post) => ({ slug: post.slug }));
   }
   ```

2. **Incorrect `robots.txt` blocking `_next/` folder**
   ```
   # WRONG - Blocks essential JS/CSS
   User-agent: *
   Disallow: /_next/
   
   # CORRECT - Allow all static assets
   User-agent: *
   Allow: /
   ```

3. **Accidental `noindex` tags from staging**
   - Check for leftover `noindex` meta tags
   - Verify `X-Robots-Tag` headers
   - Confirm `robots` field in metadata

#### Issue #2: Duplicate Content Without User-Selected Canonical

**Cause:** Google sees both old and new URLs during migration period.

**Fix:**
```javascript
export const metadata = {
  alternates: {
    canonical: 'https://www.yoursite.com/current-page',
  },
};
```

#### Issue #3: Soft 404 Errors

**Cause:** Redirecting to less relevant pages or homepage.

**Google Search Console Error:** "Soft 404"

**Fix:** Ensure redirects point to genuinely equivalent content.

### 4.3 App Router Specific Configuration

**Critical Files for SEO:**

```
app/
├── sitemap.ts          # Auto-generated at /sitemap.xml
├── robots.ts           # Auto-generated at /robots.txt
├── layout.tsx          # Root metadata and structure
├── not-found.tsx       # Custom 404 page
└── [routes]/
    └── page.tsx        # Page components with metadata
```

**Sitemap Implementation:**
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  
  return [
    {
      url: 'https://yoursite.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...posts.map(post => ({
      url: `https://yoursite.com/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
```

---

## 5. Lost Content/Pages During Migration

### 5.1 Common Content Loss Scenarios

| Content Type | WordPress Storage | Migration Risk | Prevention |
|--------------|-------------------|----------------|------------|
| Posts/Pages | MySQL database | Low (if exported) | Full XML export |
| Custom fields | postmeta table | **High** | Map all meta fields |
| Taxonomies | wp_terms | Medium | Export categories/tags |
| Media library | wp_posts (attachments) | Medium | Migrate files + update URLs |
| SEO metadata | Plugin tables (Yoast/Rank Math) | **High** | Export before disabling plugins |
| Shortcodes | Post content | **High** | Convert to components |
| Menus | wp_posts + wp_terms | Medium | Document structure |
| Widgets | wp_options | **High** | Manual recreation |
| Comments | wp_comments | Low | Export if valuable |

### 5.2 SEO Metadata Migration Challenges

**WordPress SEO plugins store data differently:**

| Plugin | Storage Method | Migration Approach |
|--------|---------------|-------------------|
| Yoast SEO | postmeta table | Export via Yoast's tools or database query |
| Rank Math | postmeta table | Built-in export feature |
| All in One SEO | postmeta table | Export function available |
| SEOPress | postmeta table | CSV export |

**Critical Meta Fields to Migrate:**
- Title tags (`_yoast_wpseo_title`)
- Meta descriptions (`_yoast_wpseo_metadesc`)
- Canonical URLs (`_yoast_wpseo_canonical`)
- Focus keywords (`_yoast_wpseo_focuskw`)
- Noindex/nofollow settings (`_yoast_wpseo_meta-robots-noindex`)
- Open Graph data (`_yoast_wpseo_opengraph-*`)

### 5.3 Content Formatting Issues

**WordPress Content → Next.js Conversion:**

| WordPress Element | Next.js Equivalent | Notes |
|-------------------|-------------------|-------|
| `[gallery]` | Custom Gallery component | Requires manual migration |
| `[caption]` | Figure/Figcaption | Semantic HTML |
| Embed blocks | Next.js `<Image>` or iframe | Security considerations |
| Custom shortcodes | React components | Must be rebuilt |
| Gutenberg blocks | Custom components | Complex migration |

### 5.4 Orphan Pages

**Definition:** Pages with no internal links pointing to them.

**Post-Migration Risk:**
- URLs change, breaking internal links
- Navigation structure differs
- Contextual links lost during content transfer

**Detection:**
```bash
# Using Screaming Frog
1. Crawl site
2. Export "Orphan URLs" report
3. Verify pages that should be indexed
```

**Fix:**
1. Add internal links from relevant pages
2. Include in XML sitemap
3. Add to navigation/footer if appropriate
4. Use "Request Indexing" in Search Console

---

## 6. Meta Tag Issues in Next.js vs WordPress

### 6.1 Key Differences

| Aspect | WordPress + Yoast/Rank Math | Next.js App Router | Risk |
|--------|----------------------------|-------------------|------|
| Title generation | Auto + manual override | `title` in metadata export | Medium |
| Meta description | Editor UI field | `description` in metadata | Medium |
| Open Graph | Auto-generated | Manual `openGraph` config | **High** |
| Twitter Cards | Auto-generated | Manual `twitter` config | **High** |
| Canonical | Auto + manual | Manual `alternates.canonical` | **High** |
| Schema markup | Auto via plugin | Manual JSON-LD | **High** |
| Robots control | Checkbox UI | `robots` metadata object | Medium |

### 6.2 Common Meta Tag Migration Errors

#### Error #1: Duplicate or Missing Title Tags
```javascript
// WRONG - No template pattern
export const metadata = {
  title: 'My Company', // Same on every page!
};

// CORRECT - Using template
// Root layout:
export const metadata = {
  title: {
    default: 'My Company',
    template: '%s | My Company',
  },
};

// Page:
export const metadata = {
  title: 'About Us', // Becomes "About Us | My Company"
};
```

#### Error #2: Missing Open Graph Images
```javascript
// WRONG - No OG image specified
export const metadata = {
  title: 'My Page',
  description: 'Page description',
};

// CORRECT - Complete OG configuration
export const metadata = {
  title: 'My Page',
  description: 'Page description',
  openGraph: {
    title: 'My Page',
    description: 'Page description',
    url: 'https://yoursite.com/page',
    siteName: 'My Company',
    images: [
      {
        url: 'https://yoursite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Page OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
```

#### Error #3: Incorrect Canonical URLs
```javascript
// WRONG - Relative canonical
export const metadata = {
  alternates: {
    canonical: '/page',
  },
};

// CORRECT - Absolute canonical
export const metadata = {
  alternates: {
    canonical: 'https://yoursite.com/page',
  },
};
```

### 6.3 Schema Markup Migration

**WordPress plugins (Yoast/Rank Math)** automatically generate:
- Organization schema
- Article/BlogPosting schema
- BreadcrumbList schema
- FAQ schema (if enabled)
- Product schema (WooCommerce)

**Next.js requires manual implementation:**
```typescript
// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {/* page content */}
    </>
  );
}
```

**Critical for 2025:** AI search engines (ChatGPT, Perplexity, Google AI Overviews) rely heavily on structured data. Losing schema markup = invisible to AI search.

---

## 7. Sitemap Problems After Migration

### 7.1 Common Sitemap Issues

| Issue | Cause | Impact | Detection |
|-------|-------|--------|-----------|
| Old URLs in sitemap | Not regenerating sitemap | Wasted crawl budget | Search Console |
| Missing new URLs | Dynamic routes not included | Pages not discovered | Coverage report |
| Staging URLs | Environment variables wrong | Indexing wrong domain | URL Inspection |
| Wrong protocol | http vs https confusion | Canonical issues | Sitemap validation |
| Infinite sitemap | Pagination errors | Crawl problems | Manual review |

### 7.2 Next.js Sitemap Implementation

**Static sitemap (simple sites):**
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yoursite.com', lastModified: new Date() },
    { url: 'https://yoursite.com/about', lastModified: new Date() },
    // ... manually list all URLs
  ];
}
```

**Dynamic sitemap (CMS-driven):**
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yoursite.com';
  
  // Fetch all dynamic content
  const [posts, pages, products] = await Promise.all([
    getAllPosts(),
    getAllPages(),
    getAllProducts(),
  ]);

  const postUrls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const pageUrls = pages.map(page => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    ...postUrls,
    ...pageUrls,
  ];
}
```

### 7.3 Sitemap Best Practices

1. **Priority Strategy:**
   - 1.0: Homepage
   - 0.8: Content hubs (blog index)
   - 0.7: Individual content pieces
   - 0.6: Supporting pages

2. **Change Frequency:**
   - Set accurately based on actual update patterns
   - Blog posts: `weekly` or `monthly`
   - Static pages: `monthly` or `yearly`
   - Product pages: `daily` or `weekly`

3. **Submit to Search Console:**
   - Submit immediately after migration
   - Verify no errors
   - Re-submit after major content updates

### 7.4 Sitemap Validation Checklist

- [ ] All important pages included
- [ ] No 404 URLs in sitemap
- [ ] No staging/development URLs
- [ ] Correct protocol (https)
- [ ] Correct domain (www vs non-www)
- [ ] Valid XML format
- [ ] Under 50,000 URLs per file
- [ ] Under 50MB uncompressed

---

## 8. Canonical URL Issues

### 8.1 Common Canonical Problems

| Problem | Cause | Impact |
|---------|-------|--------|
| Missing canonical | Not implemented | Duplicate content issues |
| Self-referencing wrong | Hardcoded URL | Wrong page indexed |
| Staging canonical | Environment config | Indexing wrong domain |
| Trailing slash mismatch | Inconsistent config | Duplicate URLs indexed |
| www vs non-www | Missing redirect | Split authority |
| Protocol mismatch | http in canonical | Security/duplicate issues |

### 8.2 Next.js Canonical Implementation

```javascript
// app/layout.tsx - Root canonical
export const metadata = {
  metadataBase: new URL('https://www.yoursite.com'),
  alternates: {
    canonical: '/',
  },
};

// app/blog/[slug]/page.tsx - Dynamic canonical
export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}
```

### 8.3 Trailing Slash Configuration

**Consistency is critical.** Choose one approach:

```javascript
// next.config.js - Force trailing slashes
module.exports = {
  trailingSlash: true,  // All URLs end with /
};

// Or force no trailing slashes
module.exports = {
  trailingSlash: false,  // All URLs without /
};
```

**Match your canonical to your URL structure:**
- If `trailingSlash: true` → Canonical should be `/page/`
- If `trailingSlash: false` → Canonical should be `/page`

### 8.4 www vs non-www

**Choose one and redirect the other:**

```javascript
// middleware.ts - Force www
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  
  if (!host?.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = 'www.' + host;
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}
```

---

## 9. SEO Recovery Timeline After Migration

### 9.1 Expected Recovery Timelines

| Migration Type | Expected Drop | Recovery Time | Notes |
|----------------|---------------|---------------|-------|
| Design refresh (same URLs) | 5-15% | 1-2 weeks | Minimal risk |
| HTTP to HTTPS | 5-15% | 2-4 weeks | Well-documented process |
| CMS platform change (WordPress → Next.js) | 10-30% | **4-8 weeks** | **Current scenario** |
| URL structure change | 20-40% | 4-12 weeks | Depends on redirect quality |
| Domain migration | 40-70% | 6-18 months | Highest risk |

### 9.2 Week-by-Week Recovery Expectations

**Week 1-2: Immediate Impact**
- 10-25% traffic dip is normal
- Search Console shows crawling activity
- Some rankings fluctuate
- **Action:** Monitor daily, fix critical errors immediately

**Week 3-4: Early Recovery**
- Traffic should stabilize at 85-95% of baseline
- New URLs start appearing in index
- Redirect errors become visible
- **Action:** Fix 404s, verify redirects working

**Week 5-8: Full Recovery Period**
- Return to 95-100% of baseline traffic
- Rankings stabilize
- Core Web Vitals data populates
- **Action:** Optimize underperforming pages

**Week 9-12: Optimization Phase**
- Traffic often exceeds pre-migration levels
- Performance improvements materialize
- **Action:** Content optimization, new content creation

### 9.3 Factors Affecting Recovery Speed

**Fast Recovery (4-6 weeks):**
- Comprehensive 301 redirect mapping
- Preserved metadata and content
- Improved Core Web Vitals
- Clean sitemap submission
- Regular Search Console monitoring

**Slow Recovery (3-6+ months):**
- Missing redirects
- Content changes/loss
- Performance regression
- Poor internal linking
- Indexing blocks

### 9.4 Critical Monitoring Period

**Daily (Week 1-2):**
- Search Console coverage report
- 404 error tracking
- Server logs for crawl errors

**Weekly (Week 3-12):**
- Organic traffic trends
- Keyword ranking positions
- Core Web Vitals metrics
- Backlink profile

**Monthly (Ongoing):**
- Full technical SEO audit
- Content performance analysis
- Competitor comparison

---

## 10. Best Practices for Recovering Rankings Post-Migration

### 10.1 Immediate Actions (First 48 Hours)

1. **Verify redirects are working**
   ```bash
   # Test critical URLs
   curl -I -L https://old-url.com/page
   # Should return 301 → new URL with 200
   ```

2. **Submit new sitemap to Google Search Console**
   - Remove old sitemap
   - Submit new sitemap
   - Request indexing for homepage

3. **Check for indexing blocks**
   - Verify robots.txt allows crawling
   - Confirm no `noindex` tags on important pages
   - Check `X-Robots-Tag` headers

4. **Validate structured data**
   - Use Google's Rich Results Test
   - Verify schema from WordPress is migrated
   - Check for JSON-LD errors

### 10.2 Short-Term Recovery (Week 1-4)

1. **Fix 404 errors immediately**
   - Monitor Search Console daily
   - Create redirects for any missed URLs
   - Prioritize high-traffic pages

2. **Request indexing for key pages**
   - Use URL Inspection tool
   - Focus on revenue-driving pages
   - Don't overuse (Google may ignore spammy requests)

3. **Monitor Core Web Vitals**
   - Compare pre/post migration scores
   - Fix any regressions immediately
   - Optimize images and fonts

4. **Update internal links**
   - Don't rely on redirects for internal navigation
   - Update hardcoded URLs in content
   - Fix navigation links

### 10.3 Medium-Term Recovery (Month 2-3)

1. **Content optimization**
   - Refresh underperforming content
   - Ensure all migrated content is complete
   - Add internal links to orphan pages

2. **Backlink reclamation**
   - Contact sites linking to old URLs
   - Request link updates
   - Monitor for new backlink opportunities

3. **Performance optimization**
   - Leverage Next.js performance features
   - Implement advanced caching strategies
   - Optimize LCP, INP, and CLS

### 10.4 Long-Term Growth (Month 3+)

1. **Content expansion**
   - Add new content regularly
   - Target long-tail keywords
   - Build topical authority

2. **Technical SEO maintenance**
   - Regular site audits
   - Monitor for new issues
   - Keep dependencies updated

3. **Performance monitoring**
   - Track Core Web Vitals trends
   - Benchmark against competitors
   - Continuously optimize

### 10.5 Recovery Action Checklist

**Pre-Migration:**
- [ ] Full site crawl and URL inventory
- [ ] Backlink profile export
- [ ] Content and metadata backup
- [ ] Redirect map creation
- [ ] Baseline metrics documentation

**Launch Day:**
- [ ] DNS switch
- [ ] Redirect validation
- [ ] Sitemap submission
- [ ] Search Console verification
- [ ] Analytics tracking verification

**Week 1-2:**
- [ ] Daily Search Console monitoring
- [ ] 404 error resolution
- [ ] Critical redirect fixes
- [ ] Core Web Vitals check

**Week 3-4:**
- [ ] Traffic trend analysis
- [ ] Ranking position tracking
- [ ] Internal link updates
- [ ] Content completeness verification

**Month 2-3:**
- [ ] Backlink outreach
- [ ] Content optimization
- [ ] Performance improvements
- [ ] Full SEO audit

---

## Appendix A: Technical Implementation Examples

### Complete Next.js Metadata Setup

```typescript
// lib/seo.ts
import { Metadata } from 'next';

const SITE_URL = 'https://www.yoursite.com';

export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || '/default-og.jpg';

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Your Site Name',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
```

### Redirect Implementation in next.config.js

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      // Blog date removal redirect
      {
        source: '/blog/:year/:month/:day/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      // Category migration
      {
        source: '/category/:slug',
        destination: '/blog/category/:slug',
        permanent: true,
      },
      // Specific page redirects
      {
        source: '/old-services',
        destination: '/services',
        permanent: true,
      },
      // Redirect with query parameters
      {
        source: '/products',
        destination: '/shop',
        permanent: true,
        has: [
          {
            type: 'query',
            key: 'category',
            value: '(?<category>.*)',
          },
        ],
      },
    ];
  },
};
```

### JSON-LD Structured Data Component

```typescript
// components/JsonLd.tsx
import { ReactNode } from 'react';

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

// Usage in page
import { JsonLd } from '@/components/JsonLd';

export default function BlogPost({ post }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Company',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yoursite.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yoursite.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      {/* page content */}
    </>
  );
}
```

---

## Appendix B: Essential Tools for Migration Recovery

| Tool | Purpose | Free Tier |
|------|---------|-----------|
| Google Search Console | Monitor indexing, coverage, Core Web Vitals | Yes |
| Google Analytics 4 | Traffic analysis | Yes |
| Screaming Frog | Site crawling, redirect validation | 500 URLs free |
| Ahrefs | Backlink monitoring | Limited |
| SEMrush | Rank tracking, site audit | Limited |
| PageSpeed Insights | Performance testing | Yes |
| Rich Results Test | Schema validation | Yes |
| Redirect Checker | Bulk redirect testing | Yes |
| Wayback Machine | Historical content comparison | Yes |

---

## Conclusion

WordPress to Next.js migrations carry significant SEO risk, but with proper planning and execution, rankings can be preserved and even improved. The key success factors are:

1. **Comprehensive redirect mapping** - Every old URL must redirect to its most relevant new equivalent
2. **Metadata preservation** - Migrate all SEO metadata from WordPress plugins
3. **Technical SEO validation** - Ensure proper indexing, canonicals, and structured data
4. **Performance maintenance** - Leverage Next.js features to improve Core Web Vitals
5. **Aggressive monitoring** - Daily checks in the first weeks, weekly thereafter

**Expected Outcome:** With proper execution, traffic should recover to 95-100% of baseline within 4-8 weeks, often exceeding pre-migration performance due to Next.js performance advantages.

**Remember:** The 90 days after launch determine success or failure. The real work happens post-migration, not during the development phase.

---

*Report compiled from industry research, case studies, and Next.js documentation.*
*For questions or assistance with implementation, consult with an experienced SEO specialist.*
