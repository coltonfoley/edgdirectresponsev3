import type { Metadata } from "next";
import HomeClient from "@/components/features/home/HomeClient";

export const metadata: Metadata = {
  title: "Motorized Pergolas Chicago | Outdoor Shades & Glass Enclosures",
  description: "Premium motorized pergolas, exterior shades, and glass enclosures. Full-service installation for the Chicago to Milwaukee region, with nationwide design and supply available.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
