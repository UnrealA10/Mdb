import { useEffect, useState } from "react";

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
  const [showNotices, setShowNotices] = useState(false);

  // Close on Escape for better UX
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowNotices(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

      <button
        type="button"
        onClick={() => setShowNotices((v) => !v)}
        aria-label="Toggle notices"
        aria-expanded={showNotices}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-white shadow-lg transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
                <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2a6 6 0 00-6 6v2.09c0 .48-.17.95-.47 1.32L4.3 13.9A1 1 0 005 15h14a1 1 0 00.8-1.6l-1.23-1.49c-.3-.37-.47-.84-.47-1.32V8a6 6 0 00-6-6zm0 20a3 3 0 002.995-2.824L15 19h-6a3 3 0 003 3z" />
        </svg>
        <span className="hidden sm:inline">Notices</span>
      </button>

      {showNotices && (
        <div className="fixed inset-0 z-40 flex items-end justify-end p-4 pointer-events-none">
          <div className="pointer-events-auto w-full bg-white max-w-md">
            <FloatingNotices />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
