import SensoryHero from "../components/SensoryHero";
import ProblemSection from "../components/ProblemSection";
import UnifiedEngine from "../components/UnifiedEngine";
import CaseStudies from "../components/CaseStudies";
import SprintDelivery from "../components/SprintDelivery";
import TactileFounder from "../components/TactileFounder";
import FAQ from "../components/FAQ";
import ClosingSection from "../components/ClosingSection";

export default function Home() {
  return (
    <>
      <SensoryHero />
      <ProblemSection />
      <UnifiedEngine />
      <div id="flagships">
        <CaseStudies />
      </div>
      <SprintDelivery />
      <TactileFounder />
      <FAQ isHomepage={true} />
      <ClosingSection />
    </>
  );
}
