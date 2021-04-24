setTimeout(function () {
  $('#preloaderbody').fadeOut();// or fade, css //display however you'd like.
  }, 2500);


$("body").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");

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

// REVEAL ANIMATION

window.addEventListener("scroll" ,reveal) ;

function reveal(){
  var reveal = document.querySelectorAll(".reveal");

  for(var i = 0 ; i <reveal.length ; i++){
    var windowHeight = window.innerHeight ;
    var revealTop = reveal[i].getBoundingClientRect().top;
    var revealPoint = 0;

    if(revealTop < windowHeight-revealPoint){
      reveal[i].classList.add("active") ;
    }else{
      reveal[i].classList.remove("active")
    }
  }
}



// document.querySelector("button").addEventListener("mouseover", function(){
//   var audio = new Audio("Sounds/Om_idle05.wav");
//   audio.play() ;
// });