import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { guidesQuery } from '@/sanity/lib/queries';
import GuidesClient from './GuidesClient';

export const metadata: Metadata = {
  title: 'Outdoor Living Knowledge Base | Guides & Resources',
  description:
    'Expert guides on louvered pergolas, shade systems, and outdoor enclosures. Cost breakdowns, installation tips, and zoning information for Chicago-Milwaukee homeowners.',
  alternates: {
    canonical: '/guides',
  },
};

export default async function GuidesPage() {
  const guides = await client.fetch(guidesQuery);

  return <GuidesClient guides={guides || []} />;
}
