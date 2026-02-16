import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import CommercialPageClient from './CommercialPageClient';

import { urlFor } from '@/sanity/lib/image';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLandingPage('commercial');
  const seo = page?.seo || {};

  return {
    title: seo.metaTitle || 'Commercial Pergolas & Restaurant Patio Enclosures | EDG',
    description: seo.metaDescription || 'Commercial pergolas and shade systems for restaurants, hotels, and country clubs in Chicago & Milwaukee. Eliminate weather cancellations, extend patio season, increase revenue.',
    alternates: {
      canonical: '/commercial',
    },
    openGraph: {
      title: seo.metaTitle || 'Commercial Outdoor Solutions | EDG',
      description: seo.metaDescription || 'Turn your patio into a profit center. Commercial-grade pergolas and shading for hospitality.',
      images: seo.ogImage ? [urlFor(seo.ogImage).url()] : undefined,
    },
  };
}

export default async function CommercialPage() {
  const page = await getLandingPage('commercial');

  return <CommercialPageClient page={page} />;
}
