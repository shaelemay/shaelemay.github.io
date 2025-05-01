gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin, MotionPathPlugin);


/* Containers for each line of the verse */
gsap.set('.container', {height:'100vh', width:'100vw','overflow-x':'hidden', })
gsap.set('.box1', {'background-color':'#FFFFFF'})
gsap.set('.box2', {'background-color':'#C8E9A0'})
gsap.set('.box3', {'background-color':'#CCCCFF'})
gsap.set('.box4', {'background-color':'#42213D'})

let div2Center = document.querySelect("div2").getBoundingClientRect().bottom;



gsap.set('.bird2', {bottom: 'div2Center'})

ScrollTrigger.defaults({
  markers: true,
  scrub: true,
})


let panels = gsap.utils.toArray(".container"),
  snaps = [], // will store just the starting scroll value of each of the panels
  panelTriggers = panels.map((panel, i) => {
    return ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      onRefresh: (self) => (snaps[i] = self.start)
    });
  });

ScrollTrigger.create({
  // you can add a trigger and start/end values if you'd like to limit the snapping to only part of the page. 
  snap(progress, self, direction) {
    let totalDistance = self.end - self.start,
        snapProgress = snaps.map((v) => v / totalDistance);
    return ScrollTrigger.snapDirectional(snapProgress)(progress, self.direction);
  }
});

/* Text */
gsap.set('.text', {position:'sticky', bottom:'20%', x:'20%'})

/* Triggger lines 2-3 to appear as divs appear on screen */

ScrollTrigger.defaults({
    markers: true,
    scrub: true,
    snap: {
      snapTo: 1 /10,
      duration: 0.1,
      delay: 0.1,
    },
  })
  

  /* Bird Follow */



  gsap.to('.bird', {
    scrollTrigger: {
      id: 'bird',
      trigger: '.box1',
      start: 'center top',
      end: '+= 4000px',
      // pin:true,
      // pinSpacing: false,
    }
  })

  scrollTrigger.create('.bird2', {
    scale: 0.8,
    scrollTrigger: {
      id: 'bird 2',
      trigger: '.box2',
      start: 'center top',
      end: '+=500px',
    }
  })