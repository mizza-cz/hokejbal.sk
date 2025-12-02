/*!
 * topStories.js
 */
(function () {
  const isActive = "is-active";
  const topStories = document.querySelectorAll(".js-topStory");
  const images = document.querySelectorAll(".js-topStory-img");
  const navItems = document.querySelectorAll(".js-topStory-activate");
  let activeNavItem = document.querySelector(".js-topStory-activate.is-active");

  if (topStories.length && navItems.length) {
    window.addEventListener("resize", () => {
      activeNavItem = document.querySelector(".js-topStory-activate.is-active");
    });

    const clear = () => {
      navItems.forEach((item) => {
        item.classList.remove(isActive);
      });
      topStories.forEach((item) => {
        item.classList.remove(isActive);
      });
    };

    const handleTopStory = (index) => {
      clear();
      const topStory = topStories[index];
      const navItem = navItems[index];
      if (topStory && navItem) {
        topStory.classList.add(isActive);
        navItem.classList.add(isActive);
      }
    };

    const handleImages = () => {
      images.forEach((img) => {
        img.src = img.src;
        img.addEventListener("load", () => {
          const placeholder = img.closest(".js-topStory")
            ? img
                .closest(".js-topStory")
                .querySelector(".js-topStory-imgPlaceholder")
            : img
                .closest(".js-topStory-activate")
                .querySelector(".js-topStory-imgPlaceholder");
          img.classList.add(isActive);
          placeholder.classList.remove(isActive);
        });
      });
    };

    handleImages();

    navItems.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        handleTopStory(index);
      });
    });
  }
})();
