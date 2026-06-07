# Component API Reference

> **Quick reference for UI components used across all page types**

---

## Container

**File:** `src/components/ui/Container.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fluid` | `boolean` | `false` | Removes max-width constraint for full-width sections |
| `className` | `string` | - | Additional CSS classes |
| `ref` | `React.RefObject` | - | Ref forwarding (React 19) |

### Usage

```typescript
// Standard constrained container (max-w-7xl)
<Container>
  <h1>Content with max-width</h1>
</Container>

// Full-width container for hero/gallery
<Container fluid className="px-0">
  <Image ... />
</Container>

// With custom padding override
<Container className="py-16">
  <Content />
</Container>
```

### Common Patterns

```typescript
// Hero section with full-width background
<section className="relative">
  <Container fluid className="px-0">
    <div className="relative h-[60vh]">
      <Image fill className="object-cover" ... />
    </div>
  </Container>
</section>

// Content section with standard width
<section className="py-16">
  <Container>
    <div className="grid grid-cols-2 gap-8">
      {/* content */}
    </div>
  </Container>
</section>
```

---

## Button

**File:** `src/components/ui/Button.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'outline'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Button size |
| `className` | `string` | - | Additional CSS classes |
| `ref` | `React.RefObject` | - | Ref forwarding |

### Variants

| Variant | Usage | Appearance |
|---------|-------|------------|
| `primary` | Primary CTAs, main actions | Mint green background (#42ffc1), dark text |
| `secondary` | Secondary actions | Bordered, transparent bg, hover fill |
| `ghost` | Subtle actions | No border, hover highlight |
| `outline` | Dark backgrounds | Border with hover fill |

### Sizes

| Size | Height | Text Size |
|------|--------|-----------|
| `sm` | 36px | 14px |
| `md` | 44px | 16px |
| `lg` | 56px | 18px |

### Usage

```typescript
// Primary CTA
<Button size="lg">Book Free Consultation</Button>

// Secondary action
<Button variant="secondary">Learn More</Button>

// Dark background
<Button variant="outline" size="lg">Get Started</Button>

// With icon
<Button>
  <Phone className="mr-2 h-4 w-4" />
  Call Now
</Button>
```

---

## Image (Next.js)

**File:** `next/image`

**CRITICAL:** All images MUST come from the registry. See [`.agent/patterns/images.md`](images.md) for full details.

```typescript
// ✅ CORRECT - Use the registry
import * as images from '@/lib/images';

<Image
  src={images.brand.hero.pergola}
  alt="Descriptive alt text including location"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>

// ❌ WRONG - Never hardcode paths
<Image src="/images/brand/hero-pergola.jpg" ... />
```

### Hero Image Pattern

```typescript
import * as images from '@/lib/images';

<section className="relative h-[60vh] min-h-[500px]">
  <Image
    src={images.brand.hero.pergola}
    alt="Louvered pergola installation in Lake Forest, IL"
    fill
    priority  // Load immediately for LCP
    className="object-cover"
    sizes="100vw"
  />
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
  
  {/* Content */}
  <Container className="relative z-10 flex h-full items-end pb-16">
    <h1>Page Title</h1>
  </Container>
</section>
```

### Gallery Image Pattern

```typescript
<div className="relative aspect-square overflow-hidden rounded-lg">
  <Image
    src={image.src}
    alt={image.alt}
    fill
    className="object-cover transition-transform hover:scale-105"
    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
    loading="lazy"
  />
</div>
```

### Content Image Pattern

```typescript
<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
  <Image
    src="/images/feature.jpg"
    alt="Feature description"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### Image Guidelines

1. **ALWAYS use the image registry** - Import from `@/lib/images`, never hardcode paths
2. **Always use next/image** - Never CSS background images for content
3. **Always include alt text** - Descriptive, include location for local pages
4. **Use `priority` for LCP** - Above-fold hero images only
5. **Use `loading="lazy"` for below-fold** - Gallery, content images
6. **Always specify sizes** - Helps Next.js optimize
7. **Use fill + object-cover for responsive** - Most common pattern

**Full Image Management Guide:** [`.agent/patterns/images.md`](images.md)

---

## Breadcrumb

**File:** `src/components/ui/Breadcrumb.tsx`

### Props

```typescript
interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
```

### Usage

```typescript
import { Breadcrumb } from '@/components/ui/Breadcrumb';

// On a zoning guide page
<Breadcrumb
  items={[
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Wilmette', href: '/service-areas/wilmette-il' },
    { label: 'Zoning Guide', href: '/service-areas/wilmette-il/zoning-guide' },
  ]}
/>
```

### Includes Schema

The Breadcrumb component automatically outputs JSON-LD structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

---

## ContactForm (Client Component)

**File:** `src/components/forms/ContactForm.tsx`

### Usage

```typescript
'use client';

import { ContactForm } from '@/components/forms/ContactForm';

// In a Server Component page:
export default function Page() {
  return (
    <main>
      <section>
        <Container>
          <h2>Get a Free Quote</h2>
          <ContactForm 
            source="service-area-wilmette"
            showServices={true}
          />
        </Container>
      </section>
    </main>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `source` | `string` | - | Tracking source for analytics |
| `showServices` | `boolean` | `false` | Show service checkboxes |

---

## Quick Reference: Component Combinations

### Hero Section
```typescript
<section className="relative">
  <Container fluid className="px-0">
    <div className="relative h-[60vh]">
      <Image fill priority sizes="100vw" ... />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
      <Container className="relative z-10 flex h-full items-end pb-16">
        <div className="max-w-2xl text-white">
          <h1>Title</h1>
          <p>Description</p>
          <Button size="lg">CTA</Button>
        </div>
      </Container>
    </div>
  </Container>
</section>
```

### Content Section
```typescript
<section className="py-16">
  <Container>
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h2>Section Title</h2>
        <p>Content...</p>
        <Button variant="secondary">Learn More</Button>
      </div>
      <div className="relative aspect-[4/3]">
        <Image fill sizes="(max-width: 768px) 100vw, 50vw" ... />
      </div>
    </div>
  </Container>
</section>
```
