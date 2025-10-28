import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Phone, Mail, Facebook, Star, Calendar, Users, Award } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Stories — Smile 'n Win",
}

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="stories" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Success Stories</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Stories of Hope & Transformation</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover the incredible journeys of children who have thrived with our support, care, and specialized programs.
              Each story represents hope, progress, and the power of dedicated care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inspiring Journeys</h2>
            <p className="text-lg text-gray-600">Real stories of progress, growth, and achievement</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Dilhara's Story */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/success-story-boy-medal.jpeg"
                  alt="Dilhara receiving recognition for his achievements after 9 years of progress at Smile 'n Win"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Featured Story</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dilhara – came to us at age 9</h3>
                <p className="text-lg text-orange-600 font-medium mb-4">Progress – 09 years</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When Dilhara first arrived at our center, he faced significant challenges with communication and social interaction. 
                  Through our comprehensive therapy programs, specialized education, and dedicated care, he has made remarkable progress 
                  over the past 9 years.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Today, Dilhara can communicate effectively, participates actively in group activities, and has developed essential 
                  life skills. His transformation is a testament to the power of consistent, loving care and specialized support.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>9 years of progress</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Multiple achievements</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amara's Story */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/umesh-02.jpg"
                  alt="Umesh enjoying cultural activities at Smile n' Win"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">Inspiring Journey</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">🎶 Meet Umesh</h3>
                <p className="text-lg text-green-600 font-medium mb-4">A Heart Full of Songs and Gratitude</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is Umesh, a kind and cheerful boy from Battaramulla. He is 29 years old, but he has a young heart that shines with happiness every day. Umesh loves to sing songs, and his sweet voice always makes the home a brighter place.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  He is also very grateful — when visitors bring food or sweets, Umesh always smiles and says how "delicious" it is. Everyone loves how he makes them feel special with his kind words. Because of his happy nature, many visitors look for Umesh first when they come to Smile n' Win. He has a way of making people feel welcome and loved. 💖
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Active community member</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>Cultural ambassador</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-gray-600">Measuring success through real outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Children Supported</p>
              <p className="text-sm text-gray-500 mt-2">Over our 15 years of service</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">Improvement Rate</p>
              <p className="text-sm text-gray-500 mt-2">In communication and social skills</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">45</h3>
              <p className="text-gray-600">Current Residents</p>
              <p className="text-sm text-gray-500 mt-2">Receiving daily care and support</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">Years of Service</p>
              <p className="text-sm text-gray-500 mt-2">Dedicated to special needs care</p>
            </Card>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Inspiring Stories</h2>
            <p className="text-lg text-gray-600">Every child's journey is unique and meaningful</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <Image
                src="/images/learning-activity.jpeg"
                alt="Child engaged in learning activity"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Kasun's Learning Journey</h3>
                <p className="text-gray-600 text-sm mb-3">
                  From struggling with basic tasks to mastering complex learning activities through our specialized education program.
                </p>
                <Badge className="bg-blue-100 text-blue-800">Educational Success</Badge>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/images/children-performance.jpeg"
                alt="Children performing on stage"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">The Performance Group</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Our children's choir and dance group showcasing their talents and building confidence through artistic expression.
                </p>
                <Badge className="bg-green-100 text-green-800">Creative Arts</Badge>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/images/beach-outing.jpeg"
                alt="Children enjoying beach outing"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Community Integration</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Regular outings and community activities help our children develop social skills and experience the world beyond our center.
                </p>
                <Badge className="bg-purple-100 text-purple-800">Social Development</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Families Say</h2>
            <p className="text-lg text-gray-600">Heartfelt words from parents and caregivers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "The transformation in my daughter has been incredible. The staff at Smile 'n Win treated her with such love and patience. 
                She's now more confident and independent than I ever imagined possible."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold">Mrs. Perera</p>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "As a volunteer, I've witnessed firsthand the dedication and expertise of the team. Every child receives individualized 
                care that addresses their unique needs. It's truly inspiring work."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold">Dr. Silva</p>
                  <p className="text-sm text-gray-600">Volunteer Therapist</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Help Us Create More Success Stories</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your support can help more children achieve their dreams and reach their full potential. Every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/donate#bank-transfer">
                  Support Our Mission <Heart className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/volunteer">Volunteer With Us</Link>
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
