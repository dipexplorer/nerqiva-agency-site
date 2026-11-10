"use client";

import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";

/* ─── Static Data ────────────────────────────────────────────────────────── */
const EVENTS = [
  "Order received. Audit started.",
  "Conversion path mapped.",
  "Left audit. Build started.",
  "Services built.",
  "WhatsApp routing connected.",
  "Google Maps indexing set up.",
  "Reached you. Phone test started.",
  "You approved. Cleared for launch.",
  "Domain connected.",
  "Delivered. Live on Google.",
];

const STOPS: [number, string][] = [
  [1, "Picked up"],
  [3, "In transit"],
  [7, "Out for delivery"],
  [10, "Delivered"],
];

const PATH_D =
  "M40 150 C190 20 330 20 430 120 S640 220 730 130 S900 40 960 110";

/* ─── Helper Functions ───────────────────────────────────────────────────── */
function getStatus(d: number) {
  if (d <= 2) return "Picked up";
  if (d <= 6) return "In transit";
  if (d <= 9) return "Out for delivery";
  return "Delivered";
}

function getPhase(d: number) {
  if (d <= 2) return "Audit & Conversion Blueprint · Days 1–2";
  if (d <= 6) return "Full-Stack Build & Wiring · Days 3–6";
  return "Phone Test & Live Launch · Days 7–10";
}

