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
              High-Ticket Implementations & <span className="bg-linear-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500 bg-clip-text text-transparent font-black">Digital Flagships.</span>
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
                      {/* Live Iframe — ALWAYS rendered in background so real website shines through frosted glass */}
                      <iframe
                        src={project.demoUrl}
                        title={`${project.name} Live Flagship Preview`}
                        className={`absolute inset-0 w-full h-full border-none bg-white transition-opacity duration-300 ${
                          activeIframeId === project.id ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-95 z-0"
                        }`}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        loading="lazy"
                      />

                      {/* Pristine Frosted Glass Overlay with Apple-grade Capsule Badge */}
                      {activeIframeId !== project.id && (
                        <div 
                          onClick={() => setActiveIframeId(project.id)}
                          className="absolute inset-0 bg-white/50 dark:bg-zinc-950/60 backdrop-blur-[3px] hover:bg-white/30 dark:hover:bg-zinc-950/40 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer z-20 group/overlay select-none"
                        >
                          <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-6 py-3 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-zinc-200 dark:border-zinc-700/80 shadow-2xl backdrop-blur-xl rounded-full group-hover/overlay:scale-105 transition-transform duration-200 flex items-center gap-2.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <span>Click / Tap to Scroll Live Site</span>
                            <Sparkles size={13} className="text-amber-500 dark:text-amber-400 shrink-0" />
                          </div>
                          <span className="font-sans text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-2.5 drop-shadow-xs">
                            Interactive live preview loads on tap
                          </span>
                        </div>
                      )}

                      {/* Active Mode Exit Button */}
                      {activeIframeId === project.id && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveIframeId(null); }}
                          className="absolute top-3 right-3 z-30 bg-black/85 hover:bg-black text-white px-3.5 py-1.5 rounded-full shadow-2xl font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5"
                        >
                          Done scrolling ✕
                        </button>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-widest text-white/90 bg-black/70 border border-white/10 px-2.5 py-1 rounded backdrop-blur-md pointer-events-none z-30 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        FLAGSHIP_{project.number}
                      </div>

                      <div className="absolute top-4 right-4 font-mono text-[9px] font-bold uppercase tracking-widest text-white/90 bg-black/70 border border-white/10 px-2.5 py-1 rounded backdrop-blur-md pointer-events-none z-30">
                        {project.category}
                      </div>
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