const shareBtn = document.querySelector(".share-btn");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

card1.setAttribute("data-toggle1", true);
card2.setAttribute("data-toggle2", true);
card3.setAttribute("data-toggle3", true);
card4.setAttribute("data-toggle4", true);

shareBtn.addEventListener("click", () => {
    const toggleState = card1.getAttribute("data-toggle1") === "true";
    card1.setAttribute("data-toggle1", !toggleState);
    card2.setAttribute("data-toggle2", !toggleState);
    card3.setAttribute("data-toggle3", !toggleState);
    card4.setAttribute("data-toggle4", !toggleState);
});

card1.addEventListener("click", () => window.open("https://www.linkedin.com/in/santiago-barbosa-903641209/", "_blank"));
card2.addEventListener("click", () => window.open("https://www.instagram.com/sbarbosarivas/", "_blank"));
card3.addEventListener("click", () => window.open("https://github.com/BARBOSA191919", "_blank"));
card4.addEventListener("click", () => window.open("https://discord.gg/ChznPA5q", "_blank"));

//footer-visibiliy
const footer = document.getElementById('footer');
let ticking = false;

function checkFooterVisibility() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
            footer.classList.toggle('footer-visible', scrollBottom);
            footer.classList.toggle('footer-hidden', !scrollBottom);
            ticking = false;
        });
        ticking = true;
    }
}

if (footer) {
    window.addEventListener('scroll', checkFooterVisibility, { passive: true });
    window.addEventListener('resize', checkFooterVisibility, { passive: true });
    checkFooterVisibility();
}
