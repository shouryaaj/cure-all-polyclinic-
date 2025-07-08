import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MapPin, Phone, Mail, Clock, Car, Bus, Navigation } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription,} from "@/components/ui/dialog"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
      <section className="bg-blue-50 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get in touch with our team. We're here to help with your healthcare needs and answer any questions you may
            have.
          </p>
        </div>  
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                  Visit Our Clinic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Main Location</h3>
                    <p className="text-gray-600">
                      Shop no.2, Esctasy Business Park
                      <br />
                      JSD road, Mulund West
                      <br />
                      Mumbai, Maharashtra 400080
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://www.google.com/maps/place/Cure+all+polyclinic/@19.17668,72.9603685,20.75z/data=!4m6!3m5!1s0x3be7b9b088d9f731:0xbdb77bc481cb38e7!8m2!3d19.1768203!4d72.9602421!16s%2Fg%2F11xkf1pcvj?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </Link>
                    <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="flex-1">
      <Car className="mr-2 h-4 w-4" />
      Parking Info
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Parking Information</DialogTitle>
      <DialogDescription>
        Free parking available in the Ecstasy Business Park parking lot with access to the clinic via elevators.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-600" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <strong>Main Office:</strong> 7715080503
                      </p>
                      <p className="text-gray-600">
                        <strong>Appointments:</strong> 9987513503
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday </span>
                    <span className="font-semibold">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">11:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bus className="mr-2 h-5 w-5 text-blue-600" />
                  Transportation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Public Transit</h4>
                    <p className="text-gray-600 text-sm">
                      Nearby train station: Mulund West (5 min walk from the clinic)
                    </p>
                    <p className="text-gray-600 text-sm">
                      Bus routes 15, 22, and 45 stop directly in front of our building
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parking</h4>
                    <p className="text-gray-600 text-sm">
                      Free parking available in the Ecstasy Business Park parking lot with access to the clinic via elevators.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessibility</h4>
                    <p className="text-gray-600 text-sm">
                      Wheelchair accessible with ramps and elevators throughout the facility
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject...</option>
                      <option value="appointment">Appointment Request</option>
                      <option value="billing">Billing Question</option>
                      <option value="insurance">Insurance Inquiry</option>
                      <option value="medical">Medical Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="consent" required className="mr-2" />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to being contacted by Cure All Polyclinic regarding my inquiry *
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="bg-green-600 hover:bg-green-700 h-16">
                <div className="text-center">
                  <Phone className="h-5 w-5 mx-auto mb-1" />
                  <div className="text-sm">Call Now</div>
                </div>
              </Button>
              <Button variant="outline" className="h-16 border-blue-600 text-blue-600 hover:bg-blue-50">
                <div className="text-center">
                  <Link href="/appointment" className="flex flex-col items-center">
                    <Clock className="h-5 w-5 mb-1" />
                    <div className="text-sm">Book Online</div>
                  </Link>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle>Find Us on the Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-lg overflow-hidden border border-gray-300 shadow-md">
              <iframe
                title="Cure All Polyclinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.1187859478457!2d72.9603685!3d19.17668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b088d9f731%3A0xbdb77bc481cb38e7!2sCure%20all%20polyclinic!5e0!3m2!1sen!2sin!4v1720240176032!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="w-full h-[400px]"
                style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <noscript>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <p>Map could not load. Please <a href="https://www.google.com/maps/place/Cure+all+polyclinic/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">open it on Google Maps</a>.</p>
          </div>
        </div>
      </noscript>
    </div>
  </CardContent>
</Card>

<Card className="mt-8">
  <CardHeader>
    <CardTitle>Rate Us on Google</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      <p className="text-gray-700 text-center sm:text-left">
        We’d love your feedback! Share your experience with Cure All Polyclinic on Google.
      </p>
      <Link
        href="https://www.google.com/maps/place/Cure+all+polyclinic/@19.17668,72.9603685,20.75z/data=!4m6!3m5!1s0x3be7b9b088d9f731:0xbdb77bc481cb38e7!8m2!3d19.1768203!4d72.9602421!16s%2Fg%2F11xkf1pcvj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
          ⭐ Leave a Review
        </Button>
      </Link>
    </div>
  </CardContent>
</Card>
     </div>
    </div>
  )
}
