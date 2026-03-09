import Hero from "@/app/components/Hero";
import Credibility from "@/app/components/Credibility";
import Capabilities from "@/app/components/Capabilities";
import MissionParameters from "@/app/components/MissionParameters";
import Clients from "@/app/components/Clients";
import About from "@/app/components/About";
import BriefingCTA from "@/app/components/BriefingCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight">
      <Hero />
      <Credibility />

      <div className="h-20 md:h-28 bg-linear-to-b from-midnight via-bodyGray/30 to-white w-full" />
      <Capabilities />

      <div className="h-20 md:h-28 bg-linear-to-b from-white via-bodyGray/30 to-midnight w-full" />
      <MissionParameters />

      <div className="relative h-20 md:h-28 overflow-hidden bg-linear-to-b from-midnight via-camo-700/8 to-white">
        <div className="absolute inset-x-0 bottom-0 h-10 bg-white/30 blur-xl" />
      </div>

      <Clients />
      <About />

      <div className="relative h-10 md:h-14 overflow-hidden bg-linear-to-b from-white via-camo-700/5 to-midnight">
        <div className="absolute inset-x-0 top-0 h-6 bg-white/25 blur-lg" />
      </div>

      <BriefingCTA />
      <Footer />
    </div>
  );
}