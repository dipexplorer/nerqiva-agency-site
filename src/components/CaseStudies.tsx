"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/projects";

export default function CaseStudies() {
  const [active, setActive] = useState(PROJECTS[0]?.id || "");

  return (
    <section id="work" className="py-24 bg-bg-primary border-t border-border/50">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="label-eyebrow text-accent">CASE STUDIES</span>
            </div>
            <h2 className="font-sans font-extrabold text-text-primary leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Engineering for <span className="text-accent">impact.</span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            We don't just build websites. We engineer systems that solve complex business problems.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-2">
          {PROJECTS.map((project) => {
            const isActive = active === project.id;
            
            return (
              <div 
                key={project.id}
                className={`border border-border/50 rounded-sm overflow-hidden transition-colors duration-500 ${isActive ? 'bg-bg-secondary' : 'bg-transparent hover:bg-white/5'}`}
              >
                {/* Header (Clickable) */}
                <button 
                  onClick={() => setActive(isActive ? "" : project.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="font-mono text-sm text-text-tertiary hidden md:block">{project.number}</span>
                    <h3 className={`font-sans font-bold text-2xl md:text-3xl transition-colors ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary hidden sm:block">
                      {project.type}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-transform duration-500 ${isActive ? 'rotate-180 bg-white/5' : ''}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-border/30 mt-2">
                        
                        <div className="grid lg:grid-cols-2 gap-12 pt-8">
                          {/* Left: Visual / Abstract representation */}
                          <div className={`w-full aspect-4/3 rounded-sm bg-linear-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                            {/* Abstract Tech Visual */}
                            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                            <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30" />
                            </div>
                          </div>

                          {/* Right: Details */}
                          <div className="flex flex-col justify-center">
                            <h4 className="text-xl font-bold text-text-primary mb-6">{project.tagline}</h4>
                            
                            <div className="mb-8">
                              <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-2 block">The Challenge</span>
                              <p className="text-sm text-text-secondary leading-relaxed">{project.challenge}</p>
                            </div>
                            
                            <div className="mb-8">
                              <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-2 block">Engineering</span>
                              <ul className="flex flex-col gap-2">
                                {project.engineering.map((item, i) => (
                                  <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                    <span className="text-accent mt-0.5">▹</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-3 block">Tech Stack</span>
                              <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => (
                                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[9px] text-text-secondary uppercase">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}