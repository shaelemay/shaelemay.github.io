gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
// layers(#): background -> bird -> text (line 1, 2, 3, 4)

gsap.set('.bird', {left:'40%', bottom:'15%', scale:0.6});
gsap.set('.branch', {left:'250%', scale:0.7,top:'30%'})
gsap.set('.text', {autoAlpha:1})
gsap.set('.note', {opacity:1, left:0,top:-900})

ScrollTrigger.defaults({
  markers: true,
  scrub: true,
})


gsap.from('.bird', {
  scale: 0.4,
  y:-5,
  scrollTrigger: {
    trigger: '.bird',
    start:"top center",
    end: "center 100px",
    pin:true,
    onLeave: () => gsap.set('.bird', {position:'fixed', left:'40%', top:'-86%'}),
    animation: tl,
  }
})

gsap.to('.branch', {
  x:"-260%",
  scrollTrigger: {
    id: 'branch',
    trigger: '.bird',
    start: "top 50%",
    end: "+=300px",
  }})



gsap.from('.note', {
  x: 150,
  opacity:0,
  scrollTrigger: {
    id: 'note',
    trigger: '.branch',
    start: "bottom 150px",
    end:"+=100",
     onLeave: () => gsap.set('.note', {position:'fixed', left:0, top:'5%'}),
  }
})

// tl
//   .from('.bird', {scale:0.4, ease:'none', top:'10%'})
//   .from('.branch', {left:'90%',ease:'none'})
//   .from('.note', {left:'30%',opacity:0})


// ScrollTrigger.create({
//   id:"note",
//   trigger: ".note",
//   start: "top 10%",
//   end: "bottom 50%",
// })

// ScrollTrigger.create({
//   trigger: ".bird",
//   start: "top top",
//   end: "max",
// })