import Link from "next/link"
import Image from "next/image"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ArrowRight,
  Shield,
  Award,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Eye,
  Activity,
  Code,
  Lock,
  SearchCheck,
  AlertTriangle,
  Database,
  Users,
  Monitor,
  CloudCog
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const coreServices = [
    { 
      name: "Peregrine", 
      description: "Threat Detection & Response",
      href: "/services/peregrine", 
      icon: <Shield className="h-5 w-5" />,
      gradient: "from-red-500 to-orange-500"
    },
    { 
      name: "Pinpoint", 
      description: "Security Testing & Assessment",
      href: "/services/pinpoint", 
      icon: <SearchCheck className="h-5 w-5" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "MSP247", 
      description: "Managed Security Services",
      href: "/services/msp247", 
      icon: <CloudCog className="h-5 w-5" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "nCompass", 
      description: "Security Consulting & Training",
      href: "/services/ncompass", 
      icon: <Users className="h-5 w-5" />,
      gradient: "from-purple-500 to-violet-500"
    },
  ]

  const keyFeatures = [
    { name: "Dark Web Monitoring", href: "/services/peregrine#dark-web" },
    { name: "Red Teaming Services", href: "/services/pinpoint#redteam" },
    { name: "SOC Monitoring 24/7", href: "/services/peregrine#soc" },
    { name: "Privileged Access Management", href: "/solutions#pam" },
    { name: "Security Awareness Training", href: "/services/ncompass#training" },
    { name: "API Security Testing", href: "/services/pinpoint#api" },
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "All Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 border-t border-gray-200/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 via-transparent to-secondary/3"></div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section with CTA */}
        <div className="border-b border-gray-200/50">
          <div className="container mx-auto px-4 md:px-6 py-20">
            <div className="text-center space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to Secure Your
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                    Digital Future?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of satisfied clients who trust JAYAA IT Solution for comprehensive cybersecurity protection.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg">
                  <Link href="/contact">
                    <Phone className="mr-3 h-5 w-5" />
                    Get Free Security Assessment
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 px-8 py-4 text-lg">
                  <Link href="/solutions">
                    Explore All Solutions
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
                {[
                  { icon: <Award className="h-6 w-6" />, text: "ISO Certified" },
                  { icon: <Shield className="h-6 w-6" />, text: "SOC Compliant" },
                  { icon: <Activity className="h-6 w-6" />, text: "24/7 Monitoring" },
                  { icon: <Star className="h-6 w-6" />, text: "Expert Team" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-3 group">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
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
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Leading cybersecurity provider delivering comprehensive protection through advanced threat detection and security awareness.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">Our Office</p>
                    <p className="text-gray-600">803/8, Ekatva Onyx, Wagle Estate<br />Thane West-400604, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">Phone</p>
                    <a href="tel:+918268949507" className="text-gray-600 hover:text-primary transition-colors">
                      +91 8268949507
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">Email</p>
                    <a href="mailto:sanjayj@jayaaitsolution.com" className="text-gray-600 hover:text-primary transition-colors">
                      sanjayj@jayaaitsolution.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-gray-900 font-semibold text-lg">Follow Us</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Facebook, href: "#", label: "Facebook" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-gray-100 rounded-xl hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Services */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Zap className="h-6 w-6 text-primary mr-3" />
                Core Services
              </h3>
              <div className="space-y-6">
                {coreServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group block"
                  >
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 text-lg">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Shield className="h-6 w-6 text-primary mr-3" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {keyFeatures.map((feature) => (
                  <li key={feature.name}>
                    <Link
                      href={feature.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <CheckCircle className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                        {feature.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link 
                  href="/services"
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors duration-300 group"
                >
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Globe className="h-6 w-6 text-primary mr-3" />
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <CheckCircle className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-4 pt-4">
                <h4 className="font-semibold text-gray-900">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-gray-600 hover:text-primary transition-colors">
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
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-gray-500">
                  &copy; {currentYear} JAYAA IT SOLUTION PVT. LTD. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <span className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Cybersecurity Experts</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <span>24/7 SOC Monitoring</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span>Made in India</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
