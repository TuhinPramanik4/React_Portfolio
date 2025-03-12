"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { SiReact, SiJavascript, SiPython, SiNodedotjs, SiTailwindcss, SiCplusplus, SiFramer, SiGreensock, SiMongodb, SiMysql } from "react-icons/si";

const skillLogos = [
  { name: "React", icon: <SiReact className="text-blue-500" size={60} />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" size={60} />, category: "language" },
  { name: "Python", icon: <SiPython className="text-blue-400" size={60} />, category: "language" },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" size={60} />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={60} />, category: "database" },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" size={60} />, category: "database" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={60} />, category: "frontend" },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-700" size={60} />, category: "language" },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" size={60} />, category: "frontend" },
  { name: "GSAP", icon: <SiGreensock className="text-green-400" size={60} />, category: "frontend" },
];

export default function EnhancedSkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">I specialize in a variety of technologies and continuously expand my expertise to deliver high-quality solutions.</p>
        </motion.div>
        <InfiniteSkillsCarousel />
      </div>
    </section>
  );
}

function InfiniteSkillsCarousel() {
  const duplicatedLogos = [...skillLogos, ...skillLogos];
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-gray-800 py-10 rounded-xl shadow-lg">
      <motion.div className="flex" animate={{ x: [0, -1920] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}>
        {duplicatedLogos.map((logo, index) => (
          <motion.div key={index} className="flex flex-col items-center justify-center mx-10" whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center p-4 shadow-md">
              {logo.icon}
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">{logo.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
