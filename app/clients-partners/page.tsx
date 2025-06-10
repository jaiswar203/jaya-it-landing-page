import ClientsPartnersClient from "@/components/clients-partners/ClientsPartnersClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients & Strategic Partners - Trusted Relationships",
  description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders including Microsoft, AWS, Google Cloud, Cisco, and serve enterprises across multiple industries.",
  keywords: [
    "JAYAA IT clients",
    "strategic partners", 
    "technology partners",
    "enterprise clients",
    "Microsoft partner",
    "AWS partner",
    "Google Cloud partner",
    "Cisco partner",
    "IT service clients",
    "managed services clients",
    "enterprise partnerships",
    "technology alliances"
  ],
  alternates: {
    canonical: "/clients-partners",
  },
  openGraph: {
    title: "Our Clients & Strategic Partners - JAYAA IT Solution",
    description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders and serve enterprises across multiple industries.",
    url: "https://www.jayaaitsolution.com/clients-partners",
    type: "website",
    images: [
      {
        url: "/og-clients-partners.jpg",
        width: 1200,
        height: 630,
        alt: "JAYAA IT Solution Clients & Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients & Strategic Partners - JAYAA IT Solution",
    description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders and serve enterprises across multiple industries.",
    images: ["/og-clients-partners.jpg"],
  },
};

export default function ClientsPartnersPage() {
  return <ClientsPartnersClient />;
} 