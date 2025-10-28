import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Facebook } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy — Smile 'n Win",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="privacy" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Legal Information</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-700 mb-4">පෞද්ගලිකත්ව ප්‍රතිපත්තිය • Privacy Policy</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h2>1. Information We Collect</h2>
            <p>We collect various types of information in connection with the services we provide, including:</p>
            <ul>
              <li>
                **Personal Identification Information:** Name, email address, phone number, postal address, and other
                similar contact data when you make a donation, sign up for our newsletter, or volunteer.
              </li>
              <li>
                **Donation Information:** Details related to your donations, including amount, date, and payment method.
                We do not store full credit card details on our servers.
              </li>
              <li>
                **Usage Data:** Information on how the website is accessed and used (e.g., IP address, browser type,
                pages visited, time spent on pages). This helps us improve our website and services.
              </li>
              <li>
                **Communication Data:** Records of your correspondence with us, including emails and messages sent
                through our contact forms.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including:</p>
            <ul>
              <li>To process your donations and send you receipts.</li>
              <li>To communicate with you about our programs, events, and impact.</li>
              <li>To send you newsletters and updates if you have subscribed.</li>
              <li>To manage your volunteer application and activities.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To comply with legal obligations and prevent fraud.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic
              aggregated demographic information not linked to any personal identification information regarding
              visitors and users with our business partners, trusted affiliates, and advertisers for the purposes
              outlined above.
            </p>
            <p>
              We may use third-party service providers to help us operate our business and the website or administer
              activities on our behalf, such as sending out newsletters or surveys. We may share your information with
              these third parties for those limited purposes provided that you have given us your permission.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect
              against unauthorized access, alteration, disclosure, or destruction of your personal information,
              username, password, transaction information, and data stored on our Site.
            </p>

            <h2>5. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>
                The right to rectification – You have the right to request that we correct any information you believe
                is inaccurate.
              </li>
              <li>
                The right to erasure – You have the right to request that we erase your personal data, under certain
                conditions.
              </li>
              <li>
                The right to restrict processing – You have the right to request that we restrict the processing of your
                personal data, under certain conditions.
              </li>
              <li>
                The right to object to processing – You have the right to object to our processing of your personal
                data, under certain conditions.
              </li>
              <li>
                The right to data portability – You have the right to request that we transfer the data that we have
                collected to another organization, or directly to you, under certain conditions.
              </li>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              Smile 'n Win has the discretion to update this privacy policy at any time. When we do, we will revise the
              updated date at the bottom of this page. We encourage Users to frequently check this page for any changes
              to stay informed about how we are helping to protect the personal information we collect. You acknowledge
              and agree that it is your responsibility to review this privacy policy periodically and become aware of
              modifications.
            </p>

            <h2>7. Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with
              this site, please contact us at:
            </p>
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
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn More About Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover how we empower children with special needs and transform lives.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/about">About Us</Link>
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
