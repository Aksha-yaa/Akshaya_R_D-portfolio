import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certs = [
  { title: "Programming in Java", issuer: "NPTEL", year: "2024", color: "from-primary to-accent" },
  { title: "Programming using Java", issuer: "Infosys Springboard", year: "2024", color: "from-accent to-primary" },
  { title: "Practical Cybersecurity for Practitioners", issuer: "NPTEL", year: "2024", color: "from-primary to-primary" },
];

const CertCard = ({ cert, index }: { cert: typeof certs[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="perspective-1000 h-44 sm:h-48 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:glow-sm transition-shadow group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
            <Award className="text-primary-foreground" size={24} />
          </div>
          <h3 className="font-heading text-xs sm:text-sm font-semibold text-foreground text-center leading-tight">
            {cert.title}
          </h3>
          <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">Tap to flip</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 glow-accent"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="font-heading text-sm font-semibold text-accent">{cert.issuer}</p>
          <p className="font-mono text-xs text-muted-foreground">Issued: {cert.year}</p>
          <div className="flex items-center gap-1 text-primary text-xs mt-1">
            <ExternalLink size={12} />
            <span>Credential verified ✓</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => (
  <section id="certificates" className="py-24 px-4 sm:px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Certificates"
        subtitle="Professional certifications validating expertise."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
