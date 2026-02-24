import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const techStack = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS", "GitHub Actions", "Linux", "Nginx", "Terraform"],
  },
  {
    category: "Cybersecurity",
    items: ["Burp Suite", "Wireshark", "Metasploit", "Nmap", "OWASP", "Kali Linux"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman", "Jira", "Notion"],
  },
];

const TechStack = () => (
  <section id="techstack" className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I work with daily."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: gi * 0.1, duration: 0.5 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-heading text-sm font-semibold text-primary mb-5 uppercase tracking-wider">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 + ii * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3.5 py-2 rounded-lg bg-secondary text-foreground text-sm font-mono cursor-default hover:bg-primary/15 hover:text-primary transition-colors duration-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
