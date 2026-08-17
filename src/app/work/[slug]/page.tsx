import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MessageSquare } from "lucide-react";
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

  return (
    <>
      <div className="pt-32 relative z-20 pb-24">
        {/* Minimal Header */}
        <div className="section-container max-w-6xl mb-10">
          <Link href="/work" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold text-text-secondary hover:text-accent transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Selected Work
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] font-bold border bg-amber-500/10 text-amber-500 border-amber-500/20">
                  DEMO THEME
                </span>
                <span className="font-mono text-[10px] text-text-tertiary">
                  {project.type} — {project.category}
                </span>
              </div>
              <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-3 tracking-tight text-4xl md:text-5xl">
                {project.name}
              </h1>
              <p className="text-text-secondary text-base md:text-lg max-w-2xl font-light">
                {project.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-mid text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all shadow-md shadow-accent/25 text-center"
                >
                  Open in New Tab <ExternalLink size={12} />
                </a>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border/60 text-text-secondary hover:text-text-primary font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors text-center"
              >
                Request Deployment <MessageSquare size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Live Iframe Section inside Browser Frame */}
        {project.demoUrl && (
          <div className="section-container max-w-6xl">
            <div className="w-full bg-[#18181b] border border-border/40 rounded-xl overflow-hidden shadow-2xl flex flex-col">
              {/* Browser Header Bar */}
              <div className="w-full bg-[#09090b] border-b border-border/30 px-4 py-3 flex items-center justify-between">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="h-3 w-3 rounded-full bg-[#ef4444] opacity-80" />
                  <div className="h-3 w-3 rounded-full bg-[#f59e0b] opacity-80" />
                  <div className="h-3 w-3 rounded-full bg-[#10b981] opacity-80" />
                </div>
                {/* Address Bar */}
                <div className="flex-1 max-w-md mx-4 px-3 py-1 bg-[#18181b] border border-border/20 rounded-md flex items-center justify-center gap-1.5 text-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-text-secondary truncate select-all">
                    {project.demoUrl}
                  </span>
                </div>
                {/* Placeholder spacer */}
                <div className="w-12 shrink-0 hidden sm:block" />
              </div>
              
              {/* Iframe Viewport */}
              <div className="relative w-full h-[75vh] min-h-[550px] bg-bg-primary">
                <iframe
                  src={project.demoUrl}
                  title={`${project.name} Live View`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
