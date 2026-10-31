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
    client: "Aura Wellness Clinic",
    image: "/images/projects/aurabeauty/final_hero.png",
    liveUrl: "https://nerqiva.com",
  },
  {
    id: "vowsnveils",
    client: "Vows & Veils Atelier",
    image: "/images/projects/wedding/bride_portrait.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
  },
];

// Card dimensions at each breakpoint
const CARD_W_SM = 260;
const CARD_H_SM = 172;
const CARD_W_MD = 340;
const CARD_H_MD = 225;
// Strip height at each breakpoint (card + generous overflow for diagonal effect)
const STRIP_H_SM = 220;
const STRIP_H_MD = 300;

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

  // Measure geometry: strip position relative to the shell (the full-section container)
  useEffect(() => {
    const shellEl = shellRef.current;
    const stripEl = stripRef.current;
    if (!shellEl || !stripEl) return;

    const updateGeometry = () => {
      const isMd = window.innerWidth >= 768;
      const cardW = isMd ? CARD_W_MD : CARD_W_SM;
      const cardH = isMd ? CARD_H_MD : CARD_H_SM;
      const gap = isMd ? 16 : 10;

      const shellRect = shellEl.getBoundingClientRect();
      const stripRect = stripEl.getBoundingClientRect();

      // top offset of the strip within the shell
      const topOffset = stripRect.top - shellRect.top;
      const stripH = stripRect.height;

      setGeometry({
        width: cardW,
        height: cardH,
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

  // Aspect ratio scale factor for lens
  const bScale = geometry
    ? Math.max(1, geometry.canvasWidth / geometry.canvasHeight / (1440 / 900))
    : 1;

  const { resolvedTheme } = useTheme();
  const canvasBg = resolvedTheme === "dark" ? "#09090B" : "#FFFFFF";

  return (
    /*
     * shellRef = the full-width container whose height becomes the canvas height.
     * The WebGL canvas is absolute within this shell, covering its full area.
     * The stripRef is a physical placeholder div that sets the shell's height
     * and tells the carousel where to draw the card row.
     */
    <div
      ref={shellRef}
      className="relative w-full overflow-hidden select-none"
      aria-label="Project gallery"
    >
      {/* ── Physical strip placeholder — determines shell height & centerY ── */}
      <div
        ref={stripRef}
        className="relative w-full h-[220px] md:h-[300px]"
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
                className="w-[260px] h-[172px] md:w-[340px] md:h-[225px] shrink-0 rounded-xl overflow-hidden bg-neutral-800 border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
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
        className="absolute right-6 sm:right-10 bottom-2 z-20 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-text-secondary dark:text-white/50 hover:text-text-primary dark:hover:text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-lg select-none"
        style={{ zIndex: 10 }}
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
