'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { LinkButton, buttonClassName } from '@/components/ui/Button';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

import { MapPin, Phone, ArrowRight, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { buildContactHref } from '@/lib/contact-links';
import { getRoutesByFooterGroup } from '@/lib/site-routes';

type FooterLink = {
  href: string;
  label: string;
};

const toFooterLinks = (
  routes: {
    href: string;
    label: string;
    footerLabel?: string;
  }[]
): FooterLink[] =>
  routes.map((route) => ({
    href: route.href,
    label: route.footerLabel ?? route.label,
  }));

const footerProductLinks = toFooterLinks(getRoutesByFooterGroup('products'));
const footerWorkLinks = toFooterLinks(getRoutesByFooterGroup('work'));
const footerAreaLinks = toFooterLinks(getRoutesByFooterGroup('areas'));
const footerHelpLinks = toFooterLinks(getRoutesByFooterGroup('help'));
const footerLegalLinks = toFooterLinks(getRoutesByFooterGroup('legal'));
const milwaukeeClusterRoutes = [
  '/service-areas/milwaukee-wi',
  '/service-areas/milwaukee-wi/motorized-pergolas',
  '/service-areas/milwaukee-wi/zoning-guide',
] as const;
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
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">
        {title}
      </h4>
      <FooterLinkList links={links} />
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
  const isMilwaukeePage = milwaukeeClusterRoutes.some((route) =>
    pathname?.startsWith(route)
  );
  const quoteHref = isSouthwestFloridaPage
    ? buildContactHref({
        type: 'quote',
        product: 'shades',
        area: 'southwest-florida',
        source: 'footer_florida',
      })
    : isSanibelPage
      ? buildContactHref({
          type: 'quote',
          product: 'shades',
          area: 'sanibel',
          source: 'footer_sanibel',
        })
      : isLakeGenevaPage
        ? buildContactHref({
            type: 'quote',
            product: 'multiple',
            location: 'Lake Geneva, WI',
            source: 'footer_lake_geneva',
          })
        : isMilwaukeePage
          ? buildContactHref({
              type: 'quote',
              product: 'pergola',
              location: 'Milwaukee, WI',
              source: 'footer_milwaukee',
            })
          : buildContactHref({ type: 'quote', source: 'footer' });

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
                    Get practical budget ranges, system comparisons, and a
                    checklist for avoiding common planning mistakes.
                  </p>
                </div>
                <LinkButton
                  href="/guides/planning-guide"
                  size="lg"
                  variant="outline"
                  className="hover:bg-edg-brand hover:border-edg-brand rounded-none border-white bg-white px-8 py-6 text-base font-bold tracking-wider text-black uppercase hover:text-black"
                >
                  Get the Guide <ArrowRight className="ml-2 h-5 w-5" />
                </LinkButton>
              </div>

              {/* Ready to talk */}
              <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-16">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Ready for a quote?
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-zinc-300">
                    Tell us what you are interested in. Project details and
                    photos are optional.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <TrackedLink
                    href={quoteHref}
                    conversionName="quote_cta_click"
                    className={buttonClassName({
                      size: 'lg',
                      className:
                        'bg-edg-brand rounded-none px-8 py-6 text-base font-bold tracking-wider text-black uppercase hover:bg-white',
                    })}
                  >
                    Request a Quote
                  </TrackedLink>
                  <TrackedPhoneLink
                    href="tel:+18155810138"
                    className="hover:text-edg-brand inline-flex h-14 items-center gap-3 px-6 font-bold tracking-wider text-white uppercase transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (815) 581-0138
                  </TrackedPhoneLink>
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
                Southwest Florida project support.
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

            <FooterColumn title="Products" links={footerProductLinks} />

            <FooterColumn title="Work" links={footerWorkLinks} />

            <FooterColumn title="Areas" links={footerAreaLinks} />

            <FooterColumn title="Help" links={footerHelpLinks} />

            <div>
              <FooterColumn title="Legal" links={footerLegalLinks} />
              <div className="mt-8 text-xs text-zinc-500">
                © {year} EDG Patio & Shade
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
