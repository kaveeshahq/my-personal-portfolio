import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { NavLink, Social } from "@/types";

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/kaveeshahq",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kaveeshahq/",
    icon: FaLinkedin,
  },
];
