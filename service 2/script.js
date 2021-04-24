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

function toggle(){
  var video=document.querySelector(".video-content");
  video.classList.toggle("active");
}

function toggle2(){
  var country_content=document.querySelector(".country-content");
  country_content.classList.toggle("active");
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
  if(window.pageYOffset > 120){
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active"); 
  }
})