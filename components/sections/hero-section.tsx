"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Shield,
  Zap,
  Award,
  AlertTriangle,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const trustedCompanies = [
  {
    name: "HDFC Bank",
    logo: "/company/hdfc-sales.png",
    width: 250,
    height: 120,
  },
  {
    name: "ICICI Lombard",
    logo: "/company/icici-lombard.png",
    width: 250,
    height: 120,
  },
  {
    name: "Kotak Bank",
    logo: "/company/kotak-life.png",
    width: 250,
    height: 120,
  },
  {
    name: "ICICI Bank",
    logo: "/company/icici-bank.png",
    width: 250,
    height: 150,
  },
  {
    name: "Bajaj Finserv",
    logo: "/company/bajaj.png",
    width: 250,
    height: 150,
  },
];

// Crawling bugs/threats
const CrawlingBugs = () => {
  const [bugs, setBugs] = useState<
    Array<{
      id: number;
      duration: number;
      delay: number;
      path: string;
    }>
  >([]);

  useEffect(() => {
    const generatedBugs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      path: `M${50 + i * 150} 100 Q${200 + i * 100} ${
        200 + Math.random() * 100
      } ${400 + i * 150} ${300 + Math.random() * 200}`,
    }));
    setBugs(generatedBugs);
  }, []);

  if (bugs.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bugs.map((bug) => (
        <motion.div key={bug.id}>
          <svg className="absolute inset-0 w-full h-full opacity-0">
            <motion.path
              d={bug.path}
              stroke="transparent"
              strokeWidth="2"
              fill="none"
              id={`bug-path-${bug.id}`}
            />
          </svg>
          <motion.div
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full opacity-30"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: bug.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bug.delay,
            }}
            style={{
              offsetPath: `path('${bug.path}')`,
              offsetRotate: "auto",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Subtle scanning lines
const ScanningLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Horizontal scanning lines */}
    <motion.div
      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/15 to-transparent"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        delay: 6,
      }}
    />
    <motion.div
      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        delay: 10,
      }}
    />

    {/* Vertical scanning lines */}
    <motion.div
      className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent"
      initial={{ x: 0 }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        delay: 5,
      }}
    />
    <motion.div
      className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-red-500/10 to-transparent"
      initial={{ x: 0 }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
        delay: 8,
      }}
    />
    <motion.div
      className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/12 to-transparent"
      initial={{ x: 0 }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "linear",
        delay: 3,
      }}
    />
  </div>
);

// Security alerts in corners
const SecurityAlerts = () => {
  const alerts = [
    { x: 95, y: 5, type: "threat", delay: 0 },
    { x: 5, y: 95, type: "scan", delay: 3 },
    { x: 90, y: 85, type: "block", delay: 6 },
    { x: 10, y: 15, type: "secure", delay: 9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {alerts.map((alert, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${alert.x}%`, top: `${alert.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: alert.delay,
            repeatDelay: 10,
          }}
        >
          <div className="w-2 h-2 bg-primary rounded-full shadow-lg" />
          <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
        </motion.div>
      ))}
    </div>
  );
};

// Minimal data flow
const DataFlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    {/* Top section flows */}
    <motion.div
      className="absolute top-1/4 left-0 w-8 h-0.5 bg-primary"
      initial={{ x: "-2rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
        delay: 1,
      }}
    />
    <motion.div
      className="absolute top-1/6 left-0 w-12 h-0.5 bg-green-500"
      initial={{ x: "-3rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: 3,
      }}
    />
    <motion.div
      className="absolute top-1/3 left-0 w-6 h-0.5 bg-blue-500"
      initial={{ x: "-1.5rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        delay: 5,
      }}
    />

    {/* Bottom section flows */}
    <motion.div
      className="absolute top-3/4 right-0 w-6 h-0.5 bg-secondary"
      initial={{ x: "2rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: 4,
      }}
    />
    <motion.div
      className="absolute top-5/6 right-0 w-10 h-0.5 bg-primary"
      initial={{ x: "2.5rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute top-2/3 right-0 w-4 h-0.5 bg-red-500"
      initial={{ x: "1rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "linear",
        delay: 6,
      }}
    />

    {/* Middle section diagonal flows */}
    <motion.div
      className="absolute top-1/2 left-0 w-5 h-0.5 bg-primary rotate-12"
      initial={{ x: "-1.5rem", y: 0 }}
      animate={{ x: "100vw", y: "-50px" }}
      transition={{
        duration: 11,
        repeat: Infinity,
        ease: "linear",
        delay: 7,
      }}
    />
    <motion.div
      className="absolute top-1/2 right-0 w-7 h-0.5 bg-green-500 -rotate-12"
      initial={{ x: "2rem", y: 0 }}
      animate={{ x: "-100vw", y: "50px" }}
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: "linear",
        delay: 9,
      }}
    />

    {/* Additional multi-directional flows */}
    <motion.div
      className="absolute top-1/8 left-0 w-4 h-0.5 bg-yellow-500"
      initial={{ x: "-1rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        delay: 8,
      }}
    />
    <motion.div
      className="absolute top-7/8 right-0 w-8 h-0.5 bg-purple-500"
      initial={{ x: "2rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "linear",
        delay: 5,
      }}
    />
  </div>
);

