import { Metadata } from "next";
import ContactClient from "@/components/features/contact/ContactClient";

export const metadata: Metadata = {
    title: "Contact EDG Outdoor Living | Get a Quote",
    description: "Start your outdoor living project. Request a quote for motorized pergolas, retractable shades, or glass enclosures in Chicago & Milwaukee.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
