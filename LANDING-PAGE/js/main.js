// swipper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   menu open close 
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
};

window.onscroll = () =>{
    menu.classList.remove('move');
    navbar.classList.remove('open-menu');
};

// scroll reveal 
// const animate = ScrollReveal({
//     origin: "bottom",
//     ditance: "60px",
//     duration: "2500",
//     delay: "400",
// });

// animate.reveal(".nav");
// animate.reveal(".home-text", {origin: "left"});
// animate.reveal(".home-img", {origin: "bottom"});

ScrollReveal({ distance: '60px' });
ScrollReveal({ duration:'2500' });
ScrollReveal({ delay: '400' });
ScrollReveal().reveal('.nav', { origin: 'top' });
ScrollReveal().reveal('.home-text', { origin: 'left' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.ser-box', { interval:100});
ScrollReveal().reveal('.product-box', { interval:100});
ScrollReveal().reveal('.team-box', { interval:100});
ScrollReveal().reveal('.book-data', { interval:100});