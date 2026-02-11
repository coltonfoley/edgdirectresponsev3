import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { serviceAreaBySlugQuery } from '@/sanity/lib/queries';
import ServiceAreaClient from '../ServiceAreaClient';

export const metadata: Metadata = {
  title: 'Lake County Outdoor Living | EDG Outdoor Living',
  description: "We're based in Lake County. We design and build outdoor systems that handle our tough winters and maximize our summers. Get a free consultation.",
};

const defaultPopularSystems = [
  {
    name: 'Louvered Pergolas',
    description: 'The most popular choice for outdoor patios. Full weather control—sun, shade, and rain protection with the touch of a button.',
    href: '/systems/pergolas',
    why: 'Perfect for unpredictable Midwest weather',
  },
  {
    name: 'Motorized Shades',
    description: 'Ideal for screened porches, open patios, and pergola sides. Block sun and wind without losing your view.',
    href: '/systems/shades',
    why: 'Great for properties with sun exposure',
  },
  {
    name: 'Glass Enclosures',
    description: "Add protected square footage that's usable year-round. Popular for extending the season on all properties.",
    href: '/systems/enclosures',
    why: 'Maximize your outdoor investment through all seasons',
  },
];

const defaultCommunities = [
  { name: 'Lake Forest', type: 'residential' as const },
  { name: 'Lake Bluff', type: 'residential' as const },
  { name: 'Deerfield', type: 'residential' as const },
  { name: 'Highland Park', type: 'residential' as const },
  { name: 'Lake Zurich', type: 'mixed' as const },
  { name: 'Mundelein', type: 'mixed' as const },
  { name: 'Vernon Hills', type: 'mixed' as const },
  { name: 'Buffalo Grove', type: 'residential' as const },
  { name: 'Lincolnshire', type: 'mixed' as const },
  { name: 'Libertyville', type: 'residential' as const },
  { name: 'Barrington', type: 'residential' as const },
  { name: 'Grayslake', type: 'mixed' as const },
];

const defaultLocalConsiderations = [
  { title: 'Weather Impact', description: 'Lake Michigan moderates temperatures but also brings heavy lake-effect snow and strong winds. Our louvered pergolas are designed to handle both.' },
  { title: 'HOA & Design Rules', description: 'Many Lake Forest and Lake Bluff communities have strict architectural guidelines. We know them and design accordingly.' },
  { title: 'Permit Requirements', description: 'Lake County requires permits for most outdoor structures over 120 sq ft. We handle the paperwork so you don\'t have to.' },
  { title: 'Soil & Drainage', description: 'Areas around Lake Zurich and Libertyville have clay-heavy soils. We engineer footings that won\'t shift or crack over time.' },
];

const defaultTestimonial = {
  quote: "They knew exactly what the Lake Forest HOA would approve. Saved us weeks of back-and-forth. The pergola is exactly what we wanted.",
  author: 'Jennifer M.',
  location: 'Lake Forest',
  project: 'Motorized Pergola',
};

export default async function LakeCountyPage() {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'lake-county-il' });

  if (!area) {
    notFound();
  }

  return (
    <ServiceAreaClient
      area={{
        name: area.name || 'Lake County',
        slug: area.slug?.current || 'lake-county-il',
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
