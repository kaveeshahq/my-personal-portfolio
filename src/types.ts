import type { IconType } from "react-icons";

export interface NavLink {
  id: string;
  label: string;
}

export interface Social {
  name: string;
  href: string;
  icon: IconType;
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Stat {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}
