---
name: Component Patterns
description: Critical UI component patterns and API reference for EDG Patio & Shade website. Use this to ensure component usage is consistent.
---

# Component Patterns

## Container

File: `src/components/ui/Container.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fluid` | `boolean` | `false` | If true, removes max-width constraint |
| `className` | `string` | - | Additional CSS classes |
| `ref` | `React.RefObject` | - | Ref forwarding |

### Usage

```typescript
// Standard constrained container (max-w-7xl)
<Container>
  <h1>Content</h1>
</Container>

// Full-width container (for gallery, hero sections)
<Container fluid className="px-0">
  <Image ... />
</Container>
```

---

## Button

File: `src/components/ui/Button.tsx`

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
| `primary` | CTAs, main actions | Mint green background (#42ffc1) |
| `secondary` | Secondary actions | Bordered, transparent bg |
| `ghost` | Subtle actions | No border, hover highlight |
| `outline` | Dark backgrounds | Border with hover fill |

---

## Image (Next.js)

**CRITICAL**: Always use `next/image` instead of CSS background images.

### Hero Image Pattern

```typescript
<section className="relative h-[60vh]">
  <Image
    src="/images/hero.jpg"
    alt="Descriptive alt text"
    fill
    priority  {/* Load immediately for LCP */}
    className="object-cover"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black" />
</section>
```

### Gallery Image Pattern

```typescript
<div className="relative aspect-square">
  <Image
    src={image.src}
    alt={image.alt}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 33vw, 20vw"
    loading="lazy"
  />
</div>
```

---

## Server Component vs Client Component

### Server Component (Default)

Use for:
- Static content
- Metadata exports
- SEO-critical pages

```typescript
// Server Component
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
};

export default function Page() {
  return <div>Static content</div>;
}
```

### Client Component

Use for:
- Interactive elements
- Browser APIs
- React hooks

```typescript
'use client';
import { useState } from 'react';

export function ContactForm() {
  const [email, setEmail] = useState('');
  return <form>...</form>;
}
```

### Pattern: Client Islands

Keep pages as Server Components:

```typescript
// page.tsx - Server Component
export const metadata = { title: 'Contact Us' };
export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <ContactForm /> {/* Only this hydrates client-side */}
    </main>
  );
}
```

---

## Common Anti-Patterns

### CSS Background Images

```typescript
// WRONG
<div style={{ backgroundImage: `url('${image}')` }} />

// CORRECT
<Image src={image} alt="..." fill className="object-cover" />
```

### 'use client' on Pages

```typescript
// WRONG - Loses SEO
'use client';
export const metadata = { title: 'Page' };  // Won't work!

// CORRECT
export const metadata = { title: 'Page' };
export default function Page() { ... }
```
