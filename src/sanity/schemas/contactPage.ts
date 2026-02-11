import { defineField, defineType } from 'sanity';
import { Mail } from 'lucide-react';

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: Mail,
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline on the contact page',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Subtext below the headline',
    }),
    defineField({
      name: 'sidebarTitle',
      title: 'Sidebar Title',
      type: 'string',
      initialValue: 'What happens next?',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      description: 'The numbered steps shown in the sidebar',
      of: [{
        type: 'object',
        name: 'processStep',
        title: 'Process Step',
        fields: [
          defineField({ name: 'step', title: 'Step Number', type: 'number' }),
          defineField({ name: 'title', title: 'Step Title', type: 'string' }),
          defineField({ name: 'description', title: 'Step Description', type: 'string' }),
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'description',
            step: 'step',
          },
          prepare({ title, subtitle, step }) {
            return {
              title: `${step}. ${title}`,
              subtitle,
            };
          },
        },
      }],
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Box Title',
      type: 'string',
      initialValue: 'Prefer to call?',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number (Display)',
      type: 'string',
      initialValue: '(815) 581-0138',
    }),
    defineField({
      name: 'phoneRaw',
      title: 'Phone Number (Raw for tel:)',
      type: 'string',
      initialValue: '+18155810138',
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'string',
      initialValue: 'Mon-Fri, 7am-4pm CT',
    }),
    defineField({
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
      initialValue: 'Spring Grove Showroom',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({ name: 'street', title: 'Street', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'state', title: 'State', type: 'string' }),
        defineField({ name: 'zip', title: 'ZIP', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page Content',
        subtitle: 'Hero text, process steps, contact info',
      };
    },
  },
});
