import { motion, useMotionValue, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import FloatingScene from "./FloatingScene";

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "Burp Suite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Wireshark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Kali Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Nmap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "OWASP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Metasploit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
      { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    ],
  },
];

const TiltGroup = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TechStack = () => (
  <section id="techstack" className="relative py-24 px-4 sm:px-6 overflow-hidden">
    <FloatingScene variant="primary" density="medium" />

    <div className="container mx-auto max-w-6xl relative z-10">
      <SectionHeading title="Tech Stack" subtitle="Technologies and tools I work with daily." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
          >
            <TiltGroup className="glass rounded-xl p-5 md:p-6 group hover:glow-sm transition-shadow duration-300 relative overflow-hidden h-full">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/3 transition-all duration-500" />

              <h3 className="relative font-heading text-xs sm:text-sm font-semibold text-primary mb-5 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="relative grid grid-cols-3 gap-3">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.04 + ii * 0.05, duration: 0.35 }}
                    whileHover={{ scale: 1.2, y: -6, rotateZ: 3 }}
                    className="flex flex-col items-center gap-2 p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/10 cursor-default transition-colors duration-200 group/item hover:shadow-[0_0_20px_-5px_hsl(185_100%_50%/0.3)]"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-contain drop-shadow-[0_0_6px_hsl(185_100%_50%/0.3)] group-hover/item:drop-shadow-[0_0_15px_hsl(185_100%_50%/0.6)] transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-muted-foreground group-hover/item:text-primary transition-colors text-center leading-tight">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </TiltGroup>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
