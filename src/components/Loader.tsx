"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // 1. Skip on repeat visits within the same session
    try {
      if (sessionStorage.getItem("nq_loader_seen")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(false);
        return;
      }
    } catch {
      // Ignore storage access errors in restrictive iframes/browsers
    }

    // 2. Instant skip for users who prefer reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    // 3. Smooth, deterministic progress animation (total active time ~850ms)
    const DURATION = 850;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const linearProgress = Math.min(elapsed / DURATION, 1);

      // Custom high-end easing: starts smoothly, accelerates mid-way, snaps into place
      // Quintic ease-out curve for snappy, authoritative feel
      const easedProgress = Math.min(
        100,
        Math.round(100 * (1 - Math.pow(1 - linearProgress, 3.5)))
      );

      setProgress(easedProgress);

      if (linearProgress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        // Brief hold at 100% for optical confirmation before cinematic exit
        setTimeout(() => {
          setIsDone(true);
          try {
            sessionStorage.setItem("nq_loader_seen", "1");
          } catch {
            // Ignore storage write failure
          }
          // Remove from DOM after transition completes
          setTimeout(() => {
            setIsVisible(false);
          }, 450);
        }, 120);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // 4. Quick escape hatch: Escape key immediately dismisses
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDone(true);
        setIsVisible(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="nerqiva-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-bg-primary select-none overflow-hidden"
          style={{ pointerEvents: isDone ? "none" : "all" }}
        >
          {/* Subtle architectural ambient radial glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 48%, var(--accent-glow) 0%, transparent 60%)",
            }}
          />

          {/* Central Branded Content */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -14,
              scale: 0.98,
              filter: "blur(6px)",
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            {/* Concentric Precision Aura & Logo */}
            <div className="relative mb-6 flex items-center justify-center">
              {/* Outer decorative hairline ring */}
              <div
                className="absolute -inset-3.5 rounded-full border border-border/60 animate-spin-slow opacity-60"
                style={{
                  borderTopColor: "var(--accent)",
                  borderRightColor: "transparent",
                }}
              />

              {/* Inner glowing badge backing */}
              <div className="relative h-16 w-16 rounded-2xl flex items-center justify-center bg-bg-secondary/40 border border-border/80 shadow-sm backdrop-blur-sm">
                <BrandLogo className="h-10 w-10" />
              </div>
            </div>

            {/* Studio Identity Wordmark */}
            <div className="flex flex-col items-center gap-1.5 mb-8">
              <span className="font-mono text-base font-bold tracking-[0.28em] text-text-primary">
                NERQIVA
              </span>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-text-secondary uppercase">
                <span>Studio</span>
                <span className="w-1 h-1 rounded-full bg-accent inline-block animate-pulse" />
                <span>Systems</span>
              </div>
            </div>

            {/* Precision Hairline Progress Bar & Live Counter */}
            <div className="w-52 flex flex-col gap-2.5">
              <div
                className="h-[2px] w-full rounded-full overflow-hidden"
                style={{ backgroundColor: "var(--border)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-75 ease-out"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "var(--accent)",
                    boxShadow: "0 0 10px var(--accent-glow)",
                  }}
                />
              </div>

              {/* Status & Tabular Percent */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-text-tertiary">
                <span className="uppercase text-[9px] text-text-secondary">
                  {progress < 100 ? "Initializing" : "Ready"}
                </span>
                <span className="tabular-nums font-medium text-text-secondary">
                  {String(progress).padStart(2, "0")}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
