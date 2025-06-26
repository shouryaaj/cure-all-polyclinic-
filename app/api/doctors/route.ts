import { NextResponse } from "next/server"

// This would typically come from a database
const doctors = [
  { id: "1", name: "Dr. Sarah Johnson", specialty: "General Medicine" },
  { id: "2", name: "Dr. Michael Chen", specialty: "Cardiology" },
  { id: "3", name: "Dr. Emily Rodriguez", specialty: "Pediatrics" },
  { id: "4", name: "Dr. David Kim", specialty: "Orthopedics" },
  { id: "5", name: "Dr. Lisa Thompson", specialty: "Gynecology" },
  { id: "6", name: "Dr. Robert Wilson", specialty: "Neurology" },
]

export async function GET() {
  return NextResponse.json(doctors)
}
