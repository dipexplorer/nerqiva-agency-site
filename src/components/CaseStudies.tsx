"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";
import ProjectDualDeviceModal from "./ProjectDualDeviceModal";

// Homepage showcases only the top 3 high-contrast flagship proofs
const HOMEPAGE_FLAGSHIP_IDS = ["lablink", "houseoftales", "titangym"];

export default function CaseStudies() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Filter strictly to the top 3 curated flagships
  const curatedFlagships = HOMEPAGE_FLAGSHIP_IDS.map((id) =>
    PROJECTS.find((p) => p.id === id)
  ).filter(Boolean) as Project[];

  return (
    <section
      id="case-studies"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Focused, Confident, Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.06]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Selected Works.
            </h2>
            <p className="mt-3 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              A focused selection of digital flagships engineered for commercial conversion, sub-second mobile speeds, and verified WhatsApp booking funnels.
            </p>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/work"
              className="font-mono text-xs font-semibold tracking-wider text-text-secondary hover:text-accent flex items-center gap-2 transition-colors group"
            >
              <span>Explore All 8 Builds</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Minimal Agency Works Triad (Top 3 Proofs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16">
          {curatedFlagships.map((project, i) => {
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
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="group flex flex-col cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                {/* Visual Preview Container */}
                <div className="relative aspect-[16/10.5] w-full rounded-2xl overflow-hidden bg-bg-secondary border border-border group-hover:border-accent/40 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  {/* Live Client Flagship Indicator */}
                  {project.projectType === "client" ? (
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 border border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Client Flagship</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 border border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span>Interactive Demo</span>
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
        </div>

        {/* High-Gravity Archive Banner Linking to /work */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-6 bg-bg-secondary/40 rounded-2xl p-6 sm:p-8 border border-border/60">
          <div className="max-w-xl text-center sm:text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent block mb-1">
              Curated Portfolio Archive
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight">
              Explore All 8 Commercial Flagships
            </h3>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Browse our complete archive across clinical healthcare, luxury bridal henna, editorial makeup, boutique fitness, and fine art studios.
            </p>
          </div>
          <Link
            href="/work"
            className="btn-primary py-3 px-6 text-sm font-bold flex items-center gap-2.5 shrink-0 group shadow-md"
          >
            <span>View All Selected Works (8)</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
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