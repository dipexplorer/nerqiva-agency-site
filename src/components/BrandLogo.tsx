"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BrandLogo({ className = "h-8 w-8" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Before mount, render a placeholder to avoid hydration mismatch
  if (!mounted) {
    return <div className={`relative flex items-center justify-center ${className}`} />;
  }

  // logo-1.png has a black/dark background — works with mix-blend-screen on dark
  // logo-2.png or logo-3.png may have light-appropriate styling
  // For now: use mix-blend-screen on dark and mix-blend-multiply on light
  // Both modes preserve the logo shape against the background
  const logoSrc = resolvedTheme === "dark" ? "/brand/logo-1.png" : "/brand/logo-2.png";
  const blendMode = resolvedTheme === "dark" ? "mix-blend-screen" : "mix-blend-multiply";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <Image
        src={logoSrc}
        alt="NERQIVA"
        width={100}
        height={100}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
          transform: "scale(1.4)",
        }}
        className={blendMode}
        priority
      />
    </div>
  );
}
