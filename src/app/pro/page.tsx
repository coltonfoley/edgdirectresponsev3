import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import ProPageClient from './ProPageClient';

import { urlFor } from '@/sanity/lib/image';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLandingPage('pro');
  const seo = page?.seo || {};

  return {
    title: seo.metaTitle || 'For Builders & Architects | Trade Partner Program',
    description: seo.metaDescription || 'Partner with EDG for motorized pergolas, shades, and glass enclosures. We handle the specialized installs so you can focus on the build. 48-hour pricing, site coordination, and trade margins.',
    alternates: {
      canonical: '/pro',
    },
    openGraph: {
      title: seo.metaTitle || 'Builder & Trade Partner Program | EDG',
      description: seo.metaDescription || 'Shading solutions for builders and architects. Trade pricing, fast quotes, and on-schedule installs.',
      images: seo.ogImage ? [urlFor(seo.ogImage).url()] : undefined,
    },
  };
}

export default async function ProPage() {
  const page = await getLandingPage('pro');

  return <ProPageClient page={page} />;
}
