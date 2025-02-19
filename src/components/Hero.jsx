import { motion } from "framer-motion";
import '../styles/Hero.css';

const Hero = () => {
  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section h-screen flex items-center justify-center text-white relative">
      <motion.div
        className="text-center px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#D35400] animate-pulse">
          Zild John Lloyd Abule
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300">
          Web Developer & Designer
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-[#D35400] text-black rounded-lg font-medium hover:bg-[#A04000] transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScroll}
        >
          View More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
