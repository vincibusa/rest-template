import HomeSection from "@/components/Home";
import AboutSection from "@/components/About";
import GallerySection from "@/components/Gallery";
import ContactSection from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="relative">
      <HomeSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}