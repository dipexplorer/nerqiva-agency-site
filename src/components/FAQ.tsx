"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

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
    question: "How fast will my website actually go live?",
    answer: "Most websites launch within 7 to 10 days. You get a private preview link to test everything directly on your phone first. Once you review and approve it, we connect your domain and push it live.",
  },
  {
    category: "Pricing & Ownership",
    isPriority: true,
    question: "Are there any monthly fees or hidden charges?",
    answer: "No. You pay a clear one-time project fee. Once your site is live, you own 100% of your website, domain, and files. No monthly maintenance retainers, no surprise invoices.",
  },
  {
    category: "Customer Inquiries",
    isPriority: true,
    question: "How do customers contact me from the site?",
    answer: "Directly to your WhatsApp or phone. When a visitor taps to book or inquire, a pre-filled message opens right in your chat so you can respond and close the customer immediately — no tedious contact forms that get lost in spam.",
  },
  {
    category: "Google Search",
    isPriority: true,
    question: "Will my business show up on Google?",
    answer: "Yes. Every build is set up with local Google search optimization and Google Maps integration so nearby customers searching for your services can easily find your business, read reviews, and call you directly.",
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
  const displayList = isHomepage ? LOCAL_FAQS.slice(0, 4) : LOCAL_FAQS;

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
    <section id="faq" className="py-24 sm:py-32 bg-bg-primary text-text-primary border-t border-border/40 relative z-10 overflow-hidden">
      {/* Search Engine Optimization Schema (100% visible in SSR DOM) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========================================================
          BACKGROUND SCULPTURAL WATERMARK (F, A, Q)
          Fully contained inside section boundaries (no overflow/clipping),
          distinctly visible, and responsively calibrated for mobile & desktop.
          ======================================================== */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Sculptural 'F' — Upper-Left, brought comfortably inside the frame */}
        <div className="absolute top-2 sm:top-4 lg:top-6 left-[5%] sm:left-[8%] lg:left-[11%] xl:left-[14%] w-28 sm:w-52 lg:w-64 h-36 sm:h-64 lg:h-80 text-text-primary dark:text-white">
          <svg viewBox="0 0 320 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sculptF" x1="0" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.09" />
                <stop offset="55%" stopColor="currentColor" stopOpacity="0.035" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <text
              x="60"
              y="270"
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight="900"
              fontSize="270"
              fill="url(#sculptF)"
              transform="rotate(-5 160 170)"
              letterSpacing="-0.04em"
            >
              F
            </text>
          </svg>
        </div>

        {/* Sculptural 'A' — Mid-Right Margin, brought comfortably inside the frame */}
        <div className="absolute top-[26%] sm:top-[16%] lg:top-[12%] right-[5%] sm:right-[8%] lg:right-[11%] xl:right-[14%] w-32 sm:w-56 lg:w-72 h-40 sm:h-72 lg:h-88 text-text-primary dark:text-white">
          <svg viewBox="0 0 340 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sculptA" x1="0.2" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.09" />
                <stop offset="55%" stopColor="currentColor" stopOpacity="0.035" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <text
              x="60"
              y="270"
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight="900"
              fontSize="270"
              fill="url(#sculptA)"
              transform="rotate(5 170 170)"
              letterSpacing="-0.04em"
            >
              A
            </text>
          </svg>
        </div>

        {/* Sculptural 'Q' — Lower Area, comfortably above bottom border */}
        <div className="absolute bottom-20 sm:bottom-24 lg:bottom-20 left-[8%] sm:left-[18%] lg:left-[26%] w-32 sm:w-56 lg:w-72 h-40 sm:h-72 lg:h-88 text-text-primary dark:text-white">
          <svg viewBox="0 0 320 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sculptQ" x1="0.1" y1="0.1" x2="0.9" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
                <stop offset="60%" stopColor="currentColor" stopOpacity="0.03" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <text
              x="45"
              y="275"
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight="900"
              fontSize="270"
              fill="url(#sculptQ)"
              transform="rotate(-4 160 180)"
              letterSpacing="-0.04em"
            >
              Q
            </text>
          </svg>
        </div>
      </div>

      {/* ========================================================
          FOREGROUND CONTENT: 2-COLUMN OPEN EDITORIAL GRID
          ======================================================== */}
      <div className="section-container max-w-5xl relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Pure Editorial Authority (Zero Eyebrow / Zero Split Typography) */}
        <div className="mb-14 sm:mb-20">
          <h2
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-text-primary dark:text-white leading-[1.05] tracking-[-0.035em] mb-4"
          >
            {isHomepage ? "Before we begin." : "Frequently asked questions."}
          </h2>

          <p className="text-text-secondary dark:text-white/70 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            {isHomepage
              ? "Everything you need to know about timeline, pricing, and how we deliver your site."
              : "Clear, direct answers about turnaround times, one-time pricing, ownership, and how we work."}
          </p>
        </div>

        {/* 2-Column Open Grid (Immediate Readability + 100% SEO Indexing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 lg:gap-x-20 gap-y-12 sm:gap-y-16">
          {displayList.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-sans font-bold text-lg sm:text-xl lg:text-[1.375rem] text-text-primary dark:text-white tracking-[-0.025em] leading-[1.3] mb-3">
                {faq.question}
              </h3>
              <p className="text-text-secondary dark:text-white/70 text-sm sm:text-base leading-relaxed font-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Actions & WhatsApp Direct Line */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-border/50 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {isHomepage ? (
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm text-text-secondary dark:text-white/70 hover:text-accent dark:hover:text-accent font-medium transition-colors group focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
            >
              <span>Have more questions? Read the full directory</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div className="text-sm text-text-secondary dark:text-white/60">
              North Guwahati, Assam · Available Pan-India
            </div>
          )}

          <a
            href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I%20have%20a%20question%20about%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer select-none shrink-0 w-full sm:w-auto justify-center focus-visible:outline-2 focus-visible:outline-accent"
          >
            <MessageCircle size={16} />
            <span>Ask Dipjyoti on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
