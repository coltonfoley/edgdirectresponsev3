import { client } from './client';
import {
  siteConfigQuery,
  homepageQuery,
  productsQuery,
  productBySlugQuery,
  landingPageBySlugQuery,
  testimonialsQuery,
  featuredTestimonialsQuery,
  faqsQuery,
  faqsByCategoryQuery,
  projectsQuery,
  projectBySlugQuery,
  serviceAreasQuery,
  serviceAreaBySlugQuery,
  galleryImagesQuery,
  galleryImagesByCategoryQuery,
  guidesQuery,
  guideBySlugQuery,
} from './queries';

// Site Config
export async function getSiteConfig() {
  return client.fetch(siteConfigQuery);
}

// Homepage
export async function getHomepage() {
  return client.fetch(homepageQuery);
}

// Products
export async function getProducts() {
  return client.fetch(productsQuery);
}

export async function getProduct(slug: string) {
  return client.fetch(productBySlugQuery, { slug });
}

// Landing Pages
export async function getLandingPage(slug: string) {
  return client.fetch(landingPageBySlugQuery, { slug });
}

// Testimonials
export async function getTestimonials() {
  return client.fetch(testimonialsQuery);
}

export async function getFeaturedTestimonials() {
  return client.fetch(featuredTestimonialsQuery);
}

// FAQs
export async function getFAQs() {
  return client.fetch(faqsQuery);
}

export async function getFAQsByCategory(category: string) {
  return client.fetch(faqsByCategoryQuery, { category });
}

// Projects
export async function getProjects() {
  return client.fetch(projectsQuery);
}

export async function getProject(slug: string) {
  return client.fetch(projectBySlugQuery, { slug });
}

// Service Areas
export async function getServiceAreas() {
  return client.fetch(serviceAreasQuery);
}

export async function getServiceArea(slug: string) {
  return client.fetch(serviceAreaBySlugQuery, { slug });
}

// Gallery
export async function getGalleryImages() {
  return client.fetch(galleryImagesQuery);
}

export async function getGalleryImagesByCategory(category: string) {
  return client.fetch(galleryImagesByCategoryQuery, { category });
}

// Guides
export async function getGuides() {
  return client.fetch(guidesQuery);
}

export async function getGuide(slug: string) {
  return client.fetch(guideBySlugQuery, { slug });
}
