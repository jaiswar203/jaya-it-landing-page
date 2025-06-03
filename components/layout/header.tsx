"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { 
  Menu, 
  ChevronDown, 
  ShieldCheck, 
  SearchCheck, 
  CloudCog, 
  ListChecks,
  ArrowRight,
  Phone,
  Star,
  Zap,
  Target,
  Users,
  Database,
  Monitor,
  Globe,
  Award,
  Eye,
  Shield,
  Code,
  Activity,
  Lock,
  AlertTriangle,
  Mail,
  FileText,
  TrendingUp,
  CheckCircle,
  HelpCircle,
  Sparkles
} from "lucide-react"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const serviceCategories = [
  {
    name: "Peregrine",
    href: "/services/peregrine",
    description: "Advanced threat detection and response services with 24/7 monitoring.",
    icon: <ShieldCheck className="h-6 w-6" />,
    gradient: "from-red-500 to-orange-500",
    services: [
      { name: "Managed Detection & Response", href: "/services/peregrine#mdr", icon: <Shield className="h-4 w-4" /> },
      { name: "SOC Monitoring 24/7", href: "/services/peregrine#soc", icon: <Activity className="h-4 w-4" /> },
      { name: "Dark Web Monitoring", href: "/services/peregrine#dark-web", icon: <Eye className="h-4 w-4" /> },
      { name: "Cybersecurity Dashboard", href: "/services/peregrine#dashboard", icon: <Monitor className="h-4 w-4" /> }
    ]
  },
  {
    name: "Pinpoint",
    href: "/services/pinpoint",
    description: "Comprehensive security assessments and vulnerability testing.",
    icon: <SearchCheck className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    services: [
      { name: "VA-PT (Infrastructure & Apps)", href: "/services/pinpoint#vapt", icon: <SearchCheck className="h-4 w-4" /> },
      { name: "Red Teaming Services", href: "/services/pinpoint#redteam", icon: <AlertTriangle className="h-4 w-4" /> },
      { name: "DAST & SAST Testing", href: "/services/pinpoint#ast", icon: <Code className="h-4 w-4" /> },
      { name: "API Security Testing", href: "/services/pinpoint#api", icon: <Globe className="h-4 w-4" /> }
    ]
  },
  {
    name: "MSP247",
    href: "/services/msp247",
    description: "Round-the-clock managed services for cloud and security infrastructure.",
    icon: <CloudCog className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-500",
    services: [
      { name: "InfoSec Monitoring", href: "/services/msp247#infosec", icon: <Eye className="h-4 w-4" /> },
      { name: "Cloud Security Management", href: "/services/msp247#cloud", icon: <CloudCog className="h-4 w-4" /> },
      { name: "Privileged Access Management", href: "/services/msp247#pam", icon: <Lock className="h-4 w-4" /> },
      { name: "DLP & Data Protection", href: "/services/msp247#dlp", icon: <ShieldCheck className="h-4 w-4" /> }
    ]
  },
  {
    name: "nCompass",
    href: "/services/ncompass",
    description: "Expert consulting for governance, risk management, and compliance.",
    icon: <ListChecks className="h-6 w-6" />,
    gradient: "from-purple-500 to-violet-500",
    services: [
      { name: "Security Awareness Training", href: "/services/ncompass#training", icon: <Users className="h-4 w-4" /> },
      { name: "Phishing Drills & Simulations", href: "/services/ncompass#phishing", icon: <Mail className="h-4 w-4" /> },
      { name: "DMARC Implementation", href: "/services/ncompass#dmarc", icon: <Shield className="h-4 w-4" /> },
      { name: "Virtual CISO Services", href: "/services/ncompass#vciso", icon: <Award className="h-4 w-4" /> }
    ]
  },
]

const solutions = [
  { name: "Auto Data Discovery & Classification", icon: <Database className="h-5 w-5" />, href: "/solutions#data-classification" },
  { name: "Privileged Access Management", icon: <Lock className="h-5 w-5" />, href: "/solutions#pam" },
  { name: "Dark Web Monitoring", icon: <Eye className="h-5 w-5" />, href: "/solutions#dark-web" },
  { name: "API Security Solutions", icon: <Globe className="h-5 w-5" />, href: "/solutions#api" },
  { name: "Data Loss Prevention (DLP)", icon: <ShieldCheck className="h-5 w-5" />, href: "/solutions#dlp" },
  { name: "Security Awareness Programs", icon: <Users className="h-5 w-5" />, href: "/solutions#awareness" },
]

