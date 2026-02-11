import { defineField, defineType } from 'sanity';
import { Image } from 'lucide-react';

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: Image,
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for accessibility and SEO',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Pergolas', value: 'pergolas' },
          { title: 'Shades', value: 'shades' },
          { title: 'Enclosures', value: 'enclosures' },
          { title: 'Appliances', value: 'appliances' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Projects', value: 'projects' },
          { title: 'Before/After', value: 'before-after' },
          { title: 'Lifestyle', value: 'lifestyle' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'relatedProduct',
      title: 'Related Product',
      type: 'reference',
      to: [{ type: 'product' }],
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
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category',
    },
  },
});
