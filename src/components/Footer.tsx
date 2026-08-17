"use client";

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        background: "var(--bg-dark)",
        borderColor: "var(--border-dark)",
      }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 28 28" fill="none" className="h-6 w-6">
              <rect x="1" y="1" width="26" height="26" stroke="rgba(167,139,250,0.6)" strokeWidth="1.5" />
              <path
                d="M7 21V7l14 14V7"
                stroke="rgba(167,139,250,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-sm font-bold tracking-widest" style={{ color: "rgba(247,246,243,0.8)" }}>
              NERQIVA
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-200 hover:text-accent-light"
                style={{ color: "rgba(247,246,243,0.35)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(247,246,243,0.25)" }}>
            © {new Date().getFullYear()} NERQIVA
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t flex items-center justify-between gap-4" style={{ borderColor: "var(--border-dark)" }}>
          <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,246,243,0.2)" }}>
            Digital Systems Studio — Engineered with precision.
          </p>
          <a
            href="#"
            className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-accent-light flex items-center gap-1.5"
            style={{ color: "rgba(247,246,243,0.3)" }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
