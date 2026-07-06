import type { Metadata } from 'next';
import { ProjectsContent } from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects | EDG Patio & Shade Portfolio',
  description:
    'See outdoor living transformations across Chicagoland. Motorized pergolas, retractable screens, and glass enclosures for homes and businesses.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
