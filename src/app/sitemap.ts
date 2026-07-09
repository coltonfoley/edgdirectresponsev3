import { MetadataRoute } from 'next';
import { getIndexableProjects } from '@/lib/projects';
import { xmlSitemapRoutes } from '@/lib/site-routes';

const requiredMilwaukeeRoutes = [
  '/service-areas/milwaukee-wi',
  '/service-areas/milwaukee-wi/motorized-pergolas',
  '/service-areas/milwaukee-wi/zoning-guide',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.edgpatioshade.com';
  const projects = getIndexableProjects();
  const missingMilwaukeeRoute = requiredMilwaukeeRoutes.find(
    (href) => !xmlSitemapRoutes.some((route) => route.href === href)
  );

  if (missingMilwaukeeRoute) {
    throw new Error(
      `Missing required Milwaukee sitemap route: ${missingMilwaukeeRoute}`
    );
  }

  const staticPages = xmlSitemapRoutes.map((route) => ({
    url: route.href === '/' ? `${baseUrl}/` : `${baseUrl}${route.href}`,
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
