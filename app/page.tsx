import Hero from "./components/Hero";
import ServiceStrip from "./components/ServiceStrip";
import Features from "./components/Features";
import HowItHelps from "./components/HowItHelps";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <ServiceStrip />
      <Features />
      <HowItHelps />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  );
}
