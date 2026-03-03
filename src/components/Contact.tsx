import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:your@email.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Contact"
        subtitle="Let's connect and build something remarkable."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="flex flex-col justify-center gap-5"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of something great.
          </p>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors"
                title={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.06 }}
          className="rounded-md border border-border bg-card p-5 space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3.5 py-2.5 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200 text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3.5 py-2.5 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200 text-sm"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-3.5 py-2.5 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200 text-sm resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Send size={14} />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
