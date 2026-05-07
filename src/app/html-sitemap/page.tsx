import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | EDG Patio & Shade',
  description: 'Complete overview of pages on EDG Patio & Shade website.',
  alternates: {
    canonical: '/html-sitemap',
  },
};

const sitemapLinks = [
  {
    category: 'Main',
    links: [
      { href: '/', label: 'Home' },
      { href: '/contact', label: 'Contact' },
      { href: '/contact', label: 'Project Planning' },
      { href: '/contact', label: 'Pricing Consultation' },
      { href: '/trade-partners', label: 'For Pros' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    category: 'Systems',
    links: [
      { href: '/systems', label: 'All Systems' },
      { href: '/systems/pergolas', label: 'Louvered Pergolas' },
      { href: '/systems/shades', label: 'Motorized Shades' },
      { href: '/systems/enclosures', label: 'Glass Enclosures' },
      { href: '/systems/appliances', label: 'Outdoor Appliances' },
    ],
  },
  {
    category: 'Commercial',
    links: [
      { href: '/commercial', label: 'Commercial Solutions' },
      {
        href: '/commercial/chicago-hospitality-outdoor-living',
        label: 'Hospitality Outdoor Living',
      },
      {
        href: '/commercial/restaurant-patio-enclosures',
        label: 'Restaurant Patio Enclosures',
      },
      {
        href: '/commercial/hotel-roof-deck-systems',
        label: 'Hotel Roof Deck Systems',
      },
      {
        href: '/commercial/country-club-outdoor-spaces',
        label: 'Country Club Context',
      },
      { href: '/commercial/west-loop', label: 'West Loop Projects' },
    ],
  },
  {
    category: 'Service Areas',
    links: [
      { href: '/service-areas', label: 'All Service Areas' },
      { href: '/service-areas/chicago-il', label: 'Chicago, IL' },
      {
        href: '/service-areas/chicago-il/motorized-pergolas',
        label: 'Chicago Motorized Pergolas',
      },
      {
        href: '/service-areas/chicago-il/retractable-screens',
        label: 'Chicago Retractable Screens',
      },
      {
        href: '/service-areas/chicago-il/glass-enclosures',
        label: 'Chicago Glass Patio Enclosures',
      },
      { href: '/service-areas/deerfield-il', label: 'Deerfield, IL' },
      {
        href: '/service-areas/deerfield-il/retractable-screens',
        label: 'Deerfield Retractable Screens',
      },
      { href: '/service-areas/wilmette-il', label: 'Wilmette, IL' },
      { href: '/service-areas/winnetka-il', label: 'Winnetka, IL' },
      { href: '/service-areas/northbrook-il', label: 'Northbrook, IL' },
      { href: '/service-areas/barrington-il', label: 'Barrington, IL' },
      { href: '/service-areas/naperville-il', label: 'Naperville, IL' },
      { href: '/service-areas/hinsdale-il', label: 'Hinsdale, IL' },
      { href: '/service-areas/oak-brook-il', label: 'Oak Brook, IL' },
      { href: '/service-areas/lake-geneva-wi', label: 'Lake Geneva, WI' },
      { href: '/service-areas/sanibel-outdoor-living', label: 'Sanibel, FL' },
    ],
  },
  {
    category: 'Resources',
    links: [
      { href: '/guides', label: 'Knowledge Base' },
      { href: '/guides/planning-guide', label: 'Planning Guide' },
      { href: '/guides/pergola-cost', label: 'Pergola Cost Guide' },
      {
        href: '/guides/magnatrack-screens-cost',
        label: 'MagnaTrack Screens Cost Guide',
      },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="bg-background min-h-screen pt-24 pb-16">
      <Section>
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Sitemap' },
              ]}
            />
          </div>
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-4xl font-bold md:text-5xl">Sitemap</h1>
            <p className="text-muted-foreground mb-12 text-lg">
              Overview of all pages on our website.
            </p>

            <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
              {sitemapLinks.map((section) => (
                <div key={section.category}>
                  <h2 className="text-edg-brand-text dark:text-edg-brand mb-4 text-xl font-bold">
                    {section.category}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={`${section.category}-${link.href}-${link.label}`}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
