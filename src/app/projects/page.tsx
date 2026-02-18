import type { Metadata } from 'next';
import { ProjectsContent } from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects | EDG Outdoor Living Portfolio',
  description:
    'See 24+ outdoor living transformations across Chicagoland. Motorized pergolas, retractable screens, and glass enclosures for homes and businesses.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
