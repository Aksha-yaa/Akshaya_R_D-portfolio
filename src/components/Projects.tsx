import { useState } from "react";
import { motion } from "framer-motion";
import { Github, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useMouseTilt } from "@/hooks/useMouseTilt";

const projects = [
  {
    title: "CuraTrace – Secure Medicine Access & Counterfeit Detection System",
    summary: "A secure prescription validation system designed to prevent prescription forgery and reduce counterfeit medicine risks using cryptographic integrity mechanisms.",
    highlights: [
      "Implemented SHA-256 hashing for prescription data integrity",
      "Designed Merkle Tree-based verification structure",
      "Built permission-controlled validation workflow",
      "Structured secure backend validation pipeline",
      "Integrated controlled access mechanisms",
    ],
    tech: ["Java", "Python", "MySQL", "SHA-256", "Merkle Tree", "RBAC"],
    github: "https://github.com/Aksha-yaa/CuraTrace",
    demo: null,
    details: "Built a secure, QR-coded digital prescription system to prevent prescription forgery and counterfeit medicines. Implemented cryptographic hashing (SHA-256) and Merkle Tree-based batch verification for authenticity validation. Built a permissioned ledger architecture for real-time counterfeit detection with controlled access mechanisms.",
  },
  {
    title: "StegoMed – Privacy-Preserving Mental Health Record System",
    summary: "A dual-layer secure healthcare system protecting sensitive mental health records using encryption and steganography techniques.",
    highlights: [
      "Applied AES encryption for secure data storage",
      "Implemented LSB-based image steganography",
      "Built offline Python-based application",
      "Designed controlled access logic",
      "Ensured confidentiality and integrity of medical records",
    ],
    tech: ["Python", "AES Encryption", "LSB Steganography", "MySQL"],
    github: "https://github.com/Aksha-yaa/StegoMed",
    demo: null,
    details: "Developed a privacy-preserving healthcare data system using AES encryption and LSB-based image steganography. Ensured dual-layer security by encrypting sensitive medical data before embedding it within medical reports. Built a fully offline Python application to maintain confidentiality, integrity, and controlled access to patient records.",
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
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-foreground transition-colors"
          title="GitHub"
        >
          <Github size={16} />
        </a>
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
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-foreground text-sm hover:bg-secondary transition-colors"
        >
          <Github size={14} />
          Source Code
        </a>
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
          subtitle="Secure, structured systems built with real-world application focus."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
