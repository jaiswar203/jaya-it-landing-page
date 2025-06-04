import {
  ServiceSuitesSection,
  CoreCapabilitiesSection,
} from "@/components/services";
import AnimatedDiv from "@/components/ui/animated-div";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star, Shield, Zap, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services - Comprehensive Technology Solutions",
  description: "Explore JAYAA IT Solution's comprehensive IT services including cybersecurity, digital transformation, cloud solutions, managed services, and professional consulting. Expert support for enterprise technology needs.",
  keywords: [
    "IT services",
    "cybersecurity services",
    "digital transformation",
    "cloud solutions",
    "managed IT services",
    "professional services",
    "enterprise IT",
    "technology consulting",
    "zero trust security",
    "advanced IT solutions",
    "infrastructure management",
    "IT support services"
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "IT Services - Comprehensive Technology Solutions | JAYAA IT",
    description: "Explore JAYAA IT Solution's comprehensive IT services including cybersecurity, digital transformation, cloud solutions, managed services, and professional consulting.",
    url: "https://www.jayaaitsolution.com/services",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "JAYAA IT Services - Comprehensive Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services - Comprehensive Technology Solutions | JAYAA IT",
    description: "Explore JAYAA IT Solution's comprehensive IT services including cybersecurity, digital transformation, cloud solutions, managed services, and professional consulting.",
    images: ["/og-services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-white/20">
                <Star className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  Our Services
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Comprehensive
                <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text">
                  IT Solutions
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
                Empowering businesses with cutting-edge technology, robust
                security, and expert guidance. Our comprehensive suite of
                services covers everything from zero trust security to digital
                transformation.
              </p>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <AnimatedDiv delay={0.2}>
                  <div className="flex items-center space-x-3 text-left">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Advanced Security
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Zero trust architecture
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>

                <AnimatedDiv delay={0.3}>
                  <div className="flex items-center space-x-3 text-left">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Digital Innovation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Intelligent automation
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>

                <AnimatedDiv delay={0.4}>
                  <div className="flex items-center space-x-3 text-left">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Expert Support
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        24/7 professional services
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Link href="/contact">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 px-8 py-4 text-lg"
                >
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      <ServiceSuitesSection />
      <CoreCapabilitiesSection />
    </>
  );
}
