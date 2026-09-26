"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Smartphone, Zap, ShieldCheck } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";

const CATEGORIES = ["ALL", "Beauty & Bridal", "Photography Studio", "Fitness & Wellness"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "ALL") return p.featured;
    return p.category === selectedCategory || p.type.includes(selectedCategory);
  });

  return (
    <section id="case-studies" className="py-16 sm:py-28 bg-transparent border-t border-border/30 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] bg-accent/10 border border-accent/20 text-accent rounded">
                CLIENT FLAGSHIPS & PROOF OF WORK
              </span>
              <div className="h-px w-8 bg-accent/30 hidden sm:block" />
            </div>
            <h2 className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight" style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)" }}>
              High-Ticket Implementations & <span className="text-accent-gold">Digital Flagships.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-text-secondary text-base leading-relaxed">
              Explore our live bespoke builds engineered for luxury MUAs, photographers, and studios. Each system includes sub-300ms speed, 1-click WhatsApp lead routing, and custom visual identity.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-border/20 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold border transition-all duration-300 cursor-pointer rounded ${
                selectedCategory === cat
                  ? "bg-accent border-accent text-white dark:text-bg-primary shadow-md shadow-accent/20"
                  : "bg-bg-secondary/70 text-text-secondary border-border/40 hover:border-accent/30 hover:text-text-primary"
              }`}
            >
              {cat === "ALL" ? "All Flagships" : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative glass-panel overflow-hidden flex flex-col justify-between border border-border/50 hover:border-accent/60 hover:shadow-[0_16px_40px_rgba(202,138,4,0.12)] transition-all duration-300 rounded backdrop-blur-2xl"
                onMouseLeave={() => setActiveIframeId(null)}
              >
                <div>
                  {/* Interactive Live Viewport Frame */}
                  {project.demoUrl ? (
                    <div className="w-full h-72 bg-bg-secondary relative overflow-hidden border-b border-border/40">
                      {activeIframeId === project.id ? (
                        <>
                          {/* Crystal-Clear Live Iframe — Zero Blur, Full Interactivity */}
                          <iframe
                            src={project.demoUrl}
                            title={`${project.name} Live Flagship Preview`}
                            className="absolute inset-0 w-full h-full border-none bg-white z-10 pointer-events-auto"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                          />

                          {/* Floating Exit Button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); setActiveIframeId(null); }}
                            className="absolute top-3 right-3 z-30 bg-black/90 hover:bg-black text-white px-3.5 py-1.5 rounded-full shadow-2xl font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5"
                          >
                            Close Live Preview ✕
                          </button>
                        </>
                      ) : (
                        /* Rich Architectural Showcase Card — Zero Lag, Ultra Clean */
                        <div 
                          onClick={() => setActiveIframeId(project.id)}
                          className="absolute inset-0 bg-linear-to-br from-zinc-900 via-bg-secondary to-zinc-950 flex flex-col justify-between p-6 cursor-pointer group select-none overflow-hidden"
                        >
                          {/* Ambient Gold Glow */}
                          <div 
                            aria-hidden
                            className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-accent-gold/15 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500"
                          />

                          {/* Top Badges Bar */}
                          <div className="w-full flex items-center justify-between z-10">
                            <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded font-bold border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              FLAGSHIP_{project.number}
                            </span>
                            <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded bg-black/40">
                              {project.category}
                            </span>
                          </div>

                          {/* Center Info & CTA */}
                          <div className="my-auto z-10 flex flex-col items-center text-center gap-2.5 max-w-sm mx-auto">
                            <div className="h-11 w-11 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold group-hover:scale-110 group-hover:bg-accent-gold group-hover:text-bg-primary transition-all duration-300 shadow-lg">
                              <Sparkles size={18} />
                            </div>

                            <div>
                              <h4 className="font-sans font-extrabold text-text-primary text-xl tracking-tight mb-1">
                                {project.name}
                              </h4>
                              <p className="font-sans text-text-secondary text-xs leading-relaxed line-clamp-2">
                                {project.tagline}
                              </p>
                            </div>

                            <div className="mt-1 bg-accent text-white dark:text-bg-primary px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest rounded shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform duration-200 flex items-center gap-2 border border-accent">
                              <span>Launch Interactive Live Site</span>
                              <ArrowRight size={13} />
                            </div>
                          </div>

                          {/* Bottom Footer Tags */}
                          <div className="w-full flex items-center justify-center gap-4 z-10 font-mono text-[9px] text-text-tertiary uppercase tracking-wider border-t border-white/5 pt-2.5">
                            <span>100% Mobile Optimized</span>
                            <span>•</span>
                            <span>Sub-300ms Latency</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={`w-full h-56 bg-linear-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center border-b border-border/40`}>
                      <div className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/50 border border-white/10 px-2.5 py-1 rounded backdrop-blur-md">
                        FLAGSHIP_{project.number}
                      </div>
                    </div>
                  )}

                  {/* Content Block */}
                  <div className="p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded font-bold border bg-accent/10 text-accent border-accent/20">
                        BESPOKE DIGITAL SYSTEM
                      </span>
                      <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[9px] font-bold tracking-widest">
                        <Zap size={10} />
                        <span>SUB-300MS LATENCY</span>
                      </div>
                    </div>

                    <h3 className="font-sans font-extrabold text-2xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {project.demoUrl ? (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {project.name}
                          <ExternalLink size={16} className="text-text-tertiary group-hover:text-accent transition-colors" />
                        </a>
                      ) : (
                        <Link href={`/work/${project.slug}`}>
                          {project.name}
                        </Link>
                      )}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-5 font-normal line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.map((tech) => (
                        <span key={tech} className="font-mono text-[9px] font-semibold text-text-tertiary bg-bg-secondary border border-border/40 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-7 pb-7 pt-0 border-t border-border/20 mt-auto">
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-1.5 text-text-tertiary font-mono text-[9px] tracking-wider uppercase font-semibold">
                      <Smartphone size={12} className="text-accent" />
                      <span>100% Mobile Conversion</span>
                    </div>

                    {project.demoUrl ? (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-text-primary font-mono uppercase tracking-widest font-bold transition-colors group/link"
                      >
                        <span>Launch Live Flagship</span>
                        <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link 
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-text-primary font-mono uppercase tracking-widest font-bold transition-colors group/link"
                      >
                        <span>View Details</span>
                        <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}