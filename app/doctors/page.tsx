'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Calendar, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import doctorsData from "@/lib/data/doctors.json"

interface Doctor {
  name: string
  specialty: string
  image?: string
  experience: string
  education: string
  certifications: string[]
  languages: string[]
  bio: string
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([])

  useEffect(() => {
    setDoctors(doctorsData)
  }, [])

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
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{doctor.experience}</span>
                    </div>

                    <div className="flex items-start text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                      <span>{doctor.education}</span>
                    </div>

                    {doctor.certifications?.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {doctor.certifications.map((cert, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Languages:</h4>
                      <p className="text-sm text-gray-600">{doctor.languages.join(", ")}</p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">{doctor.bio}</p>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Calendar className="mr-2 h-4 w-4" />
                      <Link href="/appointment">Book with {doctor.name.split(" ")[1]}</Link>
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
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Board Certified</h3>
              <p className="text-gray-600">
                All our physicians are board-certified in their specialties with ongoing continuing education.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We prioritize building strong doctor-patient relationships based on trust and communication.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
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