interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {subtitle && (
        <p className={`text-base font-semibold uppercase tracking-wider text-primary mb-2 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl ${titleClassName}`}>
        {title}
      </h2>
    </div>
  )
}
