import { MetadataRoute } from 'next';
import { getProjects } from '@/sanity/lib/server-fetch';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.edgpatioshade.com';
  const projects = await getProjects();

  // Main pages from project structure
  const routes = [
    { url: '', priority: 1.0 },
    { url: '/systems/pergolas', priority: 0.9 },
    { url: '/systems/shades', priority: 0.9 },
    { url: '/systems/enclosures', priority: 0.9 },
    { url: '/systems/appliances', priority: 0.9 },
    { url: '/commercial', priority: 0.9 },
    { url: '/contact', priority: 0.8 },
    { url: '/design', priority: 0.8 },
    { url: '/projects', priority: 0.8 },
    { url: '/gallery', priority: 0.8 },
    { url: '/guides/planning-guide', priority: 0.8 },
    { url: '/guides/planning-guide/read', priority: 0.7 },
    { url: '/price', priority: 0.8 },
    { url: '/pro', priority: 0.6 },
    { url: '/privacy', priority: 0.5 },
    { url: '/terms', priority: 0.5 },
    // Service Areas
    { url: '/service-areas', priority: 0.8 },
    { url: '/service-areas/lake-county-il', priority: 0.8 },
    { url: '/service-areas/mchenry-county-il', priority: 0.8 },
    { url: '/service-areas/north-shore-chicago', priority: 0.8 },
    { url: '/service-areas/southeast-wisconsin', priority: 0.8 },
    { url: '/service-areas/naperville-il', priority: 0.8 },
    { url: '/service-areas/barrington-il', priority: 0.8 },
    { url: '/service-areas/oak-brook-il', priority: 0.8 },
    { url: '/service-areas/lake-geneva-wi', priority: 0.8 },
    { url: '/service-areas/hinsdale-il', priority: 0.8 },
    { url: '/service-areas/sanibel-outdoor-living', priority: 0.8 },
    { url: '/service-areas/northbrook-il', priority: 0.8 },
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
      url: '/service-areas/sanibel-outdoor-living/zoning-guide',
      priority: 0.7,
    },
    { url: '/service-areas/barrington-il/motorized-pergolas', priority: 0.8 },
    { url: '/service-areas/barrington-il/zoning-guide', priority: 0.7 },
    { url: '/service-areas/northbrook-il/motorized-pergolas', priority: 0.8 },
    { url: '/service-areas/northbrook-il/zoning-guide', priority: 0.7 },
    // New Guides
    { url: '/guides', priority: 0.8 },
    { url: '/guides/louvered-pergolas', priority: 0.9 },
    { url: '/guides/pergola-vs-patio-cover', priority: 0.8 },

    // New Commercial Pages
    { url: '/commercial/hotel-pergolas', priority: 0.9 },
    { url: '/commercial/restaurant-patio-solutions', priority: 0.9 },

    // New Local Clusters
    { url: '/service-areas/wilmette-il', priority: 0.8 },
    { url: '/service-areas/wilmette-il/zoning-guide', priority: 0.7 },
    { url: '/service-areas/wilmette-il/louvered-pergolas', priority: 0.8 },
    { url: '/service-areas/winnetka-il', priority: 0.8 },
    { url: '/service-areas/winnetka-il/zoning-guide', priority: 0.7 },
    { url: '/service-areas/winnetka-il/louvered-pergolas', priority: 0.8 },

    // Existing Sitemap Page
    { url: '/html-sitemap', priority: 0.5 },
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: undefined, // Remove dynamic date to prevent churn
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }));

  const projectPages = projects.map((project: any) => ({
    url: `${baseUrl}/projects/${project.slug?.current || project.slug}`,
    lastModified: undefined,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
