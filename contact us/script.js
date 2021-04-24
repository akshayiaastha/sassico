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