import type { Metadata } from 'next';
import GuideReadClient from './GuideReadClient';

export const metadata: Metadata = {
  title: 'Four-Season Outdoor Living Guide | Full Content',
  description:
    "The complete 2026 homeowner's guide to outdoor living systems. Louvered pergolas, motorized shades, and frameless glass for Chicago-Milwaukee homes.",
  alternates: {
    canonical: '/guides/planning-guide/read',
  },
  robots: {
    index: false, // Gated content - don't index the actual article
    follow: true,
  },
};

export default function GuideReadPage() {
  return <GuideReadClient />;
}
