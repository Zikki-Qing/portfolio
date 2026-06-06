"use client";

import { motion } from "framer-motion";

const techs = [
  {
    abbr: "⚛",
    color: "#61DAFB",
    name: "React",
    desc: "Component-driven UI for web and mobile product flows.",
  },
  {
    abbr: "NX",
    color: "#E8E6E3",
    name: "Next.js",
    desc: "Full-stack React framework powering production web apps.",
  },
  {
    abbr: "TS",
    color: "#4A9EE8",
    name: "TypeScript",
    desc: "Typed JavaScript for reliable, maintainable codebases.",
  },
  {
    abbr: "Py",
    color: "#F7C948",
    name: "Python",
    desc: "Backend services, Django APIs, and workflow automation.",
  },
  {
    abbr: "PG",
    color: "#6BA8D9",
    name: "PostgreSQL",
    desc: "Relational database for audit trails and workflow state.",
  },
  {
    abbr: "Rd",
    color: "#FF6B6B",
    name: "Redis",
    desc: "Ephemeral context storage and TTL-based workflow data.",
  },
  {
    abbr: "Cy",
    color: "#69D3A7",
    name: "Cypress",
    desc: "End-to-end and regression testing across CI pipelines.",
  },
  {
    abbr: "⚙",
    color: "#8B9499",
    name: "GitHub Actions",
    desc: "Automated testing, builds, and deployment workflows.",
  },
];

function TechIconBox({ abbr, color }: { abbr: string; color: string }) {
  return (
    <div className="relative w-[68px] h-[68px] mb-5">
      <div className="w-full h-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center">
        <span
          className="font-mono font-bold text-xl leading-none select-none"
          style={{ color }}
        >
          {abbr}
        </span>
      </div>
      {/* Corner selection handles */}
      <span className="absolute -top-px -left-px w-1.5 h-1.5 bg-white/20" />
      <span className="absolute -top-px -right-px w-1.5 h-1.5 bg-white/20" />
      <span className="absolute -bottom-px -left-px w-1.5 h-1.5 bg-white/20" />
      <span className="absolute -bottom-px -right-px w-1.5 h-1.5 bg-white/20" />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">

        {/* Header: large title | label | description */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-20">

          {/* Left: large title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex-[2] min-w-0"
          >
            <h2
              className="font-mono font-black leading-none tracking-tighter whitespace-nowrap"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
            >
              <span className="text-foreground">TECH</span>
              <span className="text-foreground">–</span>
              <span className="italic" style={{ color: "var(--primary)" }}>STACK</span>
              <span className="cursor-blink" aria-hidden="true">_</span>
            </h2>
          </motion.div>

          {/* Center: section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-[1] lg:pt-3"
          >
            <p className="text-xs font-mono font-bold text-primary tracking-[0.3em] uppercase">
              05 // TECHNICAL STRENGTHS
            </p>
          </motion.div>

          {/* Right: description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-[2] lg:pt-2"
          >
            <p className="text-sm font-mono text-muted leading-relaxed">
              The tools I reach for across the full stack — React and Next.js on the frontend,
              Python and PostgreSQL on the backend, Redis for workflow context,
              and Cypress for reliability.
            </p>
          </motion.div>

        </div>

        {/* Tech grid: outer border + overflow-hidden for seamless cell borders */}
        <div className="border-t border-l border-white/[0.06] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 md:p-8 border-b border-r border-white/[0.06]"
              >
                <TechIconBox abbr={tech.abbr} color={tech.color} />
                <h3 className="font-mono font-bold text-foreground text-sm mb-2 tracking-wide">
                  {tech.name}
                </h3>
                <p className="font-mono text-muted text-xs leading-relaxed">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
