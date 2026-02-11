import { defineField, defineType } from 'sanity';
import { FileText } from 'lucide-react';

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: FileText,
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'problem', title: 'Problem Section' },
    { name: 'solution', title: 'Solution Section' },
    { name: 'whatYouGet', title: "What You'll Get" },
    { name: 'process', title: 'Process' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'caseStudy', title: 'Case Study' },
    { name: 'faq', title: 'FAQ' },
    { name: 'special', title: 'Page-Specific Sections' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Design Consultation', value: 'design' },
          { title: 'Pricing', value: 'price' },
          { title: 'Professional/Trade', value: 'pro' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // ==================== HERO ====================
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'array',
          of: [{ type: 'block' }],
        }),
        defineField({ name: 'subheadline', title: 'Subheadline', type: 'text' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
        defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string' }),
        defineField({ name: 'secondaryCtaText', title: 'Secondary CTA', type: 'string' }),
        defineField({ name: 'secondaryCtaUrl', title: 'Secondary CTA URL', type: 'string' }),
        defineField({ name: 'footnote', title: 'Footnote', type: 'string' }),
      ],
    }),

    // ==================== PROBLEM SECTION ====================
    defineField({
      name: 'problemSection',
      title: 'Problem/Agitation Section',
      type: 'object',
      group: 'problem',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'painPoints',
          title: 'Pain Points',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== SOLUTION SECTION ====================
    defineField({
      name: 'solutionSection',
      title: 'Solution Section',
      type: 'object',
      group: 'solution',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'features',
          title: 'Features',
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
          name: 'image',
          title: 'Section Image',
          type: 'object',
          fields: [
            defineField({ name: 'url', title: 'Image URL', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
    }),

    // ==================== WHAT YOU GET ====================
    defineField({
      name: 'whatYouGet',
      title: "What You'll Get Section",
      type: 'object',
      group: 'whatYouGet',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== PROCESS STEPS ====================
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      group: 'process',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'step', title: 'Step Number', type: 'string' }),
          defineField({ name: 'title', title: 'Step Title', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text' }),
          defineField({ name: 'time', title: 'Timeframe', type: 'string' }),
        ],
      }],
    }),

    // ==================== PROCESS SECTION (Legacy) ====================
    defineField({
      name: 'processSection',
      title: 'Process Section (Legacy)',
      type: 'object',
      group: 'process',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'step', title: 'Step Number', type: 'string' }),
              defineField({ name: 'title', title: 'Step Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
              defineField({ name: 'timeframe', title: 'Timeframe', type: 'string' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== PROMISE SECTION (Design Page) ====================
    defineField({
      name: 'promiseSection',
      title: 'Promise Section',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
      ],
    }),

    // ==================== PRICING FACTORS (Price Page) ====================
    defineField({
      name: 'pricingFactors',
      title: 'Pricing Factors',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'factors',
          title: 'Factors',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== SERVICES INCLUDED (Price Page) ====================
    defineField({
      name: 'servicesIncluded',
      title: 'Services Included',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== TRADE SERVICES (Pro Page) ====================
    defineField({
      name: 'tradeServices',
      title: 'Trade Services',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
              defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
              defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== CASE STUDY (Pro Page) ====================
    defineField({
      name: 'caseStudy',
      title: 'Case Study',
      type: 'object',
      group: 'caseStudy',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'projectName', title: 'Project Name', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'results',
          title: 'Results',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'testimonial',
          title: 'Testimonial',
          type: 'object',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text' }),
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
          ],
        }),
      ],
    }),

    // ==================== GUARANTEE (Pro Page) ====================
    defineField({
      name: 'guarantee',
      title: 'Guarantee',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
      ],
    }),

    // ==================== INDUSTRIES (Commercial Page) ====================
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Industries',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
              defineField({ name: 'highlight', title: 'Highlight', type: 'string' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== ROI CASE STUDY (Commercial Page) ====================
    defineField({
      name: 'roiCaseStudy',
      title: 'ROI Case Study',
      type: 'object',
      group: 'caseStudy',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'projectName', title: 'Project Name', type: 'string' }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({ name: 'projectType', title: 'Project Type', type: 'string' }),
        defineField({ name: 'investment', title: 'Investment', type: 'string' }),
        defineField({
          name: 'results',
          title: 'Results',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'roiTime', title: 'ROI Time', type: 'string' }),
        defineField({
          name: 'testimonial',
          title: 'Testimonial',
          type: 'object',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text' }),
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
          ],
        }),
      ],
    }),

    // ==================== CAPABILITIES (Commercial Page) ====================
    defineField({
      name: 'capabilities',
      title: 'Capabilities',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Capabilities',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
            ],
          }],
        }),
      ],
    }),

    // ==================== SERVICE COMMITMENT (Commercial Page) ====================
    defineField({
      name: 'serviceCommitment',
      title: 'Service Commitment',
      type: 'object',
      group: 'special',
      fields: [
        defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
      ],
    }),

    // ==================== INLINE TESTIMONIALS ====================
    defineField({
      name: 'testimonials',
      title: 'Inline Testimonials',
      type: 'array',
      group: 'testimonials',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'quote', title: 'Quote', type: 'text' }),
          defineField({ name: 'name', title: 'Name', type: 'string' }),
          defineField({ name: 'location', title: 'Location', type: 'string' }),
          defineField({ name: 'project', title: 'Project Type', type: 'string' }),
          defineField({ name: 'company', title: 'Company', type: 'string' }),
        ],
      }],
    }),

    // ==================== REFERENCE TESTIMONIALS ====================
    defineField({
      name: 'testimonialRefs',
      title: 'Testimonial References',
      type: 'array',
      group: 'testimonials',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),

    // ==================== INLINE FAQS ====================
    defineField({
      name: 'faqs',
      title: 'Inline FAQs',
      type: 'array',
      group: 'faq',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', title: 'Question', type: 'string' }),
          defineField({ name: 'answer', title: 'Answer', type: 'text' }),
        ],
      }],
    }),

    // ==================== REFERENCE FAQS ====================
    defineField({
      name: 'faqSection',
      title: 'FAQ Section (References)',
      type: 'object',
      group: 'faq',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'faqRefs',
          title: 'FAQs',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'faq' }] }],
        }),
      ],
    }),

    // ==================== FINAL CTA ====================
    defineField({
      name: 'finalCta',
      title: 'Final CTA',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
        defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string' }),
        defineField({ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string' }),
        defineField({ name: 'secondaryCtaUrl', title: 'Secondary CTA URL', type: 'string' }),
      ],
    }),

    // ==================== LEGACY FINAL CTA ====================
    defineField({
      name: 'finalCTA',
      title: 'Final CTA (Legacy)',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'primaryCta', title: 'Primary CTA Text', type: 'string' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA Text', type: 'string' }),
      ],
    }),

    // ==================== SEO ====================
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageType',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : '',
      };
    },
  },
});
