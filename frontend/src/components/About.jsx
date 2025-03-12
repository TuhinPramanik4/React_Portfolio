"use client";
import { motion } from "framer-motion";
import { Award, Lightbulb, User, GraduationCap } from "lucide-react";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex justify-center items-center p-5 sm:p-10">
      <motion.div
        className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl shadow-lg text-center"
          variants={itemVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          initial={{ rotate: -2 }}
          animate={{ rotate: 0 }}
        >
          <div className="flex justify-center mb-3">
            <motion.div
              className="bg-blue-500 p-3 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap size={24} />
            </motion.div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold">College & CGPA</h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <p className="mt-2 text-sm sm:text-base">Sister Nivedita University</p>
            <p className="text-sm sm:text-base font-semibold mt-1">CGPA: 8.35 (Upto 2nd Semester)</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-2xl shadow-lg text-center"
          variants={itemVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          initial={{ rotate: 2 }}
          animate={{ rotate: 0 }}
        >
          <div className="flex justify-center mb-3">
            <motion.div
              className="bg-indigo-500 p-3 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Award size={24} />
            </motion.div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Achievements</h2>
          <motion.ul
            className="mt-2 list-disc pl-5 text-left text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              2nd position in Exathon Hackathon
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl shadow-lg text-center sm:col-span-2"
          variants={itemVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-center mb-3">
            <motion.div
              className="bg-purple-500 p-3 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Lightbulb size={24} />
            </motion.div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Interests</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {["Web & App Development", "Machine Learning"].map((interest, index) => (
              <motion.div
                key={index}
                className="bg-purple-700 px-4 py-2 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#9333ea",
                }}
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-cyan-600 to-cyan-800 p-6 rounded-2xl shadow-lg sm:col-span-2"
          variants={itemVariants}
          whileHover="hover"
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex justify-center mb-3">
            <motion.div
              className="bg-cyan-500 p-3 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <User size={24} />
            </motion.div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-center">About Me</h2>
          <motion.p
            className="mt-4 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I am a passionate software developer with a keen interest in problem-solving and building innovative
            solutions. I enjoy working on projects that impact people positively and have experience in full-stack web
            development, competitive programming, and AI research. Always eager to learn and take on new challenges!
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
