import Link from 'next/link';
import { ArrowRight, Compass, FileText, MapPin } from 'lucide-react';
import {
  EnrichedProject,
  normalizeSystems,
  parseLocation,
} from '../lib/project-utils';

interface ProjectSidebarProps {
  project: EnrichedProject;
}

const serviceAreaLinks: Record<string, string> = {
  'Barrington, IL': '/service-areas/barrington-il',
  'Chicago, IL': '/service-areas/chicago-il',
  'Deerfield, IL': '/service-areas/deerfield-il',
  'Hinsdale, IL': '/service-areas/hinsdale-il',
  'Lake Forest, IL': '/service-areas/lake-forest-il',
  'Lake Geneva, WI': '/service-areas/lake-geneva-wi',
  'Naperville, IL': '/service-areas/naperville-il',
  'Northbrook, IL': '/service-areas/northbrook-il',
  'Winnetka, IL': '/service-areas/winnetka-il',
};

const systemLinks: Record<string, string> = {
  'Louvered Pergola': '/systems/pergolas',
  'Motorized Screens': '/systems/shades',
  'Glass Enclosure': '/systems/enclosures',
  'Integrated Heating': '/systems/appliances',
};

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  const normalizedSystems = normalizeSystems(project.systems);
  const location = parseLocation(project.location);
  const isLocalMarket = location.state === 'IL' || location.state === 'WI';
  const serviceAreaHref = serviceAreaLinks[project.location];
  const planningLinks = [
    project.type === 'Commercial'
      ? {
          label: 'Commercial outdoor living',
          href: '/commercial',
          description: 'Restaurant, hospitality, and roof deck systems',
        }
      : {
          label: 'Pergola planning guide',
          href: '/guides/motorized-pergola-planning',
          description: 'Residential planning steps before quoting',
        },
    {
      label: 'Pergola cost guide',
      href: '/guides/pergola-cost',
      description: 'Budget ranges and cost drivers for premium systems',
    },
  ];

  return (
    <div className="space-y-6">
      {project.hasSpecs && (
        <div className="border border-black/10 bg-surface-muted p-6">
          <h2 className="mb-4 text-lg font-bold text-zinc-950">
            Project Specs
          </h2>
          <dl className="space-y-4">
            {project.specs?.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
                  {spec.label}
                </dt>
                <dd className="mt-1 font-semibold text-zinc-950">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {normalizedSystems.length > 0 && (
        <div className="border border-black/10 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-zinc-950">
            Systems Used
          </h2>
          <div className="grid gap-2">
            {normalizedSystems.map((system) => (
              <Link
                key={system}
                href={systemLinks[system] || '/systems'}
                className="flex items-center justify-between border border-black/10 px-3 py-3 text-sm font-bold text-zinc-950 transition-colors hover:border-edg-brand hover:bg-edg-brand/10"
              >
                <span>{system}</span>
                <ArrowRight className="h-4 w-4 text-edg-brand-dark" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {project.hasTestimonial && project.testimonial && (
        <div className="bg-edg-dark p-6 text-white">
          <blockquote className="mb-4 text-lg leading-relaxed">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <div className="font-bold">{project.testimonial.name}</div>
            <div className="text-sm text-zinc-400">
              {project.testimonial.title}
            </div>
          </div>
        </div>
      )}

      <div className="bg-edg-brand p-6 text-edg-dark">
        <h2 className="mb-2 text-xl font-bold">Plan a Similar Project</h2>
        <p className="mb-5 text-sm leading-relaxed">
          Talk through site constraints, system fit, and what EDG would need to
          quote a comparable project near {location.city}.
        </p>
        <Link
          href={`/contact?project=${project.slug}&location=${encodeURIComponent(project.location)}`}
          className="inline-flex w-full items-center justify-center bg-edg-dark px-6 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-edg-dark/90"
        >
          Start Planning <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="border border-black/10 bg-white p-6">
        <div className="mb-3 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-edg-brand-dark" />
          <h2 className="text-sm font-bold tracking-wider text-zinc-950 uppercase">
            Location Context
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600">
          {isLocalMarket
            ? `EDG Patio & Shade designs and installs premium outdoor living systems across the Chicago-Milwaukee corridor, including projects in and around ${project.location}.`
            : `This project record is listed in ${project.location}. Contact EDG to confirm current design, supply, or installation support for similar work.`}
        </p>
        {serviceAreaHref && (
          <Link
            href={serviceAreaHref}
            className="mt-4 inline-flex items-center text-sm font-bold tracking-wider text-edg-brand-dark uppercase hover:underline"
          >
            View {location.city} service area
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="border border-black/10 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Compass className="h-5 w-5 text-edg-brand-dark" />
          <h2 className="text-sm font-bold tracking-wider text-zinc-950 uppercase">
            Useful Next Reads
          </h2>
        </div>
        <div className="grid gap-3">
          {planningLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-black/10 p-4 transition-colors hover:border-edg-brand hover:bg-edg-brand/10"
            >
              <div className="mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-edg-brand-dark" />
                <span className="text-sm font-bold text-zinc-950">
                  {item.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
