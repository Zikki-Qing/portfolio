"use client";

import { motion } from "framer-motion";
import { Plane, Users, Dumbbell, Compass, Globe, Heart } from "lucide-react";
import Image from "next/image";

const items = [
  {
    icon: <Plane className="w-6 h-6 text-[#8FA3B0]" />,
    title: "Travel Experiences",
    content: "Exploring different cultures and landscapes around the world. Every journey brings new perspectives and fuels my curiosity.",
    image: "/IMG_1740.JPG"
  },
  {
    icon: <Users className="w-6 h-6 text-[#A3B18A]" />,
    title: "Volunteering",
    content: "Spent a week volunteering at Elephant Nature Park in Chiang Mai, Thailand—a sanctuary dedicated to rescuing elephants from unethical industries. This experience reinforced my belief in creating positive impact beyond technology.",
    image: "/IMG_4393.jpg"
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-[#C9A9A6]" />,
    title: "Sports & Exploration",
    content: "I'm an enthusiast of fitness, tennis, and rock climbing. I enjoy the process of pushing physical limits and discovering new strengths, which keeps me energetic and positive in all aspects of life.",
    image: "/732fb80aa1a2640b6f69f2f0b57e94d4.jpg"
  },
];

export default function BeyondCoding() {
  return (
    <section id="beyond" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight italic text-[#43464b]">Beyond <span className="gradient-text">Coding</span></h2>
          <p className="text-[#8FA3B0] text-lg font-medium">
            My interests and experiences outside of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col items-center text-center p-8 group hover:translate-y-[-8px] transition-all shadow-sm"
            >
              {item.image ? (
                <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden shadow-sm border border-[#E6E3DF]">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="p-5 rounded-full bg-[#F5F3EF] border border-[#E6E3DF] group-hover:bg-[#8FA3B0]/5 group-hover:border-[#8FA3B0]/20 transition-all duration-500 mb-8 shadow-sm">
                  {item.icon}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-[#43464b] tracking-tight">{item.title}</h3>
              <p className="text-[#8FA3B0] leading-relaxed font-medium">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
