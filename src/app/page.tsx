import type { Metadata } from 'next';
import { getHomepage } from '@/sanity/lib/server-fetch';
import { urlFor } from '@/sanity/lib/image';
import HomePageClient from './HomePageClient';
import { websiteSchema } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepage();
  const seo = homepage?.seo || {};

  return {
    title: seo.metaTitle || 'Motorized Pergolas Chicago & Milwaukee | EDG Patio & Shade',
    description: seo.metaDescription || 'Premium motorized pergolas, exterior shades, and glass enclosures. Full-service installation for the Chicago to Milwaukee region, with nationwide design and supply available.',
    alternates: {
      canonical: '/',
    },
    openGraph: seo.ogImage ? {
      images: [urlFor(seo.ogImage).url()],
    } : undefined,
  };
}

export default async function Home() {
  const homepage = await getHomepage();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <HomePageClient homepage={homepage} />
    </>
  );
}
