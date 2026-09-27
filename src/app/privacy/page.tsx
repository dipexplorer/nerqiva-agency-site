"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Database, FileText, CheckCircle2 } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

const PRIVACY_SECTIONS = [
  {
    number: "01",
    code: "DATA_MINIMIZATION",
    title: "Explicit Data Minimization",
    icon: Database,
    body: "We do not deploy invasive marketing trackers, behavioral profiling pixels, or cross-site tracking scripts. We only ingest operational information that you explicitly submit through our Project Brief contact form. This includes your business name, contact email, WhatsApp number, current website URL, and project requirements. This information is exclusively used to model and scope your website build.",
  },
  {
    number: "02",
    code: "ZERO_TRUST_SECURITY",
    title: "Strict Data Protection & Confidentiality",
    icon: Shield,
    body: "Operational security is foundational to our studio workflows. Any project brief or business information shared with NERQIVA is stored securely and handled with strict confidentiality. Your contact information, logo assets, and business details are only accessible to the active team assigned to your project. We never sell, rent, or share your data with external third parties.",
  },
  {
    number: "03",
    code: "DATA_AUTHORITY_RIGHTS",
    title: "Full Data Ownership & Purge Rights",
    icon: Eye,
    body: "You maintain 100% ownership over your business data, assets, and project communications. You may request a full export of your stored project records or request a permanent deletion of your intake brief files from our systems at any time. Simply send your request to nerqiva.studio@gmail.com.",
  }
];

export default function PrivacyPage() {
  return (
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
          <span className="label-eyebrow text-accent">DATA PROTECTION & PRIVACY</span>
        </div>

        <h1 className="font-sans font-extrabold text-text-primary leading-[1.08] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.03em" }}>
          Privacy & <span className="bg-linear-to-r from-accent via-accent-light to-accent-gold bg-clip-text text-transparent font-black">Data Protection.</span>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-normal">
          We treat your data with the same high standards we apply to our web codebases. Clear, simple, and fully transparent data guidelines.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-text-tertiary">
          <span className="px-2.5 py-1 rounded bg-bg-card border border-border/80 font-bold text-text-secondary">
            DOCUMENT: NE-PRV-2026
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>EFFECTIVE DATE: SEPTEMBER 2026</span>
        </div>
      </div>

      {/* Dynamic Section Blocks with Motion Scroll Reveal */}
      <div className="section-container mb-32 max-w-4xl space-y-6">
        {PRIVACY_SECTIONS.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div 
              key={section.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-luxury p-8 md:p-10 relative overflow-hidden group hover:border-accent/40 transition-all duration-300 shadow-sm rounded-2xl bg-bg-card border border-border/80"
            >
              {/* Visual coordinate background decoration */}
              <div className="absolute top-4 right-6 font-mono text-[9px] text-text-tertiary select-none opacity-40">
                REF_[{section.code}]
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="shrink-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-accent font-bold">
                      {section.number} //
                    </span>
                    <h2 className="font-sans font-bold text-xl md:text-2xl text-text-primary">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed font-sans">
                    {section.body}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Standard Scoping Disclaimer */}
      <div className="section-container mb-32 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-t border-border/40 pt-10 flex flex-col md:flex-row items-start justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={16} />
            <span className="font-mono text-[9px] uppercase tracking-widest font-bold">100% Data Confidentiality Guarantee</span>
          </div>
          <p className="text-xs text-text-tertiary leading-relaxed max-w-lg font-sans">
            This policy defines data handling under standard client intake procedures. Full website projects, custom assets, and database integrations built for clients are bound exclusively by independent client agreements.
          </p>
        </motion.div>
      </div>

      <ClosingSection />
    </div>
  );
}
