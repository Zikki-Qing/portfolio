"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5 text-[#8FA3B0]" />,
      label: "Email",
      value: "qingziqi6@gmail.com",
      href: "mailto:qingziqi6@gmail.com",
    },
    {
      icon: <Github className="w-5 h-5 text-[#43464b]" />,
      label: "GitHub",
      value: "github.com/Zikki-Qing",
      href: "https://github.com/Zikki-Qing",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-[#8FA3B0]" />,
      label: "LinkedIn",
      value: "linkedin.com/in/jade-qing-191186330/",
      href: "https://www.linkedin.com/in/jade-qing-191186330/",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight italic text-[#43464b]">
                  Let's <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-xl text-[#8FA3B0] leading-relaxed max-w-lg font-medium">
                  I'm always open to discussing new opportunities, creative ideas, 
                  or just chatting about tech and life. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 glass-card p-6 transition-transform hover:translate-x-2 group shadow-sm"
                  >
                    <div className="p-4 rounded-full bg-[#F5F3EF] border border-[#E6E3DF] group-hover:bg-[#8FA3B0]/10 transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-[#A3B18A] uppercase tracking-[0.2em] font-bold mb-1">
                        {social.label}
                      </p>
                      <p className="text-lg font-bold text-[#43464b] group-hover:text-[#8FA3B0] transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card h-full flex flex-col items-center justify-center text-center p-12 shadow-sm"
                >
                  <div className="w-20 h-20 bg-[#A3B18A]/10 text-[#A3B18A] rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#A3B18A] tracking-tight">Message Sent!</h3>
                  <p className="text-[#8FA3B0] leading-relaxed max-w-xs mx-auto mb-8 font-medium">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#8FA3B0] font-bold hover:text-[#43464b] transition-colors uppercase tracking-widest text-xs"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="glass-card p-10 space-y-8 shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-xs font-bold text-[#A3B18A] tracking-widest uppercase">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-[#F5F3EF] border border-[#E6E3DF] focus:border-[#8FA3B0] focus:ring-1 focus:ring-[#8FA3B0] outline-none transition-all placeholder:text-[#8FA3B0]/50 text-[#43464b] font-medium"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-xs font-bold text-[#A3B18A] tracking-widest uppercase">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-[#F5F3EF] border border-[#E6E3DF] focus:border-[#8FA3B0] focus:ring-1 focus:ring-[#8FA3B0] outline-none transition-all placeholder:text-[#8FA3B0]/50 text-[#43464b] font-medium"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-xs font-bold text-[#A3B18A] tracking-widest uppercase">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-2xl bg-[#F5F3EF] border border-[#E6E3DF] focus:border-[#8FA3B0] focus:ring-1 focus:ring-[#8FA3B0] outline-none transition-all resize-none placeholder:text-[#8FA3B0]/50 text-[#43464b] font-medium"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-2xl bg-[#43464b] text-[#F5F3EF] font-bold hover:bg-[#43464b]/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#43464b]/10 tracking-[0.2em] uppercase text-sm"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-[#F5F3EF]/30 border-t-[#F5F3EF] rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
