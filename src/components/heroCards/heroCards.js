const heroCards = document.querySelector(".heroCards__inner");
if (heroCards) {
  new Swiper(".heroCards__inner", {
    spaceBetween: 8,
    speed: 1000,

    slidesPerView: "3",
    navigation: {
      nextEl: ".heroCards__btn.next",
      prevEl: ".heroCards__btn.prev",
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
