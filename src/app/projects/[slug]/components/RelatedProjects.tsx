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
    <section className="border-t border-black/10 bg-surface-muted py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-bold tracking-[0.2em] text-edg-brand-dark uppercase">
          More EDG Work
        </p>
        <h2 className="mb-2 text-3xl font-bold text-zinc-950">
          More Projects
        </h2>
        <p className="mb-8 text-zinc-600">
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
      className="group flex flex-col overflow-hidden border border-black/10 bg-white transition-colors duration-300 hover:border-edg-brand"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
        {project.hasRealPhotography ? (
          <Image
            src={project.cardImage || project.heroImage}
            alt={`${project.title} project in ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProjectPhotoPlaceholder />
        )}
        {!project.hasRealPhotography && (
          <div className="absolute top-3 left-3 border border-black/10 bg-white px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-zinc-700 uppercase">
            Details in progress
          </div>
        )}
        <meta itemProp="image" content={project.heroImage || ''} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-bold tracking-wider text-edg-brand-dark uppercase">
          {project.type}
        </span>
        <h3
          className="mt-1 mb-2 text-lg font-bold text-zinc-950 transition-colors group-hover:text-edg-brand-dark"
          itemProp="name"
        >
          {project.title}
        </h3>
        <div className="mt-auto flex items-center text-sm text-zinc-500">
          <MapPin className="mr-1 h-4 w-4 text-edg-brand-dark" />
          <span itemProp="location">{project.location}</span>
        </div>
      </div>
    </Link>
  );
}
