import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const profiles = [
  {
    name: "LeetCode",
    handle: "@yourhandle",
    stat: "500+ Problems Solved",
    focus: "Arrays, Trees, DP, Graphs",
    link: "https://leetcode.com",
  },
  {
    name: "GitHub",
    handle: "@yourhandle",
    stat: "200+ Contributions",
    focus: "Open Source, Side Projects",
    link: "https://github.com",
  },
  {
    name: "HackerRank",
    handle: "@yourhandle",
    stat: "5★ Problem Solving",
    focus: "Algorithms, Data Structures",
    link: "https://hackerrank.com",
  },
];

const CodingProfiles = () => (
  <section id="coding" className="py-20 md:py-28 px-4 sm:px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Coding Profiles"
        subtitle="Competitive programming and open-source presence."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {profiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.25 }}
            className="rounded-md border border-border bg-card p-5 hover:border-muted-foreground/20 transition-colors group block"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-foreground">{profile.name}</h3>
              <ExternalLink size={14} className="text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground font-mono mb-1">{profile.handle}</p>
            <p className="text-sm text-primary font-medium mb-2">{profile.stat}</p>
            <p className="text-xs text-muted-foreground">DSA Focus: {profile.focus}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
