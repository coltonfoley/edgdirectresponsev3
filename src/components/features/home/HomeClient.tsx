'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight, Check } from 'lucide-react';
import { HeroFormClient } from '@/components/features/home/HeroFormClient';
import { ReviewsSection } from '@/components/features/ReviewsSection';
import * as images from '@/lib/images';

export function HomeClient() {
    return (
        <main className="flex min-h-screen flex-col bg-white selection:bg-edg-brand selection:text-black">
            {/* ========== HERO SECTION ========== */}
            <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24">
                {/* Background Visuals */}
                <div className="absolute inset-0 z-0 bg-black">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={images.brand.hero.pergola}
                        className="h-full w-full object-cover opacity-60"
                    >
                        <source
                            src={images.pages.home.heroVideo}
                            type="video/mp4"
                        />
                    </video>
                    {/* subtle gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                </div>

                <Container className="relative z-10 w-full">
                    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                        {/* Left: Headline & Copy */}
                        <div className="flex flex-col justify-center text-white lg:col-span-7">
                            <FadeIn>
                                <h1 className="hero-title mb-6 text-white">
                                    Motorized <br />
                                    <span className="text-edg-brand">Pergolas & Screens</span>
                                </h1>

                                <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl font-medium">
                                    We are the design and supply partner for professionals nationwide, and the full-service installer for homeowners from Chicago to Milwaukee.
                                </p>

                                <div className="flex flex-wrap items-center gap-6">
                                    <div className="label-editorial flex items-center gap-2 text-white">
                                        <div className="h-1 w-1 bg-edg-brand"></div>
                                        System Agnostic
                                    </div>
                                    <div className="label-editorial flex items-center gap-2 text-white">
                                        <div className="h-1 w-1 bg-edg-brand"></div>
                                        Engineering Support
                                    </div>
                                    <div className="label-editorial flex items-center gap-2 text-white">
                                        <div className="h-1 w-1 bg-edg-brand"></div>
                                        Showroom in Spring Grove
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right: Conversion Form (Client Component) */}
                        <div className="flex flex-col justify-center lg:col-span-5 lg:pl-8">
                            <FadeIn delay={0.2}>
                                <HeroFormClient />
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========== STATEMENT BAR ========== */}
            <section className="bg-black py-8 border-t border-white/10">
                <Container>
                    <div className="flex flex-wrap justify-between items-center gap-8 text-white/60 text-sm font-medium uppercase tracking-widest">
                        <span>Specialty Outdoor Systems</span>
                        <span className="hidden md:inline">•</span>
                        <span>Design & Supply</span>
                        <span className="hidden md:inline">•</span>
                        <span>Installation</span>
                        <span className="hidden md:inline">•</span>
                        <span>Established Partner</span>
                    </div>
                </Container>
            </section>

            {/* ========== DIRECTORIES: RESIDENTIAL VS TRADE ========== */}
            <Section className="bg-white py-0">
                <div className="grid md:grid-cols-2">
                    {/* Trade / Pro Side */}
                    <Link href="/trade-partners" className="group relative block min-h-[40vh] md:min-h-[60vh] overflow-hidden bg-black">
                        {/* Background Image using next/Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={images.brand.hero.pergola}
                                alt="Motorized pergola installation"
                                fill
                                className="object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:grayscale-0"
                                sizes="50vw"
                                priority
                                quality={80}
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="relative h-full flex flex-col justify-center p-12 md:p-20 z-10">
                            <div className="mb-4 inline-block border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                                For B2B
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trade Partners</h2>
                            <p className="text-gray-300 max-w-sm mb-8 text-lg">
                                Custom home builders, architects, and landscape pros. We handle the system spec, engineering, and supply.
                            </p>
                            <div className="flex items-center text-white font-bold uppercase tracking-wider text-sm group-hover:text-edg-brand transition-colors">
                                Partner Program <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </Link>

                    {/* Residential Side */}
                    <Link href="/contact?type=homeowner" className="group relative block min-h-[40vh] md:min-h-[60vh] overflow-hidden bg-zinc-900 border-t md:border-t-0 md:border-l border-white/10">
                        {/* Background Image using next/Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={images.brand.hero.screens}
                                alt="Motorized retractable screens on patio"
                                fill
                                className="object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-40"
                                sizes="50vw"
                                priority
                                quality={80}
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="relative h-full flex flex-col justify-center p-12 md:p-20 z-10">
                            <div className="mb-4 inline-block border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                                For Homeowners
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Residential Design</h2>
                            <p className="text-gray-300 max-w-sm mb-8 text-lg">
                                Upgrade your home with the definitive motorized systems. Full-service planning and installation.
                            </p>
                            <div className="flex items-center text-white font-bold uppercase tracking-wider text-sm group-hover:text-edg-brand transition-colors">
                                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </Link>
                </div>
            </Section>

            {/* ========== SYSTEMS SHOWCASE ========== */}
            <Section className="py-24 md:py-32">
                <Container>
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
                            Engineered for <br /> the elements.
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            We don&apos;t sell &quot;kits&quot;. We design and specify architectural-grade systems built to withstand high winds, snow loads, and years of use.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* System 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                <Image
                                    src={images.brand.hero.pergola}
                                    alt="Motorized louvered pergola"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div>
                                <div className="label-editorial-brand mb-4">Core Product</div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">Motorized Louvered Pergolas</h3>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    Control sun, shade, and rain with the touch of a button. Our systems are extruded aluminum, powder-coated, and engineered for our Midwest climate.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                                        <span className="text-text-primary font-medium">Integrated Drainage Systems</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                                        <span className="text-text-primary font-medium">Smart Home & App Control</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                                        <span className="text-text-primary font-medium">Heaters & LED Lighting Integrated</span>
                                    </li>
                                </ul>
                                <Link href="/systems/pergolas">
                                    <Button variant="secondary" className="px-8 py-3">
                                        Explore Pergolas
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* System 2 - Reversed */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="md:order-2 relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                <Image
                                    src={images.brand.hero.screens}
                                    alt="Motorized retractable screens"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="md:order-1">
                                <div className="label-editorial-brand mb-4">Core Product</div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">Retractable Screens</h3>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    MagnaTrack technology ensures your screens never get stuck or blown out of their tracks. Block 95% of wind, bugs, and UV rays without losing your view.
                                </p>
                                <Link href="/systems/shades">
                                    <Button variant="secondary" className="px-8 py-3">
                                        Explore Screens
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== WHY US (Editorial Style) ========== */}
            <Section className="bg-surface-muted py-24 md:py-32 border-t border-black/5">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5">
                            <h2 className="text-4xl font-bold tracking-tighter mb-8 max-w-sm">
                                We are not a &quot;Jack of all trades.&quot;
                            </h2>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                Most exterior companies do decks, pavers, pools, and &quot;oh yeah, we can do a pergola.&quot;
                            </p>
                            <p className="text-lg text-text-secondary border-l-2 border-edg-brand pl-6 italic">
                                &quot;EDG is different. We specialize exclusively in motorized architectural systems. It&apos;s all we do.&quot;
                            </p>
                        </div>
                        <div className="lg:col-span-1 hidden lg:block"></div>
                        <div className="lg:col-span-6 space-y-12">
                            <div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">System-Agnostic</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    We aren&apos;t locked into one manufacturer. We carry multiple lines so we can recommend the exact system that fits your aesthetic and budget requirements.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">In-House Expertise</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    From our design consultants to our installation leads, our team is trained specifically on complex motorized systems. We don&apos;t sub out the critical work.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">The Showroom</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Don&apos;t buy from a brochure. Visit our Spring Grove facility to see, touch, and operate full-size display units before you decide.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== FEATURED PROJECTS ========== */}
            <Section className="bg-zinc-50 py-24 dark:bg-zinc-950">
                <Container>
                    <div className="mb-16 text-center">
                        <span className="text-edg-brand-dark mb-4 inline-block text-sm font-bold tracking-[0.2em] uppercase">
                            Our Work
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
                            24 Outdoor Transformations
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-zinc-300">
                            From Northbrook estates to Chicago rooftops, see how we help homeowners 
                            and businesses create outdoor spaces they use year-round.
                        </p>
                    </div>

                    {/* Featured Project Cards */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Project 1: Karp - Northbrook */}
                        <Link href="/projects/karp" className="group block overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl dark:bg-zinc-900">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={images.projects.northbrookFamily.hero}
                                    alt="Karp - Northbrook"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase">
                                        Residential
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center gap-1 text-sm text-gray-500">
                                    <span className="text-edg-brand-dark">Northbrook, IL</span>
                                </div>
                                <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand transition-colors">
                                    Karp
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-zinc-300 line-clamp-2">
                                    Multi Bay System with Wood Grain Panels and Privacy Wall
                                </p>
                            </div>
                        </Link>

                        {/* Project 2: Carmine's - Chicago */}
                        <Link href="/projects/carmines" className="group block overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl dark:bg-zinc-900">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={images.projects.carmines.hero}
                                    alt="Carmine's - Chicago"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-edg-brand text-black px-3 py-1 text-xs font-bold uppercase">
                                        Commercial
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center gap-1 text-sm text-gray-500">
                                    <span className="text-edg-brand-dark">Chicago, IL</span>
                                </div>
                                <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand transition-colors">
                                    Carmine's
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-zinc-300 line-clamp-2">
                                    Multi-Bay commercial system to increase outdoor seating on Rush Street
                                </p>
                            </div>
                        </Link>

                        {/* Project 3: Wade - Barrington */}
                        <Link href="/projects/wade" className="group block overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl dark:bg-zinc-900">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={images.projects.wade.hero}
                                    alt="Wade - Barrington"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase">
                                        Residential
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center gap-1 text-sm text-gray-500">
                                    <span className="text-edg-brand-dark">Barrington, IL</span>
                                </div>
                                <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand transition-colors">
                                    Wade
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-zinc-300 line-clamp-2">
                                    Outdoor room with fully retractable louvers and motorized glass
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* View All CTA */}
                    <div className="mt-16 text-center">
                        <Link href="/projects">
                            <Button size="lg" variant="outline" className="min-w-[200px]">
                                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* ========== GOOGLE REVIEWS ========== */}
            <ReviewsSection />
        </main>
    );
}
