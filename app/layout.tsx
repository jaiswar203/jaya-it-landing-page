import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header" // Import new Header
import Footer from "@/components/layout/footer" // Import new Footer
import CursorFollower from "@/components/ui/cursor-follower" // Import CursorFollower

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }) // Add variable

export const metadata: Metadata = {
  title: {
    default: "JAYAA IT Solution Pvt. Ltd. | Innovative IT Solutions",
    template: "%s | JAYAA IT Solution Pvt. Ltd.",
  },
  description:
    "Premier IT service provider delivering cutting-edge technology solutions, IT security, infrastructure management, consultancy, and support globally.",
  keywords: [
    "IT solutions",
    "cybersecurity",
    "cloud services",
    "digital transformation",
    "IT consulting",
    "managed services",
    "enterprise security",
    "technology consulting",
    "IT infrastructure",
    "software development"
  ],
  authors: [{ name: "JAYAA IT Solution Pvt. Ltd." }],
  creator: "JAYAA IT Solution Pvt. Ltd.",
  publisher: "JAYAA IT Solution Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.jayaaitsolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jayaaitsolution.com",
    title: "JAYAA IT Solution Pvt. Ltd. | Innovative IT Solutions",
    description: "Premier IT service provider delivering cutting-edge technology solutions, IT security, infrastructure management, consultancy, and support globally.",
    siteName: "JAYAA IT Solution Pvt. Ltd.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JAYAA IT Solution - Premier IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYAA IT Solution Pvt. Ltd. | Innovative IT Solutions",
    description: "Premier IT service provider delivering cutting-edge technology solutions, IT security, infrastructure management, consultancy, and support globally.",
    images: ["/og-image.jpg"],
    creator: "@jayaaitsolution",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#781819",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#781819",
    "theme-color": "#781819",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-grow pt-20">
            {" "}
            {/* Add pt-20 to account for sticky header height */}
            {children}
          </main>
          <Footer />
          <CursorFollower />
        </ThemeProvider>
      </body>
    </html>
  )
}
