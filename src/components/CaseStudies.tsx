"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, X, CheckCircle2, Layers, Cpu, ShieldCheck, Sparkles, Eye } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";

const CATEGORIES = ["ALL", "Healthcare & Diagnostics", "Beauty & Bridal", "Photography Studio", "Fitness & Wellness"];

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
    <section id="case-studies" className="py-20 sm:py-28 bg-transparent border-t border-border/30 relative">
      <div className="section-container relative z-10">
        
        {/* Section Header: Editorial & Confident */}
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
              Selected Work &amp; Flagship Builds
            </span>
            <h2
              className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Digital systems engineered for{" "}
              <span className="font-serif italic font-normal text-accent underline decoration-accent/20">
                commercial conversion.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-text-secondary text-base leading-relaxed">
              Explore our live bespoke builds engineered for healthcare providers, luxury MUAs, photographers, and studios. Sub-second mobile speeds, zero template bloat, and verified WhatsApp booking funnels.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap shrink-0 px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold border transition-all duration-200 cursor-pointer rounded-full ${
                selectedCategory === cat
                  ? "bg-accent text-text-inverted border-accent shadow-md shadow-accent/20"
                  : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
              }`}
            >
              {cat === "ALL" ? "All Flagships" : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid (Large Visual Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const displayImage = project.heroImage || project.gallery?.[0] || "/images/projects/lablink/desktop.png";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative flex flex-col justify-between border border-border hover:border-accent/50 rounded-3xl overflow-hidden bg-bg-card shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Visual Canvas Container */}
                  <div 
                    onClick={() => openModal(project)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-bg-secondary cursor-pointer"
                  >
                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-bg-primary/90 text-text-primary backdrop-blur-md rounded-full border border-border shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{project.projectType === "client" ? "Live Client Flagship" : "Bespoke System"}</span>
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-text-primary/80 text-text-inverted backdrop-blur-md rounded-full shadow-sm">
                        {project.number}
                      </span>
                    </div>

                    {/* High-Resolution Project Poster */}
                    <img
                      src={displayImage}
                      alt={`${project.name} UI Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Dark Subtle Vignette & Quick Action Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                      <span className="text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2">
                        <Eye size={14} className="text-accent-light" />
                        <span>Quick Inspect Case</span>
                      </span>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 rounded-full bg-white text-zinc-900 font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors flex items-center gap-1 shadow-lg"
                        >
                          <span>Visit Live</span>
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-5">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                          {project.category}
                        </span>
                        <span className="font-mono text-[11px] text-text-tertiary">
                          Sub-second 4G
                        </span>
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-[1.75rem] text-text-primary tracking-tight mb-2 group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Stack & Action Row */}
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-bg-secondary text-text-secondary font-mono text-[10px] font-medium border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => openModal(project)}
                        className="font-mono text-xs font-bold text-accent hover:text-accent-mid uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Case Details</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Case Inspector Modal (anfalova.art inspired dialog view) */}
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
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
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
              <div className="sticky top-0 z-20 px-6 py-4 bg-bg-primary/95 backdrop-blur-md border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-md bg-accent/10">
                    {activeModalProject.number}
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl text-text-primary tracking-tight">
                    {activeModalProject.name}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {activeModalProject.demoUrl && (
                    <a
                      href={activeModalProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex btn-primary py-1.5 px-3.5 text-xs font-bold items-center gap-1.5"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full bg-bg-secondary hover:bg-border text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                    aria-label="Close Case Modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-8">
                
                {/* Active Image Showcase */}
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border bg-bg-secondary shadow-inner">
                    <img
                      src={
                        activeModalProject.gallery?.[modalImageIndex] ||
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
                            modalImageIndex === idx ? "border-accent scale-105 shadow-md" : "border-border opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img src={img} alt="thumbnail" className="w-full h-full object-cover object-top" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Case Details Grid */}
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
                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-text-tertiary font-bold mb-3">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalProject.stack.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-bg-secondary text-text-primary font-mono text-xs border border-border"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-text-tertiary font-bold mb-3">
                        Industry &amp; Tier
                      </h5>
                      <p className="font-sans text-sm text-text-secondary font-medium">
                        {activeModalProject.category}
                      </p>
                      <p className="font-mono text-xs text-accent mt-1">
                        {activeModalProject.type}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border flex flex-col gap-2.5">
                      <a
                        href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(activeModalProject.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2.5 px-4 text-xs font-bold text-center w-full shadow-md"
                      >
                        Discuss on WhatsApp
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