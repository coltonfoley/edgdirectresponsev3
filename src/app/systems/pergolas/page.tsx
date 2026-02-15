import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import PergolasPageClient from './PergolasPageClient';
import { productSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Louvered Pergola Systems | Motorized Aluminum Pergolas',
  description:
    'Premium louvered pergola systems with rotating aluminum louvers for complete sun, shade, and rain control. Smart home ready with integrated lighting and heating options.',
  alternates: {
    canonical: '/systems/pergolas',
  },
  openGraph: {
    title: 'Louvered Pergolas | EDG Outdoor Living',
    description:
      'Motorized aluminum pergolas with rotating louvers. The ultimate four-season outdoor room.',
  },
};

const pergolaProductSchema = productSchema({
  name: 'Louvered Pergolas',
  description: 'Motorized aluminum louvers that rotate from full sun to full shade—and close completely for rain protection. The ultimate year-round outdoor room.',
  url: 'https://www.edgpatioshade.com/systems/pergolas',
  image: 'https://www.edgpatioshade.com/images/pergolas-hero.jpg',
  priceRange: '$18,000 - $50,000+',
});

export default async function PergolasPage() {
  const product = await getProduct('pergolas');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pergolaProductSchema),
        }}
      />
      <PergolasPageClient product={product} />
    </>
  );
}