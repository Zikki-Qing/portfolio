"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Marketing Simplified",
    companyUrl: "https://zmarkio.com/",
    role: "Full-Stack Developer",
    period: "Mar 2026 – Present",
    context: "Industry Experience",
    outcome: "Shipped workflow features that improve auditability, short-lived context handling, and human review before automation.",
    summary:
      "Building full-stack features for a marketing workflow platform, focused on workflow traceability, short-lived context management, and human-in-the-loop review.",
    achievements: [
      "Designed a PostgreSQL audit logging system with composite indexes and database-level immutability controls, improving traceability of workflow actions.",
      "Built a Redis TTL-based AI analysis context so users guide LLM output direction while keeping short-lived request context ephemeral.",
      "Designed and implemented a human-in-the-loop anomaly review workflow, replacing automatic AI decision creation with user-confirmed approval.",
    ],
    tags: ["Next.js 14", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    company: "RhombusAI",
    companyUrl: null,
    role: "Full-Stack Software Engineer Intern",
    period: "Nov 2025 – Feb 2026",
    context: "Industry Internship",
    outcome: "Reduced workflow failure rate by 15–25% and recurring frontend/workflow bugs by 30–40%.",
    summary:
      "Improved the reliability of an AI-driven data platform by debugging inconsistent LLM-generated workflows and strengthening validation, testing, and regression coverage.",
    achievements: [
      "Diagnosed inconsistent LLM-generated workflows across React frontend, backend services, and REST APIs.",
      "Built Cypress smoke tests and nightly regression suites in GitHub Actions to reduce recurring bugs.",
      "Conducted API-level benchmarking and validation to identify bottlenecks and improve responsiveness.",
    ],
    tags: ["React", "TypeScript", "Cypress", "GitHub Actions"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">
            03 // INDUSTRY EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Industry{" "}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card !p-0 overflow-hidden"
            >
              {/* Outcome stripe */}
              <div className="px-8 py-4 border-b border-white/[0.07] bg-primary/[0.04]">
                <p className="text-sm font-bold text-primary leading-snug">
                  {exp.outcome}
                </p>
              </div>

              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-primary transition-colors"
                          aria-label={`Visit ${exp.company}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-primary-soft font-bold text-sm">{exp.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-muted text-sm font-medium">{exp.period}</p>
                    <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                      {exp.context}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-muted text-sm leading-relaxed mb-6 italic border-l-2 border-primary/30 pl-4">
                  {exp.summary}
                </p>

                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-muted text-[10px] font-bold uppercase tracking-widest"
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
