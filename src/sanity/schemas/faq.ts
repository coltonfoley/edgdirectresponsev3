import { defineField, defineType } from 'sanity';
import { HelpCircle } from 'lucide-react';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircle,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Installation', value: 'installation' },
          { title: 'Products', value: 'products' },
          { title: 'Design', value: 'design' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Trade/Builder', value: 'trade' },
        ],
      },
    }),
    defineField({
      name: 'relatedPages',
      title: 'Related Pages',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Homepage', value: '/' },
          { title: 'Design', value: '/design' },
          { title: 'Pricing', value: '/price' },
          { title: 'Professional', value: '/pro' },
          { title: 'Commercial', value: '/commercial' },
          { title: 'Pergolas', value: '/systems/pergolas' },
          { title: 'Shades', value: '/systems/shades' },
          { title: 'Enclosures', value: '/systems/enclosures' },
          { title: 'Appliances', value: '/systems/appliances' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
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
      title: 'question',
      subtitle: 'category',
    },
  },
});
