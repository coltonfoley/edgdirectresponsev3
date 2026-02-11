import { defineField, defineType } from 'sanity';
import { MessageSquare } from 'lucide-react';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: MessageSquare,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Author Title/Role',
      type: 'string',
      description: 'e.g., "Homeowner", "Builder", "Restaurant Owner"',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Lake Forest, IL"',
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      description: 'e.g., "Louvered Pergola", "Motorized Shades"',
    }),
    defineField({
      name: 'type',
      title: 'Testimonial Type',
      type: 'string',
      options: {
        list: [
          { title: 'Homeowner', value: 'homeowner' },
          { title: 'Builder/Contractor', value: 'builder' },
          { title: 'Commercial/Business', value: 'commercial' },
          { title: 'Architect/Designer', value: 'architect' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Author Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'relatedProject',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'For controlling display order',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'location',
      media: 'image',
    },
  },
});
