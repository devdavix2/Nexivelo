import Image from "next/image"
import Link from "next/link"
import { BarChart2, CreditCard, Shield, Users, Briefcase, Globe, LineChart, HomeIcon, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
            alt="Modern banking building with glass facade"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">Trusted by over 2 million customers</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Banking That Works <span className="text-emerald-300">For You</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Experience personalized financial solutions designed to help you achieve your goals with security,
            convenience, and expert guidance every step of the way.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button size="lg" className="bg-white text-emerald-800">
                Open an Account
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outlineWhite" className="border-white text-white">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="core-services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Core Banking Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover our comprehensive range of financial solutions designed to meet your personal and business needs.
            </p>
          </div>

          {/* Personal Banking */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop"
                alt="Person using banking services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <CreditCard className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Personal Banking</h3>
              <p className="mb-4 text-gray-600">
                Our personal banking services are designed to help you manage your finances with ease and confidence. We
                offer a range of accounts and tools to support your financial journey.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Checking Accounts:</strong> Fee-free options with mobile deposits, bill pay, and unlimited
                    transactions
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Savings Accounts:</strong> Competitive interest rates with automatic savings options
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Credit Cards:</strong> Rewards programs with cash back, travel points, and low interest
                    options
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Personal Loans:</strong> Flexible financing for major purchases, debt consolidation, and
                    more
                  </span>
                </li>
              </ul>
              <Link href="/">
                <Button className="bg-white text-emerald-700 border border-emerald-700">
                  Learn More About Personal Banking
                </Button>
              </Link>
            </div>
          </div>

          {/* Business Banking */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="order-1 md:order-2 relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                alt="Business professionals in meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="order-2 md:order-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Briefcase className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Business Banking</h3>
              <p className="mb-4 text-gray-600">
                Our business banking solutions are tailored to support businesses of all sizes, from startups to
                established enterprises, with the financial tools needed to grow and succeed.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Business Checking:</strong> Accounts designed for different business sizes with cash
                    management features
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Business Lending:</strong> Lines of credit, term loans, and SBA loans to fuel growth
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Merchant Services:</strong> Payment processing solutions with competitive rates
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Treasury Management:</strong> Tools to optimize cash flow and streamline operations
                  </span>
                </li>
              </ul>
              <Link href="/">
                <Button className="bg-white text-emerald-700 border border-emerald-700">
                  Learn More About Business Banking
                </Button>
              </Link>
            </div>
          </div>

          {/* Wealth Management */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1551260627-fd1b6daa6224?q=80&w=2070&auto=format&fit=crop"
                alt="Financial advisor meeting with client"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <LineChart className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Wealth Management</h3>
              <p className="mb-4 text-gray-600">
                Our wealth management services provide personalized strategies to help you build, manage, and preserve
                your wealth for the future and across generations.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Investment Management:</strong> Customized portfolios aligned with your goals and risk
                    tolerance
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Retirement Planning:</strong> Strategies to help you prepare for and enjoy retirement
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Estate Planning:</strong> Solutions to protect and transfer your wealth according to your
                    wishes
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Trust Services:</strong> Professional management of assets for your beneficiaries
                  </span>
                </li>
              </ul>
              <Link href="/">
                <Button className="bg-white text-emerald-700 border border-emerald-700">
                  Learn More About Wealth Management
                </Button>
              </Link>
            </div>
          </div>

          {/* Mortgage Services */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="order-1 md:order-2 relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                alt="Modern home exterior"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <HomeIcon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Mortgage Services</h3>
              <p className="mb-4 text-gray-600">
                Our mortgage services offer competitive rates and personalized guidance to help you find the right home
                financing solution for your needs.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Home Purchase Loans:</strong> Fixed and adjustable-rate mortgages with flexible terms
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Refinancing Options:</strong> Lower your rate or change your loan term
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Home Equity Solutions:</strong> Access your home's equity for major expenses
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>First-Time Homebuyer Programs:</strong> Special options with lower down payments
                  </span>
                </li>
              </ul>
              <Link href="/">
                <Button className="bg-white text-emerald-700">Learn More About Mortgage Services</Button>
              </Link>
            </div>
          </div>

          {/* Digital Banking */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
                alt="Person using mobile banking app on smartphone"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Smartphone className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Digital Banking</h3>
              <p className="mb-4 text-gray-600">
                Our digital banking platform provides secure, convenient access to your accounts anytime, anywhere, with
                powerful tools to manage your finances.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Mobile Banking App:</strong> Manage accounts, deposit checks, and pay bills from your device
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Online Banking:</strong> Comprehensive account management from any computer
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Digital Wallet:</strong> Contactless payments with Apple Pay, Google Pay, and Samsung Pay
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 mt-0.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Financial Tools:</strong> Budgeting, goal tracking, and spending insights
                  </span>
                </li>
              </ul>
              <Link href="/">
                <Button className="bg-white text-emerald-700">Learn More About Digital Banking</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Banking You Can Trust
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Shield className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your data and money are protected by industry-leading security protocols, encryption, and continuous
                monitoring to prevent fraud.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Users className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community Focused</h3>
              <p className="text-gray-600">
                We're committed to the communities we serve through sustainable initiatives, local support, and
                financial education programs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CreditCard className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">FDIC Insured</h3>
              <p className="text-gray-600">
                Your deposits are insured up to $250,000 per depositor, per bank, for each account ownership category,
                providing peace of mind.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <BarChart2 className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Financial Expertise</h3>
              <p className="text-gray-600">
                Our team of financial experts provides personalized guidance to help you make informed decisions about
                your money and future.
              </p>
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
              Hear from our satisfied customers about their experience with Nexivelo.
            </p>
          </div>
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="h-full rounded-lg bg-white p-8 shadow-md">
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        {testimonial.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-gray-700">{testimonial.quote}</p>
                    <p className="mt-4 text-sm text-emerald-700">Customer since {testimonial.customerSince}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 pt-4">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Open an account today and experience banking designed for your needs. Our team is ready to help you achieve
            your financial goals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button size="lg" className="bg-white text-emerald-800">
                Open an Account Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outlineWhite" className="border-white text-white">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    quote:
      "The business banking services at Nexivelo have transformed how I manage my company's finances. The mobile app is intuitive and their customer service team is always ready to help with any questions I have.",
    icon: <Briefcase className="h-6 w-6" />,
    rating: 5,
    customerSince: "2018",
  },
  {
    name: "Michael Chen",
    title: "Personal Banking Customer",
    quote:
      "I've been with Nexivelo for over 10 years and they've consistently provided excellent service. Their digital banking platform makes managing my money effortless and secure.",
    icon: <CreditCard className="h-6 w-6" />,
    rating: 5,
    customerSince: "2012",
  },
  {
    name: "Emily Rodriguez",
    title: "Mortgage Customer",
    quote:
      "Getting a mortgage through Nexivelo was surprisingly smooth. Their team guided me through every step and found me the best rate possible. I couldn't be happier with my experience.",
    icon: <HomeIcon className="h-6 w-6" />,
    rating: 5,
    customerSince: "2020",
  },
  {
    name: "David Wilson",
    title: "Investment Client",
    quote:
      "The wealth management team at Nexivelo has helped me develop a comprehensive retirement strategy. Their expertise and personalized approach have given me confidence in my financial future.",
    icon: <LineChart className="h-6 w-6" />,
    rating: 4,
    customerSince: "2016",
  },
  {
    name: "Lisa Thompson",
    title: "International Business Owner",
    quote:
      "Nexivelo's digital banking services have made managing my business globally much easier. Their competitive rates and efficient transfers save me time and money.",
    icon: <Globe className="h-6 w-6" />,
    rating: 5,
    customerSince: "2019",
  },
]

