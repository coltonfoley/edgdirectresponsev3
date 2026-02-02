import { ServiceAreaLayout } from "@/components/features/service-area/ServiceAreaLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Motorized Pergolas & Patio Shades in Northbrook, IL | EDG",
    description: "Transform your Northbrook home with hurricane-rated louvered pergolas and retractable screens. Custom designed for 60062 zoning codes and Georgian architecture.",
};

export default function NorthbrookHub() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "EDG Outdoor Living - Northbrook",
                        "image": "https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png",
                        "url": "https://www.edgpatioshade.com/service-areas/northbrook-il",
                        "telephone": "+18155810138",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Northbrook",
                            "addressRegion": "IL",
                            "postalCode": "60062",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 42.1275,
                            "longitude": -87.8289
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": "Northbrook"
                        },
                        "priceRange": "$$$"
                    })
                }}
            />
            <ServiceAreaLayout
                location="Northbrook"
                state="IL"
                zipCodes={["60062", "60065"]}
                tagline="Extend Your Living Space, No Matter the Weather."
                description="In Northbrook, outdoor living means dealing with humid summers and heavy winter snow loads. Our systems are engineered to handle 115mph winds and open automatically to prevent snow buildup, making them the perfect addition to Northbrook's classic brick estates."
                heroImage="/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png"
                challenges={[
                    {
                        title: "Wind & Snow Load",
                        description: "Northbrook code requires 30psf snow ratings. Our louvers open automatically to protect your structure.",
                        icon: "snowflake"
                    },
                    {
                        title: "Architecture Match",
                        description: "From Shermer Road to the winding lanes of Techny, we match the classic Georgian and Colonial styles of the village.",
                        icon: "home"
                    },
                    {
                        title: "Zoning Compliance",
                        description: "We handle the entire Application for Permit process with the Village of Northbrook, ensuring 15ft height compliance.",
                        icon: "file-check"
                    }
                ]}
                links={[
                    { title: "Northbrook Zoning Guide", href: "/service-areas/northbrook-il/zoning-guide" },
                    { title: "Louvered Pergolas in Northbrook", href: "/service-areas/northbrook-il/motorized-pergolas" },
                    { title: "View Local Projects", href: "/projects" }
                ]}
            />
        </>
    );
}
