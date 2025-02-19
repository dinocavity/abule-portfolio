import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/img/profile.jpg" // Updated profile image path
          alt="Zild John Lloyd Abule"
          className="w-40 h-40 rounded-full mx-auto border-4 border-[#D35400] shadow-lg"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-[#D35400] mt-6">
          Zild John Lloyd Abule
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          I am a passionate Web Developer & Designer specializing in modern web technologies.
          With a strong background in *React, Node.js, and UI/UX design*, I create interactive 
          and user-friendly digital experiences. I enjoy transforming ideas into reality through
          clean code, minimalistic design, and efficient functionality. Constantly learning and 
          improving, I strive to build impactful projects that make a difference.
        </p>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/ZildMalik" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl md:text-3xl text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl md:text-3xl text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl md:text-3xl text-gray-400 hover:text-white transition duration-300" />
          </a>
        </div>

        <a
        href="/pdf/cv.pdf" // Corrected path to the CV
        download
        className="mt-6 inline-block px-6 py-3 bg-[#D35400] text-black rounded-lg font-medium hover:bg-[#A04000] transition-all duration-300 shadow-lg"
        >
        Download CV
        </a>

      </motion.div>
    </section>
  );
};

export default AboutMe;
