const hamburger = document.querySelector(".bars__menu");
const navContent = document.querySelector(".nav-content");
const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const body = document.body;

// Toggle the menu and animations
function toggleMenu() {
  hamburger.classList.toggle("active");
  navContent.classList.toggle("active");
  body.classList.toggle("no-scroll");

  // Sync the hamburger icon animations
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
}

// Close the menu and reset animations
function closeMenu() {
  hamburger.classList.remove("active");
  navContent.classList.remove("active");
  body.classList.remove("no-scroll");

  // Reset the hamburger icon animations
  line1__bars.classList.remove("activeline1__bars-menu");
  line2__bars.classList.remove("activeline2__bars-menu");
  line3__bars.classList.remove("activeline3__bars-menu");
}

// Event listener for hamburger menu click
hamburger.addEventListener("click", toggleMenu);

/*---------------------------------------------------- */
/* Preloader
	------------------------------------------------------ */
$(window).load(function () {
  // will first fade out the loading animation
  $("#loader").fadeOut("slow", function () {
    // will fade out the whole DIV that covers the website.
    $("#preloader").delay(300).fadeOut("slow");
  });
});

//Script para las particulas
particlesJS("particles-js", {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#3f1078",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#cfcfcf",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});


      // Script para el botón de compartir
      const shareBtn = document.querySelector(".share-btn");
      const card1 = document.querySelector(".card1");
      const card2 = document.querySelector(".card2");
      const card3 = document.querySelector(".card3");
      const card4 = document.querySelector(".card4");
    
      // Inicialmente ocultamos los botones
      card1.setAttribute("data-toggle1", true);
      card2.setAttribute("data-toggle2", true);
      card3.setAttribute("data-toggle3", true);
      card4.setAttribute("data-toggle4", true);
    
      shareBtn.addEventListener("click", () => {
        if (card1.getAttribute("data-toggle1") === "true") {
          card1.setAttribute("data-toggle1", false);
          card2.setAttribute("data-toggle2", false);
          card3.setAttribute("data-toggle3", false);
          card4.setAttribute("data-toggle4", false);
        } else if (card1.getAttribute("data-toggle1") === "false") {
          card1.setAttribute("data-toggle1", true);
          card2.setAttribute("data-toggle2", true);
          card3.setAttribute("data-toggle3", true);
          card4.setAttribute("data-toggle4", true);
        }
      });
    
      // Add links to your social buttons
      card1.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/santiago-barbosa-903641209/", "_blank");
      });
    
      card2.addEventListener("click", () => {
        window.open("https://www.instagram.com/sbarbosarivas/", "_blank");
      });
    
      card3.addEventListener("click", () => {
        window.open("https://github.com/BARBOSA191919", "_blank");
      });

      card4.addEventListener("click", () => {
        window.open("https://discord.gg/ChznPA5q", "_blank");
      });
    
      // Script para el menú hamburguesa
      const barsMenu = document.querySelector(".bars__menu");
      const line1 = document.querySelector(".line1__bars-menu");
      const line2 = document.querySelector(".line2__bars-menu");
      const line3 = document.querySelector(".line3__bars-menu");
      const navLinks = document.querySelector(".nav-content ul");
    
      barsMenu.addEventListener("click", () => {
        line1.classList.toggle("activeline1__bars-menu");
        line2.classList.toggle("activeline2__bars-menu");
        line3.classList.toggle("activeline3__bars-menu");
        navLinks.classList.toggle("active");
      });
    
      // Función para cerrar el menú
      function closeMenu() {
        if (window.innerWidth <= 768) {
          line1.classList.remove("activeline1__bars-menu");
          line2.classList.remove("activeline2__bars-menu");
          line3.classList.remove("activeline3__bars-menu");
          navLinks.classList.remove("active");
        }
      }
    
      // Cerrar menú al redimensionar la ventana
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          navLinks.classList.remove("active");
          line1.classList.remove("activeline1__bars-menu");
          line2.classList.remove("activeline2__bars-menu");
          line3.classList.remove("activeline3__bars-menu");
        }
      });


