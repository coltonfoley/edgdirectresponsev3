import { groq } from 'next-sanity';

// Site Config
export const siteConfigQuery = groq`*[_type == "siteConfig"][0]`;

// Homepage
export const homepageQuery = groq`*[_type == "homepage"][0] {
  ...,
  "productsSection": productsSection {
    ...,
    "systems": systems[]-> {
      _id,
      name,
      slug,
      category,
      tagline,
      shortDescription,
      heroImage,
      pricingUrl,
      quoteUrl
    }
  },
  "featuresSection": featuresSection {
    ...,
    "testimonial": testimonial-> {
      quote,
      author,
      title,
      location,
      projectType
    }
  },
  guideOffer,
  pathsSection,
  socialProof
}`;

// Products
export const productsQuery = groq`*[_type == "product"] | order(order asc) {
  _id,
  name,
  slug,
  category,
  tagline,
  shortDescription,
  description,
  heroImage,
  "gallery": gallery[] {
    "url": image.asset->url,
    alt,
    caption
  },
  quickFeatures,
  features,
  specifications,
  colorOptions,
  addOns,
  pricingUrl,
  quoteUrl
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  ...,
  heroImage,
  "gallery": gallery[] {
    image,
    alt,
    caption
  },
  beforeAfter,
  "lifestyleGallery": lifestyleGallery[] {
    image,
    label
  },
  "relatedProducts": relatedProducts[]-> {
    _id,
    name,
    slug,
    category,
    heroImage,
    shortDescription
  }
}`;

// Landing Pages - Full content
export const landingPageBySlugQuery = groq`*[_type == "landingPage" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  pageType,
  hero {
    badge,
    headline,
    description,
    ctaText,
    ctaUrl,
    secondaryCtaText,
    secondaryCtaUrl,
    footnote
  },
  problemSection {
    title,
    painPoints
  },
  solutionSection {
    title,
    description,
    features,
    image
  },
  whatYouGet {
    title,
    description,
    items
  },
  processSteps,
  promiseSection {
    icon,
    title,
    description
  },
  pricingFactors {
    title,
    description,
    factors
  },
  servicesIncluded {
    title,
    description,
    items
  },
  tradeServices {
    title,
    services
  },
  caseStudy {
    title,
    projectName,
    description,
    results,
    testimonial
  },
  guarantee {
    icon,
    title,
    description
  },
  industries {
    title,
    items
  },
  roiCaseStudy {
    title,
    description,
    projectName,
    location,
    projectType,
    investment,
    results,
    roiTime,
    testimonial
  },
  capabilities {
    title,
    items
  },
  serviceCommitment {
    icon,
    title,
    description
  },
  testimonials,
  faqs,
  finalCta {
    title,
    description,
    ctaText,
    ctaUrl,
    secondaryCtaText,
    secondaryCtaUrl
  }
}`;

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  quote,
  author,
  title,
  location,
  company,
  projectType,
  type,
  image,
  featured
}`;

export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(order asc) {
  quote,
  author,
  title,
  location,
  company,
  projectType,
  image,
}`;

// FAQs
export const faqsQuery = groq`*[_type == "faq"] | order(order asc) {
  question,
  answer,
  category,
  relatedPages
}`;

export const faqsByCategoryQuery = groq`*[_type == "faq" && category == $category] | order(order asc) {
  question,
  answer
}`;

// Projects
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  location,
  type,
  cardImage,
  heroImage,
  description,
  featured,
  systemNames
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  ...,
  cardImage,
  heroImage,
  "gallery": gallery[] {
    image,
    alt,
    caption
  },
  systems[]-> {
    _id,
    name,
    slug
  },
  "relatedProjects": relatedProjects[]-> {
    _id,
    title,
    slug,
    location,
    cardImage
  }
}`;

// Service Areas
export const serviceAreasQuery = groq`*[_type == "serviceArea"] | order(name asc) {
  _id,
  name,
  slug,
  description,
  featured,
  communities,
  badge
}`;

export const serviceAreaBySlugQuery = groq`*[_type == "serviceArea" && slug.current == $slug][0] {
  ...,
  heroImage,
  localProjects[]-> {
    _id,
    title,
    slug,
    "cardImage": cardImage.asset->url,
    description
  }
}`;

// Gallery
export const galleryImagesQuery = groq`*[_type == "galleryImage"] | order(order asc) {
  _id,
  title,
  "src": image,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height,
  alt,
  category,
  tags,
  featured
}`;

export const galleryImagesByCategoryQuery = groq`*[_type == "galleryImage" && category == $category] | order(order asc) {
  _id,
  title,
  "src": image,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height,
  alt
}`;

// Guides
export const guidesQuery = groq`*[_type == "guide"] | order(featured desc, _createdAt desc) {
  _id,
  title,
  slug,
  description,
  readTime,
  category,
  "heroImage": heroImage.asset->url,
  featured
}`;

export const guideBySlugQuery = groq`*[_type == "guide" && slug.current == $slug][0] {
  ...,
  "heroImage": heroImage.asset->url,
  content
}`;

// Contact Page
export const contactPageQuery = groq`*[_type == "contactPage"][0] {
  heroHeadline,
  heroDescription,
  sidebarTitle,
  processSteps,
  contactTitle,
  phone,
  phoneRaw,
  hours,
  locationName,
  address
}`;
