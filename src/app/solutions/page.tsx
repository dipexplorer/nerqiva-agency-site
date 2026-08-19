"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

const SOLUTIONS_DETAIL = [
  {
    id: "presence",
    title: "Digital Presence & Positioning",
    subtitle: "For businesses whose digital presence fails to match their technical credibility.",
    problem: "Many highly competent firms are passed over because their websites look outdated, load slowly, or fail to clearly articulate what problems they solve. If a visitor cannot trust your website, they will not trust you with their operations.",
    whenItMakesSense: "When you are losing opportunities to less competent competitors who have cleaner marketing, or when your current website is a template that doesn't convey your actual capabilities.",
    whatWeBuild: "High-performance, custom-coded Next.js marketing websites. We write precise copy, design responsive layouts that establish trust, and optimize for perfect Core Web Vitals scores.",
    engagement: "1-2 days discovery and positioning audit, followed by 3-5 days design and development.",
    expectations: "A blistering-fast website that clearly explains your business and drives qualified leads to your contact form.",
    gradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    id: "automation",
    title: "Workflow Automation Systems",
    subtitle: "For organizations losing hours daily to manual copy-paste work.",
    problem: "When your CRM, invoicing tool, database, and calendar do not communicate, humans become the integrations. This leads to slow execution times, data entry errors, and operations that cannot scale.",
    whenItMakesSense: "When your team spends more than an hour a day copying details from one dashboard to another, or when customer notifications are delayed due to manual steps.",
    whatWeBuild: "Custom integrations, API connections, background worker processes, and automated triggers. We connect your tools (Supabase, Stripe, Slack, CRMs) to run operations on autopilot.",
    engagement: "Operational workflow mapping, API spec definition, fail-safe testing, and rollout.",
    expectations: "Repetitive tasks run in seconds behind the scenes, with detailed error tracking and zero human effort.",
    gradient: "from-purple-500/5 to-pink-500/5",
  },
  {
    id: "webapps",
    title: "Custom Web Applications",
    subtitle: "For internal operations or customer portals that off-the-shelf software cannot solve.",
    problem: "Using generic spreadsheets or complex enterprise software to run custom operations is like fitting a square peg in a round hole. You either compromise on your process or pay for features you never use.",
    whenItMakesSense: "When you need a secure client portal, an internal dashboard, or a relational database utility that matches your exact business rules.",
    whatWeBuild: "Secure, database-backed web portals. We design clear relational database schemas, write secure API endpoints, configure role-based access control, and build clean dashboards.",
    engagement: "Detailed user requirements spec, schema blueprinting, incremental sprints, UAT, and launch.",
    expectations: "A secure, scalable web app that works exactly how your business operates, with full mobile compatibility.",
    gradient: "from-emerald-500/5 to-teal-500/5",
  },
  {
    id: "data",
    title: "Data Pipelines & Telemetry",
    subtitle: "For companies dealing with fragmented, slow, or raw sensor telemetry.",
    problem: "Raw data is useless if it is trapped in local logs or polls too slowly. Legacy data pipelines lock up under high concurrency, making real-time monitoring and anomaly detection impossible.",
    whenItMakesSense: "When you need to ingest telemetry from IoT sensors, biometric scanners, or remote databases and display it instantly on a real-time monitor.",
    whatWeBuild: "High-throughput data pipelines, WebSocket streamers, and custom analytics dashboards. We handle ingestion, database indexing, and build fast visualization tools.",
    engagement: "Ingestion capacity planning, telemetry sync tests, dashboard design, scaling audit.",
    expectations: "Sub-second updates from sensor to screen, zero database locking, and instant anomaly alerts.",
    gradient: "from-amber-500/5 to-orange-500/5",
  }
];

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Capabilities & Solutions | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        <div className="section-container mb-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent/40" />
            <span className="label-eyebrow">Solutions</span>
          </div>
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Systems engineered to solve operational bottlenecks.
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
            We don&apos;t build technology for its own sake. We design, code, and deploy custom systems built to solve specific business problems.
          </p>
        </div>

        <div className="section-container mb-32 max-w-5xl">
          <div className="flex flex-col gap-16">
            {SOLUTIONS_DETAIL.map((sol) => (
              <div 
                key={sol.id} 
                id={sol.id}
                className={`glass-panel p-8 md:p-12 relative overflow-hidden bg-linear-to-br ${sol.gradient}`}
                style={{ borderRadius: "4px" }}
              >
                <div className="relative z-10 grid md:grid-cols-12 gap-8 lg:gap-12">
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-primary mb-2">
                        {sol.title}
                      </h2>
                      <p className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                        {sol.subtitle}
                      </p>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed">
                      {sol.problem}
                    </p>

                    <div className="pt-4 border-t border-border/40">
                      <h3 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-2">
                        What We Build
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {sol.whatWeBuild}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-5 flex flex-col justify-between gap-8 md:border-l md:border-border/40 md:pl-8 lg:pl-12">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-1">
                          When It Makes Sense
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {sol.whenItMakesSense}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-1">
                          The Engagement
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {sol.engagement}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-1">
                          Client Expectation
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {sol.expectations}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/contact?problem=${sol.id}`}
                      className="group flex items-center justify-center gap-2.5 py-3.5 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-colors shadow-lg shadow-accent/15"
                      style={{ borderRadius: "4px" }}
                    >
                      Discuss this problem
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ClosingSection />
      </div>
    </>
  );
}
