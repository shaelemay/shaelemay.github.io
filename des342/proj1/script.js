gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
// layers(#): background -> bird -> text (line 1, 2, 3, 4)

gsap.set('.bird', {left:'40%', scale:0.6});
gsap.set('.branch', {left:'40%', scale:0.8})

ScrollTrigger.defaults({
  markers: true,
})

tl
  .from('.bird', {scale:0.4, ease:'none'})
  .to('.bird', {ease:'none'})
  .from('.branch', {ease:'none'})

ScrollTrigger.create({
    id: "bird",
    trigger: ".bird",
    start: "top 30%",
    end: "bottom 50% +=500px",
    scrub:true,
    animation: tl,
});

ScrollTrigger.create({
  id: "bird-sticky",
  trigger: ".bird",
  start: "center 40%",
  end: "max",
  pin: true,
  pinSpacing: false,
})

ScrollTrigger.create({
  id: "branch",
  trigger: ".branch",
  start: "top 1300px",
  end:"+=500px",
  pin: true,
  pinSpacing:false,
  animation: tl,
})


// ScrollTrigger.create({ 
//   id: "bird-move",
//   trigger: ".bird",
//   start: "top 20%",
//   end: "center 30%",
//   scrub: true,

// });

// ScrollTrigger.create({

// })