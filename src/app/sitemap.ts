import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.edgpatioshade.com';
  const projects = getAllProjects();

  // Main pages from project structure
  const routes = [
    { url: '/', priority: 1.0 },
    { url: '/systems/pergolas', priority: 0.9 },
    { url: '/systems/pergolas/configure', priority: 0.85 },
    { url: '/systems/shades', priority: 0.9 },
    { url: '/systems/enclosures', priority: 0.9 },
    { url: '/systems/appliances', priority: 0.9 },
    { url: '/systems/saunas', priority: 0.9 },
    { url: '/systems', priority: 0.8 },
    { url: '/commercial', priority: 0.9 },
    { url: '/contact', priority: 0.8 },
    { url: '/projects', priority: 0.8 },
    { url: '/gallery', priority: 0.8 },
    { url: '/guides/planning-guide', priority: 0.8 },
    { url: '/guides/motorized-pergola-planning', priority: 0.9 },
    { url: '/guides/pergola-system-fit-review', priority: 0.9 },
    { url: '/guides/motorized-pergola-budget-examples', priority: 0.85 },
    { url: '/guides/motorized-pergola-deck-roof-deck', priority: 0.85 },
    {
      url: '/guides/motorized-pergola-permits-hoa-engineering',
      priority: 0.85,
    },
    { url: '/showroom', priority: 0.8 },
    { url: '/trade-partners', priority: 0.8 },
    { url: '/design-your-pergola', priority: 0.8 },
    { url: '/privacy', priority: 0.5 },
    { url: '/terms', priority: 0.5 },
    // Service Areas
    { url: '/service-areas', priority: 0.8 },
    { url: '/service-areas/chicago-il', priority: 0.9 },
    { url: '/service-areas/spring-grove-il', priority: 0.9 },
    { url: '/service-areas/algonquin-il', priority: 0.9 },
    { url: '/service-areas/lake-county-il', priority: 0.8 },
    { url: '/service-areas/mchenry-county-il', priority: 0.8 },
    { url: '/service-areas/north-shore-chicago', priority: 0.8 },
    { url: '/service-areas/southeast-wisconsin', priority: 0.8 },
    { url: '/service-areas/naperville-il', priority: 0.8 },
    { url: '/service-areas/barrington-il', priority: 0.8 },
    { url: '/service-areas/oak-brook-il', priority: 0.8 },
    { url: '/service-areas/lake-geneva-wi', priority: 0.8 },
    { url: '/service-areas/hinsdale-il', priority: 0.8 },
    { url: '/service-areas/southwest-florida', priority: 0.9 },
    {
      url: '/service-areas/southwest-florida/motorized-screens',
      priority: 0.9,
    },
    { url: '/service-areas/sanibel-outdoor-living', priority: 0.8 },
    { url: '/service-areas/northbrook-il', priority: 0.8 },
    { url: '/service-areas/deerfield-il', priority: 0.8 },
    { url: '/service-areas/lake-forest-il', priority: 0.9 },
    { url: '/service-areas/wilmette-il', priority: 0.8 },
    { url: '/service-areas/winnetka-il', priority: 0.8 },
    // Deep Links
    { url: '/commercial/west-loop', priority: 0.7 },
    { url: '/commercial/chicago-hospitality-outdoor-living', priority: 0.8 },
    { url: '/commercial/restaurant-patio-enclosures', priority: 0.8 },
    { url: '/commercial/country-club-outdoor-spaces', priority: 0.8 },
    { url: '/commercial/hotel-roof-deck-systems', priority: 0.8 },
    {
      url: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
      priority: 0.8,
    },
    {
      url: '/service-areas/sanibel-outdoor-living/modern-lanai',
      priority: 0.8,
    },
    {
      url: '/service-areas/sanibel-outdoor-living/lanai-replacement',
      priority: 0.8,
    },
    {
      url: '/service-areas/sanibel-outdoor-living/zoning-guide',
      priority: 0.8,
    },
    { url: '/service-areas/barrington-il/motorized-pergolas', priority: 0.8 },
    { url: '/service-areas/algonquin-il/motorized-pergolas', priority: 0.9 },
    { url: '/service-areas/algonquin-il/retractable-screens', priority: 0.9 },
    { url: '/service-areas/algonquin-il/zoning-guide', priority: 0.8 },
    { url: '/service-areas/chicago-il/motorized-pergolas', priority: 0.9 },
    { url: '/service-areas/chicago-il/retractable-screens', priority: 0.9 },
    { url: '/service-areas/chicago-il/glass-enclosures', priority: 0.9 },
    { url: '/service-areas/deerfield-il/retractable-screens', priority: 0.9 },
    {
      url: '/service-areas/lake-forest-il/motorized-pergolas',
      priority: 0.9,
    },
    { url: '/service-areas/lake-forest-il/zoning-guide', priority: 0.8 },
    {
      url: '/service-areas/lake-geneva-wi/motorized-pergolas',
      priority: 0.9,
    },
    {
      url: '/service-areas/lake-geneva-wi/retractable-screens',
      priority: 0.9,
    },
    { url: '/service-areas/lake-geneva-wi/zoning-guide', priority: 0.8 },
    { url: '/service-areas/northbrook-il/motorized-pergolas', priority: 0.8 },
    { url: '/service-areas/naperville-il/motorized-pergolas', priority: 0.8 },
    // New Guides
    { url: '/guides', priority: 0.8 },
    { url: '/guides/louvered-pergolas', priority: 0.9 },
    { url: '/guides/pergola-vs-patio-cover', priority: 0.8 },
    { url: '/guides/louvered-pergola-brands-compared', priority: 0.8 },
    { url: '/guides/pergola-cost', priority: 0.9 },
    { url: '/guides/magnatrack-screens-cost', priority: 0.9 },

    // New Commercial Pages
    { url: '/commercial/hotel-pergolas', priority: 0.9 },
    { url: '/commercial/restaurant-patio-solutions', priority: 0.7 },

    // New Local Clusters
    { url: '/service-areas/wilmette-il/louvered-pergolas', priority: 0.8 },
    { url: '/service-areas/winnetka-il/louvered-pergolas', priority: 0.8 },

    // Existing Sitemap Page
    { url: '/html-sitemap', priority: 0.5 },
  ];

  const staticPages = routes.map((route) => ({
    url: route.url === '/' ? `${baseUrl}/` : `${baseUrl}${route.url}`,
    lastModified: undefined, // Remove dynamic date to prevent churn
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: undefined,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
