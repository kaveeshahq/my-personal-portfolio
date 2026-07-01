import { FiLayout, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLock,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiGreensock,
} from "react-icons/si";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: FiLayout,
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3 / SCSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "ASP.NET", icon: SiDotnet },
      { name: "REST APIs", icon: FaCode },
      { name: "Authentication", icon: FaLock },
    ],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools",
    icon: FiTool,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "GSAP", icon: SiGreensock },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
