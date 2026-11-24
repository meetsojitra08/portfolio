"use client";

import * as React from "react";

// Self-contained, lightweight 2D Perlin noise generator
function createNoise2D() {
  const p = new Uint8Array(512);
  const permutation = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36,
    103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75,
    0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149,
    56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27,
    166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41,
    55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76,
    132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100,
    109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118,
    126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
    223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155,
    167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178,
    185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191,
    179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181,
    199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138,
    236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61,
    156, 180,
  ];
  for (let i = 0; i < 256; i++) {
    p[i] = permutation[i];
    p[256 + i] = permutation[i];
  }

  function fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function lerp(t: number, a: number, b: number) {
    return a + t * (b - a);
  }
  function grad(hash: number, x: number, y: number) {
    const h = hash & 7;
    const u = h < 4 ? x : y;
    const v = h < 4 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  return function noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const A = p[X] + Y;
    const B = p[X + 1] + Y;
    return lerp(
      v,
      lerp(u, grad(p[A], xf, yf), grad(p[B], xf - 1, yf)),
      lerp(u, grad(p[A + 1], xf, yf - 1), grad(p[B + 1], xf - 1, yf - 1))
    );
  };
}

function getInterpolationT(v1: number, v2: number, c: number): number {
  const diff = v2 - v1;
  if (Math.abs(diff) < 0.00001) return 0.5;
  const t = (c - v1) / diff;
  return Math.max(0, Math.min(1, t));
}

