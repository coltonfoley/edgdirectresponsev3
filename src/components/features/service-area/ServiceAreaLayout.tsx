import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Snowflake,
  Home,
  FileCheck,
  Wind,
  Sun,
} from 'lucide-react';

interface Challenge {
  title: string;
  description: string;
  icon: 'snowflake' | 'home' | 'file-check' | 'wind' | 'sun';
}

interface ServiceAreaLink {
  title: string;
  href: string;
}

interface ServiceAreaLayoutProps {
  location: string;
  state: string;
  zipCodes: string[];
  tagline: string;
  heroImage?: string;
  description: string;
  challenges: Challenge[];
  links: ServiceAreaLink[];
}

const IconMap = {
  snowflake: Snowflake,
  home: Home,
  'file-check': FileCheck,
  wind: Wind,
  sun: Sun,
};

export function ServiceAreaLayout({
  location,
  state,
  tagline,
  heroImage,
  description,
  challenges,
  links,
  zipCodes,
}: ServiceAreaLayoutProps) {
  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* Hero Section */}
      <Section className="border-b border-black/5 bg-white pt-32 pb-20 dark:border-white/10 dark:bg-black">
        <Container>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 space-y-6">
              <div className="bg-edg-brand/10 text-edg-brand-text inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                <MapPin className="h-4 w-4" />
                Serving {location} ({zipCodes.join(', ')})
              </div>
              <h1 className="text-foreground text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                {tagline}
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg">Get a {location} Quote</Button>
                </Link>
                <Link href="tel:+18155810138">
                  <Button variant="secondary" size="lg">
                    Call (815) 581-0138
                  </Button>
                </Link>
              </div>
            </div>
            {/* Visual Placeholder for Hero - In real app we use Next Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 md:w-1/2 dark:bg-zinc-800">
              <div className="text-muted-foreground absolute inset-0 flex items-center justify-center">
                {heroImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={heroImage}
                    alt={`${location} Outdoor Living`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>Map / Hero Image of {location}</span>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Local Challenges Section */}
      <Section className="bg-edg-light/50 dark:bg-edg-dark/50 py-20">
        <Container>
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Building in {location}</h2>
            <p className="text-muted-foreground max-w-2xl">
              Every neighborhood has unique challenges. We've optimized our
              automated systems to handle {location}'s specific zoning and
              weather demands.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {challenges.map((challenge, idx) => {
              const Icon = IconMap[challenge.icon] || Home;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-zinc-900"
                >
                  <div className="bg-edg-brand/20 text-edg-brand-text mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{challenge.title}</h3>
                  <p className="text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Internal Linking / Cluster Navigation */}
      <Section className="border-t border-black/5 bg-white py-20 dark:border-white/10 dark:bg-black">
        <Container>
          <div className="rounded-3xl bg-zinc-50 p-8 md:p-12 dark:bg-zinc-900">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              More Resources for {location} Homeowners
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {links.map((link, idx) => (
                <Link key={idx} href={link.href} className="group block h-full">
                  <div className="hover:border-edg-brand/50 flex h-full flex-col justify-between rounded-xl border border-black/5 bg-white p-6 transition-colors dark:border-white/10 dark:bg-black">
                    <span className="group-hover:text-edg-brand-text text-lg font-semibold transition-colors">
                      {link.title}
                    </span>
                    <div className="text-muted-foreground group-hover:text-edg-brand-text mt-4 flex items-center text-sm font-medium">
                      Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
