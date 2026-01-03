import React from "react";

const CustomerTestimonials: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-gray-500 uppercase tracking- mb-3">
            CUSTOMER TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Builders and Indie
            <br />
            Developers
          </h2>
          <p className="text-sm text-gray-600">
            See what our community is building
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 - Andiamo */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Screenshot */}
            <div className="bg-gray-50 h-50 flex items-center justify-center border-b border-gray-200"></div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Andiamo</h4>
              <p className="text-sm text-gray-600 mb-6 leading-">
                AI-powered travel planning platform that creates personalized
                itineraries based on your preferences and budget.
              </p>

              {/* Founder Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Khushiyant C.
                    </div>
                    <div className="text-xs text-gray-500">Founder</div>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                  <span>Visit</span>
                  <svg
                    className="w-4 h-4"
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

          {/* Card 2 - Cliqora */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Screenshot */}
            <div className="bg-gray-50 p-6 h-50 flex items-center justify-center border-b border-gray-200"></div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cliqora</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Secure photography sharing platform for professionals to share
                work with clients using advanced encryption and OTP
                verification.
              </p>

              {/* Founder Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Adeapa P.
                    </div>
                    <div className="text-xs text-gray-500">Founder</div>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                  <span>Visit</span>
                  <svg
                    className="w-4 h-4"
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

          {/* Card 2 - Cliqora */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Screenshot */}
            <div className="bg-gray-50 p-6 h-50 flex items-center justify-center border-b border-gray-200"></div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cliqora</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Secure photography sharing platform for professionals to share
                work with clients using advanced encryption and OTP
                verification.
              </p>

              {/* Founder Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Adeapa P.
                    </div>
                    <div className="text-xs text-gray-500">Founder</div>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                  <span>Visit</span>
                  <svg
                    className="w-4 h-4"
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

          {/* Card 2 - Cliqora */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Screenshot */}
            <div className="bg-gray-50 p-6 h-50 flex items-center justify-center border-b border-gray-200"></div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cliqora</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Secure photography sharing platform for professionals to share
                work with clients using advanced encryption and OTP
                verification.
              </p>

              {/* Founder Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Adeapa P.
                    </div>
                    <div className="text-xs text-gray-500">Founder</div>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                  <span>Visit</span>
                  <svg
                    className="w-4 h-4"
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

          {/* Card 2 - Cliqora */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Screenshot */}
            <div className="bg-gray-50 p-6 h-50 flex items-center justify-center border-b border-gray-200"></div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cliqora</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Secure photography sharing platform for professionals to share
                work with clients using advanced encryption and OTP
                verification.
              </p>

              {/* Founder Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Adeapa P.
                    </div>
                    <div className="text-xs text-gray-500">Founder</div>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                  <span>Visit</span>
                  <svg
                    className="w-4 h-4"
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

          {/* Card 3 - JobsAICopilot */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Screenshot */}
            <div className="bg-gray-50 p-6 h-50 flex items-center justify-center border-b border-gray-200"></div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                JobsAICopilot
              </h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                AI-powered service that automates the job search and application
                process (finding listings, filling out applications, tailoring
                resumes/cover letters, tracking your submissions) for users.
              </p>

              {/* Founder Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Alessandro T.
                    </div>
                    <div className="text-xs text-gray-500">Founder</div>
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                  <span>Visit</span>
                  <svg
                    className="w-4 h-4"
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
      </div>
    </div>
  );
};

export default CustomerTestimonials;
