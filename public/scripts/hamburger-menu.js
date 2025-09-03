
const hamburger = document.querySelector(".bars__menu");
const navContent = document.querySelector(".nav-content");
const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const body = document.body;

function toggleMenu() {
    hamburger.classList.toggle("active");
    navContent.classList.toggle("active");
    body.classList.toggle("no-scroll");
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navContent.classList.remove("active");
    body.classList.remove("no-scroll");
    line1__bars.classList.remove("activeline1__bars-menu");
    line2__bars.classList.remove("activeline2__bars-menu");
    line3__bars.classList.remove("activeline3__bars-menu");
}

hamburger.addEventListener("click", toggleMenu);