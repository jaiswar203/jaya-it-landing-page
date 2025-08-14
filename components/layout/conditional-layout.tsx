"use client"

import { usePathname } from 'next/navigation'
import Header from './header'
import Footer from './footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && <Header />}
      <main className={!isAdminRoute ? "flex-grow pt-20" : ""}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  )
} 