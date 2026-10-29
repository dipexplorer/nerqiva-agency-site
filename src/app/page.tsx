import Hero from "../components/Hero";
import TransformationMatrix from "../components/TransformationMatrix";
import CaseStudies from "../components/CaseStudies";
import StudioStandard from "../components/StudioStandard";
import FounderSection from "../components/FounderSection";
import FAQ from "../components/FAQ";
import ClosingSection from "../components/ClosingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TransformationMatrix />
      <CaseStudies />
      <StudioStandard />
      <FounderSection />
      <FAQ />
      <ClosingSection />
    </>
  );
}