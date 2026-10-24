"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Inbox, CheckCircle2, MousePointer2, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/projects";
import ClosingSection from "./ClosingSection";

const CATEGORY_TABS = [
  { id: "all", label: "All Flagships" },
  { id: "beauty", label: "Beauty & Bridal", match: ["Beauty & Bridal", "Luxury Bridal", "Studio & Academy"] },
  { id: "studios", label: "Photography & Studios", match: ["Photography Studio", "Luxury Wedding Photography"] },
  { id: "fitness", label: "Fitness & Training", match: ["Fitness & Wellness"] },
];

export default function WorkCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;
    const tab = CATEGORY_TABS.find((t) => t.id === activeCategory);
    return tab?.match ? tab.match.includes(project.category) : true;
  });

  return (
    <div className="pt-28 sm:pt-36 relative z-20">
      
      {/* Page Header: Pure Typographic Authority without AI Kicker */}
      <div className="section-container mb-14 sm:mb-20 max-w-4xl">
        <h1 
          className="font-serif text-text-primary leading-[1.08] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)", letterSpacing: "-0.03em" }}
        >
          Crafted for <span className="italic font-normal text-accent">commercial impact</span>.
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          Explore our portfolio of live interactive digital flagships, luxury boutique lookbooks, and high-converting local client funnels. Click any flagship to test-drive directly in your browser.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="section-container mb-12 sm:mb-16 max-w-5xl">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pb-6 border-b border-border/40">
          {CATEGORY_TABS.map((tab) => {
            const isSelected = activeCategory === tab.id;
            const count = tab.id === "all" 
              ? PROJECTS.length 
              : PROJECTS.filter((p) => tab.match?.includes(p.category)).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 font-mono text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? "bg-accent text-white border-accent shadow-xs"
                    : "bg-bg-card text-text-secondary border-border/70 hover:border-accent/40 hover:text-text-primary"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-white/20 text-white" : "bg-bg-secondary text-text-tertiary"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Project Interactive Grid */}
      <div className="section-container mb-24 sm:mb-32 max-w-5xl">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative card-luxury p-0 rounded-2xl overflow-hidden flex flex-col justify-between bg-bg-card border border-border/70 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                onMouseLeave={() => setActiveIframeId(null)}
              >
                <div>
                  {/* Live Iframe Viewport (Crisp, High-Fidelity) */}
                  {project.projectType === "demo" && project.demoUrl ? (
                    <div className="w-full h-64 bg-bg-secondary relative overflow-hidden border-b border-border/40">
                      <iframe
                        src={project.demoUrl}
                        title={`${project.name} Live Preview`}
                        className={`absolute inset-0 w-full h-full border-none bg-white transition-opacity duration-300 ${
                          activeIframeId === project.id ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-100 z-0"
                        }`}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        loading="lazy"
                      />

                      {/* Clean Overlay Controls */}
                      {activeIframeId !== project.id && (
                        <div className="absolute inset-0 bg-transparent hover:bg-black/5 dark:hover:bg-black/15 transition-all duration-300 flex flex-col items-center justify-end pb-4 sm:pb-5 px-4 text-center z-20 group/overlay select-none">
                          {/* Mobile Direct Tap Link */}
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:hidden bg-bg-primary/95 text-text-primary px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-border shadow-lg rounded-full flex items-center gap-2"
                          >
                            <span className="h-2 w-2 rounded-full bg-accent animate-pulse shrink-0" />
                            <span>Open Live Demo</span>
                            <ExternalLink size={11} className="text-accent shrink-0" />
                          </a>

                          {/* Desktop Tap to Scroll Pill */}
                          <div
                            onClick={() => setActiveIframeId(project.id)}
                            className="hidden sm:flex bg-bg-primary/95 text-text-primary px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider border border-border shadow-xl backdrop-blur-md rounded-full group-hover/overlay:scale-105 transition-all duration-200 items-center gap-2 cursor-pointer"
                          >
                            <span className="h-2 w-2 rounded-full bg-accent animate-pulse shrink-0" />
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
                      
                      {/* Curated Taxonomy Chip */}
                      <div className="absolute top-3.5 left-3.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white bg-black/75 border border-white/15 px-2.5 py-1 rounded-full backdrop-blur-md pointer-events-none z-30 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Curated Build · {project.number}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-bg-secondary relative overflow-hidden flex items-center justify-center border-b border-border/40">
                      <div className="absolute top-3.5 left-3.5 font-mono text-[9px] font-bold uppercase tracking-wider text-text-secondary bg-bg-card border border-border px-2.5 py-1 rounded-full">
                        Curated Build · {project.number}
                      </div>
                    </div>
                  )}

                  {/* Content Block */}
                  <div className="p-7 sm:p-8 pb-4">
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-bold border bg-accent/10 text-accent border-accent/20">
                        Live Flagship
                      </span>
                      <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-2xl text-text-primary mb-2.5 tracking-tight group-hover:text-accent transition-colors duration-200">
                      {project.projectType === "demo" && project.demoUrl ? (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          {project.name}
                        </a>
                      ) : (
                        <Link href={`/work/${project.slug}`}>
                          {project.name}
                        </Link>
                      )}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4 font-normal line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Action Footer */}
                  <div className="px-7 sm:px-8 pb-7">
                    <div className="flex items-center justify-between border-t border-border/40 pt-5">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent-gold font-semibold uppercase tracking-wider">
                        <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                        <span>Sub-300ms Verified</span>
                      </div>
                      
                      {project.projectType === "demo" && project.demoUrl ? (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-mid font-mono uppercase tracking-wider font-bold transition-colors group/link"
                        >
                          <span>Launch Flagship</span>
                          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link 
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-mid font-mono uppercase tracking-wider font-bold transition-colors group/link"
                        >
                          <span>View Details</span>
                          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}

            {/* 8th Slot: Architectural Commission Card (Eliminates the Orphan Void in 2-Col Grid) */}
            {activeCategory === "all" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card-luxury border border-dashed border-accent/40 bg-accent/5 rounded-2xl p-7 sm:p-9 flex flex-col justify-between"
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

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-text-primary mb-3.5 tracking-tight">
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
                      <span>100% code ownership, zero monthly software lock-in</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/918724932985?text=Hi%20NERQIVA!%20I'm%20ready%20to%20commission%20a%20digital%20flagship%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <span>Commission Your Flagship</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="card-luxury p-16 flex flex-col items-center justify-center text-center max-w-2xl mx-auto border border-border/40 rounded-2xl">
            <div className="h-12 w-12 rounded-full bg-bg-secondary flex items-center justify-center text-text-tertiary mb-4">
              <Inbox size={20} />
            </div>
            <h3 className="font-sans font-bold text-lg text-text-primary mb-2">No projects found</h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              No matching projects in this category.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="px-5 py-2.5 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-accent-mid transition-colors shadow-xs cursor-pointer"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
      
      <ClosingSection />
    </div>
  );
}
