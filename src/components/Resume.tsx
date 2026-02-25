import { motion } from "framer-motion";
import { FileDown, Eye, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Resume = () => (
  <section id="resume" className="relative py-24 px-4 sm:px-6 overflow-hidden">
    {/* Animated background orb */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
    />

    <div className="relative z-10 container mx-auto max-w-3xl">
      <SectionHeading
        title="Resume"
        subtitle="Download or preview my professional resume."
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className="glass rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative w-16 h-16 mx-auto mb-6"
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <FileDown className="text-primary" size={28} />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1 -right-1"
          >
            <Sparkles size={14} className="text-accent" />
          </motion.div>
        </motion.div>

        <h3 className="relative font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
          My Resume
        </h3>
        <p className="relative text-muted-foreground text-sm mb-8 max-w-md mx-auto">
          A comprehensive overview of my experience, education, and technical skills.
        </p>

        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-md transition-all w-full sm:w-auto justify-center"
          >
            <FileDown size={18} />
            Download PDF
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-semibold hover:glow-sm transition-all w-full sm:w-auto justify-center"
          >
            <Eye size={18} />
            Preview
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Resume;
