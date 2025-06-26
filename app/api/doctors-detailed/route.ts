import { NextResponse } from "next/server"

// This would typically come from a database
const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "General Medicine",
    experience: "15 years",
    education: "MD - Harvard Medical School",
    certifications: ["Board Certified Internal Medicine", "Advanced Cardiac Life Support"],
    languages: ["English", "Spanish"],
    bio: "Dr. Johnson is dedicated to providing comprehensive primary care with a focus on preventive medicine and patient education.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    experience: "12 years",
    education: "MD - Johns Hopkins University",
    certifications: ["Board Certified Cardiology", "Interventional Cardiology"],
    languages: ["English", "Mandarin"],
    bio: "Dr. Chen specializes in advanced cardiac care and has extensive experience in interventional procedures.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "10 years",
    education: "MD - Stanford University",
    certifications: ["Board Certified Pediatrics", "Pediatric Advanced Life Support"],
    languages: ["English", "Spanish", "Portuguese"],
    bio: "Dr. Rodriguez is passionate about children's health and development, providing compassionate care for young patients.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Dr. David Kim",
    specialty: "Orthopedics",
    experience: "18 years",
    education: "MD - UCLA Medical School",
    certifications: ["Board Certified Orthopedic Surgery", "Sports Medicine"],
    languages: ["English", "Korean"],
    bio: "Dr. Kim specializes in orthopedic surgery and sports medicine, helping patients return to active lifestyles.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Dr. Lisa Thompson",
    specialty: "Gynecology",
    experience: "14 years",
    education: "MD - Mayo Clinic",
    certifications: ["Board Certified Obstetrics & Gynecology", "Minimally Invasive Surgery"],
    languages: ["English", "French"],
    bio: "Dr. Thompson provides comprehensive women's healthcare with expertise in minimally invasive surgical techniques.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Dr. Robert Wilson",
    specialty: "Neurology",
    experience: "20 years",
    education: "MD - Yale University",
    certifications: ["Board Certified Neurology", "Stroke Specialist"],
    languages: ["English"],
    bio: "Dr. Wilson is a leading neurologist with extensive experience in treating complex neurological conditions.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export async function GET() {
  return NextResponse.json(doctors)
}
