import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Facebook } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service — Smile 'n Win",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="terms" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Legal Information</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-700 mb-4">සේවා කොන්දේසි • Terms of Service</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Please read these terms carefully before using our website. By accessing or using our services, you agree
              to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Smile 'n Win website (the "Site"), you agree to be bound by these Terms of
              Service ("Terms"), all applicable laws and regulations, and agree that you are responsible for compliance
              with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using
              or accessing this site.
            </p>

            <h2>2. Use License</h2>
            <ul>
              <li>
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Smile 'n Win's website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
                <ul>
                  <li>modify or copy the materials;</li>
                  <li>
                    use the materials for any commercial purpose, or for any public display (commercial or
                    non-commercial);
                  </li>
                  <li>attempt to decompile or reverse engineer any software contained on Smile 'n Win's website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </li>
              <li>
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by Smile 'n Win at any time. Upon terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded materials in your possession whether in
                electronic or printed format.
              </li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Smile 'n Win's website are provided on an 'as is' basis. Smile 'n Win makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, Smile 'n Win does not warrant or make any representations concerning the accuracy, likely
              results, or reliability of the use of the materials on its website or otherwise relating to such materials
              or on any sites linked to this site.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Smile 'n Win or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Smile 'n Win's website, even if Smile 'n Win or a Smile 'n Win authorized
              representative has been notified orally or in writing of the possibility of such damage. Because some
              jurisdictions do not allow limitations on implied warranties, or limitations of liability for
              consequential or incidental damages, these limitations may not apply to you.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Smile 'n Win's website could include technical, typographical, or photographic
              errors. Smile 'n Win does not warrant that any of the materials on its website are accurate, complete or
              current. Smile 'n Win may make changes to the materials contained on its website at any time without
              notice. However Smile 'n Win does not make any commitment to update the materials.
            </p>

            <h2>6. Links</h2>
            <p>
              Smile 'n Win has not reviewed all of the sites linked to its website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by Smile 'n Win of
              the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>7. Modifications to the Terms</h2>
            <p>
              Smile 'n Win may revise these Terms of Service for its website at any time without notice. By using this
              website you are agreeing to be bound by the then current version of these Terms of Service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka and you
              irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p>
              Smile 'n Win Special-Needs Children's Home
              <br />
              273/2, Galhena Road, Meegahawatta, Delgoda, Sri Lanka
              <br />
              Phone: +94 011 297 8415
              <br />
              Email: contact@smilenwin.org
            </p>
            <p className="text-sm text-gray-500 mt-8">This document was last updated on: August 1, 2024</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understand Our Commitment</h2>
            <p className="text-lg text-gray-600 mb-8">
              Learn more about our mission, values, and how we operate with integrity.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/transparency">View Transparency Report</Link>
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
