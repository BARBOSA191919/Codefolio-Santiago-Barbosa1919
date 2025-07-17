gsap.registerPlugin(ScrollTrigger);
gsap.set('.hero-main-container', { scale: 1 });

gsap.from(".hero-main-container", {
    scale: 1.45,
    duration: 2.8,
    ease: "power3.out",
});

gsap.to(".overlay", {
    opacity: 0,
    duration: 2.8,
    ease: "power3.out",
    onComplete: () => {
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
    },
});

const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
    const bounceTimeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
    });

    bounceTimeline.to(scrollIndicator, {
        y: 20,
        opacity: 0.6,
        duration:0.8,
        ease: "power1.inOut",
    });
}

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        scrub: 2,
        pin: true,
        start: "top top",
        end: "+=500",
        ease: "none",
    },
});

tl.set(".hero-main-container", {
    scale: 1.25,
});

tl.to(".hero-main-container", {
    scale: 1,
    duration: 1,
});


tl.to(
    ".hero-main-image",
    {
        opacity: 0,
        duration: 0.9,
    },
    "<+=0.5"
);

tl.to(
    ".hero-main-container",
    {
        backgroundSize: "28vh",
        duration: 1.5,
    },
    "<+=0.2"
);

tl.fromTo(
    ".hero-text",
    {
      backgroundImage: `radial-gradient(
        circle at 50% 200vh,
        rgba(240, 220, 180, 0) 0,
        rgba(112, 128, 144, 0.5) 90vh,
        rgb(20, 30, 48) 120vh,
        rgba(20, 30, 48, 0) 350vh
      )`,
    },
    {
      backgroundImage: `radial-gradient(
        circle at 50% 4vh,
        rgb(240, 220, 180) 0vh,
        rgb(78, 84, 117) 50vh,
        rgb(20, 30, 48) 90vh,
        rgba(20, 30, 48, 0) 140vh
      )`,
      duration: 3,
    },
    "<1.2"
  );
  
tl.fromTo(
    ".hero-text-logo",
    {
        opacity: 0,
        maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
    },
    {
        opacity: 1,
        maskImage: `radial-gradient(
circle at 50% 105.594%,
rgb(0, 0, 0) 62.9372%,
rgba(0, 0, 0, 0) 81.4686%
)`,
        duration: 3,
    },
    "<0.2"
);

tl.set(".hero-main-container", { opacity: 0 });

tl.to(".hero-1-container", { scale: 0.85, duration: 3 }, "<-=3");

tl.set(
    ".hero-1-container",
    {
        maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
    },
    "<+=2.1"
);

tl.to(
    ".hero-1-container",
    {
        maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
        duration: 2,
    },
    "<+=0.2"
);

tl.to(
    ".hero-text-logo",
    {
        opacity: 0,
        duration: 2,
    },
    "<1.5"
);

tl.set(".hero-1-container", { opacity: 0 });

