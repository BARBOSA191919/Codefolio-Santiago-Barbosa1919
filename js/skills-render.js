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

    // Crear cursor de luz solo si no es móvil
    let cursorLight;
    if (window.innerWidth > 768) {
        cursorLight = document.createElement("div");
        cursorLight.className = "cursor-light";
        document.body.appendChild(cursorLight);

        container.addEventListener("mouseenter", () => {
            cursorLight.style.display = "block";
        }, { passive: true });
        container.addEventListener("mouseleave", () => {
            cursorLight.style.display = "none";
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
    }

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
    const scrollSpeed = window.innerWidth <= 768 ? 1 : 2; // Velocidad más lenta en móvil

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