import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { EnrichedProject, normalizeSystems } from '../lib/project-utils';

interface ProjectSidebarProps {
  project: EnrichedProject;
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  const normalizedSystems = normalizeSystems(project.systems);

  return (
    <div className="space-y-8">
      {/* ===== PROJECT SPECS ===== */}
      {project.hasSpecs && (
        <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
            Project Specs
          </h3>
          <dl className="space-y-4">
            {project.specs?.map((spec) => (
              <div key={spec.label}>
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">
                  {spec.label}
                </dt>
                <dd className="font-medium text-zinc-900 dark:text-white">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* ===== SYSTEMS USED ===== */}
      {normalizedSystems.length > 0 && (
        <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
            Systems Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {normalizedSystems.map((system) => (
              <span
                key={system}
                className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-full px-4 py-2 text-sm font-semibold transition-colors shadow-sm"
              >
                {system}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ===== TESTIMONIAL ===== */}
      {project.hasTestimonial && project.testimonial && (
        <div className="rounded-2xl bg-edg-dark p-6 text-white">
          <blockquote
            className="mb-4 text-lg leading-relaxed"
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
          >
            <span itemProp="reviewBody">
              &ldquo;{project.testimonial.quote}&rdquo;
            </span>
          </blockquote>
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <div className="font-bold" itemProp="name">
              {project.testimonial.name}
            </div>
            <div className="text-sm text-zinc-400">
              {project.testimonial.title}
            </div>
          </div>
        </div>
      )}

      {/* ===== CALL TO ACTION ===== */}
      <div className="rounded-2xl bg-edg-brand p-6 text-center text-edg-dark">
        <h3 className="mb-2 text-lg font-bold">Start Your Project</h3>
        <p className="mb-4 text-sm">
          Ready for a similar transformation in {project.location}?
        </p>
        <Link
          href={`/contact?project=${project.slug}&location=${encodeURIComponent(project.location)}`}
        >
          <Button
            variant="secondary"
            className="w-full bg-edg-dark text-white hover:bg-edg-dark/90"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* ===== LOCAL SEO BOOSTER ===== */}
      <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h3 className="mb-2 text-sm font-bold text-zinc-900 dark:text-white">
          Serving {project.location}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          EDG Outdoor Living designs and installs custom outdoor living
          solutions throughout {project.location} and surrounding areas.
        </p>
      </div>
    </div>
  );
}
