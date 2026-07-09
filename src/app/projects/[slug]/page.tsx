import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getProject, getAllProjects, Project } from '@/lib/projects';
import {
  enrichProject,
  findRelatedProjects,
  parseLocation,
} from './lib/project-utils';
import { generateProjectSchema } from './lib/project-schema';

import { ProjectHero } from './components/ProjectHero';
import { ProjectContent } from './components/ProjectContent';
import { ProjectSidebar } from './components/ProjectSidebar';
import { RelatedProjects } from './components/RelatedProjects';

// Cache Components: Static shell with dynamic content streaming
// No revalidate needed - uses 'use cache' for data fetching
// Dynamic params handled by generateStaticParams

interface PageProps {
  params: Promise<{ slug: string }>;
}

function truncateMetaDescription(value: string) {
  const normalized = value.replace(/\s+/g, ' ').trim();

  if (normalized.length <= 160) {
    return normalized;
  }

  return `${normalized.slice(0, 157).trimEnd()}...`;
}

function buildProjectMetaDescription(project: Project) {
  const primarySystem = project.systems[0] || 'outdoor living system';
  const projectType = project.type.toLowerCase();

  return truncateMetaDescription(
    `${project.title} ${primarySystem.toLowerCase()} project in ${project.location}. See the ${projectType} site context, systems used, project photos when available, and EDG planning notes.`
  );
}

/**
 * Generate metadata for the project page
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project Not Found | EDG Patio & Shade' };
  }

  const location = parseLocation(project.location);
  const primarySystem = project.systems[0] || 'Outdoor Living System';
  const metaDescription = buildProjectMetaDescription(project);
  const titleLocation = location.state
    ? `${location.city}, ${location.state}`
    : location.city;

  return {
    title: `${project.title} ${primarySystem} Project in ${titleLocation} | EDG`,
    description: metaDescription,
    keywords: [
      project.type,
      ...project.systems,
      location.city,
      'outdoor living',
      'pergola',
      'patio shade',
      `${location.city} pergola`,
      `${location.city} outdoor living`,
    ],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} ${primarySystem} Project | EDG Patio & Shade`,
      description: metaDescription,
      type: 'article',
      url: `/projects/${slug}`,
      images: project.hasRealPhotography && project.heroImage
        ? [{ url: project.heroImage }]
        : undefined,
    },
  };
}

/**
 * Generate static params for build-time generation
 */
export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Main Project Detail Page
 * Handles incomplete data gracefully with conditional rendering
 */
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const rawProject = getProject(slug);

  if (!rawProject) {
    notFound();
  }

  // Enrich project data with computed flags
  const project = enrichProject(rawProject);

  // Find related projects dynamically
  const relatedProjects = findRelatedProjects(rawProject, 3);
  const enrichedProject = {
    ...project,
    hasRelatedProjects: relatedProjects.length > 0,
  };

  // Generate structured data for SEO
  const projectSchema = generateProjectSchema(enrichedProject);

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="min-h-screen bg-edg-light dark:bg-black">
        {/* Hero Section */}
        <ProjectHero project={enrichedProject} />

        {/* Main Content + Sidebar */}
        <section className="bg-white py-16 dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content - Conditional Sections */}
              <div className="lg:col-span-2">
                <ProjectContent project={enrichedProject} />
              </div>

              {/* Sidebar - Specs, Systems, CTA */}
              <aside className="space-y-8">
                <ProjectSidebar project={enrichedProject} />
              </aside>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {enrichedProject.hasRelatedProjects && (
          <RelatedProjects
            projects={relatedProjects}
            currentLocation={project.location}
          />
        )}
      </div>
    </>
  );
}
