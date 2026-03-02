import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const WireframeSphere = lazy(() => import("./WireframeSphere"));

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
  >
    {/* Subtle grid background */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    {/* 3D Wireframe Sphere */}
    <Suspense fallback={null}>
      <WireframeSphere />
    </Suspense>

    <div className="relative z-10 max-w-3xl mx-auto text-center md:text-left px-2">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 font-mono"
      >
        Software Engineer · Security Specialist
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.1] mb-4 sm:mb-6"
      >
        Building Secure &<br />
        <span className="text-primary">Scalable Systems</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.16 }}
        className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 sm:mb-10 leading-relaxed"
      >
        I design and build production-grade applications with a focus on security,
        performance, and clean architecture.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.24 }}
        className="flex flex-col sm:flex-row gap-3 items-center md:items-start justify-center md:justify-start"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          View Projects
          <ArrowRight size={16} />
        </a>
        <a
          href="#resume"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
        >
          <Download size={16} />
          Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
