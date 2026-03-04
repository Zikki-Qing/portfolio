"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-[#E6E3DF] bg-[#F5F3EF]">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xs">
            <a href="#" className="text-2xl font-bold tracking-tighter hover:text-[#8FA3B0] transition-colors uppercase text-[#43464b]">
              Ziqi<span className="text-[#8FA3B0]">.</span>Qing
            </a>
            <p className="text-[#8FA3B0] text-sm mt-4 font-bold tracking-tight leading-relaxed uppercase">
              Full Stack Developer & Master of IT Student at the University of Melbourne.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-8 text-[#8FA3B0]">
              <a 
                href="https://github.com/Zikki-Qing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#43464b] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jade-qing-191186330/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#43464b] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:qingziqi6@gmail.com" 
                className="hover:text-[#43464b] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex items-center gap-8 text-[10px] font-bold text-[#8FA3B0] uppercase tracking-[0.2em]">
              <a href="#about" className="hover:text-[#43464b] transition-colors">About</a>
              <a href="#projects" className="hover:text-[#43464b] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#43464b] transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E6E3DF] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8FA3B0] text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; {currentYear} Ziqi (Jade) Qing. All rights reserved.
          </p>
          <p className="text-[#8FA3B0] text-[10px] font-bold uppercase tracking-[0.2em]">
            Handcrafted with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
