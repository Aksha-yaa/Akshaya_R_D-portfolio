import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";

const articles = [
  {
    title: "Building Secure APIs: A Comprehensive Guide",
    excerpt: "Learn how to design and implement APIs that are resilient against common security threats including injection, CSRF, and broken auth.",
    date: "Jan 2025",
    readTime: "8 min",
    tags: ["Security", "API", "Backend"],
    link: "#",
  },
  {
    title: "React Performance Optimization Patterns",
    excerpt: "Deep dive into memo, useMemo, useCallback, and advanced patterns for building blazing-fast React applications.",
    date: "Dec 2024",
    readTime: "6 min",
    tags: ["React", "Performance", "Frontend"],
    link: "#",
  },
  {
    title: "Penetration Testing Methodology for Web Apps",
    excerpt: "A structured approach to identifying vulnerabilities in modern web applications using industry-standard tools and techniques.",
    date: "Nov 2024",
    readTime: "10 min",
    tags: ["Cybersecurity", "Pentesting"],
    link: "#",
  },
  {
    title: "Docker in Production: Lessons Learned",
    excerpt: "Real-world insights on containerizing applications, managing multi-stage builds, and orchestrating deployments at scale.",
    date: "Oct 2024",
    readTime: "7 min",
    tags: ["Docker", "DevOps"],
    link: "#",
  },
];

const FeaturedArticles = () => (
  <section id="articles" className="py-24 px-4 sm:px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="Featured Articles"
        subtitle="Thoughts on engineering, security, and software craft."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href={article.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass rounded-xl p-5 sm:p-6 group hover:glow-sm transition-all duration-300 block"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <BookOpen size={18} className="text-primary" />
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>

            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
              {article.title}
            </h3>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary text-[10px] sm:text-xs font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-[10px] sm:text-xs font-mono whitespace-nowrap ml-2">
                <Clock size={10} />
                {article.readTime}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedArticles;
