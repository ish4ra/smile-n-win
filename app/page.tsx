import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, MapPin, Phone, Mail, Facebook, ArrowRight, Star, Shield, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { submitNewsletterSignup } from './subscribe/actions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home — Smile 'n Win",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
                Registered NGO • Est. 2009
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Children with Special Needs to
                <span className="text-orange-600"> Smile & Win</span>
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">සෑම දරුවෙකුටම සිහින සැබෑ කිරීමේ අවස්ථාවක් ලැබිය යුතුයි</p>
              <p className="text-lg text-gray-600 mb-8">
                Every child deserves the chance to reach their full potential. Help us provide specialized care,
                education, and therapy for children with intellectual and developmental disabilities in Makola, Sri
                Lanka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/donate#bank-transfer">
                    Donate via Bank Transfer <Heart className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">
                    Learn Our Story <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/large-group-photo.jpeg"
                alt="Children at Smile 'n Win Special-Needs Children's Home"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Currently caring for 45+ children</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
              <div className="text-gray-600">Children Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Improvement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Care & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories That Inspire</h2>
              <p className="text-lg text-gray-600">Real transformations happening every day</p>
            </div>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/umesh-01.jpg"
                    alt="Success story of Umesh"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-600">Success Story</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🎶 Meet Umesh</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "This is Umesh, a kind and cheerful boy from Battaramulla. He is 29 years old, but he has a young heart that shines with happiness every day. Umesh loves to sing songs, and his sweet voice always makes the home a brighter place. Because of his happy nature, many visitors look for Umesh first when they come to Smile n' Win."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Known for:</strong> His joyful spirit and gratitude
                    </div>
                    <Button asChild variant="outline">
                      <Link href="/stories">Read More Stories</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services designed to help each child reach their unique potential
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Special Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Individualized learning programs adapted to each child's abilities and needs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Therapy Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Speech, occupational, and physical therapy to improve daily living skills.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Life Skills Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Practical skills for independence and integration into the community.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Residential Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Safe, nurturing home environment with 24/7 professional care and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference Today</h2>
            <p className="text-lg text-gray-600">Choose how you'd like to support our children</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">One-Time Gift</CardTitle>
                <CardDescription>Make an immediate impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">LKR 5,000 = 1 month of therapy</div>
                  <div className="text-sm text-gray-600">LKR 15,000 = Educational materials</div>
                  <div className="text-sm text-gray-600">LKR 25,000 = Medical care for 1 child</div>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/donate#bank-transfer">Donate Once</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-orange-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Monthly Giving</CardTitle>
                <CardDescription>Provide ongoing support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">LKR 2,500/month = Daily meals</div>
                  <div className="text-sm text-gray-600">LKR 5,000/month = Therapy sessions</div>
                  <div className="text-sm text-gray-600">LKR 10,000/month = Full care support</div>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/donate#bank-transfer">Give Monthly</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Sponsor a Child</CardTitle>
                <CardDescription>Transform a life directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">LKR 15,000/month = Full sponsorship</div>
                  <div className="text-sm text-gray-600">Receive updates & photos</div>
                  <div className="text-sm text-gray-600">Direct impact on one child</div>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/donate#bank-transfer">Sponsor Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Donors Trust Us</h2>
            <p className="text-lg text-gray-600">Transparency and accountability in everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Registered NGO</h3>
              <p className="text-gray-600">
                Officially registered with Sri Lankan authorities and certified training institute
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Transparency</h3>
              <p className="text-gray-600">Annual reports and detailed breakdown of how every rupee is used</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Impact</h3>
              <p className="text-gray-600">15 years of documented success stories and measurable outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get monthly updates on our children's progress and upcoming events
            </p>
            <form action={async (formData) => { 'use server'; await submitNewsletterSignup(formData) }} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input name="email" type="email" placeholder="Enter your email address" className="flex-1" required />
              <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
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
