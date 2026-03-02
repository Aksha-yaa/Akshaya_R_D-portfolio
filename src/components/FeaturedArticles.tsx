import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";

const articles = [
  {
    title: "Building Secure APIs: A Comprehensive Guide",
    excerpt: "Learn how to design and implement APIs that are resilient against common security threats.",
    date: "Jan 2025",
    readTime: "8 min",
    tags: ["Security", "API", "Backend"],
    link: "#",
  },
  {
    title: "React Performance Optimization Patterns",
    excerpt: "Deep dive into memo, useMemo, useCallback, and advanced patterns for blazing-fast React apps.",
    date: "Dec 2024",
    readTime: "6 min",
    tags: ["React", "Performance"],
    link: "#",
  },
  {
    title: "Penetration Testing Methodology for Web Apps",
    excerpt: "A structured approach to identifying vulnerabilities in modern web applications.",
    date: "Nov 2024",
    readTime: "10 min",
    tags: ["Cybersecurity", "Pentesting"],
    link: "#",
  },
  {
    title: "Docker in Production: Lessons Learned",
    excerpt: "Real-world insights on containerizing applications and orchestrating deployments at scale.",
    date: "Oct 2024",
    readTime: "7 min",
    tags: ["Docker", "DevOps"],
    link: "#",
  },
];

const FeaturedArticles = () => (
  <section id="articles" className="py-20 md:py-28 px-4 sm:px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="Featured Articles"
        subtitle="Thoughts on engineering, security, and software craft."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href={article.link}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05, duration: 0.25 }}
            className="rounded-md border border-border bg-card p-5 hover:border-muted-foreground/20 transition-colors group block"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug pr-4">
                {article.title}
              </h3>
              <ArrowUpRight size={14} className="text-muted-foreground shrink-0 mt-0.5" />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-sm bg-secondary text-[11px] font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                <Clock size={10} />
                {article.readTime}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedArticles;
