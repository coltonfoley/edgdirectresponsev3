import type { NextConfig } from "next";

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
  async redirects() {
    return [
      // --- Specific Page Mappings ---
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
        source: '/rockford-motorized-screens',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/mchenry-county-motorized-screens',
        destination: '/service-areas/mchenry-county-il',
        permanent: true,
      },
      {
        source: '/challenger-designs-outdoor-kitchens-edg-patio-shade-authorized-dealer',
        destination: '/systems/appliances',
        permanent: true,
      },
      {
        source: '/aluminum-pergola',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/lake-county-motorized-screens',
        destination: '/service-areas/lake-county-il',
        permanent: true,
      },
      {
        source: '/dupage-county-motorized-screens',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/kane-county-motorized-screens',
        destination: '/service-areas',
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
      {
        source: '/careers',
        destination: '/contact',
        permanent: true,
      },
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

      // --- Blog Post Mappings ---
      {
        source: '/2025/01/31/maximizing-guest-satisfaction-with-edg-patio-shade-transforming-outdoor-spaces-into-unforgettable-retreats',
        destination: '/commercial',
        permanent: true,
      },
      {
        source: '/2025/04/07/motorized-screens-chicago-enjoy-your-patio-longer-better-with-edg-patio-shade',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/2025/04/21/magnatrack-vs-zipper-screens',
        destination: '/systems/shades',
        permanent: true,
      },
      {
        source: '/2025/05/01/lake-geneva-outdoor-living-guide',
        destination: '/guide',
        permanent: true,
      },
      {
        source: '/2025/05/12/naperville-outdoor-living-guide',
        destination: '/guide',
        permanent: true,
      },
      {
        source: '/2025/05/21/kenosha-outdoor-living-guide',
        destination: '/guide',
        permanent: true,
      },
      {
        source: '/2025/07/22/dupage-county-outdoor-living-guide',
        destination: '/guide',
        permanent: true,
      },
      {
        source: '/2025/07/22/kane-county-outdoor-living-guide',
        destination: '/guide',
        permanent: true,
      },
      {
        source: '/2025/11/19/aluminum-pergola-cost-diy-vs-pro',
        destination: '/price',
        permanent: true,
      },

      // --- Portfolio ---
      {
        source: '/portfolio-item/:slug*',
        destination: '/projects',
        permanent: true,
      },

      // --- Legacy & Catch-alls ---
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
        source: '/top-rated-custom-aluminum-pergola-minneapolis-minnesota',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/louvered-roof-systems',
        destination: '/systems/pergolas',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/outdoor-styling-trends-for-2023',
        destination: '/guide',
        permanent: true,
      },
      {
        source: '/essential-outdoor-appliances-for-2023',
        destination: '/guide',
        permanent: true,
      },
      {
        source: '/wood-grain-aluminum-building-products',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:slug*',
        destination: '/guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
