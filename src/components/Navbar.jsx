import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#30052F]/95 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer text-white font-bold text-xl hover:text-[#5E0A5C] transition-colors"
        >
          <span className="bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4] bg-clip-text text-transparent text-2xl">kaveesha-hq</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
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
          <Link to="home" smooth={true} duration={500} className="cursor-pointer text-white hover:text-[#FF69B4] transition-all hover:scale-105">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer text-white hover:text-[#FF69B4] transition-all hover:scale-105">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-white hover:text-[#FF69B4] transition-all hover:scale-105">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-white hover:text-[#FF69B4] transition-all hover:scale-105">
            Contact
          </Link>
        </div>

        {/* Social links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.facebook.com/kaveeshahq/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4267B2] transition-all hover:scale-125">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kaveeshahq/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0A66C2] transition-all hover:scale-125">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/kaveeshahq" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all hover:scale-125">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-[#30052F]/95 backdrop-blur-sm transition-all duration-300 ${
          menuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-[#FF69B4] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-[#FF69B4] py-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-[#FF69B4] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-[#FF69B4] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex space-x-4 py-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4267B2]">
              <FaFacebook size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0A66C2]">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;