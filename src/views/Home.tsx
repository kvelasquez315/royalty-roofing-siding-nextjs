import BottomFormSection from "@/components/BottomFormSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HonestAssessmentSection from "@/components/HonestAssessmentSection";
import MaterialsSection from "@/components/MaterialsSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import SidingCostSection from "@/components/SidingCostSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TeamBannerSection from "@/components/TeamBannerSection";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HonestAssessmentSection />
      <MaterialsSection />
      <ReviewsSection />
      <TeamBannerSection />
      <SidingCostSection />
      <BottomFormSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
