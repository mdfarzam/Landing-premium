"use client";
import React, { useState } from "react";

const MarketIntelligence: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"g2" | "capterra" | "upwork">(
    "g2"
  );

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
            MARKET INTELLIGENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Transform Negative Feedback
            <br />
            Into Winning Product Ideas
          </h2>

          {/* Tabs */}
          <div className="flex justify-center items-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab("g2")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
                activeTab === "g2"
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 6V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </svg>
              <span>G2</span>
            </button>

            <button
              onClick={() => setActiveTab("capterra")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
                activeTab === "capterra"
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Capterra</span>
            </button>

            <button
              onClick={() => setActiveTab("upwork")}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
                activeTab === "upwork"
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-sm font-bold">up</span>
              <span>Upwork</span>
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Market Analysis */}
          <div className="lg:col-span-2 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Market Analysis
              </h3>
            </div>

            <p className="text-sm text-gray-700 mb-8 leading-relaxed">
              We analyze thousands of negative software reviews to reveal
              validated opportunities for better solutions.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L13 15L9 11L3 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 7H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 7V13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  Overall Sentiment
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Analyzes thousands of verified reviews to quantify user
                  satisfaction and detect negative sentiment trends.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="16"
                      cy="17"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M13 11L12 13M12 13L10 15M12 13L14 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  Key Pain Points
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Identifies and clusters recurring user complaints to pinpoint
                  the exact features and workflows causing friction.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  Proposed Solution
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Generates data-driven product concepts that directly address
                  the validated gaps in the market.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="bg-zinc-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 gap-x-8 py-16 gap-y-12">
              <div>
                <div className="text-5xl font-mono mb-2">350+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide leading-tight">
                  SOFTWARE
                  <br />
                  CATEGORIES
                </div>
              </div>

              <div>
                <div className="text-5xl font-mono mb-2">800+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide leading-tight">
                  COMPANIES
                  <br />
                  ANALYZED
                </div>
              </div>

              <div>
                <div className="text-5xl font-mono mb-2">850K+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide leading-tight">
                  NEGATIVE REVIEWS
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold mb-2">∞</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide leading-tight">
                  OPPORTUNITIES
                  <br />
                  FOUND
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketIntelligence;
