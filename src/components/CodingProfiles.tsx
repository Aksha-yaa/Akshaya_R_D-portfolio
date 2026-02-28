import { motion } from "framer-motion";
import { Code, Trophy, Star, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const profiles = [
  {
    name: "LeetCode",
    handle: "@yourhandle",
    stat: "500+ Problems Solved",
    icon: Code,
    color: "from-[#FFA116]/20 to-[#FFA116]/5",
    glowColor: "hover:shadow-[0_0_30px_-5px_#FFA11660]",
    link: "https://leetcode.com",
  },
  {
    name: "GitHub",
    handle: "@yourhandle",
    stat: "200+ Contributions",
    icon: Code,
    color: "from-[#6e5494]/20 to-[#6e5494]/5",
    glowColor: "hover:shadow-[0_0_30px_-5px_#6e549460]",
    link: "https://github.com",
  },
  {
    name: "HackerRank",
    handle: "@yourhandle",
    stat: "5★ Problem Solving",
    icon: Star,
    color: "from-[#00EA64]/20 to-[#00EA64]/5",
    glowColor: "hover:shadow-[0_0_30px_-5px_#00EA6460]",
    link: "https://hackerrank.com",
  },
];

const CodingProfiles = () => (
  <section id="coding" className="py-24 px-4 sm:px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="Coding Profiles"
        subtitle="My competitive programming and open-source presence."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {profiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 150 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className={`glass rounded-xl p-5 sm:p-6 text-center group transition-all duration-300 ${profile.glowColor} block`}
          >
            {/* Gradient top accent */}
            <div className={`h-1 rounded-full bg-gradient-to-r ${profile.color} mb-5 group-hover:h-1.5 transition-all`} />

            <motion.div
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center`}
            >
              <profile.icon size={24} className="text-foreground" />
            </motion.div>

            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {profile.name}
            </h3>
            <p className="font-mono text-xs text-muted-foreground mb-2">{profile.handle}</p>
            <p className="font-mono text-xs text-primary font-medium mb-3">{profile.stat}</p>

            <div className="flex items-center justify-center gap-1 text-muted-foreground group-hover:text-primary text-xs transition-colors">
              <span>Visit</span>
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
