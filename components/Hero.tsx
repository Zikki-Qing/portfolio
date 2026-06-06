"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const recruiterStrip = [
  { label: "LOCATION", value: "Melbourne, Australia" },
  { label: "EDUCATION", value: "Master of IT · Univ. Melbourne · Jun 2026" },
  { label: "WORK RIGHTS", value: "Student Visa (500) · Graduating June 2026 · 485 eligible" },
  { label: "TARGET ROLES", value: "Software Engineer · Full-Stack · Frontend" },
  { label: "AVAILABILITY", value: "From July 2026" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(232,230,227,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/[0.08] rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/[0.06] rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* ── Left column ── */}
          <div className="flex-1 min-w-0 pt-4">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs font-bold text-muted uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Melbourne · Open to Work
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              Building reliable{" "}
              <span className="gradient-text block sm:inline">
                interfaces, APIs,
                <br className="hidden sm:block" />
                {" "}and workflow tools.
              </span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-muted leading-relaxed max-w-xl mb-4 font-medium"
            >
              Recently shipped audit logging, Redis-backed workflow context, and human-in-the-loop review for a marketing workflow platform.
            </motion.p>

            {/* One-liner */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm text-muted/70 leading-relaxed max-w-xl mb-10"
            >
              Completing a Master of IT at the University of Melbourne (June 2026). Open to Software Engineering / Full-Stack roles in Australia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              {/* TODO: add /public/resume.pdf before recruiter-facing deployment */}
              <a
                href="/resume.pdf"
                download="Zikki_Qing_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-primary font-bold text-sm uppercase tracking-widest hover:bg-primary/10 transition-all"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.07] text-foreground font-bold text-sm uppercase tracking-widest hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                View Experience
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-muted hover:text-foreground font-bold text-sm uppercase tracking-widest transition-colors"
              >
                Contact Me <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <a
                href="mailto:qingziqi6@gmail.com"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Zikki-Qing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zikki-qing-191186330/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-auto lg:shrink-0 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-sm opacity-60 group-hover:opacity-100 transition duration-700" />
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-1 ring-primary/20 shadow-2xl shadow-primary/10">
                {/* TODO: rename /public/IMG_6291 2.JPG to /public/avatar.jpg to activate this path */}
                <Image
                  src="/avatar.jpg"
                  alt="Zikki Qing, Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Recruiter signal strip */}
            <div className="glass-card !p-6 w-full lg:w-80 space-y-3">
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">
                Recruiter Info
              </p>
              {recruiterStrip.map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider w-24 shrink-0 pt-0.5 font-mono">
                    {label}
                  </span>
                  <span className="text-xs text-foreground leading-relaxed">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
