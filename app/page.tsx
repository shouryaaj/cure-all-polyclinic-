import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Phone, Star, Heart, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ImageCarousel from "@/components/ImageCarousel"

const heroImages = [
  "/placeholder.svg?height=400&width=600&text=Modern+Clinic+Exterior",
  "/placeholder.svg?height=400&width=600&text=Reception+Area",
  "/placeholder.svg?height=400&width=600&text=Consultation+Room",
  "/placeholder.svg?height=400&width=600&text=Medical+Equipment",
]

const facilityImages = [
  "/placeholder.svg?height=500&width=600&text=Medical+Team+Consultation",
  "/placeholder.svg?height=500&width=600&text=Patient+Care",
  "/placeholder.svg?height=500&width=600&text=Modern+Facilities",
  "/placeholder.svg?height=500&width=600&text=Waiting+Area",
]

function ImageCarouselOld({ images }: { images: string[] }) {
  return (
    <div className="relative">
      <Image
        src={images[0] || "/placeholder.svg"}
        alt="Carousel Image"
        width={600}
        height={images[0].includes("height=400") ? 400 : 500}
        className="rounded-lg shadow-2xl"
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Cure All Polyclinic</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/doctors" className="text-gray-700 hover:text-blue-600">
                Doctors
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50">
                <Link href="/login">Patient Portal</Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Health, Our Priority</h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive healthcare services with experienced doctors and modern facilities. We're committed to
                providing exceptional medical care for you and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Calendar className="mr-2 h-5 w-5" />
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageCarousel images={heroImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by experienced professionals using state-of-the-art medical
              equipment and facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Medicine",
                description: "Comprehensive primary care for all ages with preventive health screenings.",
                icon: "🩺",
              },
              {
                title: "Cardiology",
                description: "Advanced heart care with ECG, echocardiography, and cardiac consultations.",
                icon: "❤️",
              },
              {
                title: "Orthopedics",
                description: "Bone and joint care including fracture treatment and sports medicine.",
                icon: "🦴",
              },
              {
                title: "Pediatrics",
                description: "Specialized healthcare for infants, children, and adolescents.",
                icon: "👶",
              },
              {
                title: "Gynecology",
                description: "Women's health services including prenatal care and family planning.",
                icon: "👩‍⚕️",
              },
              {
                title: "Laboratory Services",
                description: "Complete diagnostic testing with quick and accurate results.",
                icon: "🔬",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Cure All Polyclinic?</h2>
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
                    <p className="text-gray-600">Extended hours and emergency services available 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageCarousel images={facilityImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">
                123 Healthcare Avenue
                <br />
                Medical District
                <br />
                City, State 12345
              </p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">
                Main: (555) 123-4567
                <br />
                Appointments: (555) 123-APPT
                <br />
                Fax: (555) 123-4568
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-300">
                Mon-Fri: 8:00 AM - 8:00 PM
                <br />
                Saturday: 9:00 AM - 5:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Notice */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-blue-800 text-lg">
              <strong>Important:</strong> This form is only for requesting an appointment. You will receive a
              confirmation call from the clinic before the appointment is finalized.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-lg font-semibold">Cure All Polyclinic</span>
            </div>
            <div className="text-sm text-gray-400">© 2024 Cure All Polyclinic. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
