import type { Metadata } from 'next';
import { TradePartnersPageContent } from './TradePartnersPageContent';

export const metadata: Metadata = {
  title: 'Trade Partners | B2B Outdoor Living Design & Supply | EDG',
  description: 'Design and supply partner for builders, architects, and contractors nationwide. Motorized pergolas, screens, and enclosures for your projects.',
  alternates: { canonical: '/trade-partners' },
  openGraph: {
    title: 'Trade Partners | EDG Patio & Shade',
    description: 'B2B design and supply partner for outdoor living systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

export default function TradePartnersPage() {
  return (
    <main className="min-h-screen">
      <TradePartnersPageContent />
    </main>
  );
}
