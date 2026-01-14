"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const systemsDropdown = [
    { href: "/systems/pergolas", label: "Louvered Pergolas", desc: "Motorized aluminum with rotating louvers" },
    { href: "/systems/shades", label: "Motorized Shades", desc: "Wind-rated exterior screens" },
    { href: "/systems/enclosures", label: "Glass Enclosures", desc: "Retractable glass wall systems" },
    { href: "/systems/appliances", label: "Outdoor Appliances", desc: "Grills, heaters & outdoor kitchens" },
];

const areasDropdown = [
    { href: "/service-areas/lake-county-il", label: "Lake County, IL", desc: "Libertyville, Lake Forest, Highland Park" },
    { href: "/service-areas/north-shore-chicago", label: "North Shore Chicago", desc: "Wilmette, Winnetka, Glencoe" },
    { href: "/service-areas/oak-brook-il", label: "Oak Brook & Hinsdale", desc: "Burr Ridge, Elmhurst, Western Springs" },
    { href: "/service-areas/barrington-il", label: "Barrington Area", desc: "North, South, and Lake Barrington" },
    { href: "/service-areas/naperville-il", label: "Naperville & West Suburbs", desc: "Downers Grove, Lisle, Aurora" },
    { href: "/service-areas/mchenry-county-il", label: "McHenry County, IL", desc: "Crystal Lake, Algonquin, Woodstock" },
    { href: "/service-areas/southeast-wisconsin", label: "Southeast Wisconsin", desc: "Lake Geneva, Kenosha, Racine" },
    { href: "/service-areas/lake-geneva-wi", label: "Lake Geneva, WI", desc: "Lake Geneva,  Fontana,  Williams Bay" },
    { href: "/service-areas/hinsdale-il", label: "Hinsdale", desc: "Southeast Hinsdale,  The Woodlands,  Fullersburg" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [systemsOpen, setSystemsOpen] = useState(false);
    const [areasOpen, setAreasOpen] = useState(false);
    const systemsDropdownRef = useRef<HTMLDivElement>(null);
    const areasDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (systemsDropdownRef.current && !systemsDropdownRef.current.contains(event.target as Node)) {
                setSystemsOpen(false);
            }
            if (areasDropdownRef.current && !areasDropdownRef.current.contains(event.target as Node)) {
                setAreasOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-edg-gray/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            {!scrolled && (
                <div className="hidden lg:block border-b border-white/5 pb-2 mb-2">
                    <Container>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-center text-edg-brand uppercase opacity-80">
                            Serving North Chicago to Milwaukee
                        </p>
                    </Container>
                </div>
            )}
            <Container className="px-6">
                <div className="flex items-center relative w-full h-full">
                    <Link href="/" className="text-2xl font-bold tracking-tighter flex-shrink-0">
                        EDG
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* Systems Dropdown */}
                        <div className="relative" ref={systemsDropdownRef}>
                            <button
                                onClick={() => { setSystemsOpen(!systemsOpen); setAreasOpen(false); }}
                                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                            >
                                Systems
                                <ChevronDown className={cn("h-4 w-4 transition-transform", systemsOpen && "rotate-180")} />
                            </button>

                            {systemsOpen && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-black/5 dark:border-white/10 overflow-hidden">
                                    {systemsDropdown.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setSystemsOpen(false)}
                                            className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                        >
                                            <div className="font-medium text-sm group-hover:text-edg-brand-text dark:group-hover:text-edg-brand">{item.label}</div>
                                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Areas Dropdown */}
                        <div className="relative" ref={areasDropdownRef}>
                            <button
                                onClick={() => { setAreasOpen(!areasOpen); setSystemsOpen(false); }}
                                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                            >
                                Areas
                                <ChevronDown className={cn("h-4 w-4 transition-transform", areasOpen && "rotate-180")} />
                            </button>

                            {areasOpen && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-black/5 dark:border-white/10 overflow-hidden">
                                    <Link
                                        href="/service-areas"
                                        onClick={() => setAreasOpen(false)}
                                        className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border-b border-black/5 dark:border-white/5 group"
                                    >
                                        <div className="font-medium text-sm group-hover:text-edg-brand-text dark:group-hover:text-edg-brand">All Service Areas</div>
                                        <div className="text-xs text-muted-foreground">Chicago to Milwaukee corridor</div>
                                    </Link>
                                    {areasDropdown.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setAreasOpen(false)}
                                            className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                                        >
                                            <div className="font-medium text-sm group-hover:text-edg-brand-text dark:group-hover:text-edg-brand">{item.label}</div>
                                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/gallery"
                            className="text-sm font-medium text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/design"
                            className="text-sm font-medium text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                        >
                            Design
                        </Link>
                        <Link
                            href="/price"
                            className="text-sm font-medium text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/pro"
                            className="text-sm font-medium text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                        >
                            For Pros
                        </Link>
                    </nav>

                    <div className="ml-auto flex items-center gap-4">
                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:+18155810138"
                                onClick={() => (window as any).dataLayer?.push({ event: 'conversion_event', conversion_name: 'phone_click', value: 0 })}
                                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="hidden xl:inline">(815) 581-0138</span>
                            </a>
                            <Link href="/contact" onClick={() => (window as any).dataLayer?.push({ event: 'conversion_event', conversion_name: 'book_call_click', value: 0 })}>
                                <Button size="sm">Book a Call</Button>
                            </Link>
                        </div>

                        {/* Mobile: Phone + Menu Toggle */}
                        <div className="flex items-center gap-3 lg:hidden">
                            <a
                                href="tel:+18155810138"
                                onClick={() => (window as any).dataLayer?.push({ event: 'conversion_event', conversion_name: 'phone_click', value: 0 })}
                                className="p-2 text-foreground/80 hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors"
                                aria-label="Call us"
                            >
                                <Phone className="h-5 w-5" />
                            </a>
                            <button
                                className="p-2"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border-b border-edg-gray/10 p-4 flex flex-col gap-2 lg:hidden shadow-lg animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
                        {/* Service Note (Mobile Only) */}
                        <div className="mx-4 mt-2 mb-2 p-2 bg-edg-brand/10 border border-edg-brand/20 rounded-md text-center">
                            <span className="text-xs font-bold text-edg-brand uppercase tracking-wider">
                                Full-Service Installation within 60 Miles • Design & Supply Nationwide
                            </span>
                        </div>
                        {/* Systems Section */}
                        <div className="px-4 py-2">
                            <div className="text-xs font-semibold text-edg-gray-text dark:text-muted-foreground uppercase tracking-wider mb-2">
                                Our Systems
                            </div>
                            {systemsDropdown.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-2 text-sm hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="border-t border-edg-gray/10 my-2" />

                        {/* Service Areas Section */}
                        <div className="px-4 py-2">
                            <div className="text-xs font-semibold text-edg-gray-text dark:text-muted-foreground uppercase tracking-wider mb-2">
                                Service Areas
                            </div>
                            <Link
                                href="/service-areas"
                                className="block py-2 text-sm hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                All Areas →
                            </Link>
                            {areasDropdown.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-2 text-sm hover:text-edg-brand-text dark:hover:text-edg-brand transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="border-t border-edg-gray/10 my-2" />

                        <Link
                            href="/gallery"
                            className="px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/design"
                            className="px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Design
                        </Link>
                        <Link
                            href="/price"
                            className="px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/pro"
                            className="px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            For Pros
                        </Link>

                        <div className="border-t border-edg-gray/10 pt-4 mt-2 space-y-3">
                            <a
                                href="tel:+18155810138"
                                className="flex items-center gap-3 px-4 py-2 text-edg-brand-text dark:text-edg-brand font-bold"
                                onClick={() => {
                                    setIsOpen(false);
                                    (window as any).dataLayer?.push({ event: 'conversion_event', conversion_name: 'phone_click', value: 0 });
                                }}
                            >
                                <Phone className="h-5 w-5" />
                                (815) 581-0138
                            </a>
                            <Link href="/contact" onClick={() => {
                                setIsOpen(false);
                                (window as any).dataLayer?.push({ event: 'conversion_event', conversion_name: 'book_call_click', value: 0 });
                            }}>
                                <Button className="w-full">Book a Consultation</Button>
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}
