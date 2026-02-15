export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.edgpatioshade.com/#organization',
  name: 'EDG Outdoor Living',
  description: 'Premium motorized pergolas, exterior shades, and glass enclosures for outdoor living spaces. Serving the Chicago-Milwaukee corridor and nationwide.',
  url: 'https://www.edgpatioshade.com',
  telephone: '+1-815-581-0138',
  email: 'info@edgpatioshade.com',
  logo: 'https://www.edgpatioshade.com/logo.png',
  image: 'https://www.edgpatioshade.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1802 Holian Drive',
    addressLocality: 'Spring Grove',
    addressRegion: 'IL',
    postalCode: '60081',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.4439,
    longitude: -88.2356,
  },
  areaServed: 'Chicago to Milwaukee corridor',
  priceRange: '$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://facebook.com/edgpatioshade',
    'https://instagram.com/edgpatioshade',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Outdoor Living Systems',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Louvered Pergola Installation',
          description: 'Motorized aluminum pergolas with rotating louvers for sun and rain control',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Motorized Exterior Shades',
          description: 'Wind-rated exterior screens for heat and glare reduction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Glass Enclosure Systems',
          description: 'Frameless retractable glass walls for weatherproof outdoor spaces',
        },
      },
    ],
  },
};

export const localBusinessSchema = {
  ...organizationSchema,
  '@type': 'LocalBusiness',
  '@id': 'https://www.edgpatioshade.com/#localbusiness',
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.edgpatioshade.com/#website',
  name: 'EDG Outdoor Living',
  url: 'https://www.edgpatioshade.com/',
  publisher: {
    '@id': 'https://www.edgpatioshade.com/#organization',
  },
};

export function serviceAreaLocalBusinessSchema(areaSlug: string, areaName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.edgpatioshade.com/#localbusiness-${areaSlug}`,
    name: `EDG Outdoor Living - ${areaName}`,
    description: `Premium outdoor living solutions serving ${areaName}.`,
    url: `https://www.edgpatioshade.com/service-areas/${areaSlug}`,
    telephone: organizationSchema.telephone,
    address: organizationSchema.address,
    geo: organizationSchema.geo,
    parentOrganization: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: areaName,
  };
}

export function productSchema(params: {
  name: string;
  description: string;
  url: string;
  image: string;
  priceRange: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    image: params.image,
    url: params.url,
    brand: {
      '@type': 'Brand',
      '@id': 'https://www.edgpatioshade.com/#organization',
      name: 'EDG Outdoor Living',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: params.priceRange,
        priceCurrency: 'USD',
      },
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': 'https://www.edgpatioshade.com/#organization',
      },
    },
  };
}

export function articleSchema(params: {
  headline: string;
  author: string;
  datePublished: string;
  image?: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    author: {
      '@type': 'Person',
      name: params.author,
    },
    datePublished: params.datePublished,
    image: params.image ? [params.image] : [],
    publisher: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
  };
}

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact EDG Outdoor Living',
  url: 'https://www.edgpatioshade.com/contact',
  about: {
    '@id': 'https://www.edgpatioshade.com/#organization',
  },
};

// Existing functions
export function generateServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    url: params.url,
    ...(params.image && { image: params.image }),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
