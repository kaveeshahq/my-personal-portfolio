import vitae from "@/assets/vitae.png";
import forever from "@/assets/forever.png";
import blog from "@/assets/blog.png";
import movie from "@/assets/movie.png";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "VitaeXtract",
    description:
      "An AI-powered web app that automates CV processing for recruiters — parsing, ranking and surfacing the strongest candidates in seconds.",
    image: vitae,
    tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/kaveeshahq",
    live: "https://vitaextract.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Forever — E-Commerce",
    description:
      "A full-featured e-commerce platform with a strong focus on smooth checkout and delightful user experience.",
    image: forever,
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/kaveeshahq/e-commerce-app",
  },
  {
    id: 3,
    title: "Blogger — Blog Platform",
    description:
      "A Next.js & MongoDB blog app with authentication, letting subscribers create and edit posts while enabling public reading.",
    image: blog,
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/kaveeshahq/blog-app",
  },
  {
    id: 4,
    title: "Movie Finder",
    description:
      "A React 19 app using Tailwind CSS & Appwrite to explore and track trending movies in real time.",
    image: movie,
    tags: ["React", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/kaveeshahq/react-19",
    live: "https://moviefinder-kaveeshahq.netlify.app/",
  },
];
