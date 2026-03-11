import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  // Disable streaming metadata for bots that expect full HTML
  // This ensures crawlers see complete metadata in <head>
  htmlLimitedBots: /Twitterbot|Slackbot|Bingbot|LinkedInBot|WhatsApp|FacebookBot|Discordbot/,

  // Enable Cache Components (Partial Prerendering) - PRODUCTION ONLY
  // SEO Impact: Static shell renders instantly, dynamic content streams
  // UX Impact: Faster TTFB, better perceived performance
  // Second-order: Improves Core Web Vitals (LCP, INP)
  // NOTE: Disabled in dev due to build-manifest issues with dynamic routes
  cacheComponents: process.env.NODE_ENV === 'production',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'image.pollinations.ai',
      },
    ],
  },

  // Ensure consistent URL handling (expert recommendation)
  trailingSlash: false,

  async redirects() {
    return [
      // ══════════════════════════════════════════════════════════
      // BRAND REFACTOR - Trade Partners URL Update
      // ══════════════════════════════════════════════════════════
      {
        source: '/pro',
        destination: '/trade-partners',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // GUIDE CONSOLIDATION
      // ══════════════════════════════════════════════════════════
      {
        source: '/guide',
        destination: '/guides/planning-guide',
        permanent: true,
      },
      {
        source: '/guide/read',
        destination: '/guides/planning-guide/read',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // PAGE REMOVALS
      // ══════════════════════════════════════════════════════════
      {
        source: '/design',
        destination: '/contact',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // OLD WORDPRESS CORE PRODUCT PAGES
      // ══════════════════════════════════════════════════════════
      {
        source: '/custom-pergolas',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/louvered-pergola',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/aluminum-pergola',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/louvered-roof-systems',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/custom',
        destination: '/systems/pergolas',
        permanent: true,
      },
      // NEW: From expert recommendations
      {
        source: '/sundancelr',
        destination: '/systems/pergolas',
        permanent: true,
      },
      // NEW: Shades brand page
      {
        source: '/progressivescreens',
        destination: '/systems/shades',
        permanent: true,
      },
      // NEW: Enclosures brand page
      {
        source: '/lacantina',
        destination: '/systems/enclosures',
        permanent: true,
      },
      {
        source: '/motorized-retractable-screens',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/chicago-motorized-screens',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/motorized-screens-chicago',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/rooftop-louvered-pergola-chicago',
        destination: '/systems/pergolas',
        permanent: true,
      },
      // NEW: Product pages wildcard
      {
        source: '/product-page/:slug*',
        destination: '/',
        permanent: true,
      },
      // NEW: Old product page
      {
        source: '/yoder-smokers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/yoder-smokers-pellet-grills',
        destination: '/systems/appliances',
        permanent: true,
      },
      {
        source:
          '/challenger-designs-outdoor-kitchens-edg-patio-shade-authorized-dealer',
        destination: '/systems/appliances',
        permanent: true,
      },
      {
        source: '/prostor-umbrellas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tuuci-umbrellas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/luxury-outdoor-furniture',
        destination: '/',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // B2B / DEALER / TRADE PAGES (NEW from expert)
      // ══════════════════════════════════════════════════════════
      {
        source: '/work-with-us',
        destination: '/trade-partners',
        permanent: true,
      },
      {
        source: '/architects-designers',
        destination: '/trade-partners',
        permanent: true,
      },
      {
        source: '/become-a-dealer',
        destination: '/trade-partners',
        permanent: true,
      },
      {
        source: '/dealer-login',
        destination: 'https://app.edgpatioshade.com/',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // HOSPITALITY / COMMERCIAL
      // ══════════════════════════════════════════════════════════
      {
        source: '/elevating-hospitality-spaces-with-custom-pergolas',
        destination: '/commercial',
        permanent: true,
      },
      {
        source: '/custom-pergolas-hospitality',
        destination: '/commercial',
        permanent: true,
      },
      {
        source:
          '/how-to-transform-unused-outdoor-areas-into-guest-favorite-spots',
        destination: '/commercial',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // ZONING GUIDE REDIRECTS (Consolidated to service area pages)
      // ══════════════════════════════════════════════════════════
      {
        source: '/service-areas/barrington-il/zoning-guide',
        destination: '/service-areas/barrington-il',
        permanent: true,
      },
      {
        source: '/service-areas/naperville-il/zoning-guide',
        destination: '/service-areas/naperville-il',
        permanent: true,
      },
      {
        source: '/service-areas/northbrook-il/zoning-guide',
        destination: '/service-areas/northbrook-il',
        permanent: true,
      },
      {
        source: '/service-areas/sanibel-outdoor-living/zoning-guide',
        destination: '/service-areas/sanibel-outdoor-living',
        permanent: true,
      },
      {
        source: '/service-areas/wilmette-il/zoning-guide',
        destination: '/service-areas/wilmette-il',
        permanent: true,
      },
      {
        source: '/service-areas/winnetka-il/zoning-guide',
        destination: '/service-areas/winnetka-il',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // SERVICE AREA PAGES
      // ══════════════════════════════════════════════════════════
      {
        source: '/rockford-motorized-screens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mchenry-county-motorized-screens',
        destination: '/service-areas/barrington-il',
        permanent: true,
      },
      {
        source: '/lake-county-motorized-screens',
        destination: '/service-areas/wilmette-il',
        permanent: true,
      },
      // UPDATED: Expert recommends specific location
      {
        source: '/dupage-county-motorized-screens',
        destination: '/service-areas/naperville-il',
        permanent: true,
      },
      // UPDATED: Expert recommends specific location
      {
        source: '/naperville-motorized-screens',
        destination: '/service-areas/naperville-il',
        permanent: true,
      },
      {
        source: '/kane-county-motorized-screens',
        destination: '/',
        permanent: true,
      },
      // Out of service area locations
      {
        source: '/custom-aluminum-pergola-cleveland-ohio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/custom-aluminum-pergola-madison-wisconsin',
        destination: '/service-areas/lake-geneva-wi',
        permanent: true,
      },
      {
        source: '/custom-aluminum-pergola-grand-rapids-michigan',
        destination: '/',
        permanent: true,
      },
      {
        source: '/custom-aluminum-pergola-south-bend-indiana',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-rated-custom-aluminum-pergola-minneapolis-minnesota',
        destination: '/',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // BLOG POSTS (WordPress date-based URLs)
      // ══════════════════════════════════════════════════════════
      {
        source:
          '/2025/01/31/maximizing-guest-satisfaction-with-edg-patio-shade-transforming-outdoor-spaces-into-unforgettable-retreats',
        destination: '/commercial',
        permanent: true,
      },
      {
        source:
          '/2025/04/07/motorized-screens-chicago-enjoy-your-patio-longer-better-with-edg-patio-shade',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/2025/04/21/magnatrack-vs-zipper-screens',
        destination: '/systems/shades',
        permanent: true,
      },
      // UPDATED: Expert recommends service area page for geo content
      {
        source: '/2025/05/01/lake-geneva-outdoor-living-guide',
        destination: '/service-areas/lake-geneva-wi',
        permanent: true,
      },
      {
        source: '/2025/05/12/naperville-outdoor-living-guide',
        destination: '/service-areas/naperville-il',
        permanent: true,
      },
      {
        source: '/2025/05/21/kenosha-outdoor-living-guide',
        destination: '/service-areas/lake-geneva-wi',
        permanent: true,
      },
      {
        source: '/2025/07/22/dupage-county-outdoor-living-guide',
        destination: '/service-areas/naperville-il',
        permanent: true,
      },
      {
        source: '/2025/07/22/kane-county-outdoor-living-guide',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/2025/11/19/aluminum-pergola-cost-diy-vs-pro',
        destination: '/price',
        permanent: true,
      },
      {
        source: '/outdoor-styling-trends-for-2023',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/essential-outdoor-appliances-for-2023',
        destination: '/guides',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // PORTFOLIO / PROJECTS
      // ══════════════════════════════════════════════════════════
      {
        source: '/portfolio-item/:slug*',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/portfolio_entries/:slug*',
        destination: '/projects',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // STANDARD PAGES
      // ══════════════════════════════════════════════════════════
      {
        source: '/about-us',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/how-much-are-louvered-pergolas',
        destination: '/price',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // LEGACY & CATCH-ALLS
      // ══════════════════════════════════════════════════════════
      {
        source: '/https-edgpatioshade-com-lake-geneva-motorized-screens',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/more-for-the-outdoors',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wood-grain-aluminum-building-products',
        destination: '/',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // WORDPRESS INFRASTRUCTURE (Security - 302 redirects)
      // NEW: Block old WordPress attack vectors
      // ══════════════════════════════════════════════════════════
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: false, // 302 for security
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: false, // 302 for security
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: false, // 302 for security
      },
      {
        source: '/wp-json/:path*',
        destination: '/',
        permanent: false, // 302 for security
      },
      {
        source: '/xmlrpc.php',
        destination: '/',
        permanent: false, // 302 for security
      },

      // ══════════════════════════════════════════════════════════
      // ORPHANED PAGES - Redirect orphaned /locations to service-areas
      // These pages have no internal links and duplicate service area content
      // ══════════════════════════════════════════════════════════
      {
        source: '/locations/lake-forest',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/locations/highland-park',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/locations/lake-geneva',
        destination: '/service-areas/lake-geneva-wi',
        permanent: true,
      },

      // ══════════════════════════════════════════════════════════
      // CATCH-ALL: Old blog date structures (must be last)
      // ══════════════════════════════════════════════════════════
      {
        source: '/:year(\\d{4})/:slug*',
        destination: '/guides',
        permanent: true,
      },
    ];
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://images.unsplash.com https://image.pollinations.ai; font-src 'self'; connect-src 'self' https://*.supabase.co https://api.resend.com https://vitals.vercel-insights.com; frame-src https://www.googletagmanager.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
