import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Calendar,
  Ruler,
  Clock,
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProject, getProjects } from '@/sanity/lib/server-fetch';
import { urlFor } from '@/sanity/lib/image';

// Robust string renderer for potentially block-like or object data
const renderText = (val: any): string => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    if (val.text) return val.text;
    if (val.name) return val.name;
    if (val.label) return val.label;
    if (val.value) return val.value;
    // If it's a block, we'll try to extract text from children
    if (val._type === 'block' && Array.isArray(val.children)) {
      return val.children.map((c: any) => c.text || '').join('');
    }
    // Final fallback to JSON stringify to avoid React child error
    try {
      return JSON.stringify(val);
    } catch {
      return '[Object]';
    }
  }
  if (Array.isArray(val)) {
    return val.map(item => renderText(item)).join(' ');
  }
  return String(val);
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {};
  }

  const seo = project.seo || {};

  return {
    title: seo.metaTitle || `${project.title} | EDG Projects`,
    description: seo.metaDescription || project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: seo.ogImage ? {
      images: [urlFor(seo.ogImage).url()],
    } : (project.heroImage ? {
      images: [urlFor(project.heroImage).url()]
    } : undefined),
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({
    slug: typeof project.slug === 'string' ? project.slug : project.slug?.current
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  // Handle differences between hardcoded and Sanity data structures
  const displaySystems = project.systems?.map((s: any) => renderText(s.name || s)) || project.systemNames?.map((s: any) => renderText(s)) || [];
  const galleryImages = project.gallery?.map((img: any) => img.image ? urlFor(img.image).url() : (img.url || img)) || project.galleryImages || [];
  const displayServiceAreaSlug = project.serviceArea?.slug?.current || project.serviceAreaSlug;
  const heroImageUrl = project.heroImage ? urlFor(project.heroImage).url() : '';

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* ========== HERO ========== */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-12">
          <div className="mb-6 flex flex-wrap gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to gallery
            </Link>
            {displayServiceAreaSlug && (
              <Link
                href={`/service-areas/${displayServiceAreaSlug}`}
                className="inline-flex items-center border-l border-white/20 pl-4 text-sm text-white/80 transition-colors hover:text-white"
              >
                <MapPin className="mr-2 h-4 w-4" /> View Service Area
              </Link>
            )}
          </div>
          <span className="bg-edg-brand text-edg-dark mb-4 w-fit rounded-full px-3 py-1 text-sm font-semibold">
            {project.type}
          </span>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <div className="flex items-center text-white/80">
            <MapPin className="mr-2 h-5 w-5" /> {project.location}
          </div>
        </Container>
      </section>

      {/* ========== PROJECT DETAILS ========== */}
      <Section className="bg-white py-16 dark:bg-black">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-12 lg:col-span-2">
              {/* Overview */}
              <div>
                <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {renderText(project.description)}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {renderText(project.challenge)}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {renderText(project.solution)}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="mb-4 text-2xl font-bold">Results</h2>
                <ul className="space-y-3">
                  {project.results?.map((result: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                      <span>{renderText(result)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
                <div className="grid grid-cols-3 gap-4">
                  {galleryImages.map((img: string, i: number) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-xl bg-cover bg-center"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Specs */}
              <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
                <h3 className="mb-4 text-lg font-bold">Project Specs</h3>
                <dl className="space-y-4">
                  {project.specs?.map((spec: any) => (
                    <div key={renderText(spec.label)}>
                      <dt className="text-muted-foreground text-sm">
                        {renderText(spec.label)}
                      </dt>
                      <dd className="font-medium">{renderText(spec.value)}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Systems Used */}
              <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
                <h3 className="mb-4 text-lg font-bold">Systems Used</h3>
                <div className="flex flex-wrap gap-2">
                  {displaySystems.map((system: string) => (
                    <span
                      key={system}
                      className="bg-edg-brand/10 text-edg-brand rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {system}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-edg-dark rounded-2xl p-6 text-white">
                  <blockquote className="mb-4 text-lg leading-relaxed">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold">{project.testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {project.testimonial.title}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-edg-brand text-edg-dark rounded-2xl p-6 text-center">
                <h3 className="mb-2 text-lg font-bold">Start your project</h3>
                <p className="mb-4 text-sm">
                  Let's discuss what's possible for your space.
                </p>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 w-full text-white"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED PROJECTS ========== */}
      <Section className="bg-zinc-100 py-16 dark:bg-zinc-950">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Related Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {project.relatedProjects?.map((related: any) => (
              <Link
                key={related._id}
                href={`/projects/${related.slug?.current || related.slug}`}
                className="group flex overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-zinc-900"
              >
                <div
                  className="w-1/3 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${related.cardImage ? urlFor(related.cardImage).url() : (related.heroImage ? urlFor(related.heroImage).url() : '')}')` }}
                />
                <div className="w-2/3 p-6">
                  <span className="text-edg-brand text-xs font-semibold">
                    {related.type}
                  </span>
                  <h3 className="group-hover:text-edg-brand mt-1 mb-2 text-lg font-bold transition-colors">
                    {related.title}
                  </h3>
                  <div className="text-muted-foreground flex items-center text-sm">
                    <MapPin className="mr-1 h-4 w-4" /> {related.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
