import { defineField, defineType } from 'sanity';
import { Home } from 'lucide-react';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: Home,
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'systems', title: 'Systems' },
    { name: 'content', title: 'Content Sections' },
    { name: 'cta', title: 'CTA Sections' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
      hidden: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'headline',
          title: 'Main Headline',
          type: 'array',
          of: [{ type: 'block' }],
          validation: (Rule) => Rule.required(),
          initialValue: [
            { _type: 'block', children: [{ _type: 'span', text: 'Motorized Pergolas' }] },
          ],
        }),
        defineField({
          name: 'headlineHighlight',
          title: 'Highlighted Text',
          type: 'string',
          initialValue: '& Louvered Roofs',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          initialValue: 'Full-Service Installation Across Chicago & Milwaukee. Design & Supply Available Nationwide.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'videoPoster',
          title: 'Video Poster Image',
          type: 'image',
          options: { hotspot: true },
          description: 'Poster image for the background video. Recommended size: 1920x1080px',
        }),
        defineField({
          name: 'videoSrc',
          title: 'Video Source URL',
          type: 'string',
          initialValue: '/images/enclosures/commercial-pergola-video-clip-01.mp4',
          description: 'URL to the background video file (mp4)',
        }),
        defineField({
          name: 'trustBadges',
          title: 'Trust Badges',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: ['Licensed & Insured', '5-Star Service', 'Hurricane Rated'],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'systemsSection',
      title: 'Systems Section',
      type: 'object',
      group: 'systems',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Motorized Pergolas, Outdoor Shades & Glass Enclosures Chicago',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: "We're not tied to one manufacturer. We match the right system to your site, your style, and your goals.",
        }),
        defineField({
          name: 'systems',
          title: 'Featured Systems',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'product' }] }],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),
    defineField({
      name: 'whySection',
      title: 'Why EDG Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Why work with EDG?',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: "We're not a product showroom. We're a design-build partner that helps you avoid costly mistakes before you break ground.",
        }),
        defineField({
          name: 'valueProps',
          title: 'Value Propositions',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
            ],
          }],
        }),
        defineField({
          name: 'testimonial',
          title: 'Featured Testimonial',
          type: 'reference',
          to: [{ type: 'testimonial' }],
        }),
      ],
    }),
    defineField({
      name: 'guideCTA',
      title: 'Guide CTA Section',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Not ready to talk yet?' }),
        defineField({ name: 'highlightText', title: 'Highlighted Text', type: 'string', initialValue: 'Start with our free guide.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'benefits',
          title: 'Benefits List',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string', initialValue: '/guides/planning-guide' }),
        defineField({ name: 'ctaText', title: 'CTA Text', type: 'string', initialValue: 'Get the Free Guide' }),
      ],
    }),
    defineField({
      name: 'pathCards',
      title: 'Path Cards Section',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Ready to Start?',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          initialValue: "Tell us what you're here for and we'll begin the right conversation.",
        }),
        defineField({
          name: 'cards',
          title: 'Path Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'id', title: 'ID', type: 'string' }),
              defineField({ name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' }),
              defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
              defineField({ name: 'title', title: 'Card Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
              defineField({ name: 'cta', title: 'CTA Text', type: 'string' }),
              defineField({ name: 'href', title: 'URL', type: 'string' }),
            ],
          }],
        }),
      ],
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
    },
    prepare() {
      return {
        title: 'Homepage',
        subtitle: 'Homepage content',
      };
    },
  },
});
