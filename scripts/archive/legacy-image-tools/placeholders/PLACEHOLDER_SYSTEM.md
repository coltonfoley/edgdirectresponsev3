# EDG PatioShade Placeholder Image System

## Overview

This system manages placeholder images for 24 projects displayed on the EDG PatioShade website. It generates branded placeholder images using the EDG color palette until real project photos become available.

## Quick Start

```bash
# Generate all placeholder images
npx tsx scripts/placeholders/generate.ts

# List all projects without generating
npx tsx scripts/placeholders/generate.ts --list

# Generate for a specific project only
npx tsx scripts/placeholders/generate.ts --project lake-forest-pergola

# Clean and regenerate all images
npx tsx scripts/placeholders/generate.ts --clean
```

## Directory Structure

```
public/
├── images/
│   └── projects/           # Legacy project images (7 existing projects)
│       ├── barrington-hills-estate/
│       ├── barrington-outdoor-room/
│       ├── highland-park-builder/
│       ├── lake-forest-pergola/
│       ├── lake-geneva-restaurant/
│       ├── libertyville-shade-system/
│       └── wilmette-country-club/
└── projects/               # NEW: Placeholder images for 24 projects
    ├── lake-forest-pergola/
    │   ├── hero.jpg        # 1920×1080 hero image
    │   ├── 1.jpg           # 1200×800 gallery image
    │   ├── 2.jpg           # 1200×800 gallery image
    │   ├── 3.jpg           # 1200×800 gallery image
    │   └── 4.jpg           # 1200×800 gallery image
    ├── barrington-outdoor-room/
    │   ├── hero.jpg
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── 3.jpg
    │   └── 4.jpg
    └── ... (21 more project directories)
```

## Naming Convention

| File | Purpose | Dimensions | Required |
|------|---------|------------|----------|
| `hero.jpg` | Project detail page hero | 1920×1080 | Yes |
| `1.jpg` | Gallery image 1 | 1200×800 | Yes |
| `2.jpg` | Gallery image 2 | 1200×800 | Yes |
| `3.jpg` | Gallery image 3 | 1200×800 | Yes |
| `4.jpg` | Gallery image 4 | 1200×800 | Optional |
| `5.jpg` | Gallery image 5 | 1200×800 | Optional |

Each project has 3-5 gallery images (configurable in `data/projects-data.ts`).

## Image Reference in Code

### Current Pattern (Legacy - 7 projects)

```typescript
// In src/lib/projects.ts
const img = {
  lakeForest: projectImages('lake-forest-pergola'),
  // ...
};

function projectImages(slug: string) {
  const base = `/images/projects/${slug}`;
  return {
    card: `${base}/card.jpg`,
    hero: `${base}/hero.jpg`,
    gallery: [`${base}/gallery-01.jpg`, `${base}/gallery-02.jpg`, `${base}/gallery-03.jpg`],
  };
}
```

### New Pattern (24 projects)

```typescript
// Helper function for new project paths
function newProjectImages(slug: string, imageCount: number = 4) {
  const base = `/projects/${slug}`;
  return {
    hero: `${base}/hero.jpg`,
    gallery: Array.from({ length: imageCount }, (_, i) => `${base}/${i + 1}.jpg`),
  };
}

// Usage
const img = {
  winnetka: newProjectImages('winnetka-lakeside-retreat', 5),
};
```

## Migration Strategy

### Phase 1: Placeholder Generation (Current)
- Generate placeholders for all 24 projects
- Update `src/lib/projects.ts` to include new projects
- Keep legacy 7 projects using `/images/projects/` paths

### Phase 2: Real Image Replacement
When real images become available:

```bash
# Option 1: Direct replacement (same filename)
# Simply replace the placeholder file with the real image
cp /path/to/real-photo.jpg public/projects/lake-forest-pergola/hero.jpg

# Option 2: New filename + path update
# Add new image and update projects.ts reference
```

