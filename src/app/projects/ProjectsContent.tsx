'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { buildContactHref } from '@/lib/contact-links';
import { getAllProjects, type Project } from '@/lib/projects';
import { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Filter, Camera, Check } from 'lucide-react';

const projects = getAllProjects();
const cities = Array.from(
  new Set(projects.map((project) => project.city))
).sort();
const types = Array.from(
  new Set(projects.map((project) => project.type))
).sort();
const systemFilters = [
  { value: 'All', label: 'All Systems' },
  { value: 'pergolas', label: 'Pergolas' },
  { value: 'screens', label: 'Screens' },
  { value: 'glass', label: 'Glass' },
  { value: 'outdoor-kitchens-heat', label: 'Outdoor Kitchens & Heat' },
  { value: 'outdoor-rooms', label: 'Outdoor Rooms' },
];
const photographyReadyCount = projects.filter(
  (project) => project.hasRealPhotography
).length;
const commercialProjectCount = projects.filter(
  (project) => project.type === 'Commercial'
).length;
const portfolioStats = [
  {
    label: 'Project profiles',
    value: projects.length.toString(),
    detail: 'Residential and commercial records',
  },
  {
    label: 'Photo-ready cases',
    value: photographyReadyCount.toString(),
    detail: 'Profiles with finished project imagery',
  },
  {
    label: 'Commercial work',
    value: commercialProjectCount.toString(),
    detail: 'Hospitality, rooftop, and trade examples',
  },
];

function projectMatchesSystem(project: Project, selectedSystem: string) {
  if (selectedSystem === 'All') return true;

  const systems = project.systems.map((system) => system.toLowerCase());
  const searchText = [
    project.title,
    project.description,
    project.challenge,
    project.solution,
    ...project.systems,
  ]
    .join(' ')
    .toLowerCase();

  if (selectedSystem === 'pergolas') {
    return systems.some((system) => system.includes('pergola'));
  }

  if (selectedSystem === 'screens') {
    return systems.some(
      (system) => system.includes('screen') || system.includes('shade')
    );
  }

  if (selectedSystem === 'glass') {
    return systems.some(
      (system) => system.includes('glass') || system.includes('enclosure')
    );
  }

  if (selectedSystem === 'outdoor-kitchens-heat') {
    return /kitchen|grill|appliance|heat|heater|fire/.test(searchText);
  }

  if (selectedSystem === 'outdoor-rooms') {
    const roomSystemCount = [
      /pergola|louver/.test(searchText),
      /screen|shade/.test(searchText),
      /glass|enclosure/.test(searchText),
      /heat|heater|kitchen|grill|appliance|lighting/.test(searchText),
    ].filter(Boolean).length;

    return searchText.includes('outdoor room') || roomSystemCount >= 2;
  }

  return true;
}

