"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Sparkles, Zap, Shield } from "lucide-react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

const trustedCompanies = [
  { name: "Axis Bank", logo: "/companies/axis.png", width: 150, height: 75 },
  { name: "Bajaj", logo: "/companies/bajaj.webp", width: 150, height: 75 },
  { name: "HDFC Bank", logo: "/companies/hdfc.jpg", width: 150, height: 75 },
  { name: "Kotak Bank", logo: "/companies/kotak.webp", width: 150, height: 75 },
  { name: "SBI", logo: "/companies/sbi.png", width: 150, height: 75 },
]

// Enhanced Animated Circuit Board
const AnimatedCircuit = () => (
  <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800" fill="none">
    <motion.path
      d="M100 100 L300 100 L300 200 L500 200 L500 300 L700 300 L700 400 L900 400 L900 500 L1100 500"
      stroke="url(#circuit-gradient)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M800 150 L1000 150 L1000 250 L1100 250 L1100 350 L900 350 L900 450 L700 450"
      stroke="url(#circuit-gradient-2)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.path
      d="M200 600 L400 600 L400 500 L600 500 L600 400 L800 400"
      stroke="url(#circuit-gradient-3)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />

    <motion.circle
      cx="300"
      cy="100"
      r="6"
      fill="#00ff87"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1.5, 1, 1.5, 0],
        opacity: [0, 1, 0.7, 1, 0]
      }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
    <motion.circle
      cx="700"
      cy="300"
      r="6"
      fill="#3b82f6"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1.5, 1, 1.5, 0],
        opacity: [0, 1, 0.7, 1, 0]
      }}
      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
    />
    <motion.circle
      cx="1000"
      cy="150"
      r="6"
      fill="#8b5cf6"
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1.5, 1, 1.5, 0],
        opacity: [0, 1, 0.7, 1, 0]
      }}
      transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
    />

    {/* Circuit Components */}
    <motion.rect
      x="295"
      y="95"
      width="10"
      height="10"
      fill="none"
      stroke="#00ff87"
      strokeWidth="1"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "300px 100px" }}
    />
    <motion.rect
      x="695"
      y="295"
      width="10"
      height="10"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="1"
      animate={{ rotate: -360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "700px 300px" }}
    />

    <defs>
      <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#00ff87" stopOpacity="1" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="circuit-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
        <stop offset="100%" stopColor="#00ff87" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="circuit-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ff87" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
)

// Fixed position floating tech icons
const FloatingTechIcons = () => {
  const icons = [
    { emoji: "🔒", x: 15, y: 20, delay: 0 },
    { emoji: "⚡", x: 25, y: 60, delay: 0.5 },
    { emoji: "🛡️", x: 75, y: 25, delay: 1 },
    { emoji: "🔧", x: 85, y: 70, delay: 1.5 },
    { emoji: "💾", x: 35, y: 80, delay: 2 },
    { emoji: "🌐", x: 65, y: 15, delay: 2.5 },
    { emoji: "⚙️", x: 55, y: 85, delay: 3 },
    { emoji: "🔗", x: 10, y: 75, delay: 3.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl opacity-20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            filter: "drop-shadow(0 0 10px rgba(0, 255, 135, 0.5))",
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}
    </div>
  )
}

// Fixed position particle system
const FixedParticleSystem = () => {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: (i * 17) % 100, // Fixed positions based on index
    y: (i * 23) % 100,
    delay: (i * 0.5) % 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-secondary rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: "0 0 6px currentColor",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [-50, 50],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

// Data stream effect
const DataStream = () => {
  const streams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 5 + i * 12,
    delay: i * 0.8,
    data: "1010110110010110100101101001011010010110100101101001011010010110",
  }))

  return (
    <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute text-xs text-secondary/20 font-mono whitespace-nowrap"
          style={{
            left: `${stream.left}%`,
            top: "-10%",
          }}
          animate={{
            y: ["0vh", "110vh"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: stream.delay,
          }}
        >
          {stream.data}
        </motion.div>
      ))}
    </div>
  )
}

const GeometricBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
      <motion.polygon
        points="100,100 200,50 300,100 250,200 150,200"
        fill="rgba(59, 130, 246, 0.1)"
        stroke="rgba(0, 255, 135, 0.3)"
        strokeWidth="1"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 125px" }}
      />
      <motion.polygon
        points="800,200 900,150 1000,200 950,300 850,300"
        fill="rgba(139, 92, 246, 0.1)"
        stroke="rgba(0, 255, 135, 0.3)"
        strokeWidth="1"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "900px 225px" }}
      />
      <motion.circle
        cx="600"
        cy="150"
        r="50"
        fill="none"
        stroke="rgba(0, 255, 135, 0.2)"
        strokeWidth="2"
        strokeDasharray="5,5"
        animate={{ rotate: 360, strokeDashoffset: [0, -10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "600px 150px" }}
      />
      <motion.polygon
        points="300,600 400,550 500,600 450,700 350,700"
        fill="rgba(0, 255, 135, 0.08)"
        stroke="rgba(59, 130, 246, 0.3)"
        strokeWidth="1"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "400px 625px" }}
      />
    </svg>
  </div>
)

const MorphingShape = () => (
  <svg className="absolute top-10 right-10 w-96 h-96 opacity-15" viewBox="0 0 200 200">
    <motion.path
      d="M50 50 Q150 50 150 150 Q50 150 50 50"
      fill="url(#morphing-gradient)"
      animate={{
        d: [
          "M50 50 Q150 50 150 150 Q50 150 50 50",
          "M30 70 Q170 30 170 170 Q30 170 30 70",
          "M70 30 Q170 70 130 170 Q70 130 70 30",
          "M50 50 Q150 50 150 150 Q50 150 50 50",
        ],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.circle
      cx="100"
      cy="100"
      r="60"
      fill="none"
      stroke="url(#morphing-gradient)"
      strokeWidth="2"
      strokeDasharray="10,5"
      animate={{ 
        rotate: 360,
        strokeDashoffset: [0, -15] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      style={{ transformOrigin: "100px 100px" }}
    />
    <defs>
      <radialGradient id="morphing-gradient">
        <stop offset="0%" stopColor="#00ff87" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
      </radialGradient>
    </defs>
  </svg>
)

// Pulsing rings
const PulsingRings = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/4 left-1/4 w-32 h-32 border border-secondary/20 rounded-full"
      animate={{
        scale: [1, 2, 1],
        opacity: [0.3, 0.1, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent/20 rounded-full"
      animate={{
        scale: [1, 2.5, 1],
        opacity: [0.4, 0.1, 0.4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
    <motion.div
      className="absolute top-1/2 right-1/3 w-16 h-16 border border-blue-400/20 rounded-full"
      animate={{
        scale: [1, 3, 1],
        opacity: [0.5, 0.1, 0.5],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
  </div>
)

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2])
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2])

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

  return (
    <section 
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background Animations */}
      <GeometricBackground />
      <AnimatedCircuit />
      <FloatingTechIcons />
      <FixedParticleSystem />
      <DataStream />
      <MorphingShape />
      <PulsingRings />
      
      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
          animate={{ 
            y: [-20, 20, -20], 
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{ 
            y: [20, -20, 20], 
            x: [10, -10, 10],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"
          animate={{ 
            y: [-15, 15, -15],
            rotate: [0, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-3/4 w-24 h-24 bg-blue-500/15 rounded-full blur-xl"
          animate={{ 
            y: [15, -15, 15],
            x: [-8, 8, -8],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-purple-500/15 rounded-full blur-lg"
          animate={{ 
            y: [-12, 12, -12],
            x: [12, -12, 12],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content - Static Text */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="text-center space-y-8">
          {/* Simple Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full"
          >
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-white/90 font-medium">Trusted by 250+ Companies Worldwide</span>
          </motion.div>

          {/* Static Main Heading - No Animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
              <span className="block">Innovative</span>
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                IT Solutions
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                for a Cyber World
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Empowering businesses with <span className="font-semibold text-secondary">cutting-edge technology</span>, 
              robust security, and dedicated support to achieve operational excellence.
            </p>
          </motion.div>

          {/* Fixed Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-4 shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/services" className="flex items-center">
                <Zap className="mr-2 h-6 w-6" />
                Discover Our Solutions 
                <ChevronRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-primary hover:text-primary hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Get Expert Consultation
              </Link>
            </Button>
          </motion.div>

          {/* Static Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-12"
          >
            <p className="text-white/70 text-sm uppercase tracking-wider font-medium mb-8">
              Trusted Partners
            </p>
            <div className="flex items-center justify-center space-x-8 sm:space-x-12">
              {trustedCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="w-32 h-20 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center p-3 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={company.width}
                      height={company.height}
                      className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      priority={index < 3}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
    </section>
  )
}
