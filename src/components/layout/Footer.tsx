'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, ArrowRight, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useSiteConfig } from '@/hooks/useSanityData';

export function Footer() {
  const pathname = usePathname();
  const { config, loading } = useSiteConfig();

  if (
    pathname === '/guides/planning-guide/read' ||
    pathname?.startsWith('/admin')
  )
    return null;

  const isGuidePage = pathname?.startsWith('/guides/planning-guide');

  const company = config?.companyInfo;
  const footer = config?.footer;
  const quickLinks = footer?.quickLinks || [];
  const serviceAreas = footer?.serviceAreas || [];

  const phone = company?.phone || '(815) 581-0138';
  const phoneRaw = company?.phoneRaw || '+18155810138';
  const email = company?.email || 'info@edgpatioshade.com';
  const address = company?.address;

  return (
    <footer className="bg-edg-dark border-t border-white/5 text-white">
      {!isGuidePage && (
        <div className="relative overflow-hidden border-b border-white/5 py-20 lg:py-24">
          <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_50%_-20%,rgba(66,255,193,0.06),transparent_70%)]" />

          <Container className="relative">
            <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-0">
              <div className="flex flex-col justify-between space-y-8 py-2 lg:pr-16">
                <div className="space-y-4">
                  <div className="text-edg-brand inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase">
                    <div className="bg-edg-brand/10 rounded p-1">
                      <BookOpen className="h-3.5 w-3.5" />
                    </div>
                    Free Planning Guide
                  </div>
                  <h3 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl">
                    Plan your outdoor space <br className="hidden md:block" />
                    <span className="font-medium text-white/80 italic">
                      with confidence.
                    </span>
                  </h3>
                  <p className="max-w-md text-base leading-relaxed text-gray-400">
                    Get our free guide: budget ranges, system comparisons, and
                    the mistakes to avoid.
                  </p>
                </div>
                <Link href="/guides/planning-guide" className="block">
                  <Button
                    size="lg"
                    className="shadow-edg-brand/5 w-full rounded-none shadow-lg"
                  >
                    Get the Free Guide <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col justify-between space-y-8 py-2 lg:border-l lg:border-white/10 lg:pl-16">
                <div className="space-y-4">
                  <div className="hidden h-[22px] lg:block" />
                  <h3 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl">
                    Ready to start <br className="hidden md:block" />
                    your project?
                  </h3>
                  <p className="max-w-md text-base leading-relaxed text-gray-400">
                    Talk to our team about your outdoor living goals. No
                    pressure, just helpful guidance.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="group"
                      onClick={() =>
                        (window as any).dataLayer?.push({
                          event: 'conversion_event',
                          conversion_name: 'book_call_click',
                          value: 0,
                        })
                      }
                    >
                      <Button
                        size="lg"
                        className="shadow-edg-brand/5 group-hover:shadow-edg-brand/10 rounded-none px-8 whitespace-nowrap shadow-lg transition-all"
                      >
                        Book a Consultation{' '}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <a
                      href={`tel:${phoneRaw}`}
                      onClick={() =>
                        (window as any).dataLayer?.push({
                          event: 'conversion_event',
                          conversion_name: 'phone_click',
                          value: 0,
                        })
                      }
                      className="inline-flex h-12 items-center justify-center gap-3 rounded-none border border-white/10 px-6 font-medium whitespace-nowrap text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/5"
                    >
                      <Phone className="text-edg-brand h-5 w-5" />
                      {phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                    <div className="bg-edg-brand h-1.5 w-1.5 animate-pulse rounded-full" />
                    {company?.hours || 'Mon-Fri, 7am-4pm CT'} • Response within 1 business day
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="mb-4 block text-2xl font-bold text-white"
              >
                EDG
              </Link>
              <p className="mb-6 max-w-sm text-gray-400">
                {footer?.description || 'Premium motorized pergolas, exterior shades, and glass enclosures for the Chicago/Milwaukee region, with design and supply available nationwide.'}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-medium text-white">
                      {address?.showroomName || 'Spring Grove Showroom'}
                    </div>
                    <div>{address?.street || '1802 Holian Drive'}</div>
                    <div>{address?.city || 'Spring Grove'}, {address?.state || 'IL'} {address?.zip || '60081'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="text-edg-brand h-5 w-5 shrink-0" />
                  <a
                    href={`tel:${phoneRaw}`}
                    className="hover:text-edg-brand transition-colors"
                    onClick={() =>
                      (window as any).dataLayer?.push({
                        event: 'conversion_event',
                        conversion_name: 'phone_click',
                        value: 0,
                      })
                    }
                  >
                    {phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="text-edg-brand h-5 w-5 shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-edg-brand transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link: any) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-edg-brand text-gray-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Service Area</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {serviceAreas.slice(0, 7).map((area: any) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="hover:text-edg-brand transition-colors"
                    >
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-400">
                Design & supply available nationwide
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {company?.name || 'EDG Outdoor Living'}. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
