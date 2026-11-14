import { buildMeta, organizationJsonLd } from "~/lib/utils/seo";
import HeroSection from "./_sections/hero-section";
import AboutSection from "./_sections/about-section";
import ServicesSection from "./_sections/services-section";
import ProductsSection from "./_sections/products-section";
import LearningSection from "./_sections/learning-section";
import ImpactSection from "./_sections/impact-section";
import CTASection from "./_sections/cta-section";

export function meta() {
  return buildMeta({
    title:
      "Maka Integrated Technology Limited | Technology, Product & Talent Development",
    path: "/",
    jsonLd: organizationJsonLd(),
  });
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <LearningSection />
      <ImpactSection />
      <CTASection />
    </div>
  );
}
