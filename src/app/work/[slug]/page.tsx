import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CornerDownRight } from "lucide-react";
import { PROJECTS } from "../../../data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  
  // Calculate next and previous projects
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  // Helper for dynamic section headers
  const getSectionHeader = (num: string, defaultTitle: string) => {
    if (project.projectType !== "demo") return `${num} // ${defaultTitle}`;
    if (num === "01") return `${num} // The Concept`;
    if (num === "06") return `${num} // Intended Experience & Core Features`;
    return `${num} // ${defaultTitle}`;
  };

  return (
    <>
      <div className="pt-32 relative z-20">
        {/* Header Section */}
        <div className="section-container mb-12 max-w-4xl">
          <Link href="/work" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold text-text-secondary hover:text-accent transition-colors mb-12">
            <ArrowLeft size={14} /> Back to Selected Work
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] font-bold border ${
              project.projectType === "demo"
                ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                : "bg-accent/10 text-accent border-accent/20"
            }`}>
              {project.projectType === "demo" ? "DEMO THEME" : "CLIENT PROJECT"}
            </span>
            <span className="font-mono text-[10px] text-text-tertiary">
              {project.type} — {project.category}
            </span>
          </div>
          
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            {project.name}
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            {project.tagline}
          </p>
        </div>

        {/* Detailed Grid */}
        <div className="section-container mb-32 max-w-5xl">
          {/* Demo Warning / Description Banner */}
          {project.projectType === "demo" && (
            <div className="glass-panel p-6 border-amber-500/20 bg-amber-500/5 mb-16 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-500 font-bold block mb-1">
                  NERQIVA DEMO THEME
                </span>
                <p className="text-xs text-text-secondary leading-relaxed max-w-xl">
                  This is a conceptual digital experience created to demonstrate how a modern, premium online presence and scheduling system can be engineered for the <strong>{project.category}</strong> sector.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-bg-primary font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors text-center shrink-0"
              >
                Deploy This Theme
              </Link>
            </div>
          )}

          <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Content Area (8 Cols) */}
            <div className="md:col-span-8 space-y-16">
              
              {/* Problem / Concept & Impact */}
              <section className="space-y-6">
                <div>
                  <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4 flex items-center gap-2">
                    <span className="text-accent">01 //</span> {project.projectType === "demo" ? "The Concept" : "The Problem"}
                  </h2>
                </div>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.challenge}
                </p>
                <div className="bg-bg-secondary/40 p-6 border-l-2 border-accent/40 rounded-sm">
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-2">
                    {project.projectType === "demo" ? "Potential value" : "Why it mattered"}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.whyItMattered}
                  </p>
                </div>
              </section>

              {/* Constraints */}
              <section className="space-y-4">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4">
                  02 // Engineering Constraints
                </h2>
                <ul className="space-y-3">
                  {project.constraints.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CornerDownRight size={14} className="text-accent mt-1 shrink-0" />
                      <span className="text-text-secondary text-sm leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Approach */}
              <section className="space-y-6">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4">
                  03 // The Approach
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.approach}
                </p>
              </section>

              {/* Architecture & Decisions */}
              <section className="space-y-6">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4">
                  04 // System Architecture & Engineering Decisions
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {project.architecture}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold">
                    Key Decisions
                  </h4>
                  <ul className="space-y-3">
                    {project.engineeringDecisions.map((decision, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="shrink-0 h-4 w-4 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                          <div className={`h-1.5 w-1.5 rounded-full ${project.accentColor}`} />
                        </div>
                        <span className="text-text-secondary text-sm leading-relaxed">{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Implementation */}
              <section className="space-y-6">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4">
                  05 // Implementation Details
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.implementation}
                </p>
              </section>

              {/* Dynamic Interface Gallery Showcase (Demo Specific) */}
              {project.gallery && project.gallery.length > 0 && (
                <section className="space-y-6">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4">
                    06 // Theme Interface Showcase
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="relative group overflow-hidden border border-border/40 rounded-sm aspect-video bg-bg-secondary">
                        <Image
                          src={img}
                          alt={`${project.name} interface screenshot ${i + 1}`}
                          fill
                          sizes="(max-w-768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Outcomes / Features */}
              <section className="space-y-6">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4">
                  {getSectionHeader("06", "Outcome & Results")}
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.outcome}
                </p>
              </section>

              {/* Lessons Learned */}
              <section className="space-y-6">
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border/40 pb-4">
                  07 // Lessons Learned
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.lessons}
                </p>
              </section>
            </div>

            {/* Right Meta Sidebar (4 Cols) */}
            <div className="md:col-span-4 space-y-8">
              <div className="glass-panel p-6">
                <h3 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-4">
                  Project Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-bg-primary border border-border/60 text-text-secondary font-mono text-[9px] uppercase tracking-widest rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 bg-accent/5 border-accent/20">
                <h3 className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-2">
                  {project.projectType === "demo" ? "Need a similar experience?" : "Have a similar bottleneck?"}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-6">
                  {project.projectType === "demo"
                    ? "We can adapt, design, and deploy this premium theme system tailored completely to your brand's unique attributes."
                    : "We can discuss your parameters and scope a clean custom architecture for your organization."}
                </p>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 py-3 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-all rounded shadow-md animate-fade-in"
                >
                  Start Project Brief
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Contextual Navigation */}
        <div className="border-t border-border/40 py-16 bg-bg-secondary/40 relative z-20">
          <div className="section-container max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <Link 
                href={`/work/${prevProject.slug}`} 
                className="group flex flex-col items-start gap-1 text-left w-full sm:w-1/2"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
                  ← Previous Project
                </span>
                <span className="font-sans font-bold text-lg text-text-secondary group-hover:text-accent transition-colors">
                  {prevProject.name}
                </span>
              </Link>

              <div className="h-[1px] w-full sm:h-12 sm:w-[1px] bg-border/40" />

              <Link 
                href={`/work/${nextProject.slug}`} 
                className="group flex flex-col items-end gap-1 text-right w-full sm:w-1/2"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
                  Next Project →
                </span>
                <span className="font-sans font-bold text-lg text-text-secondary group-hover:text-accent transition-colors">
                  {nextProject.name}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
