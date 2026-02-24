import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    name: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Next.js", level: 80 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "FastAPI", level: 78 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    name: "Cybersecurity",
    skills: [
      { name: "Network Security", level: 88 },
      { name: "Penetration Testing", level: 82 },
      { name: "Cryptography", level: 80 },
      { name: "SIEM Tools", level: 76 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Skills"
        subtitle="Technical competencies across the full stack and security domain."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-heading text-lg font-semibold text-primary mb-6">
              {cat.name}
            </h3>

            <div className="space-y-5">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
