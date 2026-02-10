# EDG Design System - Editorial/Sharp

> **Style Guide:** High-contrast, technical, minimalist aesthetic with sharp corners and bold typography.

---

## Philosophy

The Editorial/Sharp design language reflects EDG's positioning as a technical specialist and professional partner:

- **Sharp corners** (`rounded-none`) convey precision and engineering
- **High contrast** (black/white/mint) creates visual impact
- **Bold uppercase tracking** for labels communicates authority
- **Minimal decoration** lets content and products stand out

---

## Color Tokens

### Primary Brand
| Token | Value | Usage |
|-------|-------|-------|
| `--color-edg-brand` | `#42ffc1` | CTAs, accents, highlights |
| `--color-edg-brand-text` | `#000000` | Text on mint backgrounds |
| `--color-edg-dark` | `#000000` | True black for dark sections |
| `--color-edg-light` | `#ffffff` | True white |

### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-text-primary` | `#0a0a0a` | Main body text |
| `--color-text-secondary` | `#52525b` | Secondary text |
| `--color-text-muted` | `#71717a` | Muted/caption text |
| `--color-text-inverse` | `#ffffff` | Text on dark backgrounds |
| `--color-text-inverse-muted` | `#a1a1aa` | Muted text on dark |

### Surfaces
| Token | Value | Usage |
| `--color-surface` | `#ffffff` | Card backgrounds |
| `--color-surface-muted` | `#f4f4f5` | Section backgrounds |
| `--color-surface-elevated` | `#fafafa` | Elevated elements |
| `--color-surface-dark` | `#000000` | Dark sections |
| `--color-surface-dark-elevated` | `#18181b` | Card on dark bg |

### Borders
| Token | Value | Usage |
| `--color-border` | `#e4e4e7` | Default borders |
| `--color-border-strong` | `#d4d4d8` | Emphasized borders |
| `--color-border-inverse` | `rgba(255,255,255,0.1)` | Borders on dark |

---

## Typography

### Heading Scale
| Class | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `.hero-title` | clamp(3rem, 8vw, 5.5rem) | 0.95 | -0.02em | Homepage hero |
| `.page-title` | clamp(2.5rem, 5vw, 4rem) | 1 | -0.02em | Page titles |
| `.section-title` | clamp(1.75rem, 3vw, 2.5rem) | 1.1 | -0.01em | Section headers |

### Labels
| Class | Size | Weight | Transform | Letter Spacing |
|-------|------|--------|-----------|----------------|
| `.label-editorial` | 0.75rem | 700 | uppercase | 0.2em |
| `.label-editorial-brand` | 0.75rem | 700 | uppercase | 0.2em + mint color |

### Body Text
- **Primary:** `text-text-primary` for main content
- **Secondary:** `text-text-secondary` for descriptions
- **Muted:** `text-text-muted` for captions/metadata

---

## Spacing

### Section Padding
| Class | Value | Usage |
|-------|-------|-------|
| `.section-sm` | 4rem (64px) | Compact sections |
| `.section-md` | 6rem (96px) | Standard sections |
| `.section-lg` | 8rem (128px) | Major sections |

### Component Spacing
Use consistent spacing scale:
- `gap-4` (16px) - Tight grids
- `gap-6` (24px) - Standard grids  
- `gap-8` (32px) - Loose grids
- `gap-12` (48px) - Major section gaps

---

## Components

### Button
```typescript
// All buttons have rounded-none (sharp corners)
<Button variant="primary" size="lg">CTA</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Dark BG</Button>
<Button variant="dark">Light BG</Button>
```

**Variants:**
- `primary` - Mint bg, black text
- `secondary` - Bordered, transparent bg
- `outline` - For dark backgrounds
- `dark` - Black bg, white text

**Sizes:**
- `sm` - Compact
- `md` - Standard
- `lg` - Hero/prominent

