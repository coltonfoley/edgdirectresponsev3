'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';
import { BookOpen, Scale, ArrowRight, Library, FileText, Lightbulb, type LucideIcon } from 'lucide-react';

interface Guide {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  readTime?: string;
  category?: string;
  heroImage?: string;
  featured?: boolean;
}

interface GuidesClientProps {
  guides: Guide[];
}

// Map categories to icons
const categoryIcons: Record<string, LucideIcon> = {
  products: BookOpen,
  comparison: Scale,
  planning: Lightbulb,
  default: FileText,
};

// Fallback guides if Sanity returns empty
const fallbackGuides: Guide[] = [
  {
    _id: '1',
    title: 'The Complete Guide to Louvered Pergolas',
    slug: 'louvered-pergolas',
    description: 'Everything you need to know about cost, installation, and winter performance.',
    readTime: '12 min read',
    category: 'products',
  },
  {
    _id: '2',
    title: 'Pergola vs. Patio Cover vs. Awning',
    slug: 'pergola-vs-patio-cover',
    description: "A side-by-side comparison of shade systems to help you choose what's right for your home.",
    readTime: '8 min read',
    category: 'comparison',
  },
];

export default function GuidesClient({ guides }: GuidesClientProps) {
  const displayGuides = guides.length > 0 ? guides : fallbackGuides;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50 pt-32 pb-20 dark:border-zinc-800 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="max-w-4xl">
              <span className="text-edg-brand-text dark:text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-none border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <Library className="h-4 w-4" /> Resources & Learning
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-zinc-50">
                EDG Knowledge Base
              </h1>
              <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
                Deep-dive resources to help you make informed decisions about
                your outdoor living investment. From zoning guides to cost
                breakdowns.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== GUIDES GRID ========== */}
      <Section className="py-20">
        <Container>
          <FadeIn delay={0.2}>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {displayGuides.map((guide) => {
                const Icon = categoryIcons[guide.category || 'default'] || categoryIcons.default;
                return (
                  <Link 
                    key={guide._id} 
                    href={`/guides/${guide.slug}`} 
                    className="group block h-full" 
                    prefetch={false}
                  >
                    <div className="hover:border-edg-brand h-full rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                      <div className="mb-8 flex items-start justify-between">
                        <div className="group-hover:bg-edg-brand/10 group-hover:border-edg-brand/20 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 transition-colors dark:border-zinc-700 dark:bg-zinc-800">
                          <Icon className="text-edg-brand-text dark:text-edg-brand h-8 w-8" />
                        </div>
                        {guide.readTime && (
                          <span className="rounded-none bg-zinc-100 px-4 py-1.5 text-xs font-bold tracking-wider text-zinc-500 uppercase dark:bg-zinc-800">
                            {guide.readTime}
                          </span>
                        )}
                      </div>
                      <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-4 text-2xl font-bold transition-colors md:text-3xl">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        {guide.description}
                      </p>
                      <div className="text-edg-brand-text dark:text-edg-brand flex items-center text-sm font-bold transition-all group-hover:gap-2">
                        Read Full Article{' '}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
