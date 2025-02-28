import React from 'react';

function Intro() {
  return (
    <div className='w-full min-h-screen bg-[#121212] text-white text-4xl md:text-6xl'>
      {/* Navbar */}
      <div className="Navbar w-full h-[10vh] md:h-[12vh] flex justify-center items-center px-4 md:px-0">
  <div className="w-full md:w-2/3 h-full flex justify-center items-center">
    <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg font-semibold">
      <a href="#intro" className="hover:text-blue-400 transition-all">Intro</a>
      <a href="#About" className="hover:text-blue-400 transition-all">About</a>
      <a href="#skills" className="hover:text-blue-400 transition-all">Skills</a>
      <a href="#projects" className="hover:text-blue-400 transition-all">Projects</a>
      <a href="#freelance" className="hover:text-blue-400 transition-all">Freelance</a>
    </nav>
  </div>
</div>

      
      {/* Main Content */}
      <div className="Intro_content h-auto flex flex-col items-center px-4 gap-8">
        <div className="image_and_name w-full flex flex-col md:flex-row items-center py-8 gap-8">
          <div className="image w-full md:w-1/2 flex justify-center items-center">
            <img className="max-w-[300px] md:max-w-[500px] rounded-xl" 
                 src="https://cdn.dribbble.com/userupload/24058799/file/original-41bb8930f02fb011f910848a3dd0b254.png?resize=1024x768&vertical=center" 
                 alt="Profile" />
          </div>
          <div className="Nameee w-full md:w-1/2 flex flex-col justify-center items-center gap-4 mt-6 md:mt-0 text-center">
            <h1 className='text-5xl md:text-7xl font-bold'>Meet !!!!</h1>
            <h1 className='text-4xl md:text-6xl font-bold'>Tuhin Pramanik</h1>
            <h1 className='text-2xl md:text-4xl'>Full Stack Developer</h1>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="Role_and_Buttons w-full flex flex-col justify-center items-center pb-10">
          <div className="Buttons flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl text-lg shadow-lg transition-all hover:bg-blue-700 hover:scale-105">
              Contact Me
            </button>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl text-lg shadow-lg transition-all hover:bg-blue-700 hover:scale-105">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
