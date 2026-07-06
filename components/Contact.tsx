"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, FileDown } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // NOTE: This form is a frontend-only demo using setTimeout.
  // It does NOT send real messages. Direct email/LinkedIn above are functional.
  // TODO: integrate Formspree, EmailJS, or Resend for real submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "qingziqi6@gmail.com",
      href: "mailto:qingziqi6@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/zikki-qing",
      href: "https://www.linkedin.com/in/zikki-qing-191186330/",
    },
    {
      icon: <Github className="w-5 h-5 text-muted" />,
      label: "GitHub",
      value: "github.com/Zikki-Qing",
      href: "https://github.com/Zikki-Qing",
    },
    {
      icon: <FileDown className="w-5 h-5 text-primary" />,
      label: "Resume",
      value: "Download CV (PDF)",
      href: "/resume.pdf",
      download: "Zikki_Qing_CV.pdf",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">
              06 // CONTACT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              GET IN{" "}
              <span className="gradient-text">TOUCH_</span>
            </h2>
            <p className="text-lg text-muted mt-4 max-w-xl font-medium">
              I&apos;m open to discussing new opportunities, project collaborations, or just a chat about tech. Reach out directly below.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Primary contact methods */}
            <div className="flex-1 space-y-4">
              <p className="text-xs font-bold text-muted uppercase tracking-[0.2em] mb-6">
                Direct Contact
              </p>
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  download={link.download}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-5 glass-card !p-5 !rounded-2xl transition-transform hover:translate-x-1 group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.07] group-hover:border-primary/20 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-base font-bold text-foreground group-hover:text-primary-soft transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact form */}
            <div className="flex-1">
              <p className="text-xs font-bold text-muted uppercase tracking-[0.2em] mb-6">
                Send a Message <span className="normal-case font-normal">(or email me directly above)</span>
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card h-[calc(100%-2rem)] flex flex-col items-center justify-center text-center p-12 shadow-sm min-h-[320px]"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-primary tracking-tight">Message Received</h3>
                  <p className="text-muted leading-relaxed max-w-xs mx-auto mb-8 font-medium text-sm">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-muted font-bold hover:text-foreground transition-colors uppercase tracking-widest text-xs"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-card p-8 space-y-6 shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-muted uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] focus:border-primary/40 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-muted/40 text-foreground font-medium text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-muted uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] focus:border-primary/40 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-muted/40 text-foreground font-medium text-sm"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-muted uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] focus:border-primary/40 focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted/40 text-foreground font-medium text-sm"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 group shadow-lg tracking-[0.15em] uppercase text-sm"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
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
