import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
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
      icon: <FaLinkedin />
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/kaveeshahq/",
      icon: <FaFacebook />
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/kaveeshahq/",
      icon: <FaInstagram />
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative py-20 bg-gradient-to-b from-[#30052F] to-[#100210]"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#5E0A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#FF69B4]/5 rounded-full blur-3xl"></div>
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
            Get In Touch
          </h2>
          <h3 className="text-4xl font-bold mt-2 mb-6 text-white">
            <span className="relative inline-block">
              Contact Me
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4]"></span>
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, job opportunities,
            or just a friendly chat!
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-black/30 p-8 backdrop-blur-sm rounded-xl border border-white/10 mb-8"
          >
            <h4 className="text-xl font-semibold text-white mb-6">
              Contact Information
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
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
                  className="flex items-center group w-full md:w-auto"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#5E0A5C]/20 to-[#FF69B4]/20 border border-white/5 group-hover:border-white/20 transition-all duration-300">
                    <span className="text-[#5E0A5C] group-hover:text-white transition-colors duration-300">
                      {info.icon}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">{info.title}</p>
                    <p className="text-white group-hover:text-[#5E0A5C] transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-black/30 p-8 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <h4 className="text-xl font-semibold text-white mb-6">
              Social Profiles
            </h4>
            <div className="flex flex-wrap justify-center gap-8">
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
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#5E0A5C]/20 to-[#FF69B4]/20 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-110">
                    <span className="text-2xl text-[#5E0A5C] group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;