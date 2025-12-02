const homeMatchesSlider = document.querySelector(
  ".hp-matchesSlider .matchesSlider"
);
if (homeMatchesSlider) {
  new Swiper(".hp-matchesSlider .matchesSlider", {
    spaceBetween: 8,
    speed: 1000,

    slidesPerView: "auto",
    navigation: {
      nextEl: ".hp-matchesSlider__btn.next",
      prevEl: ".hp-matchesSlider__btn.prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: "auto",
      },
    },
  });
}
