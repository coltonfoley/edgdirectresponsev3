import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Camera } from 'lucide-react';
import { EnrichedProject, normalizeSystems } from '../lib/project-utils';
import { ProjectSection } from './ProjectSection';

interface ProjectContentProps {
  project: EnrichedProject;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const normalizedSystems = normalizeSystems(project.systems);

  return (
    <div className="space-y-12">
      {/* ===== PLACEHOLDER NOTICE CARD ===== */}
      {/* Only show when no gallery images are available */}
      {!project.hasGallery && (
        <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          {/* Mint accent line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-edg-brand" />
          
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-edg-brand/10">
              <Camera className="h-5 w-5 text-edg-brand" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-base font-semibold text-zinc-900 dark:text-white">
                Project Photo Set Coming Soon
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                We're still collecting the finished photo set for this project.{' '}
                <Link
                  href="/contact"
                  className="font-medium text-edg-brand hover:text-edg-brand-dark hover:underline"
                >
                  Contact us
                </Link>{' '}
                to see more examples of our work in {project.location}.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===== OVERVIEW ===== */}
      {/* Always show - this is required content */}
      <ProjectSection condition={true} id="overview">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Project Overview
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </ProjectSection>

      {/* ===== CHALLENGE ===== */}
      <ProjectSection condition={project.hasChallenge} id="challenge">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          The Challenge
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.challenge}
        </p>
      </ProjectSection>

      {/* ===== SOLUTION ===== */}
      <ProjectSection condition={project.hasSolution} id="solution">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Our Solution
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.solution}
        </p>
      </ProjectSection>

      {/* ===== RESULTS ===== */}
      <ProjectSection condition={project.hasResults} id="results">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Results & Impact
        </h2>
        <ul className="space-y-3">
          {project.results?.map((result, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
              itemProp="review"
              itemScope
              itemType="https://schema.org/Review"
            >
              <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
              <span itemProp="reviewBody">{result}</span>
            </li>
          ))}
        </ul>
      </ProjectSection>

      {/* ===== SYSTEMS USED (Inline - for projects without sidebar) ===== */}
      <ProjectSection
        condition={normalizedSystems.length > 0 && !project.hasSpecs}
        id="systems"
      >
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Systems Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {normalizedSystems.map((system) => (
            <span
              key={system}
              className="bg-edg-brand/10 text-edg-brand rounded-full px-4 py-2 text-sm font-medium"
            >
              {system}
            </span>
          ))}
        </div>
      </ProjectSection>

      {/* ===== VIDEO ===== */}
      {/* ===== GALLERY ===== */}
      <ProjectSection condition={project.hasGallery} id="gallery">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Project Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {project.galleryImages?.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-100"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* ===== PROJECT STATUS INDICATOR ===== */}
      {/* Show for partial/incomplete projects */}
      {project.completionStatus !== 'complete' && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Note:</strong> This project showcase is being updated with
            additional details. Contact us for complete information about
            similar projects in {project.location}.
          </p>
        </div>
      )}
    </div>
  );
}
