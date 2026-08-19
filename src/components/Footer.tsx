"use client";

import BrandLogo from "./BrandLogo";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

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
  { label: "Brand Philosophy", href: "/about" },
  { label: "Start a Project", href: "/contact" },
];

const RESOURCES_LINKS = [
  { label: "GitHub", href: "https://github.com/dipexplorer", icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/dip-jyoti22", icon: LinkedInIcon, external: true },
  { label: "Terms of Service", href: "/terms", external: false },
  { label: "Privacy Policy", href: "/privacy", external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-bg-secondary/40 backdrop-blur-md py-16 text-text-primary relative z-20">
      <div className="section-container">
        
        {/* Rich Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="col-span-2 lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <BrandLogo className="h-7 w-7 opacity-90" />
              <span className="font-mono text-sm font-bold tracking-widest text-text-primary">
                NERQIVA
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-text-secondary">
              We investigate operational bottlenecks and engineer custom software systems built for business leverage, precision, and scale.
            </p>
            <div className="flex items-center gap-4 text-text-secondary mt-2">
              <a 
                href="https://github.com/dipexplorer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors animate-fade-in"
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
              <a 
                href="https://linkedin.com/in/dip-jyoti22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a 
                href="mailto:nerqiva.studio@gmail.com"
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold mb-6 text-text-primary/90">
              Capabilities
            </h4>
            <div className="flex flex-col gap-4">
              {CAPABILITIES_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="font-sans text-sm text-text-secondary hover:text-text-primary transition-all duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Studio */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold mb-6 text-text-primary/90">
              Studio
            </h4>
            <div className="flex flex-col gap-4">
              {STUDIO_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="font-sans text-sm text-text-secondary hover:text-text-primary transition-all duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Resources & Legal */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold mb-6 text-text-primary/90">
              Legal
            </h4>
            <div className="flex flex-col gap-4">
              {RESOURCES_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-sans text-sm text-text-secondary hover:text-text-primary transition-all duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Immediate Contact Info */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-sans text-xs uppercase tracking-wider font-semibold mb-6 text-text-primary/90">
              Enquiries
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:nerqiva.studio@gmail.com"
                className="font-sans text-sm font-medium text-text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
              >
                <Mail size={14} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                nerqiva.studio@gmail.com
              </a>
              <div className="font-sans text-sm font-medium text-text-secondary">
                +91 87249 32985
              </div>
              <a
                href="https://nerqiva.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200"
              >
                nerqiva.vercel.app
              </a>
              <div className="flex items-center gap-2.5 mt-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="font-sans text-xs text-text-secondary font-medium tracking-wide">
                  Initial consultation free
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-text-secondary">
            © {new Date().getFullYear()} NERQIVA — Digital Systems Studio
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-sans text-xs text-text-secondary hover:text-text-primary transition-all flex items-center gap-1.5 cursor-pointer group"
          >
            Back to top 
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
