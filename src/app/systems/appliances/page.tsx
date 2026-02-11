import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import AppliancesPageClient from './AppliancesPageClient';

export const metadata: Metadata = {
  title: 'Premium Outdoor Appliances | Grills, Pizza Ovens & Heaters',
  description:
    'Upgrade your outdoor kitchen with premium grills, high-performance heaters, and artisan pizza ovens. Professional installation available in Chicago & Milwaukee.',
  alternates: {
    canonical: '/systems/appliances',
  },
  openGraph: {
    title: 'Premium Outdoor Appliances | EDG Outdoor Living',
    description:
      'Chef-grade outdoor kitchens and heating solutions for sophisticated outdoor living.',
  },
};

export default async function AppliancesPage() {
  const product = await getProduct('appliances');
  
  return <AppliancesPageClient product={product} />;
}
