import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FeaturedArticles = () => (
  <section id="articles" className="py-20 md:py-28 px-4 sm:px-6 bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="Featured Articles"
        subtitle="Thoughts on engineering, security, and software craft."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        className="rounded-md border border-border bg-card p-10 sm:p-14 text-center"
      >
        <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mx-auto mb-4">
          <FileText size={20} className="text-muted-foreground" />
        </div>
        <h3 className="text-base font-semibold text-foreground mb-2">Yet to Feature Articles</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Technical writing coming soon. Stay tuned for in-depth articles on engineering, security, and software craft.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FeaturedArticles;
