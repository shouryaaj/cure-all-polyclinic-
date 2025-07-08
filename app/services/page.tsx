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
import { useDataContext } from "@/components/DataContext"

const iconMap: Record<string, JSX.Element> = {
  heart: <Heart className="text-blue-600" />,
  stethoscope: <Stethoscope className="text-blue-600" />,
  syringe: <Syringe className="text-blue-600" />,
  brain: <Brain className="text-blue-600" />,
  microscope: <Microscope className="text-blue-600" />
}

export default function ServicesPage() {
  const { services } = useDataContext()

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
                    {/* If icon is a URL, show image, else use iconMap */}
                    {service.icon.startsWith("http") ? (
                      <img src={service.icon} alt={service.title} className="w-8 h-8" />
                    ) : (
                      <div className="w-8 h-8">{iconMap[service.icon] || <XCircle className="text-red-500" />}</div>
                    )}
                    <CardTitle className="ml-4 text-xl font-semibold">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  {service.priceOrDuration && <p className="text-xs text-gray-500 mb-2">{service.priceOrDuration}</p>}
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