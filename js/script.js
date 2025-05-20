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

      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".header-content", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.to(".social-icons", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.to("#navbar", {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });


      gsap.to(".cube-face-front", {
        rotateX: -90,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.to(".cube-face-bottom", {
        rotateX: -90,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.to("#navbar", {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar el h1
  const h1 = document.querySelector(".text h1");
  const text = h1.textContent;
  h1.innerHTML = ""; // Limpiar el contenido original

  // Separar cada letra en un span
  text.split("").forEach(char => {
    const span = document.createElement("span");
    if (char === " ") {
      span.className = "letter-space";
      span.innerHTML = "&nbsp;";
    } else {
      span.className = "letter";
      span.textContent = char;
    }
    h1.appendChild(span);
  });

  // Animación GSAP
  const letters = document.querySelectorAll(".letter");
  gsap.set(letters, {
    clipPath: "inset(100% 0 0 0)",
    opacity: 1
  });
  gsap.to(letters, {
    clipPath: "inset(0% 0 0 0)",
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.1,
    delay: 1.0 // Ajustado para esperar al preloader
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar el h1
  const h1 = document.querySelector(".text h1");
  const text = h1.textContent;
  h1.innerHTML = ""; // Limpiar el contenido original

  // Separar cada letra en un span
  text.split("").forEach(char => {
    const span = document.createElement("span");
    if (char === " ") {
      span.className = "letter-space";
      span.innerHTML = "&nbsp;";
    } else {
      span.className = "letter";
      span.textContent = char;
    }
    h1.appendChild(span);
  });

  // Animación GSAP
  const letters = document.querySelectorAll(".letter");
  gsap.set(letters, {
    clipPath: "inset(100% 0 0 0)",
    opacity: 1
  });
  gsap.to(letters, {
    clipPath: "inset(0% 0 0 0)",
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.1,
    delay: 1.0 // Ajustado para esperar al preloader
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todas las letras
  const letters = document.querySelectorAll(".letter");

  // Configurar estado inicial con GSAP
  gsap.set(letters, {
    clipPath: "inset(100% 0 0 0)", // Ocultar desde la parte inferior
    opacity: 1 // Asegurar visibilidad
  });

  // Animar cada letra con un efecto escalonado
  gsap.to(letters, {
    clipPath: "inset(0% 0 0 0)", // Revelar desde la parte inferior
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.1, // Retraso de 0.1s entre cada letra
    delay: 0.3 // Retraso inicial para sincronizar con la carga
  });
});



// Toggling Skill Tabs

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills-active');
        })

        target.classList.add('skills-active');

        tabs.forEach(tab => {
            tab.classList.remove('skills-active');
        })

        tab.classList.add('skills-active');
    })
})

//Mix it up Sorting

let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

// Active link changing

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener('click', activeWork));

//Portfolio Popup

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('work-button')){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
}

document.querySelector('.portfolio-popup-close').addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.work-img').src;
    document.querySelector('.portfolio-popup-subtitle span').innerHTML = portfolioItem.querySelector('.work-title').innerHTML;
    document.querySelector('.portfolio-popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

//Services Popup
const modalViews = document.querySelectorAll('.services-modal');
const modelBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

//Swiper Testimonial

let swiper = new Swiper(".testimonials-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

// Input Animation

const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})

// Scroll Section Active Link

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

// Activating Sidebar

const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    })
}


