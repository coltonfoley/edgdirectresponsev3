import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | EDG Expert Guides",
        default: "Expert Outdoor Living Guides",
    },
    description: "Comprehensive guides on motorized pergolas, retractable screens, and four-season outdoor living design.",
};

export default function GuidesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-edg-light dark:bg-black min-h-screen">
            {children}
        </div>
    );
}
