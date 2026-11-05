import type { Metadata } from "next";
import StructuredData from "./components/StructuredData";
import { SITE_URL } from "./lib/seo";
import Hero from "./components/Hero";
import TrustFeatures from "./components/TrustFeatures";
import ServiceCategories from "./components/ServiceCategories";
import Testimonials from "./components/Testimonials";
import HowItHelps from "./components/HowItHelps";
import Faq from "./components/Faq";
import HowItWorks from "./components/HowItWorks";
import FindHelp from "./components/FindHelp";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <StructuredData />
      <main id="main-content">
        <Hero />
        <HowItHelps />
        <TrustFeatures />
        <ServiceCategories />
        <Testimonials />
        <Faq />
        <HowItWorks />
        <FindHelp />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
