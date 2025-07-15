// Obtener la ruta base del proyecto
const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

// Función para generar la ruta correcta
function getImagePath(imageName) {
    return `${basePath}/Assets/imagenes-habilidades/${imageName}`;
}

const skills = [
    { color: "Bootstrap", image: getImagePath("bootstrap.avif"), url: "https://getbootstrap.com/docs/", name: "Bootstrap" },
    { color: "#3178c6", image: getImagePath("typescript.avif"), url: "https://www.typescriptlang.org/docs/", name: "TypeScript" },
    { color: "#1572b6", image: getImagePath("mysql.avif"), url: "https://dev.mysql.com/doc/", name: "MySQL" },
    { color: "#6db33f", image: getImagePath("springboot.avif"), url: "https://spring.io/projects/spring-boot", name: "Spring Boot" },
    { color: "#dd0031", image: getImagePath("angular.avif"), url: "https://angular.io/docs", name: "Angular" },
    { color: "#ff5e00", image: getImagePath("js.avif"), url: "https://developer.mozilla.org/es/docs/Web/JavaScript", name: "JavaScript" },
    { color: "#e34f26", image: getImagePath("html.avif"), url: "https://developer.mozilla.org/es/docs/Web/HTML", name: "HTML5" },
    { color: "#1572b6", image: getImagePath("css.avif"), url: "https://developer.mozilla.org/es/docs/Web/CSS", name: "CSS3" },
    { color: "#007396", image: getImagePath("java.avif"), url: "https://docs.oracle.com/en/java/", name: "Java" },
    { color: "#777bb4", image: getImagePath("php.avif"), url: "https://www.php.net/docs.php", name: "PHP" },
    { color: "#339933", image: getImagePath("node.avif"), url: "https://nodejs.org/docs/", name: "Node.js" },
    { color: "#ff5e00", image: getImagePath("astro.avif"), url: "https://docs.astro.build/", name: "Astro" },
    { color: "#f05032", image: getImagePath("git.avif"), url: "https://git-scm.com/doc", name: "Git" },
    { color: "#181717", image: getImagePath("github.avif"), url: "https://docs.github.com/", name: "GitHub" },
    { color: "#38b2ac", image: getImagePath("tailwind.avif"), url: "https://tailwindcss.com/docs", name: "Tailwind CSS" },
];