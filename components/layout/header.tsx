"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  ShieldCheck,
  SearchCheck,
  CloudCog,
  ListChecks,
  ArrowRight,
  Phone,
  Star,
  Target,
  Users,
  Database,
  Monitor,
  Globe,
  Award,
  Shield,
  Code,
  Activity,
  Lock,
  FileText,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Home,
  Info,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    name: "Zero Trust Security Services",
    href: "/services/zero-trust-security",
    description:
      "Never Trust, Always Verify — Secure Every Access Point with comprehensive identity verification.",
    icon: <ShieldCheck className="h-6 w-6" />,
    gradient: "from-red-500 to-orange-500",
    services: [
      {
        name: "Identity & Access Management (IAM)",
        href: "/services/zero-trust-security#iam",
        icon: <Shield className="h-4 w-4" />,
      },
      {
        name: "Continuous Risk-Based Authentication",
        href: "/services/zero-trust-security#auth",
        icon: <Lock className="h-4 w-4" />,
      },
      {
        name: "Network Micro-Segmentation",
        href: "/services/zero-trust-security#segmentation",
        icon: <Activity className="h-4 w-4" />,
      },
      {
        name: "Device Compliance Enforcement",
        href: "/services/zero-trust-security#compliance",
        icon: <Monitor className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Digital Transformation & Automation",
    href: "/services/digital-transformation",
    description:
      "Reimagining Business Through Intelligent Automation and digital-first strategies.",
    icon: <SearchCheck className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "Legacy-to-Cloud Modernization",
        href: "/services/digital-transformation#modernization",
        icon: <CloudCog className="h-4 w-4" />,
      },
      {
        name: "Robotic Process Automation (RPA)",
        href: "/services/digital-transformation#rpa",
        icon: <Code className="h-4 w-4" />,
      },
      {
        name: "Smart Workflow Engineering",
        href: "/services/digital-transformation#workflow",
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        name: "API & System Integration",
        href: "/services/digital-transformation#integration",
        icon: <Globe className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Advanced IT Solutions",
    href: "/services/advanced-it-solutions",
    description:
      "Future-Ready Tech Solutions Built Around You with cutting-edge, customized IT infrastructure.",
    icon: <CloudCog className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Secure Network Architecture Design",
        href: "/services/advanced-it-solutions#network",
        icon: <Globe className="h-4 w-4" />,
      },
      {
        name: "Endpoint Protection & Patch Management",
        href: "/services/advanced-it-solutions#endpoint",
        icon: <ShieldCheck className="h-4 w-4" />,
      },
      {
        name: "Virtualization & Cloud Services",
        href: "/services/advanced-it-solutions#cloud",
        icon: <CloudCog className="h-4 w-4" />,
      },
      {
        name: "AI-Powered IT Monitoring",
        href: "/services/advanced-it-solutions#monitoring",
        icon: <Activity className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Professional Services",
    href: "/services/professional-services",
    description:
      "IT Expertise, Delivered On-Demand — deep technical expertise and project execution excellence.",
    icon: <ListChecks className="h-6 w-6" />,
    gradient: "from-purple-500 to-violet-500",
    services: [
      {
        name: "Strategic IT Consulting",
        href: "/services/professional-services#consulting",
        icon: <Users className="h-4 w-4" />,
      },
      {
        name: "Staff Augmentation & Project Support",
        href: "/services/professional-services#staffing",
        icon: <Award className="h-4 w-4" />,
      },
      {
        name: "System Integrations & Migrations",
        href: "/services/professional-services#integration",
        icon: <Database className="h-4 w-4" />,
      },
      {
        name: "Managed Services & SLA-Based Support",
        href: "/services/professional-services#managed",
        icon: <CheckCircle className="h-4 w-4" />,
      },
    ],
  },
];

