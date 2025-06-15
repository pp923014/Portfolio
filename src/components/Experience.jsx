import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaCodeBranch } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Shriprit Educational & IT Hub",
      location: "MP, India",
      period: "July 2024 – September 2024",
      bullets: [
        {
          icon: <FaLaptopCode className="text-indigo-500" />,
          text: "Developed and maintained responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)"
        },
        {
          icon: <FaUsers className="text-indigo-500" />,
          text: "Collaborated closely with cross-functional teams to design, implement, and deploy full-stack features, improving user engagement and interface functionality"
        },
        {
          icon: <FaCodeBranch className="text-indigo-500" />,
          text: "Worked collaboratively with a team using Git and GitHub"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              {/* Experience Header */}
              <motion.div
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/30 p-6 rounded-lg shadow-sm border border-indigo-100 dark:border-indigo-900/50 mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                    <p className="text-lg text-indigo-600 dark:text-indigo-400">
                      {exp.company} – {exp.location}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Experience Bullet Points */}
              <div className="space-y-4">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <motion.div
                    key={bulletIndex}
                    initial={{ opacity: 0, x: (bulletIndex % 2 === 0) ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * bulletIndex }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mt-1">
                      {bullet.icon}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{bullet.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;