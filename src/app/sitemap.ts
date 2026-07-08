import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';
import { xmlSitemapRoutes } from '@/lib/site-routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.edgpatioshade.com';
  const projects = getAllProjects();

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
