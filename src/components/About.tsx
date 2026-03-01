import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import profileImg from "@/assets/profile.png";

const About = () => (
  <section id="about" className="py-20 md:py-28 px-4 sm:px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="About Me"
        subtitle="A passionate engineer driven by curiosity and clean code."
      />

      <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.3 }}
          className="space-y-4 order-2 md:order-1"
        >
          <p className="text-foreground leading-relaxed text-base sm:text-lg">
            Hi, I'm <span className="text-primary font-medium">Your Name</span> — a Software
            Development Engineer with a strong foundation in cybersecurity and a keen eye for
            design.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I specialize in building production-grade applications that are secure, performant,
            and well-architected. My work spans backend systems, DevOps pipelines, CI/CD automation,
            and secure infrastructure design.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I believe great software lives at the intersection of engineering rigor and thoughtful
            design. Every system should be reliable, every interface should be intentional.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { value: "3+", label: "Years Exp." },
              { value: "15+", label: "Projects" },
              { value: "5+", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-primary">{stat.value}</p>
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

        {/* Profile Image — oval/round */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="w-48 h-56 sm:w-56 sm:h-64 md:w-60 md:h-72 rounded-[50%] overflow-hidden border-2 border-border bg-secondary">
            <img
              src={profileImg}
              alt="Profile photo"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
