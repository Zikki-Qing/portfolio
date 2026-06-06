"use client";

import { motion } from "framer-motion";
import { Layout, Database, Shield, Wrench } from "lucide-react";

const skills = [
  {
    category: "Product Frontend",
    icon: <Layout className="w-5 h-5 text-primary" />,
    description: "Build responsive web and mobile interfaces for user-facing product flows.",
    tags: ["React", "Next.js", "React Native", "TypeScript"],
  },
  {
    category: "Backend & APIs",
    icon: <Database className="w-5 h-5 text-primary-soft" />,
    description: "Build API-driven features, audit trails, workflow state, and short-lived data context.",
    tags: ["Python", "Django", "Node.js", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    category: "Testing & Reliability",
    icon: <Shield className="w-5 h-5 text-primary" />,
    description: "Strengthen reliability through regression testing, automation, and systems thinking.",
    tags: ["Cypress", "Jest", "GitHub Actions", "Docker"],
  },
  {
    category: "Workflow Features",
    icon: <Wrench className="w-5 h-5 text-primary-soft" />,
    description: "Build and improve workflow tooling: human review flows, validation checks, audit logging.",
    tags: ["Human-in-the-loop", "LLM Validation", "Workflow Tooling", "Audit Logging"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">
            05 // TECHNICAL STRENGTHS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What I Can <span className="gradient-text">Build</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card flex flex-col gap-5 !p-7"
            >
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.07] w-fit">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-2">
                  {skill.category}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.07] text-muted text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
