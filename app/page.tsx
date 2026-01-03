import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import IntelligenceSection from "@/components/sections/Intelligence";
import MarketIntelligence from "@/components/sections/MarketIntelligence";
import CustomerTestimonials from "@/components/sections/Testimonials";
import CustomerReviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <IntelligenceSection />
      <MarketIntelligence />
      <CustomerTestimonials />
      <CustomerReviews />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
