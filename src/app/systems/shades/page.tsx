import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import ShadesPageClient from './ShadesPageClient';

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

export default async function ShadesPage() {
  const product = await getProduct('shades');
  
  return <ShadesPageClient product={product} />;
}
