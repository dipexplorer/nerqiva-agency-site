"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Check } from "lucide-react";
import Head from "next/head";

const BOTTLENECKS = [
  {
    id: "presence",
    title: "Digital Presence",
    desc: "Your website looks outdated, loads slowly, or doesn't bring in clients.",
    value: "Upgrade Digital Presence & Credibility"
  },
  {
    id: "automation",
    title: "Workflow Automation",
    desc: "Your team wastes hours copy-pasting data and running manual processes.",
    value: "Automate manual tasks and tool workflows"
  },
  {
    id: "webapps",
    title: "Custom Web App",
    desc: "You need a secure client portal, database dashboard, or custom tool.",
    value: "Build a custom database portal or web app"
  },
  {
    id: "data",
    title: "Data Pipelines",
    desc: "You need to capture, clean, or monitor real-time telemetry and logs.",
    value: "Deploy a data ingestion pipeline or real-time monitor"
  }
];

const TIMELINES = [
  { id: "immediate", label: "Immediate (Under 1 week)", value: "immediate" },
  { id: "medium", label: "Standard (1 - 3 weeks)", value: "medium" },
  { id: "flexible", label: "Flexible timeline", value: "flexible" }
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    problem: "",
    goal: "",
    situation: "",
    budget: "",
    timeline: "",
    context: "",
    dpdpConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Prefill solution goals if redirected from solutions page
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
          setStep(2); // Prefilled Step 1, go straight to Step 2
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
    if (step > 1) setStep(step - 1);
  };

  const validateStep3 = () => {
    if (!formData.name.trim()) return "Your name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      return "A valid email address is required";
    if (!formData.problem.trim()) return "Please describe the core bottleneck you want to solve";
    if (!formData.budget) return "Please choose a budget range";
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

  const handleSubmitBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const subject = encodeURIComponent(`Project Brief from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business || "Not provided"}\n\nBottleneck Category:\n${formData.goal}\n\nCore Operational Bottleneck:\n${formData.problem}\n\nCurrent Stack / Tools:\n${formData.situation || "Not provided"}\n\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nAdditional Context:\n${formData.context || "Not provided"}`
      );
      
      window.location.href = `mailto:nerqiva.studio@gmail.com?subject=${subject}&body=${body}`;

      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong compiling your mail client brief. Please email nerqiva.studio@gmail.com directly.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      business: "",
      problem: "",
      goal: "",
      situation: "",
      budget: "",
      timeline: "",
      context: "",
      dpdpConsent: false,
    });
    setStatus("idle");
    setStep(1);
  };

  const inputClass =
    "w-full px-4 py-3 bg-bg-secondary border border-border-dark text-text-primary placeholder-text-tertiary font-sans text-base focus:outline-none focus:border-accent/60 focus:bg-white dark:focus:bg-bg-dark transition-colors duration-200 shadow-sm";
  const labelClass = "block font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-2 font-semibold";

  return (
    <>
      <Head>
        <title>Start a Project Brief | NERQIVA</title>
      </Head>
      <div className="pt-32 pb-24 min-h-[85vh] flex flex-col justify-center relative">
        <div className="section-container relative z-20 w-full max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-2 block">
              [Step {step} of 4] Project Intake Brief
            </span>
            <h1 className="font-sans font-extrabold text-text-primary leading-tight tracking-tight mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.03em" }}>
              Tell us the problem.
            </h1>
            <p className="text-text-secondary text-sm md:text-base">
              Answer a few questions to build a structured engineering brief.
            </p>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="flex items-center justify-between max-w-xs mx-auto mb-10 font-mono text-[10px] font-bold text-text-secondary select-none">
            {[1, 2, 3, 4].map((num) => (
              <React.Fragment key={num}>
                <div className={`flex items-center justify-center w-6 h-6 rounded-full border transition-all ${
                  step === num 
                    ? "border-accent text-accent bg-accent/5 font-extrabold"
                    : step > num
                      ? "border-emerald-500 text-emerald-500 bg-emerald-500/5"
                      : "border-border/60 text-text-tertiary"
                }`}>
                  {step > num ? <Check size={10} /> : num}
                </div>
                {num < 4 && (
                  <div className={`h-px flex-1 mx-2 transition-colors ${
                    step > num ? "bg-emerald-500" : "bg-border/60"
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="glass-panel p-6 md:p-8 shadow-xl" style={{ borderRadius: "4px" }}>
            <AnimatePresence mode="wait">
              
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 text-emerald-500">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-sans font-bold text-2xl mb-3 text-text-primary">
                    Project Brief Generated!
                  </h3>
                  <p className="text-text-secondary text-sm max-w-md leading-relaxed mb-8">
                    Your local email client has opened with your structured brief. Click send to share it directly with our lead architect. We will follow up within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-accent text-white font-mono text-[10px] uppercase font-bold tracking-widest hover:bg-accent-mid transition-colors duration-200 rounded cursor-pointer"
                  >
                    Build Another Brief
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  
                  {/* STEP 1: SELECT BOTTLENECK */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <h2 className="font-sans font-bold text-lg text-text-primary border-b border-border/40 pb-3">
                        What is your primary bottleneck?
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {BOTTLENECKS.map((b) => (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => handleSelectBottleneck(b.value)}
                            className={`p-5 text-left border rounded transition-all cursor-pointer group flex flex-col justify-between ${
                              formData.goal === b.value
                                ? "border-accent bg-accent/2"
                                : "border-border/50 bg-bg-secondary/40 hover:border-accent/40"
                            }`}
                            style={{ borderRadius: "4px" }}
                          >
                            <div>
                              <h3 className="font-sans font-bold text-base text-text-primary group-hover:text-accent transition-colors">
                                {b.title}
                              </h3>
                              <p className="text-text-secondary text-xs leading-relaxed mt-2">
                                {b.desc}
                              </p>
                            </div>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-semibold mt-4 block self-end">
                              Select & Next →
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: TIMELINE */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between border-b border-border/40 pb-3">
                        <h2 className="font-sans font-bold text-lg text-text-primary">
                          What is your target timeline?
                        </h2>
                        <button onClick={handleBack} className="text-text-secondary hover:text-text-primary font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer">
                          <ArrowLeft size={10} /> Back
                        </button>
                      </div>
                      <div className="flex flex-col gap-4">
                        {TIMELINES.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => handleSelectTimeline(t.value)}
                            className={`p-5 text-left border rounded transition-all cursor-pointer flex items-center justify-between group ${
                              formData.timeline === t.value
                                ? "border-accent bg-accent/2"
                                : "border-border/50 bg-bg-secondary/40 hover:border-accent/40"
                            }`}
                            style={{ borderRadius: "4px" }}
                          >
                            <span className="font-sans font-bold text-sm text-text-primary group-hover:text-accent transition-colors">
                              {t.label}
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-semibold">
                              Select →
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: DETAILS */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between border-b border-border/40 pb-3">
                        <h2 className="font-sans font-bold text-lg text-text-primary">
                          Your Project Scope
                        </h2>
                        <button onClick={handleBack} className="text-text-secondary hover:text-text-primary font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer">
                          <ArrowLeft size={10} /> Back
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className={labelClass}>Your Name *</label>
                          <input
                            type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                            placeholder="Jane Doe" className={inputClass} style={{ borderRadius: "4px" }}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className={labelClass}>Email Address *</label>
                          <input
                            type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="jane@company.com" className={inputClass} style={{ borderRadius: "4px" }}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="business" className={labelClass}>Company / Organization</label>
                          <input
                            type="text" id="business" name="business" value={formData.business} onChange={handleChange}
                            placeholder="e.g. Acme Corp" className={inputClass} style={{ borderRadius: "4px" }}
                          />
                        </div>
                        <div>
                          <label htmlFor="budget" className={labelClass}>Budget Range *</label>
                          <select
                            id="budget" name="budget" value={formData.budget} onChange={handleChange}
                            className={`${inputClass} cursor-pointer`} style={{ borderRadius: "4px" }}
                          >
                            <option value="" disabled>Select a range</option>
                            <option value="under_25k">Under ₹25,000</option>
                            <option value="25k_75k">₹25,000 – ₹75,000</option>
                            <option value="75k_2l">₹75,000 – ₹2,00,000</option>
                            <option value="over_2l">₹2,00,000+</option>
                            <option value="discuss">Let&apos;s discuss</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="problem" className={labelClass}>What are you trying to solve? *</label>
                        <textarea
                          id="problem" name="problem" value={formData.problem} onChange={handleChange} rows={3}
                          placeholder="What is currently broken, slow, or holding back your day-to-day business operations?"
                          className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }}
                        />
                      </div>

                      <div>
                        <label htmlFor="situation" className={labelClass}>Current Tools / Tech Stack</label>
                        <textarea
                          id="situation" name="situation" value={formData.situation} onChange={handleChange} rows={2}
                          placeholder="What tools are you currently using (Spreadsheets, WordPress, Shopify, CRMs)?"
                          className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }}
                        />
                      </div>

                      {errorMessage && (
                        <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 text-xs rounded">
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={handleGoToSummary}
                        className="w-full py-4 bg-accent text-white font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-colors duration-200 rounded flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                      >
                        Review Brief Summary
                        <ArrowRight size={13} />
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 4: SUMMARY & SUBMIT */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between border-b border-border/40 pb-3">
                        <h2 className="font-sans font-bold text-lg text-text-primary">
                          Review Your Brief
                        </h2>
                        <button onClick={handleBack} className="text-text-secondary hover:text-text-primary font-mono text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer">
                          <ArrowLeft size={10} /> Edit Details
                        </button>
                      </div>

                      <div className="space-y-4 border border-border/40 p-5 bg-bg-secondary/20" style={{ borderRadius: "4px" }}>
                        <div className="grid grid-cols-2 gap-4 text-xs border-b border-border/20 pb-3">
                          <div>
                            <span className="text-text-tertiary block mb-0.5">Name</span>
                            <span className="text-text-primary font-semibold">{formData.name}</span>
                          </div>
                          <div>
                            <span className="text-text-tertiary block mb-0.5">Email</span>
                            <span className="text-text-primary font-semibold">{formData.email}</span>
                          </div>
                          <div>
                            <span className="text-text-tertiary block mb-0.5">Company</span>
                            <span className="text-text-primary font-semibold">{formData.business || "None"}</span>
                          </div>
                          <div>
                            <span className="text-text-tertiary block mb-0.5">Urgency / Timeline</span>
                            <span className="text-text-primary font-semibold capitalize">{formData.timeline}</span>
                          </div>
                        </div>

                        <div className="text-xs space-y-3">
                          <div>
                            <span className="text-text-tertiary block mb-0.5">Scope Category</span>
                            <span className="text-text-primary font-semibold">{formData.goal}</span>
                          </div>
                          <div>
                            <span className="text-text-tertiary block mb-0.5">Core Operational Problem</span>
                            <p className="text-text-secondary leading-relaxed font-sans">{formData.problem}</p>
                          </div>
                          {formData.situation && (
                            <div>
                              <span className="text-text-tertiary block mb-0.5">Current Tools</span>
                              <p className="text-text-secondary leading-relaxed font-sans">{formData.situation}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <form onSubmit={handleSubmitBrief}>
                        <div className="mb-5 flex items-start gap-3 bg-bg-primary p-4 border border-border/40 rounded">
                          <input
                            type="checkbox"
                            id="dpdpConsent"
                            name="dpdpConsent"
                            checked={formData.dpdpConsent}
                            onChange={(e) => setFormData(prev => ({ ...prev, dpdpConsent: e.target.checked }))}
                            className="mt-0.5 h-4 w-4 rounded border-border-dark text-accent focus:ring-accent cursor-pointer shrink-0"
                          />
                          <label htmlFor="dpdpConsent" className="text-[11px] text-text-secondary leading-snug cursor-pointer select-none">
                            I consent to NERQIVA processing my personal data in accordance with the <a href="/privacy" target="_blank" className="text-accent font-semibold hover:underline">Privacy Policy</a> to handle my project inquiry. I understand I have the right to request deletion of this data at any time.
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={status === "loading" || !formData.dpdpConsent}
                          className={`w-full py-4 font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-200 rounded flex items-center justify-center gap-2 shadow-lg ${
                            status === "loading" || !formData.dpdpConsent
                              ? "bg-bg-secondary border border-border/40 text-text-tertiary cursor-not-allowed"
                              : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/10 cursor-pointer"
                          }`}
                        >
                          {status === "loading" ? (
                            <>
                              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Compiling Project Brief...
                            </>
                          ) : (
                            <>
                              Confirm & Open Email Client
                              <ArrowRight size={13} />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}

                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
