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

//skill-tabs

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContent.forEach(tabContents => tabContents.classList.remove('skills-active'));
        target.classList.add('skills-active');
        tabs.forEach(t => t.classList.remove('skills-active'));
        tab.classList.add('skills-active');
    });
});

//Skill-render

// Función que maneja la inicialización
function initializeSkillsRender() {

    const container = document.querySelector("#competenciasDesktop .skills-container");
    const cardsContainer = document.querySelector("#competenciasDesktop .cards-container");

    if (!container || !cardsContainer) {
        console.error("Contenedor no encontrado");
        return;
    }

    // Verificar que skills existe
    if (typeof skills === 'undefined') {
        console.error("Variable 'skills' no está definida");
        return;
    }

    // Crear cursor de luz SIEMPRE (no solo en desktop)
    let cursorLight;
    cursorLight = document.createElement("div");
    cursorLight.className = "cursor-light";
    document.body.appendChild(cursorLight);

    // Detectar cuando el mouse entra/sale del área de skills
    container.addEventListener("mouseenter", () => {
        cursorLight.style.display = "block";
        container.classList.add("cursor-active"); // Añadir clase para activar CSS
    }, { passive: true });
    
    container.addEventListener("mouseleave", () => {
        cursorLight.style.display = "none";
        container.classList.remove("cursor-active"); // Remover clase
    }, { passive: true });

    // Throttle mousemove para mejor rendimiento
    let ticking = false;
    document.addEventListener("mousemove", (e) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                cursorLight.style.left = `${e.clientX}px`;
                cursorLight.style.top = `${e.clientY}px`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Optimizar la creación de cards
    function createCard(skill) {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.style.setProperty("--glow-color", skill.color);

        const glowDuration = 3 + Math.random() * 4;
        const glowDelay = Math.random() * -5;

        card.style.setProperty("--glow-duration", `${glowDuration}s`);
        card.style.setProperty("--glow-delay", `${glowDelay}s`);

        card.innerHTML = `
            <div class="skill-content">
                <img class="card-image" src="${skill.image}" alt="${skill.name}" loading="lazy">
                <div class="skill-name">${skill.name}</div>
            </div>
        `;

        // Añadir eventos para intensificar el cursor en cada card individual
        card.addEventListener("mouseenter", () => {
            cursorLight.classList.add("super-bright");
            card.classList.add("card-hovered");
        }, { passive: true });
        
        card.addEventListener("mouseleave", () => {
            cursorLight.classList.remove("super-bright");
            card.classList.remove("card-hovered");
        }, { passive: true });

        card.addEventListener("click", () => {
            window.open(skill.url, "_blank", "noopener,noreferrer");
        });

        return card;
    }

    // Optimizar la inicialización de cards
    function initializeCards() {
        // Limpiar contenedor
        cardsContainer.innerHTML = "";
        const fragment = document.createDocumentFragment();

        // Reducir el número de cards en móvil
        const iterations = window.innerWidth <= 768 ? 2 : 3;

        for (let i = 0; i < iterations; i++) {
            skills.forEach((skill) => {
                const card = createCard(skill);
                fragment.appendChild(card);
            });
        }

        cardsContainer.appendChild(fragment);
    }

    // Ejecutar inicialización
    initializeCards();

    // Optimizar la animación de scroll
    let scrollPosition = 0;
    const scrollSpeed = window.innerWidth <= 768 ? 3 : 6; // Más rápido en ambos

    // Calcular ancho de card
    const cardWidthValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--card-width")) || 120;
    const cardSpacingValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--card-spacing")) || 20;
    const cardWidth = skills.length * (cardWidthValue + cardSpacingValue);

    let animationFrame;
    function animate() {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= cardWidth) {
            scrollPosition = 0;
        }
        cardsContainer.style.transform = `translateX(-${scrollPosition}px)`;
        animationFrame = requestAnimationFrame(animate);
    }

    // Iniciar animación solo si es visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                    animationFrame = null;
                }
            }
        });
    });

    observer.observe(container);

    // Limpiar al desmontar
    return () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        observer.disconnect();
        // Limpiar cursor al desmontar
        if (cursorLight && cursorLight.parentNode) {
            cursorLight.parentNode.removeChild(cursorLight);
        }
    };
}

// Ejecutar la inicialización de manera robusta
if (document.readyState === 'loading') {
    // DOM aún no está listo
    document.addEventListener('DOMContentLoaded', initializeSkillsRender);
} else {
    // DOM ya está listo
    initializeSkillsRender();
}

// Test de diagnóstico (solo para debugging)
// REMOVER ESTO EN PRODUCCIÓN

/*
console.log("🔧 Ejecutando tests de diagnóstico...");

// Test de ruta simple
const testImg = new Image();
testImg.onload = () => console.log("✅ Test imagen: OK");
testImg.onerror = () => console.log("❌ Test imagen: ERROR");
testImg.src = "/Assets/imagenes-habilidades/bootstrap.avif";

// Test de disponibilidad de elementos (ejecutar después de DOM ready)
setTimeout(() => {
    console.log("🧪 Test de elementos disponibles:");
    const container = document.querySelector("#competenciasDesktop .cards-container");
    console.log("- Container:", container ? "✅" : "❌");
    console.log("- Skills:", typeof skills !== 'undefined' ? "✅" : "❌");
    
    if (container && typeof skills !== 'undefined') {
        console.log("- Container children:", container.children.length);
        console.log("- Container HTML length:", container.innerHTML.length);
    }
}, 1000);

*/