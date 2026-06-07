# Image Management System

> **Single Source of Truth for ALL Images**
> 
> All images are managed through `src/lib/images.ts`. Never hardcode image paths.

---

## Quick Start

### 1. Import the Registry

```typescript
import * as images from '@/lib/images';
```

### 2. Use Images with Autocomplete

```typescript
// Hero images
<Image src={images.brand.hero.pergola} alt="..." />

// Page-specific images
<Image src={images.pages.pro.blackBlade} alt="..." />

// Pre-built galleries
<ProductGallery items={images.galleries.pergolas} />

// CSS backgrounds
<div style={{ backgroundImage: `url(${images.brand.context.commercial})` }} />
```

### 3. Validate

```bash
npm run validate-images
```

---

## Registry Structure

```typescript
images.
├── brand.              // 15 curated brand images
│   ├── hero.           // Large hero shots
│   │   ├── pergola
│   │   ├── screens
│   │   ├── glass
│   │   ├── lifestyle
│   │   └── showroom
│   ├── detail.         // Feature close-ups
│   │   ├── louver
│   │   ├── screen
│   │   ├── glass
│   │   ├── led
│   │   ├── heater
│   │   └── remote
│   └── context.        // Lifestyle/environment
│       ├── pool
│       ├── lake
│       ├── commercial
│       └── snow
├── projects.           // 7 portfolio projects
│   ├── barringtonHills.{card, hero, gallery[]}
│   ├── barringtonOutdoor.{card, hero, gallery[]}
│   ├── highlandPark.{card, hero, gallery[]}
│   ├── lakeForest.{card, hero, gallery[]}
│   ├── lakeGeneva.{card, hero, gallery[]}
│   ├── libertyville.{card, hero, gallery[]}
│   └── wilmette.{card, hero, gallery[]}
├── pages.              // Page-specific images
│   ├── home.{heroVideo, heroVideoPoster}
│   ├── price.{shadesHero, pergolaGray, whitePergolaPool}
│   ├── guides.{cover, louveredPergolasHero, pergolaVsPatioCover}
│   ├── design.{framelessGlass}
│   ├── pro.{blackBlade}
│   ├── systems.{blackBladePool, grayBladeWhite, whiteLedStrip}
│   ├── serviceAreas.{defaultHero, barringtonPergola1, ...}
│   ├── locations.{defaultHero}
│   └── commercial.{countryClubHero, hotelGlass, ...}
├── galleries.          // Pre-built image arrays
│   ├── pergolas[]      // 4 images for pergola page
│   ├── shades[]        // 4 images for shades page
│   ├── enclosures[]    // 4 images for enclosures page
│   ├── appliances[]    // 3 images for appliances page
│   ├── heating[]       // 3 images for heating page
│   ├── furniture[]     // 2 images for furniture page
│   ├── umbrellas[]     // 2 images for umbrellas page
│   ├── commercial[]    // 3 images for commercial page
│   └── serviceAreas[]  // 4 images for service areas index
└── assets.             // Logos and meta images
    ├── logo
    └── ogImage
```

---

## Usage Patterns

### Basic Image

```typescript
import * as images from '@/lib/images';
import Image from 'next/image';

export default function Page() {
  return (
    <Image 
      src={images.brand.hero.pergola} 
      alt="Motorized pergola installation in Lake Forest, IL"
      width={1200} 
      height={800}
      priority  // For LCP images
    />
  );
}
```

### CSS Background

```typescript
import * as images from '@/lib/images';

export default function Page() {
  return (
    <div 
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${images.brand.context.commercial})` }}
    />
  );
}
```

### Gallery Component

```typescript
import * as images from '@/lib/images';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';

export default function Page() {
  // Use pre-built gallery
  return <ProductGallery items={images.galleries.pergolas} />;
  
  // Or build custom
  return <ProductGallery items={[
    images.brand.hero.pergola,
    images.brand.detail.louver,
    images.pages.pro.blackBlade,
  ]} />;
}
```

### Project Images

```typescript
import * as images from '@/lib/images';

