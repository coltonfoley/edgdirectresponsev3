import { defineField, defineType } from 'sanity';
import { Briefcase } from 'lucide-react';

export default defineType({
  name: 'project',
  title: 'Project Case Study',
  type: 'document',
  icon: Briefcase,
  groups: [
    { name: 'basic', title: 'Basic Info' },
    { name: 'content', title: 'Content' },
    { name: 'media', title: 'Media' },
    { name: 'specs', title: 'Specs & Results' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      group: 'basic',
      options: {
        list: [
          { title: 'Residential', value: 'Residential' },
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Builder Project', value: 'Builder Project' },
        ],
      },
    }),
    defineField({
      name: 'systems',
      title: 'Systems Used',
      type: 'array',
      group: 'basic',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    defineField({
      name: 'systemNames',
      title: 'System Names (text)',
      type: 'array',
      group: 'basic',
      of: [{ type: 'string' }],
      description: 'Alternative to references for quick entry',
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image (for listings)',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (for detail page)',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      group: 'media',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'content',
      description: 'One-sentence overview',
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      group: 'content',
      rows: 6,
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'text',
      group: 'content',
      rows: 6,
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      group: 'specs',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'specs',
      title: 'Project Specifications',
      type: 'array',
      group: 'specs',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'value', title: 'Value', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'testimonial',
      title: 'Project Testimonial',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
        defineField({ name: 'name', title: 'Author Name', type: 'string' }),
        defineField({ name: 'title', title: 'Author Title', type: 'string' }),
      ],
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
    defineField({
      name: 'serviceArea',
      title: 'Service Area',
      type: 'reference',
      to: [{ type: 'serviceArea' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'cardImage',
    },
  },
});
