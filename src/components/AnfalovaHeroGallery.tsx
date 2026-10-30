"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { Play, Pause } from "lucide-react";

// Dynamically load the Liquid Glass Three.js WebGL component (SSR disabled for WebGL canvas)
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

export default function AnfalovaHeroGallery() {
  const shellRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  
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
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Measure geometry relative to hero section
  useEffect(() => {
    const measureEl = measureRef.current;
    const shellEl = shellRef.current;
    if (!measureEl || !shellEl) return;

    const heroSection = shellEl.closest("section") || shellEl.parentElement;
    if (!heroSection) return;

    const updateGeometry = () => {
      const cardRect = measureEl.getBoundingClientRect();
      const heroRect = heroSection.getBoundingClientRect();
      const shellRect = shellEl.getBoundingClientRect();

      const cardWidth = cardRect.width || (window.innerWidth < 640 ? 248 : 332);
      const cardHeight = cardRect.height || (window.innerWidth < 640 ? 164 : 219);
      const topOffset = shellRect.top - heroRect.top;

      setGeometry({
        width: cardWidth,
        height: cardHeight,
        gap: window.innerWidth < 640 ? 10 : 14,
        top: topOffset,
        canvasHeight: heroRect.height || 900,
        canvasWidth: heroRect.width || 1440,
        centerY: topOffset + cardHeight / 2,
        radius: 6,
      });
    };

    const ro = new ResizeObserver(updateGeometry);
    ro.observe(measureEl);
    ro.observe(heroSection);
    ro.observe(shellEl);

    updateGeometry();
    window.addEventListener("resize", updateGeometry);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [isClient]);

  // Texture items for Liquid Glass Carousel
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

  // Aspect ratio scale factor
  const bScale = geometry
    ? Math.max(1, geometry.canvasWidth / geometry.canvasHeight / (1440 / 900))
    : 1;

  return (
    <div className="relative w-full overflow-hidden select-none" ref={shellRef}>
      
      {/* Hidden layout measuring element matching exact CSS geometry */}
      <div
        className="carousel-measure media-set"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
        }}
      >
        <div
          ref={measureRef}
          className="w-[248px] h-[164px] sm:w-[332px] sm:h-[219px]"
        />
      </div>

      {/* Main Container */}
      <div
        className="media-carousel relative w-full h-[164px] sm:h-[219px] overflow-visible cursor-grab active:cursor-grabbing"
        role="region"
        aria-label="Project gallery"
      >
        {/* WebGL Surface if available and no reduced motion */}
        {isClient && geometry && !hasWebGLError && !prefersReducedMotion ? (
          <div
            className="originkit-surface pointer-events-auto"
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              top: -geometry.top,
              height: geometry.canvasHeight,
              zIndex: 1,
            }}
          >
            <React.Suspense fallback={<div className="w-full h-full bg-transparent" />}>
              <LiquidGlassCarousel
                items={items}
                background="#0C0C0E"
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
                entry={{
                  enabled: false,
                }}
                onError={() => setHasWebGLError(true)}
              />
            </React.Suspense>
          </div>
        ) : (
          /* High-Fidelity CSS 3D Diagonal Ribbon Fallback */
          <div
            className="relative w-full h-full flex items-center overflow-hidden"
            style={{ perspective: "1200px" }}
          >
            <div
              className="flex gap-2.5 sm:gap-3.5 w-max animate-marquee"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
                animationDuration: "40s",
              }}
            >
              {[...FLAGSHIP_ITEMS, ...FLAGSHIP_ITEMS].map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  className="w-[248px] h-[164px] sm:w-[332px] sm:h-[219px] shrink-0 rounded-md overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-transform duration-300 hover:scale-[1.02]"
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

        {/* Tactile Pause Button on Lower Right of Carousel (Kris Anfalova Style) */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Play gallery" : "Pause gallery"}
          className="absolute right-4 bottom-2 z-20 px-2 py-1 rounded bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 text-white/80 hover:text-white font-mono text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg select-none"
        >
          {isPaused ? <Play size={10} className="fill-current" /> : <Pause size={10} className="fill-current" />}
          <span>{isPaused ? "RESUME" : "PAUSE"}</span>
        </button>

      </div>

    </div>
  );
}
