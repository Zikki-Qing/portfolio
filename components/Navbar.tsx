"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Beyond", href: "#beyond" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-[#F5F3EF]/80 backdrop-blur-lg border-b border-[#E6E3DF]" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:text-[#8FA3B0] transition-colors uppercase text-[#43464b]">
          Ziqi<span className="text-[#8FA3B0]">.</span>Qing
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold text-[#8FA3B0] hover:text-[#43464b] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-[#E6E3DF] mx-2" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/Zikki-Qing" target="_blank" rel="noopener noreferrer" className="text-[#8FA3B0] hover:text-[#43464b] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jade-qing-191186330/" target="_blank" rel="noopener noreferrer" className="text-[#8FA3B0] hover:text-[#43464b] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-[#8FA3B0] hover:text-[#43464b] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#F5F3EF] border-b border-[#E6E3DF] overflow-hidden"
        >
          <div className="px-6 py-8 space-y-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="block text-lg font-bold text-[#8FA3B0] hover:text-[#43464b] transition-colors uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-center gap-8 text-[#8FA3B0]">
              <a href="https://github.com/Zikki-Qing" target="_blank" rel="noopener noreferrer" className="hover:text-[#43464b] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/jade-qing-191186330/" target="_blank" rel="noopener noreferrer" className="hover:text-[#43464b] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
