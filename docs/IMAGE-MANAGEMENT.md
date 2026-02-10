# Image Management Guide

> **Problem:** Images were scattered across the codebase with hardcoded paths, making it impossible to know what images existed or where they were used.
>
> **Solution:** A single source of truth in `src/lib/images.ts` - all images in one place with TypeScript autocomplete.

---

## Quick Start

### 1. Import the image registry

```typescript
import * as images from '@/lib/images';
```

### 2. Use images with autocomplete

```typescript
// ✅ GOOD: TypeScript autocomplete, type-safe
<Image src={images.brand.hero.pergola} alt="..." />

// ❌ BAD: String could have typos, hard to find usage
<Image src="/images/brand/hero-pergola.jpg" alt="..." />
```

---

## Image Registry Structure

```typescript
images.
├── brand.              // Core brand imagery (15 images)
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
├── projects.           // Portfolio case studies
│   ├── barringtonHills.{card, hero, gallery[]}
│   ├── barringtonOutdoor.{card, hero, gallery[]}
│   ├── highlandPark.{card, hero, gallery[]}
│   ├── lakeForest.{card, hero, gallery[]}
│   ├── lakeGeneva.{card, hero, gallery[]}
│   ├── libertyville.{card, hero, gallery[]}
│   └── wilmette.{card, hero, gallery[]}
├── pages.              // One-off page images
│   ├── home.{heroVideo, heroVideoPoster}
│   ├── price.{shadesHero, pergolaGray, whitePergolaPool}
│   ├── guides.{cover, louveredPergolasHero, ...}
│   ├── design.{framelessGlass}
│   ├── pro.{blackBlade}
│   ├── systems.{blackBladePool, grayBladeWhite, whiteLedStrip}
│   ├── serviceAreas.{defaultHero, barringtonPergola1, ...}
│   └── locations.{defaultHero}
├── galleries.          // Pre-built image arrays
│   ├── pergolas[]      // 4 images for pergola page
│   ├── shades[]        // 4 images for shades page
│   ├── enclosures[]    // 4 images for enclosures page
│   ├── appliances[]    // 3 images for appliances page
│   ├── heating[]       // 3 images for heating page
│   ├── furniture[]     // 2 images for furniture page
│   ├── umbrellas[]     // 2 images for umbrellas page
│   ├── commercial[]    // 3 images for commercial page
│   └── serviceAreas[]  // 4 images for service areas
└── assets.             // Logos and meta images
    ├── logo
    └── ogImage
```

---

## Usage Examples

### Basic Image

```tsx
import * as images from '@/lib/images';
import Image from 'next/image';

export default function Page() {
  return (
    <Image 
      src={images.brand.hero.pergola} 
      alt="Pergola installation" 
      width={1200} 
      height={800} 
    />
  );
}
```

### CSS Background

```tsx
import * as images from '@/lib/images';

export default function Page() {
  return (
    <div 
      className="bg-cover"
      style={{ backgroundImage: `url(${images.brand.context.commercial})` }}
    />
  );
}
```

### Gallery Component

```tsx
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

```tsx
import * as images from '@/lib/images';

export default function ProjectPage() {
  const project = images.projects.barringtonHills;
  
  return (
    <>
      <Image src={project.hero} alt="..." />
      {project.gallery.map((img, i) => (
        <Image key={i} src={img} alt={`Gallery ${i}`} />
      ))}
    </>
  );
}
```

### Dynamic Project Lookup

```tsx
import * as images from '@/lib/images';

export default function Page({ params }: { params: { slug: string } }) {
  const projectImages = images.getProjectImages(params.slug);
  
  if (!projectImages) return null;
  
  return <Image src={projectImages.hero} alt="..." />;
}
```

---

## Adding New Images

### Step 1: Add image to public folder

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

### Step 2: Register in `src/lib/images.ts`

```typescript
// In the appropriate section:
export const brand = {
  hero: {
    // ...existing
    newImage: '/images/brand/your-new-image.jpg', // ← Add here
  }
};
```

### Step 3: Use it

```tsx
import * as images from '@/lib/images';

<Image src={images.brand.hero.newImage} alt="..." />
```

### Step 4: Validate

```bash
npm run validate-images
```

---

## Validation

Check that all referenced images exist:

```bash
# Check for missing images
npm run validate-images

