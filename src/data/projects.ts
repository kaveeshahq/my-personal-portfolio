import vitae from "@/assets/Screenshot 2026-07-01 155141.png";
import forever from "@/assets/Screenshot 2026-06-17 181846.png";
import blog from "@/assets/Screenshot 2026-07-01 160814.png";
import movie from "@/assets/Screenshot 2026-07-01 161056.png";
import task from "@/assets/Screenshot 2026-07-01 160233.png";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Celebrateit",
    description:
      "Designed and developed a full stack e-commerce platform for gifts, flowers, and cakes using modern web technologies, featuring user authentication, product and inventory management, shopping cart functionality, secure online payments, and an admin panel for order and content management.",
    image: vitae,
    tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/kaveeshahq",
    live: "www.celebrateit.lk",
    featured: true,
  },
  {
    id: 2,
    title: "Smart SME Management System⁠",
    description:
      "Developed a full-stack ERP system for small businesses to centralize HR, inventory, POS, and financial tracking. Built with Next.js 16 and Recharts for analytics, featuring role-based authentication and integrated AI SDKs for smart business insights.",
    image: forever,
    tags: ["Next.js", "MSSQL", "TypeScript", "Azure"],
    github: "https://github.com/kaveeshahq/smart-sme",
    live: "https://smart-sme-one.vercel.app/",
  },
  {
    id: 3,
    title: "Hello-Doc",
    description:
      "Hello-Doc is a healthcare web application that allows users to conveniently book doctor appointments, manage health records, and access medical services online. It focuses on improving patient–doctor interaction by providing an easy-to-use interface, secure record management, and seamless appointment scheduling.",
    image: blog,
    tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/kaveeshahq/hello-doc",
    live: "https://hello-doconline.netlify.app/",
  },
  {
    id: 4,
    title: "Project Management Tool",
    description:
      "Developed a full-stack Project Management Application enabling workspace creation, project organization, task management, and team collaboration.",
    image: movie,
    tags: ["React", "Redux", "Express", "PostgreSQL"],
    github: "https://github.com/kaveeshahq/project-management-tool",
    live: "https://project-mgt-sepia.vercel.app/",
  },
  {
id: 5,
    title: "Task Management App",
    description:
      "A full-stack task management application with user authentication, allowing users to create, edit, and delete tasks, as well as organize them into categories.",
    image: task,
    tags: ["React", "Zustand", "Node.js", "MySQL"],
    github: "https://github.com/kaveeshahq/task-mgt-assignment",
    live: "https://task-mgt-assignment.vercel.app/login",
  },
];
