import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | EDG Outdoor Living',
  description:
    'View our portfolio of motorized pergola and outdoor shade installations across Chicago, Milwaukee, and Lake County.',
  alternates: {
    canonical: '/projects',
  },
  robots: {
    // This page redirects to /gallery, so we don't want it indexed separately
    index: false,
    follow: true,
  },
};

export default function ProjectsPage() {
  redirect('/gallery');
}
