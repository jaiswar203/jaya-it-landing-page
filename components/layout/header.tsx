"use client"

import Image from "next/image"
import Link from "next/link"
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
  Mail
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
  { name: "About Us", icon: <Users className="h-5 w-5" />, href: "/about", description: "Learn about our mission and values" },
  { name: "Our Team", icon: <Award className="h-5 w-5" />, href: "/team", description: "Meet our expert professionals" },
  { name: "Clients & Partners", icon: <Star className="h-5 w-5" />, href: "/clients-partners", description: "Our trusted partnerships" },
  { name: "Contact Us", icon: <Phone className="h-5 w-5" />, href: "/contact", description: "Get in touch with our team" },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return <div className="h-20" />

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-primary/10" 
          : "bg-white/90 backdrop-blur-md"
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
              className="h-auto transition-transform duration-300 group-hover:scale-105"
          />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-2">
            {/* Home */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium")}>
                  Home
                </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

            {/* Services Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium">
                Services
                <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[900px] p-6 bg-white/98 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-lg">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Main Services - spans 2 columns */}
                    <div className="col-span-2 space-y-4">
                      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                        <Zap className="h-5 w-5 mr-2" />
                        Core Service Suites
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {serviceCategories.map((service) => (
                          <div key={service.name} className="group relative">
                            <Link 
                              href={service.href}
                              className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-lg"
                            >
                              <div className="flex items-start space-x-3 mb-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                  {service.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                    {service.name}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {service.services.slice(0, 3).map((subService) => (
                                  <div key={subService.name} className="flex items-center space-x-2 text-xs text-gray-600">
                                    <div className="text-primary">
                                      {subService.icon}
                                    </div>
                                    <span>{subService.name}</span>
                                  </div>
                                ))}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions & Quick Links */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          Key Solutions
                        </h3>
                        <div className="grid gap-2">
                          {solutions.slice(0, 6).map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                            >
                              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                {solution.icon}
                              </div>
                              <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                                {solution.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                        <h4 className="font-semibold text-primary mb-2">Need Expert Consultation?</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Get personalized cybersecurity recommendations.
                        </p>
                        <Button asChild size="sm" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                          <Link href="/contact">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact Us
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-200/50">
                    <div className="grid grid-cols-2 gap-4">
                      <Link 
                    href="/services"
                        className="flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group"
                      >
                        <span className="font-medium">View All Services</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <Link 
                        href="/solutions"
                        className="flex items-center justify-center space-x-2 p-3 border border-primary text-primary rounded-xl hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <span className="font-medium">Explore Solutions</span>
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
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium")}>
                  Solutions
                </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

            {/* Company Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium">
                Company
                <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[500px] p-6 bg-white/98 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-lg">
                  <div className="grid gap-3">
                    {company.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-lg group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
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
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
            <Link href="/contact">
              Consult with us
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden hover:bg-primary/10 hover:text-primary transition-all duration-300 border-primary/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white border-l border-gray-200">
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
              
              <div className="flex flex-col space-y-1">
                <Link href="/" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-lg font-medium">Home</span>
                </Link>
                
                <div className="space-y-1">
                  <p className="px-4 py-2 text-lg font-semibold text-primary">Services</p>
                  {serviceCategories.map((service) => (
                  <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-6 py-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    >
                      <div className={`p-1 rounded bg-gradient-to-r ${service.gradient} text-white`}>
                        {React.cloneElement(service.icon, { className: "h-4 w-4" })}
                      </div>
                      <span className="text-md font-medium">{service.name}</span>
                  </Link>
                ))}
                </div>
                
                <Link href="/solutions" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-lg font-medium">Solutions</span>
                </Link>
                
                <div className="space-y-1">
                  <p className="px-4 py-2 text-lg font-semibold text-primary">Company</p>
                  {company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                      className="flex items-center space-x-3 px-6 py-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                  >
                      <div className="text-primary">
                        {React.cloneElement(item.icon, { className: "h-4 w-4" })}
                      </div>
                      <span className="text-md font-medium">{item.name}</span>
                  </Link>
                ))}
                </div>

                <div className="pt-6">
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Link href="/contact">Consult with us</Link>
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
