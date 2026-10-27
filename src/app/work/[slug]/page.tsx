import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "../../../data/projects";
import ClosingSection from "../../../components/ClosingSection";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | NERQIVA Studio",
    };
  }

  return {
    title: `${project.name} | NERQIVA Studio Case Study & Live Demo`,
    description: project.tagline,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | NERQIVA Studio Case Study & Live Demo`,
      description: project.tagline,
      images: project.gallery && project.gallery.length > 0 ? [{ url: project.gallery[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | NERQIVA Studio Case Study & Live Demo`,
      description: project.tagline,
      images: project.gallery && project.gallery.length > 0 ? [project.gallery[0]] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];

  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.nerqivastudio.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Selected Work",
            item: "https://www.nerqivastudio.in/work",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: `https://www.nerqivastudio.in/work/${project.slug}`,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.name,
        description: project.tagline,
        url: project.demoUrl || `https://www.nerqivastudio.in/work/${project.slug}`,
        creator: {
          "@type": "Organization",
          name: "NERQIVA Studio",
        },
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/918724932985?text=${encodeURIComponent(
    `Hi NERQIVA, I'm reviewing the ${project.name} flagship and would like to discuss deploying a similar architecture for my business.`
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="pt-32 relative z-20 pb-20">
        {/* Header Section */}
        <div className="section-container max-w-6xl mb-12 sm:mb-14">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-text-secondary hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" /> Back to Selected Work
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-border/40">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold bg-accent/10 border border-accent/25 px-2.5 py-0.5 rounded-full">
                  {project.type}
                </span>
                <span className="font-mono text-[10px] text-text-tertiary">
                  {project.category} · Ref: NERQIVA-{project.number}
                </span>
              </div>

              <h1
                className="font-serif text-text-primary leading-[1.08] mb-4 tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.03em" }}
              >
                {project.name}
              </h1>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
                {project.tagline}
              </p>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-semibold rounded-xl transition-all shadow-sm"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={13} />
                </a>
              )}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-bg-card border border-border/80 text-text-primary hover:border-accent hover:text-accent font-mono text-xs font-semibold rounded-xl transition-colors shadow-2xs"
              >
                <MessageSquare size={13} className="text-accent" />
                <span>Deploy Similar Flagship</span>
              </a>
            </div>
          </div>
        </div>

        {/* Live Interactive Iframe Section inside Browser Mockup */}
        {project.demoUrl && (
          <div className="section-container max-w-6xl mb-20 sm:mb-24">
            <div className="w-full bg-[#121316] border border-border/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Browser Mockup Chrome */}
              <div className="w-full bg-[#0a0a0c] border-b border-white/10 px-4 py-3 flex items-center justify-between">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] opacity-80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] opacity-80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f] opacity-80" />
                </div>

                {/* Centered URL Address Pill */}
                <div className="flex-1 max-w-md mx-3 px-3 py-1 bg-[#18191d] border border-white/10 rounded-lg flex items-center justify-center gap-2 text-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[10px] text-text-secondary truncate select-all">
                    {project.demoUrl}
                  </span>
                </div>

                {/* External Link Direct Trigger */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-text-tertiary hover:text-accent transition-colors flex items-center gap-1 shrink-0 hidden sm:flex"
                >
                  <span>Fullscreen</span>
                  <ExternalLink size={10} />
                </a>
              </div>

              {/* Iframe Viewport Container */}
              <div className="relative w-full h-[70vh] min-h-[500px] bg-bg-primary">
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

        {/* Technical Specifications & Engineering Case Breakdown (2-Column Grid) */}
        <div className="section-container max-w-6xl mb-20">
          <div className="mb-10 max-w-2xl">
            <h2
              className="font-serif text-text-primary leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", letterSpacing: "-0.03em" }}
            >
              Engineering <span className="italic font-normal text-accent">specifications</span>.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal mt-2">
              Deep breakdown of the commercial problem, architectural choices, and technical execution behind this deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Column 1: Commercial Challenge & Strategic Impact */}
            <div className="card-luxury p-7 sm:p-8 rounded-2xl bg-bg-card border border-border/70 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                      THE CHALLENGE
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-2">
                    Commercial Problem & Context
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent-gold font-bold bg-accent-gold/10 px-2 py-0.5 rounded border border-accent-gold/20">
                      STRATEGIC IMPACT
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-2">
                    Why It Mattered
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed font-normal">
                    {project.whyItMattered}
                  </p>
                </div>

                {project.constraints && project.constraints.length > 0 && (
                  <div className="pt-4 border-t border-border/40">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary font-bold block mb-3">
                      Key Technical Constraints
                    </span>
                    <ul className="space-y-2">
                      {project.constraints.map((constraint, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-normal">
                          <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5" />
                          <span>{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Column 2: Architectural Approach, Decisions & Stack */}
            <div className="card-luxury p-7 sm:p-8 rounded-2xl bg-bg-card border border-border/70 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                      SYSTEM ARCHITECTURE
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-2">
                    Architectural Strategy & Execution
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed font-normal">
                    {project.architecture || project.approach}
                  </p>
                </div>

                {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
                  <div className="pt-4 border-t border-border/40">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary font-bold block mb-3">
                      Core Engineering Decisions
                    </span>
                    <ul className="space-y-2">
                      {project.engineeringDecisions.map((decision, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-normal">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-border/40">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary font-bold block mb-2">
                    Production Outcome
                  </span>
                  <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed font-normal">
                    {project.outcome}
                  </p>
                </div>

                {project.stack && project.stack.length > 0 && (
                  <div className="pt-4 border-t border-border/40">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary font-bold block mb-2.5">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-bg-secondary border border-border/60 text-text-secondary font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Deploy This Architecture Banner */}
        <div className="section-container max-w-6xl mb-24">
          <div className="card-luxury p-8 sm:p-10 rounded-2xl bg-bg-card border border-border/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="max-w-xl space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                FIXED-PRICE DEPLOYMENT
              </span>
              <h3 className="font-serif font-bold text-2xl text-text-primary">
                Want a flagship like {project.name}?
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-normal">
                We customize this architecture with your branding, custom booking flow, and WhatsApp reservation pipeline in 2–4 days for a fixed ₹15,000 – ₹35,000.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 font-mono text-xs font-semibold rounded-xl shadow-sm whitespace-nowrap"
              >
                <span>Discuss on WhatsApp</span>
                <ArrowRight size={13} />
              </a>
              <Link
                href={`/contact?problem=presence`}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-bg-secondary/70 border border-border/80 text-text-primary hover:border-accent hover:text-accent font-mono text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Submit Intake Brief</span>
              </Link>
            </div>
          </div>
        </div>

        <ClosingSection />
      </div>
    </>
  );
}
