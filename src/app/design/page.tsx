import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import DesignPageClient from './DesignPageClient';

export const metadata: Metadata = {
  title: 'Outdoor Living Design Consultation | Chicago & Milwaukee',
  description:
    'Free design consultation for motorized pergolas, exterior shades, and glass enclosures. Serving Lake County IL, McHenry County, and Southeast Wisconsin. Expert site assessment and planning.',
  openGraph: {
    title: 'Outdoor Living Design Consultation | EDG',
    description:
      'Free design consultation for premium outdoor living systems. Serving Chicago to Milwaukee.',
  },
  alternates: {
    canonical: '/design',
  },
};

export default async function DesignPage() {
  const page = await getLandingPage('design');
  
  return <DesignPageClient page={page} />;
}
