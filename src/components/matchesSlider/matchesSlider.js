const matchesSlider = document.querySelector(".matchesSlider");
if (matchesSlider) {
  new Swiper(".matchesSlider", {
    spaceBetween: 8,
    speed: 1000,

    slidesPerView: "auto",

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
