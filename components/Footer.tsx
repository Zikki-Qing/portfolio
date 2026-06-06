"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/[0.07] bg-background">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xs">
            <a
              href="#top"
              className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors uppercase text-foreground"
            >
              Zikki<span className="text-primary">.</span>Qing
            </a>
            <p className="text-muted text-sm mt-4 font-medium tracking-tight leading-relaxed">
              Full-Stack Developer · Melbourne, Australia
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-8 text-muted">
              <a
                href="https://github.com/Zikki-Qing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/zikki-qing-191186330/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:qingziqi6@gmail.com"
                className="hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex items-center gap-8 text-[10px] font-bold text-muted uppercase tracking-[0.2em]">
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
              <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; 2026 Zikki Qing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#top"
              className="text-muted hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              Back to Top ↑
            </a>
            <p className="text-muted text-[10px] font-bold uppercase tracking-[0.2em]">
              Built with Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
