import type { Metadata } from 'next';
import PlanningGuideLanding from './PlanningGuideLanding';

export const metadata: Metadata = {
  title: 'Outdoor Living Planning Guide | EDG',
  description:
    'Planning guide: costs, options, and common mistakes for motorized pergolas, screens, and outdoor enclosures before you choose a system.',
  alternates: {
    canonical: '/guides/planning-guide',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'The Complete Outdoor Living Planning Guide',
    description:
      'Planning a pergola, shade system, or outdoor enclosure? Get real budget ranges and avoid costly mistakes.',
  },
};

export default function PlanningGuidePage() {
  return <PlanningGuideLanding />;
}
