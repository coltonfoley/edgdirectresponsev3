import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import EnclosuresPageClient from './EnclosuresPageClient';

export const metadata: Metadata = {
  title: 'Glass Patio Enclosures | Retractable Glass Walls',
  description:
    'Frameless retractable glass wall systems that stack, fold, and disappear. Add weatherproof square footage without heavy construction. Year-round outdoor living.',
  alternates: {
    canonical: '/systems/enclosures',
  },
  openGraph: {
    title: 'Glass Enclosures | EDG Outdoor Living',
    description:
      'Retractable glass walls that add weatherproof square footage to your outdoor space.',
  },
};

export default async function EnclosuresPage() {
  const product = await getProduct('enclosures');
  
  return <EnclosuresPageClient product={product} />;
}
