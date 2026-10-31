"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectDualDeviceModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDualDeviceModal({
  project,
  onClose,
}: ProjectDualDeviceModalProps) {
  const [isMotionActive, setIsMotionActive] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
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
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
            aria-label={`${project.name} Case Showcase`}
          >
            {/* Modal Top Bar */}
            <div className="sticky top-0 z-30 px-5 sm:px-8 py-4 bg-bg-primary/95 backdrop-blur-md border-b border-border/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-text-tertiary uppercase">
                  Selected Works · 2026
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-bg-secondary text-[11px] font-mono text-text-secondary border border-border/60">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isMotionActive ? "bg-emerald-400 animate-pulse" : "bg-zinc-400"
                    }`}
                  />
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

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!hidden md:!inline-flex py-1.5 px-3.5 text-xs font-mono font-bold items-center gap-1.5 rounded-full bg-text-primary text-text-inverted hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                <button
                  onClick={onClose}
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
              {/* Top Narrative Row */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2 border-b border-border/40">
                <div className="max-w-3xl">
                  <h2
                    className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight leading-[1.05]"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {project.name}
                  </h2>
                  <p className="mt-2 text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                    {project.summary || project.tagline}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0 text-xs font-mono">
                  <div className="text-left lg:text-right">
                    <span className="text-text-tertiary block text-[10px] uppercase tracking-wider">
                      Scope &amp; Role
                    </span>
                    <span className="font-semibold text-text-primary text-xs mt-0.5 block max-w-sm sm:max-w-md">
                      {project.scope || "Architecture, UI/UX & WhatsApp Funnel"}
                    </span>
                  </div>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-accent hover:underline flex items-center gap-1.5 text-xs pt-0.5"
                    >
                      <span>{project.domain || "Visit Live"}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Dual-Device Stage: Desktop Browser Frame + Mobile Phone Chassis */}
              <div className="rounded-2xl sm:rounded-3xl bg-bg-secondary/50 dark:bg-zinc-950/70 border border-border/70 p-3 sm:p-5 lg:p-6 flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-6 lg:gap-8 shadow-inner">
                {/* Device 1: Desktop Browser Frame */}
                <div className="flex-1 w-full min-w-0 rounded-xl sm:rounded-2xl border border-zinc-300/80 dark:border-zinc-800 bg-zinc-900 shadow-xl overflow-hidden flex flex-col group/browser">
                  {/* Browser Chrome Header Rail */}
                  <div className="px-3 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3 text-xs select-none">
                    <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    </div>

                    <div className="px-3 py-0.5 rounded-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 max-w-xs truncate shadow-xs">
                      <span className="text-zinc-400 text-[10px]">🔒</span>
                      <span className="truncate">{project.domain || "nerqivastudio.in"}</span>
                    </div>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
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
                        project.fullDesktopImage ||
                        project.desktopImage ||
                        project.heroImage ||
                        "/images/projects/lablink/full_desktop.webp"
                      }
                      alt={`${project.name} Desktop Live Site`}
                      className={`w-full h-auto object-cover object-top transition-transform duration-700 select-none ${
                        isMotionActive ? "animate-motion-desktop" : "motion-paused"
                      } group-hover/screen:[animation-play-state:paused]`}
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Device 2: Mobile Phone Frame */}
                <div
                  className="w-[145px] sm:w-[165px] lg:w-[180px] h-[280px] sm:h-[310px] lg:h-[340px] rounded-[24px] sm:rounded-[30px] border-[5px] sm:border-[7px] border-zinc-900 dark:border-zinc-900 bg-zinc-950 shadow-2xl relative overflow-hidden shrink-0 flex flex-col group/phone"
                  title="Mobile live site preview (pauses on hover)"
                >
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-zinc-900 rounded-full z-20 pointer-events-none flex items-center justify-end pr-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  </div>

                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full z-20 pointer-events-none" />

                  <div className="relative w-full h-full overflow-hidden bg-zinc-950">
                    <img
                      src={
                        project.fullMobileImage ||
                        project.mobileImage ||
                        project.heroImage ||
                        "/images/projects/lablink/full_mobile.webp"
                      }
                      alt={`${project.name} Mobile Live Site`}
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
                  <span className="text-text-tertiary">
                    {project.stack.slice(0, 3).join(", ")}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20am%20interested%20in%20a%20flagship%20build%20like%20${encodeURIComponent(
                      project.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-5 text-xs font-bold items-center gap-2 shadow-md flex-1 sm:flex-initial text-center justify-center"
                  >
                    <span>Discuss Similar Build on WhatsApp</span>
                    <ExternalLink size={13} />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
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
  );
}
