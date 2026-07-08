import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import { getHtmlSitemapRoutes, type SiteRouteFamily } from '@/lib/site-routes';

export const metadata: Metadata = {
  title: 'Sitemap | EDG Patio & Shade',
  description: 'Complete overview of pages on EDG Patio & Shade website.',
  alternates: {
    canonical: '/html-sitemap',
  },
};

type SitemapSection = {
  category: string;
  links: { href: string; label: string }[];
};

const sectionFamilies: { category: string; family: SiteRouteFamily }[] = [
  { category: 'Main', family: 'main' },
  { category: 'Systems', family: 'systems' },
  { category: 'Outdoor Rooms', family: 'outdoor-rooms' },
  { category: 'Commercial', family: 'commercial' },
  { category: 'Service Areas', family: 'service-areas' },
  { category: 'Most Requested Local Pages', family: 'local-products' },
  { category: 'Guides', family: 'guides' },
  { category: 'Policies', family: 'utility' },
];

function routeLinksForFamily(family: SiteRouteFamily) {
  return getHtmlSitemapRoutes(family).map((route) => ({
    href: route.href,
    label: route.label,
  }));
}

export default function SitemapPage() {
  const sitemapLinks: SitemapSection[] = [
    ...sectionFamilies
      .map((section) => ({
        category: section.category,
        links: routeLinksForFamily(section.family),
      }))
      .filter((section) => section.links.length > 0),
    {
      category: 'Project Detail Pages',
      links: getAllProjects().map((project) => ({
        href: `/projects/${project.slug}`,
        label: project.title,
      })),
    },
  ];

  return (
    <main className="bg-background min-h-screen pt-24 pb-16">
      <Section>
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'Sitemap' }]} />
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
                      <li
                        key={`${section.category}-${link.href}-${link.label}`}
                      >
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
