export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://www.edgpatioshade.com/#organization',
  name: 'EDG Patio & Shade',
  description:
    'Premium motorized pergolas, exterior shades, and glass enclosures for outdoor living spaces. Serving the Chicago-Milwaukee corridor and nationwide.',
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
  areaServed: [
    {
      '@type': 'State',
      name: 'Illinois',
      containsPlace: [
        { '@type': 'AdministrativeArea', name: 'Lake County' },
        { '@type': 'AdministrativeArea', name: 'McHenry County' },
        { '@type': 'AdministrativeArea', name: 'Cook County' },
        { '@type': 'City', name: 'Chicago' },
        { '@type': 'City', name: 'Algonquin' },
        { '@type': 'City', name: 'Naperville' },
        { '@type': 'City', name: 'Barrington' },
        { '@type': 'City', name: 'Oak Brook' },
        { '@type': 'City', name: 'Hinsdale' },
      ],
    },
    {
      '@type': 'State',
      name: 'Wisconsin',
      containsPlace: [
        { '@type': 'AdministrativeArea', name: 'Kenosha County' },
        { '@type': 'AdministrativeArea', name: 'Racine County' },
        { '@type': 'AdministrativeArea', name: 'Milwaukee County' },
        { '@type': 'AdministrativeArea', name: 'Walworth County' },
        { '@type': 'City', name: 'Lake Geneva' },
        { '@type': 'City', name: 'Fontana-on-Geneva Lake' },
        { '@type': 'City', name: 'Williams Bay' },
      ],
    },
    {
      '@type': 'State',
      name: 'Florida',
      containsPlace: [
        { '@type': 'City', name: 'Sanibel' },
        { '@type': 'City', name: 'Captiva' },
        { '@type': 'City', name: 'Fort Myers' },
        { '@type': 'City', name: 'Cape Coral' },
        { '@type': 'City', name: 'Naples' },
        { '@type': 'City', name: 'Bonita Springs' },
        { '@type': 'City', name: 'Estero' },
        { '@type': 'City', name: 'Marco Island' },
      ],
    },
  ],
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
};

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
    areaServed: localBusinessSchema.areaServed,
    url: params.url,
    ...(params.image && { image: params.image }),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
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

/**
 * Generate BreadcrumbList Schema
 *
 * UX Impact: Enables breadcrumb display in Google search results
 * SEO Impact: Improves click-through rates, helps understand site structure
 * AI Impact: Helps AI understand page hierarchy and relationships
 */
export function generateBreadcrumbSchema(
  items: { name: string; url?: string }[],
  baseUrl: string = 'https://www.edgpatioshade.com'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${baseUrl}${item.url}` }),
    })),
  };
}

/**
 * Generate HowTo Schema
 *
 * UX Impact: Step-by-step instructions may appear in rich snippets
 * SEO Impact: Eligible for How-To rich results in Google
 * AI Impact: Structured steps help AI understand processes
 */
export function generateHowToSchema(params: {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, e.g., "PT30M"
  estimatedCost?: { currency: string; value: string };
  supply?: string[];
  tool?: string[];
  step: {
    name: string;
    text: string;
    url?: string;
    image?: string;
  }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    ...(params.totalTime && { totalTime: params.totalTime }),
    ...(params.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: params.estimatedCost.currency,
        value: params.estimatedCost.value,
      },
    }),
    ...(params.supply && {
      supply: params.supply.map((s) => ({ '@type': 'HowToSupply', name: s })),
    }),
    ...(params.tool && {
      tool: params.tool.map((t) => ({ '@type': 'HowToTool', name: t })),
    }),
    step: params.step.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: s.url }),
      ...(s.image && { image: s.image }),
    })),
  };
}

/**
 * Generate Organization Schema
 *
 * UX Impact: Brand knowledge panel in search results
 * SEO Impact: Entity understanding for E-A-T signals
 * AI Impact: Critical for AI visibility and knowledge graphs
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.edgpatioshade.com/#organization',
    name: 'EDG Patio & Shade',
    alternateName: ['EDG Patio & Shade', 'EDG'],
    url: 'https://www.edgpatioshade.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.edgpatioshade.com/logo.png',
      width: 512,
      height: 512,
    },
    image: 'https://www.edgpatioshade.com/og-image.jpg',
    description:
      'Design and supply partner for motorized pergolas, exterior shades, and glass enclosures. Serving the Chicago-Milwaukee corridor with nationwide trade partnerships.',
    foundingDate: '2017',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-815-581-0138',
      contactType: 'Sales',
      email: 'info@edgpatioshade.com',
      areaServed: ['US-IL', 'US-WI', 'US-FL'],
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://facebook.com/edgpatioshade',
      'https://instagram.com/edgpatioshade',
      // Add more social profiles as they become available
    ],
  };
}

/**
 * Generate Article Schema for Guides/Blog Posts
 *
 * UX Impact: Article rich snippets with author, publish date
 * SEO Impact: Eligible for Top Stories (if news), article features
 * AI Impact: Clear content attribution and freshness signals
 */
/**
 * Generate ServiceArea Schema for Local SEO
 *
 * UX Impact: May appear in local pack results with area served
 * SEO Impact: Strengthens local relevance signals
 * AI Impact: Helps AI understand geographic service coverage
 */
export function generateServiceAreaSchema(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
  area: {
    city: string;
    state: string;
    county?: string;
  };
  services?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ServiceArea',
    name: params.name,
    description: params.description,
    url: params.url,
    ...(params.image && { image: params.image }),
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: params.area.city,
      containedInPlace: {
        '@type': 'State',
        name: params.area.state,
        ...(params.area.county && {
          containsPlace: {
            '@type': 'AdministrativeArea',
            name: params.area.county,
          },
        }),
      },
    },
    ...(params.services && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Services in ${params.area.city}`,
        itemListElement: params.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
          },
        })),
      },
    }),
  };
}

export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url,
    ...(params.image && { image: params.image }),
    datePublished: params.datePublished,
    ...(params.dateModified && { dateModified: params.dateModified }),
    author: {
      '@type': params.author ? 'Person' : 'Organization',
      name: params.author || 'EDG Patio & Shade',
      ...(params.author && {
        '@id': 'https://www.edgpatioshade.com/#organization',
      }),
    },
    publisher: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    ...(params.category && { articleSection: params.category }),
  };
}
