"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return "A valid email is required";
    if (!formData.message.trim()) return "Please describe what you are trying to build";
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

    // Simulating API integration request
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Log submission data securely for developer integration
          console.log("[CRM Integration Hook] Form Submitted:", formData);
          resolve(true);
        }, 1200);
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        business: "",
        message: "",
        budget: "",
        timeline: "",
      });
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-black text-white min-h-[85vh] flex items-center justify-center border-t border-border-dark/60">
      
      {/* Solid dark theme background for consistency */}
      <div className="absolute inset-0 z-10 bg-bg-primary pointer-events-none" />

      {/* Content Layout */}
      <div className="section-container relative z-20 w-full grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Call to Action Details */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-white/80">
              COLLABORATE
            </span>
          </div>

          <h2 className="font-sans font-extrabold text-white leading-[1.1] mb-6 tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Have a problem<br />worth <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">solving?</span>
          </h2>

          <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-sm">
            Tell us what you're trying to achieve. We'll figure out exactly what should be built — and what shouldn't.
          </p>

          {/* Verification Details */}
          <div className="flex flex-col gap-4 font-mono text-[10px] text-text-tertiary">
            <div className="flex items-center gap-3">
              <span className="text-accent">✓</span> Real-time telemetry & dashboard setups
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">✓</span> Enterprise scaling & performance guarantees
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">✓</span> Structured, secure API integrations
            </div>
          </div>
        </div>

        {/* Right Side: High-Fidelity Project Inquiry Form */}
        <div className="lg:col-span-7 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-sm p-8 md:p-10 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="h-16 w-16 bg-accent/25 border border-accent/40 rounded-full flex items-center justify-center mb-6 text-accent shadow-[0_0_24px_rgba(124,58,237,0.1)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-2xl mb-3 text-white">Inquiry Received</h3>
                <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. We will review your systems roadmap and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-6 py-2.5 bg-white text-black font-mono text-[10px] uppercase font-bold tracking-widest hover:bg-accent hover:text-white transition-colors duration-300 rounded-sm"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="contact-form" 
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Header inside form container */}
                <div className="mb-6">
                  <h3 className="font-sans font-bold text-lg text-white mb-2">Build a digital system</h3>
                  <p className="text-xs text-text-secondary">Provide details below to scope your project.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-sm font-sans text-sm focus:outline-none focus:border-accent/80 transition-colors"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-sm font-sans text-sm focus:outline-none focus:border-accent/80 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Business field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Company / Organization</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="NERQIVA Corp"
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-sm font-sans text-sm focus:outline-none focus:border-accent/80 transition-colors"
                  />
                </div>

                {/* Project details */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">What are you trying to build? *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your goals, systems architecture requirements, or bottlenecks..."
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-sm font-sans text-sm focus:outline-none focus:border-accent/80 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Scope selects */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Budget Selector */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Budget Range *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-sm font-sans text-sm focus:outline-none focus:border-accent/80 transition-colors cursor-pointer text-white"
                      required
                    >
                      <option className="text-black" value="" disabled>Select range</option>
                      <option className="text-black" value="under_5k">Under $5k</option>
                      <option className="text-black" value="5k_15k">$5k - $15k</option>
                      <option className="text-black" value="15k_50k">$15k - $50k</option>
                      <option className="text-black" value="over_50k">$50k+</option>
                    </select>
                  </div>

                  {/* Timeline Selector */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="timeline" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Timeline *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-sm font-sans text-sm focus:outline-none focus:border-accent/80 transition-colors cursor-pointer text-white"
                      required
                    >
                      <option className="text-black" value="" disabled>Select timeline</option>
                      <option className="text-black" value="immediate">Under 1 Month</option>
                      <option className="text-black" value="medium">1 - 3 Months</option>
                      <option className="text-black" value="long">3+ Months</option>
                    </select>
                  </div>
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-950/40 border border-red-500/30 text-red-400 rounded-sm text-xs"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-300 rounded-sm disabled:bg-neutral-800 disabled:text-neutral-500 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Analyzing Requirements...
                    </>
                  ) : (
                    "Submit Project Brief"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}