# Output example:
# ✅ All images validated successfully!
# 
# Or if there are issues:
# ❌ MISSING FILES (2):
#   ✗ /images/brand/new-missing-image.jpg
```

Add to your CI/CD:

```json
// package.json
{
  "scripts": {
    "validate-images": "node scripts/validate-images.mjs",
    "build": "npm run validate-images && next build"
  }
}
```

---

## Migration from Hardcoded Paths

### Automatic Migration

```bash
# Preview what will change
node scripts/migrate-images.mjs

# Apply changes (commit first!)
node scripts/migrate-images.mjs --apply
```

### Manual Migration

Replace hardcoded strings with registry references:

```typescript
// BEFORE
<Image src="/images/brand/hero-pergola.jpg" />

// AFTER  
import * as images from '@/lib/images';
<Image src={images.brand.hero.pergola} />
```

For CSS backgrounds:

```typescript
// BEFORE
style={{ backgroundImage: "url('/images/brand/hero-pergola.jpg')" }}

// AFTER
import * as images from '@/lib/images';
style={{ backgroundImage: `url(${images.brand.hero.pergola})` }}
```

---

## Folder Structure

### Clean Folder Structure

```
public/images/
├── brand/          # 15 curated brand images
├── projects/       # 7 project galleries (35 images)
├── pergolas/       # Pergola-specific images
├── shades/         # Shade-specific images
├── videos/         # Video files
├── misc/           # Guide covers, one-offs
└── _archive/       # 101 old images (101MB - delete when ready)
```

### Active Images (✅ Use these)

```
public/
├── logo.png                    # Site logo
├── og-image.jpg               # Social share image
└── images/
    ├── brand/                 # 15 curated brand images
    │   ├── hero-*.jpg
    │   ├── detail-*.jpg
    │   └── context-*.jpg
    ├── projects/              # 7 projects × 5 images
    │   └── {project-name}/
    │       ├── card.jpg
    │       ├── hero.jpg
    │       └── gallery-0{1-3}.jpg
    ├── pergolas/              # Pergola-specific images
    ├── shades/                # Shade-specific images
    ├── videos/                # Video files
    └── misc/                  # Guide covers, one-offs
```

### Archive (⚠️ Don't use directly)

```
public/images/_archive/
├── enclosures/           # Old enclosure photos
├── pergolas/             # Old pergola photos
├── shades/               # Old shade photos
├── new-assets/           # Unsorted new photos
├── optimized/            # Processed images
├── hero/                 # Old hero images
├── testimonials/         # Testimonial photos
└── _BY_LOCATION/         # Organized by page/location
```

**To use an archived image:**
1. Move it from `_archive/` to active folder (`brand/` or `projects/`)
2. Register it in `src/lib/images.ts`
3. Reference it via the registry

---

## Best Practices

### ✅ DO

- Import images from `@/lib/images`
- Use TypeScript autocomplete
- Register new images in the registry before using
- Run `validate-images` before committing
- Keep archive separate from active images
- Use semantic names (`hero.pergola`, not `img1`)

### ❌ DON'T

- Hardcode image paths as strings
- Use images from `_archive/` directly
- Reference images not in the registry
- Add images to public without registering
- Use different patterns for the same thing

---

## Troubleshooting

### Image not showing?

1. Check it exists: `npm run validate-images`
2. Verify import: `import * as images from '@/lib/images'`
3. Check path: `console.log(images.brand.hero.pergola)`

### TypeScript error?

Make sure you're accessing a valid path:

```typescript
// ✅ Valid
images.brand.hero.pergola

// ❌ Invalid - TypeScript will error
images.brand.hero.nonexistent
```

### Need to add many images?

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

| Task | Command |
|------|---------|
| Use image | `import * as images from '@/lib/images'` → `images.brand.hero.pergola` |
| Add image | 1. Copy to public/, 2. Register in `src/lib/images.ts`, 3. Validate |
| Validate | `npm run validate-images` |
| Migrate | `node scripts/migrate-images.mjs --apply` |
| Find usage | Search for `images.brand.hero.pergola` (exact key) |

---

## Questions?

- Registry file: `src/lib/images.ts`
- Validation script: `scripts/validate-images.mjs`
- Migration script: `scripts/migrate-images.mjs`
- This guide: `docs/IMAGE-MANAGEMENT.md`
