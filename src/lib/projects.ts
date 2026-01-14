export interface Project {
    slug: string;
    title: string;
    location: string;
    type: string;
    systems: string[];
    cardImage: string; // Used on the main projects list
    heroImage: string; // Used on the project detail page banner
    galleryImages: string[];
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    specs: { label: string; value: string }[];
    testimonial?: { quote: string; name: string; title: string };
    relatedProjects: string[];
}

export const projects: Project[] = [
    {
        slug: "lake-forest-pergola",
        title: "Lakefront Pergola & Shades",
        location: "Lake Forest, IL",
        type: "Residential",
        systems: ["Louvered Pergola", "Motorized Shades"],
        cardImage: "/images/projects/project-01.jpg",
        heroImage: "/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg",
        galleryImages: [
            "/images/pergolas/residential-white-pergola-pool-glass-doors-02.jpg",
            "/images/shades/shades-hero.jpg",
            "/images/staging/residential-white-pergola-pool-glass-doors-03.jpg"
        ],
        description: "A comprehensive outdoor living solution for a family seeking year-round usability on their Lake Michigan property.",
        challenge: "The homeowners had a beautiful lakefront view but couldn't enjoy their patio for most of the year. Summer sun made it unbearably hot by noon, spring and fall winds cut short any outdoor time, and surprise rain showers ruined countless gatherings. They needed a solution that would handle all of these challenges without blocking their prized view of the lake.",
        solution: "We designed a 16x20 louvered pergola with integrated heating and four motorized shade drops. The louvers provide instant rain protection and adjustable sun control, while the shades block wind and reduce heat gain by over 80%. Integrated infrared heaters extend the season well into fall. The entire system is smart-home integrated, responding to weather sensors automatically.",
        results: [
            "Year-round outdoor usability (April through November)",
            "Zero weather-related entertaining cancellations since installation",
            "80%+ reduction in afternoon heat on the patio",
            "Seamless integration with existing home automation",
        ],
        specs: [
            { label: "Size", value: "16' x 20' (320 sq ft)" },
            { label: "Timeline", value: "6 weeks from contract to completion" },
            { label: "Systems", value: "Louvered Pergola + 4 Motorized Shades" },
            { label: "Features", value: "LED lighting, integrated heating, weather sensors" },
        ],
        testimonial: {
            quote: "We went from using our patio maybe 20 days a year to using it almost every day from April to November. It completely changed how we live.",
            name: "Mike & Sarah T.",
            title: "Homeowners"
        },
        relatedProjects: ["barrington-outdoor-room", "libertyville-shade-system"]
    },
    {
        slug: "barrington-outdoor-room",
        title: "Complete Outdoor Room",
        location: "Barrington, IL",
        type: "Residential",
        systems: ["Louvered Pergola", "Glass Enclosure"],
        cardImage: "/images/frameless-sliding-glass-walls.jpg",
        heroImage: "/images/staging/residential-white-pergola-pool-glass-doors-03.jpg",
        galleryImages: [
            "/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg",
            "/images/pergolas/residential-gray-bronze-r-blade-pool-chairs.jpg",
            "/images/shades/shades-hero.jpg"
        ],
        description: "An underutilized concrete patio transformed into a true four-season room with full weather protection.",
        challenge: "The homeowners had invested in a beautiful patio when they built their home, but found they rarely used it. Midwest weather made it uncomfortable most of the year, and they wanted a solution that would essentially add another room to their home without the cost and complexity of a full addition.",
        solution: "We combined a louvered pergola with frameless glass walls that stack and disappear when not needed. When closed, the space is completely weatherproof. When open, it feels like an outdoor patio. Integrated heating allows use well into winter for holiday entertaining.",
        results: [
            "Added functional square footage without traditional construction",
            "Year-round entertaining space for family gatherings",
            "Increased home value with premium outdoor living amenity",
            "Glass walls stack completely out of sight when open",
        ],
        specs: [
            { label: "Size", value: "18' x 22' (396 sq ft)" },
            { label: "Timeline", value: "8 weeks from contract to completion" },
            { label: "Systems", value: "Louvered Pergola + Glass Enclosure" },
            { label: "Features", value: "Stacking glass walls, integrated heating, LED package" },
        ],
        testimonial: {
            quote: "It's like we added a room to our house for a fraction of what an addition would cost. We use it every single day.",
            name: "The Reynolds Family",
            title: "Homeowners"
        },
        relatedProjects: ["lake-forest-pergola", "highland-park-builder"]
    },
    {
        slug: "lake-geneva-restaurant",
        title: "Restaurant Patio Expansion",
        location: "Lake Geneva, WI",
        type: "Commercial",
        systems: ["Louvered Pergola", "Integrated Heating"],
        cardImage: "/images/commercial-restaurant-patio-enclosure.jpg",
        heroImage: "/images/commercial-pergola-glass-enclosure-day-dining-01.jpg",
        galleryImages: [
            "/images/commercial-glass-enclosure-day-exterior-01.jpg",
            "/images/commercial-glass-enclosure-night-dining-01.jpg",
            "/images/commercial-glass-enclosure-interior-wood-deck-01.jpg"
        ],
        description: "A lakeside fine dining restaurant eliminates weather cancellations and extends their patio season by 10 weeks.",
        challenge: "This lakeside restaurant had valuable patio real estate but could only use it reliably for a few months each year. Sudden rain would send guests inside mid-meal, hot afternoons kept the lunch crowd away, and the season ended abruptly in September. They needed a solution that would maximize their outdoor seating capacity while protecting the dining experience.",
        solution: "We installed a 16x20 louvered pergola with commercial-grade heating and lighting. The louvers close in under 60 seconds when rain sensors detect moisture, and the integrated heaters keep guests comfortable well into October. The system was installed during their slow season with minimal disruption to operations.",
        results: [
            "40 additional covered seats",
            "Zero weather cancellations since installation",
            "Extended patio season by 10 weeks (April-November)",
            "ROI achieved in first 4 months of operation",
        ],
        specs: [
            { label: "Size", value: "16' x 20' (320 sq ft)" },
            { label: "Timeline", value: "4 weeks from contract to completion" },
            { label: "Systems", value: "Commercial Louvered Pergola" },
            { label: "Features", value: "Commercial heating, rain sensors, integrated lighting" },
        ],
        testimonial: {
            quote: "The pergola paid for itself by July. Our patio went from a liability to our biggest revenue driver.",
            name: "Restaurant Owner",
            title: "Lake Geneva, WI"
        },
        relatedProjects: ["wilmette-country-club"]
    },
    {
        slug: "libertyville-shade-system",
        title: "Whole-Home Shade System",
        location: "Libertyville, IL",
        type: "Residential",
        systems: ["Motorized Shades"],
        cardImage: "/images/motorized-retractable-screens-patio.jpg",
        heroImage: "/images/shades/shades-hero.jpg",
        galleryImages: [
            "/images/pergolas/residential-black-r-blade-04.jpg",
            "/images/staging/residential-white-pergola-pool-glass-doors-03.jpg",
            "/images/pergolas/residential-gray-bronze-r-blade-pool-chairs.jpg"
        ],
        description: "Six motorized exterior shades protecting a south-facing home from summer heat while preserving backyard views.",
        challenge: "The homeowners' south-facing great room became unbearably hot every summer afternoon. Their HVAC system struggled to keep up, energy bills soared, and the furniture was fading from UV exposure. Interior blinds helped but blocked their beautiful backyard view entirely.",
        solution: "We installed six motorized exterior shades that block 85% of solar heat before it enters the home. The shades retract completely into discrete housing when not needed, preserving views. Smart home integration allows scheduling and weather-based automation.",
        results: [
            "Significant reduction in afternoon cooling load",
            "Eliminated furniture fading from UV exposure",
            "Views preserved when shades retracted",
            "Automated scheduling and weather response",
        ],
        specs: [
            { label: "Coverage", value: "6 openings (12' wide each)" },
            { label: "Timeline", value: "3 weeks from contract to completion" },
            { label: "Systems", value: "Wind-Rated Motorized Shades" },
            { label: "Features", value: "Smart home integration, wind sensors, discrete housing" },
        ],
        testimonial: {
            quote: "Our great room is finally comfortable in the summer. I can't believe how much of a difference exterior shades make compared to interior blinds.",
            name: "Jennifer L.",
            title: "Homeowner"
        },
        relatedProjects: ["lake-forest-pergola", "highland-park-builder"]
    },
    {
        slug: "highland-park-builder",
        title: "New Construction Integration",
        location: "Highland Park, IL",
        type: "Builder Project",
        systems: ["Louvered Pergola", "Motorized Shades", "Glass Enclosure"],
        cardImage: "/images/projects/project-05.jpg",
        heroImage: "/images/pergolas/residential-black-r-blade-01.jpg",
        galleryImages: [
            "/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg",
            "/images/staging/residential-white-pergola-pool-glass-doors-03.jpg",
            "/images/shades/shades-hero.jpg"
        ],
        description: "A complete outdoor living package coordinated during new construction for seamless integration.",
        challenge: "A custom home builder wanted to offer their client a premium outdoor living package but didn't have the expertise to design or install shading systems. They needed a partner who could coordinate with the build schedule, work with their structural engineer, and deliver a turnkey solution.",
        solution: "We joined the project during the design phase, coordinating structural attachments and electrical rough-in with the build team. The result was seamless integration—the pergola looks like it was always part of the home, not an afterthought.",
        results: [
            "Seamless architectural integration",
            "No delays to the build schedule",
            "Single point of coordination for the builder",
            "Premium upgrade that increased home value",
        ],
        specs: [
            { label: "Size", value: "450 sq ft total covered area" },
            { label: "Timeline", value: "Coordinated with 6-month build schedule" },
            { label: "Systems", value: "Pergola + Shades + Glass Enclosure" },
            { label: "Features", value: "Full automation, heating, lighting, glass walls" },
        ],
        testimonial: {
            quote: "EDG made shading the easiest part of the project. No delays, no surprises, no callbacks.",
            name: "Tom Reynolds",
            title: "Reynolds Custom Homes"
        },
        relatedProjects: ["barrington-outdoor-room", "lake-forest-pergola"]
    },
    {
        slug: "wilmette-country-club",
        title: "Country Club Pool Deck",
        location: "Wilmette, IL",
        type: "Commercial",
        systems: ["Louvered Pergola"],
        cardImage: "/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg",
        heroImage: "/images/commercial-white-r-blade-screens-lake.jpg",
        galleryImages: [
            "/images/commercial-glass-enclosure-day-exterior-01.jpg",
            "/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg",
            "/images/staging/residential-white-pergola-pool-glass-doors-03.jpg"
        ],
        description: "Twin pergola structures providing all-weather coverage for the member pool deck at a private country club.",
        challenge: "The club's pool deck was popular with members but offered no shade or rain protection. Members would leave during afternoon heat or sudden showers, reducing pool attendance and affecting member satisfaction scores.",
        solution: "We installed twin louvered pergola structures flanking the pool, providing shaded seating areas that can also protect from rain. Commercial-grade construction handles the high traffic and demanding environment of a club facility.",
        results: [
            "Increased pool deck utilization throughout the day",
            "Members stay during afternoon heat and light rain",
            "Improved member satisfaction scores",
            "Minimal maintenance requirements",
        ],
        specs: [
            { label: "Size", value: "Two 14' x 18' structures (504 sq ft total)" },
            { label: "Timeline", value: "5 weeks from contract to completion" },
            { label: "Systems", value: "Commercial Louvered Pergolas" },
            { label: "Features", value: "Commercial-grade construction, integrated lighting" },
        ],
        testimonial: {
            quote: "Our members can use the pool deck in any weather now. It's become our most popular amenity.",
            name: "General Manager",
            title: "Private Country Club"
        },
        relatedProjects: ["lake-geneva-restaurant"]
    }
];

export function getAllProjects(): Project[] {
    return projects;
}

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
