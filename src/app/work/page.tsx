"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Inbox } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import ClosingSection from "../../components/ClosingSection";

export default function WorkPage() {
  const [activeType, setActiveType] = useState<"all" | "client" | "demo">("all");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const typeParam = params.get("type");
      if (typeParam === "client" || typeParam === "all" || typeParam === "demo") {
        setActiveType(typeParam);
      }
    }
  }, []);

  const handleTypeChange = (type: "all" | "client" | "demo") => {
    setActiveType(type);
    setActiveCategory("All");
  };

  const filteredByType = PROJECTS.filter((project) => {
    if (activeType === "all") return true;
    return project.projectType === activeType;
  });

  const availableCategories = ["All", ...Array.from(new Set(filteredByType.map((p) => p.category)))];

  const filteredProjects = filteredByType.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <>
      <Head>
        <title>Work & Live Demos | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        
        {/* Page Header */}
        <div className="section-container mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="label-eyebrow text-emerald-400">SELECTED PORTFOLIO & LIVE DEMOS</span>
          </div>
          <h1 
            className="font-sans font-extrabold text-text-primary leading-[1.08] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)", letterSpacing: "-0.03em" }}
          >
            Crafted for <span className="text-accent">Impact.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-normal">
            Explore our collection of live interactive website themes, luxury portfolios, and custom digital systems. Click any demo below to test-drive the live website directly in your browser.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="section-container mb-12 max-w-5xl">
          <div className="flex flex-col gap-6 border-b border-border/40 pb-8">
            
            {/* Primary Type Filter Tabs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleTypeChange("all")}
                className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  activeType === "all"
                    ? "bg-accent text-white dark:text-bg-primary shadow-lg shadow-accent/25 border border-accent"
                    : "glass-panel text-text-secondary hover:text-text-primary border border-border/40 hover:border-accent/40"
                }`}
                style={{ borderRadius: "4px" }}
              >
                All Work ({PROJECTS.length})
              </button>

              <button
                onClick={() => handleTypeChange("demo")}
                className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeType === "demo"
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 border border-emerald-500"
                    : "glass-panel text-text-secondary hover:text-text-primary border border-border/40 hover:border-emerald-500/40"
                }`}
                style={{ borderRadius: "4px" }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo Themes ({PROJECTS.filter((p) => p.projectType === "demo").length})
              </button>

              <button
                onClick={() => handleTypeChange("client")}
                className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  activeType === "client"
                    ? "bg-accent text-white dark:text-bg-primary shadow-lg shadow-accent/25 border border-accent"
                    : "glass-panel text-text-secondary hover:text-text-primary border border-border/40 hover:border-accent/40"
                }`}
                style={{ borderRadius: "4px" }}
              >
                Client Systems ({PROJECTS.filter((p) => p.projectType === "client").length})
              </button>
            </div>

            {/* Sub-Category Filter Tags */}
            {availableCategories.length > 2 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest font-bold mr-2">
                  Category:
                </span>
                {availableCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1.5 text-[11px] font-sans font-semibold rounded transition-all duration-150 cursor-pointer ${
                      activeCategory === category
                        ? "bg-text-primary text-bg-primary shadow-sm"
                        : "text-text-secondary hover:text-text-primary bg-bg-secondary/40 hover:bg-bg-secondary/70 border border-border/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>
        
        {/* Project Interactive Grid */}
        <div className="section-container mb-32 max-w-5xl">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative glass-panel overflow-hidden flex flex-col justify-between hover:border-accent/60 hover:shadow-[0_12px_32px_rgba(124,58,237,0.12)] transition-all duration-300"
                  style={{ borderRadius: "4px" }}
                  onMouseLeave={() => setActiveIframeId(null)}
                >
                  <div>
                    {/* Visual Header / Accent Gradient / Screenshot */}
                    {project.projectType === "demo" && project.demoUrl ? (
                      <div 
                        className="w-full h-64 bg-bg-secondary relative overflow-hidden border-b border-white/5"
                      >
                        <iframe
                          src={project.demoUrl}
                          title={`${project.name} Live Preview`}
                          className={`absolute inset-0 w-full h-full border-none bg-white transition-opacity duration-300 ${
                            activeIframeId === project.id ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-90"
                          }`}
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                          loading="lazy"
                        />
                        
                        {activeIframeId !== project.id ? (
                          <div 
                            onClick={() => setActiveIframeId(project.id)}
                            className="absolute inset-0 bg-black/25 dark:bg-black/35 backdrop-blur-xs hover:backdrop-blur-none hover:bg-black/15 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 z-20 group/overlay"
                          >
                            <div className="bg-bg-primary/95 dark:bg-zinc-900/95 text-text-primary px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest border border-white/20 shadow-xl group-hover/overlay:scale-105 transition-transform duration-200 backdrop-blur-md" style={{ borderRadius: '3px' }}>
                              <span>Click / Tap to Scroll Live Site</span>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => setActiveIframeId(null)}
                            className="absolute top-3 right-3 z-30 bg-black/80 hover:bg-black text-white px-3 py-1 rounded-full shadow-lg font-sans font-semibold text-[10px] cursor-pointer border border-white/20 backdrop-blur-md transition-colors"
                          >
                            Done scrolling ✕
                          </button>
                        )}
                        
                        {/* Top Badge overlay */}
                        <div className="absolute top-4 left-4 font-mono text-[8px] font-bold uppercase tracking-widest text-white/70 bg-black/40 border border-white/5 px-2 py-0.5 rounded-[2px] backdrop-blur-xs pointer-events-none z-30">
                          PROJECT_{project.number}
                        </div>
                      </div>
                    ) : (
                      <div className={`w-full h-48 bg-linear-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 opacity-15 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                        
                        <svg className="w-16 h-16 text-white/30 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="8" rx="1" />
                          <rect x="2" y="14" width="20" height="8" rx="1" />
                          <line x1="6" y1="6" x2="6.01" y2="6" />
                          <line x1="6" y1="18" x2="6.01" y2="18" />
                        </svg>

                        <div className="absolute top-4 left-4 font-mono text-[8px] font-bold uppercase tracking-widest text-white/70 bg-black/40 border border-white/5 px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
                          PROJECT_{project.number}
                        </div>
                      </div>
                    )}

                    {/* Content Block */}
                    <div className="p-8 pb-4">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] font-bold border ${
                          project.projectType === "demo"
                            ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                            : "bg-accent/10 text-accent border-accent/20"
                        }`}>
                          {project.projectType === "demo" ? "DEMO THEME" : "CLIENT PROJECT"}
                        </span>
                        <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest font-semibold">
                          {project.type}
                        </span>
                      </div>

                      <h3 className="font-sans font-extrabold text-2xl text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
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

                      <p className="text-text-secondary text-sm leading-relaxed mb-4 font-light line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div>
                    {/* Action Footer */}
                    <div className="px-8 pb-8">
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="font-mono text-[8px] text-text-tertiary uppercase tracking-wider font-semibold">
                          100% MOBILE OPTIMIZED
                        </span>
                        {project.projectType === "demo" && project.demoUrl ? (
                          <a 
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-text-primary font-mono uppercase tracking-widest font-bold transition-colors group/link"
                          >
                            Website Preview
                            <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <Link 
                            href={`/work/${project.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-text-primary font-mono uppercase tracking-widest font-bold transition-colors group/link"
                          >
                            Website Preview
                            <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="glass-panel p-16 flex flex-col items-center justify-center text-center max-w-2xl mx-auto border border-border/40" style={{ borderRadius: "6px" }}>
              <div className="h-12 w-12 rounded-full bg-bg-secondary flex items-center justify-center text-text-tertiary mb-4">
                <Inbox size={20} />
              </div>
              <h3 className="font-sans font-bold text-lg text-text-primary mb-2">No projects found</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
                No matching projects under the &ldquo;{activeCategory}&rdquo; category.
              </p>
              <button
                onClick={() => {
                  setActiveType("all");
                  setActiveCategory("All");
                }}
                className="px-5 py-2.5 bg-accent text-white dark:text-bg-primary font-mono text-[10px] font-bold uppercase tracking-widest rounded hover:bg-accent-mid transition-colors shadow-md cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
        <ClosingSection />
      </div>
    </>
  );
}
