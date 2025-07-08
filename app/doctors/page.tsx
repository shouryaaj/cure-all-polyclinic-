'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useDataContext } from "@/components/DataContext"

export default function DoctorsPage() {
  const { doctors } = useDataContext()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-50 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Medical Team</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our experienced physicians are dedicated to providing exceptional healthcare with compassion, expertise, and
            the latest medical advances.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Image
                      src={doctor.profileImage || "/placeholder.svg"}
                      alt={doctor.fullName}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.fullName}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{doctor.specialization}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs text-gray-500 mb-1">{doctor.availability}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{doctor.bio}</p>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Calendar className="mr-2 h-4 w-4" />
                      <Link href="/appointment">Book with {doctor.fullName.split(" ")[0]}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Medical Team?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our physicians are carefully selected for their expertise, compassion, and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Board Certified</h3>
              <p className="text-gray-600">
                All our physicians are board-certified in their specialties with ongoing continuing education.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We prioritize building strong doctor-patient relationships based on trust and communication.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                Our team stays current with the latest medical advances and treatment protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}