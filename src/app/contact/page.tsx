"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Head from "next/head";

export default function ContactPage() {
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
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Populate dynamic query params if redirected from Solutions page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prefilledProblem = params.get("problem");
      if (prefilledProblem) {
        let problemText = "";
        if (prefilledProblem === "presence") problemText = "Upgrade Digital Presence & Credibility";
        if (prefilledProblem === "automation") problemText = "Automate manual tasks and tool workflows";
        if (prefilledProblem === "webapps") problemText = "Build a custom database portal or web app";
        if (prefilledProblem === "data") problemText = "Deploy a data ingestion pipeline or real-time monitor";
        
        setFormData((prev) => ({
          ...prev,
          goal: problemText,
        }));
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Your name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      return "A valid email address is required";
    if (!formData.problem.trim()) return "Please explain what you are trying to solve";
    if (!formData.goal.trim()) return "Please explain what you want to build";
    if (!formData.budget) return "Please select a budget range";
    if (!formData.timeline) return "Please select a timeline";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const subject = encodeURIComponent(`Project Brief from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business || "Not provided"}\n\nProblem Statement:\n${formData.problem}\n\nProposed Solution:\n${formData.goal}\n\nCurrent Situation / Stack:\n${formData.situation || "Not provided"}\n\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nAdditional Context:\n${formData.context || "Not provided"}`
      );
      window.location.href = `mailto:contact@nerqiva.com?subject=${subject}&body=${body}`;

      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
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
      });
    } catch {
      setErrorMessage("Something went wrong. Please try again or email us directly at contact@nerqiva.com.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-bg-secondary border border-border-dark text-text-primary placeholder-text-tertiary font-sans text-base focus:outline-none focus:border-accent/60 focus:bg-white dark:focus:bg-bg-dark transition-colors duration-200 shadow-sm";
  const labelClass = "block font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-2 font-semibold";

  return (
    <>
      <Head>
        <title>Start a Project | NERQIVA</title>
      </Head>
      <div className="pt-32 pb-24 min-h-[80vh] flex flex-col justify-center relative">
        <div className="section-container relative z-20 w-full max-w-3xl mx-auto">
          
          <div className="mb-12 text-center">
            <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-4 tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
              Tell us the problem.
            </h1>
            <p className="text-text-secondary text-lg">
              We&apos;ll figure out exactly what should be built.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 shadow-xl" style={{ borderRadius: "4px" }}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="h-16 w-16 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center mb-6 text-accent">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-sans font-bold text-2xl mb-3 text-text-primary">
                    Project Brief Created
                  </h3>
                  <p className="text-text-secondary text-sm max-w-sm leading-relaxed mb-8">
                    Your local email client has opened with your structured brief. Send it over and we will follow up for a free initial consultation.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-accent text-white font-mono text-[10px] uppercase font-bold tracking-widest hover:bg-accent-mid transition-colors duration-200 rounded cursor-pointer"
                  >
                    Start Another Brief
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  <div className="mb-8">
                    <h2 className="font-sans font-bold text-lg text-text-primary border-b border-border/40 pb-3">
                      Project Intake Brief
                    </h2>
                    <p className="text-[11px] text-text-secondary mt-2">
                      Your information is only used to understand your project. Initial consultations are completely free.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Your Name *</label>
                      <input
                        type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Jane Doe" className={inputClass} style={{ borderRadius: "4px" }} required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="jane@company.com" className={inputClass} style={{ borderRadius: "4px" }} required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business" className={labelClass}>Company / Organization</label>
                    <input
                      type="text" id="business" name="business" value={formData.business} onChange={handleChange}
                      placeholder="e.g. Acme Corp" className={inputClass} style={{ borderRadius: "4px" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="problem" className={labelClass}>What are you trying to solve? *</label>
                    <textarea
                      id="problem" name="problem" value={formData.problem} onChange={handleChange} rows={3}
                      placeholder="What is currently broken, slow, or holding back your day-to-day operations?"
                      className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }} required
                    />
                  </div>

                  <div>
                    <label htmlFor="goal" className={labelClass}>What are you looking to build? *</label>
                    <textarea
                      id="goal" name="goal" value={formData.goal} onChange={handleChange} rows={3}
                      placeholder="Describe the ideal system (e.g., custom client dashboard, Stripe integration, automation script)."
                      className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }} required
                    />
                  </div>

                  <div>
                    <label htmlFor="situation" className={labelClass}>Current Situation & Tech Stack</label>
                    <textarea
                      id="situation" name="situation" value={formData.situation} onChange={handleChange} rows={2}
                      placeholder="What tools are you currently using (Spreadsheets, Salesforce, WordPress, etc.)?"
                      className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className={labelClass}>Budget Range *</label>
                      <select
                        id="budget" name="budget" value={formData.budget} onChange={handleChange}
                        className={`${inputClass} cursor-pointer`} style={{ borderRadius: "4px" }} required
                      >
                        <option value="" disabled>Select a range</option>
                        <option value="under_25k">Under ₹25,000</option>
                        <option value="25k_75k">₹25,000 – ₹75,000</option>
                        <option value="75k_2l">₹75,000 – ₹2,00,000</option>
                        <option value="over_2l">₹2,00,000+</option>
                        <option value="discuss">Let&apos;s discuss</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClass}>Timeline *</label>
                      <select
                        id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}
                        className={`${inputClass} cursor-pointer`} style={{ borderRadius: "4px" }} required
                      >
                        <option value="" disabled>Select a timeline</option>
                        <option value="immediate">Under 1 month</option>
                        <option value="medium">1 – 3 months</option>
                        <option value="long">3+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="context" className={labelClass}>Additional Context</label>
                    <textarea
                      id="context" name="context" value={formData.context} onChange={handleChange} rows={2}
                      placeholder="Any other details, security limits, or references we should know about?"
                      className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }}
                    />
                  </div>

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 text-sm rounded"
                      >
                        {errorMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit" disabled={status === "loading"}
                    className="group w-full flex items-center justify-center gap-3 py-4 bg-accent text-white font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer rounded mt-4 shadow-lg shadow-accent/20"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Preparing...
                      </>
                    ) : (
                      <>
                        Submit Project Brief
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
