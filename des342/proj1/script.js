let tl = gsap.timeline();
tl.to("#line2", { opacity: 0, yPerecnt: -50 });
tl.from("#line3", { yPercent: 100, opacity: 0 });

ScrollTrigger.create({
  trigger: "#line1",
  start: "top top",
  end: "bottom top",
  pin: true,
  scrub: true,
  markers: true,
  animation: tl //added timeline
});

