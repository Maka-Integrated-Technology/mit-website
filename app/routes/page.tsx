import HeroSection from "./_sections/hero-section";
import AboutSection from "./_sections/about-section";
import MissionVisionSection from "./_sections/mission-vision-section";
import ValuesSection from "./_sections/values-section";
import ServicesSection from "./_sections/services-section";
import ProductsSection from "./_sections/products-section";
import LearningSection from "./_sections/learning-section";
import ImpactSection from "./_sections/impact-section";
import AudienceSection from "./_sections/audience-section";
import CTASection from "./_sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ValuesSection />
      <ServicesSection />
      <ProductsSection />
      <LearningSection />
      <ImpactSection />
      <AudienceSection />
      <CTASection />
    </div>
  );
}
