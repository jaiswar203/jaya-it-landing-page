"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Activity,
  SearchCheck,
  Users,
  CloudCog,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const coreServices = [
    {
      name: "Zero Trust Security",
      description: "Never Trust, Always Verify — Secure Every Access Point",
      href: "/services/zero-trust-security",
      icon: <ShieldCheck className="h-5 w-5" />,
      gradient: "from-red-500 to-orange-500",
    },
    {
      name: "Digital Transformation",
      description: "Intelligent Automation & Digital-First Strategies",
      href: "/services/digital-transformation",
      icon: <SearchCheck className="h-5 w-5" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Advanced IT Solutions",
      description: "Future-Ready Tech Solutions Built Around You",
      href: "/services/advanced-it-solutions",
      icon: <CloudCog className="h-5 w-5" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Professional Services",
      description: "IT Expertise, Delivered On-Demand",
      href: "/services/professional-services",
      icon: <Users className="h-5 w-5" />,
      gradient: "from-purple-500 to-violet-500",
    },
  ];

  const keyFeatures = [
    {
      name: "Identity & Access Management (IAM)",
      href: "/services/zero-trust-security#iam",
    },
    {
      name: "Legacy-to-Cloud Modernization",
      href: "/services/digital-transformation#modernization",
    },
    {
      name: "Secure Network Architecture Design",
      href: "/services/advanced-it-solutions#network",
    },
    {
      name: "Strategic IT Consulting",
      href: "/services/professional-services#consulting",
    },
    {
      name: "Continuous Risk-Based Authentication",
      href: "/services/zero-trust-security#auth",
    },
    {
      name: "API & System Integration",
      href: "/services/digital-transformation#integration",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "All Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 border-t border-gray-200/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 via-transparent to-secondary/3"></div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Main Footer Links */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="inline-block group">
                <div className="relative">
                  <Image
                    src="/logo-jayaa.jpg"
                    alt="Jayaa IT Solution Logo"
                    width={200}
                    height={50}
                    className="h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
                </div>
              </Link>

              <p className="text-gray-600 leading-relaxed">
                Leading cybersecurity provider delivering comprehensive
                protection through advanced threat detection and security
                awareness.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">
                      Our Office
                    </p>
                    <p className="text-gray-600 text-sm">
                      803/8, Ekatva Onyx, Wagle Estate
                      <br />
                      Thane West-400604, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+918268949507"
                      className="text-gray-600 hover:text-primary transition-colors text-sm"
                    >
                      +91 8268949507
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">Email</p>
                    <a
                      href="mailto:info@jayaaitsolution.com"
                      className="text-gray-600 hover:text-primary transition-colors text-sm"
                    >
                      info@jayaaitsolution.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-gray-900 font-semibold">Follow Us</p>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: Linkedin,
                      href: "https://in.linkedin.com/company/jayaaitsolution",
                      label: "LinkedIn",
                    },
                    {
                      icon: Twitter,
                      href: "https://x.com/jayaaitsolution",
                      label: "Twitter",
                    },
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/jayaaitsolution",
                      label: "Facebook",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Services */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                Core Services
              </h3>
              <div className="space-y-3">
                {coreServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group block"
                  >
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-xs mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {keyFeatures.map((feature) => (
                  <li key={feature.name}>
                    <Link
                      href={feature.href}
                      className="flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <CheckCircle className="h-3 w-3 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                      <span className="text-gray-600 group-hover:text-primary transition-colors duration-300 text-sm">
                        {feature.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors duration-300 group text-sm"
                >
                  View All Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <CheckCircle className="h-3 w-3 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                      <span className="text-gray-600 group-hover:text-primary transition-colors duration-300 text-sm">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 pt-3">
                <h4 className="font-semibold text-gray-900">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-gray-600 hover:text-primary transition-colors text-sm block py-1"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="text-gray-600 hover:text-primary transition-colors text-sm block py-1"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-gray-500 text-sm">
                  &copy; {currentYear} JAYAA IT SOLUTION PVT. LTD. All rights
                  reserved.
                </p>
              </div>

              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <Shield className="h-3 w-3 text-primary" />
                  <span>Cybersecurity Experts</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Activity className="h-3 w-3 text-primary" />
                  <span>24/7 SOC Monitoring</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Globe className="h-3 w-3 text-primary" />
                  <span>Made in India</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
