'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  _id: string;
  name: string;
  slug: string;
  category: string;
  tagline?: string;
  shortDescription?: string;
  heroImage?: any;
}

interface SystemsClientProps {
  products: Product[];
}

export default function SystemsClient({ products }: SystemsClientProps) {
  // If no products are found in Sanity, show a message
  if (products.length === 0) {
    return (
      <main className="min-h-screen bg-white dark:bg-black">
        <Section className="py-20 text-center">
          <Container>
            <h2 className="text-2xl font-bold">No systems found.</h2>
            <p className="text-muted-foreground mt-4">Please check your Sanity Studio. Coming soon!</p>
          </Container>
        </Section>
      </main>
    );
  }

  const displayProducts = products;

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
              const imageSrc = product.heroImage ? urlFor(product.heroImage).url() : '/images/placeholder.jpg';

              const slugValue = typeof product.slug === 'string' ? product.slug : (product.slug as any).current;

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
                    <Link href={`/systems/${slugValue}`}>
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
