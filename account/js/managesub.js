var slideIndex = 1;
$(window).resize(function() {
  console.log($(window).width())
  if ($(window).width() >766){
    document.querySelector(".more").style.display="block";
    document.querySelector(".curr").style.display="block";
    document.querySelector("#curr").querySelector('h6').classList.add("active1");
    document.querySelector("#curr").classList.remove("disabled");
    document.querySelector("#more").querySelector('h6').classList.remove("active1");
    document.querySelector("#more").classList.add("disabled");
  }
  else{       document.querySelector(".more").style.display="none";
  document.querySelector(".curr").style.display="block";
  document.querySelector("#curr").querySelector('h6').classList.add("active1");
  document.querySelector("#curr").classList.remove("disabled");
  document.querySelector("#more").querySelector('h6').classList.remove("active1");
  document.querySelector("#more").classList.add("disabled");
//  let x=document.classList.contains("disabled");
//     if(x.classList.contains("disabled")&&x.id=="curr"){
//       x.classList.remove("disabled");
//       x.querySelector('h6').classList.add("active1");
//       let y=document.querySelector("#more");
//       y.querySelector('h6').classList.remove("active1");
//       y.classList.add("disabled");
//       document.querySelector(".curr").style.display="block";
//       document.querySelector(".more").style.display="none";
//     }
//     else if(x.classList.contains("disabled")&&x.id=="more"){
//       x.classList.remove("disabled");
//       x.querySelector('h6').classList.add("active1");
//       let y=document.querySelector("#curr");
//     y.querySelector('h6').classList.remove("active1");
//     y.classList.add("disabled");
//       document.querySelector(".more").style.display="block";
//       document.querySelector(".curr").style.display="none";
//     }
  }
});

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {

      slides[i].classList.remove("d-flex");
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].classList.add("d-flex") 
  slides[slideIndex-1].style.display = "block";  
 

}
function curcncl(x){
    let y=document.querySelector(".curr");
   y.innerHTML=""
}
// 
function delsub(x){
  $($(x).attr('href')).remove();
}
function saveadd(x){

  if ($(window).width() < 576){
if(x.classList.contains("disabled")&&x.id=="curr"){
  x.classList.remove("disabled");
  x.querySelector('h6').classList.add("active1");
  let y=document.querySelector("#more");
  y.querySelector('h6').classList.remove("active1");
  y.classList.add("disabled");
  document.querySelector(".curr").style.display="block";
  document.querySelector(".more").style.display="none";
}
else if(x.classList.contains("disabled")&&x.id=="more"){
  x.classList.remove("disabled");
  x.querySelector('h6').classList.add("active1");
  let y=document.querySelector("#curr");
y.querySelector('h6').classList.remove("active1");
y.classList.add("disabled");
  document.querySelector(".more").style.display="block";
  document.querySelector(".curr").style.display="none";
}
}
}
