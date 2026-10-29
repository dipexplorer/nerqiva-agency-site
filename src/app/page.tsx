import Hero from "../components/Hero";
import CaseStudies from "../components/CaseStudies";
import AntiAgencyManifesto from "../components/AntiAgencyManifesto";
import ProjectConfigurator from "../components/ProjectConfigurator";
import FounderSection from "../components/FounderSection";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <AntiAgencyManifesto />
      <ProjectConfigurator />
      <FounderSection />
      <FAQ />
    </>
  );
}