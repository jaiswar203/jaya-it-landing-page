import AnimatedDiv from "@/components/ui/animated-div";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  DatabaseZap,
  Code,
  Search,
  Users,
  MailCheck,
  Network,
  LockKeyhole,
  Router,
  FileLock,
  ShieldQuestion,
  MessageCircle,
  AlertTriangle,
  Monitor,
  Zap,
  Star,
} from "lucide-react";

interface Solution {
  name: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  bgGradient: string;
  category: string;
}

interface MonitoringSolutionsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  solutions?: Solution[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

const defaultSolutions: Solution[] = [
  {
    name: "Data Classification",
    description:
      "Automated identification and categorization of sensitive data across your organization",
    icon: <DatabaseZap className="h-6 w-6" />,
    iconColor: "text-blue-500",
    bgGradient:
      "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
    category: "Data Protection",
  },
  {
    name: "Document Rights Management",
    description:
      "Control access and usage of digital documents with advanced DRM capabilities",
    icon: <FileLock className="h-6 w-6" />,
    iconColor: "text-green-500",
    bgGradient:
      "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
    category: "Data Protection",
  },
  {
    name: "Data Loss Prevention",
    description:
      "Prevent unauthorized data transmission and protect sensitive information",
    icon: <Shield className="h-6 w-6" />,
    iconColor: "text-red-500",
    bgGradient:
      "from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20",
    category: "Data Protection",
  },
  {
    name: "DMARC Email Protection",
    description:
      "Prevent email spoofing and phishing with domain-based message authentication",
    icon: <MailCheck className="h-6 w-6" />,
    iconColor: "text-purple-500",
    bgGradient:
      "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
    category: "Email Security",
  },
  {
    name: "Phishing Simulations",
    description:
      "Quarterly phishing simulation exercises to test employee awareness",
    icon: <AlertTriangle className="h-6 w-6" />,
    iconColor: "text-orange-500",
    bgGradient:
      "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
    category: "Email Security",
  },
  {
    name: "Source Code Review",
    description:
      "Quarterly comprehensive security analysis of your application source code",
    icon: <Code className="h-6 w-6" />,
    iconColor: "text-indigo-500",
    bgGradient:
      "from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20",
    category: "Code Security",
  },
  {
    name: "API Security",
    description:
      "Comprehensive protection for your APIs against threats and vulnerabilities",
    icon: <LockKeyhole className="h-6 w-6" />,
    iconColor: "text-cyan-500",
    bgGradient:
      "from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20",
    category: "Code Security",
  },
  {
    name: "Attack Surface Management",
    description:
      "Monitor and manage external attack vectors and exposed assets",
    icon: <ShieldQuestion className="h-6 w-6" />,
    iconColor: "text-teal-500",
    bgGradient:
      "from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20",
    category: "Threat Management",
  },
  {
    name: "Breach & Attack Simulation",
    description:
      "Continuous security validation through simulated breach scenarios",
    icon: <Shield className="h-6 w-6" />,
    iconColor: "text-red-600",
    bgGradient:
      "from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20",
    category: "Threat Management",
  },
  {
    name: "Red Teaming",
    description:
      "Advanced persistent threat simulation to test your security defenses",
    icon: <Users className="h-6 w-6" />,
    iconColor: "text-pink-500",
    bgGradient:
      "from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20",
    category: "Security Testing",
  },
  {
    name: "VA and Penetration Testing",
    description:
      "Comprehensive vulnerability assessment and penetration testing services",
    icon: <Search className="h-6 w-6" />,
    iconColor: "text-violet-500",
    bgGradient:
      "from-violet-50 to-violet-100 dark:from-violet-950/20 dark:to-violet-900/20",
    category: "Security Testing",
  },
  {
    name: "Security Awareness Training",
    description: "Weekly security awareness emails and educational wallpapers",
    icon: <MessageCircle className="h-6 w-6" />,
    iconColor: "text-emerald-500",
    bgGradient:
      "from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20",
    category: "Training",
  },
  {
    name: "Privileged Access Management",
    description:
      "Control and monitor privileged user access across your infrastructure",
    icon: <Users className="h-6 w-6" />,
    iconColor: "text-blue-600",
    bgGradient:
      "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
    category: "Access Control",
  },
  {
    name: "SD-WAN Solutions",
    description:
      "Software-defined wide area networking for enhanced connectivity",
    icon: <Router className="h-6 w-6" />,
    iconColor: "text-green-600",
    bgGradient:
      "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
    category: "Network Security",
  },
  {
    name: "Comprehensive Managed Services",
    description: "24/7 security operations and monitoring with expert support",
    icon: <Network className="h-6 w-6" />,
    iconColor: "text-purple-600",
    bgGradient:
      "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
    category: "Managed Services",
  },
];

// Group solutions by category
const groupSolutionsByCategory = (solutions: Solution[]) => {
  return solutions.reduce((acc, solution) => {
    if (!acc[solution.category]) {
      acc[solution.category] = [];
    }
    acc[solution.category].push(solution);
    return acc;
  }, {} as Record<string, Solution[]>);
};

// Get category theme color
const getCategoryTheme = (category: string, index: number) => {
  const themes = [
    {
      primary: "from-blue-500 to-cyan-500",
      secondary:
        "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      accent: "text-blue-600 dark:text-blue-400",
    },
    {
      primary: "from-purple-500 to-pink-500",
      secondary:
        "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
      accent: "text-purple-600 dark:text-purple-400",
    },
    {
      primary: "from-green-500 to-emerald-500",
      secondary:
        "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      accent: "text-green-600 dark:text-green-400",
    },
    {
      primary: "from-orange-500 to-red-500",
      secondary:
        "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
      accent: "text-orange-600 dark:text-orange-400",
    },
    {
      primary: "from-indigo-500 to-blue-500",
      secondary:
        "from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20",
      accent: "text-indigo-600 dark:text-indigo-400",
    },
    {
      primary: "from-teal-500 to-cyan-500",
      secondary:
        "from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
      accent: "text-teal-600 dark:text-teal-400",
    },
  ];
  return themes[index % themes.length];
};

export default function MonitoringSolutionsSection({
  badge = "Security Solutions",
  title = "Information Security Dashboard",
  subtitle = "& Monitoring Solutions",
  description = "Comprehensive suite of advanced cybersecurity tools and services designed to protect, monitor, and enhance your organization's security posture.",
  solutions = defaultSolutions,
  className = "",
}: MonitoringSolutionsSectionProps) {
  const groupedSolutions = groupSolutionsByCategory(solutions);

  return (
    <section
      className={`py-12 sm:py-16 bg-background relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary px-6 py-3 rounded-full mb-4 shadow-lg">
              <Monitor className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                {badge}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {title}
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {subtitle}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </AnimatedDiv>
        </div>

        {/* Solutions by Category - Unique Layout */}
        <div className="space-y-8">
          {Object.entries(groupedSolutions).map(
            ([category, categorySolutions], categoryIndex) => {
              const theme = getCategoryTheme(category, categoryIndex);
              const isEven = categoryIndex % 2 === 0;

              return (
                <AnimatedDiv key={category} delay={categoryIndex * 0.1}>
                  <div className="relative">
                    {/* Category Banner */}
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${theme.primary} p-6 mb-6 shadow-lg`}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm">
                            <Star className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {category}
                            </h3>
                            <p className="text-white/80 text-sm">
                              {categorySolutions.length} Solution
                              {categorySolutions.length !== 1 ? "s" : ""}{" "}
                              Available
                            </p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-2 text-white/60">
                          <Zap className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            Enterprise Ready
                          </span>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                    </div>

                    {/* Solutions Grid with Alternating Layout */}
                    <div
                      className={`grid gap-4 ${
                        isEven
                          ? "md:grid-cols-2 lg:grid-cols-4"
                          : "md:grid-cols-3 lg:grid-cols-3"
                      }`}
                    >
                      {categorySolutions.map((solution, index) => (
                        <AnimatedDiv
                          key={solution.name}
                          delay={categoryIndex * 0.1 + index * 0.05}
                        >
                          <Card
                            className={`group h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${solution.bgGradient} hover:-translate-y-1 flex flex-col relative overflow-hidden`}
                          >
                            {/* Hover overlay */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${theme.secondary} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            ></div>

                            <CardHeader className="pb-3 flex-shrink-0 relative z-10">
                              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <div className={solution.iconColor}>
                                  {solution.icon}
                                </div>
                              </div>
                              <CardTitle className="text-base font-bold leading-tight mt-3 group-hover:text-foreground/90 transition-colors">
                                {solution.name}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 flex-grow relative z-10">
                              <CardDescription className="text-xs leading-relaxed text-muted-foreground group-hover:text-muted-foreground/80">
                                {solution.description}
                              </CardDescription>
                            </CardContent>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-2xl"></div>
                          </Card>
                        </AnimatedDiv>
                      ))}
                    </div>
                  </div>
                </AnimatedDiv>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
