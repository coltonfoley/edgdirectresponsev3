import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { serviceAreaBySlugQuery } from '@/sanity/lib/queries';
import ServiceAreaClient from '../ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Southeast Wisconsin Outdoor Living | Kenosha, Racine',
  description: 'Premium outdoor living systems for Southeast Wisconsin. Lake Geneva area specialists serving Kenosha, Racine, and resort communities.',
  alternates: {
    canonical: '/service-areas/southeast-wisconsin',
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
  { name: 'Kenosha', type: 'mixed' as const },
  { name: 'Racine', type: 'mixed' as const },
  { name: 'Burlington', type: 'mixed' as const },
  { name: 'Delavan', type: 'residential' as const },
  { name: 'Elkhorn', type: 'mixed' as const },
  { name: 'Williams Bay', type: 'residential' as const },
  { name: 'Fontana', type: 'residential' as const },
  { name: 'Twin Lakes', type: 'residential' as const },
  { name: 'Pleasant Prairie', type: 'residential' as const },
  { name: 'Somers', type: 'mixed' as const },
  { name: 'Union Grove', type: 'mixed' as const },
];

const defaultLocalConsiderations = [
  { title: 'Lake Properties', description: 'Geneva Lake, Delavan Lake, and the smaller lakes throughout the region have unique siting considerations. We design systems that maximize views and handle lakefront conditions.' },
  { title: 'Wisconsin Permitting', description: "Wisconsin municipalities have different requirements than Illinois. We're familiar with local building departments and know what's needed for approvals." },
  { title: 'Resort & Second Homes', description: 'Many Lake Geneva area properties are second homes. We coordinate schedules around your visits and can work with property managers when needed.' },
  { title: 'Heavier Snow Loads', description: "Southeast Wisconsin typically sees more snow than Chicago's North Shore. We engineer systems for actual Wisconsin snow load requirements." },
];

const defaultTestimonial = {
  quote: "Our Lake Geneva property needed a system that could handle the weather off the lake. EDG engineered a pergola that's held up through two Wisconsin winters without any issues.",
  author: 'Homeowner',
  location: 'Lake Geneva, WI',
  project: 'Louvered Pergola + Shades',
};

export default async function SoutheastWisconsinPage() {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'southeast-wisconsin' });

  if (!area) {
    notFound();
  }

  return (
    <ServiceAreaClient
      area={{
        name: area.name || 'Southeast Wisconsin',
        slug: area.slug?.current || 'southeast-wisconsin',
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
  );
}
