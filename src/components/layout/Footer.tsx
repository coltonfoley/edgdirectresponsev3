'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

import { MapPin, Phone, Mail, ArrowRight, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Footer() {
  const pathname = usePathname();
  const [year, setYear] = useState(2026);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Completely hide footer on the interactive guide reading page or admin pages
  if (
    pathname === '/guides/planning-guide/read' ||
    pathname?.startsWith('/admin')
  )
    return null;

  const isGuidePage = pathname?.startsWith('/guides/planning-guide');

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
                  <p className="max-w-md text-lg leading-relaxed text-gray-400">
                    Get clear budget ranges, system comparisons, and avoid the 7 most expensive mistakes.
                  </p>
                </div>
                <Link href="/guides/planning-guide" className="inline-block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-black border-white hover:bg-edg-brand hover:text-black hover:border-edg-brand rounded-none px-8 py-6 text-base font-bold uppercase tracking-wider"
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
                  <p className="max-w-md text-lg leading-relaxed text-gray-400">
                    Talk to our design team. No pressure, just expert guidance on your space.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
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
                      className="bg-edg-brand text-black hover:bg-white rounded-none px-8 py-6 text-base font-bold uppercase tracking-wider"
                    >
                      Book Consultation
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
                    className="inline-flex h-14 items-center gap-3 px-6 font-bold uppercase tracking-wider text-white transition-colors hover:text-edg-brand"
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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            {/* Brand & Location */}
            <div className="md:col-span-2 lg:col-span-2 space-y-8">
              <Link
                href="/"
                className="block text-4xl font-bold tracking-tighter text-white"
              >
                EDG
              </Link>
              <p className="max-w-sm text-gray-400 leading-relaxed">
                The design and supply partner for motorized pergolas, retractable
                screens, and glass enclosures. Nationwide design & supply. Local installation in Chicago & Milwaukee.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-edg-brand mt-1 h-5 w-5 shrink-0" />
                  <div className="text-gray-300">
                    <div className="font-bold text-white uppercase tracking-wide text-xs mb-1">
                      Spring Grove Showroom
                    </div>
                    <div>1802 Holian Drive</div>
                    <div>Spring Grove, IL 60081</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-white text-xs">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/systems" className="text-gray-400 hover:text-edg-brand transition-colors">All Systems</Link></li>
                <li><Link href="/systems/pergolas" className="text-gray-400 hover:text-edg-brand transition-colors">Motorized Pergolas</Link></li>
                <li><Link href="/systems/shades" className="text-gray-400 hover:text-edg-brand transition-colors">Retractable Screens</Link></li>
                <li><Link href="/systems/enclosures" className="text-gray-400 hover:text-edg-brand transition-colors">Glass Enclosures</Link></li>
                <li><Link href="/guides" className="text-gray-400 hover:text-edg-brand transition-colors">Guides & Resources</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-edg-brand transition-colors">Projects</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-edg-brand transition-colors">Gallery</Link></li>
                <li><Link href="/showroom" className="text-gray-400 hover:text-edg-brand transition-colors">Showroom</Link></li>
                <li><Link href="/design" className="text-gray-400 hover:text-edg-brand transition-colors">Design Process</Link></li>
                <li><Link href="/price" className="text-gray-400 hover:text-edg-brand transition-colors">Pricing Guide</Link></li>
              </ul>
            </div>

            {/* Service Areas & Commercial */}
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-white text-xs">Service Areas</h4>
              <ul className="space-y-3">
                <li><Link href="/service-areas" className="text-gray-400 hover:text-edg-brand transition-colors">All Service Areas</Link></li>
                <li><Link href="/service-areas/wilmette-il" className="text-gray-400 hover:text-edg-brand transition-colors">Wilmette, IL</Link></li>
                <li><Link href="/service-areas/winnetka-il" className="text-gray-400 hover:text-edg-brand transition-colors">Winnetka, IL</Link></li>
                <li><Link href="/service-areas/northbrook-il" className="text-gray-400 hover:text-edg-brand transition-colors">Northbrook, IL</Link></li>
                <li><Link href="/service-areas/barrington-il" className="text-gray-400 hover:text-edg-brand transition-colors">Barrington, IL</Link></li>
                <li><Link href="/service-areas/naperville-il" className="text-gray-400 hover:text-edg-brand transition-colors">Naperville, IL</Link></li>
              </ul>
              <h4 className="mt-8 mb-6 font-bold uppercase tracking-widest text-white text-xs">Commercial</h4>
              <ul className="space-y-3">
                <li><Link href="/commercial" className="text-gray-400 hover:text-edg-brand transition-colors">Commercial Solutions</Link></li>
                <li><Link href="/trade-partners" className="text-gray-400 hover:text-edg-brand transition-colors">Trade Partners</Link></li>
              </ul>
            </div>

            {/* Legal / Social */}
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-white text-xs">Connect</h4>
              <ul className="space-y-3">
                <li><a href="mailto:info@edgpatioshade.com" className="text-gray-400 hover:text-edg-brand transition-colors">info@edgpatioshade.com</a></li>
                <li><a href="tel:+18155810138" className="text-gray-400 hover:text-edg-brand transition-colors">(815) 581-0138</a></li>
                <li><a href="https://instagram.com" className="text-gray-400 hover:text-edg-brand transition-colors">Instagram</a></li>
                <li><a href="https://linkedin.com" className="text-gray-400 hover:text-edg-brand transition-colors">LinkedIn</a></li>
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
                <Link href="/html-sitemap" className="block text-xs text-gray-500 hover:text-white">Site Map</Link>
                <Link href="/privacy" className="block text-xs text-gray-500 hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="block text-xs text-gray-500 hover:text-white">Terms of Service</Link>
                <div className="text-xs text-gray-600 mt-4">© {year} EDG Patio & Shade</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
