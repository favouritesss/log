"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Users,
  Cpu,
  Target,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function RemedyCargoPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselSlides = [
    {
      image: "/modern-warehouse-logistics-facility-with-yellow-st.jpg",
      title: "Transport & Logistics",
      subtitle: "Take the complexity out of customs Freight Solutions with customs brokerage services",
      buttonText: "COURIER SERVICE",
    },
    {
      image: "/cargo-airplane-being-loaded-with-freight-container.jpg",
      title: "Air Freight Solutions",
      subtitle: "Fast and reliable air cargo services connecting you to global markets worldwide",
      buttonText: "AIR FREIGHT",
    },
    {
      image: "/shipping-containers-at-port-with-cranes.jpg",
      title: "Ocean Freight Services",
      subtitle: "Cost-effective sea freight solutions for your international shipping needs",
      buttonText: "OCEAN FREIGHT",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [carouselSlides.length])

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      // Handle tracking logic here
      console.log("Tracking:", trackingNumber)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

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
              Remedy <span className="text-orange-400">Cargo Pro V2.1</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-orange-400 transition-colors">
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
                  className="hover:text-orange-400 transition-colors py-2"
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

      {/* Hero Section - Carousel */}
      <section className="relative h-[600px] bg-teal-800 overflow-hidden">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-teal-800/80"></div>

            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 text-white">
                <div className="max-w-2xl">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-white">
                    {slide.title.split(" ").map((word, i) =>
                      word === "Logistics" || word === "Solutions" || word === "Services" ? (
                        <span key={i} className="text-orange-400">
                          {word}{" "}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      ),
                    )}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-pretty text-white">{slide.subtitle}</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded">
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 z-20 bg-black/20 rounded-full p-2 hover:bg-black/40 transition-all"
          aria-label="Previous slide"
        >
          <ArrowRight className="h-6 w-6 md:h-8 md:w-8 rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 z-20 bg-black/20 rounded-full p-2 hover:bg-black/40 transition-all"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-orange-400 scale-110" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Orange Banner */}
      <section className="bg-orange-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">
            Remedy Cargo Pro V2.1 Logistics Facilities & Technical Support to Continue Operations as Essential Services
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img
                src="/hands-using-tablet-device-for-package-tracking-wit.jpg"
                alt="Package tracking"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-orange-500 rounded-full p-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Right side - Tracking Form */}
            <div>
              <Card className="bg-teal-800 text-white p-8">
                <h3 className="text-2xl font-bold mb-6">Track Your Shipment</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter tracking number..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="bg-teal-700 border-teal-600 text-white placeholder-gray-300"
                  />
                  <Button
                    onClick={handleTrack}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg rounded flex items-center justify-center space-x-2"
                  >
                    <Search className="h-5 w-5" />
                    <span>SEARCH</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                Worldwide Logistics, Air Freight Forwarding, Road Haulage.
              </h2>
              <p className="text-gray-600 mb-8 text-pretty">
                Remedy Cargo Pro V2.1 is a leading third party contract logistics company based in the Midlands, United
                Kingdom. We specialise in providing customised supply chain solutions throughout Continental the UK,
                Ireland and Continental Europe.
              </p>
              <Button
                variant="outline"
                className="border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white bg-transparent"
              >
                Discover All Solutions
              </Button>
            </div>

            {/* Right side - Image */}
            <div>
              <img
                src="/cargo-airplane-being-loaded-with-freight-container.jpg"
                alt="Air freight"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Leadership */}
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership</h3>
              <p className="text-gray-600 mb-6">
                Experts who have extensive, hands-on experience in supply chain management.
              </p>
              <Link
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center space-x-1"
              >
                <span>Connect with an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Technology */}
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology</h3>
              <p className="text-gray-600 mb-6">
                Innovative and smart use of technology on the road, ocean, railways, in the air.
              </p>
              <Link
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center space-x-1"
              >
                <span>Connect with an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Solution */}
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600 mb-6">
                Global leaders in intermodal, less-than-truckload supply chain management.
              </p>
              <Link
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center space-x-1"
              >
                <span>Connect with an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply Chain Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Supply Chain Solutions</h2>
            <p className="text-xl text-gray-600">Dedicated specialists taking care of your products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Transportation Services */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/modern-logistics-trucks-and-transportation-vehicle.jpg"
                alt="Transportation Services"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Our Transportation Services</h3>
                <Link href="#" className="text-orange-400 hover:text-orange-300 flex items-center space-x-1">
                  <span>Discover More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Global LCL */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/shipping-containers-at-port-with-cranes.jpg"
                alt="Global LCL"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Global LCL</h3>
                <Link href="#" className="text-orange-400 hover:text-orange-300 flex items-center space-x-1">
                  <span>Discover More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Container Packaged Goods */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/packaged-goods-and-containers-in-warehouse.jpg"
                alt="Container Packaged Goods"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Container Packaged Goods</h3>
                <Link href="#" className="text-orange-400 hover:text-orange-300 flex items-center space-x-1">
                  <span>Discover More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Transportation */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/freight-transportation-and-logistics-operations.jpg"
                alt="Transportation"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Transportation</h3>
                <Link href="#" className="text-orange-400 hover:text-orange-300 flex items-center space-x-1">
                  <span>Discover More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Retail */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/retail-logistics-and-distribution-center.jpg"
                alt="Retail"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Retail</h3>
                <Link href="#" className="text-orange-400 hover:text-orange-300 flex items-center space-x-1">
                  <span>Discover More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Quality Delivered as Standard</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Forwarding</h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Supply Chain</h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outsourcing</h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technology</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image with overlay */}
            <div className="relative">
              <img
                src="/cargo-helicopter-transporting-shipping-containers-.jpg"
                alt="Quality logistics"
                className="rounded-lg w-full"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
              <div className="absolute top-6 right-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Successful online business</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      solutions that are designed to simplify inventory management, streamline operations, and boost
                      sales.
                    </p>
                    <Link href="#" className="text-blue-600 text-sm font-medium">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Remedy Cargo Pro has transformed our logistics operations. Their reliability and efficiency are
                unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-800 font-semibold">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Davis</p>
                  <p className="text-sm text-gray-600">CEO, Global Trade Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Outstanding service and real-time tracking. They handle our international shipments with care and
                precision."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-800 font-semibold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">Operations Manager, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional team, competitive rates, and excellent customer support. Highly recommended for all
                logistics needs."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-800 font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Roberts</p>
                  <p className="text-sm text-gray-600">Director, Import Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship with Confidence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Remedy Cargo Pro for their logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded">
              Get Quote Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-800 px-8 py-3 text-lg rounded bg-transparent"
            >
              Contact Us
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
                Remedy <span className="text-orange-400">Cargo Pro V2.1</span>
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
