import React from "react";

const CTA: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-orange-100">
      {/* SECTION 2: CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
            Ready to get started?
          </p>

          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-8 ">
            Start Building Something People Actually Want.
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 ">
            Skip the guesswork. Use real market data to validate your ideas and
            find profitable opportunities.
          </p>

          <div className="flex justify-center items-center gap-6">
            <button className="bg-black text-white px-10 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 transition-all shadow-lg group">
              Start Now
            </button>

            <button className="text-sm font-bold text-gray-400 flex items-center gap-2 hover:text-gray-600 transition-colors">
              See Live Data
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
