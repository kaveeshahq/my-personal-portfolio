import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import vitae from "../assets/vitae.png";
import forever from "../assets/forever.png";
import blog from "../assets/blog.png";
import movie from "../assets/movie.png";

const projects = [
  {
    id: 1,
    title: "VitaeXtract",
    description:
      "An AI-powered web app that automates CV processing for recruiters",
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
    description:
      "Developed a Next.js & MongoDB blog app with user authentication, allowing subscribers to create/edit blogs while enabling public reading.",
    image: blog,
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/kaveeshahq/blog-app",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Movie Finder",
    description:
      "Developed MovieFinder, a React 19 app using Tailwind CSS & Appwrite to explore and track trending movies.",
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
    <section id="projects" className="min-h-screen relative py-24 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#638ECB] font-semibold tracking-wider text-sm mb-2">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#395886]">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#638ECB] to-[#8AAEE0] mx-auto mt-4"></div>
          <p className="text-[#638ECB] max-w-2xl mx-auto mt-6">
            Check out some of my recent work. Each project showcases my ability
            to build elegant, functional, and user-centered solutions.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl mx-auto relative">
            <motion.div
              key={projects[currentProject].id}
              animate={controls}
              initial={{ opacity: 1, x: 0 }}
              className="w-full"
            >
              <div className="group hover:shadow-2xl transition-all duration-500 w-full bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#D5DEEF]">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#395886]/20 to-transparent opacity-40"></div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 text-[#395886]">
                        {projects[currentProject].title}
                      </h3>
                      <p className="text-[#638ECB] mb-6 text-lg leading-relaxed">
                        {projects[currentProject].description}
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {projects[currentProject].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#D5DEEF] text-[#395886] rounded-full text-sm font-semibold"
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
                          className="flex items-center space-x-2 px-5 py-3 bg-[#F0F3FA] text-[#395886] rounded-lg hover:bg-[#D5DEEF] transition-all duration-300 font-semibold"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                        {projects[currentProject].link && (
                          <a
                            href={projects[currentProject].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-[#638ECB] to-[#8AAEE0] text-white rounded-lg hover:opacity-90 transition-all duration-300 font-semibold"
                          >
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4 pointer-events-none">
              <button
                onClick={prevProject}
                className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#395886] rounded-full hover:bg-[#638ECB] hover:text-white shadow-lg transition-all duration-300 pointer-events-auto"
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
                className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#395886] rounded-full hover:bg-[#638ECB] hover:text-white shadow-lg transition-all duration-300 pointer-events-auto"
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
                  index === currentProject ? "bg-[#638ECB] w-8" : "bg-[#D5DEEF]"
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
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#395886] text-white font-bold rounded-lg hover:bg-[#638ECB] transition-all duration-300"
          >
            <FaGithub />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
