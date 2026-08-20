"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Database, FileText } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

const PRIVACY_SECTIONS = [
  {
    number: "01",
    code: "DATA_COLLECTION",
    title: "Explicit Data Minimization",
    icon: Database,
    body: "We do not deploy marketing trackers, behavior profiling pixels, or cross-site tracking scripts. We only ingest operational data that you explicitly submit through our Project Brief contact form. This includes your name, email, organization size, current technical workflow limitations, and system requirements. This telemetry is purely utilized to model and scope your engineering solutions.",
  },
  {
    number: "02",
    code: "SECURITY_ENCRYPTION",
    title: "Zero-Trust Data Protection",
    icon: Shield,
    body: "Operational security is baked into our infrastructure. Any project brief submitted to NERQIVA is immediately encapsulated and stored securely. We enforce strict role-based access control, ensuring that your system constraints and architecture ideas are only visible to the active engineering team assigned to evaluate your brief. We do not sell, license, or share your proprietary challenges with external agencies or sales vendors.",
  },
  {
    number: "03",
    code: "YOUR_TELEMETRY_RIGHTS",
    title: "Data Control & Purge Request",
    icon: Eye,
    body: "You maintain absolute authority over your business data and project documentation. You may request a complete export of the scoping notes we have compiled, or command a permanent purge of your project records and contact files from our repositories at any time. Simply dispatch an engineering request to contact@nerqiva.com.",
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy & Telemetry Policy | NERQIVA</title>
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
            <Shield size={16} className="text-accent" />
            <span className="label-eyebrow">Legal Operations</span>
          </div>

          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Privacy & Telemetry Policy
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light">
            We apply the same engineering rigour to your data privacy as we do to our system codebases. Read our clear, developer-focused operational guidelines.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
              Document Ref: NE-PRV-2026
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
              Last Updated: August 17, 2026
            </span>
          </div>
        </div>

        {/* Dynamic Section Blocks */}
        <div className="section-container mb-32 max-w-4xl space-y-8">
          {PRIVACY_SECTIONS.map((section) => {
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
              This telemetry specification defines how data is managed under standard business-scoping operations. Full software code integrations built for clients are bound exclusively by independent Non-Disclosure Agreements (NDAs).
            </p>
          </div>
        </div>

        <ClosingSection />
      </div>
    </>
  );
}
