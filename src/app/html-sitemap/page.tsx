import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import { Metadata } from 'next';
import { getIndexableProjects } from '@/lib/projects';
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
      links: getIndexableProjects().map((project) => ({
        href: `/projects/${project.slug}`,
        label: project.title,
      })),
    },
  ];
  const routeCount = sitemapLinks.reduce(
    (total, section) => total + section.links.length,
    0
  );

  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <Section className="border-b border-border bg-surface-dark pt-28 pb-16 text-text-inverse md:pt-32 md:pb-20">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[{ label: 'Sitemap' }]}
              className="text-text-inverse-muted"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="label-editorial mb-5 text-edg-brand">
                Site Index
              </div>
              <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
                EDG page directory.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-zinc-300">
                A source-backed index of product, guide, service-area,
                commercial, project, and policy pages on EDG Patio & Shade.
              </p>
            </div>

            <div className="border border-white/10 bg-black/35 p-6">
              <div className="mb-4 text-xs font-bold tracking-[0.2em] text-edg-brand uppercase">
                Route Inventory
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-4">
                <span className="text-sm font-bold text-white">
                  Listed pages
                </span>
                <span className="text-4xl font-bold text-edg-brand">
                  {routeCount}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Generated from the shared route registry plus current project
                records.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {sitemapLinks.map((section) => (
              <section
                key={section.category}
                className="border border-border bg-white p-6"
                aria-labelledby={`sitemap-${section.category
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')}`}
              >
                <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <h2
                    id={`sitemap-${section.category
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')}`}
                    className="text-xl font-bold text-text-primary"
                  >
                    {section.category}
                  </h2>
                  <span className="text-xs font-bold tracking-[0.18em] text-text-muted uppercase">
                    {section.links.length} pages
                  </span>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={`${section.category}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-4 text-sm font-medium text-text-secondary transition-colors hover:text-edg-brand-dark"
                      >
                        <span>{link.label}</span>
                        <span
                          aria-hidden="true"
                          className="text-edg-brand-dark opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          /
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
