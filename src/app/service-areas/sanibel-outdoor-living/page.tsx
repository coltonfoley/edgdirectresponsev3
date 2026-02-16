import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { serviceAreaBySlugQuery } from '@/sanity/lib/queries';
import ServiceAreaClient from '../ServiceAreaClient';
import { serviceAreaLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sanibel Outdoor Living | Hurricane-Rated Pergolas & Lanais',
  description: "Premium louvered roof systems and motorized screens designed for Sanibel Island's strict zoning and coastal climate. Miami-Dade hurricane rated.",
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living',
  },
};

const defaultPopularSystems = [
  {
    name: 'Hurricane-Rated Pergolas',
    description: 'Miami-Dade rated louvered roof systems engineered for Gulf Coast storms. Protect your outdoor space when the weather turns.',
    href: '/systems/pergolas',
    why: 'Engineered for hurricane-force winds',
  },
  {
    name: 'Motorized Screens',
    description: "Replace fixed cages with motorized screens that vanish at the touch of a button. Restore your unobstructed view of the Gulf.",
    href: '/systems/shades',
    why: 'The modern lanai solution',
  },
  {
    name: 'Lightweight Enclosures',
    description: 'Aluminum construction perfect for elevated stilt homes. Safe installation that respects load limits.',
    href: '/systems/enclosures',
    why: 'Ideal for Sanibel stilt homes',
  },
];

const defaultCommunities = [
  { name: 'Sanibel Island', type: 'residential' as const },
  { name: 'Captiva Island', type: 'residential' as const },
  { name: 'Wulfert', type: 'residential' as const },
  { name: 'The Dunes', type: 'residential' as const },
  { name: 'Gumbo Limbo', type: 'residential' as const },
  { name: 'Blind Pass', type: 'residential' as const },
];

const defaultLocalConsiderations = [
  { title: 'Sanctuary Compliant', description: "We navigate Sanibel's strict impermeable coverage and vegetation codes, offering accessory structures that respect the island's conservation ethos." },
  { title: 'Hurricane Engineered', description: 'Our systems are Miami-Dade Hurricane Rated to withstand Gulf storms, giving you peace of mind when the weather turns.' },
  { title: 'Stilt Home Integration', description: 'Lightweight aluminum construction allows for safe installation on elevated decks where heavy traditional materials might exceed load limits.' },
  { title: 'The Modern Lanai', description: 'Replace fixed cages with motorized screens that vanish at the touch of a button, restoring your unobstructed view of the Gulf.' },
];

const defaultLocalKnowledgeTitle = 'Island Specialists';
const defaultLocalKnowledgeText = "Building on Sanibel requires a deep understanding of local codes and environmental respect. Our systems are designed to enhance your 'Sanibel Stoop' lifestyle without compromising the sanctuary.";

const defaultTestimonial = {
  quote: "After Hurricane Ian, our EDG pergola was still standing while other structures around us were damaged. The engineering is impressive, and we use it every day.",
  author: 'Carol & James R.',
  location: 'Sanibel Island',
  project: 'Hurricane-Rated Louvered Pergola',
};

const sanibelSchema = serviceAreaLocalBusinessSchema('sanibel-outdoor-living', 'Sanibel, FL');

export default async function SanibelPage() {
  const area = await client.fetch(serviceAreaBySlugQuery, { slug: 'sanibel-outdoor-living' });

  if (!area) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sanibelSchema),
        }}
      />
      <ServiceAreaClient
        area={{
          name: area.name || 'Sanibel',
          slug: area.slug?.current || 'sanibel-outdoor-living',
          description: area.description,
          communities: area.communities || defaultCommunities,
        }}
        heroTitle={area.heroTitle || "Sanibel Outdoor Living"}
        heroDescription={area.heroDescription || "Premium, hurricane-rated pergolas and motorized screens designed to respect Sanibel's unique ecology while expanding your living space."}
        badge={area.badge}
        communities={area.communities || defaultCommunities}
        localConsiderations={area.localConsiderations || defaultLocalConsiderations}
        localKnowledgeTitle={area.localKnowledgeTitle || defaultLocalKnowledgeTitle}
        localKnowledgeText={area.localKnowledgeText || defaultLocalKnowledgeText}
        testimonial={area.testimonial || defaultTestimonial}
        popularSystems={defaultPopularSystems}
      />
    </>
  );
}