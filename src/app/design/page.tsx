import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import DesignPageClient from './DesignPageClient';

import { urlFor } from '@/sanity/lib/image';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLandingPage('design');
  const seo = page?.seo || {};

  return {
    title: seo.metaTitle || 'Outdoor Living Design Consultation | Chicago & Milwaukee',
    description: seo.metaDescription || 'Free design consultation for motorized pergolas, exterior shades, and glass enclosures. Serving Lake County IL, McHenry County, and Southeast Wisconsin. Expert site assessment and planning.',
    alternates: {
      canonical: '/design',
    },
    openGraph: {
      title: seo.metaTitle || 'Outdoor Living Design Consultation | EDG',
      description: seo.metaDescription || 'Free design consultation for premium outdoor living systems. Serving Chicago to Milwaukee.',
      images: seo.ogImage ? [urlFor(seo.ogImage).url()] : undefined,
    },
  };
}

export default async function DesignPage() {
  const page = await getLandingPage('design');

  return <DesignPageClient page={page} />;
}
