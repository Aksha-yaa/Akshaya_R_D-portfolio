import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import profileImg from "@/assets/profile.png";

const About = () => (
  <section id="about" className="py-20 md:py-28 px-4 sm:px-6 bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="About Me"
        subtitle="Curious engineer focused on building clean, scalable software systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-14 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.3 }}
          className="space-y-4 order-2 md:order-1"
        >
          <p className="text-foreground leading-relaxed text-base sm:text-lg">
            Hi, I'm <span className="text-primary font-medium">Akshaya</span> — a Software
            Developer with a strong interest in secure application development and cloud-ready
            system design.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I specialize in developing structured applications that balance backend logic,
            database reliability, and frontend usability. Security is integrated into my
            development process through validation mechanisms, controlled access design, and
            integrity-focused system architecture.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I believe effective software combines strong engineering fundamentals with thoughtful
            implementation. Every system should be structured, maintainable, and built with
            long-term reliability in mind.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { value: "☕", label: "Java & Python Based Projects" },
              { value: "☁️", label: "Cloud & Security Certified" },
              { value: "🚀", label: "Actively Building & Learning" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="flex items-center justify-center order-1 md:order-2"
        >
          <div className="w-44 h-52 sm:w-52 sm:h-60 md:w-56 md:h-64 rounded-[50%] overflow-hidden border-2 border-border bg-secondary mx-auto">
            <img
              src={profileImg}
              alt="Akshaya R D"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
