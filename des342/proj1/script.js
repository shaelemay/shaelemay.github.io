gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
// layers(#): background -> bird -> text (line 1, 2, 3, 4)

gsap.set('.bird', {left:'40%', scale:0.6});
gsap.set('.branch', {left:'40%', scale:0.8})
gsap.set('.text', {autoAlpha:1})

ScrollTrigger.defaults({
  markers: true,
  scrub: true,
  snap: 0.1,
})

tl
  .from('.bird', {scale:0.4, ease:'none'})
  .from('.branch', {left:'80%',ease:'none'})
  .from('.note', {left:'30%',opacity:0})

ScrollTrigger.create({
    id: "bird",
    trigger: ".bird",
    start: "top 10%",
    end: "bottom 50% +=500px",
    scrub:true,
});

ScrollTrigger.create({
    trigger: '.bird',
    start: "top top",
    end: "top top"
})

ScrollTrigger.create({
  id:"note",
  trigger: ".note",
  start: "top 10%",
  end: "bottom 50%",
})

ScrollTrigger.create({
  id: "bird-sticky",
  trigger: ".bird",
  start: "center center",
  end: "max",
  pin: true,
  pinSpacing: false,
  animation: tl,
})

ScrollTrigger.create({
  id: "branch",
  trigger: ".branch",
  start: "top 1000px",
  end:"max",
})

ScrollTrigger.create({
  id: "branch-sticky",
  trigger: ".branch",
  start: "top 200",
  end: "max",
  pin: true,
  pinSpacing: false,
})

function stick () {
  gsap.to('.branch' {position:'sticky'})
}
