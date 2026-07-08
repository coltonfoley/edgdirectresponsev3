'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProjectPhotoPlaceholder } from '@/components/projects/ProjectPhotoPlaceholder';
import { buildContactHref } from '@/lib/contact-links';
import { getAllProjects, type Project } from '@/lib/projects';
import { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Filter, Camera } from 'lucide-react';

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

  const projectContactHref = buildContactHref({
    type: 'fit-review',
    source: 'projects_banner',
  });
  const consultationHref = buildContactHref({
    type: 'consultation',
    source: 'projects_cta',
  });

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* Hero */}
      <Section className="bg-edg-dark py-24 md:py-32">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              className="text-zinc-300"
              items={[{ label: 'Projects' }]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-edg-brand mb-4 inline-block text-sm font-bold tracking-[0.2em] uppercase">
                Our Work
              </span>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {projects.length} Outdoor Living Projects
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-zinc-300">
                See how we help homeowners and businesses across Chicagoland and
                beyond create outdoor spaces they can use year-round.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Notice Banner */}
      <Section className="bg-edg-brand/10 py-6">
        <Container>
          <FadeIn>
            <div className="border-edg-brand/30 flex flex-col items-center gap-4 rounded-none border bg-white/50 p-6 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left dark:bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="bg-edg-brand text-edg-dark flex h-12 w-12 shrink-0 items-center justify-center">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-edg-dark mb-1 text-lg font-bold dark:text-white">
                    Portfolio Details Are Being Updated
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-zinc-300">
                    Finished photo sets are live on select project pages.
                    Several older project profiles still need final photos,
                    solution notes, and results from EDG before they can be
                    treated as full case studies.
                  </p>
                </div>
              </div>
              <Link
                href={projectContactHref}
                className="bg-edg-brand text-edg-dark hover:bg-edg-dark shrink-0 rounded-none px-6 py-3 text-sm font-bold transition-colors hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Filters */}
      <Section className="border-b border-black/5 py-8 dark:border-white/5">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-zinc-300">
                <Filter className="h-4 w-4" />
                <span>Filter by:</span>
              </div>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="focus:border-edg-brand rounded-none border border-black/10 bg-white px-4 py-2 text-sm font-medium focus:outline-none dark:border-white/10 dark:bg-zinc-900"
              >
                <option value="All">All Locations</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="focus:border-edg-brand rounded-none border border-black/10 bg-white px-4 py-2 text-sm font-medium focus:outline-none dark:border-white/10 dark:bg-zinc-900"
              >
                <option value="All">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* System Filter */}
              <select
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
                className="focus:border-edg-brand rounded-none border border-black/10 bg-white px-4 py-2 text-sm font-medium focus:outline-none dark:border-white/10 dark:bg-zinc-900"
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
                  className="text-edg-brand text-sm hover:underline"
                >
                  Clear filters
                </button>
              )}

              <div className="ml-auto text-sm text-gray-500">
                Showing {filteredProjects.length} of {projects.length} projects
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.05}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl dark:bg-zinc-900"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {project.hasRealPhotography ? (
                      <>
                        <Image
                          src={project.cardImage}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src =
                              project.galleryImages[0] || project.heroImage;
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 text-xs font-bold uppercase ${
                              project.type === 'Commercial'
                                ? 'bg-edg-brand text-edg-dark'
                                : 'text-edg-dark bg-white'
                            } `}
                          >
                            {project.type}
                          </span>
                        </div>
                      </>
                    ) : (
                      <ProjectPhotoPlaceholder />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {!project.hasRealPhotography && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span
                          className={`px-3 py-1 text-xs font-bold uppercase ${
                            project.type === 'Commercial'
                              ? 'bg-edg-brand text-edg-dark'
                              : 'text-edg-dark bg-zinc-100 dark:bg-zinc-800 dark:text-white'
                          } `}
                        >
                          {project.type}
                        </span>
                        <span className="border border-zinc-300 px-3 py-1 text-xs font-bold text-zinc-600 uppercase dark:border-zinc-700 dark:text-zinc-300">
                          Details in progress
                        </span>
                      </div>
                    )}
                    <div className="mb-3 flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <h3 className="group-hover:text-edg-brand mb-2 text-xl font-bold transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="text-edg-dark dark:text-edg-brand flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-black dark:group-hover:text-white">
                      View Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-500">
                No projects match your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCity('All');
                  setSelectedType('All');
                  setSelectedSystem('All');
                }}
                className="text-edg-brand mt-4 hover:underline"
              >
                Clear filters to see all projects
              </button>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-edg-dark py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-zinc-300">
                Let&apos;s discuss how we can transform your outdoor space into
                something you&apos;ll use every day.
              </p>
              <Link href={consultationHref}>
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-white"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
