"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  isPriority?: boolean;
}

export const LOCAL_FAQS: FAQItem[] = [
  {
    category: "Turnaround & Timeline",
    isPriority: true,
    question: "How fast will our website actually go live?",
    answer: "Within 48 hours, you receive a private, fully interactive mobile staging link directly on your smartphone. Once you review and approve the build, we connect your domain and push it live to Google and the public in under 4 days. No 6-week wireframe delays or committee meetings.",
  },
  {
    category: "Pricing & Ownership",
    isPriority: true,
    question: "Do we have to pay recurring monthly maintenance retainers?",
    answer: "No. Traditional agencies charge ₹3,000 to ₹10,000 every single month just to keep a basic WordPress site from breaking. At NERQIVA, we charge a transparent, one-time project fee. On launch day, 100% of the clean source code, domain DNS, and design assets are transferred to your ownership with zero recurring hostage fees.",
  },
  {
    category: "Leads & WhatsApp",
    isPriority: true,
    question: "How do prospective clients book appointments or contact us?",
    answer: "Directly through your personal WhatsApp. When a client taps the booking button on your website, an automated message with their chosen service, timing, and appointment details opens instantly inside your WhatsApp chat. No 8-field contact forms that get lost in spam folders.",
  },
  {
    category: "Intake & Requirements",
    question: "What do I need to provide to start a project?",
    answer: "Just your business name, logo or photos, service/product list, and your WhatsApp phone number. We handle everything else—conversion-focused copy, responsive UI engineering, local SEO schemas, and DNS deployment.",
  },
  {
    category: "Location & Office",
    question: "Where is NERQIVA Studio located?",
    answer: "NERQIVA Studio is based at Baruah Souk, Rudreswar, North Guwahati, Guwahati, Assam 781030. We serve business owners locally across North Guwahati, Rudreswar, Guwahati, statewide Assam, and remotely across Pan-India.",
  },
  {
    category: "Google & Local SEO",
    question: "Do you help my business show up on Google Maps and local searches?",
    answer: "Yes, every website project includes Google Business Profile guidance, local Schema.org markup, and click-to-call direct routing so nearby customers in your city can easily find your location and call you.",
  },
  {
    category: "Mobile Optimization",
    question: "Will my website look great on mobile phones?",
    answer: "Yes, all NERQIVA websites are built 100% mobile-first and tested on iOS & Android screens. We guarantee sub-1-second FCP load speeds and touch-friendly booking buttons.",
  },
];

interface FAQProps {
  isHomepage?: boolean;
}

export default function FAQ({ isHomepage = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayList = isHomepage ? LOCAL_FAQS.slice(0, 3) : LOCAL_FAQS;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/40 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="section-container max-w-4xl">
        
        {/* Header: Editorial Authority without Underlines */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
            {isHomepage ? "Essential Client Questions" : "Frequently Asked Questions"}
          </span>
          <h2
            className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            {isHomepage ? (
              <>
                What clients ask before <span className="italic font-normal text-accent">hiring us</span>.
              </>
            ) : (
              <>
                Frequently asked <span className="italic font-normal text-accent">questions</span>.
              </>
            )}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            {isHomepage
              ? "The 3 critical facts on delivery speed, 100% asset ownership, and direct WhatsApp lead conversion."
              : "Direct, verified answers on delivery turnaround, code ownership, fixed pricing, and our 4-Day Sprint launch workflow."}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {displayList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-bg-card border-accent/40 shadow-lg shadow-black/10"
                    : "bg-bg-card/70 border-border/70 hover:border-accent/30"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-accent shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="font-sans font-semibold text-base sm:text-lg text-text-primary leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-lg border transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 bg-accent text-white border-accent" : "bg-bg-secondary text-text-tertiary border-border"
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-text-secondary text-sm md:text-base leading-relaxed border-t border-border/20 mt-1 font-sans">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Homepage link to full FAQ directory */}
        {isHomepage && (
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent font-bold transition-colors py-2 px-4 rounded-full bg-bg-secondary border border-border hover:border-accent/40"
            >
              <span>Have questions about hosting, domains, or migrations? Read full FAQ directory</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        )}

        {/* Still Have Questions CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-bg-card border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-text-primary">Have a specific question about your business?</h4>
              <p className="font-mono text-[10px] sm:text-xs text-text-tertiary uppercase tracking-wider mt-0.5">Chat directly with founder Dipjyoti on WhatsApp</p>
            </div>
          </div>
          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20have%20a%20question%20about%20building%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 w-full sm:w-auto justify-center"
          >
            <span>Ask on WhatsApp</span>
            <Sparkles size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
