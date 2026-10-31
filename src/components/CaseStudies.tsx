"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";

const CATEGORIES = [
  "ALL",
  "Healthcare & Diagnostics",
  "Beauty & Bridal",
  "Fitness & Wellness",
  "Photography Studio",
];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [isMotionActive, setIsMotionActive] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveModalProject(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [activeModalProject]);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "ALL") return p.featured;
    return p.category === selectedCategory || p.type.includes(selectedCategory);
  });

  const openModal = (project: Project) => {
    setActiveModalProject(project);
    setIsMotionActive(true);
  };

  const closeModal = () => {
    setActiveModalProject(null);
  };

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative">
      <div className="section-container relative z-10">
        
        {/* Section Header: Clean & Confident */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.06]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Selected Works.
            </h2>
            <p className="mt-3 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              Curated digital flagships engineered for commercial conversion, sub-second mobile speeds, and verified WhatsApp booking funnels.
            </p>
          </div>

          {/* Category Filter Navigation */}
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-text-primary text-text-inverted shadow-sm"
                      : "bg-bg-secondary/70 text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                  }`}
                >
                  {cat === "ALL" ? "All Works" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimal Agency Works Grid (BestAgencySites inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const displayImage =
                project.desktopImage ||
                project.heroImage ||
                project.gallery?.[0] ||
                "/images/projects/lablink/desktop.png";
              const palette = project.colors || ["#18181B", "#71717A", "#D4D4D8"];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="group flex flex-col cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  {/* Visual Preview Container */}
                  <div className="relative aspect-[16/10.5] w-full rounded-2xl overflow-hidden bg-bg-secondary border border-border group-hover:border-accent/40 shadow-sm group-hover:shadow-xl transition-all duration-300">
                    {/* Live Client Flagship Indicator */}
                    {project.projectType === "client" && (
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 border border-white/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Client</span>
                      </div>
                    )}

                    {/* Quick External Link Button */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
                        title="Visit Live Site"
                        aria-label={`Visit ${project.name} Live`}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {/* Thumbnail Image */}
                    <img
                      src={displayImage}
                      alt={`${project.name} Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  {/* Minimal Meta Row (Title, Category, Color Palette Dots) */}
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary tracking-tight group-hover:text-accent transition-colors truncate">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary mt-0.5 truncate">
                        {project.category}
                      </p>
                    </div>

                    {/* Brand Palette Dots */}
                    <div className="flex items-center gap-1.5 shrink-0 pt-1.5" aria-hidden="true">
                      {palette.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-2.5 h-2.5 rounded-full shadow-inner border border-black/10 dark:border-white/15"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* In-Depth Case Study Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 lg:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Dialog Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 14 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-bg-primary border border-border/80 rounded-2xl sm:rounded-3xl shadow-2xl z-10 flex flex-col no-scrollbar"
                role="dialog"
                aria-modal="true"
                aria-label={`${activeModalProject.name} Case Showcase`}
              >
                {/* Modal Top Bar */}
                <div className="sticky top-0 z-30 px-5 sm:px-8 py-4 bg-bg-primary/95 backdrop-blur-md border-b border-border/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold tracking-wider text-text-tertiary uppercase">
                      Selected Works · 2026
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-bg-secondary text-[11px] font-mono text-text-secondary border border-border/60">
                      <span className={`w-1.5 h-1.5 rounded-full ${isMotionActive ? "bg-emerald-400 animate-pulse" : "bg-zinc-400"}`} />
                      <span>{isMotionActive ? "Live Motion" : "Paused"}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <button
                      onClick={() => setIsMotionActive((prev) => !prev)}
                      className="px-3 py-1.5 rounded-full border border-border/80 bg-bg-secondary/70 hover:bg-bg-secondary text-text-secondary hover:text-text-primary text-xs font-mono font-medium transition-colors cursor-pointer"
                      title={isMotionActive ? "Pause automated motion" : "Resume automated motion"}
                    >
                      {isMotionActive ? "Pause Motion" : "Resume Motion"}
                    </button>

                    {activeModalProject.demoUrl && (
                      <a
                        href={activeModalProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!hidden md:!inline-flex py-1.5 px-3.5 text-xs font-mono font-bold items-center gap-1.5 rounded-full bg-text-primary text-text-inverted hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink size={12} />
                      </a>
                    )}

                    <button
                      onClick={closeModal}
                      className="p-1.5 sm:p-2 rounded-full bg-bg-secondary hover:bg-border/80 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                      aria-label="Close Case Modal (Esc)"
                      title="Close (Esc)"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Modal Inner Content */}
                <div className="p-4 sm:p-6 lg:p-7 flex flex-col gap-4 sm:gap-6">
                  
                  {/* Top Narrative Row (Gray Sunderland Style: Confident Bold Display Title + Authentic Editorial Copy) */}
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2 border-b border-border/40">
                    <div className="max-w-3xl">
                      <h2
                        className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight leading-[1.05]"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {activeModalProject.name}
                      </h2>
                      <p className="mt-2 text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                        {activeModalProject.summary || activeModalProject.tagline}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0 text-xs font-mono">
                      <div className="text-left lg:text-right">
                        <span className="text-text-tertiary block text-[10px] uppercase tracking-wider">Scope &amp; Role</span>
                        <span className="font-semibold text-text-primary text-xs mt-0.5 block max-w-sm sm:max-w-md">
                          {activeModalProject.scope || "Architecture, UI/UX & WhatsApp Funnel"}
                        </span>
                      </div>
                      {activeModalProject.demoUrl && (
                        <a
                          href={activeModalProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-accent hover:underline flex items-center gap-1.5 text-xs pt-0.5"
                        >
                          <span>{activeModalProject.domain || "Visit Live"}</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Dual-Device Stage (Gray Sunderland Plates): Desktop Browser Window + Mobile Phone Chassis */}
                  <div className="rounded-2xl sm:rounded-3xl bg-bg-secondary/50 dark:bg-zinc-950/70 border border-border/70 p-3 sm:p-5 lg:p-6 flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-6 lg:gap-8 shadow-inner">
                    
                    {/* Device 1: Laptop / Desktop Browser Frame (.device--browser) */}
                    <div className="flex-1 w-full min-w-0 rounded-xl sm:rounded-2xl border border-zinc-300/80 dark:border-zinc-800 bg-zinc-900 shadow-xl overflow-hidden flex flex-col group/browser">
                      {/* Browser Chrome Header Rail */}
                      <div className="px-3 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3 text-xs select-none">
                        {/* 3 Window Dots */}
                        <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        </div>
                        
                        {/* Address Bar Pill */}
                        <div className="px-3 py-0.5 rounded-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 max-w-xs truncate shadow-xs">
                          <span className="text-zinc-400 text-[10px]">🔒</span>
                          <span className="truncate">{activeModalProject.domain || "nerqivastudio.in"}</span>
                        </div>

                        {/* Direct Link Tag */}
                        {activeModalProject.demoUrl && (
                          <a
                            href={activeModalProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] font-semibold text-accent hover:underline flex items-center gap-1 shrink-0"
                            title="Open live site in new tab"
                          >
                            <span>Live</span>
                            <ExternalLink size={10} />
                          </a>
                        )}
                      </div>

                      {/* Desktop Viewport with Continuous Motion */}
                      <div
                        className="relative w-full h-[200px] sm:h-[260px] lg:h-[300px] overflow-hidden bg-zinc-950 group/screen"
                        title="Desktop live site preview (pauses on hover)"
                      >
                        <img
                          src={
                            activeModalProject.fullDesktopImage ||
                            activeModalProject.desktopImage ||
                            activeModalProject.heroImage ||
                            "/images/projects/lablink/full_desktop.webp"
                          }
                          alt={`${activeModalProject.name} Desktop Live Site`}
                          className={`w-full h-auto object-cover object-top transition-transform duration-700 select-none ${
                            isMotionActive ? "animate-motion-desktop" : "motion-paused"
                          } group-hover/screen:[animation-play-state:paused]`}
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Device 2: Mobile Phone Frame (.device--phone) */}
                    <div
                      className="w-[145px] sm:w-[165px] lg:w-[180px] h-[280px] sm:h-[310px] lg:h-[340px] rounded-[24px] sm:rounded-[30px] border-[5px] sm:border-[7px] border-zinc-900 dark:border-zinc-900 bg-zinc-950 shadow-2xl relative overflow-hidden shrink-0 flex flex-col group/phone"
                      title="Mobile live site preview (pauses on hover)"
                    >
                      {/* Dynamic Island Pill */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-zinc-900 rounded-full z-20 pointer-events-none flex items-center justify-end pr-1 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      </div>

                      {/* Bottom Home Indicator */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full z-20 pointer-events-none" />

                      {/* Mobile Viewport with Continuous Motion */}
                      <div className="relative w-full h-full overflow-hidden bg-zinc-950">
                        <img
                          src={
                            activeModalProject.fullMobileImage ||
                            activeModalProject.mobileImage ||
                            activeModalProject.heroImage ||
                            "/images/projects/lablink/full_mobile.webp"
                          }
                          alt={`${activeModalProject.name} Mobile Live Site`}
                          className={`w-full h-auto object-cover object-top transition-transform duration-700 select-none ${
                            isMotionActive ? "animate-motion-mobile" : "motion-paused"
                          } group-hover/phone:[animation-play-state:paused]`}
                          loading="eager"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Modal Bottom CTA Bar: WhatsApp + Live Site */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Engineered by NERQIVA Studio</span>
                      <span className="text-text-tertiary">·</span>
                      <span className="text-text-tertiary">{activeModalProject.stack.slice(0, 3).join(", ")}</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20am%20interested%20in%20a%20flagship%20build%20like%20${encodeURIComponent(activeModalProject.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2.5 px-5 text-xs font-bold items-center gap-2 shadow-md flex-1 sm:flex-initial text-center justify-center"
                      >
                        <span>Discuss Similar Build on WhatsApp</span>
                        <ExternalLink size={13} />
                      </a>

                      {activeModalProject.demoUrl && (
                        <a
                          href={activeModalProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary py-2.5 px-4 text-xs font-bold items-center gap-1.5 flex-1 sm:flex-initial text-center justify-center"
                        >
                          <span>Visit Live Site</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}