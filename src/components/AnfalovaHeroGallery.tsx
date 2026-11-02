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
    image: "/images/projects/lablink/thumb.webp",
    liveUrl: "https://www.lablinkguwahati.in/",
  },
  {
    id: "krishav",
    client: "Krishav Mehendi Atelier",
    image: "/images/projects/krishavmehendi/thumb.webp",
    liveUrl: "https://hennaart-nine.vercel.app/",
  },
  {
    id: "titangym",
    client: "Titan Athletic Club",
    image: "/images/projects/titangym/thumb.webp",
    liveUrl: "https://titangymnq.vercel.app/",
  },
  {
    id: "valerie",
    client: "Valerie Laurent Couture",
    image: "/images/projects/editorial/thumb.webp",
    liveUrl: "https://bridalnerqiva.vercel.app/",
  },
  {
    id: "aurabeauty",
    client: "Elena Styles · Aura Clinic",
    image: "/images/projects/aurabeauty/thumb.webp",
    liveUrl: "https://aura-beauty-theme.vercel.app/",
  },
  {
    id: "houseoftales",
    client: "House of Tales / KMJ",
    image: "/images/projects/wedding/thumb_coastal.webp",
    liveUrl: "https://aperturelight.vercel.app/",
  },
  {
    id: "mayabennett",
    client: "Maya Bennett Studio & Academy",
    image: "/images/projects/aurabeauty/thumb_maya.webp",
    liveUrl: "https://bridalnerqiva2.vercel.app/",
  },
  {
    id: "vogueheirloom",
    client: "Vogue & Heirloom",
    image: "/images/projects/wedding/thumb_heirloom.webp",
    liveUrl: "https://heirloomnq.vercel.app/",
  },
];

// Compute card dimensions responsively from container width
// Minimised, professional proportions (~5 cards across desktop like anfalova.art)
function computeCardDims(containerW: number): { w: number; h: number; gap: number } {
  if (containerW < 480) {
    // Mobile: ~1.8 cards visible, compact & clean
    const w = Math.min(200, Math.max(170, Math.round(containerW * 0.52)));
    return { w, h: Math.round(w * 0.625), gap: 10 };
  } else if (containerW < 768) {
    // Tablet: ~3 cards
    const w = Math.round(containerW * 0.32);
    return { w, h: Math.round(w * 0.625), gap: 12 };
  } else if (containerW < 1200) {
    // Medium desktop: ~4 cards
    const w = Math.min(235, Math.round(containerW * 0.22));
    return { w, h: Math.round(w * 0.625), gap: 12 };
  } else {
    // Large desktop: ~5 cards across screen like anfalova.art!
    const w = Math.min(255, Math.max(220, Math.round(containerW * 0.17)));
    return { w, h: Math.round(w * 0.625), gap: 14 };
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

  // Measure geometry: full hero canvas height + responsive compact card dims
  useEffect(() => {
    const shellEl = shellRef.current;
    const stripEl = stripRef.current;
    if (!shellEl || !stripEl) return;

    const heroEl = (shellEl.closest(".intro-hero") || shellEl.closest("#hero") || shellEl.parentElement) as HTMLElement | null;
    if (!heroEl) return;

    const updateGeometry = () => {
      const heroRect = heroEl.getBoundingClientRect();
      const stripRect = stripEl.getBoundingClientRect();

      const { w, h, gap } = computeCardDims(heroRect.width);

      // Top offset of the physical strip relative to the top of the hero section:
      const topOffset = stripRect.top - heroRect.top;

      setGeometry({
        width: w,
        height: h,
        gap,
        top: topOffset,
        canvasHeight: heroRect.height,
        canvasWidth: heroRect.width,
        // Vertically center cards in the strip area:
        centerY: topOffset + h / 2,
        radius: 4,
      });
    };

    const ro = new ResizeObserver(updateGeometry);
    ro.observe(shellEl);
    ro.observe(stripEl);
    ro.observe(heroEl);

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

  // Aspect ratio scale factor for lens (anfalova ratio)
  const bScale = geometry
    ? Math.max(1, geometry.canvasWidth / geometry.canvasHeight / (1440 / 1028))
    : 1;

  const { resolvedTheme } = useTheme();
  const canvasBg = resolvedTheme === "dark" ? "#09090B" : "#FFFFFF";

  return (
    /*
     * shellRef = container hosting the gallery strip.
     * The WebGL canvas is positioned at top: -geometry.top so it spans
     * the ENTIRE hero section without clipping vertices or color seams.
     */
    <div
      ref={shellRef}
      className="relative w-full overflow-visible select-none"
      aria-label="Project gallery"
    >
      {/* ── Physical strip placeholder — sets the natural card height ── */}
      <div
        ref={stripRef}
        className="relative w-full"
        style={{ height: geometry ? `${geometry.height}px` : "155px" }}
        aria-hidden="true"
      />

      {/* ── Left & Right subtle edge bleed masks ── */}
      <div
        className="absolute -inset-y-6 left-0 w-[clamp(50px,8vw,130px)] pointer-events-none z-20"
        style={{
          background: resolvedTheme === "dark"
            ? "linear-gradient(to right, #09090B 30%, transparent 100%)"
            : "linear-gradient(to right, #FFFFFF 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -inset-y-6 right-0 w-[clamp(50px,8vw,130px)] pointer-events-none z-20"
        style={{
          background: resolvedTheme === "dark"
            ? "linear-gradient(to left, #09090B 30%, transparent 100%)"
            : "linear-gradient(to left, #FFFFFF 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── WebGL Surface spanning full hero section ── */}
      {isClient && geometry && !hasWebGLError ? (
        <div
          className="pointer-events-auto"
          style={{
            position: "absolute",
            top: -geometry.top,
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
