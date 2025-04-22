gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    //x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 60%", 
        end: "top 40%",
        toggleActions: "play none none none",
        markers:true,
        toggleClass: "red"
    }
})