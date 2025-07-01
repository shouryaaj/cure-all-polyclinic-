'use client'

import React, { JSX } from "react"
import Link from "next/link"
import services from "@/lib/data/services.json"
import {
  Stethoscope,
  Heart,
  Bone,
  Baby,
  Users,
  FlaskConical,
  XCircle
} from "lucide-react"

// Define the type for service entries
interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

// Map string icons to Lucide components
const iconMap: Record<string, JSX.Element> = {
  stethoscope: <Stethoscope className="w-8 h-8 text-blue-600" />,
  heart: <Heart className="w-8 h-8 text-red-500" />,
  bone: <Bone className="w-8 h-8 text-gray-600" />,
  baby: <Baby className="w-8 h-8 text-orange-500" />,
  users: <Users className="w-8 h-8 text-purple-600" />,
  "flask-conical": <FlaskConical className="w-8 h-8 text-teal-600" />
}

export default function MedicalServices() {
  const topServices = services.slice(0, 3) as Service[]

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Medical Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive healthcare services delivered by experienced professionals using
          state-of-the-art medical equipment and facilities.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="group bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {iconMap[service.icon] ?? (
                  <XCircle className="w-8 h-8 text-red-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <Link
          href="/services"
          className="mt-10 inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          View All Services
        </Link>
      </div>
    </section>
  )
}