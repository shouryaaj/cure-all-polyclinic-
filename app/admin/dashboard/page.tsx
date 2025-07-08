"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Stethoscope, FileText, Plus, Edit, Trash2, LogOut, Briefcase, Smile,} from "lucide-react"
import { useRouter } from "next/navigation"
import { DoctorForm, ServiceForm } from "@/components/AdminForms"
import { useDataContext } from "@/components/DataContext"

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<
    | "doctors"
    | "services"
    | "content"
    | "hero"
    | "whyChooseUs"
    | "announcements"
    | "storyImages"
  >("doctors")

  const { doctors, services } = useDataContext()
  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
      return
    }

    // Removed fetchData call for unused sections
  }, [activeSection, router])

  // Removed fetchData function for unused sections

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return

    try {
      const endpoint =
        activeSection === "whyChooseUs"
          ? `/api/whyChooseUs?id=${id}`
          : `/api/${activeSection}/${id}`

      const response = await fetch(endpoint, { method: "DELETE" })

      if (response.ok) {
        // Removed fetchData call for unused sections
      } else {
        alert("Error deleting item")
      }
    } catch (error) {
      console.error("Error deleting item:", error)
      alert("Error deleting item")
    }
  }

  const handleAddNew = () => {
    setShowModal(true)
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 p-4 border-r bg-gray-50 space-y-2">
        <Button
          variant={activeSection === "doctors" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setActiveSection("doctors")}
        >
          <Stethoscope className="h-4 w-4 mr-2" /> Doctors
        </Button>
        <Button
          variant={activeSection === "services" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setActiveSection("services")}
        >
          <Briefcase className="h-4 w-4 mr-2" /> Services
        </Button>
        <Button
          variant={activeSection === "content" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setActiveSection("content")}
        >
          <FileText className="h-4 w-4 mr-2" /> Content
        </Button>
        <Button
          variant={activeSection === "hero" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setActiveSection("hero")}
        >
          <Users className="h-4 w-4 mr-2" /> Hero Images
        </Button>
        <Button
          variant={activeSection === "whyChooseUs" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setActiveSection("whyChooseUs")}
        >
          <Smile className="h-4 w-4 mr-2" /> Why Choose Us
        </Button>
        <Button
          variant={activeSection === "announcements" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setActiveSection("announcements")}
        >
          <FileText className="h-4 w-4 mr-2" /> Announcements
        </Button>
        <Button
          variant={activeSection === "storyImages" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => setActiveSection("storyImages")}
        >
          <Heart className="h-4 w-4 mr-2" /> Our Story Images
        </Button>
        <Button variant="destructive" onClick={handleLogout} className="w-full">
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </Button>
      </aside>

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold capitalize">{activeSection}</h1>
          {(activeSection === "doctors" || activeSection === "services") && (
            <Button onClick={handleAddNew}>
              <Plus className="h-4 w-4 mr-2" /> Add New
            </Button>
          )}
        </div>
        {showModal && activeSection === "doctors" && (
          <DoctorForm onClose={() => setShowModal(false)} />
        )}
        {showModal && activeSection === "services" && (
          <ServiceForm onClose={() => setShowModal(false)} />
        )}
        {/* Show new data from context for doctors/services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {activeSection === "doctors" && doctors.map((item: any) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.fullName}</h3>
                {item.profileImage && (
                  <img src={item.profileImage} alt={item.fullName} className="w-full max-w-xs rounded-lg mb-2" />
                )}
                <p className="text-sm mb-1">{item.specialization}</p>
                <p className="text-xs text-gray-500 mb-1">{item.availability}</p>
                <p className="text-xs">{item.bio}</p>
              </CardContent>
            </Card>
          ))}
          {activeSection === "services" && services.map((item: any) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                {item.icon && (
                  <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />
                )}
                <p className="text-sm mb-2">{item.description}</p>
                {item.priceOrDuration && <p className="text-xs text-gray-500">{item.priceOrDuration}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* ...existing code for other sections... */}
      </main>
    </div>
  )
}