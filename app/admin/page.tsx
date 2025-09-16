"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, Plus, Search, Edit, Eye, Truck, BarChart3 } from "lucide-react"
import Link from "next/link"

// Mock packages data
const mockPackages = [
  {
    id: "TRK001234567",
    sender: "John Smith",
    recipient: "Jane Doe",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    status: "In Transit",
    created: "2024-01-15",
    estimatedDelivery: "2024-01-20",
  },
  {
    id: "TRK987654321",
    sender: "Amazon Warehouse",
    recipient: "Mike Johnson",
    origin: "Seattle, WA",
    destination: "Portland, OR",
    status: "Delivered",
    created: "2024-01-16",
    estimatedDelivery: "2024-01-18",
  },
  {
    id: "TRK555666777",
    sender: "Best Buy",
    recipient: "Sarah Wilson",
    origin: "Chicago, IL",
    destination: "Detroit, MI",
    status: "Pending",
    created: "2024-01-18",
    estimatedDelivery: "2024-01-22",
  },
]

export default function AdminPage() {
  const [packages, setPackages] = useState(mockPackages)
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newPackage, setNewPackage] = useState({
    sender: "",
    recipient: "",
    origin: "",
    destination: "",
    status: "Pending",
  })

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.recipient.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const generateTrackingNumber = () => {
    return "TRK" + Math.random().toString().substr(2, 9)
  }

  const handleCreatePackage = () => {
    const trackingNumber = generateTrackingNumber()
    const today = new Date().toISOString().split("T")[0]
    const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

    const packageData = {
      id: trackingNumber,
      ...newPackage,
      created: today,
      estimatedDelivery,
    }

    setPackages([...packages, packageData])
    setNewPackage({
      sender: "",
      recipient: "",
      origin: "",
      destination: "",
      status: "Pending",
    })
    setIsCreateDialogOpen(false)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "in transit":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const stats = {
    total: packages.length,
    pending: packages.filter((p) => p.status === "Pending").length,
    inTransit: packages.filter((p) => p.status === "In Transit").length,
    delivered: packages.filter((p) => p.status === "Delivered").length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">SwiftTrack Admin</h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
                Track Package
              </Link>
              <Link href="/admin" className="text-blue-600 font-medium">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Package Management</h2>
          <p className="text-gray-600">Manage and track all shipments in your system</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Packages</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
                </div>
                <Package className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Transit</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.inTransit}</p>
                </div>
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Delivered</p>
                  <p className="text-3xl font-bold text-green-600">{stats.delivered}</p>
                </div>
                <Package className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Create Package</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Package</DialogTitle>
                <DialogDescription>Add a new package to the tracking system</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="sender">Sender</Label>
                  <Input
                    id="sender"
                    value={newPackage.sender}
                    onChange={(e) => setNewPackage({ ...newPackage, sender: e.target.value })}
                    placeholder="Sender name"
                  />
                </div>
                <div>
                  <Label htmlFor="recipient">Recipient</Label>
                  <Input
                    id="recipient"
                    value={newPackage.recipient}
                    onChange={(e) => setNewPackage({ ...newPackage, recipient: e.target.value })}
                    placeholder="Recipient name"
                  />
                </div>
                <div>
                  <Label htmlFor="origin">Origin</Label>
                  <Input
                    id="origin"
                    value={newPackage.origin}
                    onChange={(e) => setNewPackage({ ...newPackage, origin: e.target.value })}
                    placeholder="Origin address"
                  />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    value={newPackage.destination}
                    onChange={(e) => setNewPackage({ ...newPackage, destination: e.target.value })}
                    placeholder="Destination address"
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newPackage.status}
                    onValueChange={(value) => setNewPackage({ ...newPackage, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="In Transit">In Transit</SelectItem>
                      <SelectItem value="Delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleCreatePackage} className="w-full">
                  Create Package
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Packages Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Packages</CardTitle>
            <CardDescription>Manage and track all packages in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tracking Number</TableHead>
                  <TableHead>Sender</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Est. Delivery</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPackages.map((pkg) => (
                  <TableRow key={pkg.id}>
                    <TableCell className="font-mono font-medium">{pkg.id}</TableCell>
                    <TableCell>{pkg.sender}</TableCell>
                    <TableCell>{pkg.recipient}</TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {pkg.origin} → {pkg.destination}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(pkg.status)}>{pkg.status}</Badge>
                    </TableCell>
                    <TableCell>{pkg.created}</TableCell>
                    <TableCell>{pkg.estimatedDelivery}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
