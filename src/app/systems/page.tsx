import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, CloudRain, Sun, Wind } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems | Pergolas, Shades & Enclosures',
  description:
    'Explore our premium outdoor living systems. Motorized pergolas, exterior shades, and glass enclosures designed for the Midwest climate.',
  alternates: {
    canonical: '/systems',
  },
};

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <Section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32">
        <Container>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our Systems
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
              Engineered for performance, designed for style. Choose the system
              that fits your lifestyle.
            </p>
          </div>
        </Container>
      </Section>

      {/* Systems Grid */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Pergolas */}
            <div className="group hover:border-edg-brand overflow-hidden rounded-2xl border border-black/10 transition-colors dark:border-white/10">
              <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/pergolas/residential-black-r-blade-01.jpg"
                  alt="Louvered pergola system"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold">Louvered Pergolas</h3>
                <p className="text-muted-foreground mb-6">
                  Motorized aluminum structures with rotating louvers for
                  complete climate control.
                </p>
                <Link href="/systems/pergolas">
                  <Button className="w-full">Explore Pergolas</Button>
                </Link>
              </div>
            </div>

            {/* Shades */}
            <div className="group hover:border-edg-brand overflow-hidden rounded-2xl border border-black/10 transition-colors dark:border-white/10">
              <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/shades/shade-deployed-screens-01.jpg"
                  alt="Motorized exterior shades"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold">Motorized Shades</h3>
                <p className="text-muted-foreground mb-6">
                  Wind-rated exterior screens that block heat and glare while
                  preserving your view.
                </p>
                <Link href="/systems/shades">
                  <Button className="w-full">Explore Shades</Button>
                </Link>
              </div>
            </div>

            {/* Enclosures */}
            <div className="group hover:border-edg-brand overflow-hidden rounded-2xl border border-black/10 transition-colors dark:border-white/10">
              <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/enclosures/glass-system-03.jpg"
                  alt="Glass enclosure system"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold">Glass Enclosures</h3>
                <p className="text-muted-foreground mb-6">
                  Frameless retractable glass walls that add weatherproof square
                  footage.
                </p>
                <Link href="/systems/enclosures">
                  <Button className="w-full">Explore Enclosures</Button>
                </Link>
              </div>
            </div>

            {/* Appliances */}
            <div className="group hover:border-edg-brand overflow-hidden rounded-2xl border border-black/10 transition-colors dark:border-white/10">
              <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/appliances/outdoor-kitchen-hero.png"
                  alt="Outdoor kitchen appliances"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold">Outdoor Appliances</h3>
                <p className="text-muted-foreground mb-6">
                  Premium grills, pizza ovens, and heaters for the ultimate
                  outdoor kitchen.
                </p>
                <Link href="/systems/appliances">
                  <Button className="w-full">Explore Appliances</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
