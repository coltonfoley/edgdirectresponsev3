import { Metadata } from 'next';
import ContactClient from '@/components/features/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact EDG Patio & Shade | Get a Quote',
  description:
    'Start your outdoor living project. Request a quote for motorized pergolas, motorized screens, or glass enclosures in the Midwest and select Southwest Florida markets.',
  keywords: ['contact edg', 'outdoor living consultation', 'pergola quote', 'schedule consultation'],
  openGraph: {
    title: 'Contact EDG Patio & Shade | Free Consultation',
    description: 'Schedule a free consultation for your outdoor living project. Visit our Spring Grove showroom or request an on-site assessment.',
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
    name: 'Contact EDG Patio & Shade',
    description: 'Schedule a free consultation for your outdoor living project.',
    url: 'https://www.edgpatioshade.com/contact',
    mainEntity: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
  };

  return (
    <>
      <ContactClient
        initialFormType="homeowner"
        initialSource="contact_page"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
