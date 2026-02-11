import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import PricePageClient from './PricePageClient';

export const metadata: Metadata = {
  title: 'Pergola & Shade Pricing | Get a Custom Quote',
  description:
    'Get a custom quote for motorized pergolas, exterior shades, and glass enclosures in Chicago & Milwaukee. Transparent pricing, no hidden fees. Serving Lake County IL and Southeast Wisconsin.',
  openGraph: {
    title: 'Get a Custom Quote | EDG Outdoor Living',
    description:
      'Transparent pricing for premium outdoor living systems. Request your custom proposal.',
  },
  alternates: {
    canonical: '/price',
  },
};

export default async function PricePage() {
  const page = await getLandingPage('price');
  
  return <PricePageClient page={page} />;
}
