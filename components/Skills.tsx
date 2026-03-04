"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Settings, Zap } from "lucide-react";

const skills = [
  {
    category: "Development & Stack",
    icon: <Code2 className="w-5 h-5 text-[#8FA3B0]" />,
    items: ["Django", "TypeScript", "Frontend & Backend Web Development"],
  },
  {
    category: "Architecture & Optimization",
    icon: <Settings className="w-5 h-5 text-[#C9A9A6]" />,
    items: ["Cross-Stack Debugging", "Frontend Architecture", "Performance Benchmarking"],
  },
  {
    category: "Testing & Automation",
    icon: <Terminal className="w-5 h-5 text-[#A3B18A]" />,
    items: ["CI/CD Integration", "End-to-End (E2E) Testing", "Smoke & Regression Testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight italic text-[#43464b]">Technical <span className="gradient-text">Skills</span></h2>
          <p className="text-[#8FA3B0] text-lg font-medium">
            Core competencies developed through academic rigor and professional practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col items-center text-center p-10 group hover:border-[#8FA3B0]/30 transition-all shadow-sm"
            >
              <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E6E3DF] group-hover:bg-[#8FA3B0]/5 group-hover:border-[#8FA3B0]/20 transition-all duration-500 shadow-sm mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-[#43464b] tracking-tight mb-6 uppercase tracking-widest text-xs">{skill.category}</h3>
              
              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <p 
                    key={i} 
                    className="text-[#8FA3B0] font-bold text-sm leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
