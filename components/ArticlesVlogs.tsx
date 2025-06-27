"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Play, FileText } from "lucide-react"

interface Article {
  id: string
  title: string
  content: string
  date: string
  type: "article"
}

interface Vlog {
  id: string
  title: string
  description: string
  youtubeUrl: string
  date: string
  type: "vlog"
}

type Content = Article | Vlog

export default function ArticlesVlogs() {
  const [content, setContent] = useState<Content[]>([])
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const [activeTab, setActiveTab] = useState<"all" | "articles" | "vlogs">("all")

  useEffect(() => {
    // Fetch content from API
    const fetchContent = async () => {
      try {
        const response = await fetch("/api/content")
        const data = await response.json()
        setContent(data)
      } catch (error) {
        console.error("Error fetching content:", error)
        // Fallback data
        setContent([
          {
            id: "1",
            title: "Understanding Heart Health: Prevention and Care",
            content:
              "Heart disease remains one of the leading causes of death worldwide, but many cases are preventable through lifestyle changes and early detection. In this comprehensive guide, we'll explore the fundamentals of cardiovascular health, risk factors, and practical steps you can take to maintain a healthy heart throughout your life.\n\nThe heart is a remarkable organ that beats approximately 100,000 times per day, pumping blood throughout your body to deliver oxygen and nutrients to every cell. Understanding how your heart works and what it needs to function optimally is the first step toward better cardiovascular health.\n\nRisk factors for heart disease include both controllable and uncontrollable elements. While you cannot change factors like age, gender, and family history, you have significant control over lifestyle factors such as diet, exercise, smoking, and stress management.",
            date: "2024-01-15",
            type: "article",
          },
          {
            id: "2",
            title: "Dr. Johnson Explains: Managing Diabetes",
            description:
              "Our Chief Medical Officer discusses practical tips for diabetes management and lifestyle modifications.",
            youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            date: "2024-01-10",
            type: "vlog",
          },
          {
            id: "3",
            title: "The Importance of Regular Health Screenings",
            content:
              "Regular health screenings are one of the most important steps you can take to maintain your health and catch potential problems early. Many serious health conditions, including cancer, heart disease, and diabetes, can develop without obvious symptoms in their early stages.\n\nPreventive screenings can detect these conditions before symptoms appear, when treatment is most effective. The specific screenings you need depend on your age, gender, family history, and personal risk factors.\n\nFor adults, recommended screenings typically include blood pressure checks, cholesterol testing, diabetes screening, cancer screenings (such as mammograms, colonoscopies, and Pap smears), and bone density tests. Your healthcare provider can help determine which screenings are appropriate for you and how often you should have them.",
            date: "2024-01-05",
            type: "article",
          },
        ])
      }
    }

    fetchContent()
  }, [])

  const filteredContent = content.filter((item) => {
    if (activeTab === "all") return true
    if (activeTab === "articles") return item.type === "article"
    if (activeTab === "vlogs") return item.type === "vlog"
    return true
  })

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("/").pop()
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "all" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All Content
          </button>
          <button
            onClick={() => setActiveTab("articles")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "articles" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab("vlogs")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "vlogs" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Vlogs
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {item.type === "article" ? (
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  ) : (
                    <Play className="h-5 w-5 text-red-600 mr-2" />
                  )}
                  <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {item.type === "article" ? (
                <p className="text-gray-600 mb-4 line-clamp-3">{(item as Article).content.substring(0, 150)}...</p>
              ) : (
                <p className="text-gray-600 mb-4">{(item as Vlog).description}</p>
              )}
              <Button variant="outline" className="w-full" onClick={() => setSelectedContent(item)}>
                {item.type === "article" ? "Read Article" : "Watch Video"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for full content */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedContent.title}</h2>
                <Button variant="outline" onClick={() => setSelectedContent(null)} className="ml-4">
                  Close
                </Button>
              </div>

              {selectedContent.type === "article" ? (
                <div className="prose max-w-none">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedContent.date).toLocaleDateString()}
                  </div>
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {(selectedContent as Article).content}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedContent.date).toLocaleDateString()}
                  </div>
                  <p className="text-gray-600 mb-4">{(selectedContent as Vlog).description}</p>
                  <div className="aspect-video">
                    <iframe
                      src={getYouTubeEmbedUrl((selectedContent as Vlog).youtubeUrl)}
                      title={selectedContent.title}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}