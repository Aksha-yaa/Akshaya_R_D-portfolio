import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="mb-16 text-center"
  >
    <motion.h2
      whileInView={{ scale: [0.95, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-heading text-4xl md:text-5xl font-bold gradient-text inline-block mb-4 text-glow"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-muted-foreground text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    {/* Animated underline */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      className="h-0.5 w-16 mx-auto mt-4 bg-gradient-to-r from-primary to-accent rounded-full origin-center"
    />
  </motion.div>
);

export default SectionHeading;
