import Link from 'next/link';
import { MapPin, ArrowLeft, Camera } from 'lucide-react';
import { EnrichedProject, parseLocation } from '../lib/project-utils';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectHeroProps {
  project: EnrichedProject;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const location = parseLocation(project.location);

  return (
    <section className="relative h-[60vh] min-h-[500px]">
      {/* Background Image with Fallback */}
      <ImageWithFallback
        src={project.heroImage}
        alt={project.title}
        fill
        priority
        fallbackType="gradient"
        containerClassName="absolute inset-0"
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Professional Photos Notice Banner */}
      <div className="absolute inset-x-0 top-0 z-20 bg-black/70 px-4 py-3 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-4">
          <Camera className="h-4 w-4 flex-shrink-0 text-white/90" />
          <span className="text-sm text-white/90">
            Professional photos coming soon —{' '}
            <Link
              href="/contact"
              className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-edg-brand"
            >
              Contact Us
            </Link>{' '}
            to see more examples of our work
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex flex-wrap gap-4" aria-label="Breadcrumb">
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to gallery
          </Link>

          {project.serviceAreaSlug && (
            <Link
              href={`/service-areas/${project.serviceAreaSlug}`}
              className="inline-flex items-center border-l border-white/20 pl-4 text-sm text-white/80 transition-colors hover:text-white"
            >
              <MapPin className="mr-2 h-4 w-4" />
              View Service Area
            </Link>
          )}
        </nav>

        {/* Project Type Badge */}
        <span className="bg-edg-brand text-edg-dark mb-4 w-fit rounded-full px-3 py-1 text-sm font-semibold">
          {project.type}
        </span>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        {/* Location - Prominent for Local SEO */}
        <div
          className="flex items-center text-white/80"
          itemProp="location"
          itemScope
          itemType="https://schema.org/Place"
        >
          <MapPin className="mr-2 h-5 w-5" />
          <span itemProp="name">{project.location}</span>
          <meta itemProp="address" content={project.location} />
        </div>

        {/* Systems Tags (Hero level for quick scanning) */}
        {project.systems.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.systems.map((system) => (
              <span
                key={system}
                className="bg-white text-zinc-900 px-4 py-2 text-sm font-semibold rounded-full shadow-lg"
              >
                {system}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
