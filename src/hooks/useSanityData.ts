'use client';

import useSWR from 'swr';
import { getSiteConfig, getHomepage, getProducts, getTestimonials, getFAQs, getProjects, getServiceAreas, getGuides } from '@/sanity/lib/fetch';

// Site Config
export function useSiteConfig() {
  const { data, error, isLoading } = useSWR('siteConfig', getSiteConfig, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { config: data, error, loading: isLoading };
}

// Homepage
export function useHomepage() {
  const { data, error, isLoading } = useSWR('homepage', getHomepage, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { homepage: data, error, loading: isLoading };
}

// Products
export function useProducts() {
  const { data, error, isLoading } = useSWR('products', getProducts, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { products: data || [], error, loading: isLoading };
}

// Testimonials
export function useTestimonials() {
  const { data, error, isLoading } = useSWR('testimonials', getTestimonials, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { testimonials: data || [], error, loading: isLoading };
}

// FAQs
export function useFAQs() {
  const { data, error, isLoading } = useSWR('faqs', getFAQs, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { faqs: data || [], error, loading: isLoading };
}

// Projects
export function useProjects() {
  const { data, error, isLoading } = useSWR('projects', getProjects, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { projects: data || [], error, loading: isLoading };
}

// Service Areas
export function useServiceAreas() {
  const { data, error, isLoading } = useSWR('serviceAreas', getServiceAreas, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { areas: data || [], error, loading: isLoading };
}

// Guides
export function useGuides() {
  const { data, error, isLoading } = useSWR('guides', getGuides, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { guides: data || [], error, loading: isLoading };
}
