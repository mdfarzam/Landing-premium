import FAQ from "@/pages/Accordin";
import CTA from "@/pages/CTA";
import { Features } from "@/pages/Features";
import Footer from "@/pages/Footer";
import { Hero } from "@/pages/Hero";
import IntelligenceSection from "@/pages/Intelligence";
import MarketIntelligence from "@/pages/Intelligence2";
import CustomerTestimonials from "@/pages/Projects";
import CustomerReviews from "@/pages/Testimonial";

const page = () => {
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
};

export default page;
