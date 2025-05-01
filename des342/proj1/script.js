gsap.registerPlugin(ScrollTrigger);
// layers(#): background -> bird -> text (line 1, 2, 3, 4)

gsap.set('.bird', {left:'40%', bottom:'15%', scale:0.6});
gsap.set('.branch', {left:'250%', scale:0.7,top:'35%'})
gsap.set('.text', {autoAlpha:1})
gsap.set('.note', {opacity:0})
gsap.set('body', {'margin-bottom':300})

ScrollTrigger.defaults({
  markers: true,
  scrub: true,
})

// tl.from('.note', {x: 150, opacity:0})
let tl = gsap.timeline();

tl.to('.branch', {x:"-280%", ease: 'none'}, 1)
tl.to('.note', {opacity:1, y:0, x:0}, 1)

gsap.from('.bird', {
  scale: 0.4,
  y:-5,
  scrollTrigger: {
    id: 'bird',   
    trigger: '.bird',
    start:"top center",
    end:"${window.innerHeight",
    // onLeave: () => gsap.set('.bird', {position:'sticky', top:0}),
  }
})

ScrollTrigger.create({
  trigger: '.bird',
  start: 'top center',
  end: 'max',
  pin: true,
  pinSpacing: false,
  animation: tl
})

// gsap.from('.note', {
//   x: 150,
//   opacity:0,
//   scrollTrigger: {
//     id: 'note',
//     trigger: '.branch',
//     start: "bottom 150px",
//     end: '+=200',
//     //  onLeave: () => gsap.set('.note', {position:'fixed', left:0, top:'5%'}),
//   }
// })

// gsap.to('.note', {
//   scale:1.1,
//   left:'20%',
//   scrollTrigger:{
//     id: 'note-leave',
//     trigger: '.bird',
//     start: "top top",
//     end: '+=200',
//     onEnter: () => gsap.to('.branch', {x:'300%',duration:1,ease:'none'})
//   }
// }
// )
