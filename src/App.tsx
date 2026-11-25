import { GallerySection } from "@/components/gallery/GallerySection";
import { Footer } from "@/components/layout/Footer";
import { IntroOverlay } from "@/components/layout/IntroOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { MenuJournal } from "@/components/menu/MenuJournal";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { ExperienceCtaSection } from "@/components/sections/ExperienceCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { SignatureSelectionSection } from "@/components/sections/SignatureSelectionSection";
import { VisitContactSection } from "@/components/sections/VisitContactSection";

export function App() {
  return (
    <div className="min-h-screen bg-espresso-deep text-cream">
      <IntroOverlay />
      <Navbar />

      <main>
        <HeroSection />
        <BrandIntroSection />
        <GallerySection />
        <SignatureSelectionSection />
        <MenuJournal />
        <PhilosophySection />
        <ExperienceCtaSection />
        <ReservationSection />
        <VisitContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
