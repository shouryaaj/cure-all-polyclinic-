'use client'

import { useState } from 'react'
import happenings from '@/lib/data/happenings.json'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type HappeningsItem = {
  id: string
  title: string
  tag: string
  description: string
}

// Ensure `happenings` conforms to expected type
const typedHappenings: HappeningsItem[] = happenings.map((item, index) => ({
  ...item,
  id: `announcement-${index}`
}))

const uniqueTags = ['All', ...new Set(typedHappenings.map(item => item.tag))]

export default function AnnouncementsPage() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filteredHappenings =
    filter === 'All'
      ? typedHappenings
      : typedHappenings.filter(item => item.tag === filter)

  const toggleExpand = (id: string) => {
    setExpanded(prev => (prev === id ? null : id))
  }

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Announcements</h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {uniqueTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? 'default' : 'outline'}
              onClick={() => setFilter(tag)}
              className="capitalize"
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Announcement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHappenings.map(item => (
            <Card key={item.id} className="bg-gray-50 hover:shadow-md transition h-full">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <Badge variant="outline" className="mb-3">{item.tag}</Badge>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                  <p className="text-gray-600 text-sm">
                    {expanded === item.id
                      ? item.description
                      : item.description.length > 100
                        ? `${item.description.slice(0, 100)}...`
                        : item.description}
                  </p>
                </div>
                {item.description.length > 100 && (
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => toggleExpand(item.id)}
                    className="mt-2 text-blue-600 self-start"
                  >
                    {expanded === item.id ? 'Read Less' : 'Read More'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}