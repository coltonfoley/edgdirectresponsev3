'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackConversion } from '@/lib/analytics';
import { buildContactHref } from '@/lib/contact-links';
import { commercialNavLinks } from '@/lib/site-routes';

type MenuLink = {
  href: string;
  label: string;
  desc: string;
};

// Products dropdown - all systems combined
const productsDropdown: MenuLink[] = [
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

const commercialDropdown: MenuLink[] = commercialNavLinks.map((route) => ({
  href: route.href,
  label: route.label,
  desc: route.desc ?? '',
}));

// Locations dropdown (renamed from Areas)
const locationsDropdown: MenuLink[] = [
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
    href: '/service-areas/north-shore-chicago',
    label: 'North Shore Chicago',
    desc: 'Lakefront homes and estate properties',
  },
  {
    href: '/service-areas/lake-forest-il',
    label: 'Lake Forest, IL',
    desc: 'Permit-aware North Shore pergolas',
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
    href: '/service-areas/lake-geneva-wi',
    label: 'Lake Geneva, WI',
    desc: 'Lakefront pergolas and screens',
  },
  {
    href: '/service-areas/southwest-florida',
    label: 'Southwest Florida',
    desc: 'Gulf Coast screens and pergolas',
  },
  {
    href: '/service-areas/sanibel-outdoor-living',
    label: 'Sanibel, FL',
    desc: 'Gulf Coast outdoor living',
  },
];

const localProductDropdown: MenuLink[] = [
  {
    href: '/service-areas/chicago-il/motorized-pergolas',
    label: 'Chicago Pergolas',
    desc: 'City rooftops, tight lots and permit-aware planning',
  },
  {
    href: '/service-areas/chicago-il/retractable-screens',
    label: 'Chicago Screens',
    desc: 'Outdoor shades for wind, privacy, insects and glare',
  },
  {
    href: '/service-areas/chicago-il/glass-enclosures',
    label: 'Chicago Glass Enclosures',
    desc: 'Flexible wind and rain comfort for urban patios',
  },
  {
    href: '/service-areas/lake-geneva-wi/motorized-pergolas',
    label: 'Lake Geneva Pergolas',
    desc: 'Waterfront shade, views and wind-aware structure',
  },
  {
    href: '/service-areas/lake-geneva-wi/retractable-screens',
    label: 'Lake Geneva Screens',
    desc: 'Bug, glare and privacy control for lake homes',
  },
  {
    href: '/service-areas/southwest-florida/motorized-screens',
    label: 'Southwest Florida Screens',
    desc: 'Coastal screen planning for Gulf Coast homes',
  },
  {
    href: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
    label: 'Sanibel Louvered Pergolas',
    desc: 'Open-air shade planning for island outdoor living',
  },
  {
    href: '/service-areas/sanibel-outdoor-living/zoning-guide',
    label: 'Sanibel Permit Guide',
    desc: 'Permit and review path for lanais and pergolas',
  },
];

