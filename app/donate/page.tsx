import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Facebook, CheckCircle, DollarSign, Calendar, Users, HandHelping } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Donate — Smile 'n Win",
}

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="donate" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">Support Our Mission</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Donation Transforms Lives</h1>
            <p className="text-xl text-gray-700 mb-4">ඔබේ පරිත්‍යාගය ජීවිත වෙනස් කරයි • Your Donation Changes Lives</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every rupee you contribute directly supports our children's education, therapy, and daily care, helping
              them build brighter futures.
            </p>
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">How to Send Your Gift</h2>
            <p className="text-lg text-gray-600">
              We currently accept donations via direct bank transfer to our Sri Lankan account. Please share the payment
              confirmation with us so we can acknowledge your generosity and issue the necessary documentation.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <Card className="border-dashed border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-orange-600">Step 1</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-gray-600">
                  Initiate a transfer from your bank using the details below.
                </CardContent>
              </Card>
              <Card className="border-dashed border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-orange-600">Step 2</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-gray-600">
                  Include your name and contact number in the transfer reference if possible.
                </CardContent>
              </Card>
              <Card className="border-dashed border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-orange-600">Step 3</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-gray-600">
                  Email the transfer slip to{" "}
                  <a href="mailto:contact@smilenwin.org" className="text-orange-600 underline">
                    contact@smilenwin.org
                  </a>
                  .
                </CardContent>
              </Card>
            </div>
            <div>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="#bank-transfer">View Bank Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Bank Transfer Details */}
      <section id="bank-transfer" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Bank Transfer Details</CardTitle>
                <CardDescription>Transfer directly to our Sri Lankan bank account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <div className="flex justify-between"><span className="font-medium">Account Name</span><span>Smile n Win</span></div>
                <div className="flex justify-between"><span className="font-medium">Bank</span><span>Seylan Bank</span></div>
                <div className="flex justify-between"><span className="font-medium">Branch</span><span>Pettah Branch</span></div>
                <div className="flex justify-between"><span className="font-medium">Account Number</span><span>0640 131 9928801</span></div>
                <div className="flex justify-between"><span className="font-medium">SWIFT/BIC</span><span>SEYBLKLX</span></div>
                <p className="text-sm text-gray-500 mt-4">For international transfers, please include the SWIFT/BIC code.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form (hidden temporarily to preserve layout for future IPG integration) */}
      <section className="py-16 bg-white hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Make a Donation</CardTitle>
                <CardDescription>Choose your preferred way to support Smile 'n Win.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Donation Type */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">1. Choose Donation Type</h3>
                  <RadioGroup defaultValue="one-time" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Label
                      htmlFor="one-time"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-orange-600"
                    >
                      <RadioGroupItem id="one-time" value="one-time" className="sr-only" />
                      <DollarSign className="mb-3 h-6 w-6 text-orange-600" />
                      <span className="block text-sm font-medium">One-Time</span>
                    </Label>
                    <Label
                      htmlFor="monthly"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-orange-600"
                    >
                      <RadioGroupItem id="monthly" value="monthly" className="sr-only" />
                      <Calendar className="mb-3 h-6 w-6 text-orange-600" />
                      <span className="block text-sm font-medium">Monthly</span>
                    </Label>
                    <Label
                      htmlFor="sponsor"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-orange-600"
                    >
                      <RadioGroupItem id="sponsor" value="sponsor" className="sr-only" />
                      <Users className="mb-3 h-6 w-6 text-orange-600" />
                      <span className="block text-sm font-medium">Sponsor a Child</span>
                    </Label>
                  </RadioGroup>
                </div>

                {/* Donation Amount */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">2. Enter Amount (LKR)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-orange-300 hover:bg-orange-50 bg-transparent"
                    >
                      5,000
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-orange-300 hover:bg-orange-50 bg-transparent"
                    >
                      10,000
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-orange-300 hover:bg-orange-50 bg-transparent"
                    >
                      25,000
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-orange-300 hover:bg-orange-50 bg-transparent"
                    >
                      50,000
                    </Button>
                  </div>
                  <Label htmlFor="custom-amount" className="sr-only">
                    Custom Amount
                  </Label>
                  <Input id="custom-amount" type="number" placeholder="Or enter custom amount" className="w-full" />
                </div>

                {/* Personal Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">3. Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+94 7X XXX XXXX" />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">4. Payment Method</h3>
                  <p className="text-gray-600 mb-4">We accept major credit/debit cards and local bank transfers.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-orange-300 hover:bg-orange-50 bg-transparent"
                    >
                      Credit/Debit Card
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-orange-300 hover:bg-orange-50 bg-transparent"
                    >
                      Bank Transfer
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Your payment will be securely processed.</p>
                </div>

                <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  <HandHelping className="w-5 h-5 mr-2" />
                  Complete Donation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact of Your Donation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Your Money Goes</h2>
            <p className="text-lg text-gray-600">Every rupee makes a tangible difference</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education & Therapy</h3>
                <p className="text-gray-600 text-sm">
                  Funding specialized education, speech, occupational, and physical therapies.
                </p>
                <p className="text-orange-600 font-bold mt-2">60% of donations</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Residential Care</h3>
                <p className="text-gray-600 text-sm">
                  Providing safe housing, nutritious meals, and 24/7 care for residential children.
                </p>
                <p className="text-orange-600 font-bold mt-2">30% of donations</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Operational Costs</h3>
                <p className="text-gray-600 text-sm">Administrative, facility maintenance, and outreach programs.</p>
                <p className="text-orange-600 font-bold mt-2">10% of donations</p>
              </CardContent>
            </Card>
          </div>
          {/* <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/transparency">View Our Financial Transparency Report</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Testimonials/Stories */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear From Those You Help</h2>
            <p className="text-lg text-gray-600">Real impact, real stories</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Image
                  src="/images/success-story-boy-medal.jpeg"
                  alt="Child success story"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Rohan's Triumph</h3>
                <p className="text-gray-700 italic mb-4">
                  "Thanks to the support from donors, Rohan has made incredible progress in his life skills. He's now
                  more independent and confident than ever before!"
                </p>
                <p className="text-sm text-gray-600">— Mr. Silva, Head of Therapy</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Image
                  src="/images/success-story-girl-traditional.jpeg"
                  alt="Child success story"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Amara's Artistic Journey</h3>
                <p className="text-gray-700 italic mb-4">
                  "Amara's artistic talents have flourished with the specialized education she receives. Your donations
                  make these life-changing programs possible."
                </p>
                <p className="text-sm text-gray-600">— Ms. Perera, Education Coordinator</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/stories">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your generosity provides hope, care, and a brighter future for children with special needs.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="#bank-transfer">View Bank Details</Link>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Prefer to speak with us first? Call <a className="text-orange-600 underline" href="tel:+940112978415">+94 011 297 8415</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Smile 'n Win Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Smile 'n Win</h3>
                  <p className="text-sm text-gray-400">Special-Needs Children's Home</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering children with special needs to reach their full potential through love, care, and specialized
                support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-gray-400 hover:text-white">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-gray-400 hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/transparency" className="text-gray-400 hover:text-white">
                    Transparency
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/donate" className="text-gray-400 hover:text-white">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="text-gray-400 hover:text-white">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/fundraise" className="text-gray-400 hover:text-white">
                    Fundraise
                  </Link>
                </li>
                <li>
                  <Link href="/corporate" className="text-gray-400 hover:text-white">
                    Corporate Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>273/2, Galhena Road, Meegahawatta, Delgoda, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+94 011 297 8415</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@smilenwin.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Facebook className="w-4 h-4" />
                  <Link href="https://facebook.com/smilenwinsl" className="hover:text-white">
                    facebook.com/smilenwinsl
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Smile 'n Win Special-Needs Children's Home. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
