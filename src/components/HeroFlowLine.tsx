"use client";

export default function HeroFlowLine() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      <svg
        viewBox="0 0 1000 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-text-primary opacity-15 preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          <style>{`
            @keyframes drawPath {
              to {
                strokeDashoffset: 0;
              }
            }
            @keyframes fadeInNode {
              from {
                opacity: 0;
                transform: scale(0.7);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .flow-line {
              stroke-dasharray: 1400;
              stroke-dashoffset: 1400;
              animation: drawPath 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .node-icon {
              opacity: 0;
              animation: fadeInNode 0.5s ease-out forwards;
              transform-origin: center;
            }
            @media (prefers-reduced-motion: reduce) {
              .flow-line {
                stroke-dashoffset: 0 !important;
                animation: none !important;
              }
              .node-icon {
                opacity: 1 !important;
                animation: none !important;
              }
            }
          `}</style>
        </defs>

        {/* Single thin flowing line winding through hero */}
        <path
          d="M 40 50 C 130 110, 210 40, 310 135 C 410 230, 520 120, 620 200 C 720 280, 810 170, 950 230"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          strokeLinecap="round"
          className="flow-line"
        />

        {/* Node 1: Website / Browser Icon near start */}
        <g className="node-icon" style={{ animationDelay: "1.3s" }}>
          <circle cx="150" cy="78" r="16" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle cx="150" cy="78" r="3" fill="#CA8A04" />
          {/* Mini browser icon */}
          <rect x="143" y="72" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="0.9" fill="none" />
          <line x1="143" y1="75" x2="157" y2="75" stroke="currentColor" strokeWidth="0.9" />
          <circle cx="146" cy="73.8" r="0.6" fill="currentColor" />
          <circle cx="148.5" cy="73.8" r="0.6" fill="currentColor" />
        </g>

        {/* Node 2: Search / Magnifying Glass Icon partway through */}
        <g className="node-icon" style={{ animationDelay: "1.5s" }}>
          <circle cx="375" cy="165" r="16" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle cx="375" cy="165" r="3" fill="#CA8A04" />
          {/* Mini magnifying glass */}
          <circle cx="373" cy="163" r="4.5" stroke="currentColor" strokeWidth="0.9" fill="none" />
          <line x1="376.5" y1="166.5" x2="381" y2="171" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        </g>

        {/* Node 3: Chat / WhatsApp Bubble Icon further along */}
        <g className="node-icon" style={{ animationDelay: "1.7s" }}>
          <circle cx="630" cy="205" r="16" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle cx="630" cy="205" r="3" fill="#CA8A04" />
          {/* Mini chat bubble */}
          <path
            d="M 624 199 H 636 A 3.5 3.5 0 0 1 639.5 202.5 V 205.5 A 3.5 3.5 0 0 1 636 209 H 628 L 624 212 V 202.5 A 3.5 3.5 0 0 1 624 199 Z"
            stroke="currentColor"
            strokeWidth="0.9"
            fill="none"
          />
        </g>

        {/* Node 4: Checkmark Icon near end, trailing to live demo card */}
        <g className="node-icon" style={{ animationDelay: "1.9s" }}>
          <circle cx="850" cy="205" r="16" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle cx="850" cy="205" r="3" fill="#CA8A04" />
          {/* Mini checkmark */}
          <path
            d="M 844 205 L 848.5 209.5 L 856 200"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
