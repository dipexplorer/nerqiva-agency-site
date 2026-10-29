import SensoryHero from "../components/SensoryHero";
import CaseStudies from "../components/CaseStudies";
import TactileCassette from "../components/TactileCassette";
import TactileMixingBoard from "../components/TactileMixingBoard";
import TactileFounder from "../components/TactileFounder";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <SensoryHero />
      <div id="flagships">
        <CaseStudies />
      </div>
      <TactileCassette />
      <TactileMixingBoard />
      <TactileFounder />
      <FAQ />
    </>
  );
}