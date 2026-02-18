import { defineField, defineType } from 'sanity';
import { ImageIcon } from 'lucide-react';

/**
 * Page Images - Centralized image management for swappable photos
 * 
 * Use this schema to manage all photos that appear across pages.
 * Users can easily swap images by editing these documents in Sanity Studio.
 */
export default defineType({
  name: 'pageImage',
  title: 'Page Image',
  type: 'document',
  icon: ImageIcon,
  description: 'Manage swappable images across the website. Create one document per image slot.',
  groups: [
    { name: 'image', title: 'Image' },
    { name: 'usage', title: 'Where Used' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'key',
      title: 'Image Key',
      type: 'string',
      group: 'usage',
      description: 'Unique identifier for this image slot (e.g., "homepage-hero-bg", "pergolas-system-card")',
      validation: (Rule) => Rule.required().regex(/^[a-z0-9-]+$/, {
        name: 'lowercase-letters-numbers-hyphens',
        invert: false,
      }).error('Use only lowercase letters, numbers, and hyphens'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'usage',
      description: 'Human-readable title for this image slot',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'usage',
      description: 'Where this image appears and what it shows',
      rows: 2,
    }),
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      group: 'image',
      options: { 
        hotspot: true,
        metadata: ['palette', 'lqip'],
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for accessibility and SEO',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional caption for the image',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'usage',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'Systems - Pergolas', value: 'systems-pergolas' },
          { title: 'Systems - Shades', value: 'systems-shades' },
          { title: 'Systems - Enclosures', value: 'systems-enclosures' },
          { title: 'Systems - Appliances', value: 'systems-appliances' },
          { title: 'Landing Pages', value: 'landing-pages' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Projects', value: 'projects' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'UI/Components', value: 'ui' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageLocations',
      title: 'Page Locations',
      type: 'array',
      group: 'usage',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Specific pages or components where this image appears (e.g., "/", "/systems/pergolas", "HeroSection")',
    }),
    defineField({
      name: 'priority',
      title: 'Display Priority',
      type: 'number',
      group: 'usage',
      description: 'Higher numbers show first in lists (for images that might have alternatives)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      group: 'image',
      description: 'Inactive images won\'t be shown on the site',
      initialValue: true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Optional override for image title attribute',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
      description: 'Optional description for structured data',
      rows: 2,
    }),
  ],
  orderings: [
    {
      title: 'Category, then Priority',
      name: 'categoryPriority',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'priority', direction: 'desc' },
      ],
    },
    {
      title: 'Title',
      name: 'title',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'key',
      media: 'image',
      category: 'category',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, media, category, isActive }) {
      return {
        title: `${title}${isActive ? '' : ' (Inactive)'}`,
        subtitle: `${category ? `[${category}] ` : ''}${subtitle}`,
        media,
      };
    },
  },
});