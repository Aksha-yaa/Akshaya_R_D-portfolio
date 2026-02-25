import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Software Development Engineer",
  "Cybersecurity Engineer",
  "UI/UX Enthusiast",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* 3D Particle layer */}
      <ParticleBackground />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-xs sm:text-sm text-muted-foreground mb-2 tracking-wide"
        >
          👋 Hello, welcome to my portfolio
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-primary text-sm sm:text-base mb-4 sm:mb-6 tracking-widest uppercase"
        >
          I'm <span className="text-foreground font-semibold">Your Name</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-glow"
        >
          <span className="gradient-text">Developer</span>
          <span className="text-foreground"> & </span>
          <span className="gradient-text">Engineer</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-7 sm:h-8 mb-8 sm:mb-10"
        >
          <span className="font-mono text-base sm:text-lg md:text-xl text-muted-foreground">
            {displayed}
          </span>
          <span className="border-r-2 border-primary ml-0.5 animate-typing-cursor">&nbsp;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 sm:px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-md transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="px-7 sm:px-8 py-3 rounded-lg glass text-foreground font-semibold hover:border-primary/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={24} className="animate-float" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
