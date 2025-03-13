import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Categorized skills
const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "PHP", "C"]
  },
  {
    category: "Frameworks / Libraries",
    skills: ["Next.js", "React", "Express", "TailwindCSS"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Supabase"]
  },
  {
    category: "Tools",
    skills: ["BitBucket", "GitHub", "Vercel", "Selenium", "Postman", "Node"]
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Count total skills for stats
  const totalSkills = skillCategories.reduce((acc, category) => acc + category.skills.length, 0);

  return (
    <section
      id="about"
      className="min-h-screen relative py-20 bg-gradient-to-b from-[#30052F] to-[#100210] text-white"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5E0A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF69B4]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-[#FF69B4] inline-block">
            About Me
          </h2>
          <h3 className="text-4xl font-bold mt-2 mb-6">
            <span className="relative">
              Passionate Developer
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4]"></span>
            </span>
          </h3>
        </motion.div>
        
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left column - About text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col space-y-6 h-full"
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#30052F]/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 h-full flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-[#5E0A5C]/20 to-transparent rounded-full blur-md"></div>
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-gradient-to-tr from-[#FF69B4]/20 to-transparent rounded-full blur-md"></div>
              
              {/* Big highlight text */}
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h2 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Code. Create.
                </h2>
                <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF69B4] to-[#5E0A5C]">
                  Innovate.
                </h2>
              </motion.div>

              <div className="space-y-4 relative z-10">
                <motion.p variants={itemVariants} className="text-lg text-gray-300">
                  Hi, I'm <span className="text-white font-semibold">Kaveesha Dissanayake</span>, a passionate developer with expertise in
                  building modern web applications. I specialize in React.js , Express.js , Node.js
                  JavaScript, and Tailwind CSS, and I love creating user-friendly , fully functional
                  and visually appealing interfaces.
                </motion.p>

                <motion.p variants={itemVariants} className="text-lg text-gray-300">
                  When I'm not developing, I enjoy travelling and reading. Let's build
                  something amazing together!
                </motion.p>
                
                {/* Experience Timeline */}
                <motion.div variants={itemVariants} className="mt-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-1 h-4 bg-[#FF69B4] mr-2 rounded-full"></span>
                    Experience
                  </h4>
                  <div className="space-y-3 relative before:absolute before:left-1.5 before:top-1 before:bottom-1 before:w-0.5 before:bg-gray-600">
                    <div className="flex gap-3 ml-2">
                      <div className="mt-1 w-2 h-2 rounded-full bg-[#FF69B4] shrink-0"></div>
                      <div>
                        <p className="font-medium">Full Stack Developer Intern</p>
                        <p className="text-sm text-gray-400">Affno Asia Pacific Pvt Ltd • 2024 - 2025</p>
                      </div>
                    </div>
                    {/* <div className="flex gap-3 ml-2">
                      <div className="mt-1 w-2 h-2 rounded-full bg-[#FF69B4] shrink-0"></div>
                      <div>
                        <p className="font-medium">Frontend Developer</p>
                        <p className="text-sm text-gray-400">Company Name • 2020 - 2022</p>
                      </div>
                    </div> */}
                  </div>
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                    <span className="text-3xl font-bold text-[#FF69B4]">{totalSkills}</span>
                    <span className="text-sm mt-1">Skills</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                    <span className="text-3xl font-bold text-[#FF69B4]">2+</span>
                    <span className="text-sm mt-1">Years</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                    <span className="text-3xl font-bold text-[#FF69B4]">20+</span>
                    <span className="text-sm mt-1">Projects</span>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="flex space-x-6 mt-8">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4] text-white font-bold rounded-lg hover:transform hover:scale-105 transition-all duration-300 shadow-lg flex-1 text-center"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 bg-transparent border border-[#5E0A5C] text-white font-bold rounded-lg hover:bg-[#5E0A5C]/10 transition-all duration-300 flex-1 text-center"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#30052F]/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 h-full"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              My Technical Skills
            </motion.h3>

            <motion.div
              variants={categoryVariants}
              className="space-y-6"
            >
              {skillCategories.map((category) => (
                <motion.div key={category.category} variants={itemVariants} className="mb-4">
                  <h4 className="text-lg font-semibold mb-3 text-[#FF69B4] flex items-center">
                    <span className="w-1 h-4 bg-[#FF69B4] mr-2 rounded-full"></span>
                    {category.category}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        className="bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-all duration-300 border border-white/10 hover:border-[#5E0A5C]/40 text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-sm font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;