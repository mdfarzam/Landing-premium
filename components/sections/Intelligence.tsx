import React from "react";

export default function IntelligenceSection() {
  const sources = [
    { name: "G2", sub: "Negative Reviews", icon: "G" },
    { name: "Upwork", sub: "Job Postings", icon: "up", active: true },
    { name: "Reddit", sub: "Threads", icon: "R" },
    { name: "App Store", sub: "Complaints", icon: "A" },
    { name: "Capterra", sub: "Software Reviews", icon: "C" },
  ];

  return (
    <div className="bg-white px-4 selection:bg-orange-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            INTEGRATED INTELLIGENCE
          </p>
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-6 tracking-tight">
            From Data to Opportunities
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We analyzed millions of user complaints to surface validated startup{" "}
            <br />
            opportunities.
          </p>
        </div>

        {/* Diagram Container - Increased gap and min-height for longer paths */}
        <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[600px] px-10">
          {/* Left Column: Sources */}
          <div className="flex flex-col gap-8 z-20 w-60">
            {sources.map((source, idx) => (
              <div key={idx} className="flex items-center group cursor-default">
                <div
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 ${
                    source.active
                      ? "border-orange-400 bg-white shadow-lg shadow-orange-100"
                      : "border-gray-100 bg-white shadow-sm group-hover:border-gray-300"
                  }`}
                >
                  <span
                    className={`font-bold text-lg ${
                      source.active ? "text-black" : "text-gray-900"
                    }`}
                  >
                    {source.icon}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-bold text-gray-900 leading-tight">
                    {source.name}
                  </h4>
                  <p className="text-xs text-gray-400">{source.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Connecting Lines (SVG) - Stretched Viewbox */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 1400 600"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Coordinates Explanation:
                  X=280: Start of lines (Left source column)
                  X=700: Center node (Deep Analysis)
                  X=1120: Start of right card
              */}

              {/* Left Side Connectors (Dotted) */}
              <path
                d="M 280 85 Q 500 85, 630 300"
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Active Line (Upwork) - Longer, smoother sweep */}
              <path
                d="M 280 175 Q 500 175, 630 300"
                stroke="#fb923c"
                strokeWidth="3"
              />

              <path
                d="M 280 265 Q 500 265, 630 300"
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <path
                d="M 280 355 Q 500 355, 630 300"
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <path
                d="M 280 445 Q 500 445, 630 300"
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Right Side Connector (Solid Orange) - Extended length */}
              <path d="M 770 300 L 1020 300" stroke="#fb923c" strokeWidth="3" />
            </svg>
          </div>

          {/* Center: Deep Analysis Node */}
          <div className="z-20 md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="bg-white border border-gray-100 rounded-[2.5rem] px-8 py-10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
              <h3 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">
                Deep Analysis
              </h3>
              <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                AI-POWERED PROCESSING
              </p>
            </div>
          </div>

          {/* Right Column: Active Opportunity Card */}
          <div className="z-20  w-[340px]">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-orange-500" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white text-sm font-bold">up</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Upwork Opportunities
                </h3>
              </div>

              <p className="text-sm font-black text-orange-600 uppercase tracking-widest mb-4">
                What We Found
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Market Gap Detected
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Discover what businesses are actively hiring for, revealing real
                pain points they're{" "}
                <span className="text-gray-900 font-medium underline decoration-orange-200 decoration-4 underline-offset-4">
                  willing to pay
                </span>{" "}
                to solve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
