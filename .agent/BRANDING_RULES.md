# EDG Outdoor Living - Branding & Design Rules

Reference this file when creating concepts, copy, UI components, or new pages to ensure consistency with the established EDG brand.

## 1. Brand Identity & Voice
**Core Value Proposition:** "Outdoor Living That Works 365 Days a Year."
we are NOT just a product showroom. We are a **Design-Build Partner** for premium outdoor living spaces in the Midwest (Chicago to Milwaukee).

**Tone:**
- **Premium & Professional:** High-end service, "White Glove" experience.
- **Direct & Transparent:** "No surprises", "Transparent Process".
- **Problem-Solving:** Highlight specific pain points (bugs, wind, sun, rain) and offer "Systems" as solutions.
- **Geographically Anchored:** Frequently reference "Midwest Winters", "Lake County", "Chicago to Milwaukee".

**Key Terminology:**
- Use **"Systems"** (not just products).
- **"Louvered Pergolas"** (not patio covers).
- **"Motorized Shades"** (not screens).
- **"Glass Enclosures"** (not sunrooms).

## 2. Visual Design System
**Color Palette (Tailwind v4 Variables):**
- **Brand Accent:** `text-edg-brand` / `bg-edg-brand` (`#42ffc1`) - Use for primary CTAs, active states, and highlights.
- **Dark Background:** `bg-edg-dark` (`#0a0a0a`) - Primary background for "Premium" sections.
- **Light Background:** `bg-edg-light` (`#fafafa`) - For informational/white-paper style sections.
- **Text:** `text-foreground` (`#0a0a0a` or `#fafafa` depending on mode).
- **Muted Text:** `text-edg-gray` (`#a1a1aa`) or `text-muted-foreground`.

**Typography:**
- **Font:** `Inter` (Sans-serif).
- **Headings:** Bold, often tracking-tight.
- **Body:** Clean, readable, typically `text-lg` or `text-base`.

**UI Patterns & Components:**
- **Buttons:** Always `rounded-full` for a modern, organic feel.
  - Primary: `bg-primary` or custom brand color.
  - Secondary: `variant="secondary"`, often with specific borders or glassmorphism.
- **Cards:** `rounded-2xl` or `rounded-3xl`.
- **Effects:**
  - **Glassmorphism:** Use `backdrop-blur` and semi-transparent backgrounds (`bg-white/5` or `bg-black/5`) for overlays.
  - **Gradients:** Subtle gradients on dark backgrounds to add depth (`bg-gradient-to-br from-gray-900 via-black...`).
  - **Animations:** Use `<FadeIn>` wrappers for smooth entry. Hover effects should be `transition-all duration-300 hover:scale-[1.02]`.
- **Icons:** Use `lucide-react`.

## 3. Copywriting Guidelines
- **Headlines:** Benefit-driven. "Outdoor Living That Works 365 Days a Year."
- **Direct Response Elements:**
  - Use "Lead Magnets" (e.g., Free Planning Guide).
  - Clear Call-to-Actions (CTAs): "Get Quote", "Start Consultation", "Download Guide".
- **Social Proof:** Highlight "75+ Projects", "5.0 Stars", "10+ Years Experience".

## 4. Coding Standards for Content
- **Images:** Always use `next/image`.
- **Links:** Use `next/link`.
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS (v4 configuration).

## 5. Checklist for New Content
- [ ] Does it sound "Premium" but "Direct"?
- [ ] Are we solving a specific problem (wind, rain, bugs)?
- [ ] Are we using the correct brand colors (`#42ffc1`)?
- [ ] Is the aesthetic consistent (rounded corners, dark mode accents)?
- [ ] Is it mobile-responsive (critical for this consumer base)?
