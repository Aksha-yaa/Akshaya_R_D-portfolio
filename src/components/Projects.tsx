import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Real-Time Intrusion Detection System",
    description:
      "Network traffic analysis engine using ML models to detect anomalies and potential threats in real-time with sub-second response.",
    tech: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
  },
  {
    title: "Secure File Sharing Platform",
    description:
      "End-to-end encrypted file sharing with zero-knowledge architecture, featuring AES-256 encryption and secure key exchange.",
    tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Crypto"],
  },
  {
    title: "AI Phishing URL Detector",
    description:
      "Browser extension powered by ML that analyzes URLs in real-time to identify phishing attempts with 97% accuracy.",
    tech: ["Python", "Scikit-learn", "Chrome API", "FastAPI", "React"],
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Projects"
        subtitle="Production-level systems showcasing security, performance, and clean architecture."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass rounded-xl p-6 group hover:glow-sm transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-mono font-bold text-sm">
                0{i + 1}
              </span>
            </div>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <button className="hover:text-primary transition-colors" title="GitHub">
                <Github size={18} />
              </button>
              <button className="hover:text-primary transition-colors" title="Live Demo">
                <ExternalLink size={18} />
              </button>
              <button className="hover:text-primary transition-colors" title="Demo Video">
                <Play size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
