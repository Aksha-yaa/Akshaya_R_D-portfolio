import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
  },
];

const Projects = () => (
  <section id="projects" className="py-20 md:py-28 px-4 sm:px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="Projects"
        subtitle="Production-level systems showcasing security, performance, and clean architecture."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.25 }}
            className="rounded-md border border-border bg-card p-5 hover:border-muted-foreground/20 transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.summary}
            </p>

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
              <a href={project.github} className="hover:text-foreground transition-colors" title="GitHub">
                <Github size={16} />
              </a>
              {project.demo && (
                <a href={project.demo} className="hover:text-foreground transition-colors" title="Live Demo">
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
