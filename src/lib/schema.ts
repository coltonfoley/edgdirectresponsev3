export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.edgpatioshade.com/#organization",
    name: "EDG Outdoor Living",
    description: "Premium motorized pergolas, exterior shades, and glass enclosures for outdoor living spaces. Serving the Chicago-Milwaukee corridor and nationwide.",
    url: "https://www.edgpatioshade.com",
    telephone: "+1-815-581-0138",
    email: "info@edgpatioshade.com",
    logo: "https://www.edgpatioshade.com/logo.png",
    image: "https://www.edgpatioshade.com/og-image.jpg",
    address: {
        "@type": "PostalAddress",
        streetAddress: "1802 Holian Drive",
        addressLocality: "Spring Grove",
        addressRegion: "IL",
        postalCode: "60081",
        addressCountry: "US"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 42.4439,
        longitude: -88.2356
    },
    areaServed: [
        {
            "@type": "State",
            name: "Illinois",
            containsPlace: [
                { "@type": "AdministrativeArea", name: "Lake County" },
                { "@type": "AdministrativeArea", name: "McHenry County" },
                { "@type": "AdministrativeArea", name: "Cook County" },
                { "@type": "City", name: "Chicago" },
                { "@type": "City", name: "Naperville" },
                { "@type": "City", name: "Barrington" },
                { "@type": "City", name: "Oak Brook" },
                { "@type": "City", name: "Hinsdale" }
            ]
        },
        {
            "@type": "State",
            name: "Wisconsin",
            containsPlace: [
                { "@type": "AdministrativeArea", name: "Kenosha County" },
                { "@type": "AdministrativeArea", name: "Racine County" },
                { "@type": "AdministrativeArea", name: "Milwaukee County" },
                { "@type": "City", name: "Lake Geneva" }
            ]
        },
        {
            "@type": "State",
            name: "Florida",
            containsPlace: [
                { "@type": "City", name: "Sanibel" },
                { "@type": "City", name: "Captiva" }
            ]
        }
    ],
    priceRange: "$$$",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "16:00"
        }
    ],
    sameAs: [
        "https://facebook.com/edgpatioshade",
        "https://instagram.com/edgpatioshade"
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Outdoor Living Systems",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Louvered Pergola Installation",
                    description: "Motorized aluminum pergolas with rotating louvers for sun and rain control"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Motorized Exterior Shades",
                    description: "Wind-rated exterior screens for heat and glare reduction"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Glass Enclosure Systems",
                    description: "Frameless retractable glass walls for weatherproof outdoor spaces"
                }
            }
        ]
    }
};

export function generateServiceSchema(params: {
    name: string;
    description: string;
    url: string;
    image?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": params.name,
        "description": params.description,
        "provider": {
            "@id": "https://www.edgpatioshade.com/#organization"
        },
        "areaServed": localBusinessSchema.areaServed,
        "url": params.url,
        ...(params.image && { "image": params.image })
    };
}
