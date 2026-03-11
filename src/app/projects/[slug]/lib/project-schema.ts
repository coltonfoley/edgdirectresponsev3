import { EnrichedProject, parseLocation } from './project-utils';

/**
 * Generates comprehensive JSON-LD schema for project pages
 * Combines CreativeWork, LocalBusiness, and Review schemas
 */
export function generateProjectSchema(project: EnrichedProject) {
  const location = parseLocation(project.location);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Main Project Schema (CreativeWork)
      {
        '@type': 'CreativeWork',
        '@id': `https://www.edgpatioshade.com/projects/${project.slug}`,
        name: project.title,
        description: project.description,
        url: `https://www.edgpatioshade.com/projects/${project.slug}`,
        image: project.heroImage,
        ...(project.galleryImages?.length && {
          associatedMedia: project.galleryImages.map((img) => ({
            '@type': 'ImageObject',
            url: img,
          })),
        }),
        locationCreated: {
          '@type': 'Place',
          name: project.location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: location.city,
            addressRegion: location.state,
          },
        },
        about: project.systems.map((system) => ({
          '@type': 'Thing',
          name: system,
        })),
        // Date can be added when available in project data
        // ...(project.completedDate && {
        //   datePublished: project.completedDate,
        // }),
        provider: {
          '@id': 'https://www.edgpatioshade.com/#organization',
        },
      },

      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.edgpatioshade.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: 'https://www.edgpatioshade.com/gallery',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `https://www.edgpatioshade.com/projects/${project.slug}`,
          },
        ],
      },

      // Testimonial as Review (if available)
      ...(project.hasTestimonial && project.testimonial
        ? [
            {
              '@type': 'Review',
              itemReviewed: {
                '@type': 'CreativeWork',
                name: project.title,
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: project.testimonial.name,
              },
              reviewBody: project.testimonial.quote,
            },
          ]
        : []),
    ],
  };
}

/**
 * Generate local business schema with area served
 */
export function generateLocalSEOSchema(project: EnrichedProject) {
  const location = parseLocation(project.location);

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `EDG Patio & Shade - ${location.city}`,
    description: `${project.systems.join(', ')} installation services in ${project.location}`,
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedIn: {
        '@type': 'State',
        name: location.state,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outdoor Living Systems',
      itemListElement: project.systems.map((system) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${system} Installation`,
          areaServed: {
            '@type': 'City',
            name: location.city,
          },
        },
      })),
    },
  };
}
