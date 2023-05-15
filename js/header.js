

//header

const binggrae_header = document.querySelector("header");
const binggrae_nav = document.querySelector("nav");
const binggrae_navList = document.querySelectorAll(".binggrae_category ul");

window.addEventListener("scroll" , function(){


  var binggrae_scrollY = window.scrollY;


if(binggrae_scrollY > 10){

  binggrae_header.classList.add("active");


  }else{

    binggrae_header.classList.remove("active");

  }


})


//nav

function binggrae_menu(){


binggrae_navList[0].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[0].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[1].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[1].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[2].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[2].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[3].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[3].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[4].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[4].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

binggrae_navList[5].addEventListener ("mouseover" , function(){
 
  binggrae_nav.classList.add("active");
 
  });
binggrae_navList[5].addEventListener ("mouseout" , function(){
 
  binggrae_nav.classList.remove("active");
 
  });

}


binggrae_menu();


binggrae_nav.addEventListener("mouseover" , function(ev){

  this.classList.add("active");

  
})

binggrae_nav.addEventListener("mouseout" , function(ev){

  this.classList.remove("active");

  
})

//mobilbe_menu

const mobile_menu = document.querySelector(".mobile_menu");

var mobile_click = false;

mobile_menu.addEventListener("click" , function(){

  mobile_click =! mobile_click;

  if(mobile_click == true){
 
  binggrae_nav.classList.add("active");

  }else{

  binggrae_nav.classList.remove("active");

  }

})