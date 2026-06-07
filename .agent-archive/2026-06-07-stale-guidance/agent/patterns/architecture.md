# Architecture Patterns

> **Server/Client component patterns and file organization**

---

## Core Principle: Server Components Default

**Always use Server Components unless you need client-side interactivity.**

### Why?
- Better SEO (can export metadata)
- Smaller bundle size
- Faster initial load
- Access to server-side data

---

## Pattern 1: Server Component Page with Client Islands

### Structure

```
src/app/service-areas/wilmette-il/
├── page.tsx              # Server Component (metadata + layout)
├── layout.tsx            # Optional: shared layout
└── components/
    ├── HeroSection.tsx   # Server Component (static)
    ├── ContentSection.tsx # Server Component (static)
    └── ContactFormClient.tsx # Client Component (interactive)
```

### Example

```typescript
// page.tsx - Server Component
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { HeroSection } from './components/HeroSection';
import { ContentSection } from './components/ContentSection';
import { ContactFormClient } from './components/ContactFormClient';

export const metadata: Metadata = {
  title: 'Wilmette IL Pergolas | EDG Patio & Shade',
  description: '...',
  alternates: { canonical: '/service-areas/wilmette-il' },
};

export default function WilmettePage() {
  return (
    <main>
      <HeroSection />
      <ContentSection />
      <section className="py-16">
        <Container>
          <ContactFormClient source="wilmette" />
        </Container>
      </section>
    </main>
  );
}
```

```typescript
// components/ContactFormClient.tsx - Client Component
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactFormClient({ source }: { source: string }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

---

## Pattern 2: When to Use 'use client'

### Use 'use client' when you need:

- React hooks (`useState`, `useEffect`, `useRef`)
- Browser APIs (`window`, `document`, `localStorage`)
- Event handlers that require state
- Third-party libraries that need browser context

### File Naming Convention

```typescript
// Client components get 'Client' suffix
ContactFormClient.tsx
ImageGalleryClient.tsx
MapComponentClient.tsx
TabNavigationClient.tsx
```

### Anti-Pattern to Avoid

```typescript
// ❌ WRONG - 'use client' in page.tsx
'use client';

export const metadata = { title: 'Page' }; // WON'T WORK!

export default function Page() {
  return <div>Content</div>;
}
```

---

## Pattern 3: Passing Data to Client Components

### Server → Client Data Flow

```typescript
// page.tsx - Fetch data server-side
import { getProjectsByLocation } from '@/lib/projects';
import { ProjectGalleryClient } from './components/ProjectGalleryClient';

export default async function WilmettePage() {
  // Fetch on server
  const projects = await getProjectsByLocation('wilmette');
  
  return (
    <main>
      {/* Pass as props to client component */}
      <ProjectGalleryClient projects={projects} />
    </main>
  );
}
```

```typescript
// components/ProjectGalleryClient.tsx
'use client';

import { useState } from 'react';

export function ProjectGalleryClient({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  
  return (
    <div>
      {projects.map(p => (
        <button key={p.id} onClick={() => setSelected(p)}>
          {p.title}
        </button>
      ))}
    </div>
  );
}
```

---

## Pattern 4: Shared Client Components

### Location for Reusable Client Components

```
src/components/
├── ui/                    # UI primitives (mostly Server)
│   ├── Button.tsx
│   ├── Container.tsx
│   └── Breadcrumb.tsx
├── features/              # Feature components (mixed)
│   ├── ContactForm/
│   │   └── ContactFormClient.tsx
│   └── ImageGallery/
│       └── ImageGalleryClient.tsx
└── forms/                 # Form components (Client)
    ├── LeadFormClient.tsx
    └── NewsletterFormClient.tsx
```

---

## Pattern 5: Data Fetching Patterns

### Server Component Data Fetching

```typescript
// app/service-areas/wilmette-il/page.tsx
import { getServiceAreaData } from '@/lib/data';

export default async function WilmettePage() {
  // Fetch directly in Server Component
  const data = await getServiceAreaData('wilmette');
  
  return <PageContent data={data} />;
}
```

### Client Component Data Fetching

```typescript
// components/ProjectGalleryClient.tsx
'use client';

import useSWR from 'swr';

export function ProjectGalleryClient({ location }: { location: string }) {
  // Fetch on client
  const { data, error } = useSWR(
    `/api/projects?location=${location}`,
    fetcher
  );
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  
  return <Gallery projects={data} />;
}
```

---

## Pattern 6: Page Type Templates

### Service Area Hub Page Structure

```typescript
// app/service-areas/[area]/page.tsx
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Neighborhoods } from '@/components/sections/Neighborhoods';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { ContactFormClient } from '@/components/forms/ContactFormClient';

export const metadata: Metadata = {
  title: '...',
  description: '...',
  alternates: { canonical: '/service-areas/[area]' },
};

export default function ServiceAreaPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Neighborhoods />      {/* 4 neighborhoods */}
      <FAQ />                {/* 3+ questions */}
      <ContactCTA>
        <ContactFormClient source="[area]" />
      </ContactCTA>
    </main>
  );
}
```

### Project Page Structure

```typescript
// app/projects/[slug]/page.tsx
import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import { ProjectHero } from '@/components/sections/ProjectHero';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { ProjectStory } from '@/components/sections/ProjectStory';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  return {
    title: `${project.title} | EDG Project`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  return (
    <main>
      <ProjectHero project={project} />
      <ProjectGallery images={project.images} />
      <ProjectStory project={project} />
    </main>
  );
}
```

---

## File Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Page | `page.tsx` | `app/service-areas/page.tsx` |
| Layout | `layout.tsx` | `app/service-areas/layout.tsx` |
| Server Component | `[Name].tsx` | `HeroSection.tsx` |
| Client Component | `[Name]Client.tsx` | `ContactFormClient.tsx` |
| Section | `[Name]Section.tsx` | `FeaturesSection.tsx` |
| Helper | `[name].ts` | `utils.ts` |

---

## Quick Decision Tree

```
Creating a new component?
│
├─ Does it need React hooks (useState, useEffect)?
│  ├─ YES → 'use client' + [Name]Client.tsx
│  └─ NO  → Server Component + [Name].tsx
│
├─ Does it need browser APIs?
│  ├─ YES → 'use client' + [Name]Client.tsx
│  └─ NO  → Server Component
│
├─ Is it a page (page.tsx)?
│  ├─ YES → MUST be Server Component (no 'use client')
│  │        Move interactivity to child Client Components
│  └─ NO  → Evaluate above
│
└─ Is it interactive but page needs SEO?
   └─ YES → Page stays Server Component
            Extract interactive parts to [Name]Client.tsx
```
