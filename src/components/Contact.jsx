import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "kaveeshahiran3011@gmail.com",
      link: "mailto:kaveeshahiran3011@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+94 76 63 65 729",
      link: "tel:+94766365729",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "https://maps.app.goo.gl/W6tffUmraZZmbotQA",
    },
  ];

  const socialProfiles = [
    {
      name: "GitHub",
      link: "https://github.com/kaveeshahq",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kaveeshahq/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#395886] to-[#638ECB]"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-[#D5DEEF] font-semibold mb-2">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Let's Work Together
          </h3>
          <div className="w-24 h-1 bg-[#F0F3FA] mx-auto mt-4"></div>
          <p className="text-[#D5DEEF] max-w-2xl mx-auto mt-6 text-lg">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about web development!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: false }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 text-center h-full">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">{info.icon}</span>
                  </div>
                  <p className="text-sm text-[#D5DEEF] mb-2">{info.title}</p>
                  <p className="text-white font-semibold text-sm">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center"
          >
            <h4 className="text-xl font-bold text-white mb-8">
              Connect With Me
            </h4>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {socialProfiles.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: false }}
                  className="group"
                >
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white/20 hover:bg-white hover:scale-110 transition-all duration-300 border border-white/30 hover:border-white">
                    <span className="text-2xl text-white group-hover:text-[#395886] transition-colors duration-300">
                      {social.icon}
                    </span>
                  </div>
                  <p className="text-xs text-center mt-2 text-[#D5DEEF] group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="mailto:kaveeshahiran3011@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: false }}
              className="inline-block px-10 py-4 bg-white text-[#395886] font-bold rounded-lg hover:bg-[#D5DEEF] transition-all duration-300 text-lg"
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-[#D5DEEF] text-sm">
            © 2025 Kaveesha Dissanayake. All rights reserved.
          </p>
          <p className="text-[#D5DEEF] text-sm mt-2">
            Built with React, Node.js, and a passion for great code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
