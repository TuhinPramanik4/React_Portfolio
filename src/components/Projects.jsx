import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-400">
      {/* Title Animation */}
      <motion.h1
        className="text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects Aren't Live Yet!
      </motion.h1>

      {/* GitHub Card */}
      <motion.div
        className="github_card w-80 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        {/* GitHub Image Placeholder */}
        <div className="w-full h-40 bg-gray-300 flex justify-center items-center rounded-lg mb-4">
          <span className="text-gray-800 text-4xl font-semibold">GitHub Preview</span>
        </div>

        {/* Show Projects Button */}
        <motion.a
          href="https://github.com/TuhinPramanik4"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-400 text-black text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Projects
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Projects;
