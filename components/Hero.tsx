"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8FA3B0]/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A3B18A]/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-white/40 border border-[#E6E3DF] text-sm font-bold mb-12 inline-block text-[#8FA3B0] tracking-widest uppercase">
              Master of IT @ University of Melbourne
            </span>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8FA3B0] to-[#A3B18A] rounded-full blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#E6E3DF] shadow-xl shadow-[#8FA3B0]/5">
                  <Image 
                    src="/IMG_6291 2.JPG" 
                    alt="Ziqi (Jade) Qing" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="text-center md:text-left pt-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#43464b] whitespace-nowrap">
                  Ziqi (Jade) <span className="gradient-text">Qing</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8FA3B0] tracking-tight uppercase">
                  Software Engineer
                </h2>
              </div>
            </div>

            <p className="text-xl text-[#8FA3B0] max-w-2xl mb-12 leading-relaxed text-balance font-medium">
            Building reliable products with clean code and thoughtful design. Curious about the intersection of technology, people, and real-world impact.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <a 
                href="#projects" 
                className="px-10 py-4 rounded-full bg-[#43464b] text-[#F5F3EF] font-bold hover:bg-[#43464b]/90 transition-all flex items-center gap-2 group shadow-lg shadow-[#43464b]/10 tracking-widest uppercase text-sm"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-8">
                <a 
                  href="https://github.com/Zikki-Qing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8FA3B0] hover:text-[#43464b] transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jade-qing-191186330/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8FA3B0] hover:text-[#43464b] transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:qingziqi6@gmail.com" 
                  className="text-[#8FA3B0] hover:text-[#43464b] transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
