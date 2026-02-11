import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { serviceAreaBySlugQuery } from '@/sanity/lib/queries';
import ServiceAreaClient from '../ServiceAreaClient';

export const metadata: Metadata = {
  title: 'North Shore Chicago Outdoor Living | Wilmette, Winnetka, Glencoe',
  description: "Premium outdoor living systems for Chicago's North Shore. Expert planning and professional installation for Wilmette, Winnetka, Glencoe, and more.",
  alternates: {
    canonical: '/service-areas/north-shore-chicago',
  },
};

const defaultPopularSystems = [
  {
    name: 'Louvered Pergolas',
    description: 'Clean architectural lines that integrate with traditional and contemporary homes. Full weather control without compromising design.',
    href: '/systems/pergolas',
    why: 'The most requested system on the North Shore',
  },
  {
    name: 'Motorized Shades',
    description: 'Solar protection that disappears when not needed. Ideal for porches, pool houses, and pergola enclosures.',
    href: '/systems/shades',
    why: 'Preserve lake views while managing sun and wind',
  },
  {
    name: 'Glass Enclosures',
    description: "Extend your living space year-round. Frameless designs that don't obstruct your property's sightlines.",
    href: '/systems/enclosures',
    why: 'Popular for three-season rooms and pool areas',
  },
];

const defaultCommunities = [
  { name: 'Wilmette', type: 'residential' as const },
  { name: 'Winnetka', type: 'residential' as const },
  { name: 'Glencoe', type: 'residential' as const },
  { name: 'Kenilworth', type: 'residential' as const },
  { name: 'Northbrook', type: 'residential' as const },
  { name: 'Northfield', type: 'residential' as const },
  { name: 'Glenview', type: 'residential' as const },
  { name: 'Skokie', type: 'mixed' as const },
  { name: 'Evanston', type: 'mixed' as const },
  { name: 'Morton Grove', type: 'residential' as const },
  { name: 'Niles', type: 'residential' as const },
  { name: 'Park Ridge', type: 'residential' as const },
];

const defaultLocalConsiderations = [
  { title: 'Permit Management', description: 'Winnetka, Wilmette, Glencoe, and Kenilworth have specific zoning and permit requirements. We handle the entire application process, ensuring all documentation meets local village standards for a smooth approval.' },
  { title: 'Historic Properties', description: 'Many North Shore homes have historic significance. We design systems that complement period architecture—not fight against it.' },
  { title: 'Premium Finishes', description: 'North Shore properties demand attention to detail. We offer upgraded finishes, custom colors, and design elements that match the quality of your home.' },
  { title: 'Lake Michigan Proximity', description: 'Properties close to the lake face salt air, higher winds, and humidity. We specify materials and coatings engineered for these conditions.' },
];

const defaultTestimonial = {
  quote: "EDG handled everything—the permits, the coordination, and the installation. Our pergola was approved and built without us having to manage a single detail.",
  author: 'Homeowner',
  location: 'Winnetka, IL',
  project: 'Louvered Pergola + Shades',
};

export default async function NorthShorePage() {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'north-shore-chicago' });

  if (!area) {
    notFound();
  }

  return (
    <ServiceAreaClient
      area={{
        name: area.name || 'North Shore Chicago',
        slug: area.slug?.current || 'north-shore-chicago',
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
