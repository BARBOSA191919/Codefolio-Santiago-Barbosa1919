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
