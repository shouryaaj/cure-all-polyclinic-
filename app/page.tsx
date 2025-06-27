'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsHappening from "@/components/ui/whats-happening"
import MedicalServices from '@/components/ui/medical-services'
import heroImages from "@/lib/data/herosectionImages.json"
import WhyChooseUs from '@/components/ui/why-choose-us'
import { Clock, Phone, MapPin, Heart } from 'lucide-react'


export default function Home() {
  const [current, setCurrent] = useState(0)
  const images = heroImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
  <>
    {/* Hero Section */}
    <section className="w-full bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Your Health, Our Heartfelt Commitment.
          </h1>
          <p className="text-lg text-gray-700">
            Comprehensive healthcare services with experienced doctors and modern facilities. We're committed to providing exceptional medical care for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/appointment">
              <Button className="text-base px-6 py-2 bg-primary hover:bg-primary/80 transition">
                Schedule Appointment
              </Button>
            </Link>
            <a href="tel:+917715080503">
              <Button
                variant="outline"
                className="text-base px-6 py-2 border-gray-500 hover:bg-gray-100 transition"
              >
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column - Carousel */}
        <div className="md:w-1/2 w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-white relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={images[current]}
                alt="Clinic Image"
                width={800}
                height={600}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>

    {/* Other Sections */}
    <WhatsHappening />
    <MedicalServices />
    <WhyChooseUs />

    {/* Contact Info */}
    <section className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Visit Us</h3>
            <p className="text-black">
              Shop no.2, Esctasy Business Park
              <br />
              JSD road, Mulund West
              <br />
              Mumbai, Maharashtra 400080
            </p>
          </div>
          <div className="text-center">
            <Phone className="h-12 w-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Call Us</h3>
            <p className="text-black">
              Main: 7715080503
              <br />
              Alternate number: 
            </p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Hours</h3>
            <p className="text-black">
              Mon-Fri: 8:00 AM - 8:00 PM
              <br />
              Saturday: 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>

  
  </>
)
}