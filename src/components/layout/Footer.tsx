'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

import { MapPin, Phone, ArrowRight, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { trackConversion } from '@/lib/analytics';
import { buildContactHref } from '@/lib/contact-links';
import {
  getRoutesByFooterGroup,
  priorityLocalProductRoutes,
  serviceAreaHubRoutes,
} from '@/lib/site-routes';

type FooterLink = {
  href: string;
  label: string;
};

const toFooterLinks = (
  routes: {
    href: string;
    label: string;
  }[]
): FooterLink[] =>
  routes.map((route) => ({
    href: route.href,
    label: route.label,
  }));

const footerSystemLinks = toFooterLinks(getRoutesByFooterGroup('systems'));
const footerSolutionLinks = toFooterLinks([
  ...getRoutesByFooterGroup('outdoorRooms'),
  ...getRoutesByFooterGroup('commercial'),
]);
const footerGuideLinks = toFooterLinks(getRoutesByFooterGroup('guides'));
const footerLocationLinks = toFooterLinks(serviceAreaHubRoutes);
const footerLocalProductLinks = toFooterLinks(priorityLocalProductRoutes);
const footerWorkOrder = [
  'Projects',
  'Gallery',
  'Showroom',
  'Trade Partners',
  'Contact',
];
const footerWorkLinks = toFooterLinks([
  ...getRoutesByFooterGroup('work'),
  ...getRoutesByFooterGroup('utility').filter((route) =>
    ['/trade-partners', '/contact'].includes(route.href)
  ),
]).sort(
  (a, b) => footerWorkOrder.indexOf(a.label) - footerWorkOrder.indexOf(b.label)
);

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="hover:text-edg-brand block text-sm leading-snug text-zinc-300 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterColumn({
  title,
  links,
  children,
}: {
  title: string;
  links?: FooterLink[];
  children?: ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">
        {title}
      </h4>
      {links ? <FooterLinkList links={links} /> : null}
      {children}
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const [year, setYear] = useState(2026);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setYear(new Date().getFullYear());
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  // Completely hide footer on the interactive guide reading page or admin pages
  if (
    pathname === '/guides/planning-guide/read' ||
    pathname?.startsWith('/admin')
  )
    return null;

  const isGuidePage = pathname?.startsWith('/guides/planning-guide');
  const isSouthwestFloridaPage = pathname?.startsWith(
    '/service-areas/southwest-florida'
  );
  const isSanibelPage = pathname?.startsWith(
    '/service-areas/sanibel-outdoor-living'
  );
  const isLakeGenevaPage = pathname?.startsWith(
    '/service-areas/lake-geneva-wi'
  );
  const consultationHref = isSouthwestFloridaPage
    ? buildContactHref({
        type: 'price',
        product: 'shades',
        area: 'southwest-florida',
        source: 'footer_florida',
      })
    : isSanibelPage
      ? buildContactHref({
          type: 'price',
          product: 'shades',
          area: 'sanibel',
          source: 'footer_sanibel',
        })
      : isLakeGenevaPage
        ? buildContactHref({
            type: 'price',
            product: 'multiple',
            location: 'Lake Geneva, WI',
            source: 'footer_lake_geneva',
          })
        : buildContactHref({ type: 'consultation', source: 'footer' });

  return (
    <footer className="bg-black text-white">
      {/* Lead Capture Section */}
      {!isGuidePage && (
        <div className="relative overflow-hidden border-t border-white/10 py-24">
          <Container className="relative">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Guide offer */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-edg-brand inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase">
                    <BookOpen className="h-4 w-4" />
                    Free Planning Guide
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Plan with confidence.
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-zinc-300">
                    Get clear budget ranges, system comparisons, and avoid the 7
                    most expensive mistakes.
                  </p>
                </div>
                <Link href="/guides/planning-guide" className="inline-block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-edg-brand hover:border-edg-brand rounded-none border-white bg-white px-8 py-6 text-base font-bold tracking-wider text-black uppercase hover:text-black"
                  >
                    Get the Guide <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Ready to talk */}
              <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-16">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Start your project.
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-zinc-300">
                    Talk to our design team. No pressure, just expert guidance
                    on your space.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={consultationHref}
                    onClick={(event) =>
                      trackConversion({
                        conversionName: 'book_call_click',
                        linkUrl: event.currentTarget.href,
                        linkText: event.currentTarget.textContent?.trim(),
                      })
                    }
                  >
                    <Button
                      size="lg"
                      className="bg-edg-brand rounded-none px-8 py-6 text-base font-bold tracking-wider text-black uppercase hover:bg-white"
                    >
                      Book Consultation
                    </Button>
                  </Link>
                  <a
                    href="tel:+18155810138"
                    onClick={(event) =>
                      trackConversion({
                        conversionName: 'phone_click',
                        linkUrl: event.currentTarget.href,
                        linkText: event.currentTarget.textContent?.trim(),
                      })
                    }
                    className="hover:text-edg-brand inline-flex h-14 items-center gap-3 px-6 font-bold tracking-wider text-white uppercase transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (815) 581-0138
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Main Footer */}
      <div className="border-t border-white/10 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:grid-cols-[1.2fr_repeat(5,minmax(0,1fr))]">
            {/* Brand & Location */}
            <div className="space-y-8 md:col-span-2 lg:col-span-3 xl:col-span-1">
              <Link
                href="/"
                className="block text-4xl font-bold tracking-tighter text-white"
              >
                EDG
              </Link>
              <p className="max-w-sm leading-relaxed text-zinc-300">
                The design and supply partner for motorized pergolas,
                retractable screens, and glass enclosures. Nationwide design &
                supply with local installation in the Midwest and select
                Southwest Florida project review.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-edg-brand mt-1 h-5 w-5 shrink-0" />
                  <div className="text-gray-300">
                    <div className="mb-1 text-xs font-bold tracking-wide text-white uppercase">
                      Spring Grove Showroom
                    </div>
                    <div>1802 Holian Drive</div>
                    <div>Spring Grove, IL 60081</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <FooterColumn title="Systems" links={footerSystemLinks} />

            <FooterColumn title="Solutions" links={footerSolutionLinks} />

            <FooterColumn title="Guides" links={footerGuideLinks} />

            <FooterColumn title="Locations" links={footerLocationLinks}>
              <div className="mt-7 border-t border-white/10 pt-6">
                <h5 className="mb-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  Local Product Pages
                </h5>
                <FooterLinkList links={footerLocalProductLinks} />
              </div>
            </FooterColumn>

            {/* Legal / Social */}
            <FooterColumn title="Work & Contact" links={footerWorkLinks}>
              <div className="mt-7 border-t border-white/10 pt-6">
                <h5 className="mb-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  Connect
                </h5>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="mailto:sales@edgpatioshade.com"
                      className="hover:text-edg-brand block text-sm leading-snug text-zinc-300 transition-colors"
                    >
                      sales@edgpatioshade.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+18155810138"
                      className="hover:text-edg-brand block text-sm leading-snug text-zinc-300 transition-colors"
                    >
                      (815) 581-0138
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-8 space-y-2 border-t border-white/10 pt-8">
                <Link
                  href="/html-sitemap"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Site Map
                </Link>
                <Link
                  href="/privacy"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Terms of Service
                </Link>
                <div className="mt-4 text-xs text-zinc-500">
                  © {year} EDG Patio & Shade
                </div>
              </div>
            </FooterColumn>
          </div>
        </Container>
      </div>
    </footer>
  );
}
