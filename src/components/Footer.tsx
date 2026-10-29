"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail, MapPin, ExternalLink, ArrowUp } from "lucide-react";
import BrandLogo from "./BrandLogo";

// Custom SVG Icons
const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const CAPABILITIES = [
  { label: "High-Converting Flagships", href: "/#case-studies" },
  { label: "Doorstep Clinical Diagnostics", href: "/work/lablink-guwahati" },
  { label: "Luxury Bridal & Henna Portfolios", href: "/work/krishav-mehendi" },
  { label: "Athletic & Wellness Systems", href: "/work/titan-gym" },
  { label: "1-Tap WhatsApp Lead Engines", href: "/#process" },
];

const STUDIO_LINKS = [
  { label: "Selected Work", href: "/work" },
  { label: "4-Day Sprint Process", href: "/process" },
  { label: "North Guwahati Studio HQ", href: "/locations/north-guwahati" },
  { label: "Brand Philosophy", href: "/about" },
  { label: "Direct Consultation", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "LLMs Context File", href: "/llms.txt", external: true },
  { label: "Source Code Handover", href: "https://github.com/dipexplorer", external: true },
];

export default function Footer() {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border/40 bg-bg-card relative z-20 pt-16 sm:pt-24 pb-12 overflow-hidden">
      
      {/* Ambient background soft glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        
        {/* Live Studio Coordinates Bar (footer.design style) */}
        <div className="pb-10 border-b border-border/40 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <span className="text-text-tertiary block mb-1 uppercase tracking-wider text-[10px]">Studio Location</span>
            <span className="text-text-primary font-bold">North Guwahati, IN</span>
          </div>

          <div>
            <span className="text-text-tertiary block mb-1 uppercase tracking-wider text-[10px]">Studio Time (IST)</span>
            <span className="text-text-primary font-bold tabular-nums">
              {istTime ? `${istTime} IST` : "21:45:00 IST"}
            </span>
          </div>

          <div>
            <span className="text-text-tertiary block mb-1 uppercase tracking-wider text-[10px]">Availability</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open for Q4 2026</span>
            </span>
          </div>

          <div>
            <span className="text-text-tertiary block mb-1 uppercase tracking-wider text-[10px]">Delivery Sprint</span>
            <span className="text-text-primary font-bold">96 Hours to Live</span>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="py-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <BrandLogo className="h-7 w-7 opacity-100 group-hover:scale-105 transition-transform" />
              <span className="font-mono text-base font-black tracking-widest text-text-primary">
                NERQIVA <span className="text-text-tertiary font-normal">STUDIO</span>
              </span>
            </Link>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-xs">
              Bespoke digital systems and high-converting web applications. Handcrafted in North Guwahati for ambitious clients worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/dipexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={14} />
              </a>
              <a
                href="https://linkedin.com/in/dip-jyoti22"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={14} />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-text-primary mb-4">
              Capabilities
            </h4>
            <ul className="flex flex-col gap-2.5">
              {CAPABILITIES.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary hover:text-accent transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-text-primary mb-4">
              Studio
            </h4>
            <ul className="flex flex-col gap-2.5">
              {STUDIO_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary hover:text-accent transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Deliverables */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-text-primary mb-4">
              Governance &amp; Code
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-xs text-text-secondary hover:text-accent transition-colors font-medium flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    {link.external && <ArrowUpRight size={10} className="text-text-tertiary" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Monolithic Grand Brand Wordmark (footer.design inspired) */}
        <div className="pt-10 pb-6 border-t border-border/30 overflow-hidden select-none pointer-events-none">
          <div
            className="font-display font-black text-center text-text-primary/5 tracking-[0.25em] sm:tracking-[0.35em] text-[13vw] leading-none"
            style={{ letterSpacing: "0.22em" }}
          >
            NERQIVA
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-4 border-t border-border/20 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-text-tertiary">
          <p>
            © {new Date().getFullYear()} NERQIVA Studio. All rights reserved. North Guwahati, Assam 781030.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-text-primary flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
