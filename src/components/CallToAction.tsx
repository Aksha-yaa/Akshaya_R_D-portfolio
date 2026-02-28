import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

const CallToAction = () => (
  <section id="cta" className="relative py-32 px-4 sm:px-6 overflow-hidden">
    {/* Animated gradient blurs */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[140px]"
      />
    </div>

    <div className="relative z-10 container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
        >
          <Zap className="text-primary" size={28} />
        </motion.div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Let's Build</span>{" "}
          <span className="text-foreground">Something</span>
          <br />
          <span className="text-foreground">Amazing </span>
          <span className="gradient-text">Together</span>
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you need a secure application, a beautiful interface, or a complete engineering solution — I'm ready to bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA with glow */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-base sm:text-lg overflow-hidden"
          >
            {/* Animated glow ring */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                boxShadow: [
                  "0 0 20px 0px hsl(185 100% 50% / 0.3)",
                  "0 0 40px 8px hsl(185 100% 50% / 0.5)",
                  "0 0 20px 0px hsl(185 100% 50% / 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            />
            <span className="relative flex items-center gap-2">
              <Sparkles size={18} />
              Hire Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-xl glass text-foreground font-heading font-semibold hover:glow-sm transition-all"
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CallToAction;
