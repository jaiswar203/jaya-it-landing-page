import AnimatedDiv from "@/components/ui/animated-div";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Sparkles, Shield } from "lucide-react";

interface FeatureItem {
  text: string;
}

interface Achievement {
  value: string;
  label: string;
  colorClass: string;
}

interface AboutSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  features?: FeatureItem[];
  achievements?: Achievement[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  { text: "Innovative & Scalable Solutions" },
  { text: "Customer-Centric Approach" },
  { text: "Expert Team & OEM Partnerships" },
  { text: "24/7 Premium Support" },
];

const defaultAchievements: Achievement[] = [
  {
    value: "250+",
    label: "Projects Delivered",
    colorClass:
      "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    value: "24/7",
    label: "Support Available",
    colorClass:
      "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    value: "50+",
    label: "Happy Clients",
    colorClass:
      "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    value: "99.9%",
    label: "Uptime SLA",
    colorClass:
      "from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/30 text-orange-600 dark:text-orange-400",
  },
];

export default function AboutSection({
  badge = "About JAYAA IT",
  title = "Premier IT Service Provider",
  subtitle = "Driving Digital Excellence",
  description = "Jayaa IT Solution is renowned for delivering innovative, cutting-edge technology solutions globally. We focus on IT security, infrastructure management, consultancy, and support, empowering organizations to achieve their goals with precision and efficiency.",
  features = defaultFeatures,
  achievements = defaultAchievements,
  primaryButtonText = "Learn More About Us",
  primaryButtonHref = "/about",
  secondaryButtonText = "Get Started Today",
  secondaryButtonHref = "/contact",
  imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  imageAlt = "Professional IT team collaborating on technology solutions",
  className = "",
}: AboutSectionProps) {
  return (
    <section
      className={`py-20 sm:py-28 bg-background relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedDiv className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  {badge}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-normal">
                {title}
                <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text leading-relaxed py-1">
                  {subtitle}
                </span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <AnimatedDiv key={feature.text} delay={index * 0.1}>
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/50">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                </AnimatedDiv>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href={primaryButtonHref}>
                  {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary"
              >
                <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Company Achievements */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Trusted by Industry Leaders
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.label}
                      className={`text-center p-3 bg-gradient-to-br ${
                        achievement.colorClass.split(" ")[0]
                      } ${achievement.colorClass.split(" ")[1]} ${
                        achievement.colorClass.split(" ")[2]
                      } ${achievement.colorClass.split(" ")[3]} rounded-lg`}
                    >
                      <div
                        className={`text-2xl font-bold ${
                          achievement.colorClass.split(" ")[4]
                        } ${achievement.colorClass.split(" ")[5]}`}
                      >
                        {achievement.value}
                      </div>
                      <div
                        className={`text-xs ${
                          achievement.colorClass.split(" ")[6]
                        } ${achievement.colorClass.split(" ")[7]} font-medium`}
                      >
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
