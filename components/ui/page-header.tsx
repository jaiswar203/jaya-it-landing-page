interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: { label: string; href: string }[]
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-muted/50 py-12 sm:py-16 border-b">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Breadcrumb can be added here if needed */}
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-4">{title}</h1>
        {description && <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">{description}</p>}
      </div>
    </div>
  )
}
