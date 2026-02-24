import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certs = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { title: "CompTIA Security+", issuer: "CompTIA", year: "2024" },
  { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2023" },
  { title: "Google Cybersecurity Certificate", issuer: "Google", year: "2023" },
];

const CertCard = ({ cert, index }: { cert: typeof certs[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="perspective-1000 h-48 cursor-pointer"
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
          className="absolute inset-0 glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:glow-sm transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Award className="text-primary" size={32} />
          <h3 className="font-heading text-sm font-semibold text-foreground text-center">
            {cert.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground">Click to flip</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 glow-accent"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="font-heading text-sm font-semibold text-accent">{cert.issuer}</p>
          <p className="font-mono text-xs text-muted-foreground">Issued: {cert.year}</p>
          <p className="text-xs text-muted-foreground mt-2">Credential verified ✓</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => (
  <section id="certificates" className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Certificates"
        subtitle="Professional certifications validating expertise."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
