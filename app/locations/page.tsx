import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Phone, Clock, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LocationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[300px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Nexivelo branch locations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">Find Us</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Branch <span className="text-emerald-300">Locations</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Find a Nexivelo branch or ATM near you for in-person banking services and support.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input type="search" placeholder="Enter ZIP code or city" className="pl-10" />
              </div>
              <Button className="bg-white text-emerald-700 border border-emerald-700">Find Locations</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="map" className="mx-auto max-w-5xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="mt-6">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Branch locations map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <p className="text-lg font-medium text-white bg-black/50 p-4 rounded">
                    Interactive Map Would Display Here
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {locations.map((location, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-40">
                        <Image
                          src={location.image || "/placeholder.svg"}
                          alt={location.name}
                          fill
                          className="object-cover"
                        />
                        {location.type === "branch" && (
                          <Badge className="absolute left-3 top-3 bg-emerald-700 text-white">Full-Service Branch</Badge>
                        )}
                        {location.type === "atm" && (
                          <Badge className="absolute left-3 top-3 bg-blue-600 text-white">ATM Only</Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-semibold">{location.name}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin className="mr-2 h-4 w-4 mt-0.5 text-emerald-700" />
                            <span>{location.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="mr-2 h-4 w-4 text-emerald-700" />
                            <span>{location.phone}</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="mr-2 h-4 w-4 mt-0.5 text-emerald-700" />
                            <div>
                              <p>Mon-Fri: {location.hours.weekday}</p>
                              <p>Sat: {location.hours.saturday}</p>
                              <p>Sun: {location.hours.sunday}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <Link href="/">
                            <Button className="bg-white text-emerald-700 border border-emerald-700">
                              View Details
                            </Button>
                          </Link>
                          <Button variant="outline" className="bg-white text-emerald-700 border border-emerald-700">
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-white text-emerald-700 border border-emerald-700">Load More Locations</Button>
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-6">
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <Card key={index}>
                    <CardContent className="flex flex-col p-4 sm:flex-row sm:items-center">
                      <div className="mb-4 sm:mb-0 sm:mr-6 sm:w-1/4">
                        <div className="relative h-32 w-full overflow-hidden rounded-md">
                          <Image
                            src={location.image || "/placeholder.svg"}
                            alt={location.name}
                            fill
                            className="object-cover"
                          />
                          {location.type === "branch" && (
                            <Badge className="absolute left-2 top-2 bg-emerald-700 text-white">
                              Full-Service Branch
                            </Badge>
                          )}
                          {location.type === "atm" && (
                            <Badge className="absolute left-2 top-2 bg-blue-600 text-white">ATM Only</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">{location.name}</h3>
                        <div className="grid gap-2 text-sm md:grid-cols-2">
                          <div className="flex items-start">
                            <MapPin className="mr-2 h-4 w-4 mt-0.5 text-emerald-700" />
                            <span>{location.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="mr-2 h-4 w-4 text-emerald-700" />
                            <span>{location.phone}</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="mr-2 h-4 w-4 mt-0.5 text-emerald-700" />
                            <div>
                              <p>Mon-Fri: {location.hours.weekday}</p>
                              <p>Sat: {location.hours.saturday}</p>
                              <p>Sun: {location.hours.sunday}</p>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">Services:</p>
                            <p className="text-gray-600">{location.services.join(", ")}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end sm:mt-0 sm:ml-4">
                        <Link href="/">
                          <Button className="bg-white text-emerald-700 border border-emerald-700">
                            Details <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-white text-emerald-700 border border-emerald-700">Load More Locations</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ATM Network */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Nationwide ATM Network</h2>
            <p className="mb-8 text-lg text-gray-600">
              As a Nexivelo customer, you have access to over 60,000 surcharge-free ATMs nationwide through our partner
              networks.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="bg-white text-emerald-700 border border-emerald-700">Find ATMs Near Me</Button>
              <Button className="bg-white text-emerald-700 border border-emerald-700">Download ATM Locator App</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const locations = [
  {
    id: "downtown",
    name: "Downtown Financial Center",
    type: "branch",
    address: "123 Main Street, New York, NY 10001",
    phone: "(212) 555-1234",
    hours: {
      weekday: "9:00 AM - 5:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed",
    },
    services: ["Full-Service Banking", "Mortgage Services", "Wealth Management", "Safe Deposit Boxes"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "midtown",
    name: "Midtown Branch",
    type: "branch",
    address: "456 Park Avenue, New York, NY 10022",
    phone: "(212) 555-5678",
    hours: {
      weekday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed",
    },
    services: ["Full-Service Banking", "Business Banking", "Investment Services"],
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "westside",
    name: "West Side ATM",
    type: "atm",
    address: "789 Broadway, New York, NY 10003",
    phone: "N/A",
    hours: {
      weekday: "24 Hours",
      saturday: "24 Hours",
      sunday: "24 Hours",
    },
    services: ["Cash Withdrawals", "Deposits", "Balance Inquiries"],
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "uptown",
    name: "Uptown Branch",
    type: "branch",
    address: "321 Lexington Avenue, New York, NY 10016",
    phone: "(212) 555-9012",
    hours: {
      weekday: "9:00 AM - 5:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed",
    },
    services: ["Full-Service Banking", "Mortgage Services", "Insurance Services"],
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2148&auto=format&fit=crop",
  },
  {
    id: "financial-district",
    name: "Financial District ATM",
    type: "atm",
    address: "555 Wall Street, New York, NY 10005",
    phone: "N/A",
    hours: {
      weekday: "24 Hours",
      saturday: "24 Hours",
      sunday: "24 Hours",
    },
    services: ["Cash Withdrawals", "Deposits", "Balance Inquiries"],
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: "brooklyn",
    name: "Brooklyn Heights Branch",
    type: "branch",
    address: "987 Atlantic Avenue, Brooklyn, NY 11217",
    phone: "(718) 555-3456",
    hours: {
      weekday: "9:00 AM - 5:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed",
    },
    services: ["Full-Service Banking", "Business Banking", "Wealth Management"],
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1780&auto=format&fit=crop",
  },
]

