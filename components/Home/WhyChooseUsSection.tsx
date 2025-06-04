import AnimatedDiv from "@/components/ui/animated-div";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TypographyH2,
  TypographyH4,
  TypographyBadge,
  TypographyP,
} from "@/components/ui/typography";
import { Zap, Users, BarChart3, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
  iconColor: string;
}

interface WhyChooseUsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  benefits?: Benefit[];
  className?: string;
}

const defaultBenefits: Benefit[] = [
  {
    title: "Expertise & Experience",
    description:
      "Decades of industry experience and a team of certified professionals delivering world-class solutions.",
    icon: <Users className="h-8 w-8" />,
    gradient: "from-primary to-secondary",
    bgGradient:
      "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-950/20",
    iconColor: "text-secondary",
  },
  {
    title: "Comprehensive Solutions",
    description:
      "End-to-end IT services covering security, infrastructure, and consultancy with seamless integration.",
    icon: <BarChart3 className="h-8 w-8" />,
    gradient: "from-primary to-secondary",
    bgGradient:
      "from-secondary/10 to-secondary/20 dark:from-secondary-950/20 dark:to-secondary-950/20",
    iconColor: "text-secondary",
  },
  {
    title: "Client-Focused Support",
    description:
      "Dedicated 24/7 support and tailored solutions designed to meet your unique business challenges.",
    icon: <ShieldCheck className="h-8 w-8" />,
    gradient: "from-primary to-secondary",
    bgGradient:
      "from-primary/10 to-primary/20 dark:from-primary-950/20 dark:to-primary-950/20",
    iconColor: "text-secondary",
  },
];

export default function WhyChooseUsSection({
  badge = "Our Difference",
  title = "Why Partner with",
  benefits = defaultBenefits,
  className = "",
}: WhyChooseUsSectionProps) {
  return (
    <section
      className={`py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <AnimatedDiv>
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg mb-6">
              <Zap className="h-4 w-4 text-white" />
              <TypographyBadge className="text-white">{badge}</TypographyBadge>
            </div>
            <TypographyH2 className="mb-6">
              {title}
              <div className="flex w-full justify-center items-center space-x-2">
                <Image
                  src="/logo-jayaa.png"
                  alt="JAYAA IT"
                  width={200}
                  height={200}
                />
              </div>
            </TypographyH2>
          </AnimatedDiv>
        </div>

        <AnimatedDiv className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedDiv key={benefit.title} delay={index * 0.2}>
              <Card
                className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${benefit.bgGradient} hover:-translate-y-1 flex flex-col`}
              >
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className={benefit.iconColor}>{benefit.icon}</div>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    <TypographyH4 className="mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </TypographyH4>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex items-center justify-center">
                  <TypographyP muted className="leading-relaxed">
                    {benefit.description}
                  </TypographyP>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
}
