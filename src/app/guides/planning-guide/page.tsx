import type { Metadata } from 'next';
import PlanningGuideLanding from './PlanningGuideLanding';

export const metadata: Metadata = {
  title: 'Four-Season Outdoor Living Planning Guide | EDG',
  description:
    'Free planning guide: costs, options, and common mistakes for pergolas, shades, and outdoor enclosures. Avoid expensive mistakes before talking to contractors.',
  alternates: {
    canonical: '/guides/planning-guide',
  },
  openGraph: {
    title: 'The Complete Guide to Four-Season Outdoor Living',
    description:
      'Planning a pergola, shade system, or outdoor enclosure? Get real budget ranges and avoid costly mistakes.',
  },
};

export default function PlanningGuidePage() {
  return <PlanningGuideLanding />;
}
