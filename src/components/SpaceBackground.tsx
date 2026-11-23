import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  thickness: number;
  alpha: number;
  color: string;
  maxLife: number;
  life: number;
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;

    const STAR_COUNT = Math.min(Math.floor((width * height) / 1800), 750);
    const starColors = ['#ffffff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#c4b5fd', '#38bdf8'];

    // Initialize 3D star coordinates
    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * 1000 + 1,
        baseRadius: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // Meteors
    const meteors: Meteor[] = [];
    let nextMeteorTime = Date.now() + 1500;

    const spawnMeteor = () => {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2; // ~45 deg
      meteors.push({
        x: Math.random() * (width * 1.2) - width * 0.2,
        y: Math.random() * (height * 0.3) - 100,
        length: Math.random() * 140 + 70,
        speed: Math.random() * 14 + 10,
        angle,
        thickness: Math.random() * 1.8 + 0.8,
        alpha: 1,
        color: Math.random() > 0.4 ? '#38bdf8' : '#e0f2fe',
        maxLife: 60,
        life: 0,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.016;

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Decay scroll speed
      scrollSpeed *= 0.92;

      // Dark cosmos space background with subtle radial gradient
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      // Render cosmic nebula dust patches
      const cx1 = width * 0.25 + Math.sin(time * 0.4) * 80;
      const cy1 = height * 0.35 + Math.cos(time * 0.3) * 60;
      const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, width * 0.5);
      g1.addColorStop(0, 'rgba(56, 189, 248, 0.045)');
      g1.addColorStop(0.5, 'rgba(129, 140, 248, 0.02)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const cx2 = width * 0.8 - Math.cos(time * 0.35) * 70;
      const cy2 = height * 0.65 + Math.sin(time * 0.45) * 50;
      const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, width * 0.45);
      g2.addColorStop(0, 'rgba(168, 85, 247, 0.035)');
      g2.addColorStop(0.6, 'rgba(6, 182, 212, 0.015)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const mouseOffsetX = (mouse.x - centerX) * 0.05;
      const mouseOffsetY = (mouse.y - centerY) * 0.05;

      // Warp speed factor when scrolling fast
      const warpFactor = Math.min(scrollSpeed * 0.25, 4.0);

      // Render Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star closer over time (flight through space)
        star.z -= 0.6 + warpFactor * 1.5;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        // 3D perspective projection
        const k = 320 / star.z;
        const px = star.x * k + centerX - mouseOffsetX * (1000 / star.z);
        const py = star.y * k + centerY - mouseOffsetY * (1000 / star.z);

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(0.6, star.baseRadius * k);
          const twinkle = Math.sin(time * 4 * star.twinkleSpeed + star.twinkleOffset);
          const currentAlpha = Math.max(0.15, Math.min(1, star.alpha + twinkle * 0.35));

          if (warpFactor > 0.8) {
            // Hyperspace stretch streak
            const streakLen = warpFactor * 3.5;
            ctx.beginPath();
            ctx.strokeStyle = star.color;
            ctx.globalAlpha = currentAlpha * 0.9;
            ctx.lineWidth = size * 0.8;
            ctx.moveTo(px, py);
            ctx.lineTo(px, py - streakLen);
            ctx.stroke();
          } else {
            // Normal sparkling star
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = currentAlpha;
            ctx.fill();

            // Glow aura for larger stars
            if (size > 1.4) {
              ctx.beginPath();
              ctx.arc(px, py, size * 2.4, 0, Math.PI * 2);
              ctx.fillStyle = star.color;
              ctx.globalAlpha = currentAlpha * 0.18;
              ctx.fill();
            }
          }
        }
      }

      // Check and spawn shooting stars
      if (Date.now() > nextMeteorTime) {
        spawnMeteor();
        nextMeteorTime = Date.now() + Math.random() * 3200 + 1800;
      }

      // Render shooting stars / meteors
      for (let m = meteors.length - 1; m >= 0; m--) {
        const meteor = meteors[m];
        meteor.life++;

        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;

        const lifeRatio = meteor.life / meteor.maxLife;
        meteor.alpha = 1 - lifeRatio;

        if (meteor.life >= meteor.maxLife || meteor.x > width + 200 || meteor.y > height + 200) {
          meteors.splice(m, 1);
          continue;
        }

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const grad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.6, 'rgba(56, 189, 248, 0.4)');
        grad.addColorStop(1, meteor.color);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = meteor.thickness;
        ctx.globalAlpha = meteor.alpha;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing meteor head
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.thickness * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = meteor.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="space-background-canvas"
      aria-hidden="true"
    />
  );
}
