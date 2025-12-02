const homeSwiperPosts = new Swiper(".hp-posts__slider", {
  slidesPerView: 1.01,
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  speed: 650,

  navigation: {
    nextEl: ".hp-posts__btn.next",
    prevEl: ".hp-posts__btn.prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 16,
    },

    480: {
      spaceBetween: 24,
    },
  },
});
