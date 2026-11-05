import Hero from "./components/Hero";
import TrustFeatures from "./components/TrustFeatures";
import ServiceCategories from "./components/ServiceCategories";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import AvailableProfessionals from "./components/AvailableProfessionals";
import HowItHelps from "./components/HowItHelps";
import Faq from "./components/Faq";
import HowItWorks from "./components/HowItWorks";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <HowItHelps />
      <TrustFeatures />
      <ServiceCategories />
      <Testimonials />
      <Faq />
      <HowItWorks />
      <AvailableProfessionals />
      <Features />
      <CtaSection />
      <Footer />
    </div>
  );
}
