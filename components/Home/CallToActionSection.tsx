import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CallToActionSectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

export default function CallToActionSection({
  title = "Ready to Transform",
  subtitle = "Your Business?",
  description = "Join hundreds of satisfied clients who trust JAYAA IT Solution for their digital transformation journey.",
  primaryButtonText = "Start Your Journey",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Explore Services",
  secondaryButtonHref = "/services",
  className = ""
}: CallToActionSectionProps) {
  return (
    <section className={`py-20 sm:py-28 bg-gradient-to-r from-primary via-primary/90 to-secondary relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedDiv className="text-center text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold">
              {title}
              <span className="block text-secondary">{subtitle}</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4">
              <Link href={primaryButtonHref}>
                {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-4">
              <Link href={secondaryButtonHref}>
                {secondaryButtonText}
              </Link>
            </Button>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  )
} 