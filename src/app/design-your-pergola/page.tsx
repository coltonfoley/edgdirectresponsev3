import type { Metadata } from 'next';
import { PergolaVisualizerPrototypeClient } from './PergolaVisualizerPrototypeClient';

export const metadata: Metadata = {
  title: '3D Pergola Visualizer | EDG Patio & Shade',
  description:
    'Preview a louvered roof pergola in 3D, explore realistic finish and enclosure options, and request pricing from EDG Patio & Shade.',
  alternates: {
    canonical: '/design-your-pergola',
  },
  openGraph: {
    title: '3D Pergola Visualizer | EDG Patio & Shade',
    description:
      'Try EDG’s interactive louvered roof visualizer and send your preferred configuration to our design team.',
  },
};

export default function DesignYourPergolaPage() {
  return <PergolaVisualizerPrototypeClient />;
}
