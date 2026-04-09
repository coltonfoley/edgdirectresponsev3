import type { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for EDG Patio & Shade
 * 
 * SEO Impact:
 * - Controls crawler access to site sections
 * - Points to sitemap for efficient indexing
 * - Blocks private/admin routes from indexing
 * 
 * Second-order effects:
 * - Prevents duplicate content issues from /admin, /api routes
 * - Ensures search engines focus crawl budget on valuable pages
 * - Protects sensitive endpoints from being indexed
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.edgpatioshade.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        // Googlebot specific - allow image indexing
        userAgent: 'Googlebot',
        allow: ['/images/', '/'],
        disallow: ['/api/', '/admin/'],
      },
      {
        // Bingbot specific
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
