import { Seo } from "@/components/Seo";
import { defaultSEO } from "@/lib/seoConfig";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GallerySection } from "@/components/home/GallerySection";

export default function HomePage() {
  return (
    <>
      <Seo
        title={defaultSEO.title}
        description={defaultSEO.description}
      />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <EmergencyBanner />
      <ProcessSection />
      <GallerySection />
    </>
  );
}

