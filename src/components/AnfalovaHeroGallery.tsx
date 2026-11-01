"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { Play, Pause } from "lucide-react";
import { useTheme } from "next-themes";

// Dynamically load the Liquid Glass Three.js WebGL component (SSR disabled)
const LiquidGlassCarousel = dynamic(
  () => import("./LiquidGlassCarousel"),
  { ssr: false }
);

export interface GalleryProject {
  id: string;
  client: string;
  image: string;
  liveUrl: string;
}

const FLAGSHIP_ITEMS: GalleryProject[] = [
  {
    id: "lablink",
    client: "LabLink Diagnostics",
    image: "/images/projects/lablink/desktop.png",
    liveUrl: "https://www.lablinkguwahati.in/",
  },
  {
    id: "krishav",
    client: "Krishav Mehendi Atelier",
    image: "/images/projects/krishavmehendi/bridal.png",
    liveUrl: "https://hennaart-nine.vercel.app/",
  },
  {
    id: "titangym",
    client: "Titan Athletic Club",
    image: "/images/projects/titangym/contrast.png",
    liveUrl: "https://titangymnq.vercel.app/",
  },
  {
    id: "valerie",
    client: "Valerie Laurent Couture",
    image: "/images/projects/editorial/vogue.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
  },
  {
    id: "aurabeauty",
    client: "Elena Styles · Aura Clinic",
    image: "/images/projects/aurabeauty/final_hero.png",
    liveUrl: "https://aura-beauty-theme.vercel.app/",
  },
  {
    id: "houseoftales",
    client: "House of Tales / KMJ",
    image: "/images/projects/wedding/coastal.png",
    liveUrl: "https://aperturelight.vercel.app/",
  },
  {
    id: "mayabennett",
    client: "Maya Bennett Studio & Academy",
    image: "/images/projects/aurabeauty/maya_hero.png",
    liveUrl: "https://bridalnerqiva2.vercel.app/",
  },
  {
    id: "vogueheirloom",
    client: "Vogue & Heirloom",
    image: "/images/projects/wedding/heirloom_hero.png",
    liveUrl: "https://heirloomnq.vercel.app/",
  },
];

// Compute card dimensions responsively from container width
// Optimized for mobile: legible cards (~65% width) rather than tiny stamps
function computeCardDims(containerW: number): { w: number; h: number; gap: number } {
  if (containerW < 480) {
    // Mobile: comfortable legible hero card (~68% width on 375-430px phones)
    const w = Math.min(280, Math.max(220, Math.round(containerW * 0.68)));
    return { w, h: Math.round(w * 0.625), gap: 12 };
  } else if (containerW < 768) {
    // Tablet: ~2.4 cards
    const w = Math.round(containerW * 0.42);
    return { w, h: Math.round(w * 0.625), gap: 14 };
  } else if (containerW < 1200) {
    // Medium desktop: ~3 cards
    const w = Math.round(containerW * 0.30);
    return { w, h: Math.round(w * 0.625), gap: 16 };
  } else {
    // Large desktop: ~3.8 cards
    const w = Math.min(400, Math.round(containerW * 0.24));
    return { w, h: Math.round(w * 0.625), gap: 18 };
  }
}

