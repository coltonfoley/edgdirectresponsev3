import type { Metadata } from 'next';
import { getProduct } from '@/sanity/lib/fetch';
import AppliancesPageClient from './AppliancesPageClient';
import { productSchema } from '@/lib/schema';

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

const appliancesProductSchema = productSchema({
  name: 'Premium Outdoor Appliances',
  description: 'Premium grills, high-performance heaters, and artisan pizza ovens for your outdoor kitchen.',
  url: 'https://www.edgpatioshade.com/systems/appliances',
  image: 'https://www.edgpatioshade.com/images/appliances-hero.jpg',
  priceRange: '$5,000 - $30,000+',
});

export default async function AppliancesPage() {
  const product = await getProduct('appliances');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appliancesProductSchema),
        }}
      />
      <AppliancesPageClient product={product} />
    </>
  );
}