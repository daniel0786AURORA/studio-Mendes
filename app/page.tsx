import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { PlainLanguageSection } from "@/components/landing/plain-language-section";
import { StudioModelSection } from "@/components/landing/studio-model-section";
import { ScanSection } from "@/components/landing/scan-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { SnapshotSection } from "@/components/landing/snapshot-section";
import { SnapshotExplainerSection } from "@/components/landing/snapshot-explainer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <PlainLanguageSection />
      <SnapshotExplainerSection />
      <SnapshotSection />
      <StudioModelSection />
      <ScanSection />
      <HowItWorksSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
