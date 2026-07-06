"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ backgroundColor: "#E8E6E3" }}>

      {/* Content area */}
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left: large statement — ~60% */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-[3]"
          >
            <h2
              className="font-mono font-normal leading-[1.2] tracking-tight"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 4.2rem)",
                color: "#0A0B0E",
              }}
            >
              I build where
              <br />
              product flow meets
              <br />
              <span className="italic" style={{ color: "var(--primary)" }}>
                RELIABILITY
              </span>
              <span className="cursor-blink" aria-hidden="true">_</span>
            </h2>
          </motion.div>

          {/* Right: label + bio — ~40% */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-[2] lg:pt-2"
          >
            <p
              className="text-xs font-mono font-bold tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--primary)" }}
            >
              02 // ABOUT
            </p>
            <p
              className="text-sm font-mono leading-relaxed mb-4"
              style={{ color: "rgba(10, 11, 14, 0.6)" }}
            >
              I&apos;m a Full-Stack Developer who enjoys working on the layer between user
              intent and system behaviour — where interfaces, APIs, data flow, and
              reliability details need to work together.
            </p>
            <p
              className="text-sm font-mono leading-relaxed"
              style={{ color: "rgba(10, 11, 14, 0.6)" }}
            >
              I care about building software that is useful, traceable, testable,
              and easier for users to trust.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div style={{ borderTop: "1px solid rgba(10, 11, 14, 0.1)" }} />
      </div>

      {/* Continuous marquee watermark */}
      <div className="py-10 overflow-hidden" aria-hidden="true">
        <div
          className="pointer-events-none select-none whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          <span
            className="text-[14vw] font-black tracking-tighter leading-none"
            style={{ color: "rgba(10, 11, 14, 0.07)" }}
          >
            About Zikki Qing&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;About Zikki Qing&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

    </section>
  );
}
