import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { contactPageQuery } from '@/sanity/lib/queries';
import ContactClient from '@/components/features/contact/ContactClient';
import { contactPageSchema, localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact EDG Outdoor Living | Get a Quote',
  description:
    'Start your outdoor living project. Request a quote for motorized pergolas, retractable shades, or glass enclosures in Chicago & Milwaukee.',
  alternates: {
    canonical: '/contact',
  },
};

export default async function ContactPage() {
  const content = await client.fetch(contactPageQuery);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <ContactClient content={content} />
    </>
  );
}