// Data encryption streams
const EncryptionStreams = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-8">
    {/* Encrypted data blocks */}
    {Array.from({ length: 8 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-green-500 rounded-sm"
        style={{
          left: `${10 + i * 10}%`,
          top: `${20 + (i % 3) * 20}%`,
        }}
        animate={{
          x: ["0px", "100vw"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 8 + i,
          repeat: Infinity,
          ease: "linear",
          delay: i * 1.5,
        }}
      />
    ))}

    {/* Encryption trails */}
    <motion.div
      className="absolute top-1/5 left-0 w-16 h-0.5 bg-gradient-to-r from-green-500 to-transparent"
      initial={{ x: "-4rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute bottom-1/5 right-0 w-12 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"
      initial={{ x: "3rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "linear",
        delay: 4,
      }}
    />
  </div>
);

// Security monitoring waves
const MonitoringWaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    {/* Sine wave patterns */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
      <motion.path
        d="M0 400 Q300 300 600 400 T1200 400"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary"
        strokeDasharray="10,5"
        animate={{ strokeDashoffset: [0, -15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0 200 Q300 100 600 200 T1200 200"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-green-500"
        strokeDasharray="8,7"
        animate={{ strokeDashoffset: [0, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.path
        d="M0 600 Q300 500 600 600 T1200 600"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-blue-500"
        strokeDasharray="6,9"
        animate={{ strokeDashoffset: [0, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
      />
    </svg>
  </div>
);

// Additional moving security elements
const SecurityPatrols = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-8">
    {/* Security patrol lines */}
    <motion.div
      className="absolute top-0 left-1/2 w-0.5 h-4 bg-primary"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
        delay: 0,
      }}
    />
    <motion.div
      className="absolute top-0 left-1/3 w-0.5 h-6 bg-green-500"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute top-0 right-1/4 w-0.5 h-3 bg-blue-500"
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear",
        delay: 4,
      }}
    />

    {/* Horizontal patrols */}
    <motion.div
      className="absolute left-0 top-1/5 w-5 h-0.5 bg-red-500"
      initial={{ x: "-1.25rem" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
        delay: 1,
      }}
    />
    <motion.div
      className="absolute right-0 bottom-1/4 w-7 h-0.5 bg-yellow-500"
      initial={{ x: "1.75rem" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
        delay: 3,
      }}
    />
  </div>
);

// Corner security indicators
const CornerIndicators = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Top right */}
    <motion.div
      className="absolute top-8 right-8 text-xs text-primary/40 font-mono"
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      SECURE
    </motion.div>

    {/* Bottom left */}
    <motion.div
      className="absolute bottom-8 left-8 text-xs text-green-500/40 font-mono"
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
    >
      PROTECTED
    </motion.div>

    {/* Scanning indicator */}
    <motion.div
      className="absolute top-1/2 right-4 text-xs text-primary/30 font-mono rotate-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 3 }}
    >
      SCANNING...
    </motion.div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle Background Effects */}
      <CrawlingBugs />
      <ScanningLines />
      <SecurityAlerts />
      <DataFlow />

      {/* <ThreatDetection /> */}
      <EncryptionStreams />
      {/* <FirewallBarriers /> */}
      <MonitoringWaves />
      <SecurityPatrols />
      <CornerIndicators />

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full"
            >
              <Award className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">
                Trusted by enterprises in BFSI, Healthcare, Government, and
                Technology.
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <div className="flex flex-col gap-3 lg:gap-4">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="flex items-center gap-3 text-primary">
                      <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0" />
                      <span>Protect.</span>
                    </span>
                    <span className="flex items-center gap-3 text-primary">
                      <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0" />
                      <span>Prevent.</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-3 text-primary">
                    <Trophy className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0" />
                    <span>Prevail.</span>
                  </span>
                </div>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At JAYAA IT Solution, we empower businesses to stay ahead of
                evolving cyber threats through intelligent, proactive, and
                compliance-driven security solutions.
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700">
                From endpoint protection to red teaming, our cybersecurity suite
                is designed to ensure resilience, business continuity, and
                regulatory peace of mind.
              </p>
              <p className="text-lg font-semibold text-primary">
                Safeguard your digital future with industry-grade cybersecurity,
                today.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                <Link
                  href="/services"
                  className="flex items-center justify-center"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Solutions
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/80 font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Get Free Assessment
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6 sm:pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                <div className="bg-primary/5 rounded-lg p-4 text-center border border-primary/10">
                  <div className="text-lg sm:text-2xl font-bold text-primary mb-1">
                    🟢 24/7/365
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                    Real-Time Threat
                    <br className="sm:hidden" /> Monitoring
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center border border-primary/10">
                  <div className="text-lg sm:text-2xl font-bold text-primary mb-1">
                    🟣 50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                    Enterprise Clients
                    <br className="sm:hidden" /> Protected
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center border border-primary/10 col-span-2 lg:col-span-1">
                  <div className="text-lg sm:text-2xl font-bold text-primary mb-1">
                    🟠 99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                    Compliance-Driven
                    <br className="sm:hidden" /> Uptime SLA
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 shadow-xl">
              {/* Placeholder for main hero image */}
              <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <Shield className="h-24 w-24 text-primary mx-auto relative z-10" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Enterprise Security Platform
                    </h3>
                    <p className="text-gray-600">
                      Advanced threat protection for modern businesses
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-green-500"
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    System Protected
                  </span>
                </div>
              </motion.div>

              {/* <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-primary"
              >
                <div className="space-y-1">
                  <div className="text-xs text-gray-500">Threats Blocked Today</div>
                  <motion.div 
                    className="text-lg font-bold text-primary"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    2,847
                  </motion.div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Features Section */}
      {/* <div className="bg-gray-50 py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading protection with advanced AI-powered threat detection 
              and comprehensive security management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300"
              >
                <div className="mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Trusted Companies Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-8">
              Trusted by Leading Organizations
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {trustedCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="w-40 h-24 rounded-lg backdrop-blur-sm  flex items-center justify-center p-4 group-hover:bg-white transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={company.width}
                      height={company.height}
                      className="max-w-full max-h-full object-contain transition-opacity duration-300"
                      priority={index < 3}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
