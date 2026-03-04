"use client";

import { motion } from "framer-motion";
import { User, Code, Compass, Heart } from "lucide-react";

export default function About() {
  const info = [
    {
      icon: <User className="w-5 h-5 text-[#8FA3B0]" />,
      title: "Background",
      content: "Software engineering student pursuing Master of IT at the University of Melbourne, building a strong foundation in computer science and software development.",
    },
    {
      icon: <Code className="w-5 h-5 text-[#C9A9A6]" />,
      title: "Full Stack",
      content: "Experienced in both frontend and backend development, from building responsive interfaces to designing robust server-side architectures.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#A3B18A]" />,
      title: "Exploration",
      content: "Passionate about exploring new technologies and building products that solve real-world problems. Always curious and eager to learn.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#E6E3DF]" />,
      title: "Personality",
      content: "Positive attitude and dedicated to creating exceptional user experiences and clean, maintainable code.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#43464b]">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-[#8FA3B0] leading-relaxed max-w-2xl font-medium">
              Hello! I'm Ziqi (Jade) Qing, a software engineering student based in Australia. 
              My journey into technology began with a curiosity about how things work behind the scenes, 
              which led me to pursue my Master of Information Technology at the University of Melbourne.
            </p>
            <p className="text-xl text-[#8FA3B0] leading-relaxed max-w-2xl font-medium">
              I thrive on challenges and enjoy the process of turning complex problems into elegant solutions. 
              My experience at RhombusAI as a full-stack developer intern allowed me to gain practical experience 
              in shipping real features and maintaining production-grade applications.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card flex flex-col items-start gap-4 p-10"
              >
                <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E6E3DF]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#43464b]">{item.title}</h3>
                <p className="text-[#8FA3B0] text-sm leading-relaxed font-medium">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
