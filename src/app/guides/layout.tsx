import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Expert Outdoor Living Guides',
  },
  description:
    'Comprehensive guides on motorized pergolas, retractable screens, glass enclosures, and outdoor room planning.',
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-edg-light min-h-screen dark:bg-black">{children}</div>
  );
}
