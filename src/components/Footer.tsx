"use client";

import { useState } from "react";
import BrandLogo from "./BrandLogo";
import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG Icons to avoid dependency version problems
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

const CAPABILITIES_LINKS = [
  { label: "Digital Presence", href: "/solutions#presence" },
  { label: "Workflow Automation", href: "/solutions#automation" },
  { label: "Custom Web Apps", href: "/solutions#webapps" },
  { label: "Data Pipelines", href: "/solutions#data" },
];

const STUDIO_LINKS = [
  { label: "Selected Work", href: "/work" },
  { label: "Our Process", href: "/process" },
  { label: "North Guwahati HQ", href: "/locations/north-guwahati" },
  { label: "Brand Philosophy", href: "/about" },
  { label: "Start a Project", href: "/contact" },
];

const SERVICE_AREAS = [
  { label: "North Guwahati", href: "/locations/north-guwahati" },
  { label: "Rudreswar", href: "/locations/north-guwahati#rudreswar" },
  { label: "Guwahati City", href: "/locations/north-guwahati#guwahati" },
  { label: "Assam & India", href: "/locations/north-guwahati#assam" },
];

const RESOURCES_LINKS = [
  { label: "GitHub", href: "https://github.com/dipexplorer", icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/dip-jyoti22", icon: LinkedInIcon, external: true },
  { label: "Terms of Service", href: "/terms", external: false },
  { label: "Privacy Policy", href: "/privacy", external: false },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="border-t border-border/40 bg-bg-primary overflow-hidden relative z-20 pt-12 sm:pt-20 pb-8 sm:pb-12">
      {/* Background Ambience */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 rounded-[100%] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
          
          {/* Column 1: Brand details & Premium Local Widget */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3 w-fit group">
                <BrandLogo className="h-8 w-8 opacity-100 group-hover:scale-105 transition-transform" />
                <span className="font-mono text-lg font-black tracking-widest text-text-primary">
                  NERQIVA <span className="text-text-tertiary">STUDIO</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-sm text-text-secondary font-medium">
                High-converting website design, 1-click WhatsApp lead routing, and custom web systems delivered in 24 Hours.
              </p>
            </div>

            {/* Premium Local NAP Widget */}
            <div className="p-5 rounded-2xl bg-bg-card border border-border/60 shadow-lg shadow-black/5 hover:border-accent/30 hover:shadow-accent/5 transition-all duration-300 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-text-primary text-sm mb-1">
                    Headquarters
                  </span>
                  <span className="text-xs text-text-secondary leading-relaxed">
                    Baruah Souk, North Guwahati,<br />
                    Rudreswar, Guwahati, Assam 781030
                  </span>
                </div>
              </div>
              
              <div className="h-px w-full bg-border/40" />
              
              <div className="flex items-center justify-between gap-2">
                <a href="tel:+918724932985" className="flex items-center gap-2 group cursor-pointer">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500/20 transition-colors">
                    <Phone size={13} />
                  </div>
                  <span className="font-mono text-xs font-bold text-text-primary group-hover:text-emerald-600 transition-colors">
                    +91 87249 32985
                  </span>
                </a>
                
                <a
                  href="https://share.google/6KKUdxiR4zdUDuAnT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-text-tertiary hover:text-accent uppercase tracking-wider group"
                >
                  MAPS <ExternalLink size={12} className="group-hover:-mt-0.5 group-hover:ml-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Premium Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://github.com/dipexplorer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-bg-secondary border border-border/80 text-text-secondary hover:text-text-inverted hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/dip-jyoti22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-bg-secondary border border-border/80 text-text-secondary hover:text-text-inverted hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/20 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a 
                href="mailto:nerqiva.studio@gmail.com"
                className="p-3 rounded-full bg-bg-secondary border border-border/80 text-text-secondary hover:text-text-inverted hover:bg-emerald-600 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns (Smooth Animated Mobile Accordion / Desktop Grid) */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-8 lg:gap-10">
            {[
              { title: "Capabilities", id: "cap", links: CAPABILITIES_LINKS },
              { title: "Studio", id: "studio", links: STUDIO_LINKS },
              { title: "Service Areas", id: "areas", links: SERVICE_AREAS },
              { title: "Legal & Info", id: "legal", links: RESOURCES_LINKS },
            ].map((col) => {
              const isOpen = openSection === col.id;
              
              return (
                <div key={col.id} className="flex flex-col border-b border-border/30 sm:border-none">
                  {/* Mobile Accordion Header */}
                  <button 
                    onClick={() => toggleSection(col.id)}
                    className="w-full text-left font-sans text-xs uppercase tracking-widest font-extrabold py-4 sm:py-0 sm:mb-5 text-text-primary flex justify-between items-center sm:cursor-auto cursor-pointer group"
                  >
                    <span className="group-hover:text-accent transition-colors sm:group-hover:text-text-primary">{col.title}</span>
                    <ChevronDown 
                      size={16} 
                      className={`sm:hidden text-text-tertiary transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`} 
                    />
                  </button>
                  
                  {/* Desktop List (always visible on sm+) */}
                  <div className="hidden sm:flex flex-col gap-3">
                    {col.links.map((link: any, idx: number) => (
                      <Link
                        key={idx}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="font-sans text-[13px] text-text-secondary hover:text-accent transition-all duration-200 flex items-center group w-fit"
                      >
                        <span className="group-hover:translate-x-1.5 transition-transform flex items-center gap-1.5 font-medium">
                          {link.label}
                          {link.external && <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </span>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile Animated Accordion (hidden on sm+) */}
                  <div className="sm:hidden">
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden flex flex-col gap-3"
                        >
                          {col.links.map((link: any, idx: number) => (
                            <Link
                              key={idx}
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="font-sans text-[13px] text-text-secondary hover:text-accent transition-all duration-200 flex items-center group w-fit"
                            >
                              <span className="group-hover:translate-x-1.5 transition-transform flex items-center gap-1.5 font-medium">
                                {link.label}
                                {link.external && <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
          <p className="font-sans text-[11px] sm:text-xs text-text-tertiary text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} NERQIVA Studio. Handcrafted in <br className="sm:hidden" />
            <Link href="/locations/north-guwahati" className="hover:text-accent font-semibold transition-colors">
              North Guwahati, Assam 781030
            </Link>.
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex sm:hidden font-mono text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-text-inverted bg-bg-card hover:bg-accent border border-border/80 hover:border-accent px-4 py-2.5 rounded-full transition-all items-center gap-2 cursor-pointer shadow-sm w-full justify-center mt-2"
          >
            Back to Top 
            <ArrowUpRight size={14} className="rotate-[-45deg]" />
          </button>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden sm:flex font-mono text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-text-inverted bg-bg-card hover:bg-accent border border-border/80 hover:border-accent px-4 py-2.5 rounded-full transition-all items-center gap-2 cursor-pointer shadow-sm"
          >
            Back to Top 
            <ArrowUpRight size={14} className="rotate-[-45deg]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
