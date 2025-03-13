import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import vitae from "../assets/vitae.png"
import forever from "../assets/forever.png"
import blog from "../assets/blog.png"
import movie from "../assets/movie.png"

const projects = [
  {
    id: 1,
    title: "VitaeXtract",
    description: "An AI-powered web app that automates CV processing for recruiters",
    image: vitae,
    tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com",
    link: "https://vitaextract.netlify.app/",
  },
  {
    id: 2,
    title: "Forever E - Commerce Web Platform",
    description: "An e-commerce platform with a focus on user experience.",
    image: forever,
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/kaveeshahq/e-commerce-app",
  },
  {
    id: 3,
    title: "Blogger - Blog Posting Platform",
    description: "Developed a Next.js & MongoDB blog app with user authentication, allowing subscribers to create/edit blogs while enabling public reading.",
    image: blog,
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/kaveeshahq/blog-app",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Movie Finder",
    description: "Developed MovieFinder, a React 19 app using Tailwind CSS & Appwrite to explore and track trending movies.",
    image: movie,
    tags: ["React.js", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/kaveeshahq/react-19",
    link: "https://moviefinder-kaveeshahq.netlify.app/",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(null);
  const controls = useAnimation();

  const nextProject = () => {
    setDirection("right");
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection("left");
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const sequence = async () => {
      if (direction) {
        await controls.start({
          x: direction === "right" ? -100 : 100,
          opacity: 0,
          transition: { duration: 0.3 },
        });
        await controls.start({
          x: direction === "right" ? 100 : -100,
          opacity: 0,
          transition: { duration: 0 },
        });
        await controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.3 },
        });
      }
    };
    sequence();
  }, [currentProject, direction, controls]);

  return (
    <section
      id="projects"
      className="min-h-screen relative py-20 bg-gradient-to-b from-[#100210] to-[#30052F]"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#5E0A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#FF69B4]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-[#FF69B4]">
            My Work
          </h2>
          <h3 className="text-4xl font-bold mt-2 mb-6 text-white">
            <span className="relative inline-block">
              Featured Projects
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4]"></span>
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents my passion
            for creating elegant and functional solutions.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl mx-auto relative">
            <motion.div
              key={projects[currentProject].id}
              animate={controls}
              initial={{ opacity: 1, x: 0 }}
              className="w-full"
            >
              <div className="perspective-1000">
                <div className="group hover:scale-[1.02] transition-all duration-500 w-full bg-gradient-to-br from-[#30052F] to-[#100210] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform-gpu">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative overflow-hidden">
                      <img
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100210] to-transparent opacity-60"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 text-white">
                        {projects[currentProject].title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {projects[currentProject].description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {projects[currentProject].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#5E0A5C]/10 text-[#5E0A5C] rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={projects[currentProject].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-[#30052F] text-white rounded-lg hover:bg-[#5E0A5C] hover:text-[#100210] transition-all duration-300"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                        <a
                          href={projects[currentProject].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4] text-[#100210] font-bold rounded-lg hover:opacity-90 transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4">
              <button
                onClick={prevProject}
                className="w-12 h-12 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white rounded-full hover:bg-[#5E0A5C] hover:text-[#100210] transition-all duration-300"
                aria-label="Previous project"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white rounded-full hover:bg-[#5E0A5C] hover:text-[#100210] transition-all duration-300"
                aria-label="Next project"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentProject ? "right" : "left");
                  setCurrentProject(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? "bg-[#5E0A5C] w-6" : "bg-white/30"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/kaveeshahq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent border border-[#5E0A5C] text-white font-bold rounded-lg hover:bg-[#5E0A5C]/10 transition-all duration-300"
          >
            <FaGithub />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
