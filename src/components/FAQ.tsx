"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  isPriority?: boolean;
}

export const LOCAL_FAQS: FAQItem[] = [
  {
    category: "Timeline",
    isPriority: true,
    question: "How fast will my website be live?",
    answer: "Most websites launch within 7 to 10 days. You will get a private staging link to test everything directly on your phone first. Once you review and approve it, we connect your domain and push it live.",
  },
  {
    category: "Pricing & Ownership",
    isPriority: true,
    question: "Are there any monthly fees or hidden retainers?",
    answer: "No. You pay a single, transparent project fee. Once your site is live, you own 100% of your website, domain, and files. No monthly maintenance fees, no surprise invoices.",
  },
  {
    category: "Customer Inquiries",
    isPriority: true,
    question: "How do customers contact me from the website?",
    answer: "Directly to your WhatsApp or phone. When a visitor taps to book or inquire, a pre-filled message opens right in your chat so you can respond and close the customer immediately — no tedious contact forms that get lost in spam.",
  },
  {
    category: "Google Search",
    isPriority: true,
    question: "Will my business actually show up on Google?",
    answer: "Yes. Every build is set up with local search optimization and Google Maps integration so people searching nearby for your services can easily find your business, read reviews, and call you directly.",
  },
  {
    category: "Getting Started",
    question: "What do I need to provide to get started?",
    answer: "Just your business name, photos (or logo if you have one), a list of your services, and your contact number. I take care of the writing, design, and technical launch from start to finish.",
  },
  {
    category: "After-Launch Support",
    question: "What happens if I need changes after we launch?",
    answer: "Direct after-launch support is included. Whenever you need to update phone numbers, add new services, or tweak pricing, just message me directly and it gets updated quickly.",
  },
  {
    category: "Location",
    question: "Where are you based, and do you work with businesses outside Assam?",
    answer: "I am based in North Guwahati, Assam, and work with business owners locally across Guwahati as well as remotely across India. Everything can be handled smoothly over WhatsApp and Google Meet.",
  },
];

interface FAQProps {
  isHomepage?: boolean;
}

export default function FAQ({ isHomepage = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayList = isHomepage ? LOCAL_FAQS.slice(0, 4) : LOCAL_FAQS;

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
        
        {/* Header: Editorial & Honest */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2
            className="font-serif text-text-primary dark:text-white leading-[1.1] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            {isHomepage ? (
              <>
                What clients ask before <span className="italic font-normal text-accent">hiring us.</span>
              </>
            ) : (
              <>
                Frequently asked <span className="italic font-normal text-accent">questions.</span>
              </>
            )}
          </h2>
          <p className="text-text-secondary dark:text-white/70 text-base sm:text-lg leading-relaxed font-normal">
            {isHomepage
              ? "Honest answers about delivery timelines, pricing, and how your website brings in customers."
              : "Clear, straightforward answers about turnaround, pricing, code ownership, and how we work."}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {displayList.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-bg-card dark:bg-white/[0.03] border-accent/40 shadow-sm"
                    : "bg-bg-card/60 dark:bg-white/[0.015] border-border/70 dark:border-white/10 hover:border-accent/30"
                }`}
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-text-primary dark:text-white leading-snug pr-2">
                    {faq.question}
                  </h3>
                  <div
                    aria-hidden="true"
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                      isOpen
                        ? "rotate-180 bg-accent text-white border-accent"
                        : "bg-bg-secondary dark:bg-white/[0.06] text-text-tertiary dark:text-white/60 border-border dark:border-white/10"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-text-secondary dark:text-white/75 text-sm sm:text-base leading-relaxed border-t border-border/20 dark:border-white/10 mt-1 font-sans">
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
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm text-text-secondary dark:text-white/70 hover:text-accent dark:hover:text-accent font-medium transition-colors group"
            >
              <span>Have more questions? Read the full FAQ</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-bg-card dark:bg-white/[0.03] border border-border/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base text-text-primary dark:text-white">
                Have a specific question about your project?
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-white/60 mt-0.5">
                Chat directly with Dipjyoti. No sales middlemen, no pressure.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I%20have%20a%20question%20about%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none shrink-0 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={15} />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
