"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function InteractiveGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: -1000, y: -1000 };
    let width = 0;
    let height = 0;

    const gridSize = 40;
    const dotSize = 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Theme-aware dot color
      const isDark = document.documentElement.classList.contains("dark");
      const baseDotColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
      const accentColor = "rgba(124, 58, 237,";

      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;
          const intensity = dist < maxDist ? 1 - dist / maxDist : 0;

          // Base dot
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = baseDotColor;
          ctx.fill();

          if (intensity > 0) {
            // Highlighted dot
            ctx.beginPath();
            ctx.arc(x, y, dotSize + intensity * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `${accentColor}${intensity * 0.85})`;
            ctx.fill();

            // Horizontal connector
            if (i < cols - 1) {
              const rightX = (i + 1) * gridSize;
              const rightDist = Math.sqrt((mouse.x - rightX) ** 2 + (mouse.y - y) ** 2);
              if (rightDist < maxDist) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(rightX, y);
                ctx.strokeStyle = `${accentColor}${intensity * 0.18})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }

            // Vertical connector
            if (j < rows - 1) {
              const bottomY = (j + 1) * gridSize;
              const bottomDist = Math.sqrt((mouse.x - x) ** 2 + (mouse.y - bottomY) ** 2);
              if (bottomDist < maxDist) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, bottomY);
                ctx.strokeStyle = `${accentColor}${intensity * 0.18})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-bg-primary">
      <motion.canvas
        ref={canvasRef}
        className="w-full h-full opacity-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
}
