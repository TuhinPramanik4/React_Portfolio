import React from 'react';
import { motion } from 'framer-motion';

function Intro() {
  return (
    <div className='w-full min-h-screen bg-[#121212] text-white text-4xl md:text-6xl overflow-hidden'>
      {/* Navbar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
        className="Navbar w-full h-[10vh] md:h-[12vh] flex justify-center items-center px-4 md:px-0"
      >
        <div className="w-full md:w-2/3 h-full flex justify-center items-center">
          <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-2xl font-semibold">
            {['Intro', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                whileHover={{ scale: 1.1, color: '#3b82f6' }}
                className="transition-all cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="Intro_content h-auto flex flex-col items-center px-4 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="image_and_name w-full flex flex-col md:flex-row items-center py-8 gap-8"
        >
          <div className="image w-full md:w-1/2 flex justify-center items-center">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.8 }}
              className="max-w-[300px] md:max-w-[500px] rounded-xl shadow-lg" 
              src="https://cdn.dribbble.com/userupload/24058799/file/original-41bb8930f02fb011f910848a3dd0b254.png?resize=1024x768&vertical=center" 
              alt="Profile" 
            />
          </div>
          <div className="Nameee w-full md:w-1/2 flex flex-col justify-center items-center gap-4 mt-6 md:mt-0 text-center">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }}
              className='text-5xl md:text-7xl font-bold'
            >
              Meet !!!!
            </motion.h1>
            <motion.h1 
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }}
              className='text-4xl md:text-6xl font-bold'
            >
              Tuhin Pramanik
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              className='text-2xl md:text-4xl'
            >
              Full Stack Developer
            </motion.h1>
          </div>
        </motion.div>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="Role_and_Buttons w-full flex flex-col justify-center items-center pb-10"
        >
          <div className="Buttons flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "#contact"} 
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl text-lg shadow-lg transition-all hover:bg-blue-700"
            >
              Contact Me
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl text-lg shadow-lg transition-all hover:bg-blue-700"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
