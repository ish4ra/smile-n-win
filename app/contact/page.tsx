import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Phone, Mail, Facebook, Send, Clock } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { submitContactMessage } from './actions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact — Smile 'n Win",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-100">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Smile 'n Win</h1>
            <p className="text-xl text-gray-700 mb-4">අප හා සම්බන්ධ වන්න • Contact Us</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We'd love to hear from you! Whether you have questions, want to volunteer, or need more information,
              please reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm">273/2, Galhena Road, Meegahawatta, Delgoda, Sri Lanka</p>
                <Button variant="link" asChild className="mt-2">
                  <Link href="https://maps.app.goo.gl/your-location-link" target="_blank">
                    Get Directions
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">+94 011 297 8415</p>
                <p className="text-gray-600 text-sm">Available during office hours</p>
                <div className="flex items-center justify-center mt-2">
                  <Button variant="link" asChild>
                    <Link href="tel:+940112978415">Call +94 011 297 8415</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">contact@smilenwin.org</p>
                <p className="text-gray-600 text-sm">We aim to respond within 24 hours</p>
                <Button variant="link" asChild className="mt-2">
                  <Link href="mailto:contact@smilenwin.org">Send Email</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">Use the form below for general inquiries or feedback.</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form action={async (formData) => { 'use server'; await submitContactMessage(formData) }} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="e.g., Volunteer Inquiry, Donation Question" />
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea id="message" name="message" rows={6} placeholder="Type your message here..." required />
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours & Social Media */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600 text-sm">Sunday: Closed</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
                <p className="text-gray-600 text-sm mb-4">Follow us on social media for updates and stories.</p>
                <Button asChild variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="https://facebook.com/smilenwinsl" target="_blank">
                    <Facebook className="w-4 h-4 mr-2" />
                    Follow on Facebook
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Support Our Children?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your contribution helps us continue our vital work and bring more smiles.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/donate#bank-transfer">
                Donate Now <Heart className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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
