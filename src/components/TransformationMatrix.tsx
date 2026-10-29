"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2 } from "lucide-react";

interface ComparisonItem {
  id: string;
  tag: string;
  title: string;
  trap: {
    heading: string;
    description: string;
    cost: string;
  };
  solution: {
    heading: string;
    description: string;
    deliverable: string;
    ctaQuery: string;
  };
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: "inquiries",
    tag: "Lead Routing",
    title: "Instagram DM Leaks vs. 1-Tap WhatsApp",
    trap: {
      heading: "Inquiries vanish into unanswered Instagram DMs",
      description:
        "High-intent clients reach out at 10 PM asking for bridal rates or private clinic slots. You reply the next morning—they already booked with a faster competitor at 10:30 PM.",
      cost: "70% of DM inquiries bounce before ever scheduling a consultation.",
    },
    solution: {
      heading: "Instant WhatsApp routing with pre-filled context",
      description:
        "Clients tap one button on your site. Their requested service, date, and budget automatically populate directly into your personal WhatsApp in 3 seconds.",
      deliverable: "Pre-filled WhatsApp Lead Engine + Zero form friction",
      ctaQuery: "WhatsApp Lead Engine",
    },
  },
  {
    id: "mobile",
    tag: "Mobile Speed",
    title: "Slow WordPress Sites vs. Sub-Second Edge",
    trap: {
      heading: "Heavy themes choking on real mobile 4G networks",
      description:
        "Over 85% of your local clients visit on smartphones. If your site takes 5+ seconds to paint or buttons squish on small screens, visitors leave before reading your offers.",
      cost: "53% of mobile visitors abandon sites that take longer than 3 seconds to load.",
    },
    solution: {
      heading: "Sub-second load times verified on Jio & Airtel 4G",
      description:
        "Engineered with clean Next.js edge architecture. Instantaneous paint times, crisp editorial typography, and butter-smooth mobile scrolling.",
      deliverable: "Lighthouse 95+ performance + Zero layout shift",
      ctaQuery: "Sub-Second Mobile Flagship",
    },
  },
  {
    id: "google",
    tag: "Local Search",
    title: "Digital Invisibility vs. Google Maps Authority",
    trap: {
      heading: "Competitors rank above you on Google Maps",
      description:
        "When someone searches 'best dental clinic near me' or 'luxury bridal MUA Guwahati', your business is absent. Competitors capture those high-ticket clients purely by being visible.",
      cost: "High-ticket walk-in and search traffic lost entirely to nearby competitors.",
    },
    solution: {
      heading: "Dominant local map placement & structured search schema",
      description:
        "Complete LocalBusiness schema optimization, verified Google Maps pin linking, operating hours, and 1-tap call/directions setup.",
      deliverable: "Google Business calibration + Local SEO metadata",
      ctaQuery: "Google Maps Local Search Visibility",
    },
  },
  {
    id: "ownership",
    tag: "Commercial Freedom",
    title: "Monthly Retainer Hostage vs. 100% Asset Ownership",
    trap: {
      heading: "Agencies charging ₹10k/month just to keep your site online",
      description:
        "Traditional agencies lock you into proprietary platforms, charge monthly 'maintenance' retainers, and take weeks to make simple text updates to your own website.",
      cost: "Endless recurring software fees for an asset you don't even own.",
    },
    solution: {
      heading: "Complete code, domain, and asset handover on launch",
      description:
        "You own 100% of your repository, domain DNS, and design assets upon project cutover. Zero monthly agency hostage fees. Zero lock-in.",
      deliverable: "Full GitHub repository handover + Permanent license",
      ctaQuery: "100% Owned Digital Flagship",
    },
  },
];

export default function TransformationMatrix() {
  const [activeId, setActiveId] = useState<string>("inquiries");
  const activeItem = COMPARISONS.find((c) => c.id === activeId) || COMPARISONS[0];

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 sm:mb-16 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                The Commercial Difference
              </span>
            </div>
            <h2
              className="font-display font-black text-text-primary text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              The agency trap vs.{" "}
              <span className="font-serif italic font-normal text-accent">
                the NERQIVA standard.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-text-secondary text-base leading-relaxed">
              Why ambitious clinics, studios, and high-ticket service brands choose engineered client acquisition over bloated agency retainers.
            </p>
          </div>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-10 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {COMPARISONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`whitespace-nowrap shrink-0 px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold border transition-all duration-200 cursor-pointer rounded-full flex items-center gap-2 ${
                activeId === item.id
                  ? "bg-accent text-text-inverted border-accent shadow-sm"
                  : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
              }`}
            >
              <span className="text-[10px] opacity-70">[{item.tag}]</span>
              <span>{item.title.split(" vs. ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
          >
            {/* The Trap (Before) */}
            <div className="p-7 sm:p-9 card-luxury border border-red-500/20 bg-bg-card/60 rounded-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <XCircle size={12} className="shrink-0" />
                    The Typical Agency Pitfall
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">01</span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-2xl text-text-primary tracking-tight leading-snug">
                  {activeItem.trap.heading}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                  {activeItem.trap.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-border/40">
                <div className="font-mono text-xs text-red-400/90 flex items-start gap-2">
                  <span className="font-bold shrink-0">Cost:</span>
                  <span>{activeItem.trap.cost}</span>
                </div>
              </div>
            </div>

            {/* The Solution (The NERQIVA Standard) */}
            <div className="p-7 sm:p-9 card-luxury border border-accent/40 bg-bg-card rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden group">
              {/* Subtle accent highlight badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-gold bg-accent-gold/10 border border-accent-gold/25 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="shrink-0" />
                    The NERQIVA Standard
                  </span>
                  <span className="font-mono text-xs text-accent font-bold">02</span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-2xl text-text-primary tracking-tight leading-snug">
                  {activeItem.solution.heading}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                  {activeItem.solution.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-mono text-xs text-text-primary font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{activeItem.solution.deliverable}</span>
                </div>

                <a
                  href={`https://wa.me/918724932985?text=${encodeURIComponent(
                    `Hi NERQIVA! I'd like to consult on the ${activeItem.solution.ctaQuery} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent hover:text-accent-mid transition-colors group/cta"
                >
                  <span>Commission this</span>
                  <ArrowRight size={13} className="group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
