"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Inbox, CheckCircle2, ExternalLink, Play } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";
import ClosingSection from "./ClosingSection";
import ProjectDualDeviceModal from "./ProjectDualDeviceModal";

const CATEGORY_TABS = [
  { id: "all", label: "All Flagships" },
  { id: "healthcare", label: "Healthcare & Diagnostics", match: ["Healthcare & Diagnostics", "Clinical & Diagnostics"] },
  { id: "beauty", label: "Beauty & Bridal", match: ["Beauty & Bridal", "Luxury Bridal", "Studio & Academy"] },
  { id: "studios", label: "Photography & Studios", match: ["Photography Studio", "Luxury Wedding Photography"] },
  { id: "fitness", label: "Fitness & Training", match: ["Fitness & Wellness"] },
];

export default function WorkCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;
    const tab = CATEGORY_TABS.find((t) => t.id === activeCategory);
    return tab?.match ? tab.match.includes(project.category) : true;
  });

  return (
    <div className="pt-28 sm:pt-36 relative z-20">
      {/* Page Header: Pure Typographic Authority */}
      <div className="section-container mb-14 sm:mb-20 max-w-4xl">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent block mb-2">
          Full Portfolio Archive · 8 Builds
        </span>
        <h1
          className="font-serif text-text-primary leading-[1.08] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)", letterSpacing: "-0.03em" }}
        >
          Crafted for <span className="italic font-normal text-accent">commercial impact</span>.
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          Explore our complete archive of live interactive digital flagships, luxury boutique lookbooks, and high-converting local client funnels. Click any flagship to experience the live dual-device motion preview.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="section-container mb-12 sm:mb-16 max-w-6xl">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pb-6 border-b border-border/40">
          {CATEGORY_TABS.map((tab) => {
            const isSelected = activeCategory === tab.id;
            const count =
              tab.id === "all"
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
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-bg-secondary text-text-tertiary"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Interactive Grid */}
      <div className="section-container mb-24 sm:mb-32 max-w-6xl">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group flex flex-col cursor-pointer bg-bg-card rounded-2xl border border-border/80 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 p-3 sm:p-3.5"
                  onClick={() => setActiveModalProject(project)}
                >
                  {/* Visual Preview Container */}
                  <div className="relative aspect-[16/10.5] w-full rounded-xl overflow-hidden bg-bg-secondary border border-border/40">
                    {/* Live Client Flagship Indicator */}
                    {project.projectType === "client" ? (
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 border border-white/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Client Flagship</span>
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white/90 font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 border border-white/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span>Interactive Demo</span>
                      </div>
                    )}

                    {/* Quick External Link */}
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

                    {/* Motion Prompt Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                      <div className="px-3.5 py-1.5 rounded-full bg-bg-primary/95 text-text-primary border border-border shadow-lg text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-sm">
                        <Play size={11} className="fill-accent text-accent" />
                        <span>View Live Motion</span>
                      </div>
                    </div>

                    {/* Thumbnail Image */}
                    <img
                      src={displayImage}
                      alt={`${project.name} Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  {/* Meta Content */}
                  <div className="mt-3.5 px-1.5 pb-1 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider font-semibold truncate">
                          {project.category}
                        </span>
                        {/* Brand Palette Dots */}
                        <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
                          {palette.slice(0, 3).map((color, idx) => (
                            <span
                              key={idx}
                              className="w-2 h-2 rounded-full shadow-inner border border-black/10 dark:border-white/15"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-lg text-text-primary tracking-tight group-hover:text-accent transition-colors truncate">
                        {project.name}
                      </h3>

                      <p className="text-xs text-text-secondary mt-1 leading-relaxed line-clamp-2 font-normal">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono">
                      <span className="text-text-tertiary text-[11px]">
                        {project.domain || "nerqivastudio.in"}
                      </span>
                      <span className="text-accent font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Details</span>
                        <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Custom Commission Card (Active on "all") */}
            {activeCategory === "all" && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="card-luxury border border-dashed border-accent/40 bg-accent/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                      Custom Commission · 08
                    </span>
                    <span className="font-mono text-[9px] text-accent-gold font-bold uppercase tracking-wider">
                      Accepting Q2
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-text-primary mb-2.5 tracking-tight">
                    Commission Your Digital Flagship
                  </h3>

                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    Have an established clinic, studio, or brand? We engineer bespoke custom systems with agile sprint delivery and 100% IP ownership.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                      <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                      <span>Engineered for your price tier &amp; clientele</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                      <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                      <span>Direct 1-tap WhatsApp lead funnel integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                      <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                      <span>100% code ownership, zero monthly software lock-in</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/918724932985?text=Hi%20NERQIVA!%20I'm%20ready%20to%20commission%20a%20digital%20flagship%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-xs font-bold py-2.5"
                >
                  <span>Commission Your Flagship</span>
                  <ArrowRight size={13} />
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

      {/* Dual-Device 60fps Motion Showcase Modal */}
      <ProjectDualDeviceModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <ClosingSection />
    </div>
  );
}
