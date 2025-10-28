import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, MapPin, Phone, Mail, Facebook, CheckCircle, Calendar, Target, Eye } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About — Smile 'n Win",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">About Our Mission</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Story of Hope and Transformation</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              For over 15 years, we've been a beacon of hope for children with special needs in Makola, providing
              comprehensive care, education, and therapy services that transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide comprehensive care, specialized education, and therapeutic services for children with
                  intellectual and developmental disabilities, empowering them to reach their full potential and
                  integrate meaningfully into society.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  A world where every child with special needs is valued, supported, and given the opportunity to live
                  with dignity, independence, and joy. We envision a society that celebrates diversity and inclusion.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Compassion & Love
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Dignity & Respect
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Excellence in Care
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Transparency
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Community Integration
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">How we started and where we're going</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/group-outdoor-activity.jpeg"
                  alt="Our founding story"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2009 – The Beginning</h3>
                    <p className="text-gray-700">
                      Founded by a group of passionate educators and therapists who saw the urgent need for specialized
                      care for children with developmental disabilities in the Makola area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2019 – Official Registration</h3>
                    <p className="text-gray-700">
                      Became officially registered as an NGO and certified training institute, allowing us to expand our
                      services and reach more children in need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Events held at Sports Ministry</h3>
                    <p className="text-gray-700">
                      Received recognition from local authorities and expanded our residential facilities to provide
                      24/7 care for children who needed it most.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2024 – Continuing Impact</h3>
                    <p className="text-gray-700">
                      Today, we serve 45+ children daily and have helped over 150 children develop essential life skills
                      and achieve greater independence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Dedicated Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals committed to making a difference</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/images/management/Maleesha Ishani.png"
                    alt="Maleesha Ishani"
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maleesha Ishani</h3>
                <p className="text-orange-600 font-medium mb-2">CEO</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader with extensive experience in special needs care and organizational management
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/images/management/Kusuma Weerapperuma.png"
                    alt="Kusuma Weerapperuma"
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kusuma Weerapperuma</h3>
                <p className="text-orange-600 font-medium mb-2">Head of Therapy Services</p>
                <p className="text-gray-600 text-sm">
                  Licensed Occupational Therapist, specialized in pediatric developmental therapy
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/images/management/Jayantha Peruma.png"
                    alt="Jayantha Peruma"
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jayantha Peruma</h3>
                <p className="text-orange-600 font-medium mb-2">Education Coordinator</p>
                <p className="text-gray-600 text-sm">
                  Masters in Special Education, expert in individualized learning programs
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kasun Kumara</h3>
                <p className="text-orange-600 font-medium mb-2">CFO</p>
                <p className="text-gray-600 text-sm">
                  Financial management expert ensuring transparent and efficient use of resources
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600">Purpose-built spaces designed for learning and growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <Image
                src="/images/learning-activity.jpeg"
                alt="Classrooms"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Specialized Classrooms</h3>
                <p className="text-gray-600 text-sm">
                  Adaptive learning environments with specialized equipment and sensory-friendly design
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/images/education-therapy-session.jpeg"
                alt="Therapy Rooms"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Therapy Centers</h3>
                <p className="text-gray-600 text-sm">
                  Fully equipped spaces for speech, occupational, and physical therapy sessions
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/images/beach-outing.jpeg"
                alt="Residential Areas"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Residential Quarters</h3>
                <p className="text-gray-600 text-sm">Safe, comfortable living spaces with 24/7 supervision and care</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Certifications & Registration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Official Registration & Recognition</h2>
            <p className="text-lg text-gray-600">Certified and recognized by Sri Lankan authorities</p>
          </div>
          
          {/* Registration Certificate */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-600">Official Registration Certificate</CardTitle>
                <p className="text-gray-600">Registered as NGO under Act No. 31 of 1980 • Registration No: L-176911</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <Image
                    src="/images/registration-certificate.jpeg"
                    alt="Official Registration Certificate of Smile and Win as NGO under Sri Lankan law"
                    width={600}
                    height={800}
                    className="rounded-lg shadow-lg border"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500">
                    Certificate of Registration issued by the National Secretariat for Non-Governmental Organizations, 
                    Foreign Ministry, Sri Lanka on 31st March 2022
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">NGO Registration</h3>
              <p className="text-sm text-gray-600">Officially registered with Sri Lankan authorities</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Training Institute</h3>
              <p className="text-sm text-gray-600">Certified by National Vocational Qualifications</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Health Ministry</h3>
              <p className="text-sm text-gray-600">Recognized by Ministry of Health</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Community Award</h3>
              <p className="text-sm text-gray-600">Local community service recognition</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Help us continue transforming lives and creating brighter futures for children with special needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/donate">Support Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/get-involved">Get Involved</Link>
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
