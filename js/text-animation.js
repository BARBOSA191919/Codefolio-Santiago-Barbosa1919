document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector(".text h1");
    const text = h1.textContent;
    h1.innerHTML = "";

    text.split("").forEach(char => {
        const span = document.createElement("span");
        if (char === " ") {
            span.className = "letter-space";
            span.innerHTML = " ";
        } else {
            span.className = "letter";
            span.textContent = char;
        }
        h1.appendChild(span);
    });

    const letters = document.querySelectorAll(".letter");
    gsap.set(letters, { clipPath: "inset(100% 0 0 0)", opacity: 1 });
    gsap.to(letters, {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.1,
        delay: 1.0
    });
});