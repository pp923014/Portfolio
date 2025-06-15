import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  // Skill categories data
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-indigo-600 dark:text-indigo-400 text-2xl" />,
      skills: ["C++", "JavaScript", "SQL", "C", "Java (Basic)"],
      color: "bg-indigo-100 dark:bg-indigo-900/30"
    },
    {
      title: "Frameworks/Technologies",
      icon: <FaServer className="text-purple-600 dark:text-purple-400 text-2xl" />,
      skills: ["Node.js", "Express.js", "React.js", "Tailwind CSS"],
      color: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-emerald-600 dark:text-emerald-400 text-2xl" />,
      skills: ["MySQL", "MongoDB"],
      color: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
      title: "Developer Tools",
      icon: <FaTools className="text-amber-600 dark:text-amber-400 text-2xl" />,
      skills: ["Git", "GitHub", "Postman", "Render", "VS Code", "Thunder Client"],
      color: "bg-amber-100 dark:bg-amber-900/30"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing applications and solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`rounded-xl p-6 ${category.color} border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Meter (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            My <span className="text-indigo-600 dark:text-indigo-400">Proficiency</span> Levels
          </h3>
          <div className="space-y-4">
            {[
              { skill: "JavaScript", level: "85%" },
              { skill: "React.js", level: "80%" },
              { skill: "Node.js", level: "75%" },
              { skill: "C++", level: "70%" },
              { skill: "MySQL", level: "65%" },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{item.skill}</span>
                  <span className="text-gray-500 dark:text-gray-400">{item.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                    style={{ width: item.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;