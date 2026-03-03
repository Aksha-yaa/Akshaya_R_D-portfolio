import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certs = [
  { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle" },
  { title: "Practical Cybersecurity for Cybersecurity Practitioners", issuer: "NPTEL" },
  { title: "Programming in Java", issuer: "NPTEL" },
  { title: "Programming Using Java", issuer: "Infosys Springboard" },
  { title: "Python Certification", issuer: "Kaggle" },
  { title: "UiPath Automation Developer Associate Training", issuer: "UiPath" },
  { title: "Acquiring Data", issuer: "Accenture (NASSCOM)" },
];

const Certificates = () => (
  <section id="certificates" className="py-20 md:py-28 px-4 sm:px-6 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Certificates"
        subtitle="Professional certifications and completed courses."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.25 }}
            className="flex items-start gap-3 rounded-md border border-border bg-card p-4"
          >
            <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center shrink-0">
              <Award size={16} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground leading-snug">{cert.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
