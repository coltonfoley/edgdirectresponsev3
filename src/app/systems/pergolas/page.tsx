import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import PergolasPageClient from './PergolasPageClient';

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

export default async function PergolasPage() {
  const product = await getProduct('pergolas');
  
  return <PergolasPageClient product={product} />;
}
