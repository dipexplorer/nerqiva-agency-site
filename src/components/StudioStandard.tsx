"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, Lock, UserCheck, Clock, CheckCircle2 } from "lucide-react";

const SPRINT_DAYS = [
  {
    day: "Day 01",
    title: "Discovery & Conversion Blueprint",
    detail: "We audit your competitors, establish service pricing tiers, and design the exact WhatsApp conversion flow.",
    deliverable: "Architecture Blueprint",
  },
  {
    day: "Day 02",
    title: "Bespoke Mobile-First Coding",
    detail: "Custom Next.js edge frontend coded from scratch. Zero bloated templates, zero generic site builders.",
    deliverable: "High-Fidelity Staging Build",
  },
  {
    day: "Day 03",
    title: "WhatsApp & Local Maps Setup",
    detail: "Pre-filled WhatsApp buttons connected, Google Maps pin verified, and LocalBusiness schema structured.",
    deliverable: "Lead Pipeline Integration",
  },
  {
    day: "Day 04",
    title: "Live Cutover & Full Code Handover",
    detail: "Speed testing on live 4G devices, custom domain DNS cutover, and 100% code repository handover.",
    deliverable: "Public Live Cutover",
  },
];

const STUDIO_GUARANTEES = [
  {
    icon: Zap,
    title: "Sub-Second 4G Performance",
    description:
      "Tested and verified on real Jio & Airtel 4G networks. Visitors never bounce due to laggy image galleries or 5-second load times.",
    metric: "< 0.8s Mobile Paint",
  },
  {
    icon: MessageSquare,
    title: "1-Tap WhatsApp Lead Engine",
    description:
      "Inquiries arrive directly in your WhatsApp pre-filled with service, target date, and budget. Close leads the moment they show intent.",
    metric: "3-Second Intake",
  },
  {
    icon: Lock,
    title: "100% Code & Asset Ownership",
    description:
      "You own your entire code repository, domain DNS, and design assets. Zero recurring maintenance fees, zero platform hostage-taking.",
    metric: "Zero Retainers",
  },
  {
    icon: UserCheck,
    title: "Direct Senior Engineer Delivery",
    description:
      "Direct collaboration with the principal engineer writing your code. Zero junior outsourcing and zero account manager middlemen.",
    metric: "Direct Collaboration",
  },
];

export default function StudioStandard() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/45 relative z-10 overflow-hidden">
      {/* Ambient background subtle grid */}
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              The 4-Day Sprint &amp; Commercial Guarantees
            </span>
          </div>
          <h2
            className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            From intake to public cutover in{" "}
            <span className="italic font-normal text-accent">96 hours</span>.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Traditional agencies take 8 to 12 weeks of wireframe meetings and slide decks. We operate with strict, transparent 24-hour milestones.
          </p>
        </div>

        {/* 4-Day Sprint Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {SPRINT_DAYS.map((step, idx) => (
            <motion.div
              key={step.day}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 sm:p-7 card-luxury border border-border/70 bg-bg-card rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md">
                    {step.day}
                  </span>
                  <span className="font-mono text-[10px] text-text-tertiary">
                    {idx + 1}/4
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center gap-2 font-mono text-[11px] text-text-primary">
                <Clock size={12} className="text-accent-gold shrink-0" />
                <span className="truncate">{step.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Guarantees Header */}
        <div className="max-w-2xl mb-10">
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-2">
            The Studio Commitments
          </h3>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            The four technical and commercial standards built into every single deployment.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STUDIO_GUARANTEES.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 sm:p-8 card-luxury border border-border/70 bg-bg-card rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                        <Icon size={18} />
                      </div>
                      <h4 className="font-sans font-bold text-lg text-text-primary tracking-tight">
                        {g.title}
                      </h4>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-accent-gold bg-accent-gold/10 border border-accent-gold/25 px-2.5 py-1 rounded-full shrink-0">
                      {g.metric}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal mb-4">
                    {g.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-mono text-text-primary">
                  <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                  <span>Guaranteed in writing on every project</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
