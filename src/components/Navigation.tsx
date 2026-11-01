"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Architectural Studio Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/90 dark:bg-[#09090b]/90 backdrop-blur-xl border-b border-border/70 dark:border-white/10 py-3.5 shadow-sm dark:shadow-black/50"
            : "bg-transparent border-b border-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Monogram */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <BrandLogo className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-display text-base sm:text-lg font-black tracking-tight text-text-primary dark:text-white transition-colors">
              NERQIVA<span className="text-accent font-sans text-xs align-super ml-0.5">®</span>
            </span>
          </Link>

          {/* Editorial Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-sans text-xs tracking-wider uppercase transition-colors duration-200 relative py-1 ${
                    active
                      ? "text-text-primary dark:text-white font-semibold"
                      : "text-text-secondary dark:text-white/60 hover:text-text-primary dark:hover:text-white font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + High-Contrast Studio CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20want%20to%20commission%20a%20website%20flagship."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none"
            >
              <span>Book on WhatsApp</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-primary dark:text-white hover:bg-bg-secondary dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-bg-primary/98 dark:bg-[#09090b]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-border dark:border-white/10">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
              <BrandLogo className="h-7 w-7" />
              <span className="font-display text-lg font-black tracking-tight text-text-primary dark:text-white">
                NERQIVA<span className="text-accent text-xs align-super ml-0.5">®</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-text-primary dark:text-white hover:bg-bg-secondary dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Primary Route Links */}
          <div className="flex flex-col gap-4 py-6">
            {NAV_ITEMS.map((item, idx) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-display font-black text-2xl sm:text-3xl transition-colors flex items-center justify-between py-2 border-b border-border/30 dark:border-white/10 ${
                    active ? "text-accent" : "text-text-primary dark:text-white hover:text-accent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight size={18} className="text-text-tertiary dark:text-white/40" />
                </Link>
              );
            })}
          </div>

          {/* Interactive Tools & Quick Navigation */}
          <div className="py-4 flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary dark:text-white/40 font-bold mb-1">
              Shortcuts
            </span>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/#configurator"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl bg-bg-card dark:bg-white/5 border border-border/80 dark:border-white/10 text-left font-sans text-xs text-text-secondary dark:text-white/70 hover:border-accent/40"
              >
                <span className="block text-accent font-bold mb-0.5">⚡ Builder</span>
                <span className="text-[11px] text-text-tertiary dark:text-white/40">Configure Flagship</span>
              </Link>
              <Link
                href="/#manifesto"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl bg-bg-card dark:bg-white/5 border border-border/80 dark:border-white/10 text-left font-sans text-xs text-text-secondary dark:text-white/70 hover:border-accent/40"
              >
                <span className="block text-accent font-bold mb-0.5">🚫 Manifesto</span>
                <span className="text-[11px] text-text-tertiary dark:text-white/40">Why Anti-Agency</span>
              </Link>
            </div>
          </div>

          {/* Bottom Direct CTA */}
          <div className="pt-6 border-t border-border dark:border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary dark:text-white/60 py-1">
              <span>Guwahati · Assam</span>
              <span className="text-accent font-medium">Bespoke Flagships</span>
            </div>

            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20want%20to%20commission%20a%20website%20flagship."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 text-center font-bold text-sm flex items-center justify-center gap-2 rounded-full bg-text-primary dark:bg-white text-bg-primary dark:text-black shadow-lg"
            >
              <span>Book on WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
