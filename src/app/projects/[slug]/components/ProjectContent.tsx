import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Camera, CheckCircle2 } from 'lucide-react';
import { EnrichedProject, normalizeSystems } from '../lib/project-utils';
import { ProjectSection } from './ProjectSection';

interface ProjectContentProps {
  project: EnrichedProject;
}

const systemLinks: Record<string, string> = {
  'Louvered Pergola': '/systems/pergolas',
  'Motorized Screens': '/systems/shades',
  'Glass Enclosure': '/systems/enclosures',
  'Integrated Heating': '/systems/appliances',
};

export function ProjectContent({ project }: ProjectContentProps) {
  const normalizedSystems = normalizeSystems(project.systems);
  const primarySystem = normalizedSystems[0] || 'Outdoor Living System';
  const relatedSystemLinks = normalizedSystems
    .map((system) => ({ system, href: systemLinks[system] }))
    .filter((link): link is { system: string; href: string } =>
      Boolean(link.href)
    );
  const localVideoUrl = project.videoUrl?.startsWith('/')
    ? project.videoUrl
    : undefined;

  return (
    <div className="space-y-14">
      {!project.hasGallery && (
        <div className="relative overflow-hidden border border-black/10 bg-surface-muted p-6">
          <div className="absolute top-0 left-0 h-full w-1 bg-edg-brand" />
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-edg-brand/30 bg-edg-brand/10">
              <Camera className="h-5 w-5 text-edg-brand" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-base font-bold text-zinc-900">
                Finished Project Photos Are Still Being Confirmed
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                This project page is being kept intentionally concise until EDG
                has a finished photo set and complete case-study details ready
                for publication. The notes below focus on confirmed planning
                details that help customers compare similar projects.
              </p>
              <Link
                href="/projects"
                className="mt-3 inline-flex items-center text-sm font-bold tracking-wider text-edg-brand-dark uppercase hover:underline"
              >
                Browse photographed projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <ProjectSection condition={true} id="overview">
        <div className="border-b border-black/10 pb-10">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-edg-brand-dark uppercase">
            Project Overview
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-zinc-950 md:text-4xl">
            {project.title}: {primarySystem.toLowerCase()} project in{' '}
            {project.location}
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-700">
            {project.description}
          </p>
        </div>
      </ProjectSection>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-black/10 bg-white p-6">
          <h2 className="mb-3 text-base font-bold tracking-wider text-zinc-950 uppercase">
            Project Context
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            This is a {project.type.toLowerCase()} outdoor living project in{' '}
            {project.location}. The page focuses on site goals, systems used,
            and planning details that help customers understand similar EDG
            work.
          </p>
        </div>

        <div className="border border-black/10 bg-white p-6">
          <h2 className="mb-3 text-base font-bold tracking-wider text-zinc-950 uppercase">
            System Focus
          </h2>
          <div className="flex flex-wrap gap-2">
            {normalizedSystems.map((system) => (
              <span
                key={system}
                className="border border-edg-brand/25 bg-edg-brand/10 px-3 py-2 text-sm font-semibold text-zinc-950"
              >
                {system}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectSection condition={project.hasChallenge} id="challenge">
        <div className="border-l-2 border-edg-brand pl-6">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-edg-brand-dark uppercase">
            Site Challenge
          </p>
          <h2 className="mb-4 text-2xl font-bold text-zinc-950">
            What made this project specific
          </h2>
          <p className="leading-relaxed text-zinc-700">{project.challenge}</p>
        </div>
      </ProjectSection>

      <ProjectSection condition={project.hasSolution} id="solution">
        <div className="border border-black/10 bg-surface-muted p-8">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-edg-brand-dark uppercase">
            EDG Approach
          </p>
          <h2 className="mb-4 text-2xl font-bold text-zinc-950">
            How the system was planned
          </h2>
          <p className="leading-relaxed text-zinc-700">{project.solution}</p>
        </div>
      </ProjectSection>

      <ProjectSection condition={project.hasResults} id="results">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-edg-brand-dark uppercase">
            Built Outcome
          </p>
          <h2 className="mb-5 text-2xl font-bold text-zinc-950">
            Confirmed project takeaways
          </h2>
          <ul className="grid gap-3">
            {project.results?.map((result) => (
              <li
                key={result}
                className="flex items-start gap-3 border border-black/10 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand-dark" />
                <span className="leading-relaxed text-zinc-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </ProjectSection>

      {relatedSystemLinks.length > 0 && (
        <ProjectSection condition={true} id="related-systems">
          <div className="border-t border-black/10 pt-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-950">
              Related EDG system pages
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedSystemLinks.map(({ system, href }) => (
                <Link
                  key={system}
                  href={href}
                  className="inline-flex items-center border border-black/10 px-4 py-3 text-sm font-bold tracking-wider text-zinc-950 uppercase transition-colors hover:border-edg-brand hover:bg-edg-brand/10"
                >
                  {system}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </ProjectSection>
      )}

      <ProjectSection condition={project.hasGallery} id="gallery">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-edg-brand-dark uppercase">
            Project Photos
          </p>
          <h2 className="mb-5 text-2xl font-bold text-zinc-950">
            Finished photo set
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.galleryImages?.map((image, index) => (
              <div
                key={image}
                className={
                  index === 0
                    ? 'group relative aspect-[4/3] overflow-hidden bg-zinc-100 sm:col-span-2'
                    : 'group relative aspect-[4/3] overflow-hidden bg-zinc-100'
                }
              >
                <Image
                  src={image}
                  alt={`${project.title} ${primarySystem.toLowerCase()} project photo ${index + 1} in ${project.location}`}
                  fill
                  sizes={
                    index === 0
                      ? '(min-width: 1024px) 66vw, 100vw'
                      : '(min-width: 1024px) 33vw, 50vw'
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </ProjectSection>

      <ProjectSection condition={Boolean(localVideoUrl)} id="project-video">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-edg-brand-dark uppercase">
            Project Motion
          </p>
          <h2 className="mb-5 text-2xl font-bold text-zinc-950">
            Installation in motion
          </h2>
          <div className="overflow-hidden border border-black/10 bg-black">
            <video
              className="aspect-[4/3] w-full bg-black object-cover"
              controls
              muted
              playsInline
              preload="metadata"
              poster={project.videoPoster || project.heroImage}
              aria-label={`${project.title} ${primarySystem.toLowerCase()} project preview video`}
            >
              <source src={localVideoUrl} type="video/mp4" />
            </video>
          </div>
          {project.videoCaption && (
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              {project.videoCaption}
            </p>
          )}
        </div>
      </ProjectSection>

      {project.completionStatus !== 'complete' && (
        <div className="border border-yellow-300 bg-yellow-50 p-5">
          <p className="text-sm leading-relaxed text-yellow-900">
            <strong>Publication note:</strong> This page is intentionally
            limited to details confirmed for publication. Contact EDG for
            complete information about similar projects in {project.location}.
          </p>
        </div>
      )}
    </div>
  );
}