// Generate realistic pseudo-random barcode bars
function generateBarcode() {
  let seed = 710;
  let x = 0;
  const bars: { x: number; w: number }[] = [];
  for (let i = 0; i < 46; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const w = 1 + Math.floor((seed / 233280) * 4);
    if (i % 2 === 0) {
      bars.push({ x, w });
    }
    x += w + 0.4;
  }
  return { bars, totalWidth: x };
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function SprintDelivery() {
  const roadRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragRef = useRef(false);
  const lengthRef = useRef(0);
  const sampledRef = useRef<[number, number][]>([]);

  const [day, setDay] = useState(1);
  const [stopPoints, setStopPoints] = useState<
    { x: number; y: number; label: string; dayNum: number }[]
  >([]);
  const [parcelPos, setParcelPos] = useState({ x: 40, y: 150 });
  const [progOffset, setProgOffset] = useState(1200);
  const [isHopping, setIsHopping] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const { bars, totalWidth } = useMemo(() => generateBarcode(), []);

  /* ── Initialize SVG Road Geometry ── */
  useEffect(() => {
    const road = roadRef.current;
    if (!road) return;
    const L = road.getTotalLength();
    lengthRef.current = L;
    setProgOffset(L);

    // Compute exact stop circle coordinates
    const pts = STOPS.map(([d, label]) => {
      const p = road.getPointAtLength((L * (d - 1)) / 9);
      return { x: p.x, y: p.y, label, dayNum: d };
    });
    setStopPoints(pts);

    // Initial parcel position at Day 1
    const p1 = road.getPointAtLength(0);
    setParcelPos({ x: p1.x, y: p1.y });

    // Pre-sample road arc for fast nearest-point drag detection
    const sampled: [number, number][] = [];
    for (let i = 0; i <= 180; i++) {
      const q = road.getPointAtLength((L * i) / 180);
      sampled.push([q.x, q.y]);
    }
    sampledRef.current = sampled;
    setInitialized(true);
  }, []);

  /* ── Move Parcel to Day ── */
  const applyDay = useCallback((d: number) => {
    const road = roadRef.current;
    const L = lengthRef.current;
    if (!road || !L) return;

    const p = road.getPointAtLength((L * (d - 1)) / 9);
    setParcelPos({ x: p.x, y: p.y });
    setProgOffset(L * (1 - (d - 1) / 9));
    setDay(d);

    // Trigger package hop jump animation
    setIsHopping(false);
    requestAnimationFrame(() => {
      setIsHopping(true);
    });
  }, []);

  /* ── Stop / Play Timers ── */
  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startPlay = useCallback(() => {
    stopAutoPlay();
    applyDay(1);
    let d = 1;
    const step = () => {
      timerRef.current = setTimeout(() => {
        if (d >= 10) {
          stopAutoPlay();
          return;
        }
        d++;
        applyDay(d);
        step();
      }, 1250);
    };
    step();
  }, [applyDay, stopAutoPlay]);

  /* ── Auto-play on Mount (unless prefers-reduced-motion) ── */
  useEffect(() => {
    if (!initialized) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      applyDay(1);
      return;
    }
    startPlay();
    return () => stopAutoPlay();
  }, [initialized, startPlay, applyDay, stopAutoPlay]);

  /* ── Interactive Pointer / Dragging on Road ── */
  const getDayFromPointer = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    const sampled = sampledRef.current;
    if (!svg || sampled.length === 0) return 1;

    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 1000;
    const y = ((e.clientY - rect.top) / rect.height) * 240;

    let bestIndex = 0;
    let minDistanceSq = Infinity;
    for (let i = 0; i < sampled.length; i++) {
      const [sx, sy] = sampled[i];
      const distSq = (sx - x) ** 2 + (sy - y) ** 2;
      if (distSq < minDistanceSq) {
        minDistanceSq = distSq;
        bestIndex = i;
      }
    }
    const computedDay = Math.round((bestIndex / 180) * 9) + 1;
    return Math.min(10, Math.max(1, computedDay));
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    stopAutoPlay();
    dragRef.current = true;
    svgRef.current?.setPointerCapture(e.pointerId);
    applyDay(getDayFromPointer(e));
  }, [stopAutoPlay, applyDay, getDayFromPointer]);

  const handlePointerMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    if (!dragRef.current) return;
    const targetDay = getDayFromPointer(e);
    applyDay(targetDay);
  }, [getDayFromPointer, applyDay]);

  const handlePointerUp = useCallback(() => {
    dragRef.current = false;
  }, []);

  /* ── Keyboard Arrow Navigation ── */
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      stopAutoPlay();
      applyDay(Math.min(10, day + 1));
      e.preventDefault();
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      stopAutoPlay();
      applyDay(Math.max(1, day - 1));
      e.preventDefault();
    }
  }, [stopAutoPlay, applyDay, day]);

  /* ── Dynamic Event Log (Last 4 days descending) ── */
  const logEntries: { dayNum: number; text: string }[] = [];
  for (let k = day; k >= Math.max(1, day - 3); k--) {
    logEntries.push({ dayNum: k, text: EVENTS[k - 1] });
  }

  return (
    <section
      id="protocol"
      className="py-16 sm:py-24 bg-transparent border-t border-border/40 relative overflow-hidden select-none"
      aria-label="How We Ship — Delivery Protocol"
    >
      <div className="section-container relative z-10">

        {/* ── Top Bar: Title + Replay Action ── */}
        <div className="flex justify-between items-end gap-4 flex-wrap pb-4">
          <h2
            className="font-display font-black text-text-primary m-0 leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8.5vw, 6.6rem)", letterSpacing: "-0.04em" }}
          >
            How We Ship.
          </h2>
          <button
            onClick={startPlay}
            type="button"
            className="font-mono text-xs text-text-primary bg-transparent border border-border/80 dark:border-zinc-700 hover:border-text-primary dark:hover:border-zinc-400 rounded-full px-4 py-2 cursor-pointer transition-colors shadow-2xs hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Track again
          </button>
        </div>

        {/* Mobile Milestone Quick Touch Bar (< 768px for easy thumb tapping) */}
        <div className="flex md:hidden items-center justify-between gap-1.5 mt-3 p-1 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-border/70">
          {STOPS.map(([sDay, sLabel]) => {
            const isCurrent = day === sDay;
            const isPassed = day >= sDay;
            return (
              <button
                key={sDay}
                type="button"
                onClick={() => {
                  stopAutoPlay();
                  applyDay(sDay);
                }}
                className={`flex-1 py-1.5 px-1.5 rounded-lg font-mono text-[10.5px] font-semibold text-center transition-all cursor-pointer select-none flex flex-col items-center leading-tight ${
                  isCurrent
                    ? "bg-text-primary text-bg-primary dark:bg-white dark:text-zinc-950 shadow-xs"
                    : isPassed
                    ? "text-accent dark:text-accent-light bg-accent/10"
                    : "text-text-tertiary hover:text-text-secondary"
                }`}
                aria-pressed={isCurrent}
              >
                <span className="font-bold">Day {sDay}</span>
                <span className="truncate text-[9px] opacity-75">{sLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ── SVG Curved Route ── */}
        <div className="relative mt-8 select-none" style={{ touchAction: "none" }}>
          <svg
            ref={svgRef}
            viewBox="0 0 1000 240"
            className="block w-full overflow-visible cursor-grab active:cursor-grabbing"
            style={{ touchAction: "none", height: "auto" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            aria-label={`Interactive delivery route. Current position: Day ${day} of 10.`}
            role="img"
          >
            {/* Background Dashed Road */}
            <path
              ref={roadRef}
              d={PATH_D}
              fill="none"
              stroke="#cfcfd8"
              className="dark:stroke-zinc-700"
              strokeWidth="3"
              strokeDasharray="2 9"
              strokeLinecap="round"
            />

            {/* Solid Progress Path */}
            <path
              d={PATH_D}
              fill="none"
              stroke="var(--sp-accent, #5a14b8)"
              strokeWidth="5"
              strokeLinecap="round"
              style={{
                strokeDasharray: lengthRef.current || 1200,
                strokeDashoffset: progOffset,
                transition: "stroke-dashoffset 0.7s cubic-bezier(0.3, 0.7, 0.2, 1)",
              }}
            />

            {/* Milestone Stop Circles */}
            {stopPoints.map((pt) => {
              const isHit = day >= pt.dayNum;
              return (
                <circle
                  key={pt.dayNum}
                  cx={pt.x}
                  cy={pt.y}
                  r={11}
                  fill={isHit ? "var(--sp-accent, #5a14b8)" : "var(--bg-primary, #ffffff)"}
                  stroke={isHit ? "var(--sp-accent, #5a14b8)" : "#cfcfd8"}
                  strokeWidth="3"
                  className={!isHit ? "dark:stroke-zinc-700 dark:fill-zinc-900" : ""}
                  style={{ transition: "fill 0.3s, stroke 0.3s" }}
                />
              );
            })}

            {/* Traveling Parcel with Hop Animation */}
            <g
              tabIndex={0}
              role="slider"
              aria-label="Project day"
              aria-valuemin={1}
              aria-valuemax={10}
              aria-valuenow={day}
              onKeyDown={handleKeyDown}
              className="cursor-grab active:cursor-grabbing focus:outline-hidden"
              style={{
                transform: `translate(${parcelPos.x}px, ${parcelPos.y - 28}px)`,
                transition: "transform 0.7s cubic-bezier(0.3, 0.7, 0.2, 1)",
              }}
            >
              <g className={isHopping ? "parcel-hop" : ""}>
                {/* Package Shadow */}
                <ellipse cx="0" cy="12" rx="22" ry="5" fill="#000" opacity="0.14" />
                {/* Package Body */}
                <rect
                  x="-24"
                  y="-26"
                  width="48"
                  height="38"
                  rx="5"
                  fill="var(--sp-accent, #5a14b8)"
                />
                {/* Vertical Tape */}
                <rect x="-4" y="-26" width="8" height="38" fill="var(--sp-on-accent, #ffffff)" opacity="0.35" />
                {/* Horizontal Tape */}
                <rect x="-24" y="-12" width="48" height="3" fill="var(--sp-on-accent, #ffffff)" opacity="0.35" />
              </g>
            </g>
          </svg>

          {/* HTML Overlay Stop Labels */}
          {stopPoints.map((pt, i) => {
            const isHit = day >= pt.dayNum;
            return (
              <div
                key={pt.dayNum}
                className="absolute font-mono text-center pointer-events-none transition-colors duration-300"
                style={{
                  fontSize: "clamp(0.68rem, 1.4vw, 0.75rem)",
                  lineHeight: 1.35,
                  left: `${(pt.x / 1000) * 100}%`,
                  top: `${((pt.y + 22) / 240) * 100}%`,
                  transform:
                    i === 0
                      ? "translateX(-12%)"
                      : i === 3
                      ? "translateX(-88%)"
                      : "translateX(-50%)",
                  color: isHit ? "var(--text-primary)" : "var(--text-tertiary)",
                }}
              >
                <b
                  className="block font-medium"
                  style={{ color: "var(--sp-accent, #5a14b8)" }}
                >
                  Day {pt.dayNum}
                </b>
                {pt.label}
              </div>
            );
          })}
        </div>

        {/* ── Below Section: Live Status Log & Tactile Shipping Label ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 mt-14 sm:mt-16 items-start">

          {/* Left Column: Live Status & Day-by-Day Event Log */}
          <div>
            <p
              className="font-display font-black text-text-primary m-0 leading-none"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                letterSpacing: "-0.035em",
              }}
              aria-live="polite"
            >
              {getStatus(day)}
            </p>
            <p
              className="font-mono mt-3"
              style={{ fontSize: "0.75rem", color: "var(--sp-accent, #5a14b8)" }}
            >
              {getPhase(day)}
            </p>

            <ul className="list-none m-0 p-0 mt-7 border-t border-border/40">
              {logEntries.map(({ dayNum, text }, i) => (
                <li
                  key={dayNum}
                  className="grid gap-3 py-3 border-b border-border/40 font-sans text-sm"
                  style={{
                    gridTemplateColumns: "4.2rem 1fr",
                    color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                    fontWeight: i === 0 ? 500 : 400,
                    opacity: i >= 3 ? 0.5 : 1,
                    animation: i === 0 ? "sd-log-in 0.4s ease" : undefined,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}
                  >
                    Day {dayNum}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Physical Shipping Label (Desktop Only - hidden on mobile as shown in reference) */}
          <div
            className="hidden md:block relative rounded-lg font-mono text-zinc-900 border border-zinc-200 shadow-2xl max-w-md w-full md:ml-auto"
            style={{
              background: "#ffffff",
              padding: "1.3rem 1.3rem 1.1rem",
              transform: "rotate(1.4deg)",
              boxShadow: "0 18px 40px -18px rgba(30, 10, 70, 0.35)",
              fontSize: "0.72rem",
              lineHeight: 1.35,
            }}
            aria-label="Tactile Shipping Label"
          >
            {/* Dashed Tear Line */}
            <div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                top: "3.35rem",
                borderTop: "2px dashed #cfcfd8",
              }}
            />

            {/* Label Header */}
            <div className="flex justify-between items-baseline mb-6">
              <b
                className="font-display font-black text-zinc-950"
                style={{ fontSize: "1.5rem", letterSpacing: "-0.03em" }}
              >
                NERQIVA Studio
              </b>
              <span className="text-zinc-500 font-sans text-xs">Guwahati</span>
            </div>

            {/* Label Table Rows */}
            {[
              ["To", "Your business"],
              ["Contents", "A website that books clients"],
              ["Service", "7–10 day delivery"],
              ["Ownership", "100% yours. Code, domain, data. No lock-in retainers."],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 py-2 border-b border-zinc-100"
                style={{ gridTemplateColumns: "5.2rem 1fr" }}
              >
                <span className="text-zinc-500">{label}</span>
                <span className="text-zinc-900 font-medium">{value}</span>
              </div>
            ))}

            {/* Barcode SVG */}
            <svg
              viewBox={`0 0 ${totalWidth} 50`}
              preserveAspectRatio="none"
              className="w-full block"
              style={{ height: "3.2rem", marginTop: "1rem" }}
              aria-hidden="true"
            >
              {bars.map((bar, i) => (
                <rect key={i} x={bar.x} y="0" width={bar.w} height="50" fill="#0c0c10" />
              ))}
            </svg>

            {/* Tracking Serial */}
            <div className="text-center mt-1 text-zinc-600 font-mono text-[11px]">
              NQ 0710 · day {day} of 10
            </div>

            {/* Rubber Stamp: Delivered (Stamps down with bounce scale on Day 10) */}
            <div
              className={`absolute right-4 font-display font-black pointer-events-none transition-all duration-300 ${
                day === 10 ? "opacity-100 scale-100" : "opacity-0 scale-175"
              }`}
              style={{
                top: "42%",
                fontSize: "2.1rem",
                color: "#5a14b8",
                border: "4px solid #5a14b8",
                borderRadius: "0.4rem",
                padding: "0.05rem 0.7rem",
                transform: `rotate(-14deg) ${day === 10 ? "scale(1)" : "scale(1.75)"}`,
                transition: "transform 0.3s cubic-bezier(0.3, 1.6, 0.5, 1), opacity 0.2s",
                background: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Delivered
            </div>
          </div>

        </div>
      </div>

      {/* Scoped CSS Variables and Keyframe Animations */}
      <style jsx>{`
        #protocol {
          --sp-accent: #5a14b8;
          --sp-on-accent: #ffffff;
        }
        :global(.dark) #protocol {
          --sp-accent: #b49cff;
          --sp-on-accent: #150f2b;
        }

        .parcel-hop {
          animation: hop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes hop {
          0% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes sd-log-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
