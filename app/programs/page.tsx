import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Phone, Mail, Facebook, BookOpen, Stethoscope, Home, Target, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Programs — Smile 'n Win",
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="programs" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Core Programs</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Care & Development Programs
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              විශේෂ අවශ්‍යතා සහිත දරුවන් සඳහා සම්පූර්ණ සේවා • Complete Services for Special Needs Children
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our evidence-based programs are designed to help each child reach their maximum potential through
              specialized education, therapy, and life skills training.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Core Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">45+</div>
              <div className="text-gray-600">Children Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Qualified Staff</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Four Core Programs</h2>
            <p className="text-lg text-gray-600">Integrated services for holistic development</p>
          </div>

          <div className="space-y-12">
            {/* Special Education Program */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/education-therapy-session.jpeg"
                    alt="Special Education Program"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-800">Core Program</Badge>
                      <h3 className="text-2xl font-bold text-gray-900">Special Education</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Individualized education programs (IEPs) tailored to each child's unique learning needs and
                    abilities. Our certified special education teachers use adaptive teaching methods and assistive
                    technologies.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Individualized Education Plans (IEPs)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Adaptive learning technologies</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Multi-sensory teaching approaches</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Progress tracking and assessment</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Ages Served:</strong> 5-18 years
                    </div>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/donate#bank-transfer">Support Education</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Therapy Services Program */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <CardContent className="p-8 order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Stethoscope className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-green-100 text-green-800">Core Program</Badge>
                      <h3 className="text-2xl font-bold text-gray-900">Therapy Services</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Comprehensive therapeutic interventions including speech therapy, occupational therapy, and physical
                    therapy. Our licensed therapists work closely with families to ensure continuity of care.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Speech and Language Therapy</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Occupational Therapy</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Physical Therapy</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Behavioral Therapy</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Sessions:</strong> 3-5 per week per child
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/donate#bank-transfer">Support Therapy</Link>
                    </Button>
                  </div>
                </CardContent>
                <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                  <Image
                    src="/images/learning-activity.jpeg"
                    alt="Therapy Services Program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Life Skills Training Program */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/children-performance.jpeg"
                    alt="Life Skills Training Program"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-purple-100 text-purple-800">Core Program</Badge>
                      <h3 className="text-2xl font-bold text-gray-900">Life Skills Training</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Practical skills training to promote independence and community integration. From basic self-care to
                    vocational skills, we prepare our children for meaningful participation in society.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Daily living skills (hygiene, dressing, eating)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Social and communication skills</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Basic vocational training</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Community integration activities</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Focus:</strong> Independence & Integration
                    </div>
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link href="/donate#bank-transfer">Support Life Skills</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Residential Care Program */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <CardContent className="p-8 order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <Home className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-orange-100 text-orange-800">Core Program</Badge>
                      <h3 className="text-2xl font-bold text-gray-900">Residential Care</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Safe, nurturing home environment with 24/7 professional care for children who need residential
                    support. Our residential program provides stability, security, and family-like care.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>24/7 professional supervision</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Nutritious meals and healthcare</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Safe, comfortable living spaces</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Family-style environment</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <strong>Capacity:</strong> 25 residential children
                    </div>
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link href="/donate#bank-transfer">Support Residential</Link>
                    </Button>
                  </div>
                </CardContent>
                <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                  <Image src="/images/beach-outing.jpeg" alt="Residential Care Program" fill className="object-cover" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Outcomes & Success Metrics</h2>
            <p className="text-lg text-gray-600">Measurable impact across all our programs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600 mb-4">Educational Progress</div>
                <Progress value={85} className="w-full" />
                <p className="text-xs text-gray-500 mt-2">Children meeting IEP goals</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
                <div className="text-gray-600 mb-4">Therapy Improvement</div>
                <Progress value={92} className="w-full" />
                <p className="text-xs text-gray-500 mt-2">Functional skill gains</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
                <div className="text-gray-600 mb-4">Independence Level</div>
                <Progress value={78} className="w-full" />
                <p className="text-xs text-gray-500 mt-2">Daily living skills mastery</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">96%</div>
                <div className="text-gray-600 mb-4">Family Satisfaction</div>
                <Progress value={96} className="w-full" />
                <p className="text-xs text-gray-500 mt-2">Parent/guardian approval</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Program Support CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Programs</h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose a specific program to support or contribute to our general fund for maximum flexibility
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/donate#bank-transfer">Support Education</Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/donate#bank-transfer">Support Therapy</Link>
              </Button>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/donate#bank-transfer">Support Life Skills</Link>
              </Button>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/donate#bank-transfer">Support Residential</Link>
              </Button>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" size="lg">
                <Link href="/donate">General Fund Donation</Link>
              </Button>
            </div>
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
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
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
