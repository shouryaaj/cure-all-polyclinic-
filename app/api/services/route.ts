import { NextResponse } from "next/server"

// This would typically come from a database
const services = [
  {
    id: "1",
    icon: "stethoscope",
    title: "General Medicine",
    description:
      "Comprehensive primary healthcare for patients of all ages, including routine check-ups, preventive care, and treatment of common illnesses.",
    features: ["Annual Physical Exams", "Chronic Disease Management", "Preventive Screenings", "Vaccination Services"],
  },
  {
    id: "2",
    icon: "heart",
    title: "Cardiology",
    description:
      "Advanced heart and cardiovascular care with state-of-the-art diagnostic equipment and experienced cardiologists.",
    features: ["ECG/EKG Testing", "Echocardiography", "Stress Testing", "Cardiac Consultation"],
  },
  {
    id: "3",
    icon: "baby",
    title: "Pediatrics",
    description:
      "Specialized healthcare for infants, children, and adolescents with a focus on growth, development, and wellness.",
    features: ["Well-Child Visits", "Immunizations", "Growth Monitoring", "Developmental Assessments"],
  },
  {
    id: "4",
    icon: "bone",
    title: "Orthopedics",
    description: "Comprehensive bone, joint, and muscle care including injury treatment and rehabilitation services.",
    features: ["Fracture Treatment", "Sports Medicine", "Joint Injections", "Physical Therapy"],
  },
  {
    id: "5",
    icon: "test-tube",
    title: "Laboratory Services",
    description:
      "Complete diagnostic testing with quick turnaround times and accurate results for better patient care.",
    features: ["Blood Tests", "Urine Analysis", "Microbiology", "Pathology Services"],
  },
  {
    id: "6",
    icon: "eye",
    title: "Ophthalmology",
    description: "Comprehensive eye care services including routine exams, disease treatment, and vision correction.",
    features: ["Eye Exams", "Glaucoma Screening", "Cataract Evaluation", "Vision Testing"],
  },
]

export async function GET() {
  return NextResponse.json(services)
}
