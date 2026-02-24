import { motion } from "framer-motion";
import { FileDown, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Resume = () => (
  <section id="resume" className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading
        title="Resume"
        subtitle="Download or preview my professional resume."
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-10 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <FileDown className="text-primary" size={28} />
        </div>

        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
          My Resume
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          A comprehensive overview of my experience, education, and technical skills.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform">
            <FileDown size={18} />
            Download PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg glass text-foreground font-semibold hover:border-primary/50 hover:scale-105 transition-all">
            <Eye size={18} />
            Preview
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Resume;
