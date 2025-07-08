import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
}

export const modalProjects: Project[] = [
  {
    id: 1,
    title: "Modern Dashboard",
    description: "A sleek and intuitive dashboard interface built with React and TypeScript.",
    image: project1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details: "This dashboard features real-time data visualization, responsive design, and modern UI components. Built with performance in mind, it includes advanced filtering, sorting, and customizable widgets for a complete user experience."
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "Beautiful mobile application with smooth animations and modern UX.",
    image: project2,
    technologies: ["React Native", "Redux", "Styled Components", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details: "A cross-platform mobile application featuring seamless user experience, offline functionality, and real-time synchronization. The app includes user authentication, push notifications, and social features."
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured online shopping platform with payment integration.",
    image: project3,
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details: "Complete e-commerce solution with product catalog, shopping cart, payment processing, and admin dashboard. Features include inventory management, order tracking, and customer reviews system."
  }
];

export const pageProjects: Project[] = [
  {
    id: 4,
    title: "Creative Portfolio",
    description: "An artistic portfolio website showcasing creative work and projects.",
    image: project4,
    technologies: ["Vue.js", "Three.js", "GSAP", "Netlify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details: "An immersive portfolio experience featuring 3D animations, smooth transitions, and creative layouts. Built to showcase artistic work with attention to visual storytelling and user engagement."
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description: "Comprehensive data visualization and analytics platform.",
    image: project5,
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details: "Advanced analytics platform with real-time data processing, interactive charts, and custom reporting tools. Features machine learning insights and predictive analytics capabilities."
  },
  {
    id: 6,
    title: "Social Platform",
    description: "Modern social media platform with real-time messaging and content sharing.",
    image: project6,
    technologies: ["React", "Socket.io", "Express", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details: "Full-featured social platform with real-time messaging, content feeds, user profiles, and social interactions. Includes video/image sharing, story features, and advanced privacy controls."
  }
];