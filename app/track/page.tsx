"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Search,
  Package,
  Truck,
  Plane,
  Ship,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  User,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function TrackPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Mock tracking data
  const mockTrackingData = {
    RCP123456789: {
      trackingNumber: "RCP123456789",
      status: "In Transit",
      statusColor: "bg-blue-500",
      service: "Air Freight Express",
      origin: "London, UK",
      destination: "New York, USA",
      estimatedDelivery: "2024-01-15",
      weight: "2.5 kg",
      dimensions: "30x20x15 cm",
      sender: "ABC Electronics Ltd",
      recipient: "Tech Solutions Inc",
      currentLocation: "Frankfurt, Germany",
      progress: 60,
      events: [
        {
          date: "2024-01-10",
          time: "14:30",
          location: "London, UK",
          status: "Package Picked Up",
          description: "Package collected from sender",
          icon: Package,
          completed: true,
        },
        {
          date: "2024-01-10",
          time: "18:45",
          location: "London Heathrow Airport",
          status: "Departed Origin",
          description: "Package departed from origin facility",
          icon: Plane,
          completed: true,
        },
        {
          date: "2024-01-11",
          time: "08:15",
          location: "Frankfurt, Germany",
          status: "In Transit",
          description: "Package in transit at sorting facility",
          icon: Truck,
          completed: true,
        },
        {
          date: "2024-01-14",
          time: "Expected",
          location: "New York JFK Airport",
          status: "Arriving at Destination",
          description: "Package arriving at destination facility",
          icon: Plane,
          completed: false,
        },
        {
          date: "2024-01-15",
          time: "Expected",
          location: "New York, USA",
          status: "Out for Delivery",
          description: "Package out for final delivery",
          icon: Truck,
          completed: false,
        },
      ],
    },
    RCP987654321: {
      trackingNumber: "RCP987654321",
      status: "Delivered",
      statusColor: "bg-green-500",
      service: "Ocean Freight Standard",
      origin: "Shanghai, China",
      destination: "Hamburg, Germany",
      estimatedDelivery: "2024-01-08",
      actualDelivery: "2024-01-08",
      weight: "150 kg",
      dimensions: "100x80x60 cm",
      sender: "Manufacturing Co Ltd",
      recipient: "European Distributors GmbH",
      currentLocation: "Hamburg, Germany",
      progress: 100,
      events: [
        {
          date: "2023-12-15",
          time: "10:00",
          location: "Shanghai, China",
          status: "Package Picked Up",
          description: "Package collected from sender",
          icon: Package,
          completed: true,
        },
        {
          date: "2023-12-16",
          time: "14:30",
          location: "Shanghai Port",
          status: "Departed Origin Port",
          description: "Container loaded on vessel",
          icon: Ship,
          completed: true,
        },
        {
          date: "2024-01-05",
          time: "09:15",
          location: "Hamburg Port",
          status: "Arrived at Destination Port",
          description: "Container arrived and cleared customs",
          icon: Ship,
          completed: true,
        },
        {
          date: "2024-01-08",
          time: "11:30",
          location: "Hamburg, Germany",
          status: "Delivered",
          description: "Package successfully delivered to recipient",
          icon: CheckCircle,
          completed: true,
        },
      ],
    },
  }

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const result = mockTrackingData[trackingNumber as keyof typeof mockTrackingData]
    setTrackingResult(result || null)
    setIsLoading(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return CheckCircle
      case "in transit":
        return Truck
      case "processing":
        return Clock
      default:
        return Package
    }
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
              <Link href="/about" className="hover:text-orange-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-orange-400 transition-colors">
                Contact
              </Link>
              <Link href="/track" className="text-orange-400 font-semibold">
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
                  className="text-orange-400 font-semibold py-2"
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
            backgroundImage: `url('/hands-using-tablet-device-for-package-tracking-wit.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-teal-800/80"></div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
                Track Your <span className="text-orange-400">Shipment</span>
              </h1>
              <p className="text-lg md:text-xl text-pretty text-white mb-8">
                Get real-time updates on your package location and delivery status with our advanced tracking system.
              </p>

              {/* Tracking Form */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Enter tracking number (e.g., RCP123456789)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70"
                    onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                  />
                  <Button
                    onClick={handleTrack}
                    disabled={isLoading}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 flex items-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Tracking...</span>
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5" />
                        <span>TRACK</span>
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Shipment Overview */}
            <Card className="bg-white shadow-lg p-8 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Shipment Details</h2>
                  <p className="text-lg text-gray-600">Tracking Number: {trackingResult.trackingNumber}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge className={`${trackingResult.statusColor} text-white px-4 py-2 text-lg`}>
                    {trackingResult.status}
                  </Badge>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Delivery Progress</span>
                  <span className="text-sm font-medium text-gray-700">{trackingResult.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${trackingResult.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Shipment Info Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Type</h4>
                  <p className="text-gray-600">{trackingResult.service}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Origin</h4>
                  <p className="text-gray-600">{trackingResult.origin}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Destination</h4>
                  <p className="text-gray-600">{trackingResult.destination}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {trackingResult.actualDelivery ? "Delivered On" : "Est. Delivery"}
                  </h4>
                  <p className="text-gray-600">{trackingResult.actualDelivery || trackingResult.estimatedDelivery}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weight</h4>
                  <p className="text-gray-600">{trackingResult.weight}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
                  <p className="text-gray-600">{trackingResult.dimensions}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Current Location</h4>
                  <p className="text-gray-600">{trackingResult.currentLocation}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sender</h4>
                  <p className="text-gray-600">{trackingResult.sender}</p>
                </div>
              </div>
            </Card>

            {/* Tracking Timeline */}
            <Card className="bg-white shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tracking History</h3>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-6">
                  {trackingResult.events.map((event: any, index: number) => {
                    const IconComponent = event.icon
                    return (
                      <div key={index} className="relative flex items-start space-x-4">
                        <div
                          className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${
                            event.completed ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          <IconComponent className={`h-6 w-6 ${event.completed ? "text-white" : "text-gray-600"}`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <Card
                            className={`p-4 ${event.completed ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h4 className={`font-semibold ${event.completed ? "text-green-800" : "text-gray-700"}`}>
                                {event.status}
                              </h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{event.date}</span>
                                </span>
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-2">{event.description}</p>
                            <p className="text-sm text-gray-500 flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </p>
                          </Card>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* No Results */}
      {trackingResult === null && trackingNumber && !isLoading && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Card className="bg-white shadow-lg p-8 max-w-2xl mx-auto">
              <AlertCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tracking Number Not Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any shipment with tracking number "{trackingNumber}". Please check the number and try
                again.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Try these sample tracking numbers:</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button variant="outline" onClick={() => setTrackingNumber("RCP123456789")} className="text-sm">
                    RCP123456789 (In Transit)
                  </Button>
                  <Button variant="outline" onClick={() => setTrackingNumber("RCP987654321")} className="text-sm">
                    RCP987654321 (Delivered)
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-xl text-gray-600">Our customer service team is here to assist you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our tracking specialists</p>
              <p className="font-semibold text-teal-800">+44 20 1234 5678</p>
            </Card>

            <Card className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your tracking inquiry</p>
              <p className="font-semibold text-teal-800">support@remedycargopro.com</p>
            </Card>

            <Card className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
              <User className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team online</p>
              <Button className="bg-teal-800 hover:bg-teal-900 text-white">Start Chat</Button>
            </Card>
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
