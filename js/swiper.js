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

document.getElementsByClassName("swiper-container").addEventListener("mouseover", function() {
  console.log("(´・ω・｀)");
  document.getElementsByClassName("swiper-button-prev").style.display = "block";
}, false);

// document.getElementById("swiper-container").addEventListener("mouseout", function() {
//   document.getElementById("dropside_menu1").style.display = "none";
//   document.getElementById("side_menu1").style.background = "none";
// }, false);