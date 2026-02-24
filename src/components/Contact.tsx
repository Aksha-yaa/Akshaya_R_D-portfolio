import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

const socials = [
  { icon: Mail, label: "Gmail", href: "mailto:your@email.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Contact"
        subtitle="Let's connect and build something remarkable."
      />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of something great.
          </p>

          <div className="flex gap-5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-sm transition-all duration-300 group"
                title={label}
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors font-mono text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors font-mono text-sm"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors font-mono text-sm resize-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform w-full justify-center"
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
