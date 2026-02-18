# Page Images System - User Guide

## Overview
The Page Images system allows you to easily manage and swap photos across the EDG website from Sanity CMS. No code changes required!

## Quick Start

### 1. Accessing Sanity Studio
Go to `/studio` on your website (e.g., `https://edgpatioshade.com/studio`)

### 2. Creating a New Image Slot
1. In Sanity Studio, click **"Page Image"** in the sidebar
2. Click **"Create new Page Image"**
3. Fill in the fields:
   - **Image Key**: Unique identifier (e.g., `homepage-hero-bg`, `pergolas-card-01`)
   - **Title**: Human-readable name
   - **Description**: Where it appears on the site
   - **Image**: Upload the photo
   - **Category**: Organize by section (Homepage, Systems-Pergolas, etc.)
   - **Alt Text**: Important for SEO and accessibility
4. Click **Publish**

### 3. Swapping an Existing Image
1. Find the image in **Page Images** list
2. Click on it to edit
3. Replace the image file
4. Click **Publish**
5. Changes appear immediately on the site

## Image Key Naming Convention

Use consistent naming for easy management:

```
[page]-[section]-[purpose]

Examples:
- homepage-hero-bg
- homepage-systems-pergolas
- pergolas-hero-main
- pergolas-card-01
- shades-hero-main
- commercial-hero-bg
- landing-design-hero
```

## Categories Explained

| Category | Used For |
|----------|----------|
| Homepage | Hero, systems cards, CTA sections |
| Systems-Pergolas | Pergola page images |
| Systems-Shades | Shades page images |
| Systems-Enclosures | Glass enclosures page |
| Systems-Appliances | Outdoor appliances page |
| Landing-Pages | Design, Price, Pro, Commercial landing pages |
| Commercial | Hotel pergolas, other commercial pages |
| Projects | Project showcase images |
| Gallery | Gallery page images |
| UI/Components | Shared UI elements |

## Migration from Hardcoded Images

### Step 1: Identify Images to Migrate
Look at `/src/lib/images.ts` for the current image registry. Key images to migrate:

```typescript
// Current hardcoded images
images.systems.pergolas.hero
images.systems.pergolas.blackRBlade01
images.systems.shades.hero
images.brand.commercial.restaurant
```

### Step 2: Create PageImage Documents
For each image, create a PageImage in Sanity:

| Current Path | New Key | Category |
|--------------|---------|----------|
| `/images/pergolas/pergola-hero.jpg` | `pergolas-hero-main` | systems-pergolas |
| `/images/pergolas/residential-black-r-blade-01.jpg` | `pergolas-black-01` | systems-pergolas |
| `/images/shades/shades-hero.jpg` | `shades-hero-main` | systems-shades |
| `/images/commercial-restaurant-patio-enclosure.jpg` | `commercial-restaurant` | commercial |

### Step 3: Update Components
Replace hardcoded images with `PageImage` component:

**Before (Hardcoded):**
```tsx
import { images } from '@/lib/images';

<div
  className="bg-cover"
  style={{ backgroundImage: `url(${images.systems.pergolas.hero})` }}
/>
```

**After (Sanity CMS):**
```tsx
import { PageImage } from '@/components/PageImage';

<PageImage
  imageKey="pergolas-hero-main"
  fallbackSrc="/images/pergolas/pergola-hero.jpg"
  fill
  className="object-cover"
  priority
/>
```

### Step 4: Batch Migration Script
Run the migration script to create initial PageImage documents:

```bash
cd edg-site
npm run migrate-images
```

## For Developers

### Fetching Images in Server Components
```tsx
import { getPageImage, getPageImageUrl } from '@/sanity/lib/pageImages';

// Single image
const heroImage = await getPageImage('homepage-hero-bg');
const heroUrl = getPageImageUrl(heroImage, { width: 1920, height: 1080 });

// Multiple images
const images = await getPageImagesByKeys([
  'pergolas-hero-main',
  'shades-hero-main',
  'enclosures-hero-main'
]);
```

### Fetching Images in Client Components
```tsx
import { usePageImage, usePageImages } from '@/hooks/usePageImages';

// Single image
const { image, isLoading, error } = usePageImage('homepage-hero-bg');

// Multiple images
const { images } = usePageImages(['pergolas-hero', 'shades-hero']);
```

### PageImage Component Props
| Prop | Type | Description |
|------|------|-------------|
| `imageKey` | string | Required. The unique key for this image |
| `fallbackSrc` | string | Optional. Default image if Sanity image not found |
| `alt` | string | Optional. Override alt text |
| `className` | string | Optional. CSS classes |
| `fill` | boolean | Optional. Fill parent container |
| `width` | number | Optional. Image width |
| `height` | number | Optional. Image height |
| `priority` | boolean | Optional. Load with priority |
| `objectFit` | string | Optional. CSS object-fit |

## Active/Inactive Images

- **Active**: Image is visible on the site
- **Inactive**: Image is hidden but kept in Sanity for later use

To swap images:
1. Make current image **Inactive**
2. Create/publish new image with same key

## Hotspot Support

When uploading images, use the **Hotspot** tool in Sanity to:
- Set the focal point for cropping
- Ensure important parts of the image aren't cut off

## Troubleshooting

### Image not appearing?
1. Check that the image is **Published** in Sanity
2. Verify the `imageKey` matches exactly (case-sensitive)
3. Check browser console for errors
4. Ensure `isActive` is `true`

### Slow loading?
- Enable `priority` prop for above-fold images
- Use appropriate `sizes` prop for responsive images
- Sanity automatically optimizes images

### Migration issues?
Run the diagnostic script:
```bash
npm run check-images
```

## Best Practices

1. **Always set alt text** - Important for SEO and accessibility
2. **Use descriptive keys** - Makes it easy to find images later
3. **Organize by category** - Keeps the CMS manageable
4. **Set priorities** - Controls display order when multiple alternatives exist
5. **Use hotspots** - Ensures images crop correctly at different sizes
6. **Keep fallbacks** - Always provide fallbackSrc for critical images

## Support

For technical issues or questions about the Page Images system, contact your development team.