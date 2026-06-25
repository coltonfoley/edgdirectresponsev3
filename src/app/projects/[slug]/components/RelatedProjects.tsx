import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { ProjectPhotoPlaceholder } from '@/components/projects/ProjectPhotoPlaceholder';
import { parseLocation } from '../lib/project-utils';
import { Project } from '@/lib/projects';

interface RelatedProjectsProps {
  projects: Project[];
  currentLocation: string;
}

export function RelatedProjects({
  projects,
  currentLocation,
}: RelatedProjectsProps) {
  const { city } = parseLocation(currentLocation);

  return (
    <section className="bg-zinc-100 py-16 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">
          More Projects
        </h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Similar projects in {city} and surrounding areas
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <RelatedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 hover:shadow-xl dark:border-white/5 dark:bg-zinc-900"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
        {project.hasRealPhotography ? (
          <Image
            src={project.cardImage || project.heroImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProjectPhotoPlaceholder />
        )}
        <meta itemProp="image" content={project.heroImage || ''} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-edg-brand text-xs font-semibold">
          {project.type}
        </span>
        <h3
          className="group-hover:text-edg-brand mt-1 mb-2 text-lg font-bold transition-colors text-zinc-900 dark:text-white"
          itemProp="name"
        >
          {project.title}
        </h3>
        <div className="mt-auto flex items-center text-sm text-zinc-500 dark:text-zinc-400">
          <MapPin className="mr-1 h-4 w-4" />
          <span itemProp="location">{project.location}</span>
        </div>
      </div>
    </Link>
  );
}
