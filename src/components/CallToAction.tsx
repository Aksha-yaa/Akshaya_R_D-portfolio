import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => (
  <section id="cta" className="py-20 px-4 sm:px-6">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Whether you need a secure application, a scalable backend, or a complete engineering solution — I'm ready to collaborate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            For Collaboration
            <ArrowRight size={16} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CallToAction;
