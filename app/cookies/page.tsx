import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Facebook } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cookie Policy — Smile 'n Win",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="cookies" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">Legal Information</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-700 mb-4">කුකී ප්‍රතිපත්තිය • Cookie Policy</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This policy explains how Smile 'n Win uses cookies and similar technologies on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h2>1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently, as well as to provide information to the
              owners of the site. Cookies enable the website to remember your actions and preferences (such as login,
              language, font size, and other display preferences) over a period of time, so you don't have to keep
              re-entering them whenever you come back to the site or browse from one page to another.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for several purposes:</p>
            <ul>
              <li>
                **Essential Cookies:** These cookies are strictly necessary for the basic functionality of our website,
                such as enabling navigation and access to secure areas. The website cannot function properly without
                these cookies.
              </li>
              <li>
                **Analytical/Performance Cookies:** These cookies allow us to recognize and count the number of visitors
                and to see how visitors move around our website when they are using it. This helps us to improve the way
                our website works, for example, by ensuring that users are finding what they are looking for easily.
              </li>
              <li>
                **Functionality Cookies:** These are used to recognize you when you return to our website. This enables
                us to personalize our content for you, greet you by name, and remember your preferences (for example,
                your choice of language or region).
              </li>
              <li>
                **Targeting/Advertising Cookies:** These cookies record your visit to our website, the pages you have
                visited, and the links you have followed. We will use this information to make our website and the
                advertising displayed on it more relevant to your interests. We may also share this information with
                third parties for this purpose.
              </li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-parties cookies to report usage statistics
              of the Service, deliver advertisements on and through the Service, and so on. These third parties may
              include:
            </p>
            <ul>
              <li>Google Analytics (for website traffic analysis)</li>
              <li>Social media platforms (for sharing content and integration)</li>
              <li>Payment gateways (for secure transaction processing)</li>
            </ul>

            <h2>4. Your Choices Regarding Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject
              cookies, you may still use our website, though your access to some functionality and areas of our website
              may be restricted.
            </p>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about
              cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
              <Link href="http://www.allaboutcookies.org" target="_blank">
                www.allaboutcookies.org
              </Link>
              .
            </p>

            <h2>5. Changes to Our Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
              cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this
              Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at:
              contact@smilenwin.org
            </p>
            <p className="text-sm text-gray-500 mt-8">This document was last updated on: August 1, 2024</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Matters to Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Read our full Privacy Policy to understand how we protect your personal information.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/privacy">View Privacy Policy</Link>
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
