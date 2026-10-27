"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, MousePointer2, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "../data/projects";

const CATEGORIES = ["ALL", "Healthcare & Diagnostics", "Beauty & Bridal", "Photography Studio", "Fitness & Wellness"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState<Record<string, boolean>>({});

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "ALL") return p.featured;
    return p.category === selectedCategory || p.type.includes(selectedCategory);
  });

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-transparent border-t border-border/30 relative">
      <div className="section-container relative z-10">
        
        {/* Section Header: Authoritative Fraunces Display, No Kicker Gimmick */}
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <h2
              className="font-display font-black text-text-primary text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              High-Ticket Implementations{" "}
              <span className="font-serif italic font-normal text-accent">
                &amp; Live Flagships.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-text-secondary text-base leading-relaxed">
              Explore our live bespoke builds engineered for healthcare providers, luxury MUAs, photographers, and studios. Each system includes sub-second speed, 1-click WhatsApp lead routing, and custom visual identity.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-10 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap shrink-0 px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold border transition-all duration-200 cursor-pointer rounded-full ${
                selectedCategory === cat
                  ? "bg-accent text-text-inverted border-accent shadow-sm"
                  : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
              }`}
            >
              {cat === "ALL" ? "All Flagships" : cat}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between text-text-secondary font-mono text-[10px] tracking-wider uppercase mb-3 px-1">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Swipe Projects Left/Right
          </span>
          <span>{filteredProjects.length + (selectedCategory === "ALL" ? 1 : 0)} Total</span>
        </div>

        {/* Project Cards Grid (Desktop 2-Col Grid / Mobile Swipe Carousel) */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none no-scrollbar grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="w-[85vw] sm:w-full shrink-0 snap-center group relative card-luxury overflow-hidden flex flex-col justify-between border border-border hover:border-accent/40 hover:shadow-xl transition-all duration-300 rounded-2xl bg-bg-card"
                onMouseLeave={() => setActiveIframeId(null)}
              >
                <div>
                  {/* Interactive Live Viewport Frame */}
                  {project.demoUrl ? (
                    <div className="w-full h-56 sm:h-72 bg-bg-secondary relative overflow-hidden border-b border-border/50">
                      {/* Real UI Poster / Instant High-Res Visual */}
                      {project.gallery?.[0] && (
                        <img
                          src={project.gallery[0]}
                          alt={`${project.name} UI Preview`}
                          className="absolute inset-0 w-full h-full object-cover object-top z-0"
                          loading="lazy"
                        />
                      )}

                      {/* Live Interactive Iframe */}
                      <iframe
                        src={project.demoUrl}
                        title={`${project.name} Live Flagship Preview`}
                        onLoad={() => setIframeLoaded((prev) => ({ ...prev, [project.id]: true }))}
                        className={`absolute inset-0 w-full h-full border-none transition-opacity duration-500 ${
                          !project.gallery?.[0] || iframeLoaded[project.id]
                            ? "opacity-100"
                            : "opacity-0"
                        } ${
                          activeIframeId === project.id
                            ? "pointer-events-auto z-10 bg-white"
                            : "pointer-events-none z-[5]"
                        }`}
                        loading="lazy"
                      />

                      {/* Clean Overlay Controls (No heavy blur veil) */}
                      {activeIframeId !== project.id && (
                        <div className="absolute inset-0 bg-transparent hover:bg-black/5 dark:hover:bg-black/15 transition-all duration-300 flex flex-col items-center justify-end pb-4 sm:pb-6 px-4 sm:px-6 text-center z-20 group/overlay select-none">
                          {/* Mobile Direct Tap Button */}
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:hidden bg-bg-primary/95 text-text-primary px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-border shadow-lg rounded-full flex items-center gap-2"
                          >
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <span>Open Live Demo</span>
                            <ExternalLink size={11} className="text-accent shrink-0" />
                          </a>

                          {/* Desktop Tap to Scroll Button */}
                          <div
                            onClick={() => setActiveIframeId(project.id)}
                            className="hidden sm:flex bg-bg-primary/95 text-text-primary px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider border border-border shadow-xl backdrop-blur-md rounded-full group-hover/overlay:scale-105 transition-all duration-200 items-center gap-2 cursor-pointer"
                          >
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <span>Tap to Scroll</span>
                            <MousePointer2 size={12} className="text-accent shrink-0" />
                          </div>
                        </div>
                      )}

                      {/* Active Mode Exit Button */}
                      {activeIframeId === project.id && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveIframeId(null); }}
                          className="absolute top-3 right-3 z-30 btn-primary shadow-xl font-mono text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all items-center gap-1.5 py-1.5 px-3"
                        >
                          Done scrolling ✕
                        </button>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 font-mono text-[9px] font-bold uppercase tracking-wider text-white bg-black/75 border border-white/15 px-2.5 py-1 rounded-full backdrop-blur-md pointer-events-none z-30 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Curated Build · {project.number}
                      </div>

                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 font-mono text-[9px] font-bold uppercase tracking-wider text-white bg-black/75 border border-white/15 px-2.5 py-1 rounded-full backdrop-blur-md pointer-events-none z-30">
                        {project.category}
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full h-48 sm:h-56 bg-bg-secondary relative overflow-hidden flex items-center justify-center border-b border-border/40`}>
                      <div className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-wider text-text-secondary bg-bg-card border border-border px-2.5 py-1 rounded-full">
                        Curated Build · {project.number}
                      </div>
                    </div>
                  )}

                  {/* Content Block */}
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold border bg-accent/10 text-accent border-accent/20">
                        {project.projectType === "client" ? "Live Client Platform" : "Bespoke System"}
                      </span>
                      <span className="font-mono text-[9px] text-accent-gold font-bold uppercase tracking-wider">
                        Verified Mobile Speed
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {project.demoUrl ? (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <span>{project.name}</span>
                          <ExternalLink size={14} className="text-text-tertiary group-hover:text-accent transition-colors" />
                        </a>
                      ) : (
                        <Link href={`/work/${project.slug}`}>
                          {project.name}
                        </Link>
                      )}
                    </h3>

                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 font-normal line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-0 border-t border-border/30 mt-auto">
                  <div className="flex items-center justify-between pt-3.5">
                    <span className="font-mono text-[10px] text-text-secondary tracking-wider uppercase font-semibold">
                      Direct WhatsApp Routing
                    </span>

                    {project.demoUrl ? (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-mid font-mono uppercase tracking-wider font-bold transition-colors group/link"
                      >
                        <span>Launch Flagship</span>
                        <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link 
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-mid font-mono uppercase tracking-wider font-bold transition-colors group/link"
                      >
                        <span>View Details</span>
                        <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 8th Slot: Architectural Inquiry Card (Eliminates the Orphan Void in 2-Col Grid) */}
            {selectedCategory === "ALL" && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: filteredProjects.length * 0.05 }}
                className="w-[85vw] sm:w-full shrink-0 snap-center card-luxury border border-dashed border-accent/40 bg-accent/5 rounded-2xl p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      Custom Commission · 08
                    </span>
                    <span className="font-mono text-[9px] text-accent-gold font-bold uppercase tracking-wider">
                      Accepting Q2 Projects
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mb-3.5 tracking-tight">
                    Commission Your Digital Flagship
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                    Have an established salon, studio, or clinic ready to outperform local competitors? We engineer custom bespoke systems delivered in 24–48 hours with 100% IP ownership.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <div className="flex items-center gap-2.5 text-xs text-text-secondary font-medium">
                      <CheckCircle2 size={15} className="text-accent-gold shrink-0" />
                      <span>Engineered specifically for your price tier &amp; clientele</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-text-secondary font-medium">
                      <CheckCircle2 size={15} className="text-accent-gold shrink-0" />
                      <span>Direct 1-tap WhatsApp lead funnel integration</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-text-secondary font-medium">
                      <CheckCircle2 size={15} className="text-accent-gold shrink-0" />
                      <span>Permanent one-time investment with zero recurring fees</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <Link
                    href="/contact"
                    className="btn-primary w-full py-3.5 text-xs font-mono font-bold tracking-wider inline-flex items-center justify-center gap-2"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight size={14} />
                  </Link>
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider block text-center mt-2.5">
                    Direct consultation · No forms or waitlists
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}