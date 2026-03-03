import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const internships = [
  {
    role: "Cybersecurity Intern",
    company: "Edunet Foundation",
    location: "",
    period: "May 2025 – Jun 2025",
    description:
      "Studied cybersecurity fundamentals and secure system architecture. Learned cryptographic validation mechanisms. Applied security-first engineering principles.",
    tech: ["Cryptography Fundamentals", "Secure Architecture Principles"],
  },
  {
    role: "Python Intern",
    company: "Vault of Codes",
    location: "",
    period: "Sep 2024 – Oct 2024",
    description:
      "Developed modular Python applications. Worked on automation-based problem solving. Strengthened debugging and structured coding practices.",
    tech: ["Python"],
  },
  {
    role: "Java Intern",
    company: "InternPe",
    location: "",
    period: "Aug 2024 – Sep 2024",
    description:
      "Developed Java-based application modules. Strengthened object-oriented programming concepts. Practiced structured backend logic implementation.",
    tech: ["Java", "MySQL"],
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
                  {intern.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {intern.location}
                    </span>
                  )}
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
