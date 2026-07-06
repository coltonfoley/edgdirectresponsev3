'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProjectPhotoPlaceholder } from '@/components/projects/ProjectPhotoPlaceholder';
import { projects as csvProjects } from '../../lib/projects-data';
import { getProjectSlug } from '@/lib/project-slug-mapping';
import { getProjectHero, getProjectGallery } from '@/lib/images';
import { hasRealProjectPhotography } from '@/lib/projects';
import { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Filter, Camera } from 'lucide-react';

// Extract unique cities and types for filters
const cities = Array.from(new Set(csvProjects.map(p => p.city))).sort();
const types = Array.from(new Set(csvProjects.map(p => p.projectType))).sort();

// Transform CSV data to display format
const projects = csvProjects.map(p => {
  const imageSlug = getProjectSlug(p.id);
  const hasRealPhotography = hasRealProjectPhotography(p.id);
  // Special handling for projects with custom named files
  const image = p.id === 'carmines' 
    ? `/projects/${imageSlug}/carmines-hero.jpg`
    : p.id === 'wade'
    ? `/projects/${imageSlug}/wade-hero.jpg`
    : p.id === 'jake-everly-residence'
    ? `/projects/${imageSlug}/jake-hero.jpg`
    : p.id === 'greco'
    ? `/projects/${imageSlug}/greco-hero.png`
    : p.id === 'karp'
    ? `/projects/${imageSlug}/karp-hero.jpg`
    : getProjectHero(imageSlug);
  const fallbackImage = p.id === 'carmines'
    ? `/projects/${imageSlug}/carmines-patio-city-view.jpg`
    : p.id === 'wade'
    ? `/projects/${imageSlug}/wade-exterior-wide.jpg`
    : p.id === 'jake-everly-residence'
    ? `/projects/${imageSlug}/jake-exterior-wide.jpg`
    : p.id === 'greco'
    ? `/projects/${imageSlug}/greco-pergola-structure.jpg`
    : p.id === 'karp'
    ? `/projects/${imageSlug}/karp-wood-grain-louvers.jpg`
    : getProjectGallery(imageSlug, 3)[0];
  return {
    id: p.id,
    title: p.name,
    location: `${p.city}, ${p.state}`,
    city: p.city,
    type: p.projectType,
    description: p.description,
    image,
    fallbackImage,
    hasRealPhotography,
  };
});

export function ProjectsContent() {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const cityMatch = selectedCity === 'All' || project.city === selectedCity;
      const typeMatch = selectedType === 'All' || project.type === selectedType;
      return cityMatch && typeMatch;
    });
  }, [selectedCity, selectedType]);

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* Hero */}
      <Section className="bg-edg-dark py-24 md:py-32">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              className="text-zinc-300"
              items={[
                { label: 'Projects' },
              ]}
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
                See how we help homeowners and businesses across Chicagoland and beyond create 
                outdoor spaces they can use year-round.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Notice Banner */}
      <Section className="bg-edg-brand/10 py-6">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center gap-4 rounded-none border border-edg-brand/30 bg-white/50 p-6 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left dark:bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-edg-brand text-edg-dark">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-edg-dark dark:text-white">
                    Portfolio Details Are Being Updated
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-zinc-300">
                    Finished photo sets are live on select project pages. Several older project profiles still need final photos, solution notes, and results from EDG before they can be treated as full case studies.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="shrink-0 rounded-none bg-edg-brand px-6 py-3 text-sm font-bold text-edg-dark transition-colors hover:bg-edg-dark hover:text-white"
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
                className="rounded-none border border-black/10 bg-white px-4 py-2 text-sm font-medium focus:border-edg-brand focus:outline-none dark:border-white/10 dark:bg-zinc-900"
              >
                <option value="All">All Locations</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="rounded-none border border-black/10 bg-white px-4 py-2 text-sm font-medium focus:border-edg-brand focus:outline-none dark:border-white/10 dark:bg-zinc-900"
              >
                <option value="All">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {(selectedCity !== 'All' || selectedType !== 'All') && (
                <button
                  onClick={() => { setSelectedCity('All'); setSelectedType('All'); }}
                  className="text-sm text-edg-brand hover:underline"
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
              <FadeIn key={project.id} delay={index * 0.05}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group block overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl dark:bg-zinc-900"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {project.hasRealPhotography ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback to 1.jpg if hero.jpg doesn't exist
                            const img = e.target as HTMLImageElement;
                            img.src = project.fallbackImage;
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`
                            px-3 py-1 text-xs font-bold uppercase
                            ${project.type === 'Commercial'
                              ? 'bg-edg-brand text-edg-dark'
                              : 'bg-white text-edg-dark'}
                          `}>
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
                        <span className={`
                          px-3 py-1 text-xs font-bold uppercase
                          ${project.type === 'Commercial'
                            ? 'bg-edg-brand text-edg-dark'
                            : 'bg-zinc-100 text-edg-dark dark:bg-zinc-800 dark:text-white'}
                        `}>
                          {project.type}
                        </span>
                        <span className="border border-zinc-300 px-3 py-1 text-xs font-bold uppercase text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                          Details in progress
                        </span>
                      </div>
                    )}
                    <div className="mb-3 flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-edg-dark transition-colors group-hover:text-black dark:text-edg-brand dark:group-hover:text-white">
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
              <p className="text-lg text-gray-500">No projects match your filters.</p>
              <button
                onClick={() => { setSelectedCity('All'); setSelectedType('All'); }}
                className="mt-4 text-edg-brand hover:underline"
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
                Let&apos;s discuss how we can transform your outdoor space into something you&apos;ll use every day.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-edg-brand text-edg-dark hover:bg-white">
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
