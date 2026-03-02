import { motion } from "framer-motion";
import { FileDown, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Resume = () => (
  <section id="resume" className="py-20 md:py-28 px-4 sm:px-6">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading
        title="Resume"
        subtitle="Download or preview my professional resume."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        className="rounded-md border border-border bg-card p-6 sm:p-8 text-center"
      >
        <p className="text-sm text-muted-foreground mb-6">
          A comprehensive overview of my experience, education, and technical skills.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-200 relative overflow-hidden">
            <FileDown size={16} />
            Download PDF
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary hover:border-muted-foreground/20 transition-all duration-200">
            <Eye size={16} />
            Preview
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Resume;
