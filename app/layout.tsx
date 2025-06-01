import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header" // Import new Header
import Footer from "@/components/layout/footer" // Import new Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }) // Add variable

export const metadata: Metadata = {
  title: {
    default: "JAYAA IT Solution Pvt. Ltd. | Innovative IT Solutions",
    template: "%s | JAYAA IT Solution Pvt. Ltd.",
  },
  description:
    "Premier IT service provider delivering cutting-edge technology solutions, IT security, infrastructure management, consultancy, and support globally.",
  icons: {
    icon: "/favicon.ico", // Add favicon
  },
    generator: 'v0.dev'
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
        </ThemeProvider>
      </body>
    </html>
  )
}
