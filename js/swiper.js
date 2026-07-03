const commonSettings = {
  direction: "horizontal",
  loop: true,
  speed: 800,
  spaceBetween: 20,
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
};

const swiper = new Swiper(".swiper", commonSettings);

const popularSwiper = new Swiper(".popular__swiper", {
  ...commonSettings,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
});

const presellSwiper = new Swiper(".presell__swiper", {
  ...commonSettings,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});
