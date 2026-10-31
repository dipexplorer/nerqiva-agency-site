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
      {/* Floating Luxury Control Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 pointer-events-none">
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-300 pointer-events-auto ${
            scrolled
              ? "bg-bg-card/90 dark:bg-[#09090b]/90 backdrop-blur-xl border border-border dark:border-white/10 shadow-2xl dark:shadow-black/60"
              : "bg-bg-card/80 dark:bg-[#09090b]/80 backdrop-blur-md border border-border/70 dark:border-white/10 shadow-lg dark:shadow-black/40"
          }`}
        >
          {/* Brand Monogram */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <BrandLogo className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-mono text-base font-black tracking-widest text-text-primary dark:text-white transition-colors">
              NERQIVA<span className="text-accent">®</span>
            </span>
          </Link>

          {/* Minimal Nav Links with Active State & Hover Micro-Dots */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 group py-1 ${
                    active
                      ? "text-text-primary dark:text-white font-bold"
                      : "text-text-secondary dark:text-white/60 hover:text-text-primary dark:hover:text-white"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-accent transition-all duration-200 ${
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Actions & Live Availability */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Live Launch Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border dark:border-white/10 bg-bg-secondary dark:bg-white/5 text-[11px] font-mono text-text-secondary dark:text-white/70 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
              <span className="font-semibold text-text-primary dark:text-white">
                2 Launch Slots Open
              </span>
            </div>

            <ThemeToggle />

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20want%20to%20commission%20a%20website%20flagship."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 shadow-md shadow-accent/20 cursor-pointer select-none"
            >
              <span>Book on WhatsApp</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-bg-secondary text-text-primary border border-border cursor-pointer hover:bg-border transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <BrandLogo className="h-7 w-7" />
              <span className="font-mono text-base font-black tracking-widest text-text-primary">
                NERQIVA<span className="text-accent">®</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-bg-secondary text-text-primary border border-border cursor-pointer"
            >
              <X size={18} />
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
                  className={`font-display font-black text-2xl sm:text-3xl transition-colors flex items-center justify-between py-2 border-b border-border/30 ${
                    active ? "text-accent" : "text-text-primary hover:text-accent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight size={18} className="text-text-tertiary" />
                </Link>
              );
            })}
          </div>

          {/* Interactive Tools & Quick Navigation */}
          <div className="py-4 flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold mb-1">
              Quick Shortcuts
            </span>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/#configurator"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl bg-bg-card border border-border/80 text-left font-mono text-xs text-text-secondary hover:border-accent/40"
              >
                <span className="block text-accent font-bold mb-0.5">⚡ Builder</span>
                <span className="text-[11px] text-text-tertiary">Configure Flagship</span>
              </Link>
              <Link
                href="/#manifesto"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl bg-bg-card border border-border/80 text-left font-mono text-xs text-text-secondary hover:border-accent/40"
              >
                <span className="block text-accent font-bold mb-0.5">🚫 Manifesto</span>
                <span className="text-[11px] text-text-tertiary">Why Anti-Agency</span>
              </Link>
            </div>
          </div>

          {/* Bottom Coordinates & Direct CTA */}
          <div className="pt-6 border-t border-border flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary py-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>North Guwahati, IN</span>
              </div>
              <span className="font-semibold text-text-primary">2 Slots Open</span>
            </div>

            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20want%20to%20commission%20a%20website%20flagship."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-3.5 text-center font-bold text-sm flex items-center justify-center gap-2 shadow-xl"
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
