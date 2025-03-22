import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[300px] items-center justify-center overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">About Nexivelo</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            A trusted financial institution with a commitment to our customers and communities since 1985.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-1 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Our Story & Mission</h2>
              <p className="mb-4 text-gray-600">
                Founded in 1985, Nexivelo began with a simple mission: to provide accessible, reliable banking services
                that put people first. What started as a single branch has grown into a trusted financial institution
                serving communities across the nation.
              </p>
              <p className="mb-6 text-gray-600">
                Our mission remains unchanged: to empower individuals and businesses to achieve financial success
                through personalized service, innovative solutions, and a commitment to the communities we serve.
              </p>
              <p className="mb-6 text-gray-600">
                We are dedicated to reducing our environmental footprint through paperless banking, energy-efficient
                facilities, and sustainable investment options.
              </p>
              <p className="mb-6 text-gray-600">
                Our leadership team is committed to innovation and customer-centric services, ensuring Nexivelo
                maintains its strong fiscal foundation and sustainable growth.
              </p>
              <Button className="bg-emerald-700 text-white">
                Download Our Annual Report <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

