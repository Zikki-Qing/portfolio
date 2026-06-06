"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Kulaa",
    year: "2026",
    role: "Full-Stack Developer",
    context: "University Capstone Project",
    description:
      "Built cross-platform mobile and web flows for a food discovery and booking platform within an 8-week sprint cycle.",
    tags: ["React Native", "Expo", "Next.js", "TypeScript", "TanStack Query"],
    github: null,
    demo: null,
    highlights: [
      "Delivered core user-facing systems — search, booking, and profile — across mobile (React Native) and web (Next.js).",
      "Implemented REST API integrations and async data flows using TanStack Query for consistent UX across platforms.",
      "Translated Figma designs into reusable components; refined MVP scope with stakeholders through sprint reviews.",
    ],
    preview: "kulaa",
  },
  {
    title: "Distributed Multiplayer System",
    year: "2024",
    role: "Systems Programming",
    context: "University Academic Project",
    description:
      "Designed a fault-tolerant TCP multiplayer system supporting 10+ concurrent clients with custom protocol and recovery logic.",
    tags: ["Java", "TCP", "Multithreading", "Fault Tolerance"],
    github: null,
    demo: null,
    highlights: [
      "Designed a custom TCP messaging protocol with ACKs, retry handling, and role-based permissions across 10+ concurrent clients.",
      "Built a multi-threaded client-server architecture with dedicated worker threads for connection handling and state broadcasting.",
      "Implemented fault-tolerant recovery logic for disconnects and reconnections to reduce manual session recovery.",
    ],
    preview: "tcp",
  },
];

function KulaaPreview() {
  return (
    <div className="h-52 mb-6 rounded-2xl border border-white/[0.07] bg-card flex flex-col overflow-hidden font-mono text-xs">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.07] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/15" />
        </div>
        <span className="text-primary font-bold tracking-widest uppercase text-[10px]">KULAA</span>
        <span className="text-muted text-[10px]">v1.0</span>
      </div>
      {/* Flow rows */}
      <div className="flex-1 flex flex-col justify-center px-5 py-3 space-y-2.5">
        {[
          { num: "01", label: "SEARCH", sub: "location · cuisine · availability" },
          { num: "02", label: "BOOKING", sub: "date · party size · confirm" },
          { num: "03", label: "PROFILE", sub: "saved · history · preferences" },
        ].map(({ num, label, sub }) => (
          <div key={num} className="flex items-center justify-between group/row">
            <div className="flex items-center gap-3">
              <span className="text-primary font-bold">{num}</span>
              <span className="text-foreground font-bold tracking-wider">{label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted text-[10px] hidden sm:block">{sub}</span>
              <span className="text-primary">→</span>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="px-4 py-2 border-t border-white/[0.07] bg-white/[0.02] flex items-center justify-center gap-4">
        <span className="text-muted text-[10px]">RN</span>
        <span className="text-white/20">·</span>
        <span className="text-muted text-[10px]">Next.js</span>
        <span className="text-white/20">·</span>
        <span className="text-muted text-[10px]">TanStack Query</span>
      </div>
    </div>
  );
}

function TcpPreview() {
  return (
    <div className="h-52 mb-6 rounded-2xl border border-white/[0.07] bg-card flex flex-col overflow-hidden font-mono text-xs">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.07] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/15" />
        </div>
        <span className="text-primary font-bold tracking-widest uppercase text-[10px]">DISTRIBUTED SYSTEM</span>
        <span className="text-muted text-[10px]">TCP</span>
      </div>
      {/* Diagram */}
      <div className="flex-1 flex items-center justify-center px-6 py-3">
        <div className="w-full space-y-2 text-[11px]">
          <div className="flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded border border-primary/40 text-primary font-bold whitespace-nowrap">CLIENT</span>
            <span className="text-muted flex-1 text-center tracking-widest">──TCP──▶</span>
            <span className="px-3 py-1 rounded border border-primary/40 text-primary font-bold whitespace-nowrap">SERVER</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted">
            <span>↑</span>
            <span className="text-[10px] tracking-widest">ACK · RETRY · RECONNECT</span>
            <span>↑</span>
          </div>
          <div className="flex justify-center gap-4 mt-1">
            {["sync", "broadcast", "recovery"].map((label) => (
              <span key={label} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.07] text-muted text-[10px] uppercase tracking-widest">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="px-4 py-2 border-t border-white/[0.07] bg-white/[0.02] flex items-center justify-center gap-4">
        <span className="text-muted text-[10px]">Java</span>
        <span className="text-white/20">·</span>
        <span className="text-muted text-[10px]">Multithreading</span>
        <span className="text-white/20">·</span>
        <span className="text-muted text-[10px]">Fault Tolerance</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">
            04 // SELECTED PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted text-sm mb-16 font-medium"
        >
          Academic &amp; systems projects — separate from industry experience above.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card flex flex-col"
            >
              {/* Context label */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                  {project.context}
                </span>
                <span className="text-muted text-xs font-medium">{project.year}</span>
              </div>

              {/* Preview panel */}
              {project.preview === "kulaa" ? <KulaaPreview /> : <TcpPreview />}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/[0.04] border border-white/[0.07] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground tracking-tight mb-1">{project.title}</h3>
              <p className="text-primary-soft text-xs font-bold uppercase tracking-widest mb-3">{project.role}</p>
              <p className="text-muted text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em]">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-muted/40">
                    <Github className="w-3.5 h-3.5" /> Private
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
