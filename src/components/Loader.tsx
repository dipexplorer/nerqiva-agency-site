"use client";

import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const INIT_STEPS = [
  "Loading assets",
  "Building interface",
  "Preparing experience",
];

export default function Loader() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Skip on revisits
    const seen = sessionStorage.getItem("nq_seen");
    if (seen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStep(1), 350));
    timers.push(setTimeout(() => setStep(2), 700));
    timers.push(setTimeout(() => setStep(3), 1050));
    timers.push(
      setTimeout(() => {
        setDone(true);
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("nq_seen", "1");
        }, 500);
      }, 1400)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-bg-primary transition-opacity duration-500"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "all" }}
    >
      {/* Logo mark */}
      <div className="mb-8">
        <BrandLogo className="h-14 w-14" />
      </div>

      <span className="font-mono text-xl font-bold tracking-[0.25em] text-text-primary mb-8">
        NERQIVA
      </span>

      <div className="flex flex-col gap-3 w-56">
        {INIT_STEPS.map((label, i) => (
          <div
            key={label}
            className="flex items-center gap-3 transition-opacity duration-300"
            style={{ opacity: step > i ? 1 : 0.15 }}
          >
            <div
              className="h-1 flex-1 rounded-full overflow-hidden"
              style={{ backgroundColor: "var(--border)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: step > i ? "100%" : "0%",
                  backgroundColor: "rgb(124,58,237)",
                }}
              />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary w-40">
              {String(i + 1).padStart(2, "0")} / {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
