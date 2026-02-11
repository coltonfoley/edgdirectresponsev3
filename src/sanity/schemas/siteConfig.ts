import { defineField, defineType } from 'sanity';
import { Cog } from 'lucide-react';

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  icon: Cog,
  groups: [
    { name: 'company', title: 'Company Info' },
    { name: 'navigation', title: 'Navigation' },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social & SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'EDG Outdoor Living',
      group: 'company',
    }),
    defineField({
      name: 'companyInfo',
      title: 'Company Information',
      type: 'object',
      group: 'company',
      fields: [
        defineField({ name: 'name', title: 'Company Name', type: 'string', initialValue: 'EDG Outdoor Living' }),
        defineField({ name: 'phone', title: 'Phone Number', type: 'string', initialValue: '(815) 581-0138' }),
        defineField({ name: 'phoneRaw', title: 'Phone (Raw for tel:)', type: 'string', initialValue: '+18155810138' }),
        defineField({ name: 'email', title: 'Email', type: 'string', initialValue: 'info@edgpatioshade.com' }),
        defineField({ name: 'hours', title: 'Business Hours', type: 'string', initialValue: 'Mon–Fri, 7am–4pm CT' }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            defineField({ name: 'street', title: 'Street', type: 'string', initialValue: '1802 Holian Drive' }),
            defineField({ name: 'city', title: 'City', type: 'string', initialValue: 'Spring Grove' }),
            defineField({ name: 'state', title: 'State', type: 'string', initialValue: 'IL' }),
            defineField({ name: 'zip', title: 'ZIP', type: 'string', initialValue: '60081' }),
            defineField({ name: 'showroomName', title: 'Showroom Name', type: 'string', initialValue: 'Spring Grove Showroom' }),
          ],
        }),
      ],
    }),
    // Legacy fields - keeping for backwards compatibility
    defineField({
      name: 'contactInfo',
      title: 'Contact Info (Legacy)',
      type: 'object',
      group: 'company',
      hidden: true,
      fields: [
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'phoneRaw', title: 'Phone Raw', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'string' }),
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours (Legacy)',
      type: 'object',
      group: 'company',
      hidden: true,
      fields: [
        defineField({ name: 'monday', title: 'Monday', type: 'string' }),
        defineField({ name: 'tuesday', title: 'Tuesday', type: 'string' }),
        defineField({ name: 'wednesday', title: 'Wednesday', type: 'string' }),
        defineField({ name: 'thursday', title: 'Thursday', type: 'string' }),
        defineField({ name: 'friday', title: 'Friday', type: 'string' }),
        defineField({ name: 'saturday', title: 'Saturday', type: 'string' }),
        defineField({ name: 'sunday', title: 'Sunday', type: 'string' }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links (Legacy)',
      type: 'object',
      group: 'social',
      hidden: true,
      fields: [
        defineField({ name: 'facebook', title: 'Facebook', type: 'string' }),
        defineField({ name: 'instagram', title: 'Instagram', type: 'string' }),
        defineField({ name: 'linkedin', title: 'LinkedIn', type: 'string' }),
      ],
    }),
    defineField({
      name: 'socialProof',
      title: 'Social Proof Stats',
      type: 'object',
      group: 'company',
      fields: [
        defineField({ name: 'projectsDelivered', title: 'Projects Delivered', type: 'number', initialValue: 75 }),
        defineField({ name: 'builderPartners', title: 'Builder Partners', type: 'number', initialValue: 20 }),
        defineField({ name: 'googleRating', title: 'Google Rating', type: 'number', initialValue: 5.0 }),
        defineField({ name: 'yearsExperience', title: 'Years Experience', type: 'number', initialValue: 10 }),
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'object',
      group: 'navigation',
      fields: [
        defineField({
          name: 'systemsDropdown',
          title: 'Systems Dropdown',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'label', title: 'Label', type: 'string' }),
              defineField({ name: 'href', title: 'URL', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'string' }),
            ],
          }],
        }),
        defineField({
          name: 'areasDropdown',
          title: 'Areas Dropdown',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'label', title: 'Label', type: 'string' }),
              defineField({ name: 'href', title: 'URL', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'string' }),
            ],
          }],
        }),
        defineField({
          name: 'mainLinks',
          title: 'Main Navigation Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'label', title: 'Label', type: 'string' }),
              defineField({ name: 'href', title: 'URL', type: 'string' }),
            ],
          }],
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Content',
      type: 'object',
      group: 'footer',
      fields: [
        defineField({
          name: 'description',
          title: 'Footer Description',
          type: 'text',
          initialValue: 'Premium motorized pergolas, exterior shades, and glass enclosures for the Chicago/Milwaukee region, with design and supply available nationwide.',
        }),
        defineField({
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'label', title: 'Label', type: 'string' }),
              defineField({ name: 'href', title: 'URL', type: 'string' }),
            ],
          }],
        }),
        defineField({
          name: 'serviceAreas',
          title: 'Footer Service Areas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'label', title: 'Label', type: 'string' }),
              defineField({ name: 'href', title: 'URL', type: 'string' }),
            ],
          }],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'object',
      group: 'social',
      fields: [
        defineField({ name: 'metaTitle', title: 'Default Meta Title', type: 'string', description: 'Default title for SEO (appears in browser tab and search results)' }),
        defineField({ name: 'metaDescription', title: 'Default Meta Description', type: 'text', rows: 3, description: 'Default description for SEO (appears in search results)' }),
        defineField({ name: 'ogImage', title: 'Default OG Image', type: 'image', description: 'Default image for social sharing' }),
        defineField({ name: 'twitterHandle', title: 'Twitter Handle', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Site Configuration',
        subtitle: 'Global site settings',
      };
    },
  },
});
