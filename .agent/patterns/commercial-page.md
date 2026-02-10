# Commercial Page Template

> **Standard layout for all commercial sub-pages**

## Standardized Pages

All commercial sub-pages now follow this template:

| Page | Status |
|------|--------|
| `/commercial/hotel-pergolas` | ✅ Standardized |
| `/commercial/west-loop` | ✅ Standardized |
| `/commercial/restaurant-patio-solutions` | ✅ Standardized |
| `/commercial/restaurant-patio-enclosures` | ✅ Standardized |
| `/commercial/country-club-outdoor-spaces` | ✅ Standardized |
| `/commercial/chicago-hospitality-outdoor-living` | ✅ Standardized |
| `/commercial/hotel-roof-deck-systems` | ✅ Standardized |
| `/commercial` (hub) | ✅ Hub layout (different) |

## Page Structure (Exact Order)

```
1. Metadata (Server Component)
2. Schema Constants (JSON-LD)
3. Data Arrays (faqs, keyFeatures, etc.)
4. Page Component
   ├── JSON-LD Script Tags
   ├── HERO Section
   ├── INTRO/STATS Section (optional)
   ├── FEATURES Section
   ├── USE CASES/SOLUTIONS Section (optional)
   ├── FAQ Section
   ├── RELATED SOLUTIONS Section
   └── CTA Section
```

## Standard Layout Specifications

### 1. HERO SECTION (Critical - Must Be Consistent)

```typescript
<section className="relative min-h-[70vh] overflow-hidden pt-32 pb-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{ backgroundImage: "url('/images/...')" }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
  
  {/* Content */}
  <Container className="relative z-10">
    {/* Breadcrumb - Left Aligned */}
    <div className="mb-8">
      <Breadcrumb items={[...]} className="text-gray-400" />
    </div>
    
    {/* Text - Left Aligned, NOT Centered */}
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
        Category Label
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Page Title
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        Description text
      </p>
      <Button size="lg" className="rounded-none">
        CTA Text <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </Container>
</section>
```

**Rules:**
- Always use lowercase `<section>` (not `<Section>` component)
- Always `min-h-[70vh]` - no exceptions
- Always left-aligned text (NO `text-center`, NO `items-center`, NO `justify-center`)
- Always use inline `style={{ backgroundImage: ... }}` (NOT Tailwind `bg&#8209;[url(...)]`)
- Breadcrumb left-aligned with `text-gray-400`
- Label: `border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand`
- Gradient overlay: `from-black via-black/70 to-transparent`
- Button: `rounded-none` (square corners for commercial pages)

### 2. CONTENT SECTIONS

```typescript
<Section className="py-24 bg-white">
  <Container>
    {/* Section header - Centered */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Section Title
      </h2>
      <p className="text-lg text-gray-600">Description</p>
    </div>
    
    {/* Content */}
    ...
  </Container>
</Section>
```

**Rules:**
- Always use `<Section>` component (uppercase)
- Always `py-24` padding (not py-16, py-20)
- Section headers centered with `max-w-3xl mx-auto`

### 3. FEATURES GRID (4 Columns)

```typescript
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {keyFeatures.map((feature) => (
    <Card key={feature.title} variant="outline" padding="lg" className="group">
      <IconWrapper icon={feature.icon} variant="brand" size="lg" className="mb-6" />
      <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand-text transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </Card>
  ))}
</div>
```

**Rules:**
- Always 4 columns for features (`lg:grid-cols-4`)
- Use `Card` component with `variant="outline"`
- Add `group` class and `group-hover:text-edg-brand-text` for hover effects

### 4. FAQ SECTION

```typescript
<Section className="py-24 bg-zinc-100">
  <Container>
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Common Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <Card key={i} variant="default" padding="lg">
            <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </div>
  </Container>
</Section>
```

**Rules:**
- Always `py-24`
- Always `max-w-3xl mx-auto` for content
- Use `Card` component with `variant="default"`
- Light gray background (`bg-zinc-100`)

### 5. RELATED SOLUTIONS SECTION

```typescript
<Section className="py-16 bg-white border-t border-gray-200">
  <Container>
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <Link href="/commercial" className="inline-flex items-center gap-2 text-gray-600 hover:text-edg-brand-text transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span className="font-medium">All Commercial Solutions</span>
      </Link>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/commercial/..." className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors">
          Link Text <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </Container>
</Section>
```

**Rules:**
- Always `py-16` (smaller than other sections)
- Always white background
- Always border-top
- Back link on left, related links on right

### 6. CTA SECTION (Final Section)

```typescript
<section className="bg-edg-brand py-20">
  <Container>
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        CTA Title
      </h2>
      <p className="text-xl text-black/80 mb-8">
        CTA Description
      </p>
      <Button size="lg" variant="secondary" className="bg-black text-white hover:bg-gray-900">
        CTA Button <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </Container>
</section>
```

**Rules:**
- Always use lowercase `<section>`
- Always `bg-edg-brand` (mint green)
- Always centered text
- Always `py-20`
- Button: `bg-black text-white hover:bg-gray-900`

## Required Data Structures

### FAQ Array (Always 4 Questions)
```typescript
const faqs = [
  { question: 'Question text?', answer: 'Answer text.' },
  { question: 'Question text?', answer: 'Answer text.' },
  { question: 'Question text?', answer: 'Answer text.' },
  { question: 'Question text?', answer: 'Answer text.' },
];
```

### Features Array (Always 4 Features)
```typescript
const keyFeatures = [
  { icon: IconName, title: 'Feature Title', description: 'Feature description.' },
  { icon: IconName, title: 'Feature Title', description: 'Feature description.' },
  { icon: IconName, title: 'Feature Title', description: 'Feature description.' },
  { icon: IconName, title: 'Feature Title', description: 'Feature description.' },
];
```

### Schema
```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Service Name',
  description: 'Service description',
  provider: {
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
    },
    telephone: '+1-815-581-0138',
  },
  areaServed: { '@type': 'City', name: 'Chicago' },
};
```

## Hub Page vs Spoke Pages

### Hub Page (`/commercial`)
- 2-column hero layout
- Dark background (`bg-black`)
- Stats cards section
- Industry links grid
- Different structure optimized for navigation

### Spoke Pages (`/commercial/*`)
- Single-column hero (left-aligned)
- Image background with overlay
- Standard 7-section structure
- Consistent spacing and layout

## Creating New Commercial Pages

1. Copy `templates/commercial-sub-page.tsx`
2. Update metadata, data arrays, and content
3. Follow the exact section order specified above
4. Verify all spacing matches (py-24, min-h-[70vh], etc.)
5. Add page to sitemap and smoke tests

## Common Mistakes to Avoid

1. **Don't** use `<Section>` for hero (use lowercase `<section>`)
2. **Don't** center hero text (left-align only)
3. **Don't** use `bg&#8209;[url(...)]` for hero background (use inline style)
4. **Don't** use `rounded-full` for commercial buttons (use `rounded-none`)
5. **Don't** use varying padding (stick to py-24 for content, py-16 for related, py-20 for CTA)
6. **Don't** use 3-column feature grids (always 4 columns on desktop)
