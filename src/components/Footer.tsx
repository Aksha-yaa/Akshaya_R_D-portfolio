import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Aksha-yaa", color: "hover:text-[#f0f6fc]" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akshaya-r-d", color: "hover:text-[#0a66c2]" },
];

const Footer = () => (
  <footer className="relative border-t border-border py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
    {/* Subtle gradient glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="relative z-10 container mx-auto max-w-4xl">
      {/* Social icons */}
      <div className="flex items-center justify-center gap-4 sm:gap-5 mb-8">
        {socials.map(({ icon: Icon, label, href, color }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ y: -6, scale: 1.2, rotate: [0, -10, 10, 0] }}
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl glass flex items-center justify-center text-muted-foreground ${color} hover:glow-sm transition-all duration-300`}
            title={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-6" />

      {/* Attribution */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center font-mono text-xs sm:text-sm text-muted-foreground"
      >
        © {new Date().getFullYear()} Akshaya R D — Built with{" "}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block"
        >
          <Heart size={12} className="inline text-destructive fill-destructive" />
        </motion.span>{" "}
        and precision.
      </motion.p>
    </div>
  </footer>
);

export default Footer;
