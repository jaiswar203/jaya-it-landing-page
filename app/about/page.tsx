import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Target,
  Zap,
  ArrowRight,
  Building2,
  Award,
  Shield,
} from "lucide-react";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/animated-div";
import Link from "next/link";
import {
  TypographyH2,
  TypographyGradientSubtitle,
  TypographyLarge,
  TypographyH5,
  TypographyBadge,
  TypographySmall,
} from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Premier IT Service Provider",
  description: "Learn about JAYAA IT Solution Pvt. Ltd., a premier IT service provider delivering innovative technology solutions, cybersecurity, and infrastructure management globally. Discover our values, expertise, and commitment to excellence.",
  keywords: [
    "about JAYAA IT",
    "IT service provider",
    "company profile",
    "IT solutions company",
    "technology expertise",
    "IT professionals",
    "enterprise IT services",
    "cybersecurity experts",
    "digital transformation",
    "IT consulting firm"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JAYAA IT Solution - Premier IT Service Provider",
    description: "Learn about JAYAA IT Solution Pvt. Ltd., a premier IT service provider delivering innovative technology solutions, cybersecurity, and infrastructure management globally.",
    url: "https://www.jayaaitsolution.com/about",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About JAYAA IT Solution - Premier IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About JAYAA IT Solution - Premier IT Service Provider",
    description: "Learn about JAYAA IT Solution Pvt. Ltd., a premier IT service provider delivering innovative technology solutions, cybersecurity, and infrastructure management globally.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  const achievements = [
    {
      value: "24/7/365",
      label: "Real-Time Threat Monitoring",
      colorClass:
        "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/30 text-primary dark:text-primary",
    },
    {
      value: "50+",
      label: "Enterprise Clients Protected",
      colorClass:
        "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/30 text-secondary dark:text-secondary",
    },
    {
      value: "99.9%",
      label: "Compliance-Driven Uptime SLA",
      colorClass:
        "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/30 text-primary dark:text-primary",
    },
  ];

  return (
    <>
      {/* Main About Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
                  <Building2 className="h-4 w-4 text-white" />
                  <TypographyBadge className="text-white">
                    Premier IT Service Provider
                  </TypographyBadge>
                </div>
                <TypographyH2 className="mb-0">
                  Transforming Businesses
                  <TypographyGradientSubtitle>
                    Through Innovation
                  </TypographyGradientSubtitle>
                </TypographyH2>
              </div>

              <TypographyLarge
                muted
                className="text-gray-800 dark:text-gray-200"
              >
                Jayaa IT Solution is a premier IT service provider, renowned for
                delivering innovative, cutting-edge technology solutions to
                businesses globally. With a strong focus on IT security,
                infrastructure management, consultancy, and support, we empower
                organizations to meet their operational and strategic goals with
                precision, efficiency, and innovation.
              </TypographyLarge>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Commitment to excellence and innovation.",
                  "Partnerships with leading Original Equipment Manufacturers (OEMs).",
                  "Enabling businesses from start-ups to enterprises to thrive.",
                  "ISO Certified & Industry Compliant solutions.",
                ].map((item, index) => (
                  <AnimatedDiv key={index} delay={index * 0.1}>
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-950/20 border border-secondary/20 dark:border-secondary/30">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      </div>
                      <TypographySmall className="font-medium">
                        {item}
                      </TypographySmall>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Professional IT team collaborating on technology solutions"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Company Achievements */}
                <div className="space-y-4">
                  <TypographyH5 className="text-gray-900 dark:text-white">
                    Trusted by Industry Leaders
                  </TypographyH5>

                  <div className="space-y-4">
                    {/* First row: First two achievements side by side */}
                    <div className="grid grid-cols-2 gap-4">
                      {achievements.slice(0, 2).map((achievement) => (
                        <AnimatedDiv key={achievement.label} delay={0.5}>
                          <div
                            className={`text-center p-3 bg-gradient-to-br ${
                              achievement.colorClass.split(" ")[0]
                            } ${achievement.colorClass.split(" ")[1]} ${
                              achievement.colorClass.split(" ")[2]
                            } ${
                              achievement.colorClass.split(" ")[3]
                            } rounded-lg`}
                          >
                            <div
                              className={`text-2xl font-bold ${
                                achievement.colorClass.split(" ")[4]
                              } ${achievement.colorClass.split(" ")[5]}`}
                            >
                              {achievement.value}
                            </div>
                            <TypographySmall
                              className={`${
                                achievement.colorClass.split(" ")[6]
                              } ${
                                achievement.colorClass.split(" ")[7]
                              } font-medium`}
                            >
                              {achievement.label}
                            </TypographySmall>
                          </div>
                        </AnimatedDiv>
                      ))}
                    </div>

                    {/* Second row: Third achievement spanning full width */}
                    {achievements.length > 2 && (
                      <div className="w-full">
                        <AnimatedDiv delay={0.6}>
                          <div
                            className={`text-center p-3 bg-gradient-to-br ${
                              achievements[2].colorClass.split(" ")[0]
                            } ${achievements[2].colorClass.split(" ")[1]} ${
                              achievements[2].colorClass.split(" ")[2]
                            } ${
                              achievements[2].colorClass.split(" ")[3]
                            } rounded-lg`}
                          >
                            <div
                              className={`text-2xl font-bold ${
                                achievements[2].colorClass.split(" ")[4]
                              } ${achievements[2].colorClass.split(" ")[5]}`}
                            >
                              {achievements[2].value}
                            </div>
                            <TypographySmall
                              className={`${
                                achievements[2].colorClass.split(" ")[6]
                              } ${
                                achievements[2].colorClass.split(" ")[7]
                              } font-medium`}
                            >
                              {achievements[2].label}
                            </TypographySmall>
                          </div>
                        </AnimatedDiv>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-20">
            <AnimatedDiv>
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-8">
                <Award className="h-4 w-4 text-white" />
                <TypographyBadge className="text-white">
                  Our Core Values
                </TypographyBadge>
              </div>
              <TypographyH2 className="mb-4">
                Guiding
                <TypographyGradientSubtitle>
                  Principles
                </TypographyGradientSubtitle>
              </TypographyH2>
              <TypographyLarge muted className="max-w-3xl mx-auto">
                Our core values shape every decision we make and guide us in
                delivering exceptional IT solutions that drive your business
                forward.
              </TypographyLarge>
            </AnimatedDiv>
          </div>

          <AnimatedDiv className="grid md:grid-cols-3 gap-8" delay={0.2}>
            {[
              {
                icon: <Users className="h-12 w-12" />,
                title: "Client-Centricity",
                description:
                  "Understanding and exceeding client expectations is at the heart of everything we do.",
                iconColor: "text-secondary",
                bgGradient:
                  "from-secondary-50 to-secondary-100 dark:from-secondary-950/20 dark:to-secondary-900/20",
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Innovation",
                description:
                  "Continuously exploring and implementing cutting-edge technologies for optimal solutions.",
                iconColor: "text-primary",
                bgGradient:
                  "from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20",
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: "Integrity & Excellence",
                description:
                  "Upholding the highest standards of integrity and striving for excellence in all our endeavors.",
                iconColor: "text-secondary",
                bgGradient:
                  "from-secondary-50 to-secondary-100 dark:from-secondary-950/20 dark:to-secondary-900/20",
              },
            ].map((value, index) => (
              <AnimatedDiv key={value.title} delay={0.3 + index * 0.1}>
                <Card
                  className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${value.bgGradient} hover:-translate-y-1 flex flex-col`}
                >
                  <CardHeader className="relative z-10 text-center pt-8 pb-4 flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
                      <div className={value.iconColor}>{value.icon}</div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 text-center px-6 pb-8 flex-grow">
                    <TypographyLarge muted>{value.description}</TypographyLarge>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </AnimatedDiv>
        </div>
      </section>

      {/* Our Identity Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedDiv delay={0.2}>
            <Card className="bg-gradient-to-br from-white/90 to-primary/5 dark:from-gray-900/90 dark:to-primary/10 border-0 shadow-2xl backdrop-blur-sm p-8 md:p-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

              <CardHeader className="relative z-10 text-center mb-8 ">
                <div className="flex justify-center items-center">
                  <div className="flex justify-center w-64 items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-8">
                    <Award className="h-4 w-4 text-white" />
                    <TypographyBadge className="text-white">
                      Our Core Values
                    </TypographyBadge>
                  </div>
                </div>
                <TypographyH2>Who We Are</TypographyH2>
              </CardHeader>

              <CardContent className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                <TypographyLarge muted>
                  At Jayaa IT Solution, we are a team of dedicated IT
                  professionals driven by a passion for leveraging technology to
                  transform businesses. Our blend of deep technical expertise
                  and a client-first approach ensures that we deliver solutions
                  tailored to the unique needs of our partners.
                </TypographyLarge>
                <TypographyLarge muted>
                  We take pride in empowering organizations to stay ahead in an
                  ever-evolving digital landscape by providing innovative,
                  secure, and scalable IT solutions. With a commitment to
                  excellence, we strive to be a trusted partner in your journey
                  toward growth and technological advancement.
                </TypographyLarge>

                <div className="flex items-center justify-center pt-8">
                  <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg">
                    <Shield className="h-4 w-4 text-white" />
                    <TypographyBadge className="text-white">
                      ISO Certified & Industry Compliant
                    </TypographyBadge>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/team">
                      Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </section>
    </>
  );
}
