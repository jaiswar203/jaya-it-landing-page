import { cn } from "@/lib/utils"
import React from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
  muted?: boolean
  [key: string]: any
}

// Main heading for page/section titles
export function TypographyH1({ children, className, gradient, ...props }: TypographyProps) {
  return (
    <h1 
      className={cn(
        "text-4xl lg:text-6xl font-bold leading-tight tracking-tight",
        gradient && "text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

// Section headings
export function TypographyH2({ children, className, gradient, ...props }: TypographyProps) {
  return (
    <h2 
      className={cn(
        "text-4xl lg:text-5xl font-bold leading-tight mb-6",
        gradient && "text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

// Subsection headings
export function TypographyH3({ children, className, gradient, ...props }: TypographyProps) {
  return (
    <h3 
      className={cn(
        "text-2xl lg:text-3xl font-bold leading-tight",
        gradient && "text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

// Card titles and smaller headings
export function TypographyH4({ children, className, gradient, ...props }: TypographyProps) {
  return (
    <h4 
      className={cn(
        "text-xl lg:text-2xl font-bold leading-tight",
        gradient && "text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
}

// Small headings
export function TypographyH5({ children, className, ...props }: TypographyProps) {
  return (
    <h5 
      className={cn(
        "text-lg font-semibold leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h5>
  )
}

// Large paragraph/description text
export function TypographyLarge({ children, className, muted, ...props }: TypographyProps) {
  return (
    <p 
      className={cn(
        "text-xl leading-relaxed",
        muted && "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Regular paragraph text
export function TypographyP({ children, className, muted, ...props }: TypographyProps) {
  return (
    <p 
      className={cn(
        "text-base leading-relaxed",
        muted && "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Small text
export function TypographySmall({ children, className, muted, ...props }: TypographyProps) {
  return (
    <small 
      className={cn(
        "text-sm font-medium leading-none",
        muted && "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </small>
  )
}

// Muted text
export function TypographyMuted({ children, className, ...props }: TypographyProps) {
  return (
    <p 
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Badge/tag text
export function TypographyBadge({ children, className, ...props }: TypographyProps) {
  return (
    <span 
      className={cn(
        "text-sm font-semibold uppercase tracking-wider",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// Lead text (larger than regular paragraph)
export function TypographyLead({ children, className, muted, ...props }: TypographyProps) {
  return (
    <p 
      className={cn(
        "text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed",
        !muted && "text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Gradient subtitle (commonly used with H2)
export function TypographyGradientSubtitle({ children, className, ...props }: TypographyProps) {
  return (
    <span 
      className={cn(
        "block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text leading-tight py-1",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// Statistics/number display
export function TypographyStats({ children, className, gradient, ...props }: TypographyProps) {
  return (
    <div 
      className={cn(
        "text-6xl lg:text-7xl font-black leading-none",
        gradient && "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 