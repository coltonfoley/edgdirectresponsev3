import type { Metadata } from 'next';
import { getHomepage } from '@/sanity/lib/server-fetch';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Motorized Pergolas Chicago | Outdoor Shades & Glass Enclosures',
  description:
    'Premium motorized pergolas, exterior shades, and glass enclosures. Full-service installation for the Chicago to Milwaukee region, with nationwide design and supply available.',
  alternates: {
    canonical: '/',
  },
};

export default async function Home() {
  const homepage = await getHomepage();

  return <HomePageClient homepage={homepage} />;
}
