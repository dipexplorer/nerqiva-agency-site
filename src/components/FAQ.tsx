"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const LOCAL_FAQS: FAQItem[] = [
  {
    category: "Delivery & Speed",
    question: "How fast can a business website be built in North Guwahati & Guwahati?",
    answer: "We deliver your live custom website preview in 24 Hours. Once you pick a demo theme and share your business photos, text, and WhatsApp number, we customize the site and launch it live in 1 day with zero technical headache.",
  },
  {
    category: "Pricing & Ownership",
    question: "How much does a business website cost in Guwahati & Assam?",
    answer: "NERQIVA offers transparent fixed-fee pricing with zero hidden costs and zero monthly maintenance retainers. Upon project completion, you receive 100% full ownership of your source code, domain, and digital assets.",
  },
  {
    category: "Pricing & Retainers",
    question: "Do you charge recurring monthly maintenance fees?",
    answer: "No. Unlike conventional agencies that charge ₹2,000 to ₹10,000 monthly retainers just to keep a basic site online, NERQIVA charges a one-time fixed fee with 100% source code handover and zero monthly software lock-in.",
  },
  {
    category: "Intake & Requirements",
    question: "What do I need to provide to start a project?",
    answer: "Just your business name, logo or photos, service/product list, and your WhatsApp phone number. We handle everything else—conversion-focused copy, responsive UI engineering, local SEO schemas, and DNS deployment.",
  },
  {
    category: "WhatsApp Leads",
    question: "Can customers contact me directly on WhatsApp from my website?",
    answer: "Yes, we integrate 1-click direct WhatsApp booking buttons. When a customer taps to inquire or book an appointment, their name, chosen service, and pre-formatted inquiry opens instantly inside your WhatsApp chat on your phone.",
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
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": LOCAL_FAQS.map((faq) => ({
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
        
        {/* Header: Editorial Authority without Kicker */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2
            className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Frequently asked <span className="italic font-normal text-accent">questions</span>.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Direct, verified answers on delivery turnaround, code ownership, fixed pricing, and our 4-Day Sprint launch workflow.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {LOCAL_FAQS.map((faq, index) => {
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

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-bg-card border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-text-primary">Have a specific question about your business?</h4>
              <p className="font-mono text-[10px] sm:text-xs text-text-tertiary uppercase tracking-wider mt-0.5">Chat directly with our lead architect on WhatsApp</p>
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
