import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import JobsSection from "@/components/sections/JobsSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import ForEmployersCandidatesSection from "@/components/sections/ForEmployersCandidatesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <IndustriesSection />
        <JobsSection />
        <HowWeWorkSection />
        <ForEmployersCandidatesSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <PartnersSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
