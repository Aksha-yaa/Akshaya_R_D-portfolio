import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";

const profiles = [
  {
    name: "LeetCode",
    handle: "@yourhandle",
    statNum: 500,
    statSuffix: "+",
    statLabel: "Problems Solved",
    focus: "Arrays, Trees, DP, Graphs",
    link: "https://leetcode.com",
  },
  {
    name: "GitHub",
    handle: "@yourhandle",
    statNum: 200,
    statSuffix: "+",
    statLabel: "Contributions",
    focus: "Open Source, Side Projects",
    link: "https://github.com",
  },
  {
    name: "HackerRank",
    handle: "@yourhandle",
    statNum: 5,
    statSuffix: "★",
    statLabel: "Problem Solving",
    focus: "Algorithms, Data Structures",
    link: "https://hackerrank.com",
  },
];

const StatCounter = ({ num, suffix, label }: { num: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(num);
  return (
    <div ref={ref}>
      <p className="text-2xl font-semibold text-primary tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
    </div>
  );
};

const CodingProfiles = () => (
  <section id="coding" className="py-20 md:py-28 px-4 sm:px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Coding Profiles"
        subtitle="Competitive programming and open-source presence."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <p className="text-xs text-muted-foreground font-mono mb-3">{profile.handle}</p>
            <StatCounter num={profile.statNum} suffix={profile.statSuffix} label={profile.statLabel} />
            <p className="text-xs text-muted-foreground mt-3">DSA Focus: {profile.focus}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
