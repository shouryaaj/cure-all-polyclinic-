'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import happenings from "@/lib/data/happenings.json"

export default function WhatsHappening() {
  const recentHappenings = happenings.slice(0, 3) // only latest 3

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What’s Happening?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentHappenings.map((item, idx) => (
            <Link
              key={idx}
              href="/announcements"
              className="transform transition-transform hover:scale-[1.02]"
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition duration-200 h-full">
                <CardContent className="p-6 h-full">
                  <Badge variant="outline" className="mb-3">
                    {item.tag}
                  </Badge>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}