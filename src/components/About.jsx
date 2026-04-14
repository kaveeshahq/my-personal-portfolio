import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiBriefcase, FiAward } from "react-icons/fi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#638ECB] font-semibold tracking-wider text-sm mb-2">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#395886]">
            A Passionate Full-Stack Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#638ECB] to-[#8AAEE0] mx-auto mt-4"></div>
        </motion.div>

        {/* Main Content */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-[#395886] mb-4">
                Hi, I'm Kaveesha Dissanayake
              </h3>
              <p className="text-lg text-[#638ECB] leading-relaxed">
                A dedicated and versatile Software Engineer with a strong
                passion for both backend and frontend development. I'm currently
                pursuing a B.Sc (Hons) in Computing & Information Systems at
                SUSL, combining academic excellence with practical industry
                experience.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-[#638ECB] leading-relaxed">
                I thrive in dynamic environments and quickly adapt to new
                technologies. My full-stack development expertise spans
                React.js, Node.js, Express.js, Next.js, JavaScript, MongoDB,
                MySQL, and more.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-[#638ECB] leading-relaxed">
                Beyond coding, I enjoy collaborating with teams to deliver
                impactful results and actively contributing to the tech
                community through organizations like the IEEE Student Branch and
                the Society of Computer Sciences at SUSL.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t-2 border-[#D5DEEF]"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-[#638ECB]">1.5+</p>
                <p className="text-sm text-[#395886] mt-2 font-medium">
                  Years Exp
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#638ECB]">8+</p>
                <p className="text-sm text-[#395886] mt-2 font-medium">
                  Tech Skills
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#638ECB]">10+</p>
                <p className="text-sm text-[#395886] mt-2 font-medium">
                  Projects
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Current Role */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-lg p-6 border border-[#B1C9EF]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#638ECB] rounded-lg flex items-center justify-center text-white">
                  <FiBriefcase size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#395886] text-lg mb-1">
                    Current Position
                  </h4>
                  <p className="text-[#638ECB] font-medium">
                    Associate Software Engineer
                  </p>
                  <p className="text-sm text-[#395886] opacity-75">
                    Affno Asia Pacific • Mar 2025 - Present
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Previous Experience */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-lg p-6 border border-[#B1C9EF]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8AAEE0] rounded-lg flex items-center justify-center text-white">
                  <FiCode size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#395886] text-lg mb-1">
                    Software Engineer Intern
                  </h4>
                  <p className="text-[#638ECB] font-medium">
                    Affno Asia Pacific
                  </p>
                  <p className="text-sm text-[#395886] opacity-75">
                    Aug 2024 - Mar 2025 • On-site
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-lg p-6 border border-[#B1C9EF]/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#B1C9EF] rounded-lg flex items-center justify-center text-white">
                  <FiAward size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#395886] text-lg mb-1">
                    Education
                  </h4>
                  <p className="text-[#638ECB] font-medium">
                    B.Sc (Hons) Computing & Information Systems
                  </p>
                  <p className="text-sm text-[#395886] opacity-75">
                    SUSL (Sri Lanka)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
