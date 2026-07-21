import { Metadata } from 'next';
import ContactClient from '@/components/features/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Request a Quote | EDG Patio & Shade',
  description:
    'Start your outdoor living project. Request a quote for motorized pergolas, motorized screens, or glass enclosures in the Midwest and select Southwest Florida markets.',
  keywords: [
    'contact edg',
    'pergola quote',
    'patio screen quote',
    'glass enclosure quote',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Request a Quote | EDG Patio & Shade',
    description:
      'Request a quote for a motorized pergola, patio screens, glass enclosure, or another EDG outdoor living project.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Request a Quote from EDG Patio & Shade',
    description:
      'Request a quote for a motorized pergola, patio screens, glass enclosure, or another outdoor living project.',
    url: 'https://www.edgpatioshade.com/contact',
    mainEntity: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
  };

  return (
    <>
      <ContactClient initialFormType="homeowner" initialSource="contact_page" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
