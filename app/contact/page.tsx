import type { Metadata } from "next"
import ContactClient from "@/components/contact/ContactClient"

export const metadata: Metadata = {
  title: "Contact Us - Get Expert IT Support & Consultation",
  description: "Contact JAYAA IT Solution for expert IT support, cybersecurity services, and digital transformation solutions. Available 24/7 with free consultation. Call +91 8268949507 or email us today.",
  keywords: [
    "contact JAYAA IT",
    "IT support contact",
    "cybersecurity consultation",
    "IT services inquiry",
    "technical support",
    "free IT consultation",
    "enterprise IT contact",
    "digital transformation consultation",
    "IT solutions contact",
    "technology consulting"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact JAYAA IT Solution - Expert IT Support & Consultation",
    description: "Contact JAYAA IT Solution for expert IT support, cybersecurity services, and digital transformation solutions. Available 24/7 with free consultation.",
    url: "https://www.jayaaitsolution.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact JAYAA IT Solution - Expert IT Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JAYAA IT Solution - Expert IT Support & Consultation",
    description: "Contact JAYAA IT Solution for expert IT support, cybersecurity services, and digital transformation solutions. Available 24/7 with free consultation.",
    images: ["/og-contact.jpg"],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
