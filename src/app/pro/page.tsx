import type { Metadata } from 'next';
import { getLandingPage } from '@/sanity/lib/fetch';
import ProPageClient from './ProPageClient';

export const metadata: Metadata = {
  title: 'For Builders & Architects | Trade Partner Program',
  description:
    'Partner with EDG for motorized pergolas, shades, and glass enclosures. We handle the specialized installs so you can focus on the build. 48-hour pricing, site coordination, and trade margins.',
  openGraph: {
    title: 'Builder & Trade Partner Program | EDG',
    description:
      'Shading solutions for builders and architects. Trade pricing, fast quotes, and on-schedule installs.',
  },
  alternates: {
    canonical: '/pro',
  },
};

export default async function ProPage() {
  const page = await getLandingPage('pro');
  
  return <ProPageClient page={page} />;
}
