"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white">
            <Building2 className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold text-emerald-800">Nexivelo</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-emerald-50/50 data-[state=open]:bg-emerald-50/50">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-4">
                  <Link href="/services/personal" legacyBehavior passHref>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700">
                      <div className="text-sm font-medium leading-none">Personal Banking</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Checking, savings, credit cards, and loans
                      </p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/services/business" legacyBehavior passHref>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700">
                      <div className="text-sm font-medium leading-none">Business Banking</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Solutions for businesses of all sizes
                      </p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/services/wealth" legacyBehavior passHref>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700">
                      <div className="text-sm font-medium leading-none">Wealth Management</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Investment advisory and retirement planning
                      </p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/services/digital" legacyBehavior passHref>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700">
                      <div className="text-sm font-medium leading-none">Digital Banking</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Online and mobile banking features
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-emerald-50/50 data-[state=open]:bg-emerald-50/50">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="hidden border-emerald-700 text-emerald-700 bg-white lg:inline-flex">
              Sign In
            </Button>
          </Link>
          <Link href="/open-account">
            <Button className="hidden bg-white text-emerald-700 border border-emerald-700 lg:inline-flex">
              Open an Account
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="text-xl font-bold text-emerald-800">Nexivelo</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/about"
                    className="py-2 text-lg font-semibold text-gray-700 hover:text-emerald-700"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services">
                      <AccordionTrigger className="text-lg font-semibold">Services</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 pl-4">
                          <Link
                            href="/services/personal"
                            className="py-2 text-gray-700 hover:text-emerald-700"
                            onClick={() => setIsOpen(false)}
                          >
                            Personal Banking
                          </Link>
                          <Link
                            href="/services/business"
                            className="py-2 text-gray-700 hover:text-emerald-700"
                            onClick={() => setIsOpen(false)}
                          >
                            Business Banking
                          </Link>
                          <Link
                            href="/services/wealth"
                            className="py-2 text-gray-700 hover:text-emerald-700"
                            onClick={() => setIsOpen(false)}
                          >
                            Wealth Management
                          </Link>
                          <Link
                            href="/services/digital"
                            className="py-2 text-gray-700 hover:text-emerald-700"
                            onClick={() => setIsOpen(false)}
                          >
                            Digital Banking
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link
                    href="/contact"
                    className="py-2 text-lg font-semibold text-gray-700 hover:text-emerald-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </nav>
                <div className="flex flex-col gap-2 pt-4">
                  <Link href="/login">
                    <Button variant="outline" className="w-full border-emerald-700 text-emerald-700 bg-white">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/open-account">
                    <Button className="w-full bg-white text-emerald-700 border border-emerald-700">
                      Open an Account
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

