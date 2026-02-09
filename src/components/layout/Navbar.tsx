'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Core Product Links (direct nav items per brand source)
const coreProducts = [
  {
    href: '/systems/pergolas',
    label: 'Pergolas',
  },
  {
    href: '/systems/shades',
    label: 'Screens',
  },
  {
    href: '/systems/enclosures',
    label: 'Enclosures',
  },
];

// Secondary Offerings - "Complete Your Space" dropdown per brand source
const completeYourSpace = [
  {
    href: '/systems/appliances',
    label: 'Outdoor Kitchens',
    desc: 'Built-in grills, appliances, cabinetry',
  },
  {
    href: '/systems/heating',
    label: 'Heating Systems',
    desc: 'Infrared heaters & fire features',
  },
  {
    href: '/systems/furniture',
    label: 'Outdoor Furniture',
    desc: 'Premium outdoor furniture lines',
  },
  {
    href: '/systems/umbrellas',
    label: 'Umbrella Systems',
    desc: 'Commercial-grade shade umbrellas',
  },
];

const areasDropdown = [
  {
    href: '/service-areas/lake-county-il',
    label: 'Lake County, IL',
    desc: 'Libertyville, Lake Forest, Highland Park',
  },
  {
    href: '/service-areas/north-shore-chicago',
    label: 'North Shore Chicago',
    desc: 'Wilmette, Winnetka, Glencoe',
  },
  {
    href: '/service-areas/oak-brook-il',
    label: 'Oak Brook & Hinsdale',
    desc: 'Burr Ridge, Elmhurst, Western Springs',
  },
  {
    href: '/service-areas/barrington-il',
    label: 'Barrington Area',
    desc: 'North, South, and Lake Barrington',
  },
  {
    href: '/service-areas/naperville-il',
    label: 'Naperville & West Suburbs',
    desc: 'Downers Grove, Lisle, Aurora',
  },
  {
    href: '/service-areas/mchenry-county-il',
    label: 'McHenry County, IL',
    desc: 'Crystal Lake, Algonquin, Woodstock',
  },
  {
    href: '/service-areas/southeast-wisconsin',
    label: 'Southeast Wisconsin',
    desc: 'Lake Geneva, Kenosha, Racine',
  },
  {
    href: '/service-areas/lake-geneva-wi',
    label: 'Lake Geneva, WI',
    desc: 'Lake Geneva, Fontana, Williams Bay',
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const systemsDropdownRef = useRef<HTMLDivElement>(null);
  const areasDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        systemsDropdownRef.current &&
        !systemsDropdownRef.current.contains(event.target as Node)
      ) {
        setSystemsOpen(false);
      }
      if (
        areasDropdownRef.current &&
        !areasDropdownRef.current.contains(event.target as Node)
      ) {
        setAreasOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine logo/text color based on scroll state
  const isDarkBg = !scrolled;
  const textColor = scrolled ? 'text-edg-dark' : 'text-white';
  const logoColor = scrolled ? 'text-edg-dark' : 'text-white';

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-edg-light/95 border-b border-black/5 py-4 backdrop-blur-md'
          : 'bg-transparent py-6'
      )}
    >
      <Container className="px-4 md:px-6">
        <div className="relative flex h-full w-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'flex-shrink-0 text-2xl font-bold tracking-tighter transition-colors',
              logoColor
            )}
          >
            EDG
          </Link>

          {/* Desktop Nav - Increased breakpoint to xl for more space */}
          <nav className="hidden items-center gap-6 xl:flex">
            {/* Core Product Links */}
            {coreProducts.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className={cn(
                  'text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-edg-brand',
                  textColor
                )}
              >
                {product.label}
              </Link>
            ))}

            {/* Complete Your Space Dropdown */}
            <div className="relative" ref={systemsDropdownRef}>
              <button
                onClick={() => {
                  setSystemsOpen(!systemsOpen);
                  setAreasOpen(false);
                }}
                className={cn(
                  'flex items-center gap-1 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-edg-brand',
                  textColor
                )}
                aria-label="Complete your outdoor space"
                aria-expanded={systemsOpen}
              >
                Complete Space
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    systemsOpen && 'rotate-180'
                  )}
                />
              </button>

              {systemsOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-72 overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  {completeYourSpace.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSystemsOpen(false)}
                      className="group block px-5 py-3 transition-colors hover:bg-black hover:text-white"
                    >
                      <div className="group-hover:text-edg-brand text-sm font-bold uppercase tracking-wide text-black transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-300 mt-1">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative" ref={areasDropdownRef}>
              <button
                onClick={() => {
                  setAreasOpen(!areasOpen);
                  setSystemsOpen(false);
                }}
                className={cn(
                  'flex items-center gap-1 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-edg-brand',
                  textColor
                )}
                aria-label="View service areas"
                aria-expanded={areasOpen}
              >
                Areas
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    areasOpen && 'rotate-180'
                  )}
                />
              </button>

              {areasOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-80 overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  <Link
                    href="/service-areas"
                    onClick={() => setAreasOpen(false)}
                    className="group block border-b border-black/5 px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold uppercase tracking-wide text-black transition-colors">
                      All Service Areas
                    </div>
                  </Link>
                  <div className="max-h-[60vh] overflow-y-auto">
                    {areasDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setAreasOpen(false)}
                        className="group block px-5 py-3 transition-colors hover:bg-black hover:text-white"
                      >
                        <div className="group-hover:text-edg-brand text-sm font-bold uppercase tracking-wide text-black transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-300 mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className={cn(
                'text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-edg-brand',
                textColor
              )}
            >
              Gallery
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Desktop CTAs */}
            <div className="hidden items-center gap-4 xl:flex">
              <Link
                href="/trade-partners"
                className={cn(
                  'text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-edg-brand',
                  textColor
                )}
              >
                Trade
              </Link>
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
                  variant={scrolled ? 'primary' : 'outline'}
                  size="sm"
                  className={cn(
                    !scrolled && "border-white text-white hover:bg-white hover:text-black"
                  )}
                >
                  Start Project
                </Button>
              </Link>
            </div>

            {/* Mobile: Phone + Menu Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href="tel:+18155810138"
                onClick={() =>
                  (window as any).dataLayer?.push({
                    event: 'conversion_event',
                    conversion_name: 'phone_click',
                    value: 0,
                  })
                }
                className={cn("p-2 transition-colors", textColor)}
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                className={cn("p-2", textColor)}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="animate-in slide-in-from-top-2 absolute top-full right-0 left-0 flex h-screen flex-col overflow-y-auto bg-black p-6 text-white xl:hidden">
            <div className="flex flex-col gap-8 pt-10">
              {/* Core Products Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Systems
                </div>
                {coreProducts.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-2xl font-bold text-white transition-colors hover:text-edg-brand"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10" />

              {/* Complete Your Space Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Complete Your Space
                </div>
                {completeYourSpace.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-4">
                <Link
                  href="/gallery"
                  className="block text-lg font-bold text-white transition-colors hover:text-edg-brand"
                  onClick={() => setIsOpen(false)}
                >
                  View Gallery
                </Link>
                <Link
                  href="/trade-partners"
                  className="block text-lg font-bold text-white transition-colors hover:text-edg-brand"
                  onClick={() => setIsOpen(false)}
                >
                  For Trade Partners
                </Link>
                <Link
                  href="/service-areas"
                  className="block text-lg font-bold text-white transition-colors hover:text-edg-brand"
                  onClick={() => setIsOpen(false)}
                >
                  Service Areas
                </Link>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => {
                    setIsOpen(false);
                    (window as any).dataLayer?.push({
                      event: 'conversion_event',
                      conversion_name: 'book_call_click',
                      value: 0,
                    });
                  }}
                >
                  <Button className="bg-edg-brand text-edg-dark hover:bg-white w-full py-6 text-lg font-bold uppercase">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
