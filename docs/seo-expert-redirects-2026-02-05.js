// ============================================================
// EDG PATIO & SHADE — SEO RECOVERY REDIRECTS
// For next.config.js (or next.config.mjs)
// Generated: February 5, 2026
//
// INSTRUCTIONS:
// Add this redirects function to your next.config.js.
// If you already have a next.config.js with other settings,
// just add the "redirects" key to your existing config.
//
// Deploy IMMEDIATELY. Every day without these costs rankings.
// ============================================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... your other config settings ...

  async redirects() {
    return [
      // ── OLD WORDPRESS CORE PRODUCT PAGES ────────────────────
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
        source: '/progressivescreens',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/lacantina',
        destination: '/systems/enclosures',
        permanent: true,
      },
      {
        source: '/sundancelr',
        destination: '/systems/pergolas',
        permanent: true,
      },

      // ── PRODUCT PAGES ───────────────────────────────────────
      {
        source: '/product-page/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/yoder-smokers',
        destination: '/',
        permanent: true,
      },
      {
        source:
          '/challenger-designs-outdoor-kitchens-edg-patio-shade-authorized-dealer',
        destination: '/',
        permanent: true,
      },

      // ── B2B / DEALER / TRADE PAGES ──────────────────────────
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

      // ── HOSPITALITY / COMMERCIAL ────────────────────────────
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

      // ── OLD LOCATION PAGES (Pergola - out of area) ──────────
      {
        source: '/custom-aluminum-pergola-cleveland-ohio',
        destination: '/',
        permanent: true,
      },
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

      // ── LOCATION PAGES (Screens - local SEO value) ──────────
      {
        source: '/rooftop-louvered-pergola-chicago',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/motorized-screens-chicago',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/naperville-motorized-screens',
        destination: '/service-areas/naperville-il',
        permanent: true,
      },
      {
        source: '/dupage-county-motorized-screens',
        destination: '/service-areas/naperville-il',
        permanent: true,
      },
      {
        source: '/mchenry-county-motorized-screens',
        destination: '/service-areas/mchenry-county-il',
        permanent: true,
      },
      {
        source: '/kane-county-motorized-screens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/rockford-motorized-screens',
        destination: '/',
        permanent: true,
      },

      // ── BLOG POSTS (WordPress date-based URLs) ──────────────
      {
        source:
          '/2025/04/07/motorized-screens-chicago-enjoy-your-patio-longer-better-with-edg-patio-shade',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/2025/05/01/lake-geneva-outdoor-living-guide',
        destination: '/service-areas/lake-geneva-wi',
        permanent: true,
      },
      {
        source: '/2025/05/21/kenosha-outdoor-living-guide',
        destination: '/service-areas/southeast-wisconsin',
        permanent: true,
      },

      // ── CATCH-ALL: Old blog date structures ─────────────────
      {
        source: '/2025/:path*',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/2024/:path*',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/2023/:path*',
        destination: '/guides',
        permanent: true,
      },

      // ── STANDARD WORDPRESS PAGES ────────────────────────────
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },

      // ── WORDPRESS INFRASTRUCTURE ────────────────────────────
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: false,
      },
      {
        source: '/wp-json/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/xmlrpc.php',
        destination: '/',
        permanent: false,
      },
    ];
  },

  // Next.js automatically handles trailing slashes.
  // Set this to true if your old WordPress URLs had trailing slashes
  // and your new site doesn't (or vice versa). This ensures both
  // /page and /page/ resolve correctly.
  trailingSlash: false,
};

module.exports = nextConfig;
