"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Stethoscope, FileText, Plus, Edit, Trash2, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<"doctors" | "services" | "content">("doctors")
  const [doctors, setDoctors] = useState([])
  const [services, setServices] = useState([])
  const [content, setContent] = useState([])
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
      return
    }

    // Fetch data based on active section
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
      const endpoint = `/api/${activeSection}/${id}`
      const response = await fetch(endpoint, { method: "DELETE" })

      if (response.ok) {
        fetchData() // Refresh data
      } else {
        alert("Error deleting item")
      }
    } catch (error) {
      console.error("Error deleting item:", error)
      alert("Error deleting item")
    }
  }

  const renderContent = () => {
    let data = []
    switch (activeSection) {
      case "doctors":
        data = doctors
        break
      case "services":
        data = services
        break
      case "content":
        data = content
        break
    }

    return (
      <div className="space-y-4">
        {data.map((item: any) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{item.name || item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {activeSection === "doctors" && item.specialty}
                    {activeSection === "services" && item.description}
                    {activeSection === "content" && (item.description || item.content?.substring(0, 100) + "...")}
                  </p>
                  {activeSection === "doctors" && (
                    <p className="text-sm text-gray-500">
                      {item.experience} • {item.education}
                    </p>
                  )}
                  {activeSection === "content" && (
                    <p className="text-sm text-gray-500">
                      {item.type} • {new Date(item.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      /* Handle edit */
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Admin Dashboard</span>
            </div>
            <Button variant="outline" onClick={handleLogout} className="text-red-600 hover:text-red-700">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeSection === "doctors" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection("doctors")}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Doctors
                </Button>
                <Button
                  variant={activeSection === "services" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection("services")}
                >
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Services
                </Button>
                <Button
                  variant={activeSection === "content" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection("content")}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Articles & Vlogs
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 capitalize">Manage {activeSection}</h1>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>

            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}
