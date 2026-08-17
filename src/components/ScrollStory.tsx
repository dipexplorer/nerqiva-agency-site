"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { PROCESS_STEPS } from "../data/process";

// Dynamically import the 3D Hero Scene with SSR disabled to prevent hydration errors
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center bg-bg-primary">
      <div className="text-text-secondary animate-pulse-soft font-mono text-sm border border-border/50 px-4 py-2 rounded-full">
        Loading System Grid...
      </div>
    </div>
  ),
});

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-w: 768px)");
  const prefersReducedMotion = useReducedMotion();
  const [currentState, setCurrentState] = useState(0); // 0: Hero, 1-6: Process Steps

  useGSAP(() => {
    if (!containerRef.current || isMobile || prefersReducedMotion) return;

    // Pinning the hero section for the scroll story
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=500%", // 500vh scroll height
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        // Map progress (0 to 1) into 7 steps: 0 (Hero) to 6 (Evolve)
        const progress = self.progress;
        const totalStages = 7; // Hero + 6 stages
        const stageIndex = Math.min(
          totalStages - 1,
          Math.floor(progress * totalStages * 0.99)
        );
        setCurrentState(stageIndex);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: containerRef, dependencies: [isMobile, prefersReducedMotion] });

  // Render Left Column Content based on the current state index
  const renderTextContent = () => {
    if (currentState === 0) {
      // Initial Hero Display
      return (
        <motion.div
          key="hero-content"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="label-eyebrow text-accent">Digital Systems Studio</span>
          </div>

          <h1 className="font-sans font-extrabold text-text-primary leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.75rem, 5vw, 5.5rem)" }}>
            Ideas.<br />
            Engineered.<br />
            <span className="text-accent">Impact.</span><br />
            Delivered.
          </h1>

          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-sm">
            We turn complex problems into digital solutions that are <strong className="text-text-primary font-medium">simple, powerful, and scalable.</strong>
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-text-primary text-bg-primary font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-300 rounded-sm"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-transparent border border-border text-text-primary font-mono text-xs font-bold uppercase tracking-widest hover:border-text-primary transition-colors duration-300 rounded-sm"
            >
              Explore Work
            </a>
          </div>
        </motion.div>
      );
    }

    // Process States (1 to 6 mapped to discover -> evolve)
    const currentStep = PROCESS_STEPS[currentState - 1];

    return (
      <motion.div
        key={currentStep.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="label-eyebrow text-accent">
            {currentStep.number} / {currentStep.title}
          </span>
        </div>

        <h2 className="font-sans font-extrabold text-text-primary text-4xl md:text-5xl leading-[1.1] mb-6 tracking-tight">
          {currentStep.tagline}
        </h2>

        <p className="text-text-secondary text-base leading-relaxed max-w-md mb-6">
          {currentStep.description}
        </p>

        <ul className="grid grid-cols-2 gap-3">
          {currentStep.details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2 text-xs font-mono text-text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-bg-primary overflow-hidden">
      
      {/* 3D World Scene / Static Fallback Container */}
      {!isMobile && !prefersReducedMotion ? (
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0">
          <HeroScene state={currentState} />
        </div>
      ) : (
        // Mobile Layout / Reduced Motion Static Layout
        <div className="absolute right-0 top-1/4 md:top-0 w-full lg:w-1/2 h-2/3 lg:h-full z-0 opacity-10 pointer-events-none flex items-center justify-center">
          {/* A simple CSS architectural grid instead of a heavy image */}
          <div className="w-full h-full relative" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
      )}

      {/* Foreground Content Interface */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center section-container pt-20 pb-16">
        <div className="grid lg:grid-cols-[100px_1fr_1fr] gap-8 items-center h-full">
          
          {/* Vertical Progress Indicators (Hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-6 text-text-tertiary font-mono text-xs font-semibold select-none">
            <div 
              onClick={() => isMobile ? null : window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`flex items-center gap-4 cursor-pointer transition-colors duration-300 ${
                currentState === 0 ? "text-accent font-bold" : "hover:text-text-primary"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-accent transition-transform duration-300 ${
                currentState === 0 ? "scale-120" : "scale-0"
              }`} />
              HERO
            </div>
            
            {PROCESS_STEPS.map((step, idx) => {
              const stepIndex = idx + 1;
              const isActive = currentState === stepIndex;
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 transition-colors duration-300 ${
                    isActive ? "text-accent font-bold" : "hover:text-text-primary"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-accent transition-transform duration-300 ${
                    isActive ? "scale-120" : "scale-0"
                  }`} />
                  {step.number} {step.id.toUpperCase()}
                </div>
              );
            })}
          </div>

          {/* Dynamic Content Panel */}
          <div className="col-span-1 lg:max-w-xl h-[420px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {renderTextContent()}
            </AnimatePresence>
          </div>

          {/* Empty right column on desktop to leave room for the 3D scene */}
          <div className="hidden lg:block h-full" />
        </div>
      </div>
    </div>
  );
}