import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  pulseSpeed: number;
  pulsePhase: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(100, Math.floor(window.innerWidth / 14));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 3 + 1,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? 185 : 265,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
        active: true,
      };
    };
    const onMouseLeave = () => { mouseRef.current.active = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Touch support
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        mouseRef.current = {
          x: (t.clientX / window.innerWidth - 0.5) * 2,
          y: (t.clientY / window.innerHeight - 0.5) * 2,
          active: true,
        };
      }
    };
    window.addEventListener("touchmove", onTouch, { passive: true });

    const draw = () => {
      timeRef.current += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const particles = particlesRef.current;
      const t = timeRef.current;

      for (const p of particles) {
        const pulse = Math.sin(t * p.pulseSpeed * 60 + p.pulsePhase) * 0.3 + 0.7;
        const parallaxX = mx * p.z * 30;
        const parallaxY = my * p.z * 30;

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        const drawX = p.x + parallaxX;
        const drawY = p.y + parallaxY;
        const scale = (0.5 + p.z * 0.3) * pulse;

        // Outer glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, p.size * scale * 10);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${p.opacity * 0.25 * pulse})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(drawX, drawY, p.size * scale * 10, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 75%, ${p.opacity * pulse})`;
        ctx.arc(drawX, drawY, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connections
      ctx.lineWidth = 0.4;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const ax = a.x + mx * a.z * 30;
          const ay = a.y + my * a.z * 30;
          const bx = b.x + mx * b.z * 30;
          const by = b.y + my * b.z * 30;
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(185, 100%, 60%, ${alpha})`;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ParticleBackground;
