"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileDown } from "lucide-react";

const recruiterRows = [
  { label: "LOCATION",     value: "Melbourne, Australia" },
  { label: "EDUCATION",    value: "Master of IT · Univ. Melbourne · Jun 2026" },
  { label: "WORK RIGHTS",  value: "Post-study work eligible from July 2026" },
  { label: "TARGET ROLES", value: "Software Engineer · Full-Stack · Frontend" },
  { label: "AVAILABILITY", value: "From July 2026" },
];

function CSSBlob() {
  return (
    <div
      className="relative pointer-events-none"
      style={{ width: "min(500px, 80vw)", height: "min(500px, 80vw)" }}
    >
      {/* Ambient outer glow */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          background: "radial-gradient(ellipse at center, #00D4FF 0%, #7C3AED 50%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />
      {/* Outer morphing ring */}
      <div
        className="absolute inset-6 opacity-35"
        style={{
          border: "1px solid rgba(0,212,255,0.3)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "blob-morph 14s ease-in-out infinite, blob-spin 24s linear infinite",
        }}
      />
      {/* Inner morphing body */}
      <div
        className="absolute inset-[15%] opacity-55"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.09) 0%, rgba(124,58,237,0.14) 55%, rgba(0,212,255,0.06) 100%)",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          animation: "blob-morph 9s ease-in-out infinite reverse, blob-spin 18s linear infinite reverse",
        }}
      />
      {/* Specular highlight — gives depth/glass feel */}
      <div
        className="absolute opacity-65"
        style={{
          inset: "32%",
          background: "radial-gradient(circle at 33% 28%, rgba(0,212,255,0.65) 0%, rgba(124,58,237,0.35) 45%, transparent 68%)",
          borderRadius: "50%",
          filter: "blur(14px)",
          animation: "blob-morph 7s ease-in-out infinite, blob-spin 12s linear infinite",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(232,230,227,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* CSS Blob — absolute center */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <CSSBlob />
        </motion.div>
      </div>

      {/* Content — sits above blob */}
      <div className="relative z-10 flex flex-col flex-1">

        {/* ── Upper: name + role, vertically centered ── */}
        <div className="flex-1 flex flex-col items-center justify-center pt-28 pb-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name */}
            <h1
              className="font-mono font-black text-foreground leading-none tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 8.5vw, 7.5rem)" }}
            >
              Zikki_QING
            </h1>

            {/* Role line */}
            <div
              className="flex items-center justify-center gap-3 mt-3 font-mono font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(1.7rem, 5.5vw, 4.8rem)" }}
            >
              <span className="text-foreground">Full-Stack</span>
              <span
                className="inline-block border-2 px-3 py-0.5 text-primary italic"
                style={{ borderColor: "var(--primary)" }}
              >
                DEVELOPER
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Lower: INTRO left · recruiter info right ── */}
        <div className="container mx-auto px-6 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">

          {/* Left: INTRO + bio + CTAs + social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-xs font-mono font-bold text-primary tracking-[0.3em] uppercase mb-3">
              INTRO //
            </p>
            <p className="text-sm font-mono text-muted leading-relaxed mb-6 max-w-sm">
              I&apos;m Zikki, a Full-Stack Developer building reliable interfaces, backend APIs, and workflow tooling. Recent work: audit logging, Redis context handling, and human-in-the-loop review.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="/resume.pdf"
                download="Zikki_Qing_CV.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/50 text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                Resume
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.07] text-foreground font-bold text-xs uppercase tracking-widest hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                View Experience <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a href="mailto:qingziqi6@gmail.com" className="text-muted hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com/Zikki-Qing" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/zikki-qing-191186330/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: recruiter info rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="space-y-2.5 lg:text-right"
          >
            {recruiterRows.map(({ label, value }) => (
              <div key={label} className="flex lg:flex-row-reverse gap-3 items-baseline">
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider shrink-0">
                  {label}
                </span>
                <span className="text-xs font-mono text-muted leading-relaxed">{value}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
