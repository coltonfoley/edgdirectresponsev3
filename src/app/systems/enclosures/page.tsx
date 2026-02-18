import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import EnclosuresPageClient from './EnclosuresPageClient';
import { productSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Glass Patio Enclosures Chicago & Milwaukee | EDG Outdoor Living',
  description:
    'Frameless retractable glass wall systems that stack, fold, and disappear. Add weatherproof square footage without heavy construction. Year-round outdoor living.',
  alternates: {
    canonical: '/systems/enclosures',
  },
  openGraph: {
    title: 'Glass Patio Enclosures Chicago & Milwaukee | EDG Outdoor Living',
    description:
      'Retractable glass walls that add weatherproof square footage to your outdoor space.',
  },
};

const enclosuresProductSchema = productSchema({
  name: 'Glass Enclosure Systems',
  description: 'Frameless glass wall systems that stack, fold, and disappear. Add weatherproof square footage.',
  url: 'https://www.edgpatioshade.com/systems/enclosures',
  image: 'https://www.edgpatioshade.com/images/enclosures-hero.jpg',
  priceRange: '$25,000 - $75,000+',
});

export default async function EnclosuresPage() {
  const product = await getProduct('enclosures');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(enclosuresProductSchema),
        }}
      />
      <EnclosuresPageClient product={product} />
    </>
  );
}