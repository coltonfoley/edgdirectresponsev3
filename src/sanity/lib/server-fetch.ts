import { draftMode } from 'next/headers';
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

export async function getSiteConfig() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(siteConfigQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getHomepage() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(homepageQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProducts() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(productsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProduct(slug: string) {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(productBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getLandingPage(slug: string) {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(landingPageBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getTestimonials() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(testimonialsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getFeaturedTestimonials() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(featuredTestimonialsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getFAQs() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(faqsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getFAQsByCategory(category: string) {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(faqsByCategoryQuery, { category }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProjects() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(projectsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProject(slug: string) {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(projectBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getServiceAreas() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(serviceAreasQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getServiceArea(slug: string) {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(serviceAreaBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGalleryImages() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(galleryImagesQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGalleryImagesByCategory(category: string) {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(galleryImagesByCategoryQuery, { category }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGuides() {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(guidesQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGuide(slug: string) {
    const isDraft = (await draftMode()).isEnabled;
    return client.fetch(guideBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}
