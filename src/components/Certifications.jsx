import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiCalendar } from "react-icons/fi";

const certifications = [
  {
    id: 1,
    title: "Microservices Foundations",
    issuer: "LinkedIn Learning",
    date: "Mar 2026",
    skills: [
      "Microservices Architecture",
      "System Design",
      "Distributed Systems",
    ],
    icon: "🏆",
  },
  {
    id: 2,
    title: "Generative AI Working with Large Language Models",
    issuer: "LinkedIn Learning",
    date: "Feb 2026",
    skills: [
      "Generative AI",
      "Natural Language Processing (NLP)",
      "Large Language Models (LLM)",
    ],
    icon: "🤖",
  },
  {
    id: 3,
    title: "Software Quality Assurance BootCamp",
    issuer: "FSD Academy",
    date: "Mar 2025",
    skills: [
      "Software Quality Assurance",
      "Software Quality Management",
      "SDLC",
      "Manual Testing",
    ],
    icon: "✅",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-white to-[#F0F3FA]"
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
            CREDENTIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#395886]">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#638ECB] to-[#8AAEE0] mx-auto mt-4"></div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group bg-white rounded-lg p-8 border-2 border-[#D5DEEF] hover:border-[#638ECB] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D5DEEF] to-[#B1C9EF] rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <FiAward
                  className="text-[#638ECB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={24}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#395886] mb-2 group-hover:text-[#638ECB] transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-[#638ECB] font-semibold mb-3">{cert.issuer}</p>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-[#395886] opacity-75 mb-5 pb-5 border-b-2 border-[#D5DEEF]">
                <FiCalendar size={16} />
                {cert.date}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-[#D5DEEF] text-[#395886] text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-[#638ECB] group-hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative border */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#638ECB] to-transparent group-hover:h-full transition-all duration-300 rounded-l-lg"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[#638ECB] text-lg max-w-2xl mx-auto">
            Continuously learning and keeping up with the latest industry trends
            through professional development courses and certifications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
