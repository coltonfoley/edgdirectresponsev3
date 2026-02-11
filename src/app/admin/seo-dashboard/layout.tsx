import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Dashboard | EDG Admin',
  description: 'Internal admin dashboard for SEO analytics and lead management.',
  alternates: {
    canonical: '/admin/seo-dashboard',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
