import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://edgpatioshade.com'

    // Main pages from project structure
    const routes = [
        '',
        '/commercial',
        '/contact',
        '/design',
        '/guide',
        '/price',
        '/pro',
        '/projects',
        '/systems',
        '/systems/pergolas',
        '/systems/shades',
        '/systems/glass',
        '/service-areas',
        '/service-areas/lake-geneva', // Assuming key service areas based on redirects/context, can be expanded dynamically later if needed
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
