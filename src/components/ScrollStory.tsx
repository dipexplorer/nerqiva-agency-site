"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import NerveWorld from "./NerveWorld";

gsap.registerPlugin(ScrollTrigger);

const STATES = [
  {
    id: "discover",
    label: "01 / DISCOVER",
    title: "Understand the\nreal problem.",
    body: "Before any solution, we need clarity on what's actually broken — and why.",
  },
  {
    id: "define",
    label: "02 / DEFINE",
    title: "Find the\nright direction.",
    body: "Strategy is choosing what to build — and what not to. We align on the approach before writing a line of code.",
  },
  {
    id: "design",
    label: "03 / DESIGN",
    title: "Shape the\nexperience.",
    body: "Design is how complex ideas become simple interactions. Every decision is made with the end user in mind.",
  },
  {
    id: "build",
    label: "04 / BUILD",
    title: "Engineer\nthe system.",
    body: "We build to production standards — clean architecture, tested code, and systems that scale beyond the first version.",
  },
  {
    id: "launch",
    label: "05 / LAUNCH",
    title: "Deliver something\npeople can use.",
    body: "A shipped product is worth infinitely more than a perfect concept. We move fast and deploy with confidence.",
  },
  {
    id: "evolve",
    label: "06 / EVOLVE",
    title: "Improve.\nScale. Grow.",
    body: "A launch is a beginning. We build systems designed to adapt, improve, and expand as your business grows.",
  },
];

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [currentState, setCurrentState] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=600%", // 600vh height
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const stateIndex = Math.floor(self.progress * 5.99);
        setCurrentState(stateIndex);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full relative bg-bg-primary overflow-hidden">
      
      {/* Background Canvas */}
      <NerveWorld state={currentState} />

      <div ref={stickyRef} className="absolute inset-0 z-10 flex flex-col justify-center section-container">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Timeline Indicators */}
          <div className="hidden md:flex flex-col gap-8">
            {STATES.map((s, i) => (
              <div 
                key={s.id} 
                className={`font-mono text-sm tracking-widest transition-colors duration-500 ${currentState === i ? 'text-accent font-bold' : 'text-text-tertiary'}`}
              >
                {s.label}
              </div>
            ))}
          </div>

          {/* Active State Content */}
          <div className="relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentState}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-6 md:hidden">
                  <span className="label-eyebrow text-accent">{STATES[currentState].label}</span>
                </div>
                
                <h2 className="font-sans font-extrabold text-text-primary text-5xl md:text-6xl leading-[1.1] mb-6 whitespace-pre-line tracking-tight">
                  {STATES[currentState].title}
                </h2>
                
                <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                  {STATES[currentState].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}