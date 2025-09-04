export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Sistema de Facturación Electrónica",
    description: "Plataforma para gestionar facturas y ventas, desarrollada en Java, Spring Boot y MySQL.",
    image: "/Assets/Mockups/factus.avif",
    imageAlt: "Mockup del Sistema de Facturación Electrónica desarrollado en Java",
    technologies: ["fa-brands fa-java", "fa-brands fa-spring", "fa-solid fa-database", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Software-factus"
  },
  {
    title: "Gestión de Librería",
    description: "App web para administrar inventario y ventas de una librería, hecha con Php,Ajax, HTML5 y CSS3.",
    image: "/Assets/Mockups/libreria.avif",
    imageAlt: "Mockup del Sistema de Gestión para Librería desarrollado en PHP",
    technologies: ["fa-brands fa-php", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-solid fa-arrows-rotate", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Software-Libreria-P."
  },
  {
    title: "Gestión de Supermercado",
    description: "Solución integral para productos, ventas y clientes en supermercados, usando Java, Spring Boot y MySQL.",
    image: "/Assets/Mockups/supermercado.avif",
    imageAlt: "Mockup del Sistema de Gestión Integral de Supermercado desarrollado en Spring Boot",
    technologies: ["fa-brands fa-java", "fa-brands fa-spring", "fa-solid fa-database", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Software-supermercado-P./"
  },
  {
    title: "Gestión de Préstamos",
    description: "Herramienta para registrar y controlar préstamos personales, desarrollada con MySQL, Java, Html5 y Css3.",
    image: "/Assets/Mockups/prestamos.avif",
    imageAlt: "Mockup del Sistema de Gestión de Préstamos Personales desarrollado en PHP",
    technologies: ["fa-solid fa-database", "fa-brands fa-java", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Software-Prestamos-P."
  },
  {
    title: "Landing Page Tesla",
    description: "Página promocional responsiva inspirada en Tesla, creada en astro con Html, Tailwind, Css3 y JavaScript.",
    image: "/Assets/Mockups/Landing Tesla.avif",
    imageAlt: "Mockup de la Landing Page de Tesla desarrollada con HTML, CSS y JavaScript",
    technologies: ["fa-brands fa-js", "fa-brands fa-js-square", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-git-alt", "fa-solid fa-rocket"],
    githubUrl: "https://github.com/BARBOSA191919/Landing-Page-Tesla",
    demoUrl: "https://tesla-landi.netlify.app/"
  },
  {
    title: "Laboratorio Iberoamericana",
    description: "Landing page informativa para laboratorio clínico, desarrollada con Angular, TypeScript y CSS3.",
    image: "/Assets/Mockups/Landig laboratorio.avif",
    imageAlt: "Mockup del Laboratorio Iberoamericana desarrollado con Angular",
    technologies: ["fa-brands fa-angular", "fa-brands fa-js-square", "fa-brands fa-css3-alt", "fa-brands fa-html5", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Laboratorio-Angular",
    demoUrl: "https://laboratorio-angular.onrender.com/"
  },
  {
    title: "Landing Page GTA VI",
    description: "Página de lanzamiento ficticia para GTA VI, con animaciones modernas como Gsap, en Html5, Css3 y JavaScript.",
    image: "/Assets/Mockups/landing gtavi.avif",
    imageAlt: "Mockup de la Landing Page de GTAVI desarrollada con HTML, CSS y JavaScript",
    technologies: ["fa-brands fa-js", "fa-brands fa-js-square", "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-solid fa-gamepad", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Landing-GtaVi",
    demoUrl: "https://gta-vi-landing-page-rockstar.netlify.app/"
  },
  {
    title: "Landing Page Microfútbol",
    description: "Sitio web interactivo para registrar partidos de microfútbol, usando Html5, Css3 y JavaScript con Firebase.",
    image: "/Assets/Mockups/balon-interactivo.avif",
    imageAlt: "Mockup del balon-interactivo Iberoamericana desarrollado Firebase, Html,Css, JavaScript",
    technologies: ["fa-brands fa-angular", "fa-brands fa-js-square", "fa-brands fa-css3-alt", "fa-brands fa-html5", "fa-solid fa-fire", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Landing-Balon-interactivo",
    demoUrl: "https://balon-juego.web.app/"
  },
  {
    title: "React Challenge Aura LATAM",
    description: "Aplicación web para el reto técnico de Aura LATAM, construida con React, JavaScript y CSS3.",
    image: "/Assets/Mockups/React-Challenge-Aura-LATAM.avif",
    imageAlt: "Mockup de React Challenge Aura LATAM",
    technologies: ["fa-brands fa-react", "fa-brands fa-js", "fa-brands fa-js-square", "fa-brands fa-css3-alt", "fa-brands fa-html5", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/React-Challenge",
    demoUrl: "https://react-challenge-aura-latam.netlify.app/"
  },
  {
    title: "Organización React",
    description: "Aplicación para gestionar equipos y colaboradores, hecha con React, JavaScript y CSS3.",
    image: "/Assets/Mockups/Organización-React.avif",
    imageAlt: "Mockup de Organización React",
    technologies: ["fa-brands fa-react", "fa-brands fa-js", "fa-brands fa-js-square", "fa-brands fa-css3-alt", "fa-brands fa-html5", "fa-brands fa-git-alt"],
    githubUrl: "https://github.com/BARBOSA191919/Org-React",
    demoUrl: "https://org-react-pink.vercel.app/"
  }
];
