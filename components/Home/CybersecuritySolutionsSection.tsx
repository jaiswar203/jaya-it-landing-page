import React from "react";
import AnimatedDiv from "@/components/ui/animated-div";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TypographyH2,
  TypographyGradientSubtitle,
  TypographyLead,
  TypographyH3,
  TypographyH5,
  TypographyBadge,
  TypographySmall,
} from "@/components/ui/typography";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Eye,
  Activity,
  Code,
  SearchCheck,
  Database,
  Lock,
  ShieldCheck,
  Globe,
  Mail,
  Users,
} from "lucide-react";

interface Solution {
  name: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  bgGradient: string;
}

interface Category {
  category: string;
  icon: React.ReactNode;
  iconColor: string;
  bgGradient: string;
  solutions: Solution[];
}

interface CybersecuritySolutionsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  categories?: Category[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

const defaultCategories: Category[] = [
  {
    category: "Threat Detection & Response",
    icon: <Shield className="h-6 w-6" />,
    iconColor: "text-secondary",
    bgGradient:
      "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
    solutions: [
      {
        name: "Dark Web Monitoring",
        description:
          "Detect compromised credentials and organizational exposure",
        icon: <Eye className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
      {
        name: "SOC Monitoring 24/7",
        description: "Round-the-clock security operations center monitoring",
        icon: <Activity className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
      {
        name: "Cybersecurity Dashboard",
        description: "Real-time visibility into security metrics and alerts",
        icon: <Activity className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
      {
        name: "Breach & Attack Simulation",
        description: "Test security controls against threats",
        icon: <Shield className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
    ],
  },
  {
    category: "Security Testing",
    icon: <SearchCheck className="h-6 w-6" />,
    iconColor: "text-secondary",
    bgGradient:
      "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
    solutions: [
      {
        name: "Red Teaming",
        description: "Simulated cyberattacks to test detection and response",
        icon: <Shield className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
      {
        name: "DAST Testing",
        description: "Dynamic application security testing for running apps",
        icon: <Code className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
      {
        name: "SAST Testing",
        description: "Static code analysis for early vulnerability detection",
        icon: <Code className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
      {
        name: "VA-PT Services",
        description: "Comprehensive testing for infrastructure, apps, and APIs",
        icon: <SearchCheck className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
    ],
  },
  {
    category: "Data Protection & Access Control",
    icon: <Database className="h-6 w-6" />,
    iconColor: "text-secondary",
    bgGradient:
      "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
    solutions: [
      {
        name: "Auto Data Discovery & Classification",
        description:
          "Automated identification and protection of sensitive data",
        icon: <Database className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
      {
        name: "Privileged Access Management",
        description:
          "Secure access to critical systems with role-based controls",
        icon: <Lock className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
      {
        name: "Data Loss Prevention (DLP)",
        description: "Prevent accidental or malicious data leaks",
        icon: <ShieldCheck className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
      {
        name: "API Security",
        description: "Secure APIs through encryption and threat monitoring",
        icon: <Globe className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-900/20",
      },
    ],
  },
  {
    category: "Security Awareness & Training",
    icon: <Users className="h-6 w-6" />,
    iconColor: "text-secondary",
    bgGradient:
      "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
    solutions: [
      {
        name: "Phishing Drills & Simulations",
        description: "Test and train user awareness with simulated attacks",
        icon: <Mail className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
      {
        name: "Security Awareness Training",
        description: "Comprehensive cybersecurity education programs",
        icon: <Users className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
      {
        name: "Security Awareness Emailers",
        description: "Regular educational content and best practices",
        icon: <Mail className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
      {
        name: "DMARC Implementation",
        description: "Secure your domain from spoofing and phishing",
        icon: <Shield className="h-6 w-6" />,
        iconColor: "text-secondary",
        bgGradient:
          "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-900/20",
      },
    ],
  },
];

export default function CybersecuritySolutionsSection({
  badge = "Cybersecurity Solutions",
  title = "Complete Security",
  subtitle = "Protection Suite",
  description = "Advanced cybersecurity solutions covering threat detection, security testing, data protection, and awareness training.",
  categories = defaultCategories,
  primaryButtonText = "Explore All Solutions",
  primaryButtonHref = "/solutions",
  secondaryButtonText = "Get Security Assessment",
  secondaryButtonHref = "/contact",
  className = "",
}: CybersecuritySolutionsSectionProps) {
  return (
    <section
      className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Shield className="h-4 w-4 text-white" />
              <TypographyBadge className="text-white">{badge}</TypographyBadge>
            </div>
            <TypographyH2 className="mb-6">
              {title}
              <TypographyGradientSubtitle>
                {subtitle}
              </TypographyGradientSubtitle>
            </TypographyH2>
            <TypographyLead muted>{description}</TypographyLead>
          </AnimatedDiv>
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <AnimatedDiv key={category.category} delay={categoryIndex * 0.2}>
              <div className="space-y-8">
                <div className="relative">
                  <div
                    className={`w-full h-24 bg-gradient-to-r ${category.bgGradient} rounded-2xl relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 dark:bg-black/10"></div>

                    <div className="relative h-full flex items-center px-8">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-white/20 dark:border-gray-700/20">
                          <div
                            className={`${category.iconColor} [&>svg]:h-8 [&>svg]:w-8`}
                          >
                            {category.icon}
                          </div>
                        </div>

                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400/50 to-transparent"></div>

                        <div className="flex flex-col">
                          <TypographyH3 className="text-gray-900 dark:text-white font-bold tracking-tight">
                            {category.category}
                          </TypographyH3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-8 h-0.5 bg-current opacity-60"></div>
                            <TypographySmall className="text-gray-700 dark:text-gray-300 font-medium">
                              {category.solutions.length} Solutions
                            </TypographySmall>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto hidden md:flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-current opacity-20"></div>
                          <div className="w-2 h-2 rounded-full bg-current opacity-40"></div>
                          <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.solutions.map((solution, index) => (
                    <AnimatedDiv
                      key={solution.name}
                      delay={categoryIndex * 0.2 + index * 0.1}
                    >
                      <Card
                        className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br  hover:-translate-y-1 flex flex-col`}
                      >
                        <CardHeader className="pb-4 flex-shrink-0">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <div className={solution.iconColor}>
                                  {solution.icon}
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                <TypographyH5 className="mb-2 group-hover:text-primary transition-colors duration-300">
                                  {solution.name}
                                </TypographyH5>
                              </CardTitle>
                              <CardDescription>
                                <TypographySmall className="leading-relaxed">
                                  {solution.description}
                                </TypographySmall>
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </AnimatedDiv>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        <div className="text-center mt-16">
          <AnimatedDiv delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              >
                <Link href={primaryButtonHref}>
                  {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:border-primary/50"
              >
                <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
              </Button>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
