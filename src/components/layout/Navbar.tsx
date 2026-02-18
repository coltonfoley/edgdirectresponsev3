'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSiteConfig } from '@/hooks/useSanityData';

// @ts-ignore
export function Navbar({ config }: { config: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const systemsDropdownRef = useRef<HTMLDivElement>(null);
  const areasDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (config) {
      console.log('Sanity Site Config Loaded:', config);
    }
  }, [config]);

  if (pathname?.startsWith('/admin') || pathname?.startsWith('/studio')) return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const phone = config?.companyInfo?.phone || '(815) 581-0138';
  const phoneRaw = config?.companyInfo?.phoneRaw || '+18155810138';
  
  // Fallback navigation data if Sanity CMS is not populated
  const systemsDropdown = config?.navigation?.systemsDropdown || [
    { label: 'Louvered Pergolas', href: '/systems/pergolas', description: 'Motorized aluminum louvers for sun and rain control' },
    { label: 'Motorized Shades', href: '/systems/shades', description: 'Wind-rated exterior screens for heat and glare protection' },
    { label: 'Glass Enclosures', href: '/systems/enclosures', description: 'Frameless glass walls for year-round outdoor living' },
    { label: 'Outdoor Appliances', href: '/systems/appliances', description: 'Heaters, lighting, audio and outdoor kitchen equipment' },
  ];
  
  const areasDropdown = config?.navigation?.areasDropdown || [
    { label: 'Lake County, IL', href: '/service-areas/lake-county-il', description: 'Local installations throughout Lake County' },
    { label: 'McHenry County, IL', href: '/service-areas/mchenry-county-il', description: 'Serving McHenry and surrounding areas' },
    { label: 'Naperville, IL', href: '/service-areas/naperville-il', description: 'DuPage County installations and design' },
    { label: 'Lake Geneva, WI', href: '/service-areas/lake-geneva-wi', description: 'Wisconsin lake country specialists' },
    { label: 'Southeast Wisconsin', href: '/service-areas/southeast-wisconsin', description: 'Kenosha, Racine, and Milwaukee corridor' },
    { label: 'Chicago North Shore', href: '/service-areas/north-shore-chicago', description: 'Winnetka, Wilmette, Highland Park area' },
    { label: 'All Service Areas', href: '/service-areas', description: 'View all locations we serve' },
  ];
  
  const mainLinks = config?.navigation?.mainLinks || [
    { label: 'Gallery', href: '/gallery' },
    { label: 'Guides', href: '/guides' },
    { label: 'Design', href: '/design' },
    { label: 'Pricing', href: '/price' },
    { label: 'For Pros', href: '/pro' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-edg-gray/10 border-b bg-white/90 py-4 backdrop-blur-md dark:bg-black/90'
          : 'bg-transparent py-6'
      )}
    >
      {!scrolled && (
        <div className="mb-2 hidden border-b border-white/5 pb-2 lg:block">
          <Container>
            <p className="text-edg-brand text-center text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">
              {pathname?.includes('sanibel')
                ? 'Supply. Design. Install.'
                : 'Serving North Chicago to Milwaukee'}
            </p>
          </Container>
        </div>
      )}
      <Container className="px-6">
        <div className="relative flex h-full w-full items-center">
          <Link
            href="/"
            className="flex-shrink-0 text-2xl font-bold tracking-tighter"
          >
            EDG
          </Link>

          {/* Desktop Nav */}
          <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex">
            {/* Systems Dropdown */}
            <div className="relative" ref={systemsDropdownRef}>
              <button
                onClick={() => {
                  setSystemsOpen(!systemsOpen);
                  setAreasOpen(false);
                }}
                className="text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand flex items-center gap-1 text-sm font-medium transition-colors"
                aria-label="View our outdoor living systems"
                aria-expanded={systemsOpen}
              >
                Systems
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    systemsOpen && 'rotate-180'
                  )}
                />
              </button>

              {systemsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 overflow-hidden rounded-xl border border-black/5 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-900">
                  {systemsDropdown.map((item: any) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSystemsOpen(false)}
                      className="block px-4 py-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                      <div className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand text-sm font-medium">
                        {item.label}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div className="relative" ref={areasDropdownRef}>
              <button
                onClick={() => {
                  setAreasOpen(!areasOpen);
                  setSystemsOpen(false);
                }}
                className="text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand flex items-center gap-1 text-sm font-medium transition-colors"
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
                <div className="absolute top-full left-0 mt-2 w-72 overflow-hidden rounded-xl border border-black/5 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-900">
                  <Link
                    href="/service-areas"
                    onClick={() => setAreasOpen(false)}
                    className="group block border-b border-black/5 px-4 py-3 transition-colors hover:bg-zinc-50 dark:border-white/5 dark:hover:bg-zinc-800"
                  >
                    <div className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand text-sm font-medium">
                      All Service Areas
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Chicago to Milwaukee corridor
                    </div>
                  </Link>
                  {areasDropdown.map((item: any) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setAreasOpen(false)}
                      className="group block px-4 py-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                      <div className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand text-sm font-medium">
                        {item.label}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.map((link: any) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            {/* Desktop CTAs */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${phoneRaw}`}
                onClick={() =>
                  (window as any).dataLayer?.push({
                    event: 'conversion_event',
                    conversion_name: 'phone_click',
                    value: 0,
                  })
                }
                className="text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand flex items-center gap-2 text-sm font-medium transition-colors"
                aria-label={`Call EDG Outdoor Living at ${phone}`}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">{phone}</span>
              </a>
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
                <Button size="sm">Book a Call</Button>
              </Link>
            </div>

            {/* Mobile: Phone + Menu Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={`tel:${phoneRaw}`}
                onClick={() =>
                  (window as any).dataLayer?.push({
                    event: 'conversion_event',
                    conversion_name: 'phone_click',
                    value: 0,
                  })
                }
                className="text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand p-2 transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                className="p-2"
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
          <div className="bg-background border-edg-gray/10 animate-in slide-in-from-top-2 absolute top-full right-0 left-0 flex max-h-[80vh] flex-col gap-2 overflow-y-auto border-b p-4 shadow-lg lg:hidden">
            <div className="bg-edg-brand/10 border-edg-brand/20 mx-4 mt-2 mb-2 rounded-none border p-2 text-center">
              <span className="text-edg-brand text-xs font-bold tracking-wider uppercase">
                Full-Service Installation within 60 Miles • Design & Supply
                Nationwide
              </span>
            </div>
            <div className="px-4 py-2">
              <div className="text-edg-gray-text dark:text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
                Our Systems
              </div>
              {systemsDropdown.map((item: any) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-edg-brand-text dark:hover:text-edg-brand block py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-edg-gray/10 my-2 border-t" />

            <div className="px-4 py-2">
              <div className="text-edg-gray-text dark:text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
                Service Areas
              </div>
              <Link
                href="/service-areas"
                className="hover:text-edg-brand-text dark:hover:text-edg-brand block py-2 text-sm font-bold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                All Areas →
              </Link>
              {areasDropdown.map((item: any) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-edg-brand-text dark:hover:text-edg-brand block py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-edg-gray/10 my-2 border-t" />

            {mainLinks.map((link: any) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-none px-4 py-2 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-edg-gray/10 mt-2 space-y-3 border-t pt-4">
              <a
                href={`tel:${phoneRaw}`}
                className="text-edg-brand-text dark:text-edg-brand flex items-center gap-3 px-4 py-2 font-bold"
                onClick={() => {
                  setIsOpen(false);
                  (window as any).dataLayer?.push({
                    event: 'conversion_event',
                    conversion_name: 'phone_click',
                    value: 0,
                  });
                }}
              >
                <Phone className="h-5 w-5" />
                {phone}
              </a>
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
                <Button className="w-full">Book a Consultation</Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
