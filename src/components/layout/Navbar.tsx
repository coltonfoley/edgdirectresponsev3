'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { buttonClassName } from '@/components/ui/Button';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import { primaryNavLinks, productsNavLinks } from '@/lib/site-routes';
import { cn } from '@/lib/utils';

const milwaukeeClusterRoutes = [
  '/service-areas/milwaukee-wi',
  '/service-areas/milwaukee-wi/motorized-pergolas',
  '/service-areas/milwaukee-wi/zoning-guide',
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const productsMenuId = 'site-products-menu';
  const mobileMenuId = 'site-mobile-menu';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen && !productsOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      if (productsOpen) {
        setProductsOpen(false);
        window.requestAnimationFrame(() => productsButtonRef.current?.focus());
      }

      if (isOpen) {
        setIsOpen(false);
        window.requestAnimationFrame(() =>
          mobileMenuButtonRef.current?.focus()
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, productsOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => mobileMenuRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (pathname?.startsWith('/admin')) return null;

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
  const isMilwaukeePage = milwaukeeClusterRoutes.some((route) =>
    pathname?.startsWith(route)
  );
  const quoteHref = isSouthwestFloridaPage
    ? buildContactHref({
        type: 'quote',
        product: 'shades',
        area: 'southwest-florida',
        source: 'nav_florida',
      })
    : isSanibelPage
      ? buildContactHref({
          type: 'quote',
          product: 'shades',
          area: 'sanibel',
          source: 'nav_sanibel',
        })
      : isMilwaukeePage
        ? buildContactHref({
            type: 'quote',
            product: 'pergola',
            location: 'Milwaukee, WI',
            source: 'nav_milwaukee',
          })
        : buildContactHref({ type: 'quote', source: 'nav' });

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
          <Link
            href="/"
            className={cn(
              'flex-shrink-0 text-2xl font-bold tracking-tighter transition-colors',
              logoColor
            )}
          >
            EDG
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            <div className="relative" ref={productsDropdownRef}>
              <button
                ref={productsButtonRef}
                type="button"
                onClick={() => setProductsOpen((open) => !open)}
                className={cn(
                  'hover:text-edg-brand flex items-center gap-1 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                  textColor
                )}
                aria-expanded={productsOpen}
                aria-controls={productsMenuId}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'h-4 w-4 transition-transform',
                    productsOpen && 'rotate-180'
                  )}
                />
              </button>

              {productsOpen && (
                <div
                  id={productsMenuId}
                  className="animate-in fade-in zoom-in-95 absolute top-full left-0 mt-3 w-72 overflow-hidden border border-black/10 bg-white shadow-2xl"
                >
                  {productsNavLinks.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setProductsOpen(false)}
                      className="group block px-5 py-4 transition-colors hover:bg-black hover:text-white"
                    >
                      <div className="group-hover:text-edg-brand text-sm font-bold tracking-wide text-black uppercase transition-colors">
                        {route.navLabel ?? route.label}
                      </div>
                      {route.desc ? (
                        <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-300">
                          {route.desc}
                        </div>
                      ) : null}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {primaryNavLinks.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                aria-current={pathname === route.href ? 'page' : undefined}
                className={cn(
                  'hover:text-edg-brand text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors',
                  textColor
                )}
              >
                {route.navLabel ?? route.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center xl:flex">
              <TrackedLink
                href={quoteHref}
                conversionName="quote_cta_click"
                className={buttonClassName({
                  variant: solidNav ? 'primary' : 'outline',
                  size: 'sm',
                  className: cn(
                    !solidNav &&
                      'border-white text-white hover:bg-white hover:text-black'
                  ),
                })}
              >
                Request a Quote
              </TrackedLink>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <TrackedPhoneLink
                href="tel:+18155810138"
                className={cn('p-2 transition-colors', textColor)}
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </TrackedPhoneLink>
              <button
                ref={mobileMenuButtonRef}
                type="button"
                className={cn('p-2', textColor)}
                onClick={() => {
                  setIsOpen((open) => !open);
                  setProductsOpen(false);
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

        {isOpen && (
          <nav
            id={mobileMenuId}
            ref={mobileMenuRef}
            tabIndex={-1}
            aria-label="Mobile navigation"
            className="animate-in slide-in-from-top-2 absolute top-full right-0 left-0 flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-black p-6 text-white xl:hidden"
          >
            <div className="flex flex-col gap-8 pt-8">
              <div className="space-y-4">
                <div className="text-edg-brand text-xs font-bold tracking-[0.2em] uppercase">
                  Products
                </div>
                {productsNavLinks.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.navLabel ?? route.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-5">
                {primaryNavLinks.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    aria-current={pathname === route.href ? 'page' : undefined}
                    className="hover:text-edg-brand block text-2xl font-bold text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.navLabel ?? route.label}
                  </Link>
                ))}
              </div>

              <TrackedLink
                href={quoteHref}
                conversionName="quote_cta_click"
                className={buttonClassName({
                  className:
                    'bg-edg-brand text-edg-dark mt-4 w-full py-6 text-lg font-bold uppercase hover:bg-white',
                })}
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </TrackedLink>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
