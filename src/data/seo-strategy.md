# SEO Content Uniqueness Strategy: Content Archetypes

## Problem
Currently, all service area pages share 90% identical copy, differing only by "City Name" and "Landmark". This creates "duplicate content" risks with Google and fails to address the specific lifestyle needs of different buyers (e.g., a Lake Geneva buyer cares about *bugs and wind*, a Naperville buyer cares about *privacy*).

## Solution: Content Archetypes
We will implement an **Archetype System**. Before creating a page, the agent must select the *Archetype* that best fits the location. This choice will dictate the **Headline**, **Pain Points**, **Benefit Copy**, and even the **Featured Feature**.

### The 3 Archetypes

#### 1. The Waterfront (e.g., Lake Geneva, Antioch, Fox Lake)
*   **Focus**: Protecting the view, handling high winds, managing bugs.
*   **Headline Vibe**: "Enjoy the View, Ignore the Bugs." / "Wind-Rated for the Water."
*   **Key Pain Point**: "You didn't buy a lake house to sit inside because of mosquitoes."
*   **Featured Feature**: **MagnaTrack Screens** (Bug protection + View retention).

#### 2. The Estate / Open Space (e.g., Barrington, Wayne, St. Charles)
*   **Focus**: Scale, architectural harmony, creating a destination in the yard.
*   **Headline Vibe**: "Grand Scale Outdoor Living." / "Architecture that Matches Your Estate."
*   **Key Pain Point**: Large open spaces effectively unusable due to direct sun/elements.
*   **Featured Feature**: **Large Span Pergolas** (Freestanding, 20x20+ sizes).

#### 3. The Suburban Retreat (e.g., Naperville, Hinsdale, Northbrook)
*   **Focus**: Privacy from neighbors, maximizing square footage, "Indoor-Outdoor" flow.
*   **Headline Vibe**: "Your Private Oasis, Right Next Door." / "Add a Room to Your House."
*   **Key Pain Point**: Neighbors looking in; patio is unusable when it rains or is too hot.
*   **Featured Feature**: **Privacy Louvers & Attached Structures**.

## Implementation Plan

### 1. Create `src/data/seo-copy-bank.ts`
This file will store the unique copy blocks for each archetype so specific pages can pull distinct robust text.

```typescript
export const SEO_COPY_BANK = {
  WATERFRONT: {
    heroHeadline: "Uncompromised Lake Living.",
    heroSub: "Experience your lakefront property without the bugs, wind, or intense sun.",
    problemSection: "The View is Perfect. The Elements Aren't.",
    // ... more specific copy
  },
  SUBURBAN: { ... },
  ESTATE: { ... }
}
```

### 2. Update `SKILL.md`
Add a step to the workflow: "Identify Content Archetype".

### 3. Refactor Template
Update `service_area_page.tsx` to accept an `archetype` prop or variable and pull from the copy bank, rather than using hardcoded generic text.

### 4. Upgrade Lake Geneva Page
Immediate rewrite of the Lake Geneva page using the **Waterfront** archetype to prove the concept.
