"use client"
import AnimatedDiv from "@/components/ui/animated-div"
import { Button } from "@/components/ui/button"
import { 
  TypographyH1, 
  TypographyGradientSubtitle, 
  TypographyLarge 
} from "@/components/ui/typography"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

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

// Scanning lines for dark theme
const CTAScanningLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Horizontal scanning lines */}
    <motion.div
      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        delay: 6,
      }}
    />
    
    {/* Vertical scanning lines */}
    <motion.div
      className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/15 to-transparent"
      initial={{ x: 0 }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
        delay: 5,
      }}
    />
    <motion.div
      className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
      initial={{ x: 0 }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: 8,
      }}
    />
  </div>
)

// Security alerts for dark theme
const CTASecurityAlerts = () => {
  const alerts = [
    { x: 90, y: 10, type: "secure", delay: 0 },
    { x: 10, y: 90, type: "protected", delay: 4 },
    { x: 85, y: 80, type: "encrypted", delay: 8 },
    { x: 15, y: 20, type: "verified", delay: 12 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {alerts.map((alert, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${alert.x}%`, top: `${alert.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: alert.delay,
            repeatDelay: 12,
          }}
        >
          <div className="w-2 h-2 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
          <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-ping opacity-50" />
        </motion.div>
      ))}
    </div>
  )
}

// Data flow for dark theme
const CTADataFlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    {/* Top section flows */}
    <motion.div
      className="absolute top-1/4 left-0 w-12 h-0.5 bg-white"
      initial={{ x: "-3rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: 1,
      }}
    />
    <motion.div
      className="absolute top-1/6 left-0 w-16 h-0.5 bg-secondary"
      initial={{ x: "-4rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        delay: 4,
      }}
    />
    
    {/* Bottom section flows */}
    <motion.div
      className="absolute top-3/4 right-0 w-10 h-0.5 bg-white"
      initial={{ x: "2.5rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute top-5/6 right-0 w-14 h-0.5 bg-secondary"
      initial={{ x: "3.5rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "linear",
        delay: 6,
      }}
    />
    
    {/* Diagonal flows */}
    <motion.div
      className="absolute top-1/2 left-0 w-8 h-0.5 bg-white rotate-12"
      initial={{ x: "-2rem", y: 0 }}
      animate={{ x: "100vw", y: "-30px" }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "linear",
        delay: 3,
      }}
    />
    <motion.div
      className="absolute top-1/2 right-0 w-6 h-0.5 bg-secondary -rotate-12"
      initial={{ x: "1.5rem", y: 0 }}
      animate={{ x: "-100vw", y: "30px" }}
      transition={{
        duration: 11,
        repeat: Infinity,
        ease: "linear",
        delay: 7,
      }}
    />
  </div>
)

// Monitoring waves for dark theme
const CTAMonitoringWaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
      <motion.path
        d="M0 400 Q300 350 600 400 T1200 400"
        stroke="white"
        strokeWidth="1"
        fill="none"
        strokeDasharray="15,10"
        animate={{ strokeDashoffset: [0, -25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0 300 Q300 250 600 300 T1200 300"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-secondary"
        strokeDasharray="12,8"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <motion.path
        d="M0 500 Q300 450 600 500 T1200 500"
        stroke="white"
        strokeWidth="1"
        fill="none"
        strokeDasharray="10,15"
        animate={{ strokeDashoffset: [0, -25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 4 }}
      />
    </svg>
  </div>
)

// Floating particles for dark theme
const CTAFloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    size: number;
  }>>([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 8,
      size: 1 + Math.random() * 2,
    }))
    setParticles(generatedParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

// Corner indicators for dark theme
const CTACornerIndicators = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Top left */}
    <motion.div
      className="absolute top-8 left-8 text-xs text-white/30 font-mono"
      animate={{ opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      READY
    </motion.div>
    
    {/* Bottom right */}
    <motion.div
      className="absolute bottom-8 right-8 text-xs text-secondary/40 font-mono"
      animate={{ opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, delay: 2 }}
    >
      TRANSFORM
    </motion.div>
    
    {/* Side indicator */}
    <motion.div 
      className="absolute top-1/2 left-4 text-xs text-white/20 font-mono -rotate-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.4, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay: 4 }}
    >
      CONNECTING...
    </motion.div>
  </div>
)

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
    <section className={`py-20 sm:py-28 relative overflow-hidden bg-primary ${className}`}>
      {/* Animated Background Effects */}
      <CTAScanningLines />
      <CTASecurityAlerts />
      <CTADataFlow />
      <CTAMonitoringWaves />
      <CTAFloatingParticles />
      <CTACornerIndicators />
      
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-primary"></div> */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedDiv className="text-center text-white space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <TypographyH1 className="text-white">
              {title}
              <TypographyGradientSubtitle className=" bg-none text-secondary">
                {subtitle}
              </TypographyGradientSubtitle>
            </TypographyH1>
            <TypographyLarge className="text-white/90 max-w-3xl mx-auto">
              {description}
            </TypographyLarge>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild size="lg" className="bg-secondary/80 text-white hover:bg-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4">
                <Link href={primaryButtonHref}>
                  {primaryButtonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-4">
                <Link href={secondaryButtonHref}>
                  {secondaryButtonText}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedDiv>
      </div>
    </section>
  )
} 