# Integration Example: Using Placeholder Images

## Updating src/lib/projects.ts

Here's how to integrate the placeholder image system with the existing projects data:

### Step 1: Import the helper

```typescript
// At the top of src/lib/projects.ts
import { projectImages, newProjectImages } from './project-images';
```

### Step 2: Update existing projects helper

Replace the existing `projectImages` function with imports from the new module:

```typescript
// REMOVE this old helper:
// function projectImages(slug: string) { ... }

// USE imports from project-images.ts instead
```

### Step 3: Add new projects

Add the 17 new projects to the projects array:

```typescript
export const projects: Project[] = [
  // ... existing 7 projects (keep as-is for now)
  
  // New projects (17 additional)
  {
    slug: 'winnetka-lakeside-retreat',
    title: 'Winnetka Lakeside Retreat',
    location: 'Winnetka, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Motorized Shades', 'Integrated Heating'],
    // Use new image helper
    ...newProjectImages('winnetka-lakeside-retreat', 5),
    description: 'A stunning lakeside property featuring a custom pergola...',
    challenge: 'The homeowners wanted to maximize their lake views...',
    solution: 'We designed a custom louvered pergola with integrated screens...',
    results: [
      'Panoramic lake views preserved',
      'Year-round outdoor usability',
      'Smart home integration',
    ],
    specs: [
      { label: 'Size', value: "18' x 24' (432 sq ft)" },
      { label: 'Timeline', value: '7 weeks from contract to completion' },
      { label: 'Systems', value: 'Louvered Pergola + Motorized Shades' },
      { label: 'Features', value: 'Integrated heating, LED lighting, wind sensors' },
    ],
    relatedProjects: ['lake-forest-pergola', 'glencoe-modern-estate'],
  },
  
  // Add 16 more projects following the same pattern...
];
```

### Step 4: Image path usage in components

The project images can be used in components like this:

```tsx
// components/ProjectCard.tsx
import Image from 'next/image';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Use card image if available, otherwise use hero
  const imageUrl = project.cardImage || project.heroImage;
  
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover"
        />
      </div>
      <h3>{project.title}</h3>
      <p>{project.location}</p>
    </div>
  );
}
```

```tsx
// app/projects/[slug]/page.tsx
import Image from 'next/image';
import { getProject } from '@/lib/projects';

export default async function ProjectPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const project = await getProject(params.slug);
  
  if (!project) return <div>Project not found</div>;
  
  return (
    <div className="project-page">
      {/* Hero Image */}
      <div className="hero">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="hero-content">
          <h1>{project.title}</h1>
          <p>{project.location}</p>
        </div>
      </div>
      
      {/* Gallery */}
      <div className="gallery">
        {project.galleryImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <Image
              src={src}
              alt={`${project.title} - Image ${index + 1}`}
              width={1200}
              height={800}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Next.js Image Configuration

Update `next.config.ts` to allow placeholder domains if using external fallbacks:

```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
```

## TypeScript Type Updates

Ensure the Project interface supports both patterns:

```typescript
// src/lib/projects.ts
export interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  systems: string[];
  // Images
  heroImage: string;
  galleryImages: string[];
  cardImage?: string; // Optional - for project listings
  // ... other fields
}
```

## Migration Checklist

When replacing placeholders with real images:

- [ ] Real image received from client/photographer
- [ ] Image dimensions verified (hero: 1920×1080, gallery: 1200×800)
- [ ] Image optimized (JPEG quality 80-90, progressive encoding)
- [ ] File renamed to match convention (`hero.jpg`, `1.jpg`, `2.jpg`, etc.)
- [ ] File placed in correct directory (`/public/projects/{slug}/`)
- [ ] Old placeholder file backed up (optional)
- [ ] Website tested to verify image displays correctly
- [ ] Project marked as "has real images" in tracking

## Script Commands Reference

Add to `package.json`:

```json
{
  "scripts": {
    "placeholders": "bash scripts/placeholders/manage.sh",
    "placeholders:generate": "npx tsx scripts/placeholders/generate.ts",
    "placeholders:list": "npx tsx scripts/placeholders/generate.ts --list",
    "placeholders:clean": "rm -rf public/projects"
  }
}
```

Usage:

```bash
# Generate all
npm run placeholders generate

# Generate specific project
npm run placeholders project winnetka-lakeside-retreat

# List projects
npm run placeholders list

# Check status
npm run placeholders check

# Show stats
npm run placeholders stats
```
