import { MessageSquareIcon, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-white to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <div className="flex items-center space-x-1.5 cursor-pointer">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg transform rotate-12"></div>
          <span className="text-base font-bold text-gray-900">MarketVault</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center space-x-1 cursor-pointer">
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
          <button className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
            Log in
          </button>
          <button className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-1.5 text-sm cursor-pointer">
            <span>Sign up</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-10 mt-14 text-center">
        <h1 className="text-5xl font-sem text-gray-900 mb-6 leading-tight">
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

        <div className="flex justify-center items-center gap-3">
          <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center space-x-1.5 cursor-pointer">
            <span>Find Proven Problems</span>
          </button>

          <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center space-x-1.5 underline cursor-pointer">
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
              <Star key={star} className="w-4 h-4 text-black fill-current" />
            ))}
          </div>

          <span className="text-sm text-gray-700">
            <span className="font-bold">5000+</span> entrepreneurs finding
            proven problems
          </span>
        </div>
      </main>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center">
        <MessageSquareIcon className="text-white" />
      </button>
    </div>
  );
}
