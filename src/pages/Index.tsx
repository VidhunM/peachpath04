import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import CSRPartnerSection from "../components/CSRPartnerSection";
import OurPromiseSection from "../components/OurPromiseSection";
import WhyChooseSection from "../components/WhyChooseSection";
import ImpactEchoesSection from "../components/ImpactEchoesSection";
import PeachPodSection from "../components/PeachPodSection";
import NextCtaSection from "../components/NextCtaSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SuccessStoriesSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
