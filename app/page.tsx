import Hero from "./components/Hero";
import TrustFeatures from "./components/TrustFeatures";
import ServiceCategories from "./components/ServiceCategories";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import AvailableProfessionals from "./components/AvailableProfessionals";
import HowItHelps from "./components/HowItHelps";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <HowItHelps />
      <TrustFeatures />
      <AvailableProfessionals />
      <Features />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  );
}
