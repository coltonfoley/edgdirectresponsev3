import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { serviceAreasQuery } from '@/sanity/lib/queries';
import ServiceAreasClient from './ServiceAreasClient';

export const metadata: Metadata = {
  title: 'Service Areas | Pergolas & Outdoor Living | Chicago to Milwaukee',
  description:
    'EDG Outdoor Living serves Lake County IL, McHenry County, the North Shore, and Southeast Wisconsin. Motorized pergolas, shades, and glass enclosures installed by local experts.',
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    title: 'Service Areas | EDG Outdoor Living',
    description:
      'Serving the greater Chicago to Milwaukee corridor. Local expertise, professional installation.',
  },
};

export default async function ServiceAreasPage() {
  const areas = await client.fetch(serviceAreasQuery);

  return <ServiceAreasClient areas={areas || []} />;
}
