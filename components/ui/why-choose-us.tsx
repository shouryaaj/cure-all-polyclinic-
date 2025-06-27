'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Shield, Clock } from 'lucide-react'

import whyChooseUsImages from '@/lib/data/whyChooseUsImages.json'

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % whyChooseUsImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Cure All Polyclinic?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Medical Team</h3>
                  <p className="text-gray-600">
                    Board-certified doctors with years of experience in their specialties.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Modern Facilities</h3>
                  <p className="text-gray-600">
                    State-of-the-art medical equipment and comfortable patient environments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Convenient Hours</h3>
                  <p className="text-gray-600">
                    Extended hours and emergency services available 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Carousel Image */}
          <div className="md:w-full w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-white relative">
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
                  src={whyChooseUsImages[current]}
                  alt="Why Choose Us"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}