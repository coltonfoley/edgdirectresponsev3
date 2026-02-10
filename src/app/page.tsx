import type { Metadata } from 'next';
import { HomeClient } from '@/components/features/home/HomeClient';

export const metadata: Metadata = {
  title: 'Motorized Pergolas & Retractable Screens | EDG Patio & Shade',
  description:
    'EDG Patio & Shade is the design and supply partner for motorized pergolas, retractable screens, and glass enclosures. Full-service installation from Chicago to Milwaukee, with nationwide design and supply for trade partners.',
  keywords: ['motorized pergolas', 'retractable screens', 'outdoor living chicago', 'pergola installation', 'patio shades', 'edg outdoor'],
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}
