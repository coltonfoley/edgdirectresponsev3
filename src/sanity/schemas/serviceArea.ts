import { defineField, defineType } from 'sanity';
import { MapPin } from 'lucide-react';

export default defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  icon: MapPin,
  groups: [
    { name: 'basic', title: 'Basic Info' },
    { name: 'content', title: 'Page Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Area Name',
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
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'basic',
      description: 'Used in listings and hero fallback',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Area',
      type: 'boolean',
      group: 'basic',
      initialValue: false,
      description: 'Highlight on service areas page',
    }),
    defineField({
      name: 'badge',
      title: 'Hero Badge',
      type: 'string',
      group: 'content',
      description: 'Badge shown in hero (e.g., "Our Home Market", "Service Area")',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'content',
      description: 'Custom title for hero section (defaults to "{Name} Outdoor Living")',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      group: 'content',
      description: 'Custom hero description (falls back to short description)',
    }),
    defineField({
      name: 'communities',
      title: 'Communities Served',
      type: 'array',
      group: 'content',
      of: [{
        type: 'object',
        name: 'community',
        title: 'Community',
        fields: [
          defineField({ name: 'name', title: 'Community Name', type: 'string' }),
          defineField({ 
            name: 'type', 
            title: 'Type', 
            type: 'string',
            options: {
              list: [
                { title: 'Residential', value: 'residential' },
                { title: 'Mixed', value: 'mixed' },
                { title: 'Commercial', value: 'commercial' },
              ],
            },
          }),
        ],
        preview: {
          select: {
            title: 'name',
            subtitle: 'type',
          },
        },
      }],
    }),
    defineField({
      name: 'localConsiderations',
      title: 'Local Considerations',
      type: 'array',
      group: 'content',
      of: [{
        type: 'object',
        name: 'consideration',
        title: 'Consideration',
        fields: [
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text' }),
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'description',
          },
        },
      }],
    }),
    defineField({
      name: 'localKnowledgeTitle',
      title: 'Local Knowledge Title',
      type: 'string',
      group: 'content',
      description: 'Title for the local knowledge sidebar',
    }),
    defineField({
      name: 'localKnowledgeText',
      title: 'Local Knowledge Text',
      type: 'text',
      group: 'content',
      description: 'Content for the local knowledge sidebar',
    }),
    defineField({
      name: 'testimonial',
      title: 'Local Testimonial',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text' }),
        defineField({ name: 'author', title: 'Author Name', type: 'string' }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({ name: 'project', title: 'Project Type', type: 'string' }),
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
    }),
    defineField({
      name: 'localProjects',
      title: 'Local Projects',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
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
      title: 'name',
      subtitle: 'description',
    },
  },
});
