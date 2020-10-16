var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});

document.querySelector(".swiper-wrapper").addEventListener("mouseover", function() {  
  document.querySelector(".swiper-button-prev").style.display = "block";
  document.querySelector(".swiper-button-next").style.display = "block";
});

document.querySelector(".swiper-button-prev").addEventListener("mouseover", function() {  
  document.querySelector(".swiper-button-prev").style.display = "block";
  document.querySelector(".swiper-button-next").style.display = "block";
});

document.querySelector(".swiper-button-next").addEventListener("mouseover", function() {  
  document.querySelector(".swiper-button-prev").style.display = "block";
  document.querySelector(".swiper-button-next").style.display = "block";
});

document.querySelector(".swiper-wrapper").addEventListener("mouseout", function() {  
  document.querySelector(".swiper-button-prev").style.display = "none";
  document.querySelector(".swiper-button-next").style.display = "none";
});


// document.getElementById("swiper-container").addEventListener("mouseout", function() {
//   document.getElementById("dropside_menu1").style.display = "none";
//   document.getElementById("side_menu1").style.background = "none";
// }, false);