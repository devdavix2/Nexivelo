import Image from "next/image"
import Link from "next/link"
import { Home, Calculator, Clock, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MortgageServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
            alt="Modern home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">Mortgage Services</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Find Your <span className="text-emerald-300">Dream Home</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Discover our range of mortgage solutions designed to help you achieve homeownership with competitive rates
            and personalized service.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-emerald-800">
              Apply for a Mortgage
            </Button>
            <Button size="lg" variant="outlineWhite" className="border-white text-white">
              Calculate Payments
            </Button>
          </div>
        </div>
      </section>

      {/* Mortgage Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Mortgage Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We offer a variety of mortgage options to fit your unique needs and financial situation.
            </p>
          </div>

          <Tabs defaultValue="purchase" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="purchase">Home Purchase</TabsTrigger>
              <TabsTrigger value="refinance">Refinance</TabsTrigger>
              <TabsTrigger value="equity">Home Equity</TabsTrigger>
            </TabsList>
            <TabsContent value="purchase" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Home className="h-6 w-6 text-emerald-700" />
                    </div>
                    <CardTitle>Fixed-Rate Mortgage</CardTitle>
                    <CardDescription>Stability and predictability for the life of your loan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">4.25%</span>
                      <span className="text-gray-500"> APR*</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        15, 20, and 30-year terms available
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Consistent monthly payments
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        No surprises with rate changes
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Ideal for long-term homeownership
                      </li>
                    </ul>
                    <Link href="/">
                      <Button className="w-full bg-emerald-700 text-white">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Home className="h-6 w-6 text-emerald-700" />
                    </div>
                    <CardTitle>Adjustable-Rate Mortgage</CardTitle>
                    <CardDescription>Lower initial rates with potential for adjustment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">3.75%</span>
                      <span className="text-gray-500"> APR*</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Lower initial interest rate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        5/1, 7/1, and 10/1 ARM options
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Rate caps protect from dramatic increases
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Ideal for shorter-term homeownership
                      </li>
                    </ul>
                    <Link href="/">
                      <Button className="w-full bg-emerald-700 text-white">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="refinance" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Calculator className="h-6 w-6 text-emerald-700" />
                    </div>
                    <CardTitle>Rate & Term Refinance</CardTitle>
                    <CardDescription>Lower your rate or change your loan term</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Potentially lower your interest rate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Change from adjustable to fixed rate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Shorten or extend your loan term
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Potentially lower monthly payments
                      </li>
                    </ul>
                    <Link href="/">
                      <Button className="w-full bg-emerald-700 text-white">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Calculator className="h-6 w-6 text-emerald-700" />
                    </div>
                    <CardTitle>Cash-Out Refinance</CardTitle>
                    <CardDescription>Access your home's equity for major expenses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Access cash from your home's equity
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Use funds for home improvements, education, etc.
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Potentially consolidate high-interest debt
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Fixed and adjustable rate options available
                      </li>
                    </ul>
                    <Link href="/">
                      <Button className="w-full bg-emerald-700 text-white">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="equity" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Home className="h-6 w-6 text-emerald-700" />
                    </div>
                    <CardTitle>Home Equity Loan</CardTitle>
                    <CardDescription>Fixed-rate loan using your home's equity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">5.25%</span>
                      <span className="text-gray-500"> APR*</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Borrow a lump sum against your equity
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Fixed interest rate and monthly payments
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Terms from 5 to 20 years
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Potential tax benefits (consult your tax advisor)
                      </li>
                    </ul>
                    <Link href="/">
                      <Button className="w-full bg-emerald-700 text-white">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <Home className="h-6 w-6 text-emerald-700" />
                    </div>
                    <CardTitle>Home Equity Line of Credit</CardTitle>
                    <CardDescription>Flexible access to your home's equity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">Prime + 0.50%</span>
                      <span className="text-gray-500"> APR*</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Access funds as needed during draw period
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Pay interest only on what you use
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Variable interest rate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Flexible for ongoing projects or expenses
                      </li>
                    </ul>
                    <Link href="/">
                      <Button className="w-full bg-emerald-700 text-white">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <p className="mt-6 text-center text-sm text-gray-500">
            *APR = Annual Percentage Rate. Rates subject to change based on creditworthiness, loan terms, and market
            conditions.
          </p>
        </div>
      </section>

      {/* Mortgage Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">The Mortgage Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We make getting a mortgage simple and straightforward. Here's what to expect:
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Application</h3>
                  <p className="text-gray-600">
                    Complete our simple online application or meet with a mortgage specialist in person. We'll collect
                    your financial information and discuss your goals.
                  </p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Pre-Approval</h3>
                  <p className="text-gray-600">
                    We'll review your application and provide a pre-approval letter, giving you a clear understanding of
                    your budget for home shopping.
                  </p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Home Selection</h3>
                  <p className="text-gray-600">
                    Find your dream home and make an offer. Once accepted, we'll finalize your mortgage application with
                    the property details.
                  </p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-lg font-bold">4</span>
                </div>
                <div className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Processing & Underwriting</h3>
                  <p className="text-gray-600">
                    We'll verify your information, order an appraisal, and review all documentation to prepare for final
                    approval.
                  </p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-lg font-bold">5</span>
                </div>
                <div className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Closing</h3>
                  <p className="text-gray-600">
                    Review and sign your final loan documents. We'll explain everything clearly so you understand your
                    mortgage terms.
                  </p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-lg font-bold">6</span>
                </div>
                <div className="h-full rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our relationship continues after closing. We're here to answer questions and help with any future
                    mortgage needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/">
                <Button className="bg-emerald-700 text-white">Learn More About Our Process</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Mortgage Calculator</h2>
              <p className="mb-6 text-lg text-gray-600">
                Use our mortgage calculator to estimate your monthly payments and see how different loan terms, interest
                rates, and down payments affect your mortgage.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Calculator className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Estimate Monthly Payments</h3>
                    <p className="text-gray-600">
                      Calculate principal, interest, taxes, and insurance for different loan scenarios.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Compare Loan Terms</h3>
                    <p className="text-gray-600">
                      See how different loan terms affect your total interest paid and monthly payments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Amortization Schedule</h3>
                    <p className="text-gray-600">View a detailed breakdown of payments over the life of your loan.</p>
                  </div>
                </li>
              </ul>
              <Link href="/">
                <Button className="bg-emerald-700 text-white">Try Our Calculator</Button>
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop"
                alt="Person using calculator and reviewing mortgage documents"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Homebuyer */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1896&auto=format&fit=crop"
                alt="First-time homebuyers receiving keys to new home"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">First-Time Homebuyer</Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Special Programs for First-Time Buyers
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                We offer special programs and resources designed specifically for first-time homebuyers to help make
                your dream of homeownership a reality.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Low Down Payment Options</h3>
                    <p className="text-gray-600">Programs with as little as 3% down payment for qualified buyers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Homebuyer Education</h3>
                    <p className="text-gray-600">
                      Free workshops and resources to help you navigate the homebuying process.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Down Payment Assistance</h3>
                    <p className="text-gray-600">
                      Information on state and local programs that can help with your down payment and closing costs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Dedicated Mortgage Specialists</h3>
                    <p className="text-gray-600">
                      Work with experts who specialize in helping first-time homebuyers navigate the process.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/">
                <Button className="bg-emerald-700 text-white">Explore First-Time Buyer Programs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Hear from homeowners who found their perfect mortgage solution with Nexivelo.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">
                  "The mortgage team at Nexivelo made the process of buying our first home so much easier than we
                  expected. They explained everything clearly and found us a great rate. We couldn't be happier with our
                  experience."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                      alt="Emily and David Rodriguez"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Emily & David Rodriguez</h3>
                    <p className="text-sm text-gray-600">First-Time Homebuyers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">
                  "I refinanced my mortgage with Nexivelo and saved over $300 per month. The process was smooth and
                  efficient, and my loan officer was incredibly knowledgeable and responsive. I highly recommend their
                  services."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                      alt="Michael Thompson"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael Thompson</h3>
                    <p className="text-sm text-gray-600">Refinance Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">
                  "We used a HELOC from Nexivelo to fund our home renovation project. The flexibility of being able to
                  draw funds as needed was perfect for our project timeline, and the interest rate was very
                  competitive."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop"
                      alt="Jennifer and Robert Wilson"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Jennifer & Robert Wilson</h3>
                    <p className="text-sm text-gray-600">Home Equity Customers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Whether you're buying your first home, refinancing, or tapping into your home's equity, our mortgage
            specialists are ready to help you find the right solution.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-emerald-800">
              Apply for a Mortgage
            </Button>
            <Button size="lg" variant="outlineWhite" className="border-white text-white">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

