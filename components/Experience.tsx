"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Software Engineer Internship",
    company: "RhombusAI",
    location: "Sydney, Australia",
    period: "Nov 2025 - Feb 2026",
    summary: "Contributed to the development and stabilisation of a rapidly evolving startup platform by resolving complex frontend and backend logic issues across the stack. Improved code quality and system design robustness while supporting continuous feature delivery in a high-iteration environment. Strengthened platform reliability through structured smoke testing, automated regression workflows, and performance benchmarking on large datasets.",
    achievements: [
      "Stabilised cross-stack system logic in a rapidly evolving AI data platform. Diagnosed and resolved complex frontend rendering issues, backend logic defects, API integration failures and LLM-driven workflow inconsistencies to improve end-to-end reliability.",
      "Established automated testing workflows to safeguard release quality. Designed Cypress-based smoke tests embedded within frontend code and integrated them into CI/CD pipelines, alongside scheduled nightly regression runs via GitHub Actions with screenshot-based failure reporting.",
      "Led large-dataset performance validation to assess scalability. Conducted backend performance testing under high-volume data scenarios and developed workflow-level API baseline benchmarks to identify bottlenecks and monitor performance trends.",
      "Improved deployment confidence during rapid product iteration. Introduced structured validation practices and proactive risk detection to maintain platform stability amid continuous feature delivery.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight italic text-[#43464b]">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[#8FA3B0] text-lg font-medium">
            My professional career in software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-[#8FA3B0]/10 text-[#8FA3B0] border border-[#E6E3DF]">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-[#8FA3B0] transition-colors text-[#43464b] tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-bold text-[#A3B18A] tracking-wide uppercase text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-[#8FA3B0] font-bold tracking-widest uppercase pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="mb-8 p-6 rounded-[1.5rem] bg-[#F5F3EF]/50 border border-[#E6E3DF]">
                <p className="text-[#43464b]/80 leading-relaxed font-medium italic text-base">
                  {exp.summary}
                </p>
              </div>

              <ul className="space-y-5">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <CheckCircle2 className="w-5 h-5 text-[#A3B18A] mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-[#43464b]/80 group-hover/item:text-[#43464b] transition-colors leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
