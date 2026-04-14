import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#F0F3FA]/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer font-bold text-xl hover:text-[#395886] transition-colors"
        >
          <span className="bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent text-2xl font-bold">
            {"</"}
          </span>
          <span
            className={`${scrolled ? "text-[#395886]" : "text-[#395886]"} transition-colors`}
          >
            kaveeshahq
          </span>
          <span className="bg-gradient-to-r from-[#638ECB] to-[#395886] bg-clip-text text-transparent text-2xl font-bold">
            {">"}
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${scrolled ? "text-[#395886]" : "text-white"} focus:outline-none transition-colors`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-all hover:scale-105 ${scrolled ? "text-[#395886] hover:text-[#638ECB]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-all hover:scale-105 ${scrolled ? "text-[#395886] hover:text-[#638ECB]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-all hover:scale-105 ${scrolled ? "text-[#395886] hover:text-[#638ECB]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-all hover:scale-105 ${scrolled ? "text-[#395886] hover:text-[#638ECB]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            Skills
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-all hover:scale-105 ${scrolled ? "text-[#395886] hover:text-[#638ECB]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            Certifications
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`cursor-pointer transition-all hover:scale-105 ${scrolled ? "text-[#395886] hover:text-[#638ECB]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            Contact
          </Link>
        </div>

        {/* Social links */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/kaveeshahq/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all hover:scale-125 ${scrolled ? "text-[#638ECB] hover:text-[#395886]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/kaveeshahq"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all hover:scale-125 ${scrolled ? "text-[#638ECB] hover:text-[#395886]" : "text-[#395886] hover:text-[#638ECB]"}`}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-[#F0F3FA]/95 backdrop-blur-sm transition-all duration-300 ${
          menuOpen
            ? "max-h-screen py-4 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#395886] hover:text-[#638ECB] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#395886] hover:text-[#638ECB] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#395886] hover:text-[#638ECB] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#395886] hover:text-[#638ECB] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#395886] hover:text-[#638ECB] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Certifications
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#395886] hover:text-[#638ECB] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex space-x-4 py-2">
            <a
              href="https://www.linkedin.com/in/kaveeshahq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#638ECB] hover:text-[#395886] transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/kaveeshahq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#638ECB] hover:text-[#395886] transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
