import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const techStack = [
  {
    category: "Programming",
    items: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Core Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "Oracle Cloud (OCI)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "Azure Fundamentals", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    ],
  },
  {
    category: "Security",
    items: [
      { name: "SHA-256 Hashing" },
      { name: "AES Encryption" },
      { name: "Merkle Tree Concepts" },
      { name: "RBAC" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
];

const TechStack = () => (
  <section id="techstack" className="py-20 md:py-28 px-4 sm:px-6 bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I work with."
      />

      <div className="space-y-10">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: gi * 0.05, duration: 0.25 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-md border border-border bg-card hover:border-muted-foreground/20 transition-all duration-200"
                >
                  {"logo" in item && item.logo && (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <span className="text-sm text-foreground relative">
                    {item.name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full" />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
