import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.edgpatioshade.com'
    const projects = getAllProjects()

    // Main pages from project structure
    const routes = [
        '',
        '/commercial',
        '/contact',
        '/design',
        '/guide',
        '/guide/read',
        '/projects',
        '/price',
        '/pro',
        '/gallery',
        '/privacy',
        '/terms',
        '/systems',
        '/systems/pergolas',
        '/systems/shades',
        '/systems/enclosures',
        '/systems/appliances',
        '/service-areas',
        '/service-areas/lake-county-il',
        '/service-areas/mchenry-county-il',
        '/service-areas/north-shore-chicago',
        '/service-areas/southeast-wisconsin',
        '/service-areas/naperville-il',
        '/service-areas/barrington-il',
        '/service-areas/oak-brook-il',
        '/service-areas/lake-geneva-wi',
        '/service-areas/hinsdale-il',
        '/commercial/west-loop',
        '/commercial/chicago-hospitality-outdoor-living',
        '/commercial/restaurant-patio-enclosures',
        '/commercial/country-club-outdoor-spaces',
        '/commercial/hotel-roof-deck-systems',
        '/service-areas/sanibel-outdoor-living',
        '/service-areas/sanibel-outdoor-living/louvered-pergolas',
        '/service-areas/sanibel-outdoor-living/zoning-guide',
        '/service-areas/barrington-il/motorized-pergolas',
        '/service-areas/barrington-il/zoning-guide',
    ]

    const staticPages = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...projectPages]
}
