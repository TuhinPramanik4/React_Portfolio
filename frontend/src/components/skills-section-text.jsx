"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const skillLogos = [
  { name: "React", src: "/placeholder.svg?height=80&width=80", alt: "React Logo", category: "frontend" },
  { name: "JavaScript", src: "/placeholder.svg?height=80&width=80", alt: "JavaScript Logo", category: "language" },
  { name: "Python", src: "/placeholder.svg?height=80&width=80", alt: "Python Logo", category: "language" },
  { name: "Node.js", src: "/placeholder.svg?height=80&width=80", alt: "Node.js Logo", category: "backend" },
  { name: "Tailwind CSS", src: "/placeholder.svg?height=80&width=80", alt: "Tailwind CSS Logo", category: "frontend" },
  { name: "C/C++", src: "/placeholder.svg?height=80&width=80", alt: "C/C++ Logo", category: "language" },
  { name: "Framer Motion", src: "/placeholder.svg?height=80&width=80", alt: "Framer Motion Logo", category: "frontend" },
  { name: "GSAP", src: "/placeholder.svg?height=80&width=80", alt: "GSAP Logo", category: "frontend" },
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
        <div className="mt-24">
          <AnimatedSkillCategories />
        </div>
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
              <img src={logo.src || "/placeholder.svg"} alt={logo.alt} className="w-16 h-16 object-contain" />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">{logo.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function AnimatedSkillCategories() {
  const frontendSkills = ["React", "Tailwind CSS", "Framer Motion", "GSAP"];
  const backendSkills = ["Node.js", "Express.js", "RESTful APIs", "MongoDB"];
  const programmingLanguages = ["JavaScript", "C/C++", "Python"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SkillCategoryCard title="Frontend Skills" skills={frontendSkills} icon="🎨" delay={0.1} bgColor="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30" />
      <SkillCategoryCard title="Backend Skills" skills={backendSkills} icon="⚙️" delay={0.3} bgColor="bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30" />
      <SkillCategoryCard title="Programming Languages" skills={programmingLanguages} icon="💻" delay={0.5} bgColor="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30" />
    </div>
  );
}

function SkillCategoryCard({ title, skills, icon, delay, bgColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, staggerChildren: 0.1 } } }} className={`rounded-xl p-8 shadow-lg ${bgColor}`}>
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4">{icon}</span>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <motion.li key={skill} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center">
            <motion.div whileHover={{ scale: 1.2, rotate: 180 }} transition={{ type: "spring", stiffness: 300 }} className="w-3 h-3 rounded-full bg-primary mr-4" />
            <span className="text-lg text-gray-700 dark:text-gray-200">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
