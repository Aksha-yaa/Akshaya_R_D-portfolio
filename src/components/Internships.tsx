import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
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
  },
  {
    role: "Cybersecurity Intern",
    company: "Company Name",
    location: "City, Country",
    period: "Jan 2024 – May 2024",
    description:
      "Conducted vulnerability assessments and penetration testing on enterprise applications. Identified and documented 15+ critical security vulnerabilities.",
    tech: ["Burp Suite", "Python", "OWASP", "Nmap"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Company Name",
    location: "Remote",
    period: "Jun 2023 – Aug 2023",
    description:
      "Built responsive web interfaces using React and Tailwind CSS. Implemented accessibility standards achieving WCAG 2.1 AA compliance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
];

const Internships = () => (
  <section id="internships" className="py-20 md:py-28 px-4 sm:px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Internships"
        subtitle="Professional experience and industry exposure."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {internships.map((intern, i) => (
            <motion.div
              key={intern.role + intern.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.25 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />

              <div className="rounded-md border border-border bg-card p-5">
                <h3 className="text-base font-semibold text-foreground">{intern.role}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{intern.company}</p>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {intern.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {intern.location}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {intern.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {intern.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-sm bg-secondary text-xs text-muted-foreground font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Internships;
