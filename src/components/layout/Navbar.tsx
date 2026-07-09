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
import {
  commercialNavLinks,
  guideNavLinks,
  localProductNavLinks,
  locationNavLinks,
  outdoorRoomNavLinks,
  productsNavLinks,
  workNavLinks,
} from '@/lib/site-routes';

type MenuLink = {
  href: string;
  label: string;
  desc: string;
};

const toMenuLinks = (
  routes: {
    href: string;
    label: string;
    desc?: string;
  }[]
): MenuLink[] =>
  routes.map((route) => ({
    href: route.href,
    label: route.label,
    desc: route.desc ?? '',
  }));

const productsDropdown = toMenuLinks(productsNavLinks);
const commercialDropdown = toMenuLinks(commercialNavLinks);
const locationsDropdown = toMenuLinks(locationNavLinks);
const localProductDropdown = toMenuLinks(localProductNavLinks);
const guidesDropdown = toMenuLinks(guideNavLinks);
const outdoorRoomDropdown = toMenuLinks(outdoorRoomNavLinks);
const workOrder = ['Projects', 'Gallery', 'Showroom'];
const workDropdown = toMenuLinks(workNavLinks).sort(
  (a, b) => workOrder.indexOf(a.label) - workOrder.indexOf(b.label)
);

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
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const mobileMenuId = 'site-mobile-menu';

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

  useEffect(() => {
    if (
      !isOpen &&
      !productsOpen &&
      !commercialOpen &&
      !locationsOpen &&
      !workOpen &&
      !guidesOpen
    ) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      setProductsOpen(false);
      setCommercialOpen(false);
      setLocationsOpen(false);
      setWorkOpen(false);
      setGuidesOpen(false);

      if (isOpen) {
        setIsOpen(false);
        window.requestAnimationFrame(() => mobileMenuButtonRef.current?.focus());
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [
    commercialOpen,
    guidesOpen,
    isOpen,
    locationsOpen,
    productsOpen,
    workOpen,
  ]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => mobileMenuRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Hide navbar on admin pages
  if (pathname?.startsWith('/admin')) return null;

  // Light first-view routes need the solid nav immediately so the transparent
  // white nav does not disappear over the page body.
  const solidNav =
    scrolled ||
    pathname === '/contact' ||
    pathname === '/privacy' ||
    pathname === '/terms' ||
    pathname === '/html-sitemap';
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
                  {workDropdown.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setWorkOpen(false)}
                      className={cn(
                        'group block px-5 py-3 transition-colors hover:bg-black hover:text-white',
                        index === 0 && 'border-b border-black/5'
                      )}
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
                ref={mobileMenuButtonRef}
                type="button"
                className={cn('p-2', textColor)}
                onClick={() => {
                  setIsOpen((open) => !open);
                  setProductsOpen(false);
                  setCommercialOpen(false);
                  setLocationsOpen(false);
                  setWorkOpen(false);
                  setGuidesOpen(false);
                }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls={mobileMenuId}
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
          <nav
            id={mobileMenuId}
            ref={mobileMenuRef}
            tabIndex={-1}
            aria-label="Mobile navigation"
            className="animate-in slide-in-from-top-2 absolute top-full right-0 left-0 flex h-screen flex-col overflow-y-auto bg-black p-6 text-white xl:hidden"
          >
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
                {outdoorRoomDropdown.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block transition-colors',
                      index === 0
                        ? 'hover:text-edg-brand text-2xl font-bold text-white'
                        : 'text-lg font-medium text-gray-300 hover:text-white'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
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
                {workDropdown.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block transition-colors',
                      index === 0
                        ? 'hover:text-edg-brand text-2xl font-bold text-white'
                        : 'text-lg font-medium text-gray-300 hover:text-white'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
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
          </nav>
        )}
      </Container>
    </header>
  );
}
