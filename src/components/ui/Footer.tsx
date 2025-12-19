"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { MapPin, Phone, Mail, ArrowRight, BookOpen } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-edg-dark border-t border-white/5">
            {/* Lead Capture Section */}
            <div className="relative border-b border-white/5 py-20 lg:py-24 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(66,255,193,0.06),transparent_70%)] pointer-events-none" />
                
                <Container className="relative">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
                        {/* Guide offer */}
                        <div className="flex flex-col justify-between py-2 lg:pr-16 space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-edg-brand uppercase">
                                    <div className="p-1 rounded bg-edg-brand/10">
                                        <BookOpen className="h-3.5 w-3.5" />
                                    </div>
                                    Free Planning Guide
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                                    Plan your outdoor space <br className="hidden md:block" />
                                    <span className="text-white/80 font-medium italic">with confidence.</span>
                                </h3>
                                <p className="text-base text-gray-400 max-w-md leading-relaxed">
                                    Get our free guide: budget ranges, system comparisons, and the mistakes to avoid.
                                </p>
                            </div>
                            <LeadCaptureForm 
                                source="footer"
                                ctaText="Send Me the Guide"
                                variant="compact"
                                className="w-full"
                            />
                        </div>

                        {/* Ready to talk */}
                        <div className="flex flex-col justify-between py-2 lg:pl-16 lg:border-l lg:border-white/10 space-y-8">
                            <div className="space-y-4">
                                <div className="h-[22px] hidden lg:block" /> {/* Alignment Spacer to match left side badge */}
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                                    Ready to start <br className="hidden md:block" />
                                    your project?
                                </h3>
                                <p className="text-base text-gray-400 max-w-md leading-relaxed">
                                    Talk to our team about your outdoor living goals. No pressure, just helpful guidance.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact" className="group">
                                        <Button size="lg" className="rounded-xl px-8 shadow-lg shadow-edg-brand/5 group-hover:shadow-edg-brand/10 transition-all whitespace-nowrap">
                                            Book a Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <a 
                                        href="tel:+18475551234" 
                                        className="inline-flex items-center justify-center gap-3 h-12 px-6 rounded-xl border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all font-medium backdrop-blur-sm whitespace-nowrap"
                                    >
                                        <Phone className="h-5 w-5 text-edg-brand" />
                                        (847) 555-1234
                                    </a>
                                </div>
                                
                                <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                    <div className="h-1.5 w-1.5 rounded-full bg-edg-brand animate-pulse" />
                                    Mon–Fri, 8am–5pm CT • Response within 1 business day
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Footer */}
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {/* Brand & Location */}
                        <div className="md:col-span-2">
                            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                                EDG
                            </Link>
                            <p className="text-gray-400 mb-6 max-w-sm">
                                Premium motorized pergolas, exterior shades, and glass enclosures for the Chicago/Milwaukee region.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 text-gray-400">
                                    <MapPin className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-medium">Spring Grove Showroom</div>
                                        <div>Spring Grove, IL 60081</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Phone className="h-5 w-5 text-edg-brand shrink-0" />
                                    <a href="tel:+18475551234" className="hover:text-edg-brand transition-colors">
                                        (847) 555-1234
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Mail className="h-5 w-5 text-edg-brand shrink-0" />
                                    <a href="mailto:info@edgpatioshade.com" className="hover:text-edg-brand transition-colors">
                                        info@edgpatioshade.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/guide" className="text-gray-400 hover:text-edg-brand transition-colors">
                                        Free Planning Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-gray-400 hover:text-edg-brand transition-colors">
                                        Our Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/design" className="text-gray-400 hover:text-edg-brand transition-colors">
                                        Design Consultation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/price" className="text-gray-400 hover:text-edg-brand transition-colors">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pro" className="text-gray-400 hover:text-edg-brand transition-colors">
                                        For Professionals
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/commercial" className="text-gray-400 hover:text-edg-brand transition-colors">
                                        Commercial
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-400 hover:text-edg-brand transition-colors">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Service Area */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Service Area</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>Lake County, IL</li>
                                <li>McHenry County, IL</li>
                                <li>Cook County (North), IL</li>
                                <li>Kenosha County, WI</li>
                                <li>Racine County, WI</li>
                                <li>Milwaukee County, WI</li>
                            </ul>
                            <p className="text-xs text-gray-400 mt-4">
                                Design & supply available nationwide
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} EDG Outdoor Living. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-400">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
