import Link from "next/link"
import { User, Mail, Phone, CreditCard, Briefcase, Home, LineChart, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function OpenAccountPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8 flex flex-col items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
              <Building2 className="h-7 w-7" />
            </div>
            <span className="text-2xl font-bold text-emerald-800">Nexivelo</span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Open a New Account</h2>
          <p className="mt-2 text-center text-gray-600">
            Start your journey with Nexivelo and discover banking that works for you
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select Account Type</CardTitle>
            <CardDescription>Choose the type of account you'd like to open</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              <RadioGroup defaultValue="personal" className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <RadioGroupItem value="personal" id="personal" className="peer sr-only" />
                  <Label
                    htmlFor="personal"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                  >
                    <CreditCard className="mb-3 h-6 w-6 text-emerald-700" />
                    <span className="text-lg font-medium">Personal Banking</span>
                    <span className="text-sm text-gray-500">Checking, savings, and credit cards</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="business" id="business" className="peer sr-only" />
                  <Label
                    htmlFor="business"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                  >
                    <Briefcase className="mb-3 h-6 w-6 text-emerald-700" />
                    <span className="text-lg font-medium">Business Banking</span>
                    <span className="text-sm text-gray-500">Business accounts and services</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="wealth" id="wealth" className="peer sr-only" />
                  <Label
                    htmlFor="wealth"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                  >
                    <LineChart className="mb-3 h-6 w-6 text-emerald-700" />
                    <span className="text-lg font-medium">Wealth Management</span>
                    <span className="text-sm text-gray-500">Investment and retirement accounts</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="mortgage" id="mortgage" className="peer sr-only" />
                  <Label
                    htmlFor="mortgage"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                  >
                    <Home className="mb-3 h-6 w-6 text-emerald-700" />
                    <span className="text-lg font-medium">Mortgage Services</span>
                    <span className="text-sm text-gray-500">Home loans and refinancing</span>
                  </Label>
                </div>
              </RadioGroup>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Your Information</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input id="first-name" name="first-name" required className="pl-10" placeholder="First name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input id="last-name" name="last-name" required className="pl-10" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="pl-10"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input id="phone" name="phone" type="tel" required className="pl-10" placeholder="Phone number" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/" className="text-emerald-700 hover:text-emerald-600">
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/" className="text-emerald-700 hover:text-emerald-600">
                      privacy policy
                    </Link>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing" className="text-sm text-gray-600">
                    I would like to receive marketing communications from Nexivelo
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-white text-emerald-700 border border-emerald-700">
                Continue Application
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/" className="font-medium text-emerald-700 hover:text-emerald-600">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

