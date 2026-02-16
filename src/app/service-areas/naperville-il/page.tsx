import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { serviceAreaBySlugQuery } from '@/sanity/lib/queries';
import ServiceAreaClient from '../ServiceAreaClient';
import { serviceAreaLocalBusinessSchema } from '@/lib/schema';

import { urlFor } from '@/sanity/lib/image';

export async function generateMetadata(): Promise<Metadata> {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'naperville-il' });
  const seo = area?.seo || {};

  return {
    title: seo.metaTitle || 'Naperville Outdoor Living | EDG Patio',
    description: seo.metaDescription || 'Premium outdoor living systems for Naperville. Transform your backyard into a year-round retreat with motorized pergolas and glass systems.',
    alternates: {
      canonical: '/service-areas/naperville-il',
    },
    openGraph: seo.ogImage ? {
      images: [urlFor(seo.ogImage).url()],
    } : undefined,
  };
}

const defaultPopularSystems = [
  {
    name: 'Louvered Pergolas',
    description: 'Full weather control for your patio. Open for sun, closed for rain—perfect for Naperville\'s variable weather.',
    href: '/systems/pergolas',
    why: 'Most popular for Naperville backyards',
  },
  {
    name: 'Motorized Shades',
    description: 'Privacy and sun protection that disappears when you want an open view. Great for homes with close neighbors.',
    href: '/systems/shades',
    why: 'Privacy without permanent walls',
  },
  {
    name: 'Glass Enclosures',
    description: 'Extend your outdoor season by months. Enjoy fall evenings and early spring days in comfort.',
    href: '/systems/enclosures',
    why: 'Maximize your outdoor investment',
  },
];

const defaultCommunities = [
  { name: 'Naperville', type: 'residential' as const },
  { name: 'Lisle', type: 'residential' as const },
  { name: 'Woodridge', type: 'residential' as const },
  { name: 'Bolingbrook', type: 'residential' as const },
  { name: 'Warrenville', type: 'residential' as const },
  { name: 'Aurora', type: 'mixed' as const },
];

const defaultLocalConsiderations = [
  { title: 'Wind & Snow Load', description: 'Naperville winters can be harsh. Our systems are engineered to withstand heavy snow loads and high winds common in DuPage County.' },
  { title: 'HOA Compliance', description: 'Many Naperville neighborhoods have strict HOA guidelines. We provide detailed renderings and specs to help you get approval quickly.' },
  { title: 'Suburban Privacy', description: 'Maximize your backyard privacy from neighbors with our motorized screens and louvered walls.' },
];

const defaultTestimonial = {
  quote: "EDG made the permit process easy. They knew exactly what Naperville would want to see. The pergola is beautiful and has become our favorite space.",
  author: 'Lisa P.',
  location: 'Naperville',
  project: 'Motorized Pergola',
};

const napervilleSchema = serviceAreaLocalBusinessSchema('naperville-il', 'Naperville, IL');

export default async function NapervillePage() {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'naperville-il' });

  if (!area) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(napervilleSchema),
        }}
      />
      <ServiceAreaClient
        area={{
          name: area.name || 'Naperville',
          slug: area.slug?.current || 'naperville-il',
          description: area.description,
          communities: area.communities || defaultCommunities,
        }}
        heroTitle={area.heroTitle}
        heroDescription={area.heroDescription}
        badge={area.badge}
        communities={area.communities || defaultCommunities}
        localConsiderations={area.localConsiderations || defaultLocalConsiderations}
        localKnowledgeTitle={area.localKnowledgeTitle}
        localKnowledgeText={area.localKnowledgeText}
        testimonial={area.testimonial || defaultTestimonial}
        popularSystems={defaultPopularSystems}
      />
    </>
  );
}