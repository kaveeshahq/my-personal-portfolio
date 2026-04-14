import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNode,
  FaGithub,
  FaDatabase,
  FaCode,
  FaLock,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostgresql,
  SiGo,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const getSkillIcon = (name) => {
  const iconProps = { size: 32, color: "#395886" };
  const iconMap = {
    "React.js": <FaReact {...iconProps} />,
    "Next.js": <SiNextdotjs {...iconProps} />,
    Angular: <SiAngular {...iconProps} />,
    "Tailwind CSS": <SiTailwindcss {...iconProps} />,
    JavaScript: <SiJavascript {...iconProps} />,
    "Node.js": <FaNode {...iconProps} />,
    "Express.js": <SiExpress {...iconProps} />,
    "ASP.NET": <SiDotnet {...iconProps} />,
    "REST APIs": <FaCode {...iconProps} />,
    Authentication: <FaLock {...iconProps} />,
    MongoDB: <SiMongodb {...iconProps} />,
    MySQL: <SiMysql {...iconProps} />,
    Firebase: <SiFirebase {...iconProps} />,
    SQL: <SiPostgresql {...iconProps} />,
    "Git/GitHub": <FaGithub {...iconProps} />,
    Go: <SiGo {...iconProps} />,
    Postman: <SiPostman {...iconProps} />,
    "VS Code": <FaCode {...iconProps} />,
    Figma: <SiFigma {...iconProps} />,
  };
  return iconMap[name];
};

const skills = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Angular" },
  { name: "Tailwind CSS" },
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "ASP.NET" },
  { name: "REST APIs" },
  { name: "Authentication" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "Firebase" },
  { name: "SQL" },
  { name: "Git/GitHub" },
  { name: "Go" },
  { name: "Postman" },
  { name: "VS Code" },
  { name: "Figma" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#638ECB] font-semibold tracking-wider text-sm mb-2">
            MY EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#395886]">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#638ECB] to-[#8AAEE0] mx-auto mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="group flex flex-col items-center justify-center p-6 rounded-lg bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] border border-[#B1C9EF]/50 cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-3 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-lg">
                {getSkillIcon(skill.name)}
              </div>
              <span className="text-center text-sm font-semibold text-[#395886] group-hover:text-[#638ECB] transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#395886] to-[#638ECB] rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg opacity-90">
            I'm constantly exploring new technologies and best practices to stay
            at the forefront of web development. Currently focusing on advanced
            Next.js patterns, microservices, and cloud infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
