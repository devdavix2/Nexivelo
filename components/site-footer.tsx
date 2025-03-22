import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white">Nexivelo</span>
            </div>
            <p className="my-4">
              Your trusted financial partner for personal and business banking solutions since 1985.
            </p>
            <div className="flex items-center space-x-2">
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-700"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-700"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-700"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-700"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Banking Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/personal" className="hover:text-emerald-400">
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link href="/services/business" className="hover:text-emerald-400">
                  Business Banking
                </Link>
              </li>
              <li>
                <Link href="/services/wealth" className="hover:text-emerald-400">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/services/digital" className="hover:text-emerald-400">
                  Digital Banking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-emerald-400">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-emerald-400" />
                <span>
                  123 Banking Street
                  <br />
                  Financial District, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-emerald-400" />
                <span>1-800-555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-emerald-400" />
                <span>contact@nexivelo.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-2 font-medium text-white">Subscribe to our newsletter</h4>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400"
                  aria-label="Email for newsletter"
                />
                <Button className="bg-white text-emerald-700 border border-emerald-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="text-sm hover:text-emerald-400">
              Privacy Policy
            </Link>
            <Link href="/" className="text-sm hover:text-emerald-400">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-sm hover:text-emerald-400">
              Security
            </Link>
            <Link href="/" className="text-sm hover:text-emerald-400">
              Accessibility
            </Link>
            <Link href="/" className="text-sm hover:text-emerald-400">
              Cookie Policy
            </Link>
          </div>
          <div className="text-right text-sm md:text-right">
            <p>&copy; {new Date().getFullYear()} Nexivelo. All rights reserved.</p>
            <p className="mt-1 text-gray-500">
              Member FDIC. Equal Housing Lender <span className="ml-1">🏠</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

