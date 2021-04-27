const prev = document.querySelector('.button-left');
const next = document.querySelector('.button-right');

const slides = document.querySelectorAll('.slide');

let index=0;

display(index);

function display(index){
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display='flex';
}

function nextSlide () {
  index++;
  if(index>slides.length-1){
    index=0; 
  }
 display(index);
}

function prevSlide () {
  index--;
  if(index<0){
    index=slides.length-1; 
  }

  display(index);
}

next.addEventListener('click' , nextSlide);
prev.addEventListener('click' , prevSlide);

$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay : true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  response:{
    0:{
      items: 1,
      nav: false
    },
    600:{
      items: 2,
      nav: false
    },
    1000:{
      items: 3,
      nav: false
    }
  }
});