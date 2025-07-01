"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText } from "lucide-react"
import articlesData from "@/lib/data/articles.json"

interface Article {
  id: string
  title: string
  content: string
  date: string
  type: "article"
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  useEffect(() => {
    const sorted = (articlesData as Article[])
      .filter((item) => item.type === "article")
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    setArticles(sorted)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Articles & Vlogs</h1>

      {/* Grid of articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500 capitalize">{article.type}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="text-lg">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 line-clamp-3">{article.content.substring(0, 150)}...</p>
              <Button variant="outline" className="w-full" onClick={() => setSelectedArticle(article)}>
                Read Article
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedArticle.title}</h2>
                <Button variant="outline" onClick={() => setSelectedArticle(null)} className="ml-4">
                  Close
                </Button>
              </div>
              <div className="prose max-w-none">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedArticle.date).toLocaleDateString()}
                </div>
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {selectedArticle.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}