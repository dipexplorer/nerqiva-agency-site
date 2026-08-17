"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "glass-light border-b border-border/60 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative h-7 w-7 flex items-center justify-center">
              {/* Geometric N mark */}
              <svg viewBox="0 0 28 28" fill="none" className="h-7 w-7">
                <rect
                  x="1"
                  y="1"
                  width="26"
                  height="26"
                  stroke="rgb(124,58,237)"
                  strokeWidth="1.5"
                  className="transition-all duration-500 group-hover:stroke-accent-mid"
                />
                <path
                  d="M8 20V8l12 12V8"
                  stroke="rgb(124,58,237)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500 group-hover:stroke-accent-mid"
                />
              </svg>
            </div>
            <span className="font-mono text-base font-bold tracking-widest text-text-primary group-hover:text-accent transition-colors duration-300">
              NERQIVA
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-mono text-[11px] font-medium uppercase tracking-widest transition-colors duration-200 relative group ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-accent-mid transition-colors"
              style={{ boxShadow: "0 2px 16px rgba(124,58,237,0.25)" }}
            >
              Start a Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-primary/95 backdrop-blur-xl transition-all duration-400 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-6 p-1 text-text-secondary"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <svg viewBox="0 0 28 28" fill="none" className="h-7 w-7">
            <rect x="1" y="1" width="26" height="26" stroke="rgb(124,58,237)" strokeWidth="1.5" />
            <path d="M8 20V8l12 12V8" stroke="rgb(124,58,237)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-mono text-base font-bold tracking-widest text-text-primary">NERQIVA</span>
        </div>

        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm font-semibold uppercase tracking-widest text-text-secondary hover:text-accent transition-colors"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 px-8 py-3.5 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm"
        >
          Start a Project
        </a>
      </div>
    </>
  );
}
