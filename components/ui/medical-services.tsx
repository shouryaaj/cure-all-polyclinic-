"use client";

import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Heart,
  Bone,
  Baby,
  Users,
  FlaskConical,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "General Medicine",
    description:
      "Comprehensive primary care for all ages with preventive health screenings.",
    link: "/services/general-medicine",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Cardiology",
    description:
      "Advanced heart care with ECG, echocardiography, and cardiac consultations.",
    link: "/services/cardiology",
  },
  {
    icon: <Bone className="w-8 h-8 text-gray-600" />,
    title: "Orthopedics",
    description:
      "Bone and joint care including fracture treatment and sports medicine.",
    link: "/services/orthopedics",
  },
  {
    icon: <Baby className="w-8 h-8 text-orange-500" />,
    title: "Pediatrics",
    description:
      "Specialized healthcare for infants, children, and adolescents.",
    link: "/services/pediatrics",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Gynecology",
    description:
      "Women's health services including prenatal care and family planning.",
    link: "/services/gynecology",
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-teal-600" />,
    title: "Laboratory Services",
    description:
      "Complete diagnostic testing with quick and accurate results.",
    link: "/services/laboratory",
  },
];

export default function MedicalServices() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Medical Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive healthcare services delivered by experienced professionals using
          state-of-the-art medical equipment and facilities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 4).map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-10 inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}