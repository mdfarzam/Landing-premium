import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Testimonial {
  id: number;
  company: string;
  description: string;
  founder: string;
  role: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Andiamo",
    description:
      "AI-powered travel planning platform that creates personalized itineraries based on your preferences, budget, and travel style in seconds.",
    founder: "Khushiyant C.",
    role: "Founder",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    id: 2,
    company: "SkillFlow",
    description:
      "Adaptive employee training platform that uses AI to generate custom curriculum and assess skills in real-time.",
    founder: "Sarah J.",
    role: "Founder",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    company: "SmartScout",
    description:
      "Automated recruitment tool that scans obscure platforms to find hidden technical talent that recruiters often miss.",
    founder: "David R.",
    role: "Founder",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    company: "SmartScout",
    description:
      "Automated recruitment tool that scans obscure platforms to find hidden technical talent that recruiters often miss.",
    founder: "David R.",
    role: "Founder",
    gradient: "from-green-400 to-emerald-500",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group flex flex-col h-full">
    {/* Screenshot Placeholder */}
    <div className="bg-gray-50 h-48 flex items-center justify-center border-b border-gray-200 relative shrink-0">
      <div className="absolute inset-x-12 top-8 bottom-0 bg-white rounded-t-lg shadow-sm border-x border-t border-gray-100"></div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
        {testimonial.company}
      </h4>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
        {testimonial.description}
      </p>

      {/* Founder Info */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center space-x-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient}`}
          ></div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {testimonial.founder}
            </div>
            <div className="text-xs text-gray-500">{testimonial.role}</div>
          </div>
        </div>
        <button className="text-gray-400 group-hover:text-orange-600 transition-colors">
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default function CustomerTestimonials() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            CUSTOMER TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Builders <br />
            and Indie Developers
          </h2>
          <p className="text-sm text-gray-600">
            See what our community is building
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
