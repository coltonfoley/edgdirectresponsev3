'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Products dropdown - all systems combined
const productsDropdown = [
  {
    href: '/systems/pergolas',
    label: 'Pergolas',
    desc: 'Motorized louvered roof systems',
  },
  {
    href: '/systems/shades',
    label: 'Screens',
    desc: 'Retractable exterior shades',
  },
  {
    href: '/systems/enclosures',
    label: 'Enclosures',
    desc: 'Glass wall systems',
  },
  {
    href: '/systems/appliances',
    label: 'Outdoor Kitchens',
    desc: 'Built-in grills & appliances',
  },
  {
    href: '/systems/saunas',
    label: 'Saunas',
    desc: 'Premium outdoor sauna systems',
  },
];

// Locations dropdown (renamed from Areas)
const locationsDropdown = [
  {
    href: '/service-areas/chicago-il',
    label: 'Chicago, IL',
    desc: 'City rooftops, patios, and tight lots',
  },
  {
    href: '/service-areas/spring-grove-il',
    label: 'Spring Grove, IL',
    desc: 'Showroom and local home base',
  },
  {
    href: '/service-areas/algonquin-il',
    label: 'Algonquin, IL',
    desc: 'Fox River Valley pergolas',
  },
  {
    href: '/service-areas/wilmette-il',
    label: 'Wilmette, IL',
    desc: 'North Shore historic districts',
  },
  {
    href: '/service-areas/winnetka-il',
    label: 'Winnetka, IL',
    desc: 'Estate properties & lakefront',
  },
  {
    href: '/service-areas/northbrook-il',
    label: 'Northbrook, IL',
    desc: 'Techny & Shermer Road corridor',
  },
  {
    href: '/service-areas/barrington-il',
    label: 'Barrington, IL',
    desc: 'Estate communities & horse country',
  },
  {
    href: '/service-areas/naperville-il',
    label: 'Naperville, IL',
    desc: 'Western suburban hub',
  },
  {
    href: '/service-areas/hinsdale-il',
    label: 'Hinsdale, IL',
    desc: 'Premier estate properties',
  },
  {
    href: '/service-areas/oak-brook-il',
    label: 'Oak Brook, IL',
    desc: 'Western suburbs',
  },
  {
    href: '/service-areas/lake-geneva-wi',
    label: 'Lake Geneva, WI',
    desc: 'Wisconsin lakefront estates',
  },
  {
    href: '/service-areas/southwest-florida',
    label: 'Southwest Florida',
    desc: 'Hurricane-rated Gulf Coast systems',
  },
  {
    href: '/service-areas/sanibel-outdoor-living',
    label: 'Sanibel, FL',
    desc: 'Gulf Coast outdoor living',
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);
  const workDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdowns when clicking outside
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
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
      if (
        locationsDropdownRef.current &&
        !locationsDropdownRef.current.contains(event.target as Node)
      ) {
        setLocationsOpen(false);
      }
      if (
        workDropdownRef.current &&
        !workDropdownRef.current.contains(event.target as Node)
      ) {
        setWorkOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hide navbar on admin pages
  if (pathname?.startsWith('/admin')) return null;

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
          <nav className="hidden items-center gap-8 xl:flex">
            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setLocationsOpen(false);
                  setWorkOpen(false);
                }}
                className={cn(
                  'hover:text-edg-brand flex items-center gap-1 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                  textColor
                )}
                aria-label="View products"
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    productsOpen && 'rotate-180'
                  )}
                />
              </button>

              {productsOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-72 overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  <Link
                    href="/systems"
                    onClick={() => setProductsOpen(false)}
                    className="group block border-b border-black/5 px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                      All Products
                    </div>
                    <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                      View complete product line
                    </div>
                  </Link>
                  <Link
                    href="/systems/pergolas/configure"
                    onClick={() => setProductsOpen(false)}
                    className="group border-edg-brand/20 bg-edg-brand/5 hover:bg-edg-brand/15 flex items-center justify-between border-b px-5 py-3 transition-colors"
                  >
                    <div>
                      <div className="text-edg-brand-dark text-sm font-bold tracking-wide uppercase transition-colors">
                        3D Pergola Configurator
                      </div>
                      <div className="text-edg-brand-dark/70 mt-0.5 text-xs">
                        Design your R-Blade in real-time 3D
                      </div>
                    </div>
                    <ArrowRight className="text-edg-brand-dark/50 h-4 w-4" />
                  </Link>
                  {productsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setProductsOpen(false)}
                      className="group block px-5 py-3 transition-colors hover:bg-black hover:text-white"
                    >
                      <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                        {item.label}
                      </div>
                      <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative" ref={locationsDropdownRef}>
              <button
                onClick={() => {
                  setLocationsOpen(!locationsOpen);
                  setProductsOpen(false);
                  setWorkOpen(false);
                }}
                className={cn(
                  'hover:text-edg-brand flex items-center gap-1 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                  textColor
                )}
                aria-label="View locations"
                aria-expanded={locationsOpen}
              >
                Locations
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    locationsOpen && 'rotate-180'
                  )}
                />
              </button>

              {locationsOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-80 overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  <Link
                    href="/service-areas"
                    onClick={() => setLocationsOpen(false)}
                    className="group block border-b border-black/5 px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                      All Locations
                    </div>
                  </Link>
                  <div className="max-h-[60vh] overflow-y-auto">
                    {locationsDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setLocationsOpen(false)}
                        className="group block px-5 py-3 transition-colors hover:bg-black hover:text-white"
                      >
                        <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                          {item.label}
                        </div>
                        <div className="mt-0.5 text-xs text-gray-500 group-hover:text-gray-300">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div className="relative" ref={workDropdownRef}>
              <button
                onClick={() => {
                  setWorkOpen(!workOpen);
                  setProductsOpen(false);
                  setLocationsOpen(false);
                }}
                className={cn(
                  'hover:text-edg-brand flex items-center gap-1 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                  textColor
                )}
                aria-label="View our work"
                aria-expanded={workOpen}
              >
                Our Work
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    workOpen && 'rotate-180'
                  )}
                />
              </button>

              {workOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-64 overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  <Link
                    href="/projects"
                    onClick={() => setWorkOpen(false)}
                    className="group block border-b border-black/5 px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                      Projects
                    </div>
                    <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                      Case studies & installations
                    </div>
                  </Link>
                  <Link
                    href="/gallery"
                    onClick={() => setWorkOpen(false)}
                    className="group block px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                      Gallery
                    </div>
                    <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                      Browse our portfolio
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Guides - Direct Link */}
            <Link
              href="/guides"
              className={cn(
                'hover:text-edg-brand text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                textColor
              )}
            >
              Guides
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Desktop CTAs */}
            <div className="hidden items-center gap-4 xl:flex">
              <Link
                href="/trade-partners"
                className={cn(
                  'hover:text-edg-brand text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
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
                    !scrolled &&
                      'border-white text-white hover:bg-white hover:text-black'
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
                className={cn('p-2 transition-colors', textColor)}
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                className={cn('p-2', textColor)}
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
              {/* Products Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Products
                </div>
                {productsDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/systems/pergolas/configure"
                  className="text-edg-brand hover:text-edg-brand/80 flex items-center gap-2 text-lg font-bold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  3D Pergola Configurator <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/systems"
                  className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  View All Products
                </Link>
              </div>

              <div className="h-px bg-white/10" />

              {/* Locations Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Locations
                </div>
                {locationsDropdown.slice(0, 5).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/service-areas"
                  className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  View All Locations
                </Link>
              </div>

              <div className="h-px bg-white/10" />

              {/* Our Work Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Our Work
                </div>
                <Link
                  href="/projects"
                  className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/gallery"
                  className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
              </div>

              <div className="h-px bg-white/10" />

              {/* Guides & Trade */}
              <div className="space-y-4">
                <Link
                  href="/guides"
                  className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Guides
                </Link>
                <Link
                  href="/trade-partners"
                  className="hover:text-edg-brand block text-lg font-bold text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  For Trade Partners
                </Link>
                <Link
                  href="/service-areas"
                  className="hover:text-edg-brand block text-lg font-bold text-white transition-colors"
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
                  <Button className="bg-edg-brand text-edg-dark w-full py-6 text-lg font-bold uppercase hover:bg-white">
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
