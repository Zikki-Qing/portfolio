"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

const projects = [
  {
    title: "Automated Regression Testing",
    description: "Designed a robust E2E testing framework to safeguard critical data transformation workflows. Implements a tiered testing strategy with automated nightly feedback loops.",
    tags: ["Cypress", "TypeScript", "GitHub Actions", "CI/CD", "QA"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    github: "https://github.com/Zikki-Qing/automation-regression-case-study", // Automation Regression Testing Repo
    demo: "#",
    features: [
      "Nightly Regression via GitHub Actions",
      "Tiered Smoke & Regression Strategy",
      "Page Object Model (POM) Architecture",
      "Automated Screenshot/Video Reporting"
    ]
  },
  {
    title: "NLP File Processor",
    description: "A sophisticated full-stack system that processes CSV/Excel files using natural language instructions. Powered by a robust Django-Celery asynchronous architecture for real-time data transformation.",
    tags: ["Django", "React", "Celery", "Pandas", "NLP", "Ant Design"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Zikki-Qing/Web-Application-for-Regex-Pattern-Matching-and-Replacement",
    demo: "#",
    features: [
      "Natural Language Data Transformation",
      "Asynchronous Task Processing with Celery",
      "Real-time System Health & Stats Monitoring",
      "Support for Large-scale CSV/Excel Datasets"
    ]
  },
  {
    title: "Competitive AI Agent",
    description: "Led the development of a high-performance AI agent using metric-driven optimization and controlled algorithm comparisons to achieve superior win-rates against baseline models.",
    tags: ["AI/ML", "Python", "Search Algorithms", "Team Leadership"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    github: null, // Private Repository
    demo: "#",
    features: [
      "Metric-driven win-rate optimization",
      "Strategic algorithm benchmarking",
      "Cross-functional team coordination",
      "Experimental strategy refinement"
    ]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight text-[#43464b]">Technical <span className="gradient-text">Projects</span></h2>
            <p className="text-[#8FA3B0] text-lg font-medium">
              A selection of my technical works across AI, automation, and full-stack development.
            </p>
          </div>
          <a href="https://github.com/Zikki-Qing" target="_blank" rel="noopener noreferrer" className="text-[#8FA3B0] hover:text-[#43464b] transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            View all projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative h-48 mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#E6E3DF]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#43464b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-[#F5F3EF] text-[#43464b] hover:bg-white transition-all shadow-xl">
                      <Github className="w-6 h-6" />
                    </a>
                  ) : (
                    <div className="p-4 rounded-full bg-[#F5F3EF]/50 text-[#43464b] cursor-not-allowed shadow-xl flex items-center gap-2 px-6">
                      <Lock className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Private Repo</span>
                    </div>
                  )}
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-[#F5F3EF] text-[#43464b] hover:bg-white transition-all shadow-xl">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-[#A3B18A]/10 border border-[#A3B18A]/20 text-[#A3B18A]">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#8FA3B0] transition-colors text-[#43464b] tracking-tight">{project.title}</h3>
              <p className="text-[#8FA3B0] leading-relaxed text-sm mb-6 flex-grow font-medium">
                {project.description}
              </p>

              {project.features && (
                <ul className="mb-8 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-[#A3B18A] font-bold uppercase tracking-wider">
                      <div className="w-1 h-1 rounded-full bg-[#A3B18A] mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:text-[#8FA3B0] transition-colors text-[#43464b]">
                  Explore Case Study <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <div className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-[#8FA3B0]/60">
                  Documentation Restricted <Lock className="w-3 h-3" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
