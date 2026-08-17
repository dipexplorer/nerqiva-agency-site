"use client";

import BrandLogo from "./BrandLogo";

import Link from "next/link";

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
  { label: "GitHub", href: "https://github.com/dipexplorer", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/dip-jyoti22", external: true },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary py-12 text-text-primary">
      <div className="section-container">
        
        {/* Rich Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand details (occupies more space on desktop) */}
          <div className="col-span-2 lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="h-6 w-6 opacity-90" />
              <span className="font-mono text-xs font-bold tracking-widest text-text-primary">
                NERQIVA
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-text-secondary">
              We investigate operational bottlenecks and engineer custom software systems built for business leverage, precision, and scale.
            </p>
          </div>

          {/* Column 2: Capabilities */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-bold mb-4 text-text-tertiary">
              Capabilities
            </h4>
            <div className="flex flex-col gap-2.5">
              {CAPABILITIES_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-accent transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Studio */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-bold mb-4 text-text-tertiary">
              Studio
            </h4>
            <div className="flex flex-col gap-2.5">
              {STUDIO_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-accent transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Resources & Legal */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-bold mb-4 text-text-tertiary">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5">
              {RESOURCES_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-[10px] uppercase tracking-wider text-text-secondary hover:text-accent transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Immediate Contact Info */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-bold mb-4 text-text-tertiary">
              Enquiries
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:contact@nerqiva.com"
                className="font-mono text-[10px] text-text-secondary hover:text-accent transition-colors duration-150"
              >
                contact@nerqiva.com
              </a>
              <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-wider mt-1">
                Response &lt; 24h
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
            © {new Date().getFullYear()} NERQIVA — Digital Systems Studio
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[9px] uppercase tracking-widest text-text-secondary hover:text-accent transition-colors flex items-center gap-1 cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
