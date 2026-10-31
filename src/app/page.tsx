import SensoryHero from "../components/SensoryHero";
import CaseStudies from "../components/CaseStudies";
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
      <TactileMixingBoard />
      <TactileFounder />
      <FAQ isHomepage={true} />
    </>
  );
}