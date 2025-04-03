window.onload = function(){
    $("body").fadeIn();
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 



// document.addEventListener("DOMContentLoaded", function (event) {
//   const element = document.getElementById("test_button");
//   const tl = new TimelineMax({ repeat: -1 });

//   tl.to(element, 2, { x: 200, ease: "power1.out" })
//     .to(element, 2, { x: 0, ease: "power1.out" }); // Move back to the original position
//   //.addPause(1); // Pause for 1 second
//   const ele=document.getElementById("myname");
//   const eletl = new TimelineMax({repeat:-1});
//   eletl.to(ele, 0.8, {css:{color:"#907ff0"}, ease:Back.easeOut})
//   //eletl.reverse()
// })