export function ProjectsContent() {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedSystem, setSelectedSystem] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const cityMatch = selectedCity === 'All' || project.city === selectedCity;
      const typeMatch = selectedType === 'All' || project.type === selectedType;
      const systemMatch = projectMatchesSystem(project, selectedSystem);
      return cityMatch && typeMatch && systemMatch;
    });
  }, [selectedCity, selectedType, selectedSystem]);
  const photoReadyProjects = useMemo(
    () => filteredProjects.filter((project) => project.hasRealPhotography),
    [filteredProjects]
  );
  const inProgressProjects = useMemo(
    () => filteredProjects.filter((project) => !project.hasRealPhotography),
    [filteredProjects]
  );

  const projectContactHref = buildContactHref({
    type: 'fit-review',
    source: 'projects_banner',
  });
  const consultationHref = buildContactHref({
    type: 'consultation',
    source: 'projects_cta',
  });

  return (
    <div className="bg-surface text-text-primary min-h-screen">
      {/* Hero */}
      <Section className="bg-surface-dark text-text-inverse pt-28 pb-20 md:pt-32 md:pb-24">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              className="text-zinc-300"
              items={[{ label: 'Projects' }]}
            />
          </div>
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-end">
              <div className="max-w-4xl">
                <div className="label-editorial text-edg-brand mb-6">
                  Project Portfolio
                </div>
                <h1 className="mb-8 text-5xl leading-none font-bold md:text-7xl">
                  Real outdoor living work, organized by system and site type.
                </h1>
                <p className="max-w-2xl text-xl leading-relaxed text-zinc-300">
                  Browse EDG project profiles across motorized pergolas,
                  retractable screens, glass enclosures, outdoor rooms, and
                  commercial patio systems.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <TrackedLink
                    href={projectContactHref}
                    conversionName="project_fit_review_click"
                  >
                    <Button size="lg" className="w-full sm:w-auto">
                      Request a Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </TrackedLink>
                  <Link href="/gallery">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      View Gallery
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="border border-white/10 bg-black/35 p-6">
                <div className="text-edg-brand mb-6 text-xs font-bold tracking-[0.2em] uppercase">
                  Portfolio Index
                </div>
                <div className="space-y-5">
                  {portfolioStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="text-sm font-bold text-white">
                          {stat.label}
                        </div>
                        <div className="text-edg-brand text-3xl font-bold">
                          {stat.value}
                        </div>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Notice Banner */}
      <Section className="border-border bg-surface-muted border-b py-8">
        <Container>
          <FadeIn>
            <div className="border-border-strong flex flex-col items-start gap-5 border bg-white p-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="border-edg-brand/30 bg-edg-brand/10 text-edg-brand-dark flex h-12 w-12 shrink-0 items-center justify-center border">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-text-primary mb-1 text-lg font-bold">
                    Portfolio Details Are Being Updated
                  </h2>
                  <p className="text-text-secondary max-w-3xl text-sm leading-relaxed">
                    Finished photo sets are available for select projects.
                    Several older records still need final photos, solution
                    notes, and confirmed results before they can be presented as
                    full case studies.
                  </p>
                </div>
              </div>
              <TrackedLink
                href={projectContactHref}
                conversionName="project_fit_review_click"
                className="bg-edg-brand text-edg-dark hover:bg-edg-dark inline-flex shrink-0 items-center justify-center px-6 py-3 text-sm font-bold tracking-wider uppercase transition-colors hover:text-white"
              >
                Request a Quote
              </TrackedLink>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Filters */}
      <Section className="border-border border-b bg-white py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-text-secondary flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                <Filter className="h-4 w-4" />
                <span>Filter by:</span>
              </div>

              {/* City Filter */}
              <label htmlFor="projects-city-filter" className="sr-only">
                Filter projects by location
              </label>
              <select
                id="projects-city-filter"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="focus:border-edg-brand border-border-strong rounded-none border bg-white px-4 py-2 text-sm font-medium focus:outline-none"
              >
                <option value="All">All Locations</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <label htmlFor="projects-type-filter" className="sr-only">
                Filter projects by residential or commercial type
              </label>
              <select
                id="projects-type-filter"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="focus:border-edg-brand border-border-strong rounded-none border bg-white px-4 py-2 text-sm font-medium focus:outline-none"
              >
                <option value="All">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* System Filter */}
              <label htmlFor="projects-system-filter" className="sr-only">
                Filter projects by system
              </label>
              <select
                id="projects-system-filter"
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
                className="focus:border-edg-brand border-border-strong rounded-none border bg-white px-4 py-2 text-sm font-medium focus:outline-none"
              >
                {systemFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>

              {(selectedCity !== 'All' ||
                selectedType !== 'All' ||
                selectedSystem !== 'All') && (
                <button
                  onClick={() => {
                    setSelectedCity('All');
                    setSelectedType('All');
                    setSelectedSystem('All');
                  }}
                  className="text-edg-brand-dark text-sm font-bold underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              )}

              <div className="text-text-muted text-sm md:ml-auto">
                Showing {photoReadyProjects.length} photo-ready cases
                {inProgressProjects.length > 0
                  ? ` + ${inProgressProjects.length} in-progress profiles`
                  : ''}{' '}
                of {projects.length} records
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section className="section-md bg-surface">
        <Container>
          {photoReadyProjects.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {photoReadyProjects.map((project, index) => (
                <FadeIn key={project.slug} delay={index * 0.05}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group border-border hover:border-edg-brand block h-full overflow-hidden border bg-white transition-colors"
                  >
                    {/* Image */}
                    <div className="border-border bg-surface-muted relative aspect-[4/3] overflow-hidden border-b">
                      <Image
                        src={project.cardImage}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src =
                            project.galleryImages[0] || project.heroImage;
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                            project.type === 'Commercial'
                              ? 'bg-edg-brand text-edg-dark'
                              : 'text-edg-dark bg-white'
                          } `}
                        >
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-text-muted mb-3 flex items-center gap-1 text-sm">
                        <MapPin className="h-4 w-4 shrink-0" />
                        {project.location}
                      </div>
                      <h3 className="group-hover:text-edg-brand-dark mb-2 text-xl font-bold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary mb-5 line-clamp-2 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.systems.slice(0, 2).map((system) => (
                          <span
                            key={system}
                            className="border-border text-text-muted border px-2.5 py-1 text-xs font-bold tracking-wider uppercase"
                          >
                            {system}
                          </span>
                        ))}
                      </div>
                      <div className="text-edg-brand-dark flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors group-hover:text-black">
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}

          {inProgressProjects.length > 0 && (
            <FadeIn delay={photoReadyProjects.length > 0 ? 0.18 : 0}>
              <div className={photoReadyProjects.length > 0 ? 'mt-14' : ''}>
                <div className="border-edg-brand mb-6 border-l-4 bg-white p-6">
                  <div className="text-edg-brand-dark mb-2 text-xs font-bold tracking-[0.2em] uppercase">
                    Project Profiles In Progress
                  </div>
                  <h2 className="text-text-primary mb-2 text-2xl font-bold">
                    Additional project records without full photo sets yet
                  </h2>
                  <p className="text-text-secondary max-w-3xl text-sm leading-relaxed">
                    Some older projects are still awaiting finished photography
                    or final field notes. Browse the confirmed details below, or
                    contact EDG for comparable completed work.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {inProgressProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group border-border hover:border-edg-brand flex h-full flex-col border bg-white p-5 transition-colors"
                    >
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span
                          className={`px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                            project.type === 'Commercial'
                              ? 'bg-edg-brand text-edg-dark'
                              : 'bg-surface-muted text-edg-dark'
                          } `}
                        >
                          {project.type}
                        </span>
                        <span className="border-border-strong text-text-secondary border px-3 py-1 text-xs font-bold tracking-wider uppercase">
                          Details in progress
                        </span>
                      </div>
                      <div className="text-text-muted mb-3 flex items-center gap-1 text-sm">
                        <MapPin className="h-4 w-4 shrink-0" />
                        {project.location}
                      </div>
                      <h3 className="text-text-primary group-hover:text-edg-brand-dark mb-2 text-lg font-bold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary mb-5 line-clamp-2 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.systems.slice(0, 2).map((system) => (
                          <span
                            key={system}
                            className="border-border text-text-muted border px-2.5 py-1 text-xs font-bold tracking-wider uppercase"
                          >
                            {system}
                          </span>
                        ))}
                      </div>
                      <div className="text-edg-brand-dark mt-5 flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors group-hover:text-black">
                        View Available Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-text-secondary text-lg">
                No projects match your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCity('All');
                  setSelectedType('All');
                  setSelectedSystem('All');
                }}
                className="text-edg-brand-dark mt-4 font-bold underline-offset-4 hover:underline"
              >
                Clear filters to see all projects
              </button>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="border-border bg-surface-dark border-t py-20 text-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-edg-brand mb-4 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                <Check className="h-4 w-4" />
                Site-specific planning
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Find the right system path before you price the project.
              </h2>
              <p className="mb-8 leading-relaxed text-zinc-300">
                EDG can compare pergolas, screens, glass, heat, lighting, and
                outdoor-room packages against the way the site needs to perform.
              </p>
              <TrackedLink
                href={consultationHref}
                conversionName="project_consultation_click"
              >
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark w-full hover:bg-white sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
