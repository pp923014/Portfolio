import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import image from "../assets/img.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";

const Home = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/pp923014" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/priyanshukpandey" },
    { icon: <FaInstagram />, url: "https://instagram.com/priyanshukpandey" },
    { icon: <FaEnvelope />, url: "mailto:06priyanshupandey@gmail.com" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-16 py-16"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-2 mt-2"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
          >
            <span className="text-indigo-600 dark:text-indigo-400 text-large sm:text-2xl">
              Priyanshu Kumar Pandey
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            I create beautiful, responsive, and user-friendly web applications
            with modern technologies. Passionate about crafting exceptional
            digital experiences that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-300 dark:hover:shadow-indigo-700"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center lg:justify-start gap-4"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label={`Social link ${index}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Rectangle Image with Powerful Effects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center relative"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.05}
            transitionSpeed={1500}
            className="relative w-72 h-96 sm:w-96 sm:h-[30rem] max-w-full"
          >
            {/* Animated gradient background shape */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-indigo-400/30 via-purple-300/20 to-pink-300/40 blur-2xl opacity-40"
            ></motion.div>

            {/* Main image with glass and shimmer */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl group">
              {/* Optional glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-indigo-200/5 to-purple-100/10  z-10 pointer-events-none"></div>
              {/* Image */}
              <img
                src={img2}
                alt="Profile"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 z-0"
              />
              {/* Animated shimmer */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
              {/* Animated border glow */}
              <div className="absolute -inset-1 rounded-2xl border-2 border-indigo-400/40 animate-pulse pointer-events-none"></div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
