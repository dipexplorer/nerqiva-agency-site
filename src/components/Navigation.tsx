"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/solutions" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "glass-panel rounded-none border-border/40 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo & Location Micro-Badge */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <BrandLogo className="h-9 w-9" />
              <span className="font-mono text-lg font-bold tracking-widest text-text-primary group-hover:text-accent transition-colors duration-300">
                NERQIVA
              </span>
            </Link>

            {/* Subtle Local Trust Badge */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-secondary/70 border border-border/60 font-mono text-[11px] text-text-secondary select-none">
              <span className="font-semibold text-text-primary">Guwahati, IN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-text-tertiary">Available for new projects</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-200 relative group py-1 ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs font-mono font-bold tracking-wider flex items-center gap-2 shadow-sm"
            >
              <span>Start on WhatsApp</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-6 glass-panel transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-6 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 mb-4">
          <BrandLogo className="h-11 w-11" />
          <span className="font-mono text-2xl font-bold tracking-widest text-text-primary">NERQIVA</span>
        </Link>

        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`w-64 text-center py-3.5 px-4 min-h-[44px] flex items-center justify-center font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 border rounded-lg ${
              isActive(item.href) 
                ? "text-accent border-accent/40 bg-accent/5 font-bold" 
                : "text-text-secondary hover:text-text-primary border-border hover:border-accent/30"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="flex flex-col items-center gap-3 mt-4 w-64">
          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full py-3.5 text-center text-xs font-mono font-bold tracking-wider rounded-lg flex items-center justify-center gap-2"
          >
            <span>Start on WhatsApp</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center text-xs font-mono font-semibold border border-border/80 text-text-secondary hover:text-accent rounded-lg flex items-center justify-center gap-2"
          >
            <span>Submit Detailed Scope</span>
          </Link>
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