export function HeroTopologyBackground() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise2D = createNoise2D();

    let animId: number | null = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let time = 0;

    // Pointer coordinates with smooth interpolation
    let targetPointerX = -9999;
    let targetPointerY = -9999;
    let pointerX = -9999;
    let pointerY = -9999;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Handle high-DPI canvas resizing
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 500);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Pointer move listener on container for subtle topology reaction
    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetPointerX = e.clientX - rect.left;
      targetPointerY = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      targetPointerX = -9999;
      targetPointerY = -9999;
    };

    container.addEventListener("mousemove", onPointerMove, { passive: true });
    container.addEventListener("mouseleave", onPointerLeave, { passive: true });

    // Grid configuration for Marching Squares
    // Step of ~28px yields ~45x30 cells on 1280x800 desktop
    const CELL_SIZE = 28;
    const CONTOUR_LEVELS = [
      -0.55, -0.42, -0.3, -0.18, -0.06, 0.06, 0.18, 0.3, 0.42, 0.55, 0.68,
    ];

    // Helper to evaluate height field at (x, y)
    const evaluateField = (x: number, y: number, t: number) => {
      // Base multi-octave landscape noise
      const scale1 = 0.0022;
      const scale2 = 0.0048;
      const n1 = noise2D(x * scale1 + t * 0.04, y * scale1 + t * 0.03);
      const n2 = noise2D(x * scale2 - t * 0.02, y * scale2 + t * 0.025) * 0.5;

      let value = n1 + n2;

      // Pointer proximity elevation hill
      if (pointerX > -1000 && pointerY > -1000) {
        const dx = x - pointerX;
        const dy = y - pointerY;
        const distSq = dx * dx + dy * dy;
        const radius = 220;
        if (distSq < radius * radius) {
          const factor = 1 - distSq / (radius * radius);
          value += factor * factor * 0.45;
        }
      }

      return value;
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth pointer interpolation
      if (targetPointerX > -1000) {
        pointerX += (targetPointerX - pointerX) * 0.08;
        pointerY += (targetPointerY - pointerY) * 0.08;
      } else {
        pointerX = -9999;
        pointerY = -9999;
      }

      const cols = Math.ceil(width / CELL_SIZE) + 1;
      const rows = Math.ceil(height / CELL_SIZE) + 1;

      // Compute field grid values
      const grid: number[][] = [];
      for (let c = 0; c < cols; c++) {
        grid[c] = [];
        const x = c * CELL_SIZE;
        for (let r = 0; r < rows; r++) {
          const y = r * CELL_SIZE;
          grid[c][r] = evaluateField(x, y, time);
        }
      }

      // Read accent color from CSS variable
      const style = getComputedStyle(canvas);
      const accent = style.getPropertyValue("--accent").trim() || "#B6F24A";

      // Render each contour elevation line
      CONTOUR_LEVELS.forEach((level, levelIdx) => {
        // Every 3rd line is a slightly stronger "index contour" line
        const isIndexContour = levelIdx % 3 === 0;
        ctx.strokeStyle = accent;
        ctx.lineWidth = isIndexContour ? 1.25 : 0.85;
        ctx.globalAlpha = isIndexContour ? 0.28 : 0.16;

        ctx.beginPath();

        for (let c = 0; c < cols - 1; c++) {
          const x0 = c * CELL_SIZE;
          const x1 = (c + 1) * CELL_SIZE;

          for (let r = 0; r < rows - 1; r++) {
            const y0 = r * CELL_SIZE;
            const y1 = (r + 1) * CELL_SIZE;

            const v0 = grid[c][r]; // Top-Left
            const v1 = grid[c + 1][r]; // Top-Right
            const v2 = grid[c + 1][r + 1]; // Bottom-Right
            const v3 = grid[c][r + 1]; // Bottom-Left

            // 4-bit index
            let caseIndex = 0;
            if (v0 > level) caseIndex |= 1;
            if (v1 > level) caseIndex |= 2;
            if (v2 > level) caseIndex |= 4;
            if (v3 > level) caseIndex |= 8;

            if (caseIndex === 0 || caseIndex === 15) continue;

            const topX = x0 + getInterpolationT(v0, v1, level) * CELL_SIZE;
            const topY = y0;

            const rightX = x1;
            const rightY = y0 + getInterpolationT(v1, v2, level) * CELL_SIZE;

            const botX = x0 + getInterpolationT(v3, v2, level) * CELL_SIZE;
            const botY = y1;

            const leftX = x0;
            const leftY = y0 + getInterpolationT(v0, v3, level) * CELL_SIZE;

            switch (caseIndex) {
              case 1:
              case 14:
                ctx.moveTo(leftX, leftY);
                ctx.lineTo(topX, topY);
                break;
              case 2:
              case 13:
                ctx.moveTo(topX, topY);
                ctx.lineTo(rightX, rightY);
                break;
              case 3:
              case 12:
                ctx.moveTo(leftX, leftY);
                ctx.lineTo(rightX, rightY);
                break;
              case 4:
              case 11:
                ctx.moveTo(rightX, rightY);
                ctx.lineTo(botX, botY);
                break;
              case 5:
                ctx.moveTo(leftX, leftY);
                ctx.lineTo(topX, topY);
                ctx.moveTo(rightX, rightY);
                ctx.lineTo(botX, botY);
                break;
              case 6:
              case 9:
                ctx.moveTo(topX, topY);
                ctx.lineTo(botX, botY);
                break;
              case 7:
              case 8:
                ctx.moveTo(leftX, leftY);
                ctx.lineTo(botX, botY);
                break;
              case 10:
                ctx.moveTo(topX, topY);
                ctx.lineTo(rightX, rightY);
                ctx.moveTo(leftX, leftY);
                ctx.lineTo(botX, botY);
                break;
            }
          }
        }

        ctx.stroke();
      });

      ctx.globalAlpha = 1;
    };

    // If reduced motion is requested, render once and do not animate
    if (prefersReducedMotion) {
      renderFrame();
      return () => {
        window.removeEventListener("resize", resizeCanvas);
        container.removeEventListener("mousemove", onPointerMove);
        container.removeEventListener("mouseleave", onPointerLeave);
      };
    }

    // Animation loop with slow drift
    const animate = () => {
      if (isVisible) {
        time += 0.0035;
        renderFrame();
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Pause animation when off-screen to save 100% CPU/battery
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      {/* Radial center mask so typed headline, subhead & CTAs remain pristine and readable */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 65% 50% at 50% 50%, transparent 22%, black 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 50% at 50% 50%, transparent 22%, black 78%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
