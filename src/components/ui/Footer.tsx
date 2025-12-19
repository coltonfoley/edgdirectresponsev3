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
            <div className="border-b border-white/5 py-16">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Guide offer */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-edg-brand uppercase">
                                <BookOpen className="h-4 w-4" />
                                Free Planning Guide
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Plan your outdoor space with confidence.
                            </h3>
                            <p className="text-gray-400">
                                Get our free guide: budget ranges, system comparisons, and the mistakes to avoid.
                            </p>
                            <LeadCaptureForm 
                                source="footer"
                                ctaText="Send Me the Guide"
                                variant="compact"
                            />
                        </div>

                        {/* Ready to talk */}
                        <div className="lg:border-l lg:border-white/10 lg:pl-16 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Ready to start your project?
                            </h3>
                            <p className="text-gray-400">
                                Talk to our team about your outdoor living goals. No pressure, just helpful guidance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-lg w-full sm:w-auto">
                                        Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <a 
                                    href="tel:+18475551234" 
                                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors font-medium"
                                >
                                    <Phone className="h-5 w-5 text-edg-brand" />
                                    (847) 555-1234
                                </a>
                            </div>
                            <p className="text-xs text-gray-500">
                                Mon–Fri, 8am–5pm CT • Response within 1 business day
                            </p>
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
                            <p className="text-xs text-gray-500 mt-4">
                                Design & supply available nationwide
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} EDG Outdoor Living. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-gray-400 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
