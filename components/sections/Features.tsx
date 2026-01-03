import React from "react";
import {
  AppWindow,
  Search,
  MessageSquare,
  ArrowRight,
  PieChart,
  BarChart,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen  bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
            PLATFORM FEATURES
          </p>
          <h2 className="text-5xl font-sans font-semibold text-gray-900">
            Everything You Need
            <br />
            to Build Better Products
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 1: App Store Intelligence */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <AppWindow className="w-5 h-5 text-white" />
              </div>
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              App Store Intelligence
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Analyze mobile app reviews and discover user pain points across
              thousands of applications.
            </p>

            <button className="flex items-center space-x-1.5 text-sm text-gray-900 font-medium hover:gap-2.5 transition-all group">
              <span>Explore App Store Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Feature 2: G2, Upwork & Capterra Analysis */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-white" />
              </div>
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <BarChart className="w-5 h-5 text-white" />
              </div>
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              G2, Upwork & Capterra Analysis
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Discover market opportunities through comprehensive analysis of G2
              reviews, Upwork project demands, and Capterra insights.
            </p>

            <button className="flex items-center space-x-1.5 text-sm text-gray-900 font-medium hover:gap-2.5 transition-all group">
              <span>View Market Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Feature 3: Reddit Research Analysis */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Reddit Research Analysis
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Access curated databases of problems, solutions, and successful
              product strategies.
            </p>

            <button className="flex items-center space-x-1.5 text-sm text-gray-900 font-medium hover:gap-2.5 transition-all group">
              <span>See Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
