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

async function getDraftMode() {
    try {
        return (await draftMode()).isEnabled;
    } catch {
        return false;
    }
}

export async function getSiteConfig() {
    const isDraft = await getDraftMode();
    return client.fetch(siteConfigQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getHomepage() {
    const isDraft = await getDraftMode();
    return client.fetch(homepageQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProducts() {
    const isDraft = await getDraftMode();
    return client.fetch(productsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProduct(slug: string) {
    const isDraft = await getDraftMode();
    return client.fetch(productBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getLandingPage(slug: string) {
    const isDraft = await getDraftMode();
    return client.fetch(landingPageBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getTestimonials() {
    const isDraft = await getDraftMode();
    return client.fetch(testimonialsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getFeaturedTestimonials() {
    const isDraft = await getDraftMode();
    return client.fetch(featuredTestimonialsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getFAQs() {
    const isDraft = await getDraftMode();
    return client.fetch(faqsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getFAQsByCategory(category: string) {
    const isDraft = await getDraftMode();
    return client.fetch(faqsByCategoryQuery, { category }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProjects() {
    const isDraft = await getDraftMode();
    return client.fetch(projectsQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getProject(slug: string) {
    const isDraft = await getDraftMode();
    return client.fetch(projectBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getServiceAreas() {
    const isDraft = await getDraftMode();
    return client.fetch(serviceAreasQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getServiceArea(slug: string) {
    const isDraft = await getDraftMode();
    return client.fetch(serviceAreaBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGalleryImages() {
    const isDraft = await getDraftMode();
    return client.fetch(galleryImagesQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGalleryImagesByCategory(category: string) {
    const isDraft = await getDraftMode();
    return client.fetch(galleryImagesByCategoryQuery, { category }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGuides() {
    const isDraft = await getDraftMode();
    return client.fetch(guidesQuery, {}, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}

export async function getGuide(slug: string) {
    const isDraft = await getDraftMode();
    return client.fetch(guideBySlugQuery, { slug }, {
        token: isDraft ? process.env.SANITY_API_TOKEN : undefined,
        perspective: isDraft ? 'previewDrafts' : 'published',
        stega: isDraft,
        useCdn: !isDraft,
        next: { revalidate: isDraft ? 0 : 3600 }
    });
}
