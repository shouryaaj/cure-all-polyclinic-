'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Clinic Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-gray-900">Cure All Polyclinic</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Desktop Appointment Button */}
          <div className="hidden md:block ml-4">
            <Link href="/appointment">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Schedule Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-sm">
          <Link href="/" className="block text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/doctors" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Doctors</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/appointment">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
              onClick={() => setIsOpen(false)}
            >
              Schedule Appointment
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}