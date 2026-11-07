"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";
import ProjectDualDeviceModal from "./ProjectDualDeviceModal";

// Top 3 flagship proofs with deliberate handcrafted tilt & vertical offsets
const HOMEPAGE_FLAGSHIPS = [
  {
    id: "lablink",
    tiltClass: "rotate-0 sm:-rotate-2 lg:translate-y-2",
    tag: "Live Client",
    isClient: true,
  },
  {
    id: "houseoftales",
    tiltClass: "rotate-0 sm:rotate-1.5 lg:-translate-y-3",
    tag: "Photography",
    isClient: false,
  },
  {
    id: "titangym",
    tiltClass: "rotate-0 sm:-rotate-1 lg:translate-y-3",
    tag: "Athletic Club",
    isClient: false,
  },
];

export default function CaseStudies() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Retrieve the 3 flagship projects
  const curatedProjects = HOMEPAGE_FLAGSHIPS.map((config) => {
    const project = PROJECTS.find((p) => p.id === config.id);
    return { ...config, project };
  }).filter((item): item is typeof item & { project: Project } => Boolean(item.project));

  return (
    <section
      id="case-studies"
      className="py-18 sm:py-24 bg-transparent border-t border-border/40 relative overflow-x-clip"
    >
      <div className="section-container relative z-10">
        
        {/* Section Header: Pure Typographic Authority, Zero Fluff */}
        <div className="flex items-baseline justify-between mb-10 sm:mb-14 pb-4 border-b border-border/40">
          <div className="flex items-baseline gap-3">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.04]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Selected Works
            </h2>
            <span className="font-mono text-xs sm:text-sm text-text-tertiary">
              / 03
            </span>
          </div>

          <Link
            href="/work"
            className="font-mono text-xs font-semibold tracking-wider text-text-secondary hover:text-accent flex items-center gap-1.5 transition-colors group"
          >
            <span>All Builds [8]</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Handcrafted Tilted Cards Stage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4 pb-6">
          {curatedProjects.map(({ id, tiltClass, isClient, tag, project }) => {
            const displayImage =
              project.desktopImage ||
              project.heroImage ||
              project.gallery?.[0] ||
              "/images/projects/lablink/desktop.png";

            return (
              <div
                key={id}
                className={`group relative cursor-pointer transform-gpu will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${tiltClass} hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20`}
                onClick={() => setActiveModalProject(project)}
              >
                {/* Visual Preview Box */}
                <div className="relative aspect-[16/10.5] w-full rounded-2xl overflow-hidden bg-bg-secondary border border-border/80 group-hover:border-accent/50 shadow-md group-hover:shadow-2xl group-hover:shadow-black/20 dark:group-hover:shadow-black/60 transition-all duration-500">
                  
                  {/* Minimal Status Tag */}
                  {isClient ? (
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 border border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Client</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 font-mono text-[10px] font-bold tracking-wider border border-white/10 shadow-sm">
                      <span>{tag}</span>
                    </div>
                  )}

                  {/* Direct Launch Link */}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/10 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-md"
                      title="Open Live Site"
                      aria-label={`Visit ${project.name} live`}
                    >
                      <ExternalLink size={12} />
                    </a>
                  )}

                  {/* Hover Motion Prompt */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-bg-primary/95 text-text-primary border border-border shadow-lg text-[11px] font-mono font-bold tracking-wider backdrop-blur-sm">
                      Live Motion ↗
                    </span>
                  </div>

                  {/* High-Resolution Screenshot */}
                  <img
                    src={displayImage}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Minimal Meta Row: Title + Category Only */}
                <div className="mt-3.5 flex items-baseline justify-between gap-3 px-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary tracking-tight group-hover:text-accent transition-colors truncate">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-text-tertiary shrink-0">
                    {project.category}
                  </span>
                </div>

                {isClient && (
                  <div className="mt-2 px-1 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-secondary dark:text-white/65 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Live WhatsApp Booking Engine · 7-Day Sprint Delivery
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Minimal Tactile Archive Link (Zero Essay) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-text-tertiary">
            3 Flagships shown · 8 Active systems in production
          </span>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-bg-secondary/60 hover:bg-bg-secondary text-text-primary text-xs font-mono font-semibold tracking-wide hover:border-accent/40 shadow-xs hover:shadow-sm transition-all duration-200 group"
          >
            <span>Explore Complete Archive (8)</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-accent" />
          </Link>
        </div>

      </div>

      {/* Dual-Device 60fps Motion Showcase Modal */}
      <ProjectDualDeviceModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}