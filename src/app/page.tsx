import SensoryHero from "../components/SensoryHero";
import CaseStudies from "../components/CaseStudies";
import AntiAgencyManifesto from "../components/AntiAgencyManifesto";
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
      <AntiAgencyManifesto />
      <TactileMixingBoard />
      <TactileFounder />
      <FAQ isHomepage={true} />
    </>
  );
}