export default function AnfalovaHeroGallery() {
  const shellRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const [geometry, setGeometry] = useState<{
    width: number;
    height: number;
    gap: number;
    top: number;
    canvasHeight: number;
    canvasWidth: number;
    centerY: number;
    radius: number;
  } | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const h = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  // Measure geometry: responsive card dims from real container width
  useEffect(() => {
    const shellEl = shellRef.current;
    const stripEl = stripRef.current;
    if (!shellEl || !stripEl) return;

    const updateGeometry = () => {
      const shellRect = shellEl.getBoundingClientRect();
      const stripRect = stripEl.getBoundingClientRect();

      const { w, h, gap } = computeCardDims(shellRect.width);

      // top offset of the strip within the shell
      const topOffset = stripRect.top - shellRect.top;
      const stripH = stripRect.height;

      setGeometry({
        width: w,
        height: h,
        gap,
        top: topOffset,
        canvasHeight: shellRect.height,
        canvasWidth: shellRect.width,
        // center of the strip in shell-space
        centerY: topOffset + stripH / 2,
        radius: 8,
      });
    };

    const ro = new ResizeObserver(updateGeometry);
    ro.observe(shellEl);
    ro.observe(stripEl);

    updateGeometry();
    window.addEventListener("resize", updateGeometry);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [isClient]);

  const items = useMemo(
    () =>
      FLAGSHIP_ITEMS.map((item) => ({
        image: item.image,
        src: item.image,
        type: "image" as const,
        id: item.id,
      })),
    []
  );

  // Compute strip height based on card height + margin for tilt overflow
  const stripH = geometry ? Math.round(geometry.height * 1.38) : 0;

  // Aspect ratio scale factor for lens
  const bScale = geometry
    ? Math.max(1, geometry.canvasWidth / geometry.canvasHeight / (1440 / 900))
    : 1;

  const { resolvedTheme } = useTheme();
  const canvasBg = resolvedTheme === "dark" ? "#09090B" : "#FFFFFF";

  return (
    /*
     * shellRef = the full-width container whose height becomes the canvas height.
     * overflow-visible so tilted cards bleed naturally past section edges — 
     * the hero section itself provides overflow-hidden clipping, with left/right
     * fade masks giving the seamless bleed-out edge look.
     */
    <div
      ref={shellRef}
      className="relative w-full overflow-visible select-none"
      aria-label="Project gallery"
    >
      {/* ── Physical strip placeholder — sets the shell's intrinsic height ── */}
      <div
        ref={stripRef}
        className="relative w-full"
        style={{ height: geometry ? `${stripH}px` : "260px" }}
        aria-hidden="true"
      />

      {/* ── Left & Right edge fade masks — the anfalova effect ── */}
      <div
        className="absolute inset-y-0 left-0 w-[12vw] pointer-events-none z-20"
        style={{
          background: resolvedTheme === "dark"
            ? "linear-gradient(to right, #09090B 0%, transparent 100%)"
            : "linear-gradient(to right, #FFFFFF 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-[12vw] pointer-events-none z-20"
        style={{
          background: resolvedTheme === "dark"
            ? "linear-gradient(to left, #09090B 0%, transparent 100%)"
            : "linear-gradient(to left, #FFFFFF 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── WebGL Surface ── */}
      {isClient && geometry && !hasWebGLError && !prefersReducedMotion ? (
        <div
          className="pointer-events-auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: geometry.canvasHeight,
            zIndex: 1,
          }}
        >
          <React.Suspense fallback={<div className="w-full h-full" />}>
            <LiquidGlassCarousel
              items={items}
              background={canvasBg}
              sizeMode="same"
              cardWidth={geometry.width}
              cardHeight={geometry.height}
              gap={geometry.gap}
              cardRadius={geometry.radius}
              rowCenterY={geometry.centerY}
              lens={{
                enabled: true,
                width: 0.565 * bScale,
                height: bScale,
                whiteGlow: 0,
                ringColor: "#00000000",
              }}
              motion={{ sensitivity: 3.125, glide: 5, snap: true }}
              interaction={{ wheel: false, drag: true, clickToFocus: false }}
              paused={isPaused}
              entry={{ enabled: false }}
              onError={() => setHasWebGLError(true)}
            />
          </React.Suspense>
        </div>
      ) : (
        /* ── High-fidelity CSS fallback ── */
        <div
          className="absolute inset-0 flex items-center overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          <div
            className="flex gap-2.5 md:gap-4 w-max animate-marquee"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: "40s",
            }}
          >
            {[...FLAGSHIP_ITEMS, ...FLAGSHIP_ITEMS].map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="shrink-0 rounded-xl overflow-hidden bg-neutral-800 border border-white/10 shadow-2xl"
                style={{ width: geometry ? `${geometry.width}px` : "260px", height: geometry ? `${geometry.height}px` : "172px" }}
              >
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Pause / Resume tactile control ── */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? "Play gallery" : "Pause gallery"}
        className="absolute right-6 sm:right-10 bottom-2 z-30 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-text-secondary dark:text-white/50 hover:text-text-primary dark:hover:text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-lg select-none"
      >
        {isPaused ? (
          <Play size={9} className="fill-current" />
        ) : (
          <Pause size={9} className="fill-current" />
        )}
        <span>{isPaused ? "RESUME" : "PAUSE"}</span>
      </button>
    </div>
  );
}
