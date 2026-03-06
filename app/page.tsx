import Hero from "@/app/components/Hero";
import Credibility from "@/app/components/Credibility";
import Capabilities from "@/app/components/Capabilities";
import FieldOperatives from "@/app/components/FieldOperatives";
import MissionParameters from "@/app/components/MissionParameters";
import OpsMap from "@/app/components/OpsMap";
import Press from "@/app/components/Press";
import BriefingCTA from "@/app/components/BriefingCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight">
      <Hero />
      <Credibility />
      <Capabilities />
      <FieldOperatives />
      <MissionParameters />
      <OpsMap />
      <Press />
      <BriefingCTA />
      <Footer />
    </div>
  );
}