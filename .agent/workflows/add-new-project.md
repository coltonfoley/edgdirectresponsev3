---
description: Add a new project to the portfolio using the internal data system
---

# Add New Project

This workflow guides you through adding a new project to the `src/lib/projects.ts` file.

## 1. Gather Project Info
Ask the user for the following information. You can ask for it all at once or step-by-step.
- **Title**: e.g., "Modern Lake House Pergola"
- **Slug**: e.g., "modern-lake-house-pergola" (kebab-case)
- **Location**: e.g., "Winnetka, IL"
- **Type**: "Residential", "Commercial", or "Builder Project"
- **Systems**: List of systems (e.g., "Louvered Pergola", "Motorized Shades")

## 2. Gather Detailed Content
Ask the user for the narrative content.
- **Description**: 1-2 sentence summary for the card.
- **Challenge**: Paragraph describing the problem.
- **Solution**: Paragraph describing the work done.
- **Results**: 3-4 bullet points of specific outcomes.

## 3. Image Setup
Instruct the user to place their images in `public/images/projects/<slug>/`.
Ask the user to provide the filenames for:
1.  **Card Image**: used for the main list (square/landscape).
2.  **Hero Image**: used for the detail banner (wide).
3.  **Gallery Images**: 3 images for the grid.

> **Note to Agent**: If the user hasn't created the folder, you can create it for them using `run_command`.

## 4. Specs & Testimonials
Ask for:
- **Specs**: Size, Timeline, Systems, Special Features.
- **Testimonial** (Optional): Quote, Name, Title.
- **Related Projects**: Slugs of 2 existing projects.

## 5. Update Code
Construct the new `Project` object and append it to the `projects` array in `src/lib/projects.ts`.

```typescript
// Example object structure to append
{
    slug: "new-slug",
    title: "Project Title",
    // ... rest of fields
},
```

Use `view_file` to read the current file first, then use `replace_file_content` (or `write_to_file` if replacing the whole array is safer) to add the new entry.

## 6. Verify
// turbo
1. Run `npm run dev` (if not running).
2. Report the URL: `http://localhost:3000/projects/<slug>`.
3. Ask the user to check the page.
