import { defineField, defineType } from 'sanity';
import { Package } from 'lucide-react';

export default defineType({
  name: 'product',
  title: 'System',
  type: 'document',
  icon: Package,
  groups: [
    { name: 'basic', title: 'Basic Info' },
    { name: 'content', title: 'Content' },
    { name: 'features', title: 'Features & Specs' },
    { name: 'gallery', title: 'Gallery' },
    { name: 'options', title: 'Options' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'basic',
      options: {
        list: [
          { title: 'Louvered Pergolas', value: 'pergolas' },
          { title: 'Motorized Shades', value: 'shades' },
          { title: 'Glass Enclosures', value: 'enclosures' },
          { title: 'Outdoor Appliances', value: 'appliances' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline/Badge',
      type: 'string',
      group: 'basic',
      description: 'e.g., "Most Popular" or leave empty',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      group: 'basic',
      description: 'Used in cards and previews',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'gallery',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: 'Main product image shown on cards and lists. 16:9 ratio recommended.',
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      group: 'gallery',
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
      name: 'quickFeatures',
      title: 'Quick Features (for hero)',
      type: 'array',
      group: 'features',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'features',
      title: 'Detailed Features',
      type: 'array',
      group: 'features',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' }),
          defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
          defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
        ],
      }],
    }),
    defineField({
      name: 'specifications',
      title: 'Technical Specifications',
      type: 'array',
      group: 'features',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'value', title: 'Value', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'colorOptions',
      title: 'Color Options',
      type: 'array',
      group: 'options',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Color Name', type: 'string' }),
          defineField({ name: 'hex', title: 'Hex Color', type: 'string', description: 'e.g., #FFFFFF or CSS gradient' }),
        ],
      }],
    }),
    defineField({
      name: 'addOns',
      title: 'Popular Add-Ons',
      type: 'array',
      group: 'options',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Add-on Name', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Before/After Comparison',
      type: 'object',
      group: 'gallery',
      fields: [
        defineField({ name: 'beforeImage', title: 'Before Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
        defineField({ name: 'afterImage', title: 'After Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
        defineField({ name: 'beforeLabel', title: 'Before Label', type: 'string', initialValue: 'Before' }),
        defineField({ name: 'afterLabel', title: 'After Label', type: 'string', initialValue: 'After' }),
      ],
    }),
    defineField({
      name: 'lifestyleGallery',
      title: 'Lifestyle Gallery',
      type: 'array',
      group: 'gallery',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'label', title: 'Label', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'pricingUrl',
      title: 'Pricing Page URL',
      type: 'string',
      group: 'basic',
      initialValue: '/price',
    }),
    defineField({
      name: 'quoteUrl',
      title: 'Quote Request URL',
      type: 'string',
      group: 'basic',
      initialValue: '/contact',
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string', validation: (Rule) => Rule.required().max(60).warning('Should be under 60 characters') }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', validation: (Rule) => Rule.required().max(160).warning('Should be under 160 characters') }),
        defineField({ name: 'ogImage', title: 'OG Image', type: 'image', description: 'Social share image. 1200x630px' }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'basic',
      description: 'Lower numbers appear first',
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
      title: 'name',
      subtitle: 'category',
      media: 'heroImage',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : '',
      };
    },
  },
});
