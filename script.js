gsap.registerPlugin(ScrollTrigger);

// --- PRE-LOADER: INDER PARADISE ---
window.addEventListener('load', () => {
    let loaderTl = gsap.timeline();
    
    loaderTl.to("#loader-title", { opacity: 1, duration: 1.5, ease: "power2.inOut" })
            .to("#loader-title", { scale: 1.1, duration: 1, ease: "power1.inOut" }, "-=0.5")
            .to("#intro-loader", { opacity: 0, duration: 1, display: "none", delay: 0.5 });
});


// --- CLOUD REVEAL EFFECT (Reel style) ---
// Hum ek timeline banayenge jo 'cloud-reveal' section ke scroll par trigger hogi

let revealTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#cloud-reveal",
        start: "top top", // Jab section top par aaye
        end: "+=300%", // 3x height tak scroll ho
        scrub: 1, // Scroll ke sath smooth chale (highly important)
        pin: true, // Section ko rok kar rakhe jabtak animation chale
        // markers: true // Debugging ke liye markers on kar sakte hain
    }
});

// Step 1: Text ko upar fade out karo
revealTl.to("#cloud-text-area", { y: -100, opacity: 0, duration: 1 }, 0);

// Step 2: White mask ko circle ki tarah bada karo (center se hotel reveal hoga)
revealTl.to("#white-mask", { 
    clipPath: "circle(100% at 50% 50%)", 
    duration: 3 
}, 0);


// --- SCENE BY SCENE ANIMATION (Neeche wale sections ke liye) ---

const scenes = document.querySelectorAll('.scene-content');

scenes.forEach((scene) => {
    const text = scene.querySelector('.content-text');
    const media = scene.querySelector('.content-media');

    gsap.fromTo([text, media], 
        { opacity: 0, y: 50 }, 
        {
            scrollTrigger: {
                trigger: scene,
                start: "top 75%", // Jab scene screen me 75% dikhe
                toggleActions: "play none none reverse" // Scroll up karne par reverse ho jaye
            },
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2, // Text aur image ke beech gap
            ease: "power2.out"
        }
    );
});
