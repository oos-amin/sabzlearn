const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 800,
  spaceBetween: 40,
  grabCursor: true,

  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
