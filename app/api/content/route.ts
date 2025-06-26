import { NextResponse } from "next/server"

// This would typically come from a database or CMS
const content = [
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
]

export async function GET() {
  return NextResponse.json(content)
}
