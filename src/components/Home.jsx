import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import image from '../assets/img.jpg'
const Home = () => {
  // Social links data
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/pp923014' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/priyanshukpandey' },
    { icon: <FaInstagram />, url: 'https://instagram.com/priyanshukpandey' },
    { icon: <FaEnvelope />, url: 'mailto:06priyanshupandey@gmail.com' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16">
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
            className="text-lg md:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
          >
            <span className="text-indigo-600 dark:text-indigo-400">Priyanshu Kumar Pandey</span>
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
            I create beautiful, responsive, and user-friendly web applications with modern technologies. Passionate about crafting exceptional digital experiences that make an impact.
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
            {/* <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:text-white rounded-lg font-medium transition-all duration-300"
            >
              Contact Me
            </a> */}
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

        {/* Image with Effects */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Gradient background circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 blur-xl opacity-20 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              {/* Replace this div with your actual image */}
              <div className="w-full h-full bg-blue-700 dark:bg-gray-700 flex items-center justify-center">
                <img src={image} alt="" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400/30 pointer-events-none animate-pulse"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-indigo-400/10 backdrop-blur-sm border border-indigo-400/20"
            ></motion.div>
            
            <motion.div
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-purple-400/10 backdrop-blur-sm border border-purple-400/20"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;