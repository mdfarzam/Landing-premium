import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <div className="flex items-center space-x-1.5">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg transform rotate-12"></div>
          <span className="text-base font-bold text-gray-900">BigIdeasDB</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center space-x-1">
            <span>Features</span>
          </button>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            LaunchDB
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            Live Data
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            Case Study
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            FAQ
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            Demo
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            Pricing
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <button className="text-sm text-gray-700 hover:text-gray-900">
            Log in
          </button>
          <button className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-1.5 text-sm">
            <span>Sign up</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-10 mt-14 text-center">
        <h1 className="text-5xl font-sans font-semibold text-gray-900 mb-6 leading-tight">
          Find Proven Problems.
          <br />
          Build Your Next
          <br />
          Successful Venture.
        </h1>

        <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto">
          The only{" "}
          <span className="font-bold text-gray-900">AI-powered platform</span>{" "}
          that analyzes{" "}
          <span className="font-bold text-gray-900">
            millions of user
            <br /> complaints
          </span>{" "}
          across multiple platforms to show you exactly what
          <br />{" "}
          <span className="font-bold text-gray-900">
            products people actually want.
          </span>
        </p>

        <div className="flex flex-col items-center space-y-3">
          <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center space-x-1.5">
            <span>Find Proven Problems</span>
          </button>

          <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center space-x-1.5">
            <span>Read Our Manifesto</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center space-x-2">
          <div className="flex -space-x-1.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
          </div>

          <div className="flex items-center space-x-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <span className="text-sm text-gray-700">
            <span className="font-bold">5000+</span> entrepreneurs finding
            proven problems
          </span>
        </div>
      </main>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"></button>
    </div>
  );
};
