import { Project } from '@/lib/projects';
import { getAllProjects } from '@/lib/projects';

/**
 * Extended project type with computed flags for conditional rendering
 */
export interface EnrichedProject extends Project {
  hasChallenge: boolean;
  hasSolution: boolean;
  hasResults: boolean;
  hasGallery: boolean;
  hasSpecs: boolean;
  hasTestimonial: boolean;
  hasRelatedProjects: boolean;
  sectionCount: number;
  completionStatus: 'complete' | 'partial' | 'minimal';
}

/**
 * Validates if a string field has meaningful content
 */
export function hasContent(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  return value.trim().length > 0;
}

/**
 * Validates if an array has valid items
 */
export function hasValidArray<T>(
  arr: T[] | undefined | null,
  minLength = 1
): boolean {
  return Array.isArray(arr) && arr.length >= minLength;
}

/**
 * Enriches project data with computed flags for conditional rendering
 */
export function enrichProject(project: Project): EnrichedProject {
  const hasChallenge = hasContent(project.challenge);
  const hasSolution = hasContent(project.solution);
  const hasResults = hasValidArray(project.results);
  const hasGallery = hasValidArray(project.galleryImages);
  const hasSpecs = hasValidArray(project.specs);
  const hasTestimonial =
    hasContent(project.testimonial?.quote) &&
    hasContent(project.testimonial?.name);

  // Calculate section count for layout decisions
  const sectionCount = [
    hasChallenge,
    hasSolution,
    hasResults,
    hasGallery,
    hasSpecs,
    hasTestimonial,
  ].filter(Boolean).length;

  // Determine completion status
  let completionStatus: EnrichedProject['completionStatus'] = 'minimal';
  if (sectionCount >= 5) completionStatus = 'complete';
  else if (sectionCount >= 2) completionStatus = 'partial';

  return {
    ...project,
    hasChallenge,
    hasSolution,
    hasResults,
    hasGallery,
    hasSpecs,
    hasTestimonial,
    hasRelatedProjects: false, // Set after related projects are computed
    sectionCount,
    completionStatus,
  };
}

/**
 * Extract city and state from location string
 * e.g., "Lake Forest, IL" -> { city: "Lake Forest", state: "IL" }
 */
export function parseLocation(location: string): {
  city: string;
  state: string;
  full: string;
} {
  const parts = location.split(',').map((s) => s.trim());
  return {
    city: parts[0] || location,
    state: parts[1] || '',
    full: location,
  };
}

/**
 * Find related projects based on location proximity and system matching
 */
export function findRelatedProjects(
  currentProject: Project,
  limit = 3
): Project[] {
  const allProjects = getAllProjects();
  const { city: currentCity, state: currentState } = parseLocation(
    currentProject.location
  );

  // Score each project for relevance
  const scored = allProjects
    .filter((p) => p.slug !== currentProject.slug)
    .map((project) => {
      let score = 0;
      const { city, state } = parseLocation(project.location);

      // Same city is highest priority (local SEO)
      if (city.toLowerCase() === currentCity.toLowerCase()) {
        score += 10;
      }
      // Same state is second priority
      else if (state.toLowerCase() === currentState.toLowerCase()) {
        score += 5;
      }

      // Shared systems indicate similar project type
      const sharedSystems = project.systems.filter((sys) =>
        currentProject.systems.includes(sys)
      );
      score += sharedSystems.length * 2;

      // Same project type bonus
      if (project.type === currentProject.type) {
        score += 1;
      }

      return { project, score };
    });

  // Sort by score descending and take top N
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.project);
}

/**
 * Normalizes systems array for consistent display
 */
export function normalizeSystems(systems: string[] = []): string[] {
  return systems
    .filter(Boolean)
    .map((s) => s.trim())
    .filter((s, i, arr) => arr.indexOf(s) === i); // Remove duplicates
}
