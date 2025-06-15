import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaSchool } from 'react-icons/fa';


const Education = () => {
  const educationData = [
    {
      degree: "B. Tech in CSE",
      period: "2021-2025",
      score: "Score - 73%",
      description: "Bachelor of Technology in Computer Science and Fundamentals",
    //   icon: <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 text-xl" />
    },
    {
      degree: "Senior Secondary",
      period: "2020-2021",
      score: "Score - 73%",
      description: "12th Grade in Science Stream",
    //   icon: <FaBook className="text-indigo-600 dark:text-indigo-400 text-xl" />
    },
    {
      degree: "High School",
      period: "2019-2020",
      score: "Score - 75%",
      description: "10th Grade",
    //   icon: <FaSchool className="text-indigo-600 dark:text-indigo-400 text-xl" />
    }
  ];

  return (
    <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Timeline with Alternating Entries */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-300 dark:bg-indigo-700/50"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                {/* Timeline Dot */}
                {/* <div className={`absolute top-5 ${index % 2 === 0 ? '-left-3' : '-right-3'} w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 flex items-center justify-center z-10`}>
                  {edu.icon}
                </div> */}

                {/* Education Card */}
                <div className={`w-full md:w-5/12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'mr-2' : 'ml-2'}`}>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {edu.score}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Education;