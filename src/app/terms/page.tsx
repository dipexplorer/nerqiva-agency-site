"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Scale, GitPullRequest, Code, ShieldCheck, CheckCircle2 } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

const TERMS_SECTIONS = [
  {
    number: "01",
    code: "AGREEMENT_SCOPE",
    title: "Service Scope & Agreements",
    icon: GitPullRequest,
    body: "By submitting a project inquiry, selecting a demo theme, or commissioning a website build with NERQIVA, you agree to these operational terms. Every project scope, deliverable schedule, and pricing agreement is clearly detailed before work begins. No unexpected or hidden fees will ever be added to your invoice.",
  },
  {
    number: "02",
    code: "100_PERCENT_OWNERSHIP",
    title: "100% Code & Asset Ownership",
    icon: Code,
    body: "Upon completion of your website and final payment, you receive 100% full ownership of all custom code, design files, images, and content created for your business. NERQIVA retains zero proprietary locks, zero monthly software license hooks, and zero ongoing access restrictions to your live website.",
  },
  {
    number: "03",
    code: "GUARANTEE_SPEED",
    title: "24-Hour Launch Guarantee & Quality Standards",
    icon: ShieldCheck,
    body: "We build websites according to rigorous mobile-first, high-speed performance standards. Once all required text, photos, and branding assets are received from you, we guarantee your live website preview link will be ready within 24 Hours. We perform thorough mobile phone tests prior to connecting your domain.",
  }
];

export default function TermsPage() {
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
          <Scale size={16} className="text-accent" />
          <span className="label-eyebrow text-accent">TERMS OF SERVICE</span>
        </div>

        <h1 className="font-sans font-extrabold text-text-primary leading-[1.08] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.03em" }}>
          Terms of <span className="bg-linear-to-r from-accent via-accent-light to-accent-gold bg-clip-text text-transparent font-black">Service.</span>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-normal">
          Review our clear, business-friendly terms governing project deliverables, code ownership transfer, and launch guarantees.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-text-tertiary">
          <span className="px-2.5 py-1 rounded bg-bg-card border border-border/80 font-bold text-text-secondary">
            DOCUMENT: NE-TMS-2026
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>EFFECTIVE DATE: SEPTEMBER 2026</span>
        </div>
      </div>

      {/* Dynamic Section Blocks with Motion Scroll Reveal */}
      <div className="section-container mb-32 max-w-4xl space-y-6">
        {TERMS_SECTIONS.map((section, index) => {
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
            <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Transparent Client Terms</span>
          </div>
          <p className="text-xs text-text-tertiary leading-relaxed max-w-lg font-sans">
            These terms govern general studio interactions. Specific client website builds and domain configurations are bound by your approved project brief and invoice terms.
          </p>
        </motion.div>
      </div>

      <ClosingSection />
    </div>
  );
}