export default function ProjectPage() {
  const project = images.projects.barringtonHills;
  
  return (
    <>
      <Image src={project.hero} alt="Barrington Hills Estate project" />
      {project.gallery.map((img, i) => (
        <Image key={i} src={img} alt={`Gallery image ${i + 1}`} />
      ))}
    </>
  );
}
```

### Dynamic Project Lookup

```typescript
import * as images from '@/lib/images';

export default function Page({ params }: { params: { slug: string } }) {
  const projectImages = images.getProjectImages(params.slug);
  
  if (!projectImages) return null;
  
  return <Image src={projectImages.hero} alt="Project hero" />;
}
```

---

## Adding New Images

### Step 1: Add Image to Public Folder

```bash
# Active images go here:
/public/images/brand/your-new-image.jpg       # Brand images
/public/images/projects/new-project/hero.jpg  # Project images
/public/images/pergolas/your-image.jpg        # Pergola images
/public/images/shades/your-image.jpg          # Shade images
/public/images/videos/your-video.mp4          # Video files
/public/images/misc/your-image.jpg            # One-off images

# Archive (not actively used):
/public/images/_archive/old-stuff.jpg
```

### Step 2: Register in Registry

Edit `src/lib/images.ts`:

```typescript
// Add to appropriate section
export const brand = {
  hero: {
    // ...existing images
    newImage: '/images/brand/your-new-image.jpg', // ← Add here
  }
};

// Or add page-specific image
export const pages = {
  // ...existing pages
  newPage: {
    hero: '/images/new-page/hero.jpg',
  },
};
```

### Step 3: Use It

```typescript
import * as images from '@/lib/images';

<Image src={images.brand.hero.newImage} alt="..." />
```

### Step 4: Validate

```bash
npm run validate-images
```

---

## Image Categories

### Brand Images (15 images)

Core imagery used across the site. Located in `images.brand.*`.

**Hero Images (5):**
- `images.brand.hero.pergola` - Primary pergola hero
- `images.brand.hero.screens` - Primary shades hero  
- `images.brand.hero.glass` - Primary glass hero
- `images.brand.hero.lifestyle` - Evening/entertaining
- `images.brand.hero.showroom` - Design center

**Detail Images (6):**
- `images.brand.detail.louver` - Louver mechanism
- `images.brand.detail.screen` - Screen texture
- `images.brand.detail.glass` - Glass edge detail
- `images.brand.detail.led` - LED lighting
- `images.brand.detail.heater` - Heating element
- `images.brand.detail.remote` - Smart control

**Context Images (4):**
- `images.brand.context.pool` - Poolside residential
- `images.brand.context.lake` - Lake view premium
- `images.brand.context.commercial` - Restaurant/hotel
- `images.brand.context.snow` - Winter/durability

### Project Images (7 projects × 5 images)

Unique images for portfolio case studies.

```typescript
images.projects.barringtonHills  // → { slug, card, hero, gallery[] }
images.projects.barringtonOutdoor
images.projects.highlandPark
images.projects.lakeForest
images.projects.lakeGeneva
images.projects.libertyville
images.projects.wilmette
```

### Pre-Built Galleries

Ready-to-use image arrays for standard pages:

```typescript
images.galleries.pergolas      // 4 images for pergola page
images.galleries.shades        // 4 images for shades page
images.galleries.enclosures    // 4 images for enclosures page
images.galleries.appliances    // 3 images for appliances page
images.galleries.heating       // 3 images for heating page
images.galleries.furniture     // 2 images for furniture page
images.galleries.umbrellas     // 2 images for umbrellas page
images.galleries.commercial    // 3 images for commercial page
images.galleries.serviceAreas  // 4 images for service areas
```

---

## Validation

### Build-Time Validation

Every build automatically validates images:

```bash
npm run build
# Runs: validate-images → generate-gallery-data → next build
```

### Manual Validation

```bash
# Check all referenced images exist
npm run validate-images

