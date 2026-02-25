import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedSection = ({ children, className = "", delay = 0 }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={sectionVariants}
    transition={{ delay }}
    className={`relative ${className}`}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
