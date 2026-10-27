"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  MessageSquare,
  Mail,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers,
  Globe,
  Database,
  RefreshCw,
  Phone,
  FileCheck,
} from "lucide-react";

interface BottleneckOption {
  id: string;
  title: string;
  scope: string;
  desc: string;
  value: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const BOTTLENECKS: BottleneckOption[] = [
  {
    id: "presence",
    title: "Custom Website & SEO Flagship",
    scope: "₹15,000 – ₹35,000 · 3–5 Days",
    desc: "Sub-300ms edge loading, local Google search indexing, custom design system, and frictionless mobile booking.",
    value: "Custom Website & SEO Flagship (₹15k – ₹35k)",
    icon: Globe,
  },
  {
    id: "webapps",
    title: "Web Application & Client Portal",
    scope: "₹35,000 – ₹75,000 · 1–2 Weeks",
    desc: "Secure customer logins, role-based dashboards, PostgreSQL database architecture, and custom administrative tools.",
    value: "Web Application & Client Portal (₹35k – ₹75k)",
    icon: Database,
  },
  {
    id: "automation",
    title: "WhatsApp & Workflow Automation",
    scope: "₹20,000 – ₹45,000 · 3–7 Days",
    desc: "Automated booking funnels, customer alert triggers, Google Sheets / CRM sync, and zero manual data copy-pasting.",
    value: "WhatsApp & Workflow Automation (₹20k – ₹45k)",
    icon: Layers,
  },
  {
    id: "overhaul",
    title: "Digital Overhaul & Speed Redesign",
    scope: "Custom Scoping · 2–4 Days",
    desc: "Eliminate bloated WordPress/Wix templates. Migrate to lightning-fast Next.js architecture with zero downtime.",
    value: "Digital Overhaul & Speed Redesign",
    icon: RefreshCw,
  },
];

const TIMELINES = [
  {
    id: "express",
    tag: "24-HOUR SPRINT",
    title: "Express Emergency Launch (24 Hours)",
    desc: "Rapid deployment for time-sensitive commercial opportunities, event launches, or urgent market entries.",
    value: "Express 24-Hour Launch",
  },
  {
    id: "standard",
    tag: "2–4 DAYS",
    title: "Standard Studio Delivery (2 – 4 Days)",
    desc: "Our standard sprint turnaround for fully custom digital flagships and automated booking pipelines.",
    value: "Standard 2–4 Days",
  },
  {
    id: "structured",
    tag: "1–2 WEEKS",
    title: "Structured Custom Build (1 – 2 Weeks)",
    desc: "Deep technical architecture for authenticated client portals, relational databases, and multi-tier integrations.",
    value: "Structured 1–2 Weeks",
  },
  {
    id: "flexible",
    tag: "EXPLORATORY",
    title: "Flexible Discovery / No Fixed Deadline",
    desc: "Phased engineering roadmap where thorough iterative scoping takes precedence over strict launch speed.",
    value: "Flexible Discovery",
  },
];

const BUDGET_OPTIONS = [
  { value: "15k_35k", label: "₹15,000 – ₹35,000 (Sprint Website & SEO)" },
  { value: "35k_75k", label: "₹35,000 – ₹75,000 (Web App / Client Portal)" },
  { value: "75k_150k", label: "₹75,000 – ₹1,50,000 (Full-Stack Platform)" },
  { value: "over_150k", label: "₹1,50,000+ (Enterprise System)" },
  { value: "scoping", label: "Need initial scoping guidance" },
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    problem: "",
    goal: "",
    situation: "",
    budget: "",
    timeline: "",
    dpdpConsent: true,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prefilledProblem = params.get("problem");
      if (prefilledProblem) {
        const matchingBottleneck = BOTTLENECKS.find((b) => b.id === prefilledProblem);
        if (matchingBottleneck) {
          setFormData((prev) => ({
            ...prev,
            goal: matchingBottleneck.value,
          }));
          setStep(2);
        }
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectBottleneck = (val: string) => {
    setFormData((prev) => ({ ...prev, goal: val }));
    setStep(2);
  };

  const handleSelectTimeline = (val: string) => {
    setFormData((prev) => ({ ...prev, timeline: val }));
    setStep(3);
  };

  const handleBack = () => {
    if (step > 1) {
      setErrorMessage("");
      setStep(step - 1);
    }
  };

  const validateStep3 = () => {
    if (!formData.name.trim()) return "Your name is required to initialize the project brief";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      return "A valid email address is required for architecture documentation";
    if (!formData.problem.trim())
      return "Please describe the core operational problem or business goal";
    if (!formData.budget) return "Please choose a budget allocation range";
    return null;
  };

  const handleGoToSummary = () => {
    const err = validateStep3();
    if (err) {
      setErrorMessage(err);
      return;
    }
    setErrorMessage("");
    setStep(4);
  };

  const formatBriefMessage = () => {
    return [
      "*PROJECT BRIEF — NERQIVA STUDIO*",
      "------------------------------------",
      `Client: ${formData.name}`,
      `Email: ${formData.email}`,
      `WhatsApp / Phone: ${formData.phone || "Not provided"}`,
      `Company: ${formData.business || "Individual / Not specified"}`,
      "",
      `*Target Service:*`,
      `${formData.goal}`,
      "",
      `*Target Timeline:*`,
      `${formData.timeline}`,
      "",
      `*Budget Allocation:*`,
      `${BUDGET_OPTIONS.find((b) => b.value === formData.budget)?.label || formData.budget}`,
      "",
      `*Core Operational Problem / Goal:*`,
      `${formData.problem}`,
      formData.situation ? `\n*Current Stack / Tools:*\n${formData.situation}` : "",
      "------------------------------------",
      "Grounded in India DPDP Act 2023 Consent.",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.dpdpConsent) {
      setErrorMessage("Please accept the data processing consent to proceed.");
      return;
    }
    setStatus("loading");

    // 1. Persist lead on server and dispatch background email notification
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((err) => console.error("Silent background lead sync error:", err));
    } catch (err) {
      console.error("Lead sync error:", err);
    }

    // 2. Open WhatsApp with full pre-written brief
    const message = formatBriefMessage();
    const waUrl = `https://wa.me/918724932985?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.dpdpConsent) {
      setErrorMessage("Please accept the data processing consent to proceed.");
      return;
    }
    setStatus("loading");

    // 1. Persist lead on server and dispatch background email notification
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((err) => console.error("Silent background lead sync error:", err));
    } catch (err) {
      console.error("Lead sync error:", err);
    }

    // 2. Launch default email client
    try {
      const subject = encodeURIComponent(`Project Brief: ${formData.name} — ${formData.business || "Inquiry"}`);
      const body = encodeURIComponent(formatBriefMessage());
      window.location.href = `mailto:nerqiva.studio@gmail.com?subject=${subject}&body=${body}`;
      setTimeout(() => {
        setStatus("success");
      }, 600);
    } catch {
      setErrorMessage("Could not launch default mail client. Please send your brief directly to nerqiva.studio@gmail.com.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      problem: "",
      goal: "",
      situation: "",
      budget: "",
      timeline: "",
      dpdpConsent: true,
    });
    setErrorMessage("");
    setStatus("idle");
    setStep(1);
  };

  const inputClass =
    "w-full px-4 py-3 bg-bg-secondary/70 border border-border/70 text-text-primary placeholder:text-text-tertiary font-sans text-sm rounded-xl focus:outline-none focus:border-accent transition-colors shadow-2xs";
  const labelClass =
    "block font-mono text-[10px] uppercase tracking-wider text-text-secondary mb-2 font-bold";

  return (
    <div className="section-container mb-24 max-w-4xl mx-auto">
      {/* Back to Home & Hero Heading */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-text-secondary hover:text-accent transition-colors mb-6 group"
        >
          <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" /> Back to Home
        </Link>

        <h1
          className="font-serif text-text-primary leading-[1.12] mb-4 tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", letterSpacing: "-0.03em" }}
        >
          Start a <span className="italic font-normal text-accent">project diagnostic</span>.
        </h1>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal mb-7">
          Answer 3 brief questions to receive a fixed-price engineering proposal, architecture recommendation, and direct WhatsApp demo within 24 hours.
        </p>

        <p className="mt-3 text-xs text-text-tertiary font-mono">
          Prefer immediate consultation?{" "}
          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20a%20project%20directly."
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary underline font-medium hover:text-accent transition-colors"
          >
            Chat directly on WhatsApp &rarr;
          </a>
        </p>
      </div>

      {/* Stepper Progress Bar */}
      <div className="mb-10 max-w-sm mx-auto">
        <div className="flex items-center justify-between font-mono text-[11px] font-bold select-none">
          {[
            { num: 1, label: "Scope" },
            { num: 2, label: "Timeline" },
            { num: 3, label: "Details" },
            { num: 4, label: "Review" },
          ].map((item, idx) => {
            const isCompleted = step > item.num;
            const isCurrent = step === item.num;
            return (
              <React.Fragment key={item.num}>
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`flex items-center justify-center w-7 h-7 rounded-full border transition-all text-xs ${
                      isCurrent
                        ? "border-accent text-accent bg-accent/15 font-bold shadow-2xs"
                        : isCompleted
                        ? "border-accent text-accent bg-accent/25 font-bold"
                        : "border-border/60 text-text-tertiary bg-bg-secondary/40"
                    }`}
                  >
                    {isCompleted ? <Check size={12} /> : item.num}
                  </div>
                  <span
                    className={`text-[9px] uppercase tracking-wider ${
                      isCurrent ? "text-accent font-bold" : isCompleted ? "text-text-primary" : "text-text-tertiary"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {idx < 3 && (
                  <div
                    className={`h-px flex-1 mx-2 -mt-4 transition-colors ${
                      step > item.num ? "bg-accent" : "bg-border/50"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Main Form Luxury Card */}
      <div className="card-luxury p-6 sm:p-9 rounded-2xl bg-bg-card border border-border/70 shadow-sm">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center py-12"
            >
              <div className="h-14 w-14 bg-accent/10 border border-accent/25 rounded-2xl flex items-center justify-center mb-5 text-accent shadow-2xs">
                <CheckCircle2 size={28} />
              </div>

              <h2 className="font-serif font-bold text-2xl text-text-primary mb-3">
                Project brief dispatched
              </h2>

              <p className="text-text-secondary text-sm max-w-md leading-relaxed font-normal mb-8">
                Your structured brief has been transmitted to our engineering team. We will analyze your specifications and respond with tailored demo links and architecture scoping within 24 hours.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 font-mono text-xs font-semibold rounded-lg cursor-pointer"
              >
                <span>Build Another Brief</span>
                <RefreshCw size={13} />
              </button>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {/* STEP 1: SERVICE & SCOPE SELECTION */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="border-b border-border/40 pb-4">
                    <h2 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
                      Select primary service scope
                    </h2>
                    <p className="text-text-secondary text-xs sm:text-sm font-normal mt-1">
                      Choose the engineering solution that best matches your immediate business requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {BOTTLENECKS.map((item) => {
                      const IconComp = item.icon;
                      const isSelected = formData.goal === item.value;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSelectBottleneck(item.value)}
                          className={`p-5 text-left border rounded-xl transition-all cursor-pointer group flex flex-col justify-between ${
                            isSelected
                              ? "border-accent bg-accent/5 shadow-2xs"
                              : "border-border/60 bg-bg-secondary/40 hover:border-accent/40 hover:bg-bg-secondary/70"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                <IconComp size={16} />
                              </div>
                              <span className="font-mono text-[9px] uppercase tracking-wider text-accent-gold font-bold bg-accent-gold/10 px-2 py-0.5 rounded border border-accent-gold/20">
                                {item.scope}
                              </span>
                            </div>

                            <h3 className="font-sans font-bold text-base text-text-primary group-hover:text-accent transition-colors">
                              {item.title}
                            </h3>

                            <p className="text-text-secondary text-xs leading-relaxed mt-2 font-normal">
                              {item.desc}
                            </p>
                          </div>

                          <div className="mt-5 pt-3 border-t border-border/30 flex items-center justify-between">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-text-tertiary">
                              Fixed-Price Delivery
                            </span>
                            <span className="font-mono text-[10px] font-bold text-accent flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                              Select & Continue <ArrowRight size={11} />
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: TIMELINE SELECTION */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border/40 pb-4">
                    <div>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
                        Target deployment timeline
                      </h2>
                      <p className="text-text-secondary text-xs sm:text-sm font-normal mt-1">
                        Select your preferred speed of execution.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-text-secondary hover:text-text-primary font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <ArrowLeft size={11} /> Back
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TIMELINES.map((t) => {
                      const isSelected = formData.timeline === t.value;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => handleSelectTimeline(t.value)}
                          className={`p-5 text-left border rounded-xl transition-all cursor-pointer group flex flex-col justify-between ${
                            isSelected
                              ? "border-accent bg-accent/5 shadow-2xs"
                              : "border-border/60 bg-bg-secondary/40 hover:border-accent/40 hover:bg-bg-secondary/70"
                          }`}
                        >
                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold bg-accent/10 px-2 py-0.5 rounded border border-accent/20 mb-3 inline-block">
                              {t.tag}
                            </span>
                            <h3 className="font-sans font-bold text-base text-text-primary group-hover:text-accent transition-colors">
                              {t.title}
                            </h3>
                            <p className="text-text-secondary text-xs leading-relaxed mt-2 font-normal">
                              {t.desc}
                            </p>
                          </div>

                          <div className="mt-5 pt-3 border-t border-border/30 flex items-center justify-end">
                            <span className="font-mono text-[10px] font-bold text-accent flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                              Select <ArrowRight size={11} />
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CLIENT DETAILS & PROBLEM SPECIFICATION */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border/40 pb-4">
                    <div>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
                        Project scope & coordinates
                      </h2>
                      <p className="text-text-secondary text-xs sm:text-sm font-normal mt-1">
                        Tell us about your organization and the operational challenge you are addressing.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-text-secondary hover:text-text-primary font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <ArrowLeft size={11} /> Back
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Anupam Barman"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. anupam@clinic.in"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        WhatsApp Phone Number (Recommended)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98640 XXXXX"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="business" className={labelClass}>
                        Business / Organization Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="e.g. CareLink Diagnostics"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Budget Allocation *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                      required
                    >
                      <option value="" disabled>
                        Select budget allocation range
                      </option>
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="problem" className={labelClass}>
                      What core bottleneck are you solving? *
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g. We are losing patient bookings because our current WordPress site takes 9 seconds to load on mobile and doesn't sync with WhatsApp."
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="situation" className={labelClass}>
                      Current Tools & Infrastructure (Optional)
                    </label>
                    <textarea
                      id="situation"
                      name="situation"
                      value={formData.situation}
                      onChange={handleChange}
                      rows={2}
                      placeholder="e.g. Google Sheets, legacy WordPress, WhatsApp Business, razorpay"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 text-xs rounded-xl font-normal">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleGoToSummary}
                    className="btn-primary w-full py-3.5 font-mono text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Review Project Brief</span>
                    <ArrowRight size={13} />
                  </button>
                </motion.div>
              )}

              {/* STEP 4: SUMMARY & DUAL SUBMISSION */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border/40 pb-4">
                    <div>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
                        Review & transmit brief
                      </h2>
                      <p className="text-text-secondary text-xs sm:text-sm font-normal mt-1">
                        Confirm your specifications before routing to technical leadership.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-text-secondary hover:text-text-primary font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <ArrowLeft size={11} /> Edit Details
                    </button>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 rounded-xl bg-bg-secondary/40 border border-border/60 space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-b border-border/30 pb-3">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-text-tertiary block mb-0.5">Client</span>
                        <span className="text-text-primary font-semibold truncate block">{formData.name}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-text-tertiary block mb-0.5">Email</span>
                        <span className="text-text-primary font-semibold truncate block">{formData.email}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-text-tertiary block mb-0.5">WhatsApp</span>
                        <span className="text-text-primary font-semibold truncate block">{formData.phone || "Not set"}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-text-tertiary block mb-0.5">Company</span>
                        <span className="text-text-primary font-semibold truncate block">{formData.business || "None"}</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 text-xs border-b border-border/30 pb-3">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-text-tertiary block mb-0.5">Service Scope</span>
                        <span className="text-text-primary font-semibold">{formData.goal}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-text-tertiary block mb-0.5">Timeline & Budget</span>
                        <span className="text-text-primary font-semibold">
                          {formData.timeline} · {BUDGET_OPTIONS.find((b) => b.value === formData.budget)?.label || formData.budget}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs space-y-2">
                      <span className="font-mono text-[10px] uppercase text-text-tertiary block">Core Problem</span>
                      <p className="text-text-secondary leading-relaxed font-sans">{formData.problem}</p>
                    </div>

                    {formData.situation && (
                      <div className="text-xs space-y-1 pt-2 border-t border-border/20">
                        <span className="font-mono text-[10px] uppercase text-text-tertiary block">Current Tools</span>
                        <p className="text-text-secondary leading-relaxed font-sans">{formData.situation}</p>
                      </div>
                    )}
                  </div>

                  {/* DPDP Consent */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-secondary/30 border border-border/50">
                    <input
                      type="checkbox"
                      id="dpdpConsent"
                      name="dpdpConsent"
                      checked={formData.dpdpConsent}
                      onChange={(e) => setFormData((prev) => ({ ...prev, dpdpConsent: e.target.checked }))}
                      className="mt-0.5 h-4 w-4 rounded border-border-dark text-accent focus:ring-accent cursor-pointer shrink-0"
                    />
                    <label htmlFor="dpdpConsent" className="text-xs text-text-secondary leading-relaxed cursor-pointer select-none font-normal">
                      I consent to NERQIVA processing my personal and business coordinates under India&apos;s{" "}
                      <Link href="/privacy" className="text-accent underline font-semibold hover:text-accent-gold">
                        Digital Personal Data Protection (DPDP) Act 2023
                      </Link>{" "}
                      solely to deliver this diagnostic proposal. Zero cross-site tracking or third-party marketing brokers.
                    </label>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 text-xs rounded-xl font-normal">
                      {errorMessage}
                    </div>
                  )}

                  {/* Dual Direct Submission Actions */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      disabled={status === "loading" || !formData.dpdpConsent}
                      className="btn-primary py-3.5 px-5 font-mono text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MessageSquare size={14} />
                      <span>{status === "loading" ? "Logging Brief..." : "Transmit via WhatsApp (Fastest)"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendEmail}
                      disabled={status === "loading" || !formData.dpdpConsent}
                      className="px-5 py-3.5 bg-bg-secondary/70 border border-border/80 text-text-primary hover:border-accent hover:text-accent font-mono text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Mail size={14} />
                      <span>{status === "loading" ? "Logging Brief..." : "Transmit via Email Client"}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Studio Coordinates & Communication Desk */}
      <div className="mt-14 pt-8 border-t border-border/60 grid sm:grid-cols-3 gap-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block mb-1">
            Direct Studio Desk
          </span>
          <p className="font-sans font-semibold text-sm text-text-primary">WhatsApp / Phone</p>
          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-secondary hover:text-accent transition-colors inline-block mt-0.5"
          >
            +91 87249 32985
          </a>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block mb-1">
            Executive Inquiries
          </span>
          <p className="font-sans font-semibold text-sm text-text-primary">Studio Email</p>
          <a
            href="mailto:nerqiva.studio@gmail.com"
            className="text-xs font-mono text-text-secondary hover:text-accent transition-colors inline-block mt-0.5"
          >
            nerqiva.studio@gmail.com
          </a>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block mb-1">
            Geographic Base
          </span>
          <p className="font-sans font-semibold text-sm text-text-primary">North Guwahati / Assam</p>
          <span className="text-text-tertiary text-xs font-mono block mt-0.5">Pan-India Remote Sprints</span>
        </div>
      </div>
    </div>
  );
}