# Output:
# ✅ All images validated successfully!
# Or:
# ❌ MISSING FILES (2):
#   ✗ /images/brand/missing-image.jpg
```

### What Gets Validated

- All images in `src/lib/images.ts` exist in `public/`
- No orphaned images in active folders
- Archive folder tracked separately

---

## Folder Structure

### Active Images (✅ Use These)

```
public/images/
├── brand/                 # 15 curated brand images
│   ├── hero-*.jpg         # 5 hero images
│   ├── detail-*.jpg       # 6 detail images
│   └── context-*.jpg      # 4 context images
├── projects/              # 7 projects × 5 images
│   └── {project-name}/
│       ├── card.jpg
│       ├── hero.jpg
│       └── gallery-01/02/03.jpg
├── pergolas/              # Pergola-specific images
├── shades/                # Shade-specific images
├── videos/                # Video files
├── misc/                  # Guide covers, one-off images
└── _archive/              # Old images (to be deleted later)
```

### Archive (⚠️ Don't Use Directly)

```
public/images/_archive/
├── enclosures/           # 26 old enclosure photos
├── pergolas/             # 27 old pergola photos
├── shades/               # 9 old shade photos
├── new-assets/           # 17 unsorted photos
├── optimized/            # 8 processed images
├── hero/                 # Old hero images
├── testimonials/         # Testimonial photos
└── _BY_LOCATION/         # 96 organized-by-page folders
```

**To use an archived image:**
1. Move from `_archive/` to active folder
2. Register in `src/lib/images.ts`
3. Reference via registry

---

## Best Practices

### ✅ DO

- Import images from `@/lib/images`
- Use TypeScript autocomplete
- Register new images before using
- Run `validate-images` before committing
- Keep archive separate from active
- Use semantic names (`hero.pergola`, not `img1`)
- Add descriptive alt text with location

### ❌ DON'T

- Hardcode image paths as strings
- Use images from `_archive/` directly
- Reference images not in registry
- Add images to public without registering
- Use different patterns for same thing

---

## Troubleshooting

### Image Not Showing?

1. Check it exists: `npm run validate-images`
2. Verify import: `import * as images from '@/lib/images'`
3. Check path: `console.log(images.brand.hero.pergola)`

### TypeScript Error?

Make sure you're accessing a valid path:

```typescript
// ✅ Valid - TypeScript will autocomplete
images.brand.hero.pergola

// ❌ Invalid - TypeScript will error
images.brand.hero.nonexistent
```

### Need to Add Many Images?

Use the bulk add pattern:

```typescript
// In src/lib/images.ts
const newGallery = [
  '/images/brand/new-1.jpg',
  '/images/brand/new-2.jpg',
  '/images/brand/new-3.jpg',
] as const;

export const galleries = {
  // ...existing
  newSection: newGallery,
};
```

---

## Type Exports

For advanced use cases:

```typescript
import type { BrandHeroKey, ProjectKey, GalleryKey } from '@/lib/images';

// Use in your types
type HeroImage = BrandHeroKey; // 'pergola' | 'screens' | 'glass' | ...
```

---

## Summary

| Task | Command/Pattern |
|------|-----------------|
| Use image | `import * as images from '@/lib/images'` → `images.brand.hero.pergola` |
| Add image | 1. Copy to public/, 2. Register in images.ts, 3. Validate |
| Validate | `npm run validate-images` |
| Find usage | Search for `images.brand.hero.pergola` (exact key) |

---

**Key Files:**
- Registry: `src/lib/images.ts`
- Validation script: `scripts/validate-images.mjs`
- Documentation: `.agent/patterns/images.md` (this file)
- User guide: `docs/IMAGE-MANAGEMENT.md`
