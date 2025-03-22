"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, topic: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[300px] items-center justify-center overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Contact us background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            We're here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Call Us</h3>
                <p className="mb-2 text-gray-600">Customer Service</p>
                <p className="text-lg font-medium text-emerald-700">1-800-555-0123</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Mail className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Email Us</h3>
                <p className="mb-2 text-gray-600">Customer Support</p>
                <p className="text-lg font-medium text-emerald-700">support@nexivelo.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <MapPin className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Visit Us</h3>
                <p className="mb-2 text-gray-600">Main Headquarters</p>
                <p className="text-center text-lg font-medium text-emerald-700">
                  123 Banking Street
                  <br />
                  Financial District, NY 10001
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Branch Locator */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contact" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contact">Contact Form</TabsTrigger>
              <TabsTrigger value="branches">Branch Locator</TabsTrigger>
            </TabsList>
            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="topic">Topic</Label>
                        <Select value={formData.topic} onValueChange={handleSelectChange}>
                          <SelectTrigger id="topic">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="accounts">Accounts</SelectItem>
                            <SelectItem value="loans">Loans & Mortgages</SelectItem>
                            <SelectItem value="cards">Credit Cards</SelectItem>
                            <SelectItem value="digital">Digital Banking</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="branches" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6 space-y-2">
                    <Label htmlFor="location">Find a Branch Near You</Label>
                    <div className="flex gap-2">
                      <Input id="location" placeholder="Enter ZIP code or city" className="flex-1" />
                      <Button className="bg-emerald-700 text-white">Search</Button>
                    </div>
                  </div>
                  <div className="relative h-[400px] w-full overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=800&width=1200"
                      alt="Branch map"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-center text-white">
                      <p className="text-lg font-medium">Interactive Map Would Display Here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="bg-emerald-700 text-white">View All FAQs</Button>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "What are your customer service hours?",
    answer:
      "Our customer service team is available Monday through Friday from 8:00 AM to 8:00 PM, and Saturday from 9:00 AM to 5:00 PM. We are closed on Sundays and major holidays.",
  },
  {
    question: "How do I report a lost or stolen card?",
    answer:
      "If your card is lost or stolen, please call our 24/7 emergency hotline at 1-800-555-9876 immediately to report it and request a replacement.",
  },
  {
    question: "How can I change my online banking password?",
    answer:
      "You can change your password by logging into online banking, navigating to 'Settings', and selecting 'Security'. From there, you can update your password and other security settings.",
  },
  {
    question: "What information do I need to open a new account?",
    answer:
      "To open a new account, you'll need a valid government-issued ID, your Social Security number, proof of address, and an initial deposit (amount varies by account type).",
  },
]

