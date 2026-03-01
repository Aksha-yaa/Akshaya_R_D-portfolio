import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.3 }}
    className="mb-12 md:mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-2 text-base max-w-xl">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
