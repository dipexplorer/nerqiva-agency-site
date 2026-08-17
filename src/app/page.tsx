"use client";


import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionBuilder from "../components/SolutionBuilder";
import Process from "../components/Process";
import Technology from "../components/Technology";
import WhyUs from "../components/WhyUs";
import ClosingSection from "../components/ClosingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionBuilder />
      <Process />
      <Technology />
      <WhyUs />
      <ClosingSection />
    </>
  );
}