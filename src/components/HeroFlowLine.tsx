"use client";

export default function HeroFlowLine() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-accent opacity-35 preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="purple-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--accent-light, #8B5CF6)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent-gold, #EAB308)" stopOpacity="0.2" />
          </linearGradient>

          <style>{`
            @keyframes drawPath {
              to {
                strokeDashoffset: 0;
              }
            }
            .flow-line-main {
              stroke-dasharray: 1800;
              stroke-dashoffset: 1800;
              animation: drawPath 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .flow-line-sub {
              stroke-dasharray: 1500;
              stroke-dashoffset: 1500;
              animation: drawPath 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
            }
          `}</style>
        </defs>

        {/* Line 1: Primary Flowing Wave Line across headline to demo frame */}
        <path
          d="M -50 220 C 200 120, 350 320, 580 180 C 750 80, 920 280, 1250 160"
          stroke="url(#purple-flow)"
          strokeWidth="1.5"
          strokeDasharray="6 3"
          strokeLinecap="round"
          className="flow-line-main"
        />

        {/* Line 2: Secondary Organic Curve line beneath text */}
        <path
          d="M 50 340 C 280 260, 480 380, 680 240 C 880 100, 1050 310, 1250 220"
          stroke="url(#purple-flow)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.6"
          strokeLinecap="round"
          className="flow-line-sub"
        />

        {/* Line 3: Accent Branch Line pointing towards Demo Pills */}
        <path
          d="M 450 250 C 560 210, 620 290, 720 250"
          stroke="url(#purple-flow)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}

