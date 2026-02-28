import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "CuraTrace – Secure Medicine Access & Counterfeit Detection",
    description:
      "A secure, QR-coded digital prescription system to prevent prescription forgery and counterfeit medicines using cryptographic hashing and AI.",
    longDescription:
      "Designed a secure, QR-coded digital prescription system to prevent prescription forgery and counterfeit medicines. Implemented cryptographic hashing (SHA-256) and Merkle Tree-based batch verification for authenticity validation. Built a permissioned ledger architecture inspired by Hyperledger Fabric concepts for real-time counterfeit detection. Integrated AI-driven patient communication for automated reminders, feedback collection, and adherence analysis.",
    tech: ["Python", "SHA-256", "Merkle Tree", "AI", "QR Code"],
    color: "from-primary/20 to-accent/10",
    github: "https://github.com/Aksha-yaa/CuraTrace",
  },
  {
    title: "StegoMed – Privacy-Preserving Mental Health Records",
    description:
      "A privacy-preserving healthcare data system using AES encryption and LSB-based image steganography for secure mental health records.",
    longDescription:
      "Developed a privacy-preserving healthcare data system using AES encryption and LSB-based image steganography. Ensured dual-layer security by encrypting sensitive medical data before embedding it within medical reports. Built a fully offline Python application to maintain confidentiality, integrity, and controlled access to patient records.",
    tech: ["Python", "AES Encryption", "Steganography", "LSB"],
    color: "from-accent/20 to-primary/10",
    github: "https://github.com/Aksha-yaa/StegoMed",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Secure systems showcasing cryptography, privacy, and clean architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-xl overflow-hidden group hover:glow-sm transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-5 sm:p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <span className="text-primary font-mono font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110" title="GitHub" onClick={(e) => e.stopPropagation()}>
                    <Github size={18} />
                  </a>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass rounded-2xl p-6 sm:p-8 max-w-lg w-full glow-sm relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                  <X size={20} />
                </button>
                <div className={`h-1.5 rounded-full bg-gradient-to-r ${projects[selected].color} mb-6`} />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">{projects[selected].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{projects[selected].longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selected].tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-mono text-primary">{t}</span>
                  ))}
                </div>
                <a href={projects[selected].github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform">
                  <Github size={16} /> View on GitHub
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
