import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const internships = [
  {
    role: "Software Development Intern",
    company: "Company Name",
    location: "City, Country",
    period: "Jun 2024 – Aug 2024",
    description:
      "Developed microservices architecture using Node.js and Docker. Improved API response times by 40% through query optimization and caching strategies.",
    tech: ["Node.js", "Docker", "PostgreSQL", "Redis"],
    type: "Full-time",
  },
  {
    role: "Cybersecurity Intern",
    company: "Company Name",
    location: "City, Country",
    period: "Jan 2024 – May 2024",
    description:
      "Conducted vulnerability assessments and penetration testing on enterprise applications. Identified and documented 15+ critical security vulnerabilities.",
    tech: ["Burp Suite", "Python", "OWASP", "Nmap"],
    type: "Full-time",
  },
  {
    role: "Frontend Developer Intern",
    company: "Company Name",
    location: "Remote",
    period: "Jun 2023 – Aug 2023",
    description:
      "Built responsive web interfaces using React and Tailwind CSS. Implemented accessibility standards achieving WCAG 2.1 AA compliance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    type: "Remote",
  },
];

const Internships = () => (
  <section id="internships" className="py-24 px-4 sm:px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Internships"
        subtitle="Professional experience and industry exposure."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        <div className="space-y-8 sm:space-y-12">
          {internships.map((intern, i) => (
            <motion.div
              key={intern.role + intern.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative pl-12 sm:pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                className="absolute left-2 sm:left-6 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-xl p-5 sm:p-7 group hover:glow-sm transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {intern.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={14} className="text-primary" />
                      <span className="font-mono text-sm text-primary font-medium">
                        {intern.company}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono whitespace-nowrap self-start">
                    {intern.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-muted-foreground text-xs font-mono mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {intern.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {intern.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {intern.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {intern.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-primary hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Internships;
