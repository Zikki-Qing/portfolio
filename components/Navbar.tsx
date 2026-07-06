"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X, FileDown } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
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
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/[0.05]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors uppercase text-foreground"
        >
          Zikki<span className="text-primary">.</span>Qing
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-muted hover:text-foreground transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Zikki-Qing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/zikki-qing-191186330/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* TODO: add /public/resume.pdf before recruiter-facing deployment to activate this button */}
            <a
              href="/resume.pdf"
              download="Zikki_Qing_CV.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/40 text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-card border-b border-white/[0.07] overflow-hidden"
        >
          <div className="px-6 py-8 space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-bold text-muted hover:text-foreground transition-colors uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Zikki_Qing_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary text-sm font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
            <div className="pt-4 flex items-center justify-center gap-8 text-muted">
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
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
