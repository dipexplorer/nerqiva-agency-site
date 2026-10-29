"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Selected Work", href: "/#case-studies" },
  { label: "Anti-Agency", href: "/#manifesto" },
  { label: "Build Flagship", href: "/#configurator" },
  { label: "Founder", href: "/#founder" },
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

  return (
    <>
      {/* Floating Luxury Control Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 pointer-events-none">
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-300 pointer-events-auto ${
            scrolled
              ? "bg-bg-card/90 backdrop-blur-xl border border-border shadow-2xl"
              : "bg-bg-card/70 backdrop-blur-md border border-border/60 shadow-lg"
          }`}
        >
          {/* Brand Monogram */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <BrandLogo className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-mono text-base font-black tracking-widest text-text-primary">
              NERQIVA<span className="text-accent">®</span>
            </span>
          </Link>

          {/* Minimal Nav Links with Hover Micro-Dots */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 group py-1"
              >
                <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Right Actions & Live Availability */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Live Launch Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-bg-secondary border border-border text-[11px] font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-semibold text-text-primary">2 Launch Slots Open</span>
            </div>

            <ThemeToggle />

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20want%20to%20commission%20a%20website%20flagship."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 shadow-md shadow-accent/20"
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
        <div className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 md:hidden">
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

          <div className="flex flex-col gap-6 py-8">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display font-black text-3xl text-text-primary hover:text-accent transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-text-tertiary">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-border flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-text-secondary py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>North Guwahati, IN • 2 Launch Slots Open</span>
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
