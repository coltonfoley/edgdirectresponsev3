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
      {
        source: '/challenger-designs-outdoor-kitchens-edg-patio-shade-authorized-dealer',
        destination: '/',
        permanent: true,
      },
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
        source: '/portfolio-item/:slug*',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/2025/:path*',
        destination: '/guide',
        permanent: true,
      },
      // Handle the malformed URL found during crawl
      {
        source: '/https-edgpatioshade-com-lake-geneva-motorized-screens',
        destination: '/systems/shades',
        permanent: true,
      },
      // --- Baseline SEO Redirects ---
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
        destination: '/', // Redirecting to home until dedicated page is requested
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
      // Catch-all for year-based blog posts (e.g., /2023/..., /2024/...)
      {
        source: '/:year(\\d{4})/:slug*',
        destination: '/guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
