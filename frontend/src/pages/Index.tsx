import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";
import ManagementTeam from "@/components/ManagementTeam";
import Gallery from "@/components/Gallery";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";
import FloatingNotices from "@/components/News";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <Values />
        <ManagementTeam />
        <Gallery />
        <DonateSection />
      </main>
      <Footer />

      {/* Floating Notices & Updates Button */}
      <FloatingNotices />
    </div>
  );
};

export default Index;
