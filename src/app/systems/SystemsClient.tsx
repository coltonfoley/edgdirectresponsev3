'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  slug: string;
  category: string;
  tagline?: string;
  shortDescription?: string;
  heroImage?: string;
}

interface SystemsClientProps {
  products: Product[];
}

// Fallback images for each system (since hero images aren't in Sanity yet)
const fallbackImages: Record<string, string> = {
  pergolas: '/images/pergolas/residential-black-r-blade-01.jpg',
  shades: '/images/shades/shade-deployed-screens-01.jpg',
  enclosures: '/images/enclosures/glass-system-03.jpg',
  appliances: '/images/appliances/outdoor-kitchen-hero.png',
};

export default function SystemsClient({ products }: SystemsClientProps) {
  // Ensure we have products, use fallbacks if empty
  const displayProducts = products.length > 0 ? products : [
    {
      _id: '1',
      name: 'Louvered Pergolas',
      slug: 'pergolas',
      category: 'pergolas',
      shortDescription: 'Motorized aluminum structures with rotating louvers for complete climate control.',
    },
    {
      _id: '2',
      name: 'Motorized Shades',
      slug: 'shades',
      category: 'shades',
      shortDescription: 'Wind-rated exterior screens that block heat and glare while preserving your view.',
    },
    {
      _id: '3',
      name: 'Glass Enclosures',
      slug: 'enclosures',
      category: 'enclosures',
      shortDescription: 'Frameless retractable glass walls that add weatherproof square footage.',
    },
    {
      _id: '4',
      name: 'Outdoor Appliances',
      slug: 'appliances',
      category: 'appliances',
      shortDescription: 'Premium grills, pizza ovens, and heaters for the ultimate outdoor kitchen.',
    },
  ];

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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {displayProducts.map((product) => {
              const imageSrc = product.heroImage || fallbackImages[product.category] || fallbackImages[product.slug] || '/images/placeholder.jpg';
              
              return (
                <div 
                  key={product._id} 
                  className="group hover:border-edg-brand overflow-hidden rounded-2xl border border-black/10 transition-colors dark:border-white/10"
                >
                  <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-8">
                    {product.tagline && (
                      <span className="text-edg-brand mb-2 block text-xs font-bold tracking-wider uppercase">
                        {product.tagline}
                      </span>
                    )}
                    <h3 className="mb-3 text-2xl font-bold">{product.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      {product.shortDescription}
                    </p>
                    <Link href={`/systems/${product.slug}`}>
                      <Button className="w-full rounded-none">
                        Explore {product.name.split(' ').pop()} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
