"use client";

import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionBuilder from "../components/SolutionBuilder";
import Solutions from "../components/Solutions";
import Process from "../components/Process";
import CaseStudies from "../components/CaseStudies";
import Technology from "../components/Technology";
import WhyUs from "../components/WhyUs";
import Credibility from "../components/Credibility";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navigation />

      <main className="bg-bg-primary text-text-primary selection:bg-accent/30 overflow-hidden">
        <Hero />
        <ProblemSection />
        <SolutionBuilder />
        <Solutions />
        <CaseStudies />
        <Process />
        <Technology />
        <WhyUs />
        <Credibility />
        <CTA />
      </main>

      <Footer />
    </>
  );
}