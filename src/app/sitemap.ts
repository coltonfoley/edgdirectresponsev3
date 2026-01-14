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
        '/gallery',
        '/systems',
        '/systems/pergolas',
        '/systems/shades',
        '/systems/glass',
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
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
