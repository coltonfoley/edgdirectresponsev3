import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import ShadesPageClient from './ShadesPageClient';
import { productSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Motorized Exterior Shades | Outdoor Privacy Screens',
  description:
    'Premium motorized exterior shades and outdoor screens. Wind-rated up to 35+ mph, UV protection, and smart home integration. Block heat while preserving your view.',
  alternates: {
    canonical: '/systems/shades',
  },
  openGraph: {
    title: 'Motorized Exterior Shades | EDG Outdoor Living',
    description:
      'Wind-rated exterior screens that block heat and glare while preserving your view.',
  },
};

const shadesProductSchema = productSchema({
  name: 'Motorized Exterior Shades',
  description: 'Wind-rated exterior screens that block 80%+ of heat and glare while preserving your view.',
  url: 'https://www.edgpatioshade.com/systems/shades',
  image: 'https://www.edgpatioshade.com/images/shades-hero.jpg',
  priceRange: '$8,000 - $25,000+',
});

export default async function ShadesPage() {
  const product = await getProduct('shades');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(shadesProductSchema),
        }}
      />
      <ShadesPageClient product={product} />
    </>
  );
}