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
  Plane,
  Ship,
  Truck,
  Package,
  Globe,
  Clock,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const services = [
    {
      icon: Plane,
      title: "Air Freight Services",
      description: "Fast and reliable air cargo solutions for time-sensitive shipments worldwide.",
      features: ["Express delivery", "Temperature controlled", "Dangerous goods handling", "Door-to-door service"],
      image: "/cargo-airplane-being-loaded-with-freight-container.jpg",
    },
    {
      icon: Ship,
      title: "Ocean Freight Services",
      description: "Cost-effective sea freight solutions for large volume international shipments.",
      features: ["FCL & LCL options", "Port-to-port delivery", "Container tracking", "Customs clearance"],
      image: "/shipping-containers-at-port-with-cranes.jpg",
    },
    {
      icon: Truck,
      title: "Road Transport",
      description: "Comprehensive ground transportation services across Europe and the UK.",
      features: ["Full truckload (FTL)", "Less than truckload (LTL)", "Cross-docking", "Last-mile delivery"],
      image: "/modern-logistics-trucks-and-transportation-vehicle.jpg",
    },
    {
      icon: Package,
      title: "Warehousing & Distribution",
      description: "Secure storage and efficient distribution solutions for your inventory.",
      features: ["Climate controlled", "Inventory management", "Pick & pack", "Order fulfillment"],
      image: "/packaged-goods-and-containers-in-warehouse.jpg",
    },
    {
      icon: Globe,
      title: "Customs Clearance",
      description: "Expert customs brokerage services to ensure smooth international trade.",
      features: ["Documentation support", "Duty optimization", "Compliance management", "Trade consulting"],
      image: "/freight-transportation-and-logistics-operations.jpg",
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments.",
      features: ["All-risk coverage", "Marine insurance", "Cargo protection", "Claims support"],
      image: "/retail-logistics-and-distribution-center.jpg",
    },
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
              <Link href="/services" className="text-orange-400 font-semibold">
                Services
              </Link>
              <Link href="/about" className="hover:text-orange-400 transition-colors">
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
                  className="text-orange-400 font-semibold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="hover:text-orange-400 transition-colors py-2"
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
                Our <span className="text-orange-400">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-pretty text-white">
                Comprehensive logistics solutions tailored to meet your business needs across air, sea, and land
                transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Logistics Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From air freight to warehousing, we provide end-to-end logistics services to keep your business moving
              forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <service.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <service.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">Get Quote</Button>
                  <Button
                    variant="outline"
                    className="border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white px-6 py-3 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Remedy Cargo Pro?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              With years of experience and a commitment to excellence, we deliver logistics solutions you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock customer service and shipment monitoring</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-300">Worldwide coverage with local expertise in every market</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Advanced security measures and insurance coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-300">Experienced professionals dedicated to your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized logistics solution that meets your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded">
              Request Quote
            </Button>
            <Button
              variant="outline"
              className="border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white px-8 py-3 text-lg rounded bg-transparent"
            >
              Schedule Consultation
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
