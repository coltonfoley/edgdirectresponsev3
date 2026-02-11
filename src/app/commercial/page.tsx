import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import CommercialPageClient from './CommercialPageClient';

export const metadata: Metadata = {
  title: 'Commercial Pergolas & Restaurant Patio Enclosures | EDG',
  description:
    'Commercial pergolas and shade systems for restaurants, hotels, and country clubs in Chicago & Milwaukee. Eliminate weather cancellations, extend patio season, increase revenue.',
  alternates: {
    canonical: '/commercial',
  },
  openGraph: {
    title: 'Commercial Outdoor Solutions | EDG',
    description:
      'Turn your patio into a profit center. Commercial-grade pergolas and shading for hospitality.',
  },
};

export default async function CommercialPage() {
  const page = await getLandingPage('commercial');
  
  return <CommercialPageClient page={page} />;
}
