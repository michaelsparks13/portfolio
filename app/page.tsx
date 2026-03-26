import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* Projects */}
      <ProjectShowcase />

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-border" />

      {/* About */}
      <AboutSection />

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-border" />

      {/* Skills */}
      <SkillsSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
