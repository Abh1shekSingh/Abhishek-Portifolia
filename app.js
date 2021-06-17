
$("body").mousemove(function(event) {
    var eye = $(" .eye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + -10;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });


  // CHANGING TO COPY ICON

  $(document).ready(function () {
    $(".contact-box").hover(
      function () {
        $(this).addClass("hover-active");
      },
      function () {
        $(this).removeClass("hover-active");
      }
    );
  });


  // CLICK TO COPY TEXT


function copyToClipboard(text) {
  var input = document.body.appendChild(document.createElement("input"));
  input.value = text;
  input.focus();
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
};


 //CATSOUND
document.querySelector(".Hire .catvoicearea").addEventListener("mouseover",function()
{
  var cat_meow = new Audio("sounds/Cat_meow.wav");
  cat_meow.play();
});
 

$('#mail').click(function($e) {
  $e.preventDefault();
  doSomething();
});


// ANIMATION

window.addEventListener("scroll",function(){
  let content = document.querySelector(".rock");
  
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
    content.classList.add("active");
    
  }
});