### Phase 3: Legacy Cleanup
After all projects have real images:
- Remove placeholder generation script
- Archive or remove `/public/images/_archive/`
- Consolidate all project images under `/public/projects/`

## Project Data Structure

Projects are defined in `data/projects-data.ts`:

```typescript
export interface ProjectDefinition {
  slug: string;           // URL-friendly identifier
  title: string;          // Display name
  location: string;       // "City, State"
  type: 'Residential' | 'Commercial' | 'Builder Project';
  systems: string[];      // ['Louvered Pergola', 'Motorized Shades']
  description: string;    // Short description
  imageCount: number;     // 3-5 gallery images
}
```

## Available Projects (24 Total)

### Residential (14)
1. lake-forest-pergola
2. barrington-outdoor-room
3. libertyville-shade-system
4. barrington-hills-estate
5. winnetka-lakeside-retreat
6. northbrook-family-entertaining
7. glencoe-modern-estate
8. kenilworth-heritage-home
9. evanston-rooftop-terrace
10. deerfield-backyard-oasis
11. hinsdale-garden-room
12. oak-park-historic-renovation
13. riverside-outdoor-kitchen
14. geneva-lake-house
15. naperville-pool-pavilion
16. wheaton-outdoor-dining
17. elmhurst-entertainment-space
18. downers-grove-pergola
19. lombard-shade-solution

### Commercial (5)
1. lake-geneva-restaurant
2. wilmette-country-club
3. st-charles-winery
4. schaumburg-office-complex
5. arlington-heights-hotel
6. palatine-golf-club
7. buffalo-grove-brewery
8. highland-park-art-gallery

### Builder Projects (3)
1. highland-park-builder
2. lake-forest-estate-builder
3. winnetka-modern-builder
4. glencoe-renovation-builder

*Note: Some projects already exist in the legacy system*

## Configuration

Edit `config.ts` to customize:

- Image quality (hero/gallery JPEG quality)
- Brand colors
- Image dimensions
- External fallback service

## Mapping File

After generation, `project-image-mapping.json` is created:

```json
{
  "generatedAt": "2026-02-18T10:00:00.000Z",
  "totalProjects": 24,
  "totalImages": 108,
  "basePath": "/projects",
  "projects": [
    {
      "slug": "lake-forest-pergola",
      "title": "Lakefront Pergola & Shades",
      "images": {
        "hero": "/projects/lake-forest-pergola/hero.jpg",
        "gallery": [
          "/projects/lake-forest-pergola/1.jpg",
          "/projects/lake-forest-pergola/2.jpg",
          "/projects/lake-forest-pergola/3.jpg",
          "/projects/lake-forest-pergola/4.jpg"
        ]
      }
    }
  ]
}
```

## Troubleshooting

### Sharp Installation Issues
```bash
# If sharp fails to load, reinstall:
npm uninstall sharp
npm install sharp
```

### TypeScript Execution
```bash
# Ensure tsx is available
npm install -g tsx
# or
npx tsx scripts/placeholders/generate.ts
```

### Permission Errors
```bash
# Fix directory permissions
chmod -R 755 public/projects
```

## Brand Colors Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Blue | `#1a2744` | Primary background |
| Blue | `#2c3e50` | Secondary background |
| Gold | `#c9a961` | Accents, text highlights |
| Light Gold | `#e0c080` | Subtle accents |
| White | `#ffffff` | Primary text |

## External Placeholder Services

If local generation fails, these services can be used:

- **Picsum**: `https://picsum.photos/seed/{seed}/{width}/{height}`
- **Placeholder.com**: `https://via.placeholder.com/{width}x{height}/{bg}/{text}?text={label}`

## Future Enhancements

- [ ] WebP generation alongside JPG
- [ ] Responsive image srcset generation
- [ ] Blur hash generation for lazy loading
- [ ] Integration with CMS for dynamic image management
- [ ] Automatic image optimization pipeline
