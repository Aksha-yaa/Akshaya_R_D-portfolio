import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useMouseTilt } from "@/hooks/useMouseTilt";

const projects = [
  {
    title: "Real-Time Intrusion Detection System",
    summary: "Network traffic analysis engine using ML for real-time threat detection.",
    highlights: [
      "Processes 10K+ packets/sec with custom pipeline",
      "LSTM-based anomaly detection on 40+ flow features",
      "Sub-second response time for threat alerts",
      "Deep packet inspection with live dashboard",
    ],
    tech: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
    github: "#",
    demo: "#",
    details: "Built a full network traffic analysis pipeline that captures, processes, and classifies packets in real-time. The system uses a custom LSTM model trained on 40+ flow features to detect anomalies with 96% accuracy. Includes a React-based dashboard with WebSocket updates for live threat monitoring.",
  },
  {
    title: "Secure File Sharing Platform",
    summary: "End-to-end encrypted file sharing with zero-knowledge architecture.",
    highlights: [
      "AES-256-GCM client-side encryption",
      "Diffie-Hellman key exchange for peer connections",
      "Server never accesses unencrypted data",
      "Audit logging and access control",
    ],
    tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Crypto"],
    github: "#",
    demo: "#",
    details: "Designed a zero-knowledge file sharing platform where encryption and decryption happen entirely on the client. The server stores only encrypted blobs and never has access to plaintext data. Features include Diffie-Hellman key exchange, comprehensive audit logging, and granular access controls.",
  },
  {
    title: "AI Phishing URL Detector",
    summary: "Browser extension that identifies phishing attempts with 97% accuracy.",
    highlights: [
      "Gradient-boosted model on 100K+ labeled URLs",
      "Lexical analysis + WHOIS + SSL validation",
      "Chrome extension for real-time URL scanning",
      "Page content similarity scoring",
    ],
    tech: ["Python", "Scikit-learn", "Chrome API", "FastAPI", "React"],
    github: "#",
    demo: null,
    details: "Developed a machine learning pipeline that analyzes URLs using lexical features, WHOIS data, and SSL certificate validation. The gradient-boosted model achieves 97% accuracy on a dataset of 100K+ labeled URLs. Deployed as a Chrome extension with a FastAPI backend for real-time scanning.",
  },
];

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  onOpen: () => void;
}) => {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMouseTilt(6);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.25 }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      className="rounded-md border border-border bg-card p-5 cursor-pointer hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
    >
      <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>

      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((h) => (
          <li key={h} className="text-xs text-muted-foreground flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-sm bg-secondary text-xs text-muted-foreground font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 text-muted-foreground">
        <a
          href={project.github}
          onClick={(e) => e.stopPropagation()}
          className="hover:text-foreground transition-colors"
          title="GitHub"
        >
          <Github size={16} />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            onClick={(e) => e.stopPropagation()}
            className="hover:text-foreground transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-50 flex items-center justify-center px-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-lg rounded-md border border-border bg-card p-6 sm:p-8 shadow-xl max-h-[80vh] overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X size={18} />
      </button>

      <h3 className="text-lg font-semibold text-foreground mb-2 pr-8">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.details}</p>

      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
        Key Highlights
      </h4>
      <ul className="space-y-1.5 mb-5">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-sm bg-secondary text-xs text-muted-foreground font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={project.github}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-foreground text-sm hover:bg-secondary transition-colors"
        >
          <Github size={14} />
          Source Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="Production-level systems showcasing security, performance, and clean architecture."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      {selected !== null && (
        <ProjectModal project={projects[selected]} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
