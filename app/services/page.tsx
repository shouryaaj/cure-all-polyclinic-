'use client'

import React, { JSX } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Stethoscope,
  Syringe,
  Brain,
  Microscope,
  XCircle
} from "lucide-react"

import services from "@/lib/data/services.json" // ← 🔥 Direct JSON import

interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

const iconMap: Record<string, JSX.Element> = {
  heart: <Heart className="text-blue-600" />,
  stethoscope: <Stethoscope className="text-blue-600" />,
  syringe: <Syringe className="text-blue-600" />,
  brain: <Brain className="text-blue-600" />,
  microscope: <Microscope className="text-blue-600" />
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-50 text-black py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by experienced professionals using modern medical equipment and compassionate care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8">{iconMap[service.icon] || <XCircle className="text-red-500" />}</div>
                    <CardTitle className="ml-4 text-xl font-semibold">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-auto" variant="outline">
                    <Link href="/appointment">Schedule Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}