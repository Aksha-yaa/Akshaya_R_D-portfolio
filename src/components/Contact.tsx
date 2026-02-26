import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Twitter } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FloatingScene from "./FloatingScene";

const socials = [
  { icon: Mail, label: "Gmail", href: "mailto:your@email.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const Contact = () => (
  <section id="contact" className="relative py-24 px-4 sm:px-6 overflow-hidden">
    <FloatingScene variant="mixed" density="medium" />

    <div className="container mx-auto max-w-4xl relative z-10">
      <SectionHeading title="Contact" subtitle="Let's connect and build something remarkable." />

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of something great.
          </p>

          <div className="flex gap-4">
            {socials.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.15, rotate: [0, -8, 8, 0] }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-sm transition-all duration-300"
                title={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-5 sm:p-6 space-y-3 sm:space-y-4 relative overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          />

          <input
            type="text"
            placeholder="Your Name"
            className="relative w-full px-4 py-2.5 sm:py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:glow-sm transition-all font-mono text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="relative w-full px-4 py-2.5 sm:py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:glow-sm transition-all font-mono text-sm"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="relative w-full px-4 py-2.5 sm:py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:glow-sm transition-all font-mono text-sm resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-md transition-all w-full justify-center text-sm sm:text-base overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
            />
            <span className="relative flex items-center gap-2">
              <Send size={16} />
              Send Message
            </span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
