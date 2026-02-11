import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { productsQuery } from '@/sanity/lib/queries';
import SystemsClient from './SystemsClient';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems | Pergolas, Shades & Enclosures',
  description:
    'Explore our premium outdoor living systems. Motorized pergolas, exterior shades, and glass enclosures designed for the Midwest climate.',
  alternates: {
    canonical: '/systems',
  },
};

export default async function SystemsPage() {
  const products = await client.fetch(productsQuery);

  return <SystemsClient products={products || []} />;
}