const company = [
  {
    name: "Our Team",
    icon: <Award className="h-5 w-5" />,
    href: "/team",
    description: "Meet our expert professionals",
  },
  {
    name: "Clients & Partners",
    icon: <Star className="h-5 w-5" />,
    href: "/clients-partners",
    description: "Our trusted partnerships",
  },
  {
    name: "Contact Us",
    icon: <Phone className="h-5 w-5" />,
    href: "/contact",
    description: "Get in touch with our team",
  },
  {
    name: "Privacy Policy",
    icon: <Shield className="h-5 w-5" />,
    href: "/privacy-policy",
    description: "How we protect your data",
  },
  {
    name: "Terms of Service",
    icon: <FileText className="h-5 w-5" />,
    href: "/terms-of-service",
    description: "Our service terms and conditions",
  },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Helper function to get navigation link classes
  const getNavLinkClasses = (path: string) => {
    const baseClasses =
      "relative font-bold text-lg transition-all duration-300 hover:scale-105";
    const isActive = isActivePath(path);

    return cn(
      navigationMenuTriggerStyle(),
      baseClasses,
      isActive ? "text-primary font-bold text-xl" : ""
    );
  };

  // Helper function to get navigation trigger classes
  const getNavTriggerClasses = (basePath: string) => {
    const baseClasses =
      "relative font-bold text-lg transition-all duration-300 hover:scale-105";
    const isActive = pathname.startsWith(basePath);

    return cn(
      baseClasses,
      isActive
        ? "text-primary font-bold text-xl"
        : "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary"
    );
  };

  if (!mounted) return <div className="h-24" />;

  return (
    <>
      {/* Custom WhatsApp Animation Styles */}
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes slowPing {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-primary/20"
            : "bg-white/90 backdrop-blur-md "
        }`}
      >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div className="relative">
            <Image
              src="/logo-jayaa.png"
              alt="Jayaa IT Solution Logo"
              width={300}
              height={75}
              priority
              className="h-auto max-h-16 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
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
              <NavigationMenuTrigger
                className={getNavTriggerClasses("/services")}
              >
                Services
                {pathname.startsWith("/services") && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                )}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[920px] p-6 bg-white/98 backdrop-blur-xl border border-gray-200/80 shadow-2xl rounded-2xl">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Main Services - full width */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center">
                          <Sparkles className="h-6 w-6 mr-2 text-primary animate-pulse" />
                          Core Service Suites
                        </h3>
                        <div className="h-px bg-gradient-to-r from-primary/20 to-secondary/20 flex-1 ml-4"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {serviceCategories.map((service, index) => (
                          <div
                            key={service.name}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <Link
                              href={service.href}
                              className="block p-5 rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary/5 transition-all duration-500 border border-transparent hover:border-primary/30 hover:shadow-xl transform hover:-translate-y-1"
                            >
                              <div className="flex items-start space-x-4 mb-4">
                                <div
                                  className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                                >
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
                                {service.services
                                  .slice(0, 3)
                                  .map((subService) => (
                                    <div
                                      key={subService.name}
                                      className="flex items-center space-x-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                                    >
                                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                        {subService.icon}
                                      </div>
                                      <span className="font-medium">
                                        {subService.name}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            </Link>
                          </div>
                        ))}
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
                {(pathname.startsWith("/team") ||
                  pathname.startsWith("/clients-partners") ||
                  pathname.startsWith("/contact") ||
                  pathname.startsWith("/privacy-policy") ||
                  pathname.startsWith("/terms-of-service")) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                )}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[650px] p-6 bg-white border border-gray-200 shadow-xl rounded-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {company.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 border group",
                          isActivePath(item.href)
                            ? "bg-primary/5 border-primary/20 shadow-sm"
                            : "border-transparent hover:bg-gray-50 hover:border-gray-200 hover:shadow-sm"
                        )}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div
                          className={cn(
                            "p-2.5 rounded-lg transition-all duration-300",
                            isActivePath(item.href)
                              ? "bg-primary text-white shadow-sm"
                              : "bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white"
                          )}
                        >
                          {React.cloneElement(item.icon, {
                            className: "h-4 w-4",
                          })}
                        </div>
                        <div className="flex-1">
                          <h4
                            className={cn(
                              "font-semibold transition-colors duration-300",
                              isActivePath(item.href)
                                ? "text-primary"
                                : "text-gray-900 group-hover:text-primary"
                            )}
                          >
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
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
          <Button
            asChild
            className="hidden lg:flex bg-primary shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-white transform hover:scale-105 hover:from-primary/90 hover:to-secondary/90"
          >
            <Link href="/contact">
              <Sparkles className="h-4 w-4 mr-2" />
              Consult with us
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 border-primary/30 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm bg-white border-l border-gray-200 overflow-y-auto"
            >
              <SheetHeader className="pb-6 border-b border-gray-100">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="group">
                    <Image
                      src="/logo-jayaa.png"
                      alt="Jayaa IT Solution Logo"
                      width={180}
                      height={45}
                      className="h-auto max-h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="py-6 space-y-6">
                {/* Main Navigation */}
                <div className="space-y-1">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={cn(
                        "flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 font-medium group relative overflow-hidden",
                        isActivePath("/")
                          ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 shadow-sm"
                          : "hover:bg-gray-50 hover:translate-x-1"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-xl transition-all duration-300",
                        isActivePath("/")
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110"
                      )}>
                        <Home className="h-4 w-4" />
                      </div>
                      <span className="text-xl font-bold">Home</span>
                      {isActivePath("/") && (
                        <div className="absolute right-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className={cn(
                        "flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 font-medium group relative overflow-hidden",
                        isActivePath("/about")
                          ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 shadow-sm"
                          : "hover:bg-gray-50 hover:translate-x-1"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-xl transition-all duration-300",
                        isActivePath("/about")
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110"
                      )}>
                        <Info className="h-4 w-4" />
                      </div>
                      <span className="text-xl font-bold">About</span>
                      {isActivePath("/about") && (
                        <div className="absolute right-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/solutions"
                      className={cn(
                        "flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 font-medium group relative overflow-hidden",
                        isActivePath("/solutions")
                          ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 shadow-sm"
                          : "hover:bg-gray-50 hover:translate-x-1"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-xl transition-all duration-300",
                        isActivePath("/solutions")
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110"
                      )}>
                        <Target className="h-4 w-4" />
                      </div>
                      <span className="text-xl font-bold">Solutions</span>
                      {isActivePath("/solutions") && (
                        <div className="absolute right-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  </SheetClose>
                </div>

                {/* CTA Button */}
                <div className="px-2">
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-xl font-bold">Consult with us</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </SheetClose>
                </div>

                {/* Services Section */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 px-4">
                    <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Our Services
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-secondary/20"></div>
                  </div>
                  <div className="space-y-2 px-2">
                    {serviceCategories.map((service, index) => (
                      <SheetClose key={service.name} asChild>
                        <Link
                          href={service.href}
                          className={cn(
                            "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium group hover:bg-gray-50 hover:translate-x-1",
                            isActivePath(service.href)
                              ? "bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20"
                              : ""
                          )}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                          >
                            {React.cloneElement(service.icon, {
                              className: "h-4 w-4",
                            })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                              {service.name}
                            </span>
                          </div>
                          {isActivePath(service.href) && (
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                {/* Company Section */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 px-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                      Company
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 to-violet-500/20"></div>
                  </div>
                  <div className="space-y-2 px-2">
                    {company.map((item, index) => (
                      <SheetClose key={item.name} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium group hover:bg-gray-50 hover:translate-x-1",
                            isActivePath(item.href)
                              ? "bg-gradient-to-r from-purple-500/5 to-violet-500/5 border border-purple-500/20"
                              : ""
                          )}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div
                            className={cn(
                              "p-2 rounded-lg transition-all duration-300 group-hover:scale-110",
                              isActivePath(item.href)
                                ? "bg-purple-500 text-white shadow-md"
                                : "bg-gray-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white"
                            )}
                          >
                            {React.cloneElement(item.icon, {
                              className: "h-4 w-4",
                            })}
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                              {item.name}
                            </span>
                          </div>
                          {isActivePath(item.href) && (
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500 mb-2">© 2024 Jayaa IT Solution</p>
                  <p className="text-xs text-gray-400">Securing Your Digital Future</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918268949507"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:animate-none"
          style={{
            animation: 'slowPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Ripple Effect */}
          <div 
            className="absolute inset-0 rounded-full bg-green-400 opacity-30"
            style={{
              animation: 'slowPing 3s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}
          ></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat on WhatsApp
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
