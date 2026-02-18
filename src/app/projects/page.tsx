'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { projects as csvProjects } from '../../lib/projects-data';
import { getProjectSlug } from '@/lib/project-slug-mapping';
import { useState, useMemo } from 'react';
import { MapPin, ArrowRight, Filter } from 'lucide-react';

// Extract unique cities and types for filters
const cities = Array.from(new Set(csvProjects.map(p => p.city))).sort();
const types = Array.from(new Set(csvProjects.map(p => p.projectType))).sort();

// Transform CSV data to display format
const projects = csvProjects.map(p => {
  const imageSlug = getProjectSlug(p.id);
  return {
    id: p.id,
    title: p.name,
    location: `${p.city}, ${p.state}`,
    city: p.city,
    type: p.projectType,
    description: p.description,
    image: `/projects/${imageSlug}/hero.jpg`,
    fallbackImage: `/projects/${imageSlug}/1.jpg`,
  };
});

export default function ProjectsPage() {
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
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-edg-brand mb-4 inline-block text-sm font-bold tracking-[0.2em] uppercase">
                Our Work
              </span>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                24 Outdoor Living Transformations
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                See how we help homeowners and businesses across Chicagoland and beyond create 
                outdoor spaces they can use year-round.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Filters */}
      <Section className="border-b border-black/5 py-8 dark:border-white/5">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
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
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to 1.jpg if hero.jpg doesn't exist
                        const img = e.target as HTMLImageElement;
                        img.src = project.fallbackImage;
                      }}
                    />
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`
                        px-3 py-1 text-xs font-bold uppercase tracking-wide
                        ${project.type === 'Commercial' 
                          ? 'bg-edg-brand text-edg-dark' 
                          : 'bg-white text-edg-dark'}
                      `}>
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-edg-brand">
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
              <p className="mb-8 text-gray-400">
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
