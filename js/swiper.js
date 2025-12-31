const swiper1 = new Swiper(".swiper-1", {
  // Default parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 8000,
  loop: true,
  autoplay: {
    delay: 0,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    // when window width is >= 640px
    1025: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper(".swiper-2", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 2500,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1025: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
});
