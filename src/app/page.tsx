import SensoryHero from "../components/SensoryHero";
import UnifiedEngine from "../components/UnifiedEngine";
import CaseStudies from "../components/CaseStudies";
import SprintDelivery from "../components/SprintDelivery";
import TactileFounder from "../components/TactileFounder";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <SensoryHero />
      <UnifiedEngine />
      <div id="flagships">
        <CaseStudies />
      </div>
      <SprintDelivery />
      <TactileFounder />
      <FAQ isHomepage={true} />
    </>
  );
}
