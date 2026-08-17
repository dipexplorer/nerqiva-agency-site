"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Scale, GitPullRequest, Code, AlertTriangle, FileText } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

const TERMS_SECTIONS = [
  {
    number: "01",
    code: "ENGAGEMENT_MSA",
    title: "Operational Agreements & Engagement",
    icon: GitPullRequest,
    body: "By interacting with this website, submitting a project brief, or requesting a diagnostic assessment, you agree to coordinate under these terms. All project milestones, deliverables, and financial compensation protocols will be strictly governed by a separate, bilateral Master Services Agreement (MSA) or Statement of Work (SOW). No engineering work will commence prior to signature of these documents.",
  },
  {
    number: "02",
    code: "CODE_REPOS_OWNERSHIP",
    title: "Bilateral Code Ownership",
    icon: Code,
    body: "Unless specified otherwise in a custom Statement of Work, all original source code, API pipelines, custom database schemas, configurations, and interface layouts engineered by Nerqiva will be fully transferred to the client upon receipt of final project payments. Nerqiva retains no licensing hooks, proprietary locks, or runtime restrictions on your shipped systems.",
  },
  {
    number: "03",
    code: "LIABILITY_LIMITS",
    title: "Infrastructure Liability Limits",
    icon: AlertTriangle,
    body: "Nerqiva builds systems to highly rigorous, type-safe production standards. However, we do not claim liability for runtime outages caused by external infrastructure APIs or third-party hosting partners (such as Vercel, Supabase, AWS, or Stripe). Risk mitigation is achieved through automated fallback pipelines and operational error tracking.",
  }
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        
        {/* Hero Section */}
        <div className="section-container mb-20 max-w-4xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold text-text-secondary hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={12} /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Scale size={16} className="text-accent" />
            <span className="label-eyebrow">Legal Operations</span>
          </div>

          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Terms of Service
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light">
            Review the operational guidelines that govern our diagnostic scoping, code ownership transfer, and technical system liability.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
              Document Ref: NE-TMS-2026
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
              Last Updated: August 17, 2026
            </span>
          </div>
        </div>

        {/* Dynamic Section Blocks */}
        <div className="section-container mb-32 max-w-4xl space-y-8">
          {TERMS_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div 
                key={section.number}
                className="glass-panel p-8 md:p-10 relative overflow-hidden group hover:border-accent/30 transition-all duration-300 shadow-md"
                style={{ borderRadius: "4px" }}
              >
                {/* Visual coordinate background decoration */}
                <div className="absolute top-4 right-6 font-mono text-[9px] text-text-tertiary select-none opacity-40">
                  REF_SYS_[{section.code}]
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="shrink-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-sm bg-accent/5 border border-accent/15 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-accent font-bold">
                        {section.number} //
                      </span>
                      <h3 className="font-sans font-bold text-lg md:text-xl text-text-primary">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standard Scoping Disclaimer */}
        <div className="section-container mb-32 max-w-4xl">
          <div className="border-t border-border/40 pt-10 flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="flex items-center gap-2 text-text-secondary">
              <FileText size={16} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Scoping Disclaimer</span>
            </div>
            <p className="text-xs text-text-tertiary leading-relaxed max-w-lg">
              These terms govern scoping interactions. Production systems and project deployments executed for clients are bound exclusively by independent Master Services Agreements (MSAs).
            </p>
          </div>
        </div>

        <ClosingSection />
      </div>
    </>
  );
}
