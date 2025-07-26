import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import image1 from "../project-images/ecommerce-1.png";
import image2 from "../project-images/ecommerce-2.png";
import image3 from "../project-images/ecommerce-3.png";
import image4 from "../project-images/ecommerce-4.png";
import image5 from "../project-images/ecommerce-5.png";
import image6 from "../project-images/url-shortner-1.png";
import image7 from "../project-images/url-shortner-2.png";
import image8 from "../project-images/url-shortner-3.png";
import image9 from "../project-images/url-shortner-4.png";
import image10 from "../project-images/url-shortner-5.png";
import image11 from "../project-images/url-shortner-6.png";
import image12 from "../project-images/url-shortner-7.png";
import image13 from "../project-images/img1.png";
import image14 from "../project-images/img2.png";
import image15 from "../project-images/img3.png";
import image16 from "../project-images/Estate1.png";
import image17 from "../project-images/Estate2.png";
import image18 from "../project-images/Estate3.png";
import image19 from "../project-images/Estate4.png";
const Projects = () => {
  const projects = [
    {
      title: "URL Shortener Web Application",
      github: "https://github.com/pp923014/URL_SHORTNER",
      description:
        "Built a fully functional URL shortener that converts long URLs into short, shareable links.",
      features: [
        "Created a backend using Node.js and Express.js to handle URL shortening, redirection, and analytics",
        "Used Nano ID to create random 7-character short URLs",
        "Implemented validation logic to ensure custom slugs are unique",
      ],
      techStack: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS"],
      images: [image15, image14, image13],
    },
    {
      title: "ShivaFashion - E-Commerce Platform",
      github: "https://github.com/pp923014/E-Commerce",
      description:
        "Implemented product search and advanced filtering functionality to enhance user browsing experience.",
      features: [
        "Designed shopping cart system allowing users to add/remove products",
        "Built admin dashboard for product/order management with JWT authentication",
        "Integrated multiple payment options including Stripe and Cash on Delivery",
      ],
      techStack: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS"],
      images: [image1, image2, image3, image4, image5],
    },
    {
      title: "Internship Management Platform",
      github: "https://github.com/pp923014/Internship-Managment-Platform",
      description:
        "Built a Platform where users can Apply for internships by submitting their details.",
      features: [
        "Enabled admin functionalities to manage internships",
        "Update certificate numbers and edit content sections",
        "Admin panels for 'What we offer' and 'Available Internships'",
      ],
      techStack: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS"],
      images: [image12, image6, image7, image8, image9, image10, image11],
    },
    {
      title: "Real Estate Web Application",
      github: "https://frontend-real-state.vercel.app/",
      description:
        "React.js and Tailwind CSS. Users can explore property listings with smooth navigation and clean design. ",
        features: [
        "Enabled admin functionalities to manage internships",
        "Update certificate numbers and edit content sections",
        "Admin panels for 'What we offer' and 'Available Internships'",
      ],
      techStack: ["JavaScript", "React.js", "Tailwind CSS"],
      images: [image16, image17, image18, image19],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
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
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of my recent work and contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                {project.images && project.images.length > 0 && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FiExternalLink /> Show
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Image Slider */}
              <div className="relative h-64 md:h-96 bg-gray-100 dark:bg-gray-700">
                {selectedProject.images &&
                  selectedProject.images.length > 0 && (
                    <>
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-contain"
                      />
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                      >
                        <FiChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                      >
                        <FiChevronRight size={24} />
                      </button>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                              currentImageIndex === index
                                ? "bg-white"
                                : "bg-white bg-opacity-50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">
                          •
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                  >
                    <FiGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
