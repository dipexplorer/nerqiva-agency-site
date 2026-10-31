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
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProject]);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "ALL") return p.featured;
    return p.category === selectedCategory || p.type.includes(selectedCategory);
  });

  const openModal = (project: Project) => {
    setActiveModalProject(project);
    setModalImageIndex(0);
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
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Dialog Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-primary border border-border rounded-3xl shadow-2xl z-10 flex flex-col no-scrollbar"
              >
                {/* Modal Top Bar */}
                <div className="sticky top-0 z-20 px-4 sm:px-6 py-3.5 sm:py-4 bg-bg-primary/95 backdrop-blur-md border-b border-border flex items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2.5 min-w-0">
                    <span className="font-display font-black text-lg sm:text-xl text-text-primary tracking-tight truncate">
                      {activeModalProject.name}
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-text-secondary truncate">
                      {activeModalProject.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {activeModalProject.demoUrl && (
                      <a
                        href={activeModalProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!hidden sm:!inline-flex btn-primary py-1.5 px-3 text-xs font-bold items-center gap-1.5 shadow-sm"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink size={12} />
                      </a>
                    )}

                    <button
                      onClick={closeModal}
                      className="p-1.5 sm:p-2 rounded-full bg-bg-secondary hover:bg-border text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                      aria-label="Close Case Modal"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 flex flex-col gap-8">
                  
                  {/* Active Showcase */}
                  <div className="flex flex-col gap-3">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border bg-zinc-950 shadow-inner">
                      <img
                        src={
                          activeModalProject.gallery?.[modalImageIndex] ||
                          activeModalProject.desktopImage ||
                          activeModalProject.heroImage ||
                          "/images/projects/lablink/desktop.png"
                        }
                        alt={`${activeModalProject.name} View ${modalImageIndex + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Gallery Thumbnails */}
                    {activeModalProject.gallery && activeModalProject.gallery.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                        {activeModalProject.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setModalImageIndex(idx)}
                            className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                              modalImageIndex === idx ? "border-text-primary scale-105 shadow-md" : "border-border opacity-70 hover:opacity-100"
                            }`}
                          >
                            <img src={img} alt="thumbnail" className="w-full h-full object-cover object-top" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Case Breakdown Grid */}
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 flex flex-col gap-6">
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-2">
                          Commercial Challenge
                        </h4>
                        <p className="text-text-primary text-base leading-relaxed">
                          {activeModalProject.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-2">
                          Engineering Approach &amp; Solution
                        </h4>
                        <p className="text-text-secondary text-base leading-relaxed">
                          {activeModalProject.approach}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-2">
                          Measurable Outcome
                        </h4>
                        <div className="p-4 rounded-xl bg-bg-secondary border border-border text-sm text-text-primary leading-relaxed">
                          {activeModalProject.outcome}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-6 border-t md:border-t-0 md:border-l border-border/60 pt-6 md:pt-0 md:pl-6">
                      {activeModalProject.metrics && (
                        <div>
                          <h5 className="font-mono text-xs uppercase tracking-wider text-text-tertiary font-bold mb-3">
                            Key Metrics
                          </h5>
                          <div className="space-y-3">
                            {activeModalProject.metrics.map((m, idx) => (
                              <div key={idx} className="p-3 rounded-lg bg-bg-secondary border border-border">
                                <div className="font-display font-black text-xl text-text-primary">{m.value}</div>
                                <div className="text-xs text-text-secondary mt-0.5">{m.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h5 className="font-mono text-xs uppercase tracking-wider text-text-tertiary font-bold mb-3">
                          Domain &amp; Deployment
                        </h5>
                        <p className="font-mono text-xs text-text-secondary">
                          {activeModalProject.domain || "Bespoke System"}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border flex flex-col gap-2.5">
                        <a
                          href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20am%20interested%20in%20a%20flagship%20build%20like%20${encodeURIComponent(activeModalProject.name)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary py-2.5 px-4 text-xs font-bold text-center w-full shadow-md"
                        >
                          Discuss Similar Build
                        </a>

                        <Link
                          href={`/work/${activeModalProject.slug}`}
                          className="btn-secondary py-2 px-4 text-xs font-bold text-center w-full"
                        >
                          Full Case Article →
                        </Link>
                      </div>
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