### Card
```typescript
<Card variant="default" padding="md">
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

**Variants:**
- `default` - White bg, subtle border
- `muted` - Light gray bg
- `dark` - Dark bg for contrast
- `outline` - Border only

**Padding:**
- `none` - No padding
- `sm` - 1rem
- `md` - 1.5rem
- `lg` - 2rem

### IconWrapper
```typescript
<IconWrapper icon={Icon} variant="default" size="md" />
```

**Variants:**
- `default` - Bordered, hover invert
- `brand` - Mint accent bg
- `dark` - For dark backgrounds

**Sizes:**
- `sm` - 2rem
- `md` - 2.5rem
- `lg` - 3rem

### Form Inputs
```typescript
// Light backgrounds
<input className="input-editorial" />

// Dark backgrounds
<input className="input-editorial-dark" />
```

---

## Layout Patterns

### Hero Section
```tsx
<section className="relative min-h-[60vh] flex items-center">
  {/* Background */}
  <div className="absolute inset-0">
    <Image fill className="object-cover" ... />
    <div className="absolute inset-0 bg-gradient-to-t from-black..." />
  </div>
  
  {/* Content */}
  <Container className="relative z-10">
    <h1 className="hero-title">Title</h1>
  </Container>
</section>
```

### Two-Column Feature
```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="relative aspect-[4/3]">
    <Image fill ... />
  </div>
  <div>
    <div className="label-editorial-brand">Label</div>
    <h2 className="section-title">Title</h2>
    <p className="text-text-secondary">...</p>
  </div>
</div>
```

### Card Grid
```tsx
<div className="grid md:grid-cols-2 gap-6">
  {items.map(item => (
    <Card key={item.id} variant="muted" padding="lg">
      <IconWrapper icon={item.icon} variant="brand" />
      <h3>{item.title}</h3>
      <p className="text-text-secondary">{item.description}</p>
    </Card>
  ))}
</div>
```

---

## Anti-Patterns (DO NOT USE)

### ❌ Border Radius
```tsx
// WRONG
<div className="rounded-2xl">...</div>
<button className="rounded-full">...</button>

// CORRECT
<div className="rounded-none">...</div>
<button className="rounded-none">...</button>
```

### ❌ CSS Background Images
```tsx
// WRONG
{/* <div style={{ backgroundImage: 'url(...)' }} /> */}
{/* <div className="bg&#8209;[url('/images/...')]" /> */}

// CORRECT
<Image src="/images/..." fill className="object-cover" />
```

### ❌ Arbitrary Colors
```tsx
// WRONG
<div className="text-gray-400" />  // Which gray?
<div className="bg-zinc-100" />    // Inconsistent

// CORRECT
<div className="text-text-secondary" />
<div className="bg-surface-muted" />
```

### ❌ Mixed Padding
```tsx
// WRONG
<section className="py-16">...</section>
<section className="py-20">...</section>
<section className="py-24">...</section>

// CORRECT
<section className="section-md">...</section>
```

---

## Migration Checklist

When updating pages to Editorial/Sharp:

- [ ] Replace all `rounded-*` with `rounded-none` (or remove class)
- [ ] Replace CSS backgrounds with `<Image fill />`
- [ ] Replace arbitrary grays with semantic tokens
- [ ] Use `Card` component instead of custom divs
- [ ] Use `IconWrapper` instead of custom icon containers
- [ ] Use `section-sm/md/lg` instead of arbitrary padding
- [ ] Use `label-editorial` for eyebrow text
- [ ] Use semantic text colors (`text-text-primary`, etc.)

---

## Files to Reference

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Design tokens and utility classes |
| `src/components/ui/Button.tsx` | Button component |
| `src/components/ui/Card.tsx` | Card component |
| `src/components/ui/IconWrapper.tsx` | Icon wrapper component |
| `src/app/page.tsx` | Reference implementation (Homepage) |
| `src/app/systems/pergolas/page.tsx` | Reference implementation (Product) |
| `src/app/service-areas/wilmette-il/page.tsx` | Reference implementation (Service Area) |
