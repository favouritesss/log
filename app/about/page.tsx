"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50K+", label: "Shipments Delivered" },
    { number: "100+", label: "Countries Served" },
    { number: "24/7", label: "Customer Support" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service that you can count on.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority. We tailor our solutions to meet your unique business needs.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide network with local expertise to serve you wherever your business takes you.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of quality and continuous improvement in all we do.",
    },
  ]

  const team = [
    {
      name: "James Wilson",
      position: "Chief Executive Officer",
      image: "/professional-business-executive.jpg",
      description: "20+ years in logistics and supply chain management",
    },
    {
      name: "Sarah Thompson",
      position: "Operations Director",
      image: "/professional-business-woman.png",
      description: "Expert in international freight and customs operations",
    },
    {
      name: "Michael Chen",
      position: "Technology Director",
      image: "/placeholder-8y84y.png",
      description: "Leading digital transformation in logistics technology",
    },
    {
      name: "Emma Rodriguez",
      position: "Customer Relations Manager",
      image: "/customer-service-manager.png",
      description: "Dedicated to exceptional customer service and satisfaction",
    },
  ]

  const milestones = [
    { year: "2009", title: "Company Founded", description: "Remedy Cargo Pro established in Birmingham, UK" },
    { year: "2012", title: "European Expansion", description: "Extended services across Continental Europe" },
    { year: "2015", title: "Digital Platform Launch", description: "Introduced online tracking and management system" },
    { year: "2018", title: "Global Network", description: "Expanded to serve 100+ countries worldwide" },
    { year: "2021", title: "Technology Upgrade", description: "Launched V2.0 with advanced AI-powered logistics" },
    { year: "2024", title: "V2.1 Release", description: "Latest platform with enhanced features and capabilities" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex justify-between items-center py-2 text-sm border-b border-teal-700">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">support@remedycargopro.com</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">Follow us:</span>
              <Facebook className="h-4 w-4 cursor-pointer hover:text-orange-400" />
              <Twitter className="h-4 w-4 cursor-pointer hover:text-orange-400" />
              <Linkedin className="h-4 w-4 cursor-pointer hover:text-orange-400" />
            </div>
          </div>

          {/* Main header */}
          <div className="flex justify-between items-center py-4">
            <div className="text-xl md:text-2xl font-bold">
              <Link href="/">
                Remedy <span className="text-orange-400">Cargo Pro V2.1</span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-orange-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-orange-400 font-semibold">
                About
              </Link>
              <Link href="/contact" className="hover:text-orange-400 transition-colors">
                Contact
              </Link>
              <Link href="/track" className="hover:text-orange-400 transition-colors">
                Track
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">TRACK</Button>
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-teal-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-teal-700 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="hover:text-orange-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-orange-400 font-semibold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/track"
                  className="hover:text-orange-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Track Package
                </Link>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded w-full mt-4">
                  TRACK NOW
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] bg-teal-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/modern-warehouse-logistics-facility-with-yellow-st.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-teal-800/80"></div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
                About <span className="text-orange-400">Remedy Cargo Pro</span>
              </h1>
              <p className="text-lg md:text-xl text-pretty text-white">
                Leading the future of logistics with innovative solutions and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, Remedy Cargo Pro has grown from a small logistics startup to a leading international
                freight forwarding company. Based in Birmingham, UK, we specialize in providing customized supply chain
                solutions throughout the UK, Ireland, and Continental Europe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple mission: to make international shipping more reliable, transparent, and
                efficient for businesses of all sizes. Today, we serve thousands of customers worldwide with our
                comprehensive logistics solutions.
              </p>
              <p className="text-lg text-gray-600">
                With our latest V2.1 platform, we continue to innovate and lead the industry with cutting-edge
                technology and exceptional customer service.
              </p>
            </div>
            <div>
              <img
                src="/cargo-airplane-being-loaded-with-freight-container.jpg"
                alt="Our story"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl">Numbers that speak to our commitment and success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our company's growth</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-white p-6 shadow-lg">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-teal-800 text-white p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-orange-400 mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To provide innovative, reliable, and cost-effective logistics solutions that enable our clients to focus
                on their core business while we handle their supply chain challenges with expertise and care.
              </p>
            </Card>

            <Card className="bg-orange-500 text-white p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To be the world's most trusted logistics partner, setting industry standards for innovation,
                sustainability, and customer satisfaction while connecting businesses across the globe.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Success Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us and experience the difference that expertise, innovation, and dedication can make for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              className="border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white px-8 py-3 text-lg rounded bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <Link href="/">
                  Remedy <span className="text-orange-400">Cargo Pro V2.1</span>
                </Link>
              </div>
              <p className="text-gray-400 mb-4">
                Leading logistics and freight forwarding company providing reliable shipping solutions worldwide.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 cursor-pointer hover:text-orange-400" />
                <Twitter className="h-5 w-5 cursor-pointer hover:text-orange-400" />
                <Linkedin className="h-5 w-5 cursor-pointer hover:text-orange-400" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-orange-400">
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400">
                    Ocean Freight
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400">
                    Road Transport
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400">
                    Warehousing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400">
                    Customs Clearance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-orange-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-orange-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="hover:text-orange-400">
                    Track Package
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@remedycargopro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Logistics Ave, Birmingham, UK</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+44 20 1234 5678</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Remedy Cargo Pro V2.1. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
