import SensoryHero from "../components/SensoryHero";
import CaseStudies from "../components/CaseStudies";
import TactileFounder from "../components/TactileFounder";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <SensoryHero />
      <div id="flagships">
        <CaseStudies />
      </div>
      <TactileFounder />
      <FAQ isHomepage={true} />
    </>
  );
}