const company = [
  { name: "Our Team", icon: <Award className="h-5 w-5" />, href: "/team", description: "Meet our expert professionals" },
  { name: "Clients & Partners", icon: <Star className="h-5 w-5" />, href: "/clients-partners", description: "Our trusted partnerships" },
  { name: "Contact Us", icon: <Phone className="h-5 w-5" />, href: "/contact", description: "Get in touch with our team" },
  { name: "Privacy Policy", icon: <Shield className="h-5 w-5" />, href: "/privacy-policy", description: "How we protect your data" },
  { name: "Terms of Service", icon: <FileText className="h-5 w-5" />, href: "/terms-of-service", description: "Our service terms and conditions" },
]


export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Helper function to get navigation link classes
  const getNavLinkClasses = (path: string) => {
    const baseClasses = "relative font-medium transition-all duration-300 hover:scale-105"
    const isActive = isActivePath(path)
    
    return cn(
      navigationMenuTriggerStyle(),
      baseClasses,
      isActive 
        ? "text-primary font-semibold" 
        : ""
    )
  }

  // Helper function to get navigation trigger classes
  const getNavTriggerClasses = (basePath: string) => {
    const baseClasses = "relative font-medium transition-all duration-300 hover:scale-105"
    const isActive = pathname.startsWith(basePath)
    
    return cn(
      baseClasses,
      isActive 
        ? "text-primary font-semibold" 
        : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
    )
  }

  if (!mounted) return <div className="h-20" />

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-primary/20" 
          : "bg-white/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div className="relative">
          <Image
              src="/logo-jayaa.png"
            alt="Jayaa IT Solution Logo"
              width={180}
              height={45}
            priority
              className="h-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 blur-xl scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-1">
            {/* Home */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={getNavLinkClasses("/")}>
                  Home
                  {isActivePath("/") && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  )}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={getNavLinkClasses("/about")}>
                  About
                  {isActivePath("/about") && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  )}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Services Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={getNavTriggerClasses("/services")}>
                Services
                {pathname.startsWith("/services") && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                )}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[920px] p-6 bg-white/98 backdrop-blur-xl border border-gray-200/80 shadow-2xl rounded-2xl">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Main Services - spans 2 columns */}
                    <div className="col-span-2 space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center">
                          <Sparkles className="h-6 w-6 mr-2 text-primary animate-pulse" />
                          Core Service Suites
                        </h3>
                        <div className="h-px bg-gradient-to-r from-primary/20 to-secondary/20 flex-1 ml-4"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {serviceCategories.map((service, index) => (
                          <div key={service.name} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                            <Link 
                              href={service.href}
                              className="block p-5 rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary/5 transition-all duration-500 border border-transparent hover:border-primary/30 hover:shadow-xl transform hover:-translate-y-1"
                            >
                              <div className="flex items-start space-x-4 mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                                  {service.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 text-lg">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                              <div className="space-y-3">
                                {service.services.slice(0, 3).map((subService, subIndex) => (
                                  <div key={subService.name} className="flex items-center space-x-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                      {subService.icon}
                                    </div>
                                    <span className="font-medium">{subService.name}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions & Quick Links */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 flex items-center">
                          <Target className="h-6 w-6 mr-2 text-primary animate-pulse" />
                          Key Solutions
                        </h3>
                        <div className="grid gap-2">
                          {solutions.slice(0, 6).map((solution, index) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 group transform hover:scale-105"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="text-primary group-hover:scale-125 transition-transform duration-300">
                                {solution.icon}
                              </div>
                              <span className="text-sm font-semibold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                {solution.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-5 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-2xl border border-primary/20 shadow-lg">
                        <div className="flex items-center mb-3">
                          <HelpCircle className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-primary">Need Expert Consultation?</h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                          Get personalized cybersecurity recommendations tailored to your business needs.
                        </p>
                        <Button asChild size="sm" className="w-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                          <Link href="/contact">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact Our Experts
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-8 pt-6 border-t border-gradient-to-r from-gray-200/50 to-primary/20">
                    <div className="grid grid-cols-2 gap-4">
                      <Link 
                        href="/services"
                        className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group shadow-lg hover:shadow-2xl transform hover:scale-105"
                      >
                        <span className="font-semibold">View All Services</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <Link 
                        href="/solutions"
                        className="flex items-center justify-center space-x-2 p-4 border-2 border-primary text-primary rounded-2xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 group shadow-lg hover:shadow-2xl transform hover:scale-105"
                      >
                        <span className="font-semibold">Explore Solutions</span>
                        <Target className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Solutions */}
            <NavigationMenuItem>
              <Link href="/solutions" legacyBehavior passHref>
                <NavigationMenuLink className={getNavLinkClasses("/solutions")}>
                  Solutions
                  {isActivePath("/solutions") && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  )}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Company Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={getNavTriggerClasses("/team")}>
                Company
                {(pathname.startsWith("/team") || pathname.startsWith("/clients-partners") || pathname.startsWith("/contact") || pathname.startsWith("/privacy-policy") || pathname.startsWith("/terms-of-service")) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                )}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[650px] p-6 bg-white/98 backdrop-blur-xl border border-gray-200/80 shadow-2xl rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {company.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-start space-x-4 p-5 rounded-2xl transition-all duration-500 border border-transparent hover:shadow-xl group transform hover:scale-105",
                          isActivePath(item.href)
                            ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 shadow-lg"
                            : "hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary/5 hover:border-primary/20"
                        )}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={cn(
                          "p-3 rounded-xl transition-all duration-500",
                          isActivePath(item.href)
                            ? "bg-gradient-to-br from-primary to-secondary text-white shadow-lg"
                            : "bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:shadow-lg"
                        )}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className={cn(
                            "font-bold transition-all duration-500",
                            isActivePath(item.href)
                              ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                              : "text-gray-900 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent"
                          )}>
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* CTA Button */}
          <Button asChild className="bg-primary shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-white transform hover:scale-105 hover:from-primary/90 hover:to-secondary/90">
            <Link href="/contact">
              <Sparkles className="h-4 w-4 mr-2" />
              Consult with us
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 border-primary/30 shadow-md hover:shadow-lg transform hover:scale-105">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white/95 backdrop-blur-xl border-l border-gray-200/80">
              <SheetHeader className="mb-6">
                <SheetTitle>
                  <Link href="/">
                    <Image
                      src="/logo-jayaa.png"
                      alt="Jayaa IT Solution Logo"
                      width={150}
                      height={37}
                      className="h-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/" 
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium relative",
                    isActivePath("/")
                      ? "text-primary font-semibold"
                      : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
                  )}
                >
                  <span className="text-lg">Home</span>
                  {isActivePath("/") && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  )}
                </Link>
                
                <Link 
                  href="/about" 
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium relative",
                    isActivePath("/about")
                      ? "text-primary font-semibold"
                      : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
                  )}
                >
                  <span className="text-lg">About</span>
                  {isActivePath("/about") && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  )}
                </Link>
                
                <div className="space-y-2">
                  <p className="px-4 py-2 text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    Services
                  </p>
                  {serviceCategories.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={cn(
                        "flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium relative",
                        isActivePath(service.href)
                          ? "text-primary font-semibold"
                          : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
                      )}
                    >
                      <div className={`p-1 rounded-lg bg-gradient-to-r ${service.gradient} text-white shadow-md`}>
                        {React.cloneElement(service.icon, { className: "h-4 w-4" })}
                      </div>
                      <span className="text-md">{service.name}</span>
                      {isActivePath(service.href) && (
                        <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      )}
                    </Link>
                  ))}
                </div>
                
                <Link 
                  href="/solutions" 
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium relative",
                    isActivePath("/solutions")
                      ? "text-primary font-semibold"
                      : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
                  )}
                >
                  <span className="text-lg">Solutions</span>
                  {isActivePath("/solutions") && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  )}
                </Link>
                
                <div className="space-y-2">
                  <p className="px-4 py-2 text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Company
                  </p>
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 font-medium relative",
                        isActivePath(item.href)
                          ? "text-primary font-semibold"
                          : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
                      )}
                    >
                      <div className={cn(
                        "transition-all duration-300",
                        isActivePath(item.href) ? "text-primary" : "text-primary"
                      )}>
                        {React.cloneElement(item.icon, { className: "h-4 w-4" })}
                      </div>
                      <span className="text-md">{item.name}</span>
                      {isActivePath(item.href) && (
                        <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      )}
                    </Link>
                  ))}
                </div>

                <div className="pt-6">
                  <Button asChild className="w-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Consult with us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
