"use client";

export default function HeroFlowLine() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-25"
    >
      <svg
        viewBox="0 0 1000 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-text-primary"
        preserveAspectRatio="none"
      >
        <defs>
          <style>{`
            @keyframes drawLinePath {
              from {
                strokeDashoffset: 1800;
              }
              to {
                strokeDashoffset: 0;
              }
            }
            @keyframes popInNode {
              0% {
                opacity: 0;
                transform: scale(0.5);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
            .hero-flow-path {
              stroke-dasharray: 1800;
              stroke-dashoffset: 1800;
              animation: drawLinePath 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .hero-node-badge {
              opacity: 0;
              animation: popInNode 0.45s ease-out forwards;
              transform-box: fill-box;
              transform-origin: center;
            }
            @media (prefers-reduced-motion: reduce) {
              .hero-flow-path {
                stroke-dashoffset: 0 !important;
                animation: none !important;
              }
              .hero-node-badge {
                opacity: 1 !important;
                animation: none !important;
              }
            }
          `}</style>
        </defs>

        {/* ── Main Connective Path ───────────────────────────────────── */}
        <path
          d="M 20 60 C 140 10, 260 90, 380 40 C 480 0, 540 160, 500 310 C 460 410, 680 340, 960 240"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          strokeLinecap="round"
          className="hero-flow-path"
        />

        {/* ── NODE 1: Browser/Website ─────────────────────────────────── */}
        <g className="hero-node-badge" style={{ animationDelay: "1.2s" }}>
          <circle cx="220" cy="42" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="230" cy="33" r="3" fill="#CA8A04" />
          <rect x="213" y="37" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="213" y1="40" x2="227" y2="40" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* ── NODE 2: Search/Magnifying Glass ───────────────────────── */}
        <g className="hero-node-badge" style={{ animationDelay: "1.4s" }}>
          <circle cx="510" cy="65" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="520" cy="56" r="3" fill="#CA8A04" />
          <circle cx="508" cy="63" r="4.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="511.5" y1="66.5" x2="515.5" y2="70.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* ── NODE 3: Chat / WhatsApp Lead ────────────────────────────── */}
        <g className="hero-node-badge" style={{ animationDelay: "1.65s" }}>
          <circle cx="490" cy="330" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="500" cy="321" r="3" fill="#CA8A04" />
          <path
            d="M 484 324 H 496 A 3 3 0 0 1 499 327 V 330 A 3 3 0 0 1 496 333 H 488.5 L 484 336 V 327 A 3 3 0 0 1 484 324 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* ── NODE 4: Checkmark ───────────────────────────────────────── */}
        <g className="hero-node-badge" style={{ animationDelay: "1.9s" }}>
          <circle cx="880" cy="260" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="890" cy="251" r="3" fill="#CA8A04" />
          <path
            d="M 874.5 260 L 878.5 264 L 886 255"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
