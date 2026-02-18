import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import * as images from '@/lib/images';

export const metadata: Metadata = {
    title: 'Visit Our Showroom | EDG Patio & Shade',
    description:
        'Experience our motorized pergolas and retractable screens in person at our Spring Grove, IL showroom. See the quality difference before you build.',
    openGraph: {
        title: 'EDG Patio & Shade Showroom | Spring Grove, IL',
        description:
            'Touch the materials, test the motors, and see the finishes. Visit the only dedicated outdoor living showroom in the region.',
    },
    alternates: {
        canonical: '/showroom',
    },
};

export default function ShowroomPage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <Section className="bg-zinc-900 pt-32 pb-20 text-white">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-edg-brand mb-4 text-sm font-semibold tracking-wider uppercase">
                                The EDG Difference
                            </p>
                            <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
                                See it before <br />
                                <span className="text-gray-400">you build it.</span>
                            </h1>
                            <p className="text-gray-300 mb-8 max-w-lg text-xl leading-relaxed">
                                Most outdoor living companies sell from a catalog. We invite you
                                to experience the quality, finish, and operation of our systems
                                firsthand at our Spring Grove showroom.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/contact?type=showroom"
                                    className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 inline-flex h-12 items-center justify-center rounded-md px-8 text-lg font-medium transition-colors"
                                >
                                    Schedule a Visit
                                </Link>
                                <Link
                                    href="https://maps.google.com/?q=EDG+Patio+and+Shade+Spring+Grove+IL"
                                    className="border-white/20 hover:bg-white/10 inline-flex h-12 items-center justify-center rounded-md border bg-transparent px-8 text-lg font-medium text-white transition-colors"
                                >
                                    Get Directions
                                </Link>
                            </div>
                        </div>
                        {/* Showroom Hero Image */}
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-800 border border-white/10">
                            <Image
                                src={images.brand.hero.showroom}
                                alt="EDG Patio & Shade showroom in Spring Grove, IL featuring motorized pergola and retractable screen displays"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Details Section */}
            <Section className="py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Location */}
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8">
                            <MapPin className="text-edg-brand mb-4 h-8 w-8" />
                            <h3 className="mb-2 text-xl font-bold">Location</h3>
                            <p className="text-muted-foreground mb-4">
                                7926 US-12
                                <br />
                                Spring Grove, IL 60081
                            </p>
                            <Link
                                href="https://maps.google.com/?q=EDG+Patio+and+Shade+Spring+Grove+IL"
                                className="text-edg-brand-text dark:text-edg-brand font-medium hover:underline"
                            >
                                Open in Maps →
                            </Link>
                        </div>

                        {/* Hours */}
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8">
                            <Clock className="text-edg-brand mb-4 h-8 w-8" />
                            <h3 className="mb-2 text-xl font-bold">Hours</h3>
                            <ul className="text-muted-foreground space-y-1">
                                <li className="flex justify-between">
                                    <span>Mon - Fri</span>
                                    <span>9:00 AM - 5:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>By Appointment</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8">
                            <Phone className="text-edg-brand mb-4 h-8 w-8" />
                            <h3 className="mb-2 text-xl font-bold">Contact</h3>
                            <p className="text-muted-foreground mb-4">
                                Call ahead to ensure a design specialist is available to walk
                                you through the displays.
                            </p>
                            <Link
                                href="tel:1-815-581-0138"
                                className="text-edg-brand-text dark:text-edg-brand text-lg font-bold hover:underline"
                            >
                                (815) 581-0138
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* What's on Display */}
            <Section className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
                <Container>
                    <div className="mb-12 max-w-2xl">
                        <h2 className="mb-4 text-3xl font-bold">What's on Display</h2>
                        <p className="text-muted-foreground text-lg">
                            Don't guess from a swatch. Come see full-size operating systems.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-background rounded-lg border p-6">
                            <h3 className="mb-2 font-bold">Louvered Pergolas</h3>
                            <p className="text-muted-foreground text-sm">Full-size demo unit with rotating louvers, integrated lighting, and heaters.</p>
                        </div>
                        <div className="bg-background rounded-lg border p-6">
                            <h3 className="mb-2 font-bold">Retractable Screens</h3>
                            <p className="text-muted-foreground text-sm">See the track systems, mesh options, and wind retention technology in action.</p>
                        </div>
                        <div className="bg-background rounded-lg border p-6">
                            <h3 className="mb-2 font-bold">Heating & Control</h3>
                            <p className="text-muted-foreground text-sm">Test the heat output of our infrared heaters and unified control systems.</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
