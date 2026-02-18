import { CheckCircle2 } from 'lucide-react';
import { EnrichedProject, normalizeSystems } from '../lib/project-utils';
import { ProjectSection } from './ProjectSection';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectContentProps {
  project: EnrichedProject;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const normalizedSystems = normalizeSystems(project.systems);

  return (
    <div className="space-y-12">
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

      {/* ===== GALLERY ===== */}
      <ProjectSection condition={project.hasGallery} id="gallery">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Project Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {project.galleryImages?.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <ImageWithFallback
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                fallbackType="pattern"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="transition-transform duration-500 group-hover:scale-105"
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
