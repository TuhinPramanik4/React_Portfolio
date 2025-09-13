import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <motion.div 
                className="bg-gray-800 p-12 rounded-2xl shadow-lg text-center max-w-lg w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold mb-6">Contact Tuhin</h1>
                <div className="flex justify-center space-x-8">
                    <a 
                        href="https://github.com/TuhinPramanik4" 
                        target="_blank" 
                        className="text-gray-300 hover:text-white text-4xl"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/tuhinpramanik/" 
                        target="_blank" 
                        className="text-blue-400 hover:text-white text-4xl"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
