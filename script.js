// GSAP ScrollTrigger Register
gsap.registerPlugin(ScrollTrigger);

// Scene 1 Animation (Load Animation on Page Opening)
window.addEventListener('load', () => {
    let tl = gsap.timeline();
    tl.to("#sub-title", { opacity: 1, y: 0, duration: 1, delay: 0.2 })
      .to("#main-title", { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "-=0.5")
      .to("#hero-desc", { opacity: 1, y: 0, duration: 1 }, "-=0.7");
});

// Scene 2 Animation on Scroll (About Section)
gsap.to(".about-text", {
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.to(".about-img", {
    scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
});

// Scene 3 Animation on Scroll (Rooms Section)
gsap.to(".room-title", {
    scrollTrigger: {
        trigger: ".room-title",
        start: "top 85%",
    },
    opacity: 1,
    duration: 1
});

gsap.to(".room-card", {
    scrollTrigger: {
        trigger: ".room-card",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});
      
