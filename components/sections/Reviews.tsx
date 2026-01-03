"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Review[] = [
    {
      name: "Jamie Lindon",
      title: "Business Analyst & Engineer - WhatsForm",
      quote:
        "As a developer, finding real user pain points is challenging. This platform made it straightforward and efficient. The G2 data is a game changer especially because it is so hard to get this sort of data.",
      avatar: "JL",
    },
    {
      name: "Sarah Chen",
      title: "Product Manager - TechCorp",
      quote:
        "The insights from this platform have been invaluable. We discovered pain points we never would have found otherwise. Highly recommend for any product team.",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      title: "Founder - StartupLab",
      quote:
        "Game-changing tool for market research. Saved us months of manual research and helped us validate our product idea before building.",
      avatar: "MR",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="border border-gray-200 rounded-2xl p-8 md:p-12">
          {/* Header with Avatar and Stars */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-lg">
                {currentReview.avatar}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {currentReview.name}
                </h3>
                <p className="text-sm text-gray-600">{currentReview.title}</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-black fill-current" />
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-gray-900 italic mb-8 leading-relaxed">
            "{currentReview.quote}"
          </blockquote>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? "w-8 bg-black"
                      : "w-6 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={prevReview}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
