'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/stories", label: "Stories" },
    { href: "/transparency", label: "Transparency" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image
                src="/images/logo.jpeg"
                alt="Smile 'n Win Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Smile 'n Win</h1>
              <p className="text-sm text-gray-600">Special-Needs Children's Home</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  currentPage === item.href.slice(1) || (currentPage === 'home' && item.href === '/')
                    ? 'text-orange-600 font-medium'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 pb-4 border-b">
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
                      <h2 className="font-bold text-gray-900">Smile 'n Win</h2>
                      <p className="text-sm text-gray-600">Special-Needs Children's Home</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg py-2 px-4 rounded-md transition-colors ${
                          currentPage === item.href.slice(1) || (currentPage === 'home' && item.href === '/')
                            ? 'text-orange-600 bg-orange-50 font-medium'
                            : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button asChild className="bg-orange-600 hover:bg-orange-700 mt-4">
                      <Link href="/donate" onClick={() => setIsOpen(false)}>
                        Donate Now
                      </Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
