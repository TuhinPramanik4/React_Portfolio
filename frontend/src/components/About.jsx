import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-5 sm:p-10">
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6  p-6">
        {/* College and CGPA Box */}
        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-lg sm:text-xl font-bold">College & CGPA</h2>
          <p className="mt-2 text-sm sm:text-base">Sister Nivedita University</p>
          <p className="text-sm sm:text-base">CGPA: 8.35 ( Upto 2nd Semester )</p>
        </div>
        
        {/* Achievements Box */}
        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-lg sm:text-xl font-bold">Achievements</h2>
          <ul className="mt-2 list-disc pl-5 text-left text-sm sm:text-base">
            <li> 2nd position in Exathon Hackathon</li>
          </ul>
        </div>

        {/* Interests Box */}
        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-center sm:col-span-2 flex flex-col items-center">
          <h2 className="text-lg sm:text-xl font-bold">Interests</h2>
          <ul className="mt-2 list-disc pl-5 text-left text-sm sm:text-base">
            <li>Web & App Development</li>
            <li>Machine Learning</li>
          </ul>
        </div>

        {/* About Me Box */}
        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-center sm:col-span-2">
          <h2 className="text-lg sm:text-xl font-bold">About Me</h2>
          <p className="mt-2 text-sm sm:text-base text-left">
            I am a passionate software developer with a keen interest in problem-solving and building innovative solutions. I enjoy working on projects that impact people positively and have experience in full-stack web development, competitive programming, and AI research. Always eager to learn and take on new challenges!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;