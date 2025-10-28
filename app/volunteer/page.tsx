'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, MapPin, Phone, Mail, Facebook, Users, Lightbulb, Send, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { submitVolunteerApplication } from '../actions/volunteer'
import { Header } from "@/components/header"

export default function VolunteerPage() {
  const [state, action, isPending] = useActionState(submitVolunteerApplication, null)
  const [interests, setInterests] = useState<string[]>([])

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interest])
    } else {
      setInterests(interests.filter(i => i !== interest))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPage="volunteer" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Get Involved</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Volunteer With Us & Make a Difference</h1>
            <p className="text-xl text-gray-700 mb-4">ස්වේච්ඡාවෙන් දායක වන්න • Volunteer and Contribute</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your time and skills can bring immense joy and support to children with special needs. Join our dedicated
              team of volunteers today!
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Volunteer at Smile 'n Win?</h2>
            <p className="text-lg text-gray-600">Experience the joy of giving back</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Direct Impact</h3>
                <p className="text-gray-600 text-sm">
                  Work directly with children, providing care, education, and companionship.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gain Experience</h3>
                <p className="text-gray-600 text-sm">
                  Develop valuable skills in special needs care, education, and non-profit operations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join a Community</h3>
                <p className="text-gray-600 text-sm">
                  Become part of a compassionate and supportive team dedicated to a noble cause.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600">Find a role that suits your skills and availability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Child Support Assistant</CardTitle>
                <CardDescription>Assist with daily care and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Help with feeding, hygiene, and playtime</li>
                  <li>Engage children in educational and recreational activities</li>
                  <li>Provide companionship and emotional support</li>
                </ul>
                <Badge className="mt-4 bg-blue-100 text-blue-800">Daily/Weekly</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Education & Therapy Aide</CardTitle>
                <CardDescription>Support teachers and therapists</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Assist in classroom settings and therapy sessions</li>
                  <li>Prepare learning materials and activities</li>
                  <li>Help with individual and group therapy exercises</li>
                </ul>
                <Badge className="mt-4 bg-green-100 text-green-800">Flexible Hours</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Event & Fundraising Support</CardTitle>
                <CardDescription>Help organize and run events</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Assist with event planning and logistics</li>
                  <li>Help with promotion and outreach</li>
                  <li>Support on-site during fundraising events</li>
                </ul>
                <Badge className="mt-4 bg-purple-100 text-purple-800">Event-Based</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Administrative Support</CardTitle>
                <CardDescription>Assist with office tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Data entry and record keeping</li>
                  <li>General office organization</li>
                  <li>Support with communications and outreach</li>
                </ul>
                <Badge className="mt-4 bg-orange-100 text-orange-800">Part-Time</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Maintenance & Facilities</CardTitle>
                <CardDescription>Help keep our center safe and clean</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>General cleaning and tidying</li>
                  <li>Minor repairs and maintenance tasks</li>
                  <li>Gardening and outdoor upkeep</li>
                </ul>
                <Badge className="mt-4 bg-red-100 text-red-800">As Needed</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Specialized Skills</CardTitle>
                <CardDescription>Share your professional expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Therapists (Speech, OT, PT)</li>
                  <li>Special Education Teachers</li>
                  <li>Medical Professionals</li>
                  <li>Photographers/Videographers</li>
                </ul>
                <Badge className="mt-4 bg-yellow-100 text-yellow-800">Professional</Badge>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Image
              src="/images/group-outdoor-activity.jpeg"
              alt="Volunteers and children"
              width={800}
              height={450}
              className="rounded-xl shadow-lg mx-auto object-cover"
            />
            <p className="text-sm text-gray-500 mt-4">
              Image: Our dedicated volunteers engaging with children during an outdoor activity.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply to Volunteer</h2>
              <p className="text-lg text-gray-600">Fill out the form below and we'll get in touch!</p>
            </div>

            {state?.success ? (
              <Alert className="mb-8 border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  {state.message}
                </AlertDescription>
              </Alert>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Application</CardTitle>
                  <CardDescription>Please provide your details and areas of interest.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={action} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full-name">Full Name *</Label>
                        <Input id="full-name" name="full-name" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                    <div>
                      <Label htmlFor="availability">Availability</Label>
                      <Input id="availability" name="availability" placeholder="e.g., Weekends, Mon/Wed/Fri mornings" />
                    </div>
                    <div>
                      <Label htmlFor="skills">Skills & Experience</Label>
                      <Textarea
                        id="skills"
                        name="skills"
                        rows={4}
                        placeholder="Tell us about any relevant skills, experience, or interests you have (e.g., working with children, teaching, therapy, event management)."
                      />
                    </div>
                    <div>
                      <Label>Areas of Interest (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {[
                          { id: 'child-support', label: 'Child Support' },
                          { id: 'education-therapy', label: 'Education & Therapy' },
                          { id: 'events-fundraising', label: 'Events & Fundraising' },
                          { id: 'admin', label: 'Administrative Support' },
                          { id: 'maintenance', label: 'Maintenance' },
                          { id: 'specialized', label: 'Specialized Skills' }
                        ].map((interest) => (
                          <div key={interest.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={interest.id}
                              name="interests"
                              value={interest.label}
                              onCheckedChange={(checked) => handleInterestChange(interest.label, checked as boolean)}
                            />
                            <Label htmlFor={interest.id}>{interest.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="consent" required />
                      <Label htmlFor="consent" className="text-sm">
                        I agree to the terms and conditions for volunteering.
                      </Label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Volunteer But Still Want to Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your financial support is equally vital in transforming the lives of children with special needs.
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
