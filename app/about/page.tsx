"use client"

import { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ArticlesVlogs from "@/components/ArticlesVlogs"
import storyImages from "@/lib/data/storyImages.json"

interface StoryImage {
  src: string
  alt: string
}

export default function AboutPage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  })

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and dignity, ensuring comfort throughout their healthcare journey.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Medical Excellence",
      description:
        "Our commitment to the highest standards of medical practice drives everything we do, from diagnosis to treatment.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Patient Safety",
      description: "We maintain the strictest safety protocols and quality measures to protect our patients and staff.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community Focus",
      description:
        "We're dedicated to improving the health and wellbeing of our local community through accessible healthcare.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-50 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-black font-bold mb-6">About Cure All Polyclinic</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            For over 15 years, we've been committed to providing exceptional healthcare services to our community with
            compassion, expertise, and innovation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, Cure All Polyclinic began with a simple mission: to provide comprehensive,
                  compassionate healthcare to our community. What started as a small family practice has grown into a
                  full-service medical facility serving thousands of patients across the region.
                </p>
                <p>
                  Our founders, Dr. Sarah Johnson and Dr. Michael Chen, recognized the need for a healthcare facility
                  that combined medical excellence with personalized care. They envisioned a place where patients would
                  feel heard, respected, and cared for as individuals, not just medical cases.
                </p>
                <p>
                  Today, we continue to honor that vision with a team of dedicated healthcare professionals who share
                  our commitment to excellence, innovation, and community service.
                </p>
              </div>
            </div>
            <div>
              <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden shadow-lg">
                {(storyImages as StoryImage[]).map((img, index) => (
                  <div key={index} className="keen-slider__slide">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we care for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Vlogs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Articles & Vlogs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest health articles and educational videos from our medical experts.
            </p>
          </div>
          <ArticlesVlogs />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-black leading-relaxed mb-8">
            "To provide exceptional, compassionate healthcare services that improve the health and wellbeing of our
            community. We are committed to delivering personalized care with the highest standards of medical
            excellence, innovation, and patient safety."
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <Link href="/appointment">Experience Our Care</Link>
          </Button>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the dedicated leaders who guide our mission and vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                title: "Chief Medical Officer & Co-Founder",
                education: "MD - Harvard Medical School",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Michael Chen",
                title: "Medical Director & Co-Founder",
                education: "MD - Johns Hopkins University",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jennifer Martinez",
                title: "Chief Executive Officer",
                education: "MBA - Stanford Graduate School",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{leader.title}</p>
                  <p className="text-gray-600 text-sm">{leader.education}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}