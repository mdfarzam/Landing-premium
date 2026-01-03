import React from "react";

export const Features: React.FC = () => {
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
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C5.17595 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8241 18.4117 17 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
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
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Feature 2: G2, Upwork & Capterra Analysis */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10H21M7 15H8M12 15H13M6 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
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
              <svg
                className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9L12 16L5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Feature 3: Reddit Research Analysis */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="19"
                    cy="5"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="5"
                    cy="19"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M10.4 14.6L6.6 17.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.6 9.4L17.4 6.6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
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
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
