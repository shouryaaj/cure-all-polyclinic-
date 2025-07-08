"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Stethoscope, FileText, Plus, Edit, Trash2, LogOut, Briefcase, Smile,} from "lucide-react"
import { useRouter } from "next/navigation"

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

  const [doctors, setDoctors] = useState([])
  const [services, setServices] = useState([])
  const [content, setContent] = useState([])
  const [heroImages, setHeroImages] = useState([])
  const [whyChooseUs, setWhyChooseUs] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [storyImages, setStoryImages] = useState([])

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
      return
    }

    fetchData()
  }, [activeSection, router])

  const fetchData = async () => {
    try {
      let endpoint = ""
      switch (activeSection) {
        case "doctors":
          endpoint = "/api/doctors-detailed"
          break
        case "services":
          endpoint = "/api/services"
          break
        case "content":
          endpoint = "/api/content"
          break
        case "hero":
          endpoint = "/api/hero"
          break
        case "whyChooseUs":
          endpoint = "/api/whyChooseUs"
          break
        case "announcements":
          endpoint = "/api/happenings"
          break
        case "storyImages":
          endpoint = "/api/storyImages"
          break
      }

      const response = await fetch(endpoint)
      const data = await response.json()

      switch (activeSection) {
        case "doctors":
          setDoctors(data)
          break
        case "services":
          setServices(data)
          break
        case "content":
          setContent(data)
          break
        case "hero":
          setHeroImages(data)
          break
        case "whyChooseUs":
          setWhyChooseUs(data)
          break
        case "announcements":
          setAnnouncements(data)
          break
        case "storyImages":
          setStoryImages(data)
          break
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

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
        fetchData()
      } else {
        alert("Error deleting item")
      }
    } catch (error) {
      console.error("Error deleting item:", error)
      alert("Error deleting item")
    }
  }

  const handleAddNew = () => {
    console.log(`Open Add ${activeSection} Modal`)
  }

  const data =
    activeSection === "doctors"
      ? doctors
      : activeSection === "services"
      ? services
      : activeSection === "content"
      ? content
      : activeSection === "hero"
      ? heroImages
      : activeSection === "whyChooseUs"
      ? whyChooseUs
      : activeSection === "announcements"
      ? announcements
      : storyImages

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
          <Button onClick={handleAddNew}>
            <Plus className="h-4 w-4 mr-2" /> Add New
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item: any) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {item.name || item.title || item.fullName || "Untitled"}
                </h3>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.name || "Image"}
                    className="w-full max-w-xs rounded-lg mb-2"
                  />
                )}
                {item.description && <p className="text-sm mb-2">{item.description}</p>}
                {activeSection === "announcements" && (
                  <p className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                )}
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}