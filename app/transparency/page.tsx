import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Phone, Mail, Facebook, FileText, DollarSign, Users, BarChart, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Transparency — Smile 'n Win",
}

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="transparency" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Financial Transparency</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Accountability & Trust: Where Your Support Goes
            </h1>
            <p className="text-xl text-gray-700 mb-4">විනිවිදභාවය සහ විශ්වාසය • Transparency and Trust</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to full transparency in our operations and finances. See how your generous contributions
              are utilized to make a real difference in children's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Transparency</h2>
            <p className="text-lg text-gray-600">Building trust through open and honest practices</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Disclosure</h3>
                <p className="text-gray-600 text-sm">
                  Detailed financial reports and impact assessments available to the public.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Donor Accountability</h3>
                <p className="text-gray-600 text-sm">
                  Ensuring every rupee is used effectively and responsibly for our mission.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Measurable Impact</h3>
                <p className="text-gray-600 text-sm">
                  Tracking and reporting on the tangible outcomes of our programs and your support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Overview</h2>
            <p className="text-lg text-gray-600">How your donations are allocated</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Income Sources (2023)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Individual Donations</span>
                    <span className="font-semibold text-gray-900">65%</span>
                  </div>
                  <Progress value={65} className="w-full" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Corporate Partnerships</span>
                    <span className="font-semibold text-gray-900">20%</span>
                  </div>
                  <Progress value={20} className="w-full" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Grants & Foundations</span>
                    <span className="font-semibold text-gray-900">10%</span>
                  </div>
                  <Progress value={10} className="w-full" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Fundraising Events</span>
                    <span className="font-semibold text-gray-900">5%</span>
                  </div>
                  <Progress value={5} className="w-full" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expenditure Breakdown (2023)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Programs & Services</span>
                    <span className="font-semibold text-gray-900">75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Fundraising</span>
                    <span className="font-semibold text-gray-900">15%</span>
                  </div>
                  <Progress value={15} className="w-full" />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Administration</span>
                    <span className="font-semibold text-gray-900">10%</span>
                  </div>
                  <Progress value={10} className="w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Image
              src="/images/donation-distribution.jpeg"
              alt="Donation distribution"
              width={800}
              height={450}
              className="rounded-xl shadow-lg mx-auto object-cover"
            />
            <p className="text-sm text-gray-500 mt-4">
              Image: Direct impact of your donations on our children's daily lives.
            </p>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Reports & Financial Statements</h2>
            <p className="text-lg text-gray-600">Download our detailed reports for full transparency</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Annual Report 2023</h3>
              <p className="text-sm text-gray-600 mb-4">Comprehensive overview of our activities and finances.</p>
              <Button asChild variant="outline">
                <Link href="/reports/annual-report-2023.pdf" download>
                  Download PDF
                </Link>
              </Button>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Financial Statement 2023</h3>
              <p className="text-sm text-gray-600 mb-4">Detailed breakdown of income and expenditure.</p>
              <Button asChild variant="outline">
                <Link href="/reports/financial-statement-2023.pdf" download>
                  Download PDF
                </Link>
              </Button>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Impact Report 2023</h3>
              <p className="text-sm text-gray-600 mb-4">Stories and data on the lives transformed.</p>
              <Button asChild variant="outline">
                <Link href="/reports/impact-report-2023.pdf" download>
                  Download PDF
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Certifications & Audits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Independent Audits</h2>
            <p className="text-lg text-gray-600">Ensuring integrity and compliance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Registered NGO</h3>
              <p className="text-sm text-gray-600">
                Officially registered with the Department of Social Services, Sri Lanka.
              </p>
            </Card>
            <Card className="text-center p-6">
              <FileText className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Independent Audits</h3>
              <p className="text-sm text-gray-600">
                Our financial statements are audited annually by independent certified auditors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions About Our Transparency?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We welcome your inquiries and are happy to provide any further information you may need.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <div className="mt-4">
              <Button asChild variant="outline">
                <Link href="/donate#bank-transfer">
                  Donate via Bank Transfer
                </Link>
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
