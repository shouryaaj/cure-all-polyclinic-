import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "lib", "data", "doctors.json")
    const fileContents = fs.readFileSync(filePath, "utf-8")
    const data = JSON.parse(fileContents)
    return NextResponse.json(data)
  } catch (error) {
    console.error("Failed to load doctors.json:", error)
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 })
  }
}