"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

export default function CaseStudies() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="work" className="py-32 bg-transparent border-t border-white/5 bg-grid-dots">
      <div className="section-container">
        
        {/* Editorial Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="label-eyebrow text-accent">SELECTED WORK</span>
            </div>
            <h2 className="font-sans font-extrabold text-text-primary leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
              Engineering for <span className="text-accent">impact.</span>
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p className="text-text-secondary text-base leading-relaxed max-w-md">
              We don&apos;t just build interfaces. We engineer reliable systems that solve complex backend, database, and integration challenges.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-panel overflow-hidden flex flex-col justify-between hover:border-accent/60 hover:shadow-[0_12px_32px_rgba(124,58,237,0.12)] transition-all duration-300"
              style={{ borderRadius: "4px" }}
            >
              <div>
                {/* Visual Header / Accent Gradient / Screenshot */}
                {project.projectType === "demo" && project.demoUrl ? (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full h-48 bg-gradient-to-br from-bg-secondary to-bg-primary relative overflow-hidden flex items-center justify-center border-b border-white/5 block"
                  >
                    {project.gallery && project.gallery.length > 0 ? (
                      <Image
                        src={project.gallery[0]}
                        alt={project.name}
                        fill
                        sizes="(max-w-768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                    )}
                    {/* Top Badge overlay */}
                    <div className="absolute top-4 left-4 font-mono text-[8px] font-bold uppercase tracking-widest text-white/70 bg-black/40 border border-white/5 px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
                      PROJECT_{project.number}
                    </div>
                  </a>
                ) : (
                  <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                    {/* Decorative Blueprint Graph Grid overlay */}
                    <div className="absolute inset-0 opacity-15 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                    
                    {/* Digital system model representation (SVG) */}
                    <svg className="w-16 h-16 text-white/30 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="1" />
                      <rect x="2" y="14" width="20" height="8" rx="1" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>

                    {/* Top Badge overlay */}
                    <div className="absolute top-4 left-4 font-mono text-[8px] font-bold uppercase tracking-widest text-white/70 bg-black/40 border border-white/5 px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
                      PROJECT_{project.number}
                    </div>
                  </div>
                )}

              {/* Content Block */}
              <div className="p-8">
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

                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light">
                  {project.tagline}
                </p>

                {/* Minimal Action Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="font-mono text-[8px] text-text-tertiary uppercase tracking-wider font-semibold">
                    [DEMO_ENVIRONMENT]
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

              {/* Stack Tags */}
              <div className="px-8 pb-8 pt-0 border-t border-white/5 mt-auto flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-[2px] glass-panel border-none font-mono text-[8px] text-text-secondary uppercase select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}