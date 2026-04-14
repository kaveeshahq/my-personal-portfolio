import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experienceData = [
  {
    id: 1,
    position: "Associate Software Engineer",
    company: "Affno Asia Pacific (Pvt) Ltd",
    type: "Full-time",
    duration: "Mar 2025 - Present",
    location: "Remote",
    description:
      "Contributing to full-stack development projects, building scalable web applications using React, Node.js, and MongoDB.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
  {
    id: 2,
    position: "Software Engineer Intern",
    company: "Affno Asia Pacific (Pvt) Ltd",
    type: "Internship",
    duration: "Aug 2024 - Mar 2025",
    location: "On-site",
    description:
      "Developed and maintained full-stack web applications. Collaborated with senior developers to implement new features and improve application performance.",
    skills: ["React.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    id: 3,
    position: "Mathematics Tutor",
    company: "INDIVIDUALS",
    type: "Part-time",
    duration: "Oct 2020 - May 2023",
    location: "Kalutara District, Western Province, Sri Lanka",
    description:
      "Provided comprehensive mathematics tutoring to secondary and A/L students, helping them improve their academic performance.",
    skills: ["Communication", "Problem Solving", "Teaching", "Mentoring"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-[#F0F3FA] to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#638ECB] font-semibold tracking-wider text-sm mb-2">
            MY JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#395886]">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#638ECB] to-[#8AAEE0] mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#638ECB] to-[#8AAEE0]"></div>

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex ${
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                  }`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-[#638ECB] hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <FiBriefcase className="text-[#638ECB]" size={20} />
                      <span className="inline-block bg-[#B1C9EF]/30 px-3 py-1 rounded-full text-xs font-semibold text-[#395886]">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#395886] mb-2">
                      {job.position}
                    </h3>
                    <p className="text-[#638ECB] font-semibold mb-2">
                      {job.company}
                    </p>

                    <div className="flex flex-col gap-2 mb-4 text-sm text-[#395886] opacity-75">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        {job.location}
                      </div>
                    </div>

                    <p className="text-[#638ECB] mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block bg-[#D5DEEF] text-[#395886] text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:col-span-2 justify-center">
                  <div className="w-4 h-4 bg-[#638ECB] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
