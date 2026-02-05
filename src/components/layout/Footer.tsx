'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

import { MapPin, Phone, Mail, ArrowRight, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  // Completely hide footer on the interactive guide reading page or admin pages
  if (pathname === '/guide/read' || pathname?.startsWith('/admin')) return null;

  const isGuidePage = pathname?.startsWith('/guide');

  return (
    <footer className="bg-edg-dark border-t border-white/5 text-white">
      {/* Lead Capture Section */}
      {!isGuidePage && (
        <div className="relative overflow-hidden border-b border-white/5 py-20 lg:py-24">
          {/* Background Glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_50%_-20%,rgba(66,255,193,0.06),transparent_70%)]" />

          <Container className="relative">
            <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-0">
              {/* Guide offer */}
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
                <Link href="/guide" className="block">
                  <Button
                    size="lg"
                    className="shadow-edg-brand/5 w-full rounded-xl shadow-lg"
                  >
                    Get the Free Guide <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Ready to talk */}
              <div className="flex flex-col justify-between space-y-8 py-2 lg:border-l lg:border-white/10 lg:pl-16">
                <div className="space-y-4">
                  <div className="hidden h-[22px] lg:block" />{' '}
                  {/* Alignment Spacer to match left side badge */}
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
                        className="shadow-edg-brand/5 group-hover:shadow-edg-brand/10 rounded-xl px-8 whitespace-nowrap shadow-lg transition-all"
                      >
                        Book a Consultation{' '}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <a
                      href="tel:+18155810138"
                      onClick={() =>
                        (window as any).dataLayer?.push({
                          event: 'conversion_event',
                          conversion_name: 'phone_click',
                          value: 0,
                        })
                      }
                      className="inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 px-6 font-medium whitespace-nowrap text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/5"
                    >
                      <Phone className="text-edg-brand h-5 w-5" />
                      (815) 581-0138
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                    <div className="bg-edg-brand h-1.5 w-1.5 animate-pulse rounded-full" />
                    Mon–Fri, 7am–4pm CT • Response within 1 business day
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {/* Brand & Location */}
            <div className="md:col-span-2">
              <Link
                href="/"
                className="mb-4 block text-2xl font-bold text-white"
              >
                EDG
              </Link>
              <p className="mb-6 max-w-sm text-gray-400">
                Premium motorized pergolas, exterior shades, and glass
                enclosures for the Chicago/Milwaukee region, with design and
                supply available nationwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-medium text-white">
                      Spring Grove Showroom
                    </div>
                    <div>1802 Holian Drive</div>
                    <div>Spring Grove, IL 60081</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="text-edg-brand h-5 w-5 shrink-0" />
                  <a
                    href="tel:+18155810138"
                    className="hover:text-edg-brand transition-colors"
                    onClick={() =>
                      (window as any).dataLayer?.push({
                        event: 'conversion_event',
                        conversion_name: 'phone_click',
                        value: 0,
                      })
                    }
                  >
                    (815) 581-0138
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="text-edg-brand h-5 w-5 shrink-0" />
                  <a
                    href="mailto:info@edgpatioshade.com"
                    className="hover:text-edg-brand transition-colors"
                  >
                    info@edgpatioshade.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/guide"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Free Planning Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/design"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Design Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/price"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pro"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    For Professionals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commercial"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commercial/hotel-pergolas"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Hotel Pergolas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commercial/restaurant-patio-solutions"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Restaurant Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/louvered-pergolas"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Louvered Pergola Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/pergola-vs-patio-cover"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Pergola vs Patio Cover
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://app.edgpatioshade.com/"
                    className="hover:text-edg-brand text-gray-400 transition-colors"
                  >
                    Partner Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Service Area</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/service-areas/lake-county-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Lake County, IL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/mchenry-county-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    McHenry County, IL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/north-shore-chicago"
                    className="hover:text-edg-brand transition-colors"
                  >
                    North Shore Chicago
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/barrington-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Barrington Area
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/naperville-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Naperville & West Suburbs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/oak-brook-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Oak Brook & Hinsdale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/northbrook-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Northbrook, IL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/wilmette-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Wilmette, IL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/winnetka-il"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Winnetka, IL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/southeast-wisconsin"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Southeast Wisconsin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/lake-geneva-wi"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Lake Geneva, WI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-areas/sanibel-outdoor-living"
                    className="hover:text-edg-brand transition-colors"
                  >
                    Sanibel / Captiva, FL
                  </Link>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-400">
                Design & supply available nationwide
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EDG Outdoor Living. All rights
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
