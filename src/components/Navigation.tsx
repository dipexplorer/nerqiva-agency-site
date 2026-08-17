"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
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

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "glass-panel rounded-none border-border/40 py-3 shadow-md"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <BrandLogo className="h-10 w-10" />
            <span className="font-mono text-xl font-bold tracking-widest text-text-primary group-hover:text-accent transition-colors duration-300">
              NERQIVA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
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
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded hover:bg-accent-mid transition-colors shadow-lg shadow-accent/20"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 glass-panel transition-all duration-400 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-6 p-3 text-text-secondary rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <X size={24} />
        </button>

        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 mb-6">
          <BrandLogo className="h-12 w-12" />
          <span className="font-mono text-2xl font-bold tracking-widest text-text-primary">NERQIVA</span>
        </Link>

        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`w-48 text-center py-3.5 font-mono text-sm font-semibold uppercase tracking-widest transition-all duration-200 border rounded ${
              isActive(item.href) 
                ? "text-accent border-accent/40 bg-accent/5" 
                : "text-text-secondary hover:text-accent border-border/40 hover:border-accent/40"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="flex items-center gap-4 mt-4">
          <ThemeToggle />
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3.5 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest rounded text-center shadow-lg shadow-accent/20"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
