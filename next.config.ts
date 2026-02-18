import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
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

  // Cache static assets for 1 year (SEO performance best practice)
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
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
      // NEW: Motorized shades 404 fix (SEO audit)
      {
        source: '/motorized-shades',
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
        destination: '/pro',
        permanent: true,
      },
      {
        source: '/architects-designers',
        destination: '/pro',
        permanent: true,
      },
      {
        source: '/become-a-dealer',
        destination: '/pro',
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
      // SERVICE AREA PAGES
      // ══════════════════════════════════════════════════════════
      {
        source: '/rockford-motorized-screens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mchenry-county-motorized-screens',
        destination: '/service-areas/mchenry-county-il',
        permanent: true,
      },
      {
        source: '/lake-county-motorized-screens',
        destination: '/service-areas/lake-county-il',
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
      // UPDATED: Expert recommends Wisconsin area page
      {
        source: '/custom-aluminum-pergola-madison-wisconsin',
        destination: '/service-areas/southeast-wisconsin',
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
      // UPDATED: Expert recommends Wisconsin service area
      {
        source: '/2025/05/21/kenosha-outdoor-living-guide',
        destination: '/service-areas/southeast-wisconsin',
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
      // CATCH-ALL: Old blog date structures (must be last)
      // ══════════════════════════════════════════════════════════
      {
        source: '/:year(\\d{4})/:slug*',
        destination: '/guides',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
