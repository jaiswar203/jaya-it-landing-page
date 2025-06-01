"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Sparkles, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full"
          >
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-white/90 font-medium">Trusted by 250+ Companies Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none"
            >
              <span className="block">Innovative</span>
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                IT Solutions
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                for a Digital World
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Empowering businesses with <span className="font-semibold text-secondary">cutting-edge technology</span>, 
              robust security, and dedicated support to achieve operational excellence.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-secondary/25 transition-all duration-300 transform hover:scale-105 btn-enhanced"
            >
              <Link href="/services" className="flex items-center">
                <Zap className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Discover Our Solutions 
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-2 border-white/30 text-primary  hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center">
                <Shield className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Get Expert Consultation
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-12"
          >
            <p className="text-white/70 text-sm uppercase tracking-wider font-medium mb-6">
              Trusted by Industry Leaders
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="w-20 h-12 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center"
                >
                  <div className="w-12 h-6 bg-white/40 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
    </section>
  )
}