const guidesDropdown: MenuLink[] = [
  {
    href: '/guides/motorized-pergola-planning',
    label: 'Pergola Planning Guide',
    desc: 'Cost, fit, drainage, controls, accessories and constraints',
  },
  {
    href: '/guides/pergola-system-fit-review',
    label: 'System Fit Review',
    desc: 'Share photos and goals so EDG can identify the likely path',
  },
  {
    href: '/guides/motorized-pergola-budget-examples',
    label: 'Budget Examples',
    desc: 'Realistic planning bands for premium outdoor living projects',
  },
  {
    href: '/guides/motorized-pergola-permits-hoa-engineering',
    label: 'Permits, HOA & Engineering',
    desc: 'How approvals, drawings and site details shape the project',
  },
  {
    href: '/guides/pergola-cost',
    label: 'Pergola Cost Guide',
    desc: 'What drives premium pergola pricing and project scope',
  },
  {
    href: '/guides/magnatrack-screens-cost',
    label: 'MagnaTrack Screens Cost',
    desc: 'Budget factors for motorized screens and shade retrofits',
  },
  {
    href: '/guides/louvered-pergola-brands-compared',
    label: 'Pergola System Comparison',
    desc: 'How EDG matches brand, site, budget and feature needs',
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const commercialDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);
  const workDropdownRef = useRef<HTMLDivElement>(null);
  const guidesDropdownRef = useRef<HTMLDivElement>(null);
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
        commercialDropdownRef.current &&
        !commercialDropdownRef.current.contains(event.target as Node)
      ) {
        setCommercialOpen(false);
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
      if (
        guidesDropdownRef.current &&
        !guidesDropdownRef.current.contains(event.target as Node)
      ) {
        setGuidesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hide navbar on admin pages
  if (pathname?.startsWith('/admin')) return null;

  // Contact starts with a split light/dark first viewport, so the transparent
  // white nav can disappear over the form side.
  const solidNav = scrolled || pathname === '/contact';
  const textColor = solidNav ? 'text-edg-dark' : 'text-white';
  const logoColor = solidNav ? 'text-edg-dark' : 'text-white';
  const isSouthwestFloridaPage = pathname?.startsWith(
    '/service-areas/southwest-florida'
  );
  const isSanibelPage = pathname?.startsWith(
    '/service-areas/sanibel-outdoor-living'
  );
  const startProjectHref = isSouthwestFloridaPage
    ? buildContactHref({
        type: 'price',
        product: 'shades',
        area: 'southwest-florida',
        source: 'nav_florida',
      })
    : isSanibelPage
      ? buildContactHref({
          type: 'price',
          product: 'shades',
          area: 'sanibel',
          source: 'nav_sanibel',
        })
      : buildContactHref({ type: 'fit-review', source: 'nav' });

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        solidNav
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
            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setCommercialOpen(false);
                  setLocationsOpen(false);
                  setWorkOpen(false);
                  setGuidesOpen(false);
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

            <Link
              href="/outdoor-rooms"
              className={cn(
                'hover:text-edg-brand text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                textColor
              )}
            >
              Outdoor Rooms
            </Link>

            {/* Locations Dropdown */}
            <div className="relative" ref={locationsDropdownRef}>
              <button
                onClick={() => {
                  setLocationsOpen(!locationsOpen);
                  setProductsOpen(false);
                  setCommercialOpen(false);
                  setWorkOpen(false);
                  setGuidesOpen(false);
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
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-[44rem] overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  <Link
                    href="/service-areas"
                    onClick={() => setLocationsOpen(false)}
                    className="group block border-b border-black/5 px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                      All Locations
                    </div>
                    <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                      View every service-area hub and local planning page
                    </div>
                  </Link>
                  <div className="grid max-h-[calc(100vh-12rem)] overflow-y-auto sm:grid-cols-2">
                    <div className="border-black/5 sm:border-r">
                      <div className="px-5 pt-4 pb-2 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                        Featured Areas
                      </div>
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
                    <div>
                      <div className="px-5 pt-4 pb-2 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                        Local Product Pages
                      </div>
                      {localProductDropdown.map((item) => (
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
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div className="relative" ref={workDropdownRef}>
              <button
                onClick={() => {
                  setWorkOpen(!workOpen);
                  setProductsOpen(false);
                  setCommercialOpen(false);
                  setLocationsOpen(false);
                  setGuidesOpen(false);
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
                  <Link
                    href="/showroom"
                    onClick={() => setWorkOpen(false)}
                    className="group block px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                      Showroom
                    </div>
                    <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                      Visit the Spring Grove showroom
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div className="relative" ref={guidesDropdownRef}>
              <button
                onClick={() => {
                  setGuidesOpen(!guidesOpen);
                  setProductsOpen(false);
                  setCommercialOpen(false);
                  setLocationsOpen(false);
                  setWorkOpen(false);
                }}
                className={cn(
                  'hover:text-edg-brand flex items-center gap-1 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                  textColor
                )}
                aria-label="View guides"
                aria-expanded={guidesOpen}
              >
                Guides
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    guidesOpen && 'rotate-180'
                  )}
                />
              </button>

              {guidesOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-80 overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  <Link
                    href="/guides"
                    onClick={() => setGuidesOpen(false)}
                    className="group block border-b border-black/5 px-5 py-3 transition-colors hover:bg-black hover:text-white"
                  >
                    <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                      All Guides
                    </div>
                    <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                      Browse the full outdoor living knowledge base
                    </div>
                  </Link>
                  <div className="max-h-[60vh] overflow-y-auto">
                    {guidesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setGuidesOpen(false)}
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
                </div>
              )}
            </div>

            {/* Commercial Dropdown */}
            <div className="relative" ref={commercialDropdownRef}>
              <button
                onClick={() => {
                  setCommercialOpen(!commercialOpen);
                  setProductsOpen(false);
                  setLocationsOpen(false);
                  setWorkOpen(false);
                  setGuidesOpen(false);
                }}
                className={cn(
                  'hover:text-edg-brand flex items-center gap-1 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                  textColor
                )}
                aria-label="View commercial pages"
                aria-expanded={commercialOpen}
              >
                Commercial
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    commercialOpen && 'rotate-180'
                  )}
                />
              </button>

              {commercialOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full right-0 mt-3 w-[34rem] overflow-hidden rounded-none border border-black/10 bg-white shadow-2xl">
                  <div className="grid max-h-[65vh] overflow-y-auto sm:grid-cols-2">
                    {commercialDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setCommercialOpen(false)}
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
                </div>
              )}
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Desktop CTAs */}
            <div className="hidden items-center gap-4 xl:flex">
              <Link
                href={startProjectHref}
                onClick={(event) =>
                  trackConversion({
                    conversionName: 'book_call_click',
                    linkUrl: event.currentTarget.href,
                    linkText: event.currentTarget.textContent?.trim(),
                  })
                }
              >
                <Button
                  variant={solidNav ? 'primary' : 'outline'}
                  size="sm"
                  className={cn(
                    !solidNav &&
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
                onClick={(event) =>
                  trackConversion({
                    conversionName: 'phone_click',
                    linkUrl: event.currentTarget.href,
                    linkText: event.currentTarget.textContent?.trim(),
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

              {/* Outdoor Rooms Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Outdoor Rooms
                </div>
                <Link
                  href="/outdoor-rooms"
                  className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Outdoor Rooms
                </Link>
                <Link
                  href="/outdoor-rooms/pergola-glass-outdoor-room"
                  className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Pergola + Glass Outdoor Room
                </Link>
              </div>

              <div className="h-px bg-white/10" />

              {/* Commercial Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Commercial
                </div>
                <Link
                  href="/commercial"
                  className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Commercial
                </Link>
                {commercialDropdown
                  .filter((item) => item.href !== '/commercial')
                  .map((item) => (
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

              {/* Locations Section */}
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Locations
                </div>
                {locationsDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="text-edg-brand/80 pt-2 text-xs font-bold tracking-[0.2em] uppercase">
                  Local Product Pages
                </div>
                {localProductDropdown.map((item) => (
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
                <Link
                  href="/showroom"
                  className="block text-lg font-medium text-gray-300 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Showroom
                </Link>
              </div>

              <div className="h-px bg-white/10" />

              {/* Guides */}
              <div className="space-y-4">
                <Link
                  href="/guides"
                  className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Guides
                </Link>
                {guidesDropdown.map((item) => (
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

              <div className="mt-8">
                <Link
                  href={startProjectHref}
                  onClick={(event) => {
                    setIsOpen(false);
                    trackConversion({
                      conversionName: 'book_call_click',
                      linkUrl: event.currentTarget.href,
                      linkText: event.currentTarget.textContent?.trim(),
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
