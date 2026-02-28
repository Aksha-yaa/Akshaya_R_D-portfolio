import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
];

const TechStack = () => (
  <section id="techstack" className="py-24 px-4 sm:px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I work with."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl p-5 md:p-6 group hover:glow-sm transition-shadow duration-300"
          >
            <h3 className="font-heading text-xs sm:text-sm font-semibold text-primary mb-5 uppercase tracking-wider">
              {group.category}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {group.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.04 + ii * 0.05, duration: 0.35 }}
                  whileHover={{ scale: 1.15, y: -4, rotateZ: 2 }}
                  className="flex flex-col items-center gap-2 p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/10 cursor-default transition-colors duration-200 group/item"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-[0_0_6px_hsl(var(--primary)/0.3)] group-hover/item:drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-muted-foreground group-hover/item:text-primary transition-colors text-center leading-tight">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
