import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code2, Shield, Palette, Server } from "lucide-react";
import SectionHeading from "./SectionHeading";
import profileImg from "@/assets/profile.png";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Building applications with Java, Python, and modern web technologies.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security-first thinking, cryptographic systems, and secure software design.",
  },
  {
    icon: Palette,
    title: "Web Technologies",
    description: "Creating responsive interfaces with HTML, CSS, and JavaScript.",
  },
  {
    icon: Server,
    title: "Database & Backend",
    description: "Data management with MySQL and building modular backend solutions.",
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => (
  <section id="about" className="py-24 px-4 sm:px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="About Me"
        subtitle="CSE student passionate about secure software and problem solving."
      />

      <div className="grid md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_1fr] gap-8 md:gap-12 items-start mb-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex justify-center md:justify-start md:col-span-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={profileImg}
              alt="Profile photo"
              className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl object-cover object-top border-2 border-border"
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-foreground leading-relaxed text-base sm:text-lg">
            Hi, I'm <span className="text-primary font-semibold">Akshaya R D</span> — a final-year
            Computer Science Engineering student at Panimalar Engineering College, Chennai, with a
            strong foundation in Java, Python, and web technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I'm passionate about building secure, well-architected software solutions. My projects
            range from cryptographic prescription systems to privacy-preserving healthcare data
            platforms using steganography and encryption.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I believe in clean code, security-first thinking, and continuous learning. Seeking
            opportunities to contribute meaningfully to software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 hover:glow-md transition-all text-center"
            >
              Get in Touch
            </a>
            <a
              href="#resume"
              className="px-6 py-2.5 rounded-lg glass text-foreground text-sm font-semibold hover:border-primary/50 transition-all hover:scale-105 text-center"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-6 sm:p-8 space-y-6"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { value: "8.8", label: "CGPA" },
              { value: "2+", label: "Projects Built" },
              { value: "3", label: "Certifications" },
              { value: "2", label: "Internships" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <p className="font-heading text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border pt-5">
            <p className="font-mono text-xs text-muted-foreground mb-2">Currently focused on</p>
            <div className="flex flex-wrap gap-2">
              {["Cybersecurity", "Java & Python", "Web Development", "Problem Solving"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-primary cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlight cards with 3D tilt */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <TiltCard className="glass rounded-xl p-4 sm:p-6 text-center group hover:glow-sm transition-shadow duration-300 cursor-default perspective-1000">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <item.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed">{item.description}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
