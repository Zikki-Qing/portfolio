"use client";

import { motion } from "framer-motion";
import { Layers, Code, Shield, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: "Product Engineering",
    content: "Building user-facing features with attention to product flow, usability, and engineering reliability.",
  },
  {
    icon: <Code className="w-5 h-5 text-primary-soft" />,
    title: "Full-Stack Delivery",
    content: "Working end-to-end across product surfaces — from frontend interfaces down to data persistence and API design.",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: "Workflow & Reliability",
    content: "Audit logging, short-lived workflow context, human review flows, and regression coverage in CI.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-primary-soft" />,
    title: "Systems Fundamentals",
    content: "Coursework and projects in TCP protocols, multi-threaded client–server design, and fault-tolerant state synchronisation.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 space-y-8"
          >
            <div>
              <p className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">
                02 // ABOUT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                I build software with{" "}
                <span className="gradient-text">product thinking.</span>
              </h2>
            </div>
            <p className="text-lg text-muted leading-relaxed max-w-xl font-medium">
              I&apos;m a Melbourne-based Full-Stack Developer completing a Master of IT at the University of Melbourne (June 2026). I currently work at Marketing Simplified on AI marketing workflow features, and previously interned at RhombusAI strengthening reliability of an AI data platform.
            </p>
            <p className="text-base text-muted leading-relaxed max-w-xl">
              I care about building software that works reliably — clean interfaces, well-structured backends, and the kind of tooling that makes products easier to maintain and trust.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-card flex flex-col items-start gap-4 !p-8"
              >
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.07]">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-foreground tracking-tight">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
