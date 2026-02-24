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
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

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

    // Create particles
    const count = Math.min(80, Math.floor(window.innerWidth / 18));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 3 + 1,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? 185 : 265,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const particles = particlesRef.current;

      for (const p of particles) {
        // Parallax offset based on depth (z) and mouse
        const parallaxX = mx * p.z * 25;
        const parallaxY = my * p.z * 25;

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        const drawX = p.x + parallaxX;
        const drawY = p.y + parallaxY;
        const scale = 0.5 + p.z * 0.3;

        // Glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, p.size * scale * 8);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(drawX, drawY, p.size * scale * 8, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
        ctx.arc(drawX, drawY, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const ax = a.x + mx * a.z * 25;
          const ay = a.y + my * a.z * 25;
          const bx = b.x + mx * b.z * 25;
          const by = b.y + my * b.z * 25;
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.15;
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
