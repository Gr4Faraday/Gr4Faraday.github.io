var swiper = new Swiper(".cardSlider", {
    spaceBetween: 30,
    height: 500,
    width: 250,
    centeredSlides: false,
    loop: true,
    loopedSlides: 2,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });