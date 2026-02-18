import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import PricePageClient from './PricePageClient';

import { urlFor } from '@/sanity/lib/image';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLandingPage('price');
  const seo = page?.seo || {};

  return {
    title: seo.metaTitle || 'Pergola & Shade Pricing | Get a Custom Quote',
    description: seo.metaDescription || 'Get a custom quote for motorized pergolas, exterior shades, and glass enclosures in Chicago & Milwaukee. Transparent pricing, no hidden fees. Serving Lake County IL and Southeast Wisconsin.',
    alternates: {
      canonical: '/price',
    },
    openGraph: {
      title: seo.metaTitle || 'Get a Custom Quote | EDG Outdoor Living',
      description: seo.metaDescription || 'Transparent pricing for premium outdoor living systems. Request your custom proposal.',
      images: seo.ogImage ? [urlFor(seo.ogImage).url()] : undefined,
    },
  };
}

export default async function PricePage() {
  const page = await getLandingPage('price');

  return <PricePageClient page={page} />;
}
