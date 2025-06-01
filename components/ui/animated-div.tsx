"use client"
import { motion, type Variants } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AnimatedDivProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  amount?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  duration?: number
  staggerChildren?: number
}

const createVariants = (direction: string): Variants => {
  const directions = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  }
  return directions[direction as keyof typeof directions] || directions.up
}

export default function AnimatedDiv({
  children,
  className,
  variants,
  delay = 0,
  once = true,
  amount = 0.2,
  direction = 'up',
  duration = 0.6,
  staggerChildren,
}: AnimatedDivProps) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold: amount, rootMargin: '50px' },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, amount])

  const animationVariants = variants || createVariants(direction)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: staggerChildren || 0.1
      }}
    >
      {children}
    </motion.div>
  )
}
