import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, Play, X, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FloatingScene from "./FloatingScene";

const projects = [
  {
    title: "Real-Time Intrusion Detection System",
    description: "Network traffic analysis engine using ML models to detect anomalies and potential threats in real-time with sub-second response.",
    longDescription: "Built a comprehensive IDS using deep packet inspection combined with LSTM-based anomaly detection. The system processes 10K+ packets/sec with a custom pipeline that extracts 40+ flow-level features for classification.",
    tech: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "Secure File Sharing Platform",
    description: "End-to-end encrypted file sharing with zero-knowledge architecture, featuring AES-256 encryption and secure key exchange.",
    longDescription: "Implemented a zero-knowledge file sharing system where the server never has access to unencrypted data. Uses Diffie-Hellman key exchange for secure peer connections and client-side AES-256-GCM encryption.",
    tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Crypto"],
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "AI Phishing URL Detector",
    description: "Browser extension powered by ML that analyzes URLs in real-time to identify phishing attempts with 97% accuracy.",
    longDescription: "Trained a gradient-boosted model on 100K+ labeled URLs with features including lexical analysis, WHOIS data, SSL certificate validation, and page content similarity scoring.",
    tech: ["Python", "Scikit-learn", "Chrome API", "FastAPI", "React"],
    color: "from-primary/15 to-primary/5",
  },
];

const ProjectCard3D = ({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);
  const brightness = useTransform(x, [-150, 150], [0.95, 1.05]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, filter: `brightness(${brightness.get()})`, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        className="glass rounded-xl overflow-hidden group hover:glow-sm transition-shadow duration-300 cursor-pointer relative"
        onClick={onClick}
      >
        {/* Animated gradient header */}
        <motion.div
          className={`h-2 bg-gradient-to-r ${project.color}`}
          whileHover={{ height: 4 }}
        />

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/3 transition-all duration-500" />

        <div className="p-5 sm:p-6 relative">
          <motion.div
            whileHover={{ scale: 1.15, rotateZ: 5 }}
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all"
          >
            <span className="text-primary font-mono font-bold text-sm">0{index + 1}</span>
          </motion.div>

          <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-muted-foreground">
              <motion.button whileHover={{ scale: 1.2 }} className="hover:text-primary transition-colors" title="GitHub">
                <Github size={18} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} className="hover:text-primary transition-colors" title="Live Demo">
                <ExternalLink size={18} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} className="hover:text-primary transition-colors" title="Demo Video">
                <Play size={18} />
              </motion.button>
            </div>
            <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <FloatingScene variant="accent" density="medium" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Projects"
          subtitle="Production-level systems showcasing security, performance, and clean architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard3D
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>

        {/* Modal */}
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
                initial={{ scale: 0.85, opacity: 0, y: 30, rotateX: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 30, rotateX: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass rounded-2xl p-6 sm:p-8 max-w-lg w-full glow-sm relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
                >
                  <X size={20} />
                </button>
                <div className={`h-1.5 rounded-full bg-gradient-to-r ${projects[selected].color} mb-6 relative`} />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4 relative">
                  {projects[selected].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative">
                  {projects[selected].longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 relative">
                  {projects[selected].tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-mono text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 relative">
                  <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-foreground text-sm font-semibold hover:scale-105 transition-all">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
