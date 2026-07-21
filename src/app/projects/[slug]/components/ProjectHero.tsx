import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProjectPhotoPlaceholder } from '@/components/projects/ProjectPhotoPlaceholder';
import { buildContactHref } from '@/lib/contact-links';
import { EnrichedProject } from '../lib/project-utils';

interface ProjectHeroProps {
  project: EnrichedProject;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const primarySystem = project.systems[0] || 'Outdoor Living System';
  const statusLabel =
    project.completionStatus === 'complete'
      ? 'Finished photo set'
      : project.hasRealPhotography
        ? 'Project media in review'
        : 'Project profile in progress';
  const contactHref = buildContactHref({
    type: 'fit-review',
    project: project.slug,
    location: project.location,
    source: 'project_hero',
  });

  return (
    <section className="bg-edg-dark relative min-h-[72svh] overflow-hidden pt-28 text-white">
      <div className="absolute inset-0">
        {project.hasRealPhotography ? (
          <Image
            src={project.heroImage}
            alt={`${project.title} ${primarySystem} project in ${project.location}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <ProjectPhotoPlaceholder className="opacity-35" />
        )}
      </div>

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/15" />

      <div className="relative z-10 container mx-auto flex min-h-[72svh] flex-col px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumb
            className="[&_a:hover]:text-edg-brand text-zinc-300 [&_[aria-current='page']]:text-white [&_a]:text-zinc-300"
            items={[
              { label: 'Projects', href: '/projects' },
              { label: project.title },
            ]}
          />
        </div>

        <div className="mt-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="border-edg-brand/45 bg-edg-brand/10 text-edg-brand border px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase">
                {project.type} Project
              </span>
              <span className="border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-white uppercase">
                {statusLabel}
              </span>
            </div>

            <h1 className="mb-5 max-w-4xl text-4xl leading-none font-bold text-white md:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <div
              className="mb-5 flex items-center text-base font-semibold text-zinc-200"
              itemProp="location"
              itemScope
              itemType="https://schema.org/Place"
            >
              <MapPin className="text-edg-brand mr-2 h-5 w-5" />
              <span itemProp="name">{project.location}</span>
              <meta itemProp="address" content={project.location} />
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={contactHref}
                className="bg-edg-brand inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wider text-black uppercase transition-colors hover:bg-white"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-white hover:text-black"
              >
                View all projects
              </Link>
            </div>
          </div>

          <div className="border border-white/15 bg-black/45 p-6 backdrop-blur-sm">
            <h2 className="text-edg-brand mb-5 text-sm font-bold tracking-[0.2em] uppercase">
              Project Snapshot
            </h2>
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-base font-semibold text-white">
                  {project.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                  Project Type
                </dt>
                <dd className="mt-1 text-base font-semibold text-white">
                  {project.type}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                  Systems
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.systems.map((system) => (
                    <span
                      key={system}
                      className="border-edg-brand/25 bg-edg-brand/10 text-edg-brand border px-3 py-1 text-sm font-semibold"
                    >
                      {system}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
