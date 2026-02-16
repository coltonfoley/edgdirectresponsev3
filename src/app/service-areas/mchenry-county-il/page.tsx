import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { serviceAreaBySlugQuery } from '@/sanity/lib/queries';
import ServiceAreaClient from '../ServiceAreaClient';
import { serviceAreaLocalBusinessSchema } from '@/lib/schema';

import { urlFor } from '@/sanity/lib/image';

export async function generateMetadata(): Promise<Metadata> {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'mchenry-county-il' });
  const seo = area?.seo || {};

  return {
    title: seo.metaTitle || 'McHenry County Outdoor Living | Crystal Lake, Algonquin, Woodstock',
    description: seo.metaDescription || 'Premium outdoor living systems for McHenry County. Larger properties, rural settings, and expert local knowledge for your outdoor project.',
    alternates: {
      canonical: '/service-areas/mchenry-county-il',
    },
    openGraph: seo.ogImage ? {
      images: [urlFor(seo.ogImage).url()],
    } : undefined,
  };
}

const defaultPopularSystems = [
  {
    name: 'Louvered Pergolas',
    description: 'Create defined outdoor rooms on larger properties. Full weather control lets you use your space regardless of conditions.',
    href: '/systems/pergolas',
    why: "Scale to fit McHenry County's larger lots",
  },
  {
    name: 'Motorized Shades',
    description: 'Wind protection for exposed properties. Retract fully when you want open views of your acreage.',
    href: '/systems/shades',
    why: 'Essential for wind-exposed properties',
  },
  {
    name: 'Glass Enclosures',
    description: 'Extend your season dramatically. Perfect for properties where you want to enjoy views year-round.',
    href: '/systems/enclosures',
    why: 'Maximize your investment through all seasons',
  },
];

const defaultCommunities = [
  { name: 'Crystal Lake', type: 'mixed' as const },
  { name: 'Algonquin', type: 'mixed' as const },
  { name: 'Woodstock', type: 'mixed' as const },
  { name: 'Huntley', type: 'mixed' as const },
  { name: 'McHenry', type: 'mixed' as const },
  { name: 'Cary', type: 'residential' as const },
  { name: 'Lake in the Hills', type: 'mixed' as const },
  { name: 'Marengo', type: 'mixed' as const },
  { name: 'Harvard', type: 'mixed' as const },
  { name: 'Richmond', type: 'mixed' as const },
  { name: 'Spring Grove', type: 'mixed' as const },
  { name: 'Fox River Grove', type: 'residential' as const },
];

const defaultLocalConsiderations = [
  { title: 'Larger Properties', description: 'McHenry County lots tend to be bigger than closer-in suburbs. We design systems scaled appropriately—not undersized installations that look out of place.' },
  { title: 'Rural & Semi-Rural Settings', description: 'Many properties have agricultural neighbors or open views. We position systems to maximize enjoyment while respecting the character of your setting.' },
  { title: 'Varied Municipal Requirements', description: 'From Crystal Lake to Bull Valley, each municipality has different permit processes. We know the local requirements and handle submissions accordingly.' },
  { title: 'Weather Exposure', description: 'Without the density of closer-in suburbs, McHenry County properties often face more wind exposure. We engineer systems for real conditions.' },
];

const defaultLocalKnowledgeText = "We're based in Spring Grove—right in McHenry County. That means shorter travel times, faster response, and genuine familiarity with the area. We're not driving an hour to reach you. We're neighbors.";

const defaultTestimonial = {
  quote: "We have five acres and wanted an outdoor space that felt proportional. EDG designed a pergola system that actually fits our property—not a suburban cookie-cutter solution.",
  author: 'Homeowner',
  location: 'Bull Valley, IL',
  project: 'Louvered Pergola',
};

const mchenrySchema = serviceAreaLocalBusinessSchema('mchenry-county-il', 'McHenry County, IL');

export default async function McHenryCountyPage() {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'mchenry-county-il' });

  if (!area) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mchenrySchema),
        }}
      />
      <ServiceAreaClient
        area={{
          name: area.name || 'McHenry County',
          slug: area.slug?.current || 'mchenry-county-il',
          description: area.description,
          communities: area.communities || defaultCommunities,
        }}
        heroTitle={area.heroTitle}
        heroDescription={area.heroDescription}
        badge={area.badge}
        communities={area.communities || defaultCommunities}
        localConsiderations={area.localConsiderations || defaultLocalConsiderations}
        localKnowledgeTitle={area.localKnowledgeTitle || 'Our Spring Grove Location'}
        localKnowledgeText={area.localKnowledgeText || defaultLocalKnowledgeText}
        testimonial={area.testimonial || defaultTestimonial}
        popularSystems={defaultPopularSystems}
      />
    </>
  );
}