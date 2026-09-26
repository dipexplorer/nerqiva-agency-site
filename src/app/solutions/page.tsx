"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

const SOLUTIONS_DETAIL = [
  {
    id: "website",
    title: "High-Converting Business Websites",
    subtitle: "For local businesses whose current website looks outdated or fails to get leads.",
    problem: "Many customers pass over great local salons, studios, or clinics because their websites load slowly or look unprofessional on mobile. If visitors don't trust your site, they won't call you.",
    whenItMakesSense: "When you want a premium website that builds instant trust, looks stunning on phones, and highlights your work without costing a fortune.",
    whatWeBuild: "Ultra-fast, mobile-optimized business websites. We write clear text, display high-resolution photo galleries, and add 1-click contact buttons.",
    engagement: "Choose a demo theme today, share your photos & text, and go live in 24 Hours!",
    expectations: "A blistering-fast website that impresses your clients and drives inquiries directly to your phone.",
    gradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    id: "whatsapp",
    title: "Instant WhatsApp Lead Flow",
    subtitle: "For businesses who want instant inquiries without complicated email forms.",
    problem: "Customers on mobile phones don't like filling out long contact forms and waiting 2 days for a reply. They want quick answers on WhatsApp.",
    whenItMakesSense: "When you want every website visitor to easily contact you on WhatsApp with 1 tap, automatically sending their service request.",
    whatWeBuild: "Smart WhatsApp integration buttons with pre-filled inquiry messages so customers can book appointments or ask prices instantly.",
    engagement: "Configured and connected to your WhatsApp number in under 2 hours.",
    expectations: "Instant customer messages delivered directly to your phone while they are browsing your website.",
    gradient: "from-emerald-500/5 to-teal-500/5",
  },
  {
    id: "local-seo",
    title: "Google Maps & Local Search Setup",
    subtitle: "For stores and local services wanting to get found by nearby customers.",
    problem: "When people in your city search 'best salon near me' or 'wedding photographer in town', if your Google listing and website aren't linked, you lose business to competitors.",
    whenItMakesSense: "When you want to dominate local search results in your city and make it easy for clients to find your location.",
    whatWeBuild: "Integrated Google Maps widgets, click-to-call phone buttons, customer review highlights, and local SEO tag setup.",
    engagement: "Included standard with every website launch.",
    expectations: "Higher local visibility, easy directions for clients, and more direct phone calls.",
    gradient: "from-purple-500/5 to-pink-500/5",
  },
  {
    id: "custom-portals",
    title: "Custom Client Portals & Schedulers",
    subtitle: "For businesses needing online appointment booking or client photo galleries.",
    problem: "Managing client bookings, sending photo previews manually, or tracking customer invoices via chat messages wastes hours of your day.",
    whenItMakesSense: "When you need a clean online portal for clients to view their photos, book appointment slots, or pay invoices online.",
    whatWeBuild: "Simple, easy-to-use customer portals, online scheduling tools, and private photo gallery review pages.",
    engagement: "Built and tailored to your exact business workflow in 1-2 days.",
    expectations: "Saved admin hours every day with automated client booking and file previews.",
    gradient: "from-amber-500/5 to-orange-500/5",
  }
];

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Services & Solutions | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        <div className="section-container mb-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent/40" />
            <span className="label-eyebrow">OUR SERVICES</span>
          </div>
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            High-converting websites built to <span className="bg-linear-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500 bg-clip-text text-transparent font-black">grow your business.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light">
            We build simple, fast, and stunning websites for local business owners. Delivered live in **24 Hours** with zero technical headache.
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
                          Delivery Speed
                        </h4>
                        <p className="text-xs text-emerald-400 font-semibold leading-relaxed">
                          ⚡ {sol.engagement}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-1">
                          Your Result
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {sol.expectations}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/contact?service=${sol.id}`}
                      className="group flex items-center justify-center gap-2.5 py-3.5 bg-accent text-white dark:text-bg-primary font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-colors shadow-lg shadow-accent/15"
                      style={{ borderRadius: "4px" }}
                    >
                      Get Started in 24 Hours
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
