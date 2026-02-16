import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { serviceAreaBySlugQuery } from '@/sanity/lib/queries';
import ServiceAreaClient from '../ServiceAreaClient';
import { serviceAreaLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lake Geneva Outdoor Living | Wisconsin',
  description: 'Premium outdoor living systems for Lake Geneva and surrounding lake communities. Custom motorized pergolas designed for lakefront living.',
  alternates: {
    canonical: '/service-areas/lake-geneva-wi',
  },
};

const defaultPopularSystems = [
  {
    name: 'Louvered Pergolas',
    description: 'Full weather control for lakefront entertaining. Open for sun, close for rain, adjust for everything in between.',
    href: '/systems/pergolas',
    why: 'The #1 choice for lake properties',
  },
  {
    name: 'Motorized Shades',
    description: 'Wind and sun protection that retracts to preserve your view. Essential for exposed lakefront locations.',
    href: '/systems/shades',
    why: 'Perfect for lakefront wind protection',
  },
  {
    name: 'Glass Enclosures',
    description: "Turn your three-season space into a four-season room. Enjoy lake views even in Wisconsin's colder months.",
    href: '/systems/enclosures',
    why: "Maximize your property's usable months",
  },
];

const defaultCommunities = [
  { name: 'Lake Geneva', type: 'residential' as const },
  { name: 'Williams Bay', type: 'residential' as const },
  { name: 'Fontana', type: 'residential' as const },
  { name: 'Walworth', type: 'residential' as const },
  { name: 'Linn', type: 'residential' as const },
  { name: 'Delavan', type: 'residential' as const },
];

const defaultLocalConsiderations = [
  { title: 'Lakefront Protection', description: 'We design systems specifically to handle the wind loads and bugs common to lakefront properties, ensuring your view remains unobstructed.' },
  { title: 'Seasonal Versatility', description: 'Our motorized pergolas allow you to enjoy the summer breeze while providing instant protection from sudden lake showers.' },
  { title: 'Estate Integration', description: "Whether it's a historic lake home or a modern new build, our systems are designed to blend seamlessly with your architecture." },
];

const defaultTestimonial = {
  quote: "Our lake house finally has the outdoor space it deserved. The pergola gives us shade when we want it, sun when we don't, and the views are unobstructed. Perfect.",
  author: 'David & Susan H.',
  location: 'Fontana',
  project: 'Lakeside Louvered Pergola',
};

const lakeGenevaSchema = serviceAreaLocalBusinessSchema('lake-geneva-wi', 'Lake Geneva, WI');

export default async function LakeGenevaPage() {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'lake-geneva-wi' });

  if (!area) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lakeGenevaSchema),
        }}
      />
      <ServiceAreaClient
        area={{
          name: area.name || 'Lake Geneva',
          slug: area.slug?.current || 'lake-geneva-